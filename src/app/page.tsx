
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Landmark, GraduationCap, HeartHandshake, Briefcase, Lightbulb } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

const carouselItems = [
  {
    title: "স্বাস্থ্য বিষয়ক কেন্দ্রীয়",
    subtitle: "উপসাহিত্যিক পক্ষ",
    description: "স্বাস্থ্য বিষয়ক কেন্দ্রীয় উপসাহিত্যিক পক্ষ নিয়ে আমাদের প্রার্থীর কার্যক্রম চলছে।",
    image: "https://placehold.co/1200x600.png",
    imageHint: "health committee meeting"
  },
  {
    title: "শিক্ষা সংস্কার উদ্যোগ",
    subtitle: "একটি নতুন দিগন্ত",
    description: "শিক্ষা ব্যবস্থায় আধুনিকায়ন আনতে নতুন নতুন পরিকল্পনা গ্রহণ করা হচ্ছে।",
    image: "https://placehold.co/1200x600.png",
    imageHint: "education reform"
  },
  {
    title: "পরিবেশ সুরক্ষা অভিযান",
    subtitle: "সবুজ বাঁচাও",
    description: "পরিবেশ রক্ষায় বৃক্ষরোপণ এবং সচেতনতামূলক কার্যক্রম চলমান রয়েছে।",
    image: "https://i.postimg.cc/7hPr1K0g/photo-2025-08-18-00-47-45.jpg",
    imageHint: "environment protection campaign"
  },
  {
    title: "গবেষণায় সিয়াম ইমন-এর সক্রিয় অংশগ্রহণ",
    subtitle: "ঢাকা বিশ্ববিদ্যালয় প্রাণিবিজ্ঞান বিভাগ কর্তৃক আয়োজিত",
    description: "বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় (২০২৪) উপস্থিত হয়ে সিয়াম ইমন গবেষণা ও প্রকাশনা খাতে তার অঙ্গীকার ব্যক্ত করেছেন।",
    image: "https://i.postimg.cc/PJqYGk1N/photo-2025-08-18-01-08-52.jpg",
    imageHint: "research participation"
  },
  {
    title: "গবেষণাগারে সিয়াম: জ্ঞানের সন্ধানে",
    subtitle: "ল্যাবরেটরি থেকে নতুন উদ্ভাবন",
    description: "একটি উন্নত গবেষণামূলক পরিবেশ নিশ্চিত করার মাধ্যমে শিক্ষার্থীদের মাঝে নতুন উদ্ভাবনী ধারণার জন্ম দিতে সিয়াম ইমন নিরলসভাবে কাজ করে যাচ্ছেন।",
    image: "https://i.postimg.cc/wxPZWxXt/photo-2025-08-18-01-23-31.jpg",
    imageHint: "siam in laboratory"
  }
];

// Placeholder data
const newsItems = [
  {
    title: "উত্তর জেলায় সফল টাউন হল মিটিং",
    description: "আমাদের প্রার্থী শত শত বাসিন্দাদের সাথে সংযোগ স্থাপন করেছেন, তাদের উদ্বেগ শুনেছেন এবং আমাদের দৃষ্টিভঙ্গি শেয়ার করেছেন।",
    date: "অক্টোবর ২৬, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "town hall meeting"
  },
  {
    title: "নতুন শিক্ষা উদ্যোগ ঘোষণা করা হয়েছে",
    description: "স্কুল আধুনিকীকরণ এবং শিক্ষকদের সহায়তার জন্য একটি ব্যাপক পরিকল্পনা আজ উন্মোচন করা হয়েছে।",
    date: "অক্টোবর ২৪, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "classroom students"
  },
  {
    title: "স্বেচ্ছাসেবক অভিযান büyük উৎসাহের সাথে শুরু হয়েছে",
    description: "এই সপ্তাহান্তে ২০০ জনেরও বেশি নতুন স্বেচ্ছাসেবক আমাদের প্রচারাভিযানে যোগ দিয়েছেন।",
    date: "অক্টোবর ২২, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "community volunteers"
  },
];

