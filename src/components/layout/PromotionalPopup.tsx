
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
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const popupDocRef = doc(db, "promotionalPopups", "settings");
        const unsubscribe = onSnapshot(popupDocRef, (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data() as PromotionalPopupData;
                setPopupData(data);
            } else {
                setPopupData(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
      // This effect runs only on the client, after the component has mounted.
      // This prevents hydration errors from accessing sessionStorage on the server.
      if (!isLoading && popupData) {
          const sessionKey = `popupShown_${popupData.imageUrl}`;
          const hasBeenShown = sessionStorage.getItem(sessionKey);

          if (popupData.enabled) {
              if (popupData.displayFrequency === 'once-per-session' && hasBeenShown) {
                  setIsOpen(false);
              } else {
                  setIsOpen(true);
              }
          } else {
              setIsOpen(false);
          }
      } else if (!isLoading && !popupData) {
          setIsOpen(false);
      }
      setIsReady(true);
    }, [popupData, isLoading]);


    const handleClose = () => {
        setIsOpen(false);
        if (popupData && popupData.displayFrequency === 'once-per-session') {
            const sessionKey = `popupShown_${popupData.imageUrl}`;
            sessionStorage.setItem(sessionKey, 'true');
        }
    };

    if (!isReady || isLoading || !isOpen || !popupData) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="p-0 border-none bg-transparent shadow-none w-[95vw] max-w-md">
                <div className="relative">
                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
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
                        className="absolute top-1 right-1 rounded-full h-8 w-8 z-10"
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">বন্ধ করুন</span>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
