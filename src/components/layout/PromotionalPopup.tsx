
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type PromotionalPopupData = {
    enabled: boolean;
    imageUrl: string;
    displayFrequency: 'every-load' | 'once-per-session' | 'once-per-day';
};

export function PromotionalPopup() {
    const [popupData, setPopupData] = useState<PromotionalPopupData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchPopupData = async () => {
            try {
                const popupDoc = await getDoc(doc(db, "siteSettings", "promotional-popup"));
                if (popupDoc.exists()) {
                    setPopupData(popupDoc.data() as PromotionalPopupData);
                }
            } catch (error) {
                console.error("Error fetching promotional popup data: ", error);
            }
        };

        fetchPopupData();
    }, []);

    useEffect(() => {
        setIsReady(true);
        if (!popupData?.enabled) return;

        const handlePopupVisibility = () => {
            const now = new Date().getTime();

            switch (popupData.displayFrequency) {
                case 'every-load':
                    setIsOpen(true);
                    break;
                case 'once-per-session':
                    const sessionSeen = sessionStorage.getItem("hasSeenPromotionalPopup");
                    if (!sessionSeen) {
                        setIsOpen(true);
                        sessionStorage.setItem("hasSeenPromotionalPopup", "true");
                    }
                    break;
                case 'once-per-day':
                    const daySeenTimestamp = localStorage.getItem("lastSeenPromotionalPopup");
                    if (daySeenTimestamp) {
                        const oneDay = 24 * 60 * 60 * 1000;
                        if (now - parseInt(daySeenTimestamp, 10) > oneDay) {
                            setIsOpen(true);
                            localStorage.setItem("lastSeenPromotionalPopup", now.toString());
                        }
                    } else {
                        setIsOpen(true);
                        localStorage.setItem("lastSeenPromotionalPopup", now.toString());
                    }
                    break;
                default:
                    // Default to once per session if frequency is not set
                    const defaultSessionSeen = sessionStorage.getItem("hasSeenPromotionalPopup");
                     if (!defaultSessionSeen) {
                        setIsOpen(true);
                        sessionStorage.setItem("hasSeenPromotionalPopup", "true");
                    }
                    break;
            }
        };

        handlePopupVisibility();

    }, [popupData]);

    const handleClose = () => {
        setIsOpen(false);
    };
    
    if (!isReady || !isOpen || !popupData || !popupData.enabled || !popupData.imageUrl) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="p-0 bg-transparent border-none shadow-none w-[95vw] max-w-md sm:max-w-xl md:max-w-md">
                 <DialogHeader className="sr-only">
                    <DialogTitle>Promotional Offer</DialogTitle>
                </DialogHeader>
                <div className="relative w-full aspect-[4/5]">
                    <Image
                        src={popupData.imageUrl}
                        alt="Promotional Banner"
                        fill
                        className="object-contain rounded-lg"
                    />
                </div>
                 <Button
                    variant="destructive"
                    size="icon"
                    onClick={handleClose}
                    className="absolute top-1 right-1 z-50 rounded-full h-8 w-8 hover:bg-destructive/80"
                >
                    <X className="h-5 w-5" />
                    <span className="sr-only">বন্ধ করুন</span>
                </Button>
            </DialogContent>
        </Dialog>
    );
}
