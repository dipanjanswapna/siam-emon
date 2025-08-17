
"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Camera } from "lucide-react";

const researchActivities = [
  {
    title: "স্কিল ডেভেলপমেন্ট ওয়ার্কশপ",
    description: "৬০০+ শিক্ষার্থী নিয়ে আয়োজিত হয়েছে তিন দিনব্যাপী “হাতে-কলমে মাইক্রোসফট অফিস” ট্রেনিং, যেখানে Word, Excel, PowerPoint-সহ প্রয়োজনীয় অফিস সফটওয়্যারে হাতে-কলমে শেখানো হয়েছে।",
    images: [
      { src: "https://placehold.co/800x600.png", alt: "ওয়ার্কশপের অংশগ্রহণকারীরা কম্পিউটারে কাজ করছেন", hint: "students workshop" },
      { src: "https://placehold.co/800x600.png", alt: "প্রশিক্ষক শিক্ষার্থীদের সহায়তা করছেন", hint: "instructor teaching" },
      { src: "https://placehold.co/800x600.png", alt: "শিক্ষার্থীরা মনযোগ সহকারে শুনছেন", hint: "students listening" },
    ],
  },
  {
    title: "সেমিনার ও আলোচনা সভা",
    description: "গবেষণার নতুন দিক এবং প্রকাশনার গুরুত্ব নিয়ে আয়োজিত সেমিনারে দেশের খ্যাতনামা গবেষক ও শিক্ষাবিদরা উপস্থিত ছিলেন।",
    images: [
        { src: "https://placehold.co/800x600.png", alt: "সেমিনারে বক্তা বক্তব্য রাখছেন", hint: "seminar speaker" },
        { src: "https://placehold.co/800x600.png", alt: "শ্রোতারা প্রশ্ন করছেন", hint: "audience asking question" },
    ],
  },
];

export default function ResearchPage() {
  const [selectedActivity, setSelectedActivity] = useState<{ title: string; description: string; images: { src: string; alt: string; hint: string }[] } | null>(null);

  const openDialog = (activity: typeof researchActivities[0]) => {
    setSelectedActivity(activity);
  };

  const closeDialog = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Camera className="mx-auto h-12 w-12 text-primary" />
            <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">গবেষণা ও কার্যক্রম</h1>
            <p className="font-body text-lg mt-4 text-muted-foreground">
              জ্ঞানভিত্তিক সমাজ গঠনে আমাদের গবেষণা, ওয়ার্কশপ এবং বিভিন্ন কার্যক্রমের ঝলক।
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden group shadow-lg cursor-pointer" onClick={() => openDialog(activity)}>
                <div className="relative w-full aspect-video">
                  <Image
                    src={activity.images[0].src}
                    alt={activity.images[0].alt}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={activity.images[0].hint}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-headline text-2xl font-bold">{activity.title}</h3>
                  <p className="font-body text-muted-foreground mt-2">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedActivity} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
        <DialogContent className="max-w-3xl p-4 sm:p-6 md:p-8 bg-card border-none shadow-2xl rounded-2xl">
          {selectedActivity && (
            <div className="relative">
               <Button variant="ghost" size="icon" onClick={closeDialog} className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-10 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80">
                 <X className="h-5 w-5" />
                 <span className="sr-only">বন্ধ করুন</span>
               </Button>
              <Carousel className="w-full">
                <CarouselContent>
                  {selectedActivity.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video w-full relative rounded-lg overflow-hidden">
                        <Image src={image.src} alt={image.alt} fill className="object-contain" data-ai-hint={image.hint}/>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
              </Carousel>
              <div className="text-center mt-6">
                <h3 className="font-headline text-2xl md:text-3xl font-bold">{selectedActivity.title}</h3>
                <p className="font-body text-base md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">{selectedActivity.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
