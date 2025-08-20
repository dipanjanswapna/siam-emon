
"use client";

import { useState, useEffect } from 'react';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from 'next/image';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

type PromotionalPopupData = {
    enabled: boolean;
    displayFrequency: 'every-load' | 'once-per-session';
    imageUrl: string;
    imageHint: string;
};

export default function PromotionalPopup() {
    const [popupData, setPopupData] = useState<PromotionalPopupData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const popupDocRef = doc(db, "promotionalPopups", "settings");
        const unsubscribe = onSnapshot(popupDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data() as PromotionalPopupData;
                setPopupData(data);

                const sessionKey = `popupShown_${data.imageUrl}`; 
                const hasBeenShown = sessionStorage.getItem(sessionKey);

                if (data.enabled) {
                    if (data.displayFrequency === 'once-per-session' && hasBeenShown) {
                        setIsOpen(false);
                    } else {
                        setIsOpen(true);
                    }
                } else {
                    setIsOpen(false);
                }

            } else {
                setPopupData(null);
                setIsOpen(false);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        if (popupData && popupData.displayFrequency === 'once-per-session') {
            const sessionKey = `popupShown_${popupData.imageUrl}`;
            sessionStorage.setItem(sessionKey, 'true');
        }
    };

    if (isLoading || !isOpen || !popupData) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="p-0 border-none bg-transparent shadow-none w-[95vw] max-w-lg sm:max-w-xl md:max-w-2xl">
                <div className="relative">
                    <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden">
                        <Image 
                           src={popupData.imageUrl}
                           alt={popupData.imageHint}
                           fill
                           className="object-contain"
                           data-ai-hint={popupData.imageHint}
                        />
                    </div>
                     <Button 
                        variant="destructive" 
                        size="icon" 
                        onClick={handleClose} 
                        className="absolute -top-3 -right-3 rounded-full h-8 w-8 z-10"
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">বন্ধ করুন</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

