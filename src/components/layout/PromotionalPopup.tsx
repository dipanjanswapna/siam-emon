"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type PromotionalPopupData = {
    enabled: boolean;
    imageUrl: string;
    displayFrequency: 'every-load' | 'once-per-session' | 'once-per-day';
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    showOnMobile: boolean;
    showOnDesktop: boolean;
};

export function PromotionalPopup() {
    const [popupData, setPopupData] = useState<PromotionalPopupData | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        setIsClient(true);
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
        if (!isClient || !popupData?.enabled) return;

        if ((isMobile && !popupData.showOnMobile) || (!isMobile && !popupData.showOnDesktop)) {
            return;
        }

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
                    const defaultSessionSeen = sessionStorage.getItem("hasSeenPromotionalPopup");
                     if (!defaultSessionSeen) {
                        setIsOpen(true);
                        sessionStorage.setItem("hasSeenPromotionalPopup", "true");
                    }
                    break;
            }
        };

        const timer = setTimeout(handlePopupVisibility, 2000); 

        return () => clearTimeout(timer);

    }, [popupData, isMobile, isClient]);

    const handleClose = () => {
        setIsOpen(false);
    };
    
    if (!isClient || !isOpen || !popupData || !popupData.enabled || !popupData.imageUrl) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="p-0 bg-card border-border shadow-2xl w-[80vw] max-w-[250px] rounded-xl overflow-hidden">
                 <DialogHeader className="sr-only">
                    <DialogTitle>{popupData.title || 'Promotional Offer'}</DialogTitle>
                    {popupData.description && <DialogDescription>{popupData.description}</DialogDescription>}
                </DialogHeader>
                <div className="relative">
                    <Button
                        variant="destructive"
                        size="icon"
                        onClick={handleClose}
                        className="absolute top-2 right-2 z-10 rounded-full h-8 w-8 bg-black/50 hover:bg-black/70 text-white"
                    >
                        <X className="h-5 w-5" />
                        <span className="sr-only">বন্ধ করুন</span>
                    </Button>
                    <div className="relative w-full aspect-square">
                        <Image
                            src={popupData.imageUrl}
                            alt={popupData.title || "Promotional Banner"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-center">
                        {popupData.title && <h2 className="text-xl font-bold font-headline text-foreground">{popupData.title}</h2>}
                        {popupData.description && <p className="text-muted-foreground mt-2 font-body text-sm">{popupData.description}</p>}
                        {popupData.buttonText && popupData.buttonLink && (
                             <Button asChild className="mt-4 font-headline" size="sm">
                                <Link href={popupData.buttonLink}>{popupData.buttonText}</Link>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