const manifestoHighlights = [
  {
    icon: GraduationCap,
    title: "শিক্ষা সংস্কার",
    description: "আধুনিক স্কুল, শিক্ষক প্রশিক্ষণ এবং ছাত্র বৃত্তি প্রকল্পে বিনিয়োগ।"
  },
  {
    icon: HeartHandshake,
    title: "সকলের জন্য স্বাস্থ্যসেবা",
    description: "মানসম্মত স্বাস্থ্যসেবা সুবিধা এবং সাশ্রয়ী মূল্যের পরিষেবাগুলিতে অ্যাক্সেস প্রসারিত করা।"
  },
  {
    icon: Briefcase,
    title: "কর্মসংস্থান সৃষ্টি",
    description: "অর্থনৈতিক প্রবৃদ্ধি বাড়ানো এবং টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি করা।"
  },
  {
    icon: Landmark,
    title: "অবকাঠামো উন্নয়ন",
    description: "রাস্তা, সেতু এবং গণপরিবহন ব্যবস্থা নির্মাণ ও আপগ্রেড করা।"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <NewHeroSection />
      <AboutSection />
      <ManifestoSection />
      <NewsSection />
      <WhyVoteSection />
    </div>
  );
}

function NewHeroSection() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
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
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/600x750.png"
            alt="প্রার্থী বক্তৃতা দিচ্ছেন"
            width={600}
            height={750}
            className="w-full h-auto"
            data-ai-hint="politician speaking"
          />
        </div>
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার প্রার্থীকে জানুন</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের সম্প্রদায়ের প্রতি আজীবন প্রতিশ্রুতিবদ্ধ একজন নিবেদিতপ্রাণ জনপ্রতিনিধি। জনগণের জন্য লড়াই করার প্রমাণিত ট্র্যাক রেকর্ড সহ, আমাদের প্রার্থী আমাদের এগিয়ে নিয়ে যাওয়ার জন্য প্রয়োজনীয় অভিজ্ঞতা, আবেগ এবং সততা নিয়ে এসেছেন।
          </p>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            স্থানীয় স্কুলের উন্নতি থেকে শুরু করে ছোট ব্যবসার পক্ষে কথা বলা পর্যন্ত, তাদের কাজ সবসময় সুযোগ তৈরি করা এবং জীবনযাত্রার মান উন্নত করা।
          </p>
          <Button asChild className="mt-6 font-headline text-lg">
            <Link href="/about">
              সম্পূর্ণ জীবনী পড়ুন <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার প্রতি আমাদের প্রতিশ্রুতি</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের ইশতেহার একটি প্রতিশ্রুতি। আপনার এবং আপনার পরিবারের জন্য সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলিতে অক্লান্তভাবে কাজ করার প্রতিশ্রুতি।
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {manifestoHighlights.map((item) => (
            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild className="font-headline text-lg">
                <Link href="/manifesto">সম্পূর্ণ ইশতেহার দেখুন <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">প্রচারণার সর্বশেষ খবর</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের সর্বশেষ কার্যক্রম, ঘোষণা এবং ইভেন্টগুলির সাথে আপ-টু-ডেট থাকুন।
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={item.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription className="font-body">{item.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-body text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyVoteSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Lightbulb className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার কণ্ঠ, আপনার ভোট, আমাদের ভবিষ্যৎ</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            প্রতিটি ভোট পরিবর্তনের জন্য একটি শক্তিশালী কণ্ঠস্বর। এটি আপনার সম্প্রদায়কে গঠন করার এবং আপনার মূল্যবোধের প্রতিনিধিত্বকারী এবং আপনার প্রয়োজনের জন্য লড়াই করে এমন একটি সরকার নিশ্চিত করার সুযোগ। নীরব থাকবেন না। একটি শক্তিশালী গণতন্ত্র এবং সকলের জন্য একটি উন্নত আগামীকাল গড়ার জন্য এই নির্বাচনে আপনার অংশগ্রহণ অত্যন্ত গুরুত্বপূর্ণ।
          </p>
          <Button asChild className="mt-8 font-headline text-lg" variant="accent">
            <Link href="/get-involved#register-to-vote">নিবন্ধন করতে শিখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

    

    

    