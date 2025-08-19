
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
                setPopupData(data); // Always update state with latest data

                const sessionKey = `popup_closed_${data.imageUrl}`;
                const hasBeenClosedThisSession = sessionStorage.getItem(sessionKey);

                if (data.isEnabled && !hasBeenClosedThisSession) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            } else {
                // If doc doesn't exist, disable popup
                setPopupData(null);
                setIsOpen(false);
            }
            setIsLoading(false);
        }, (error) => {
            console.error("Error fetching popup data: ", error);
            setIsLoading(false);
        });

        // Cleanup listener on component unmount
        return () => unsubscribe();
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (popupData) {
            // Mark this specific image URL as closed for this session
            const sessionKey = `popup_closed_${popupData.imageUrl}`;
            sessionStorage.setItem(sessionKey, 'true');
        }
    }

    if (isLoading || !popupData || !popupData.isEnabled || !isOpen) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent 
                className="p-0 border-none w-auto max-w-4xl bg-transparent shadow-none"
                onInteractOutside={(e) => {
                    e.preventDefault();
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
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                            src={popupData.imageUrl}
                            alt="Welcome Popup"
                            fill
                            className="object-contain"
                            data-ai-hint="advertisement popup"
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
