
"use client";

import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

type PopupData = {
    imageUrl: string;
    isEnabled: boolean;
};

export function WelcomePopup() {
    const [popupData, setPopupData] = useState<PopupData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPopupData = async () => {
            try {
                const popupDocRef = doc(db, 'popup', 'main-popup');
                const docSnap = await getDoc(popupDocRef);
                if (docSnap.exists()) {
                    const data = docSnap.data() as PopupData;
                    setPopupData(data);
                    
                    const popupShown = sessionStorage.getItem('popupShown');
                    if (data.isEnabled && !popupShown) {
                        setIsOpen(true);
                        sessionStorage.setItem('popupShown', 'true');
                    }
                }
            } catch (error) {
                console.error("Error fetching popup data: ", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPopupData();
    }, []);

    if (isLoading || !popupData || !popupData.isEnabled || !isOpen) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="p-0 border-none w-auto max-w-2xl bg-transparent shadow-none">
                <div className="relative">
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => setIsOpen(false)} 
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

