import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "শহরের চত্বরে সমাবেশ", hint: "political rally" },
  { src: "https://placehold.co/600x400.png", alt: "স্থানীয় কৃষকদের সাথে বৈঠক", hint: "meeting farmers" },
  { src: "https://placehold.co/600x400.png", alt: "নতুন স্কুল উদ্বোধন", hint: "school inauguration" },
  { src: "https://placehold.co/600x400.png", alt: "সংবাদ সম্মেলনে ভাষণ", hint: "press conference" },
  { src: "https://placehold.co/600x400.png", alt: "চলমান নির্বাচনী প্রচারণা", hint: "campaigning people" },
  { src: "https://placehold.co/600x400.png", alt: "বিশেষজ্ঞদের সাথে নীতি আলোচনা", hint: "policy discussion" },
  { src: "https://placehold.co/600x400.png", alt: "সম্প্রদায়ের সাথে উৎসব উদযাপন", hint: "community festival" },
  { src: "https://placehold.co/600x400.png", alt: "স্থানীয় হাসপাতাল পরিদর্শন", hint: "hospital visit" },
  { src: "https://placehold.co/600x400.png", alt: "তরুণ ভোটারদের সাথে মতবিনিময়", hint: "young voters" },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Camera className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আন্দোলনের মুহূর্ত</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            সারা বাংলা জুড়ে আমাদের যাত্রার এক ঝলক, জীবনের সব স্তরের মানুষের সাথে সংযোগ স্থাপন।
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group shadow-lg">
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
          ))}
        </div>
      </div>
    </div>
  );
}
