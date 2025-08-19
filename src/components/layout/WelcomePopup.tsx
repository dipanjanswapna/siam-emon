
"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
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
                const lastImageUrl = sessionStorage.getItem('lastPopupImageUrl');

                // If popup is enabled and either the image has changed or it's a new session
                if (data.isEnabled) {
                     // Check if the popup was closed in this session
                    const closedInSession = sessionStorage.getItem('popupClosed');
                    // If image changed, we should show it again, ignoring if it was closed
                    if (lastImageUrl !== data.imageUrl) {
                        setIsOpen(true);
                        sessionStorage.setItem('lastPopupImageUrl', data.imageUrl);
                        sessionStorage.removeItem('popupClosed'); // Reset closed status on new image
                    } else if (!closedInSession) {
                        setIsOpen(true);
                    }
                } else {
                    setIsOpen(false);
                }
                setPopupData(data);
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
        sessionStorage.setItem('popupClosed', 'true');
    }

    if (isLoading || !popupData || !popupData.isEnabled || !isOpen) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="p-0 border-none w-auto max-w-2xl bg-transparent shadow-none">
                <div className="relative">
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={handleClose}
                        className="absolute -top-10 right-0 z-50 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80"
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
