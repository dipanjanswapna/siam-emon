
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
            try {
                const galleryCollection = collection(db, "gallery");
                const gallerySnapshot = await getDocs(galleryCollection);
                const dbImages = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
                if (dbImages.length > 0) {
                    setGalleryImages(dbImages);
                } else {
                     setGalleryImages([
                        {id: "1", src: "https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg", alt: "Manisha Chakrabarty", hint: "politician portrait"},
                        {id: "2", src: "https://i.postimg.cc/Gpd2g0x3/news-1.jpg", alt: "Campaign Rally", hint: "political rally"},
                        {id: "3", src: "https://i.postimg.cc/C5YgZpLz/news-2.jpg", alt: "Public Speaking", hint: "public speaking"},
                        {id: "4", src: "https://i.postimg.cc/Pq2Y5YVp/news-3.jpg", alt: "Meeting with locals", hint: "community meeting"},
                        {id: "5", src: "https://i.postimg.cc/DydxCq5b/manisha-banner.jpg", alt: "Campaign Banner", hint: "political banner"},
                        {id: "6", src: "https://i.postimg.cc/t4G2wDk1/male-student-1.jpg", alt: "Supporters", hint: "political supporters"},
                    ]);
                }
            } catch (error) {
                console.error("Error fetching gallery images, using fallback.", error);
                 setGalleryImages([
                    {id: "1", src: "https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg", alt: "Manisha Chakrabarty", hint: "politician portrait"},
                    {id: "2", src: "https://i.postimg.cc/Gpd2g0x3/news-1.jpg", alt: "Campaign Rally", hint: "political rally"},
                    {id: "3", src: "https://i.postimg.cc/C5YgZpLz/news-2.jpg", alt: "Public Speaking", hint: "public speaking"},
                    {id: "4", src: "https://i.postimg.cc/Pq2Y5YVp/news-3.jpg", alt: "Meeting with locals", hint: "community meeting"},
                    {id: "5", src: "https://i.postimg.cc/DydxCq5b/manisha-banner.jpg", alt: "Campaign Banner", hint: "political banner"},
                    {id: "6", src: "https://i.postimg.cc/t4G2wDk1/male-student-1.jpg", alt: "Supporters", hint: "political supporters"},
                ]);
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchGalleryImages();
    }, []);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Camera className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">প্রচারণার গ্যালারি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী প্রচারণার কিছু বিশেষ মুহূর্ত, যা মানুষের ভালোবাসা ও সমর্থনে পূর্ণ।
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
             Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="overflow-hidden group shadow-lg bg-card">
                    <Skeleton className="w-full aspect-[3/2]" />
                </Card>
             ))
          ) : (
            galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden group shadow-lg bg-card">
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
