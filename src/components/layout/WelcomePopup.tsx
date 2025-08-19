
"use client";

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type PopupData = {
    imageUrl: string;
    isEnabled: boolean;
};

export function WelcomePopup() {
    const [popupData, setPopupData] = useState<PopupData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const popupDocRef = doc(db, 'popup', 'main-popup');
        
        const unsubscribe = onSnapshot(popupDocRef, (docSnap) => {
            setIsLoading(true);
            if (docSnap.exists()) {
                const data = docSnap.data() as PopupData;
                
                const hasBeenClosedThisSession = sessionStorage.getItem(`popup_closed_${data.imageUrl}`);
                
                setPopupData(data);

                if (data.isEnabled && !hasBeenClosedThisSession) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            } else {
                setPopupData(null);
                setIsOpen(false);
            }
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching popup data: ", error);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (popupData) {
            const sessionKey = `popup_closed_${popupData.imageUrl}`;
            sessionStorage.setItem(sessionKey, 'true');
        }
    }

    if (isLoading || !popupData || !popupData.isEnabled || !isOpen) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if(!open) handleClose()}}>
            <DialogContent 
                className="p-0 border-none w-auto max-w-lg bg-transparent shadow-none"
                onInteractOutside={(e) => {
                    handleClose();
                }}
            >
                <div className="relative">
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleClose}
                        className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-50 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80"
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">বন্ধ করুন</span>
                    </Button>
                    <div className="relative w-full aspect-[3/4] max-w-[80vw] max-h-[80vh] bg-card rounded-lg overflow-hidden">
                        <Image
                            src={popupData.imageUrl}
                            alt="Welcome Popup"
                            fill
                            className="object-contain"
                            data-ai-hint="advertisement popup"
                            priority
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
