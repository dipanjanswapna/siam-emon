
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";

type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    hint: string;
};

export default function GalleryPage() {
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGalleryImages = async () => {
            setIsLoading(true);
            const galleryCollection = collection(db, "gallery");
            const gallerySnapshot = await getDocs(galleryCollection);
            const galleryList = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
            setGalleryImages(galleryList);
            setIsLoading(false);
        };
        fetchGalleryImages();
    }, []);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Camera className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">ক্যাম্পেইন এর মুহূর্ত</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            সারা বাংলা জুড়ে আমাদের যাত্রার এক ঝলক, জীবনের সব স্তরের মানুষের সাথে সংযোগ স্থাপন।
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
             Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="overflow-hidden group shadow-lg">
                    <Skeleton className="w-full aspect-[3/2]" />
                </Card>
             ))
          ) : (
            galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden group shadow-lg">
                <div className="relative w-full aspect-[3/2]">
                    <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.hint}
                    />
                </div>
                </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
