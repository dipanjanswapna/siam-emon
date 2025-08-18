
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpenCheck, BrainCircuit, Library, Users, Camera, X, Heart, Megaphone, Flag, Award, FileText, Mic, GraduationCap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";


const carouselItems = [
  {
    title: "শিক্ষার্থীদের জন্য গবেষণার সুযোগ",
    subtitle: "গবেষণাগারে জ্ঞানের আলো",
    description: "একটি গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে সিয়াম ইমন শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় সুযোগ-সুবিধা নিশ্চিত করতে কাজ করবেন।",
    image: "https://i.postimg.cc/9XZXtkTj/photo-2025-08-18-01-30-06.jpg",
    imageHint: "research opportunity"
  },
  {
    title: "Dean's Award 2025 , জীব বিজ্ঞান অনুষদ",
    subtitle: "শিক্ষায় অবদানের জন্য সম্মাননা",
    description: "ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন, গবেষণা ও প্রকাশনায় অবদান এবং সার্বিক একাডেমিক উৎকর্ষতা সাধনের জন্য সিয়াম ইমন-কে এই সম্মাননায় ভূষিত করা হয়েছে।",
    image: "https://i.postimg.cc/7LwWCm7D/Screenshot-2025-08-18-014212.png",
    imageHint: "receiving award"
  },
  {
    title: "গবেষণামূলক উপস্থাপনা",
    subtitle: "নতুন ধারণা, নতুন পথ",
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে সিয়াম ইমন তার গবেষণামূলক কাজগুলো শিক্ষার্থীদের সামনে তুলে ধরছেন, যা তাদের মধ্যে নতুন ধারণা ও গবেষণার প্রতি আগ্রহ সৃষ্টি করবে।",
    image: "https://i.postimg.cc/763HDBgz/Screenshot-2025-08-18-020259.png",
    imageHint: "research presentation"
  },
  {
    title: "গবেষণাগারে নিরলস কাজ",
    subtitle: "গবেষণায় আধুনিক প্রযুক্তি",
    description: "একটি উন্নত গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে সিয়াম ইমন শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় আধুনিক সুযোগ-সুবিধা নিশ্চিত করতে কাজ করছেন।",
    image: "https://i.postimg.cc/vHRK5YwG/photo-2025-08-18-02-08-33.jpg",
    imageHint: "working in lab"
  },
  {
    title: "গবেষণাগারে সিয়াম: জ্ঞানের সন্ধানে",
    subtitle: "ল্যাবরেটরি থেকে নতুন উদ্ভাবন",
    description: "একটি উন্নত গবেষণামূলক পরিবেশ নিশ্চিত করার মাধ্যমে শিক্ষার্থীদের মাঝে নতুন উদ্ভাবনী ধারণার জন্ম দিতে সিয়াম ইমন নিরলসভাবে কাজ করে যাচ্ছেন।",
    image: "https://i.postimg.cc/wxPZWxXt/photo-2025-08-18-01-23-31.jpg",
    imageHint: "siam in laboratory"
  },
  {
    title: "জাতীয় সম্মেলনে সিয়াম ইমন",
    subtitle: "গবেষণা ও প্রকাশনার প্রতি প্রতিশ্রুতি",
    description: "২৪তম জাতীয় সম্মেলন এবং বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় উপস্থিত থেকে সিয়াম ইমন দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে গবেষণা ও প্রকাশনা খাতের ভবিষ্যৎ নিয়ে আলোচনা করেন।",
    image: "https://i.postimg.cc/26MQRS7y/Screenshot-2025-08-18-015837.png",
    imageHint: "national conference"
  },
  {
    title: "পরিবেশ সুরক্ষা অভিযান",
    subtitle: "সবুজ বাঁচাও",
    description: "পরিবেশ রক্ষায় বৃক্ষরোপণ এবং সচেতনতামূলক কার্যক্রম চলমান রয়েছে।",
    image: "https://i.postimg.cc/7hPr1K0g/photo-2025-08-18-00-47-45.jpg",
    imageHint: "environment protection campaign"
  },
  {
    title: "শিক্ষায় অবদানের জন্য সম্মাননা",
    subtitle: "অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি",
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে সিয়াম ইমন-এর অবদানের জন্য অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি বিভাগ কর্তৃক তাকে এই বিশেষ সম্মাননা প্রদান করা হয়।",
    image: "https://i.postimg.cc/FRpK3W74/photo-2025-08-18-02-08-11.jpg",
    imageHint: "receiving award biology"
  },
    {
    title: "গবেষণায় সিয়াম ইমন-এর সক্রিয় অংশগ্রহণ",
    subtitle: "ঢাকা বিশ্ববিদ্যালয় প্রাণিবিজ্ঞান বিভাগ কর্তৃক আয়োজিত",
    description: "বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় (২০২৪) উপস্থিত হয়ে সিয়াম ইমন গবেষণা ও প্রকাশনা খাতে তার অঙ্গীকার ব্যক্ত করেছেন।",
    image: "https://i.postimg.cc/PJqYGk1N/photo-2025-08-18-01-08-52.jpg",
    imageHint: "research participation"
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <NewHeroSection />
      <AboutSection />
      <VoteBannerSection />
      <CommitmentSection />
      <ResearchSection />
      <LogicalMovementSection />
      <AcademicAchievementSection />
    </div>
  );
}

function NewHeroSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


  return (
    <section className="w-full bg-card py-8 md:py-12">
      <div className="container mx-auto">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col justify-center text-left p-4 md:p-8">
                    <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">{item.title}</h2>
                    <p className="text-3xl md:text-4xl font-headline text-primary mt-2">{item.subtitle}</p>
                    <p className="mt-4 text-lg text-muted-foreground font-body">{item.description}</p>
                    <div className="mt-6 flex gap-4">
                       <Button asChild size="lg" className="font-headline text-lg">
                         <Link href="/manifesto">আমাদের লক্ষ্য</Link>
                       </Button>
                       <Button asChild size="lg" variant="secondary" className="font-headline text-lg">
                         <Link href="/get-involved">যুক্ত হোন</Link>
                       </Button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-[450px] rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                      data-ai-hint={item.imageHint}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
        </Carousel>
         <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 w-2 rounded-full ${current === i + 1 ? 'bg-primary' : 'bg-muted'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="https://placehold.co/600x750.png"
              alt="সিয়াম ফেরদৌস ইমন"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              data-ai-hint="politician portrait"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">আসসালামু আলাইকুম।</h2>
            <div className="font-body text-lg md:text-xl space-y-4 text-muted-foreground">
              <p>
                আমি <span className="text-primary font-bold">সিয়াম ফেরদৌস ইমন</span>, ঢাকা বিশ্ববিদ্যালয়ের ২০১৮-১৯ সেশনের প্রাণিবিদ্যা বিভাগের মাস্টার্সে (Genetics and Molecular Biology Branch) অধ্যয়নরত এবং ফজলুল হক মুসলিম হলের নিয়মিত আবাসিক শিক্ষার্থী। আমি বিগত ৬ বছর ধরে বিশ্ববিদ্যালয় জীবনে বিভিন্ন <span className="text-accent font-semibold">ছাত্রকল্যাণমূলক কার্যক্রম</span>, যোক্তিক ও ন্যায্য দাবি আদায়ের পাশাপাশি <span className="text-accent font-semibold">গবেষণা ও একাডেমিক কর্মকাণ্ডের</span> সাথে শুরু থেকে সক্রিয় আছি।
              </p>
              <p>
                আপনাদের ভালোবাসা, সহযোগিতা ও আস্থার জোরেই আমি আসন্ন ঢাকা বিশ্ববিদ্যালয়ের কেন্দ্রীয় ছাত্র সংসদ (ডাকসু) নির্বাচনে <span className="bg-primary/20 text-red-600 font-bold p-1 rounded">গবেষণা ও প্রকাশনা সম্পাদক পদে</span> প্রার্থী হওয়ার সিদ্ধান্ত নিয়েছি।
              </p>
              <p>
                আমি বিশ্বাস করি, ডাকসুর গবেষণা ও প্রকাশনা সম্পাদক পদ শুধু গবেষণামুখী ছাত্রছাত্রীদের জন্য নয়, বরং পুরো বিশ্ববিদ্যালয়ের <span className="font-semibold text-foreground">জ্ঞানচর্চা, গবেষণা সংস্কৃতি, আন্তর্জাতিক প্রকাশনা ও বৈশ্বিক স্বীকৃতি</span> বৃদ্ধির জন্যও অত্যন্ত গুরুত্বপূর্ণ।
              </p>
            </div>
            <Button asChild className="mt-8 font-headline text-lg">
              <Link href="/about">
                সম্পূর্ণ জীবনী পড়ুন <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const commitments = [
  {
    icon: BrainCircuit,
    title: "গবেষণায় সহযোগিতা ও সুযোগ বৃদ্ধি",
    description: "শিক্ষার্থীদের গবেষণামূলক কাজে সার্বিক সহযোগিতা প্রদান, বিভিন্ন সেমিনার ও ওয়ার্কশপের আয়োজন এবং গবেষণাগারে প্রয়োজনীয় আধুনিক সরঞ্জাম নিশ্চিত করা হবে।",
  },
  {
    icon: BookOpenCheck,
    title: "প্রকাশনা সহজীকরণ",
    description: "আন্তর্জাতিক মানের জার্নালে শিক্ষার্থীদের গবেষণা প্রবন্ধ, বই ও সৃজনশীল লেখা প্রকাশে সার্বিক সহায়তা দেওয়া হবে এবং বিশ্ববিদ্যালয়ের নিজস্ব প্রকাশনা প্ল্যাটফর্ম তৈরির উদ্যোগ নেওয়া হবে।",
  },
  {
    icon: Library,
    title: "ডিজিটাল লাইব্রেরি ও রিসোর্স অ্যাক্সেস",
    description: "একটি উন্নত এবং আধুনিক ডিজিটাল লাইব্রেরি স্থাপন করা হবে, যেখানে শিক্ষার্থীরা সহজে দেশ-বিদেশের সেরা গবেষণা পেপার, বই এবং জার্নালে প্রবেশাধিকার পাবে।",
  },
];

function CommitmentSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার প্রতি আমাদের প্রতিশ্রুতি</h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            ঢাকা বিশ্ববিদ্যালয়ের ছাত্রসমাজকে একটি উন্নত, শিক্ষাবান্ধব পরিবেশ উপহার দিতে এবং গবেষণার সংস্কৃতিকে বেগবান করতে সিয়াম ফেরদৌস ইমন নিরলসভাবে কাজ করে চলেছেন। তাঁর প্রধান লক্ষ্য হলো শিক্ষার্থীদের সম্ভাবনাকে উন্মোচন করা এবং একটি উজ্জ্বল ভবিষ্যৎ নিশ্চিত করা। আপনার ভালোবাসা ও আস্থাই তাঁর পথচলার মূল শক্তি।
          </p>
          <p className="mt-6 font-headline text-xl text-primary font-semibold">
            তাঁর কিছু প্রধান প্রতিশ্রুতি নিচে তুলে ধরা হলো:
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card">
              <CardHeader className="items-center">
                <div className="bg-primary/20 p-4 rounded-full">
                  <commitment.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">{commitment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{commitment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function VoteBannerSection() {
  return (
    <section className="bg-primary/20 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-green-700">ভোট দিন সিয়ামকে!</h2>
        <p className="mt-2 text-lg md:text-xl font-body text-foreground">আপনার প্রতিনিধি, আপনার কন্ঠস্বর | ডাকসু ২০২৫</p>
        <p className="mt-4 inline-block bg-accent text-accent-foreground font-headline text-2xl md:text-3xl font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          আপনাদের প্রত্যাশাই আমার ইশতেহার
        </p>
      </div>
    </section>
  );
}

const researchActivities = [
  {
    icon: Heart,
    title: "গবেষণা",
    description: "গবেষণায় সক্রিয় অংশগ্রহণ: সিয়াম ইমন কেবল একজন প্রার্থী নন, বরং একজন সক্রিয় গবেষকও। তিনি বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় নিয়মিত উপস্থিত থেকে দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে জ্ঞান আদান-প্রদান করেন। তাঁর নিজস্ব গবেষণাগারে নিরলস কাজ করার অভিজ্ঞতা তাকে শিক্ষার্থীদের বাস্তব সমস্যাগুলো বুঝতে সাহায্য করে।",
    images: [
      { src: "https://placehold.co/800x600.png", alt: "ওয়ার্কশপের অংশগ্রহণকারীরা কম্পিউটারে কাজ করছেন", hint: "students workshop" },
      { src: "https://placehold.co/800x600.png", alt: "প্রশিক্ষক শিক্ষার্থীদের সহায়তা করছেন", hint: "instructor teaching" },
      { src: "https://placehold.co/800x600.png", alt: "শিক্ষার্থীরা মনযোগ সহকারে শুনছেন", hint: "students listening" },
    ],
  },
  {
    icon: Megaphone,
    title: "সেমিনার ও আলোচনা সভা",
    description: "গবেষণা ও উচ্চশিক্ষায় শিক্ষার্থীদের নিয়ে সেমিনার:\n\nসিয়াম ফেরদৌস ইমন শিক্ষার্থীদের গবেষণায় উৎসাহিত করতে এবং তাদের উচ্চশিক্ষার পথ দেখাতে একটি সেমিনার আয়োজনের পরিকল্পনা করেছেন। এই সেমিনারে গবেষণার গুরুত্ব, বিদেশে উচ্চশিক্ষার সুযোগ এবং অভিজ্ঞ গবেষকদের সাথে সরাসরি আলোচনার ব্যবস্থা থাকবে। এর লক্ষ্য হলো শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা এবং তাদের মধ্যে নতুন কিছু শেখার আগ্রহ তৈরি করা।",
    images: [
        { src: "https://placehold.co/800x600.png", alt: "সেমিনারে বক্তা বক্তব্য রাখছেন", hint: "seminar speaker" },
        { src: "https://placehold.co/800x600.png", alt: "শ্রোতারা প্রশ্ন করছেন", hint: "audience asking question" },
    ],
  },
    {
    icon: Users,
    title: "ইয়ুথ কনফারেন্স আয়োজন",
    description: "সিয়াম ফেরদৌস ইমন তরুণদের মেধা ও সম্ভাবনা বিকাশে একটি ইয়ুথ কনফারেন্স আয়োজনের পরিকল্পনা করছেন। এই কনফারেন্সে দেশের বিভিন্ন প্রান্তের তরুণরা একত্রিত হয়ে তাদের ধারণা, উদ্ভাবন এবং অভিজ্ঞতা বিনিময় করার সুযোগ পাবে, যা একটি সমৃদ্ধशाली ভবিষ্যতের পথ দেখাবে।",
    images: [
        { src: "https://placehold.co/800x600.png", alt: "তরুণ অংশগ্রহণকারীরা কনফারেন্সে অংশ নিচ্ছেন", hint: "youth conference" },
        { src: "https://placehold.co/800x600.png", alt: "মঞ্চে বক্তা বক্তব্য রাখছেন", hint: "youth speaker" },
    ],
  },
];

function ResearchSection() {
  const [selectedActivity, setSelectedActivity] = useState<{ title: string; description: string; images: { src: string; alt: string; hint: string }[] } | null>(null);

  const openDialog = (activity: typeof researchActivities[0]) => {
    setSelectedActivity(activity);
  };

  const closeDialog = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Camera className="mx-auto h-12 w-12 text-primary" />
            <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">গবেষণা ও কার্যক্রম</h1>
            <p className="font-body text-lg mt-4 text-muted-foreground">
              জ্ঞানভিত্তিক সমাজ গঠনে আমাদের গবেষণা, ওয়ার্কশপ এবং বিভিন্ন কার্যক্রমের ঝলক।
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {researchActivities.map((activity, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-lg shadow-md cursor-pointer" onClick={() => openDialog(activity)}>
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                     <activity.icon className="w-8 h-8 text-primary" />
                     <h3 className="font-headline text-3xl font-bold text-foreground">{activity.title}</h3>
                  </div>
                  <p className="font-body text-muted-foreground whitespace-pre-line">{activity.description}</p>
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden group order-1 md:order-2">
                    <Image
                      src={activity.images[0].src}
                      alt={activity.images[0].alt}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={activity.images[0].hint}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded">
                       {activity.images.length} ছবি
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedActivity} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-none shadow-2xl rounded-2xl flex flex-col">
          {selectedActivity && (
            <>
              <div className="relative flex-grow w-full h-[70%]">
                <Button variant="ghost" size="icon" onClick={closeDialog} className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80">
                  <X className="h-5 w-5" />
                  <span className="sr-only">বন্ধ করুন</span>
                </Button>
                <Carousel className="w-full h-full">
                  <CarouselContent className="h-full">
                    {selectedActivity.images.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="w-full h-full relative rounded-t-lg overflow-hidden">
                          <Image src={image.src} alt={image.alt} fill className="object-contain" data-ai-hint={image.hint}/>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
                </Carousel>
              </div>
              <div className="flex-shrink-0 text-center p-4 md:p-6 bg-card rounded-b-2xl">
                <h3 className="font-headline text-xl md:text-3xl font-bold">{selectedActivity.title}</h3>
                <p className="font-body text-sm md:text-lg text-muted-foreground mt-2 max-w-3xl mx-auto whitespace-pre-line">{selectedActivity.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}


const logicalMovementActivities = [
  {
    icon: Flag,
    title: "জুলাই ২৪",
    description: "শহীদুল্লাহ হল ও ফজলুল হক হল মুক্ত করতে সাধারণ ছাত্রদের সাথে সক্রিয় ছিলাম, ১৭ জুলাই শেষ মুহূর্ত পর্যন্ত হল থেকে বের হইনি। ঢাকা বিশ্ববিদ্যালয়ের নিয়মিত ছাত্র হিসেবে ক্যাম্পাস জীবনের শুরু থেকে সব ধরণের যৌক্তিক আন্দোলনে সক্রিয়ভাবে রাজপথে ছিলাম ।",
    images: [
      { src: "https://placehold.co/800x600.png", alt: "আন্দোলনে অংশগ্রহণ", hint: "protest movement" },
      { src: "https://placehold.co/800x600.png", alt: "ছাত্রদের সমাবেশ", hint: "student gathering" },
    ],
  },
];

function LogicalMovementSection() {
  const [selectedActivity, setSelectedActivity] = useState<{ title: string; description: string; images: { src: string; alt: string; hint: string }[] } | null>(null);

  const openDialog = (activity: typeof logicalMovementActivities[0]) => {
    setSelectedActivity(activity);
  };

  const closeDialog = () => {
    setSelectedActivity(null);
  };

  return (
    <>
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Flag className="mx-auto h-12 w-12 text-primary" />
            <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">যৌক্তিক আন্দোলনে অংশগ্রহণ</h1>
            <p className="font-body text-lg mt-4 text-muted-foreground">
              শিক্ষার্থীদের অধিকার এবং বিভিন্ন সামাজিক ন্যায্যতার দাবিতে আমাদের অংশগ্রহণের ঝলক।
            </p>
          </div>
          <div className="mt-16 space-y-8">
            {logicalMovementActivities.map((activity, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-lg shadow-md cursor-pointer" onClick={() => openDialog(activity)}>
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-3 mb-4">
                     <activity.icon className="w-8 h-8 text-primary" />
                     <h3 className="font-headline text-3xl font-bold text-foreground">{activity.title}</h3>
                  </div>
                  <p className="font-body text-muted-foreground whitespace-pre-line">{activity.description}</p>
                </div>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden group order-1 md:order-2">
                    <Image
                      src={activity.images[0].src}
                      alt={activity.images[0].alt}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={activity.images[0].hint}
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded">
                       {activity.images.length} ছবি
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedActivity} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-none shadow-2xl rounded-2xl flex flex-col">
          {selectedActivity && (
            <>
              <div className="relative flex-grow w-full h-[70%]">
                <Button variant="ghost" size="icon" onClick={closeDialog} className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80">
                  <X className="h-5 w-5" />
                  <span className="sr-only">বন্ধ করুন</span>
                </Button>
                <Carousel className="w-full h-full">
                  <CarouselContent className="h-full">
                    {selectedActivity.images.map((image, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="w-full h-full relative rounded-t-lg overflow-hidden">
                          <Image src={image.src} alt={image.alt} fill className="object-contain" data-ai-hint={image.hint}/>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none h-10 w-10" />
                </Carousel>
              </div>
              <div className="flex-shrink-0 text-center p-4 md:p-6 bg-card rounded-b-2xl">
                <h3 className="font-headline text-xl md:text-3xl font-bold">{selectedActivity.title}</h3>
                <p className="font-body text-sm md:text-lg text-muted-foreground mt-2 max-w-3xl mx-auto whitespace-pre-line">{selectedActivity.description}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

const academicAchievements = [
  {
    icon: Award,
    title: "ডিন'স অ্যাওয়ার্ড",
    description: "শিক্ষায় অসামান্য সাফল্যের জন্য জীব বিজ্ঞান অনুষদ থেকে ডিন'স অ্যাওয়ার্ড প্রাপ্তি।",
  },
  {
    icon: FileText,
    title: "গবেষণা প্রকাশনা",
    description: "আন্তর্জাতিক জার্নালে মলিকুলার বায়োলজি বিষয়ে গবেষণা প্রবন্ধ প্রকাশিত হয়েছে।",
  },
  {
    icon: Mic,
    title: "জাতীয় সম্মেলনে অংশগ্রহণ",
    description: "২৪তম জাতীয় প্রাণীবিজ্ঞান সম্মেলনে গবেষণা পোস্টার উপস্থাপন এবং অংশগ্রহণ।",
  },
  {
    icon: GraduationCap,
    title: "মেধা বৃত্তি",
    description: "একাডেমিক ফলাফলের উপর ভিত্তি করে বিশ্ববিদ্যালয় থেকে মেধা বৃত্তি অর্জন।",
  },
];

function AcademicAchievementSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">একাডেমিক অর্জন</h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            আমাদের প্রার্থীর শিক্ষাজীবনের কিছু উল্লেখযোগ্য সাফল্য এবং অর্জন নিচে তুলে ধরা হলো।
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicAchievements.map((achievement, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-background">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <achievement.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl mt-4">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

    