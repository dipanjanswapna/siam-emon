import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";

const galleryImages = [
  { src: "https://placehold.co/600x400.png", alt: "Rally in the city square", hint: "political rally" },
  { src: "https://placehold.co/600x400.png", alt: "Meeting with local farmers", hint: "meeting farmers" },
  { src: "https://placehold.co/600x400.png", alt: "Inaugurating a new school", hint: "school inauguration" },
  { src: "https://placehold.co/600x400.png", alt: "Speaking at a press conference", hint: "press conference" },
  { src: "https://placehold.co/600x400.png", alt: "Campaign trail on the move", hint: "campaigning people" },
  { src: "https://placehold.co/600x400.png", alt: "Discussing policy with experts", hint: "policy discussion" },
  { src: "https://placehold.co/600x400.png", alt: "Celebrating a festival with community", hint: "community festival" },
  { src: "https://placehold.co/600x400.png", alt: "Visiting a local hospital", hint: "hospital visit" },
  { src: "https://placehold.co/600x400.png", alt: "Interacting with young voters", hint: "young voters" },
];

export default function GalleryPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Camera className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">Moments from the Movement</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            A glimpse into our journey across Bengal, connecting with people from all walks of life.
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
