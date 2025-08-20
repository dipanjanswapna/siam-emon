
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpenCheck, BrainCircuit, Library, Users, Camera, X, Heart, Megaphone, Flag, Award, FileText, Mic, GraduationCap, HandHeart, BookText, ShieldCheck, MessageSquare, Mail, Icon, ImagePlus, Annoyed, HelpCircle, Vote, Share2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { collection, getDocs, addDoc, serverTimestamp, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";


const carouselItems = [
  {
    title: "শিক্ষার্থীদের জন্য গবেষণার সুযোগ",
    subtitle: "গবেষণাগারে জ্ঞানের আলো",
    description: "একটি গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে সিয়াম ফেরদৌস ইমন শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় সুযোগ-সুবিধা নিশ্চিত করতে কাজ করবেন।",
    image: "https://i.postimg.cc/9XZXtkTj/photo-2025-08-18-01-30-06.jpg",
    imageHint: "research opportunity"
  },
  {
    title: "Dean's Award 2025 , জীব বিজ্ঞান অনুষদ",
    subtitle: "শিক্ষায় অবদানের জন্য সম্মাননা",
    description: "ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন, গবেষণা ও প্রকাশনায় অবদান এবং সার্বিক একাডেমিক উৎকর্ষতা সাধনের জন্য সিয়াম ফেরদৌস ইমন-কে এই সম্মাননায় ভূষিত করা হয়েছে।",
    image: "https://i.postimg.cc/7LwWCm7D/Screenshot-2025-08-18-014212.png",
    imageHint: "receiving award"
  },
  {
    title: "গবেষণামূলক উপস্থাপনা",
    subtitle: "নতুন ধারণা, নতুন পথ",
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে সিয়াম ফেরদৌস ইমন তার গবেষণামূলক কাজগুলো শিক্ষার্থীদের সামনে তুলে ধরছেন, যা তাদের মধ্যে নতুন ধারণা ও গবেষণার প্রতি আগ্রহ সৃষ্টি করবে।",
    image: "https://i.postimg.cc/763HDBgz/Screenshot-2025-08-18-020259.png",
    imageHint: "research presentation"
  },
  {
    title: "গবেষণাগারে নিরলস কাজ",
    subtitle: "গবেষণায় আধুনিক প্রযুক্তি",
    description: "একটি উন্নত গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে সিয়াম ফেরদৌস ইমন শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় আধুনিক সুযোগ-সুবিধা নিশ্চিত করতে কাজ করছেন।",
    image: "https://i.postimg.cc/vHRK5YwG/photo-2025-08-18-02-08-33.jpg",
    imageHint: "working in lab"
  },
  {
    title: "গবেষণাগারে সিয়াম: জ্ঞানের সন্ধানে",
    subtitle: "ল্যাবরেটরি থেকে নতুন উদ্ভাবন",
    description: "একটি উন্নত গবেষণামূলক পরিবেশ নিশ্চিত করার মাধ্যমে শিক্ষার্থীদের মাঝে নতুন উদ্ভাবনী ধারণার জন্ম দিতে সিয়াম ফেরদৌস ইমন নিরলসভাবে কাজ করে যাচ্ছেন।",
    image: "https://i.postimg.cc/wxPZWxXt/photo-2025-08-18-01-23-31.jpg",
    imageHint: "siam in laboratory"
  },
  {
    title: "জাতীয় সম্মেলনে সিয়াম ফেরদৌস ইমন",
    subtitle: "গবেষণা ও প্রকাশনার প্রতি প্রতিশ্রুতি",
    description: "২৪তম জাতীয় সম্মেলন এবং বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় উপস্থিত থেকে সিয়াম ফেরদৌস ইমন দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে গবেষণা ও প্রকাশনা খাতের ভবিষ্যৎ নিয়ে আলোচনা করেন।",
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
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে সিয়াম ফেরদৌস ইমন-এর অবদানের জন্য অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি বিভাগ কর্তৃক তাকে এই বিশেষ সম্মাননা প্রদান করা হয়।",
    image: "https://i.postimg.cc/FRpK3W74/photo-2025-08-18-02-08-11.jpg",
    imageHint: "receiving award biology"
  },
    {
    title: "গবেষণায় সিয়াম ফেরদৌস ইমন-এর সক্রিয় অংশগ্রহণ",
    subtitle: "ঢাকা বিশ্ববিদ্যালয় প্রাণিবিজ্ঞান বিভাগ কর্তৃক আয়োজিত",
    description: "বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় (২০২৪) উপস্থিত হয়ে সিয়াম ফেরদৌস ইমন গবেষণা ও প্রকাশনা খাতে তার অঙ্গীকার ব্যক্ত করেছেন।",
    image: "https://i.postimg.cc/PJqYGk1N/photo-2025-08-18-01-08-52.jpg",
    imageHint: "research participation"
  },
];

const icons: { [key: string]: React.ElementType } = {
    BrainCircuit,
    BookOpenCheck,
    Library,
    Award,
    FileText,
    Mic,
    GraduationCap
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <NewHeroSection />
      <AboutSection />
      <NoticeSection />
      <VoteBannerSection />
      <CommitmentSection />
      <ResearchSection />
      <PublicationSection />
      <LogicalMovementSection />
      <AcademicAchievementSection />
      <SocialWorkSection />
      <LeadershipSection />
      <FAQSection />
      <FeedbackSection />
      <PreVoteSection />
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
              src="https://i.postimg.cc/LXCLpBjm/532463080-3680875555553854-4475665250768894271-n.jpg"
              alt="সিয়াম ফেরদৌস ইমন"
              fill
              className="object-contain transform group-hover:scale-105 transition-transform duration-300"
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

type Commitment = {
    id: string;
    icon: string;
    title: string;
    description: string;
};

function CommitmentSection() {
    const [commitments, setCommitments] = useState<Commitment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCommitments = async () => {
            setIsLoading(true);
            const commitmentsCollection = collection(db, "commitments");
            const commitmentsSnapshot = await getDocs(commitmentsCollection);
            const commitmentsList = commitmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Commitment));
            setCommitments(commitmentsList);
            setIsLoading(false);
        };

        fetchCommitments();
    }, []);

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
                    {isLoading ? Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="text-center shadow-lg bg-card p-6">
                            <div className="bg-muted/50 p-4 rounded-full w-20 h-20 mx-auto animate-pulse"></div>
                             <div className="h-6 w-3/4 bg-muted/50 rounded mt-4 mx-auto animate-pulse"></div>
                             <div className="h-4 w-full bg-muted/50 rounded mt-4 mx-auto animate-pulse"></div>
                             <div className="h-4 w-5/6 bg-muted/50 rounded mt-2 mx-auto animate-pulse"></div>
                        </Card>
                    )) : commitments.map((commitment) => {
                        const IconComponent = icons[commitment.icon];
                        return (
                            <Card key={commitment.id} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card">
                                <CardHeader className="items-center">
                                    <div className="bg-primary/20 p-4 rounded-full">
                                        {IconComponent ? <IconComponent className="h-10 w-10 text-primary" /> : null}
                                    </div>
                                    <CardTitle className="font-headline text-2xl mt-4">{commitment.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-body text-muted-foreground">{commitment.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function NoticeSection() {
    const [noticeText, setNoticeText] = useState("কেমন লেগেছে আমাদের নতুন ওয়েবসাইট? আমরা সম্পূর্ণ নতুন আঙ্গিকে ডেভেলপমেন্ট শুরু করেছি। খুব শীঘ্রই আমরা পূর্ণাঙ্গ ওয়েবসাইট নিয়ে আসছি।");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNotice = async () => {
            setIsLoading(true);
            try {
                const noticeSnapshot = await getDocs(collection(db, "notices"));
                if (!noticeSnapshot.empty) {
                    const noticeDoc = noticeSnapshot.docs[0];
                    setNoticeText(noticeDoc.data().text);
                }
            } catch (error) {
                console.error("Error fetching notice:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNotice();
    }, []);

    if (isLoading) {
        return (
            <section className="bg-gradient-to-r from-red-500 to-pink-500 py-3 text-white overflow-hidden">
                <div className="relative flex items-center whitespace-nowrap">
                    <p className="text-lg font-headline">নোটিশ লোড হচ্ছে...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-r from-red-500 to-pink-500 py-3 text-white overflow-hidden">
            <div className="relative flex items-center whitespace-nowrap">
                <p className="animate-scroll text-lg font-headline">
                    {noticeText}
                </p>
                 <p className="animate-scroll text-lg font-headline" aria-hidden="true">
                    {noticeText}
                </p>
            </div>
        </section>
    );
}


function VoteBannerSection() {
  return (
    <section className="bg-primary/20 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-green-700">ভোট দিন সিয়াম ফেরদৌস ইমন - কে!</h2>
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
    description: "গবেষণায় সক্রিয় অংশগ্রহণ: সিয়াম ফেরদৌস ইমন কেবল একজন প্রার্থী নন, বরং একজন সক্রিয় গবেষকও। তিনি বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় নিয়মিত উপস্থিত থেকে দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে জ্ঞান আদান-প্রদান করেন। তাঁর নিজস্ব গবেষণাগারে নিরলস কাজ করার অভিজ্ঞতা তাকে শিক্ষার্থীদের বাস্তব সমস্যাগুলো বুঝতে সাহায্য করে।",
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
        { src: "https://i.postimg.cc/ZYNzxJDx/photo-2025-08-21-01-06-15.jpg", alt: "সেমিনারে অংশগ্রহণকারীদের একাংশ", hint: "seminar audience" },
        { src: "https://i.postimg.cc/4ypCf1hS/photo-2025-08-21-01-06-17.jpg", alt: "আলোচনা সভায় বক্তব্য রাখছেন", hint: "speaker presentation" },
        { src: "https://i.postimg.cc/cJJNRYVv/photo-2025-08-21-01-06-22.jpg", alt: "শিক্ষার্থীদের সাথে মতবিনিময়", hint: "discussion students" },
        { src: "https://i.postimg.cc/LXYK7S4R/photo-2025-08-21-01-06-24.jpg", alt: "সেমিনারে অতিথিদের একাংশ", hint: "seminar guests" },
        { src: "https://i.postimg.cc/c4MqPXWK/photo-2025-08-21-01-06-05.jpg", alt: "বক্তব্য রাখার মুহূর্ত", hint: "giving speech" },
        { src: "https://i.postimg.cc/DyKkCR9k/photo-2025-08-21-01-06-07.jpg", alt: "উপস্থিত শিক্ষার্থীদের একাংশ", hint: "student audience" },
        { src: "https://i.postimg.cc/fRTPps5F/photo-2025-08-21-01-04-50.jpg", alt: "আলোচনা সভা", hint: "panel discussion" },
        { src: "https://i.postimg.cc/SRhTrbJg/photo-2025-08-21-01-04-05.jpg", alt: "প্রশ্নোত্তর পর্ব", hint: "q&a session" },
        { src: "https://i.postimg.cc/fyfHqqdD/photo-2025-08-21-01-04-12.jpg", alt: "শিক্ষার্থীদের সাথে গ্রুপ ছবি", hint: "group photo students" },
        { src: "https://i.postimg.cc/d1dNrVt7/photo-2025-08-21-01-04-17.jpg", alt: "সেমিনারের একটি মুহূর্ত", hint: "seminar moment" },
        { src: "https://i.postimg.cc/fbVrWvGf/photo-2025-08-21-01-04-27.jpg", alt: "অংশগ্রহণকারীদের সাথে আলোচনা", hint: "discussion participants" }
    ],
  },
    {
    icon: Users,
    title: "ইয়ুথ কনফারেন্স আয়োজন",
    description: "সিয়াম ফেরদৌস ইমন তরুণদের মেধা ও সম্ভাবনা বিকাশে একটি ইয়ুথ কনফারেন্স আয়োজনের পরিকল্পনা করছেন। এই কনফারেন্সে দেশের বিভিন্ন প্রান্তের তরুণরা একত্রিত হয়ে তাদের ধারণা, উদ্ভাবন এবং অভিজ্ঞতা বিনিময় করার সুযোগ পাবে, যা একটি সমৃদ্ধশালী ভবিষ্যতের পথ দেখাবে।",
    images: [
        { src: "https://placehold.co/800x600.png", alt: "তরুণ অংশগ্রহণকারীরা কনফারেন্সে অংশ নিচ্ছেন", hint: "youth conference" },
        { src: "https://placehold.co/800x600.png", alt: "মঞ্চে বক্তা বক্তব্য রাখছেন", hint: "youth speaker" },
    ],
  },
];

type ResearchActivity = (typeof researchActivities)[0];

function ResearchSection() {
    const [selectedActivity, setSelectedActivity] = useState<ResearchActivity | null>(null);

    const openDialog = (activity: ResearchActivity) => {
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
                <DialogContent className="max-w-4xl w-full h-[90vh] p-4 flex flex-col">
                    <DialogHeader>
                        <DialogTitle className="sr-only">{selectedActivity?.title}</DialogTitle>
                    </DialogHeader>
                    {selectedActivity && (
                        <>
                            <div className="relative flex-grow h-[70%] w-full">
                                <Carousel className="w-full h-full">
                                    <CarouselContent>
                                        {selectedActivity.images.map((image, index) => (
                                            <CarouselItem key={index}>
                                                <div className="relative w-full h-[calc(90vh*0.7-3rem)]">
                                                    <Image
                                                        src={image.src}
                                                        alt={image.alt}
                                                        fill
                                                        className="object-contain"
                                                        data-ai-hint={image.hint}
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                                </Carousel>
                            </div>
                            <div className="flex-shrink-0 pt-4">
                                <ScrollArea className="h-[calc(90vh*0.3-3rem)] pr-4">
                                    <h3 className="font-headline text-3xl font-bold text-foreground mb-2">{selectedActivity.title}</h3>
                                    <p className="font-body text-muted-foreground whitespace-pre-line">{selectedActivity.description}</p>
                                </ScrollArea>
                            </div>
                        </>
                    )}
                     <Button variant="ghost" size="icon" onClick={closeDialog} className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80">
                      <X className="h-5 w-5" />
                      <span className="sr-only">বন্ধ করুন</span>
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    );
}


const publicationActivities = [
  {
    icon: BookText,
    title: "আন্তর্জাতিক জার্নালে প্রকাশনা",
    description: "সিয়াম ফেরদৌস ইমনের গবেষণা प्रतिष्ठित আন্তর্জাতিক জার্নালে প্রকাশিত হয়েছে, যা ঢাকা বিশ্ববিদ্যালয়ের সুনাম বৃদ্ধিতে সহায়ক ভূমিকা পালন করেছে।",
    images: [
      { src: "https://placehold.co/800x600.png", alt: "আন্তর্জাতিক জার্নালের কভার", hint: "journal cover" },
      { src: "https://placehold.co/800x600.png", alt: "গবেষণা পত্রের একটি পাতা", hint: "research paper" },
    ],
  },
  {
    icon: FileText,
    title: "বিশ্ববিদ্যালয় প্রকাশনা",
    description: "বিশ্ববিদ্যালয়ের নিজস্ব প্রকাশনা সংস্থার মাধ্যমে শিক্ষার্থীদের সৃজনশীল লেখা, যেমন— কবিতা, গল্প এবং প্রবন্ধ প্রকাশের জন্য একটি প্ল্যাটফর্ম তৈরি করার পরিকল্পনা রয়েছে। এর মাধ্যমে নবীন লেখকদের প্রতিভা বিকাশের সুযোগ তৈরি হবে।",
    images: [
        { src: "https://placehold.co/800x600.png", alt: "বিশ্ববিদ্যালয়ের প্রকাশনা সংস্থার লোগো", hint: "university press" },
        { src: "https://placehold.co/800x600.png", alt: "প্রকাশিত বইয়ের মোড়ক", hint: "book cover" },
    ],
  },
];

function PublicationSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <BookOpenCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">প্রকাশনায় সিয়াম ফেরদৌস ইমন</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            জ্ঞানচর্চা ও সৃজনশীলতার প্রসারে প্রকাশনা জগতে আমাদের উদ্যোগ ও কার্যক্রম।
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {publicationActivities.map((activity, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-primary/5 p-6 rounded-lg shadow-md">
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
  return (
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
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-lg shadow-md">
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
  );
}

type AcademicAchievement = {
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    imageHint: string;
};


function AcademicAchievementSection() {
    const [achievements, setAchievements] = useState<AcademicAchievement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAchievement, setSelectedAchievement] = useState<AcademicAchievement | null>(null);

     useEffect(() => {
        const fetchAchievements = async () => {
            setIsLoading(true);
            const achievementsCollection = collection(db, "academicAchievements");
            const achievementsSnapshot = await getDocs(achievementsCollection);
            const achievementsList = achievementsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AcademicAchievement));
            setAchievements(achievementsList);
            setIsLoading(false);
        };

        fetchAchievements();
    }, []);

    const openDialog = (achievement: AcademicAchievement) => {
      setSelectedAchievement(achievement);
    };

    const closeDialog = () => {
      setSelectedAchievement(null);
    };

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">একাডেমিক অর্জন</h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              আমাদের প্রার্থীর শিক্ষাজীবনের কিছু উল্লেখযোগ্য সাফল্য এবং অর্জন নিচে তুলে ধরা হলো।
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {isLoading ? Array.from({length: 4}).map((_, i) => (
                <Card key={i} className="flex flex-col shadow-lg bg-background overflow-hidden">
                    <div className="relative w-full aspect-video bg-muted/50 animate-pulse"></div>
                    <CardHeader className="items-center text-center">
                        <div className="bg-muted/50 p-3 rounded-full -mt-10 mb-2 border-4 border-background z-10 w-16 h-16 animate-pulse"></div>
                        <div className="h-6 w-3/4 bg-muted/50 rounded animate-pulse"></div>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                        <div className="h-4 w-full bg-muted/50 rounded animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-muted/50 rounded mt-2 animate-pulse"></div>
                    </CardContent>
                </Card>
            )) : achievements.map((achievement) => {
               const IconComponent = icons[achievement.icon];
               return (
               <Card key={achievement.id} className="flex flex-col shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-background overflow-hidden cursor-pointer" onClick={() => openDialog(achievement)}>
                 <div className="relative w-full aspect-video">
                   <Image 
                     src={achievement.image}
                     alt={achievement.title}
                     fill
                     className="object-cover"
                     data-ai-hint={achievement.imageHint}
                   />
                 </div>
                <CardHeader className="items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full -mt-10 mb-2 border-4 border-background z-10">
                    {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                  </div>
                  <CardTitle className="font-headline text-xl mt-2">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center flex-grow">
                  <p className="font-body text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedAchievement} onOpenChange={(isOpen) => !isOpen && closeDialog()}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 bg-card border-none shadow-2xl rounded-2xl flex flex-col">
          {selectedAchievement && (
            <>
               <DialogHeader className="p-4 border-b">
                <DialogTitle className="sr-only">{selectedAchievement.title}</DialogTitle>
              </DialogHeader>
              <div className="relative flex-grow w-full h-full">
                 <Button variant="ghost" size="icon" onClick={closeDialog} className="absolute top-2 right-2 z-10 bg-destructive text-destructive-foreground rounded-full h-8 w-8 hover:bg-destructive/80">
                  <X className="h-5 w-5" />
                  <span className="sr-only">বন্ধ করুন</span>
                </Button>
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <Image src={selectedAchievement.image} alt={selectedAchievement.title} fill className="object-contain" data-ai-hint={selectedAchievement.imageHint}/>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

type SocialWork = {
    id: string;
    image: string;
    alt: string;
    imageHint: string;
};

function SocialWorkSection() {
    const [socialWorks, setSocialWorks] = useState<SocialWork[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSocialWorks = async () => {
            setIsLoading(true);
            const socialWorksCollection = collection(db, "socialWorks");
            const snapshot = await getDocs(socialWorksCollection);
            const list = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SocialWork));
            setSocialWorks(list);
            setIsLoading(false);
        };
        fetchSocialWorks();
    }, []);

    const imagesToDisplay = [...socialWorks, ...socialWorks]; // Duplicate for seamless loop

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HandHeart className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">সামাজিক কাজে সিয়াম ইমন</h1>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        সমাজের প্রতি দায়বদ্ধতা থেকে আমাদের প্রার্থীর বিভিন্ন সামাজিক ও মানবিক কার্যক্রমের কিছু মুহূর্ত।
                    </p>
                </div>
            </div>
            <div className="mt-16 relative w-full overflow-hidden mask-image-lr">
                 {isLoading ? (
                    <div className="flex justify-center items-center h-80">
                        <p>ছবি লোড হচ্ছে...</p>
                    </div>
                ) : (
                <div className="flex animate-scroll">
                    {imagesToDisplay.map((image, index) => (
                        <Card key={`${image.id}-${index}`} className="flex-shrink-0 w-64 h-80 mx-4 shadow-lg overflow-hidden group">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image.image}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                                    data-ai-hint={image.imageHint}
                                />
                            </div>
                        </Card>
                    ))}
                </div>
                )}
            </div>
        </section>
    );
}

const leadershipPoints = [
    { icon: ShieldCheck, text: "জাতির অগ্রগতি আর শিক্ষার্থীদের অধিকার—সিয়াম ইমন আছে সবার পাশে, প্রতিটা পদক্ষেপে।" },
    { icon: Users, text: "মাঠে আছি, মাঠে থাকব—আপনাদের সুখ-দুঃখের সঙ্গী হব।" },
    { icon: GraduationCap, text: "কাজ করেছি, নেতৃত্ব দিয়েছি, সংগ্রাম করেছি—আপনাদের পাশে থেকে নিজেকে প্রমাণ করেছি।" },
    { icon: Megaphone, text: "আপনাদের ভালোবাসা এবং বিশ্বাসই আমার মূলধন। আপনাদের ভোটে আমি আরও ভালো কিছু করে দেখাব।" },
];

function LeadershipSection() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                        পদ নয়, <span className="text-red-600">দায়িত্বই একজন নেতার আসল পরিচয়।</span>
                    </h1>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                       প্রযুক্তি, শিক্ষা, গবেষণা ও আন্দোলন—এই চারটি স্তম্ভের ওপর দাঁড়িয়ে আমি আমার নেতৃত্বের প্রস্তুতি সম্পন্ন করেছি।
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {leadershipPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <p className="font-body text-muted-foreground">{point.text}</p>
                        </div>
                    ))}
                </div>
                <hr className="my-12 border-border" />
                <div className="text-center max-w-3xl mx-auto">
                     <p className="font-headline text-xl text-foreground">আসুন, আমরা সবাই মিলে গড়ে তুলি আমাদের কাঙ্ক্ষিত ঢাকা বিশ্ববিদ্যালয়।</p>
                     <p className="mt-2 font-headline text-2xl font-bold text-primary">প্রগতিশীল চিন্তাধারা, প্রযুক্তিগত দক্ষতা এবং সংগ্রামী মনোভাবের জন্য সিয়ামকে ভোট দিন।</p>
                     <p className="mt-4 font-body text-muted-foreground">তোমাদের প্রত্যক্ষ ও পরোক্ষ সমর্থন, সহযোগিতা, মতামত, পরামর্শ ও ভালোবাসাই আমার একমাত্র শক্তি ও সাহস❤️</p>
                </div>
            </div>
        </section>
    );
}

const faqItems = [
    {
        question: "গবেষণা ও প্রকাশনা সম্পাদক পদে সিয়াম ফেরদৌস ইমন কেন যোগ্য?",
        answer: "সিয়াম ফেরদৌস ইমন নিজে একজন সক্রিয় গবেষক এবং তার একাধিক গবেষণা আন্তর্জাতিক জার্নালে প্রকাশিত হয়েছে। তিনি শিক্ষার্থীদের গবেষণার সুযোগ বৃদ্ধি, প্রকাশনা সহজীকরণ এবং একটি আধুনিক ডিজিটাল লাইব্রেরি তৈরির জন্য বাস্তবসম্মত পরিকল্পনা করেছেন। তার অভিজ্ঞতা এবং পরিকল্পনা তাকে এই পদের জন্য সবচেয়ে যোগ্য প্রার্থী করে তুলেছে।"
    },
    {
        question: "ছাত্রছাত্রীদের জন্য তার বিশেষ পরিকল্পনা কী?",
        answer: "তার প্রধান পরিকল্পনার মধ্যে রয়েছে—গবেষণার জন্য ফান্ডিং সহজ করা, আন্তর্জাতিক সেমিনারে অংশগ্রহণের সুযোগ বৃদ্ধি, একটি ডিজিটাল প্রকাশনা প্ল্যাটফর্ম তৈরি, এবং ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন। তিনি বিশ্বাস করেন, এই উদ্যোগগুলো শিক্ষার্থীদের একাডেমিক এবং পেশাগত জীবনে ইতিবাচক পরিবর্তন আনবে।"
    },
    {
        question: "তিনি কি শিক্ষার্থীদের অধিকার আদায়ে সক্রিয়?",
        answer: "হ্যাঁ, সিয়াম ফেরদৌস ইমন ক্যাম্পাস জীবনের শুরু থেকেই বিভিন্ন যৌক্তিক আন্দোলনে সক্রিয়ভাবে অংশগ্রহণ করেছেন। তিনি শিক্ষার্থীদের ন্যায্য দাবি আদায়ে সর্বদা সামনে থেকে নেতৃত্ব দিয়েছেন এবং ভবিষ্যতেও ছাত্রসমাজের অধিকার রক্ষায় comprometido থাকবেন।"
    },
    {
        question: "নির্বাচিত হলে তার কাজের স্বচ্ছতা কীভাবে নিশ্চিত করবেন?",
        answer: "স্বচ্ছতা ও জবাবদিহিতা তার কাজের মূল ভিত্তি। তিনি নির্বাচিত হলে সকল কাজের নিয়মিত আপডেট ওয়েবসাইটের মাধ্যমে প্রকাশ করবেন। এছাড়াও, একটি 'ট্রান্সপারেন্সি' পেজ থাকবে যেখানে সকল আর্থিক হিসাব এবং প্রতিশ্রুতির বাস্তবায়ন প্রক্রিয়া সম্পর্কে বিস্তারিত তথ্য দেওয়া থাকবে।"
    }
];

function FAQSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HelpCircle className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                       কেন সিয়াম ফেরদৌস ইমনকে ভোট দেবেন?
                    </h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                       আপনার মনে থাকা কিছু সাধারণ প্রশ্নের উত্তর, যা আপনাকে সঠিক সিদ্ধান্ত নিতে সাহায্য করবে।
                    </p>
                </div>
                <div className="mt-12 max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item, index) => (
                             <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                                <Card className="shadow-md bg-card">
                                     <AccordionTrigger className="p-6 text-left hover:no-underline font-headline text-lg">
                                        {item.question}
                                     </AccordionTrigger>
                                     <AccordionContent className="px-6 pb-6">
                                        <p className="font-body text-muted-foreground">{item.answer}</p>
                                     </AccordionContent>
                                </Card>
                             </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

const initialFeedbackState = {
    name: '',
    mobile: '',
    hall: '',
    department: '',
    email: '',
    session: '',
    subject: '',
    message: '',
};

function FeedbackSection() {
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [formData, setFormData] = useState(initialFeedbackState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.subject || !formData.message) {
             toast({
                variant: "destructive",
                title: "ফর্ম পূরণ করুন",
                description: "অনুগ্রহ করে মতামতের বিষয় এবং বিস্তারিত বিবরণ লিখুন।",
            });
            return;
        }

        setIsSubmitting(true);
        try {
            const feedbackData: any = {
                subject: formData.subject,
                message: formData.message,
                isAnonymous: isAnonymous,
                createdAt: serverTimestamp(),
            };

            if (!isAnonymous) {
                feedbackData.name = formData.name;
                feedbackData.mobile = formData.mobile;
                feedbackData.hall = formData.hall;
                feedbackData.department = formData.department;
                feedbackData.email = formData.email;
                feedbackData.session = formData.session;
            }

            await addDoc(collection(db, "feedback"), feedbackData);

            toast({
                title: "মতামত সফলভাবে জমা হয়েছে!",
                description: "আপনার মূল্যবান মতামতের জন্য ধন্যবাদ।",
            });
            setFormData(initialFeedbackState);
            setIsAnonymous(false);

        } catch (error) {
             toast({
                variant: "destructive",
                title: "একটি ত্রুটি ঘটেছে",
                description: "আপনার মতামত জমা দেওয়া যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
            });
            console.error("Error adding document: ", error);
        } finally {
            setIsSubmitting(false);
        }
    };

  return (
    <section id="feedback-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Mail className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="font-headline text-4xl md:text-5xl">মতামত দিন</CardTitle>
              <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                আপনার মূল্যবান মতামত, পরামর্শ বা অভিযোগ আমাদের জানান। আপনার প্রতিটি কথাই আমাদের কাছে গুরুত্বপূর্ণ।
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="anonymous-mode" 
                    checked={isAnonymous}
                    onCheckedChange={setIsAnonymous}
                  />
                  <Label htmlFor="anonymous-mode" className="font-headline">পরিচয় গোপন রাখতে চাই</Label>
                </div>
                {!isAnonymous && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-headline">আপনার নাম</Label>
                      <Input id="name" placeholder="আপনার সম্পূর্ণ নাম" value={formData.name} onChange={handleInputChange}/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="font-headline">মোবাইল</Label>
                      <Input id="mobile" placeholder="আপনার মোবাইল নম্বর" value={formData.mobile} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hall" className="font-headline">আপনার হল</Label>
                      <Input id="hall" placeholder="আপনার হলের নাম" value={formData.hall} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department" className="font-headline">বিভাগ</Label>
                      <Input id="department" placeholder="আপনার বিভাগ" value={formData.department} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-headline">আপনার ইমেইল</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="session" className="font-headline">শিক্ষাবর্ষ</Label>
                      <Input id="session" placeholder="যেমন: ২০১৮-১৯" value={formData.session} onChange={handleInputChange} />
                    </div>
                  </div>
                )}
                 <div className="space-y-2">
                    <Label htmlFor="subject" className="font-headline">আপনার সমস্যা/মতামতের বিষয়</Label>
                    <Input id="subject" placeholder="যেমন: লাইব্রেরী সুবিধা, হলের সমস্যা" value={formData.subject} onChange={handleInputChange} required />
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-headline">আপনার সমস্যার বিস্তারিত বিবরণ...</Label>
                  <Textarea id="message" placeholder="আপনার মতামত বা সমস্যার বিস্তারিত এখানে লিখুন..." rows={6} value={formData.message} onChange={handleInputChange} required />
                </div>
                <Button type="submit" size="lg" className="w-full font-headline text-xl bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? 'জমা হচ্ছে...' : 'জমা দিন'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


function PreVoteSection() {
    const [voteCount, setVoteCount] = useState(0);
    const [hasVoted, setHasVoted] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();
    const voteDocRef = doc(db, "pre-votes", "live-count");

    useEffect(() => {
        const checkVotedStatus = () => {
            const voted = localStorage.getItem('hasVotedForSiam');
            if (voted === 'true') {
                setHasVoted(true);
            }
        };

        const fetchVoteCount = async () => {
            setIsLoading(true);
            try {
                const docSnap = await getDoc(voteDocRef);
                if (docSnap.exists()) {
                    setVoteCount(docSnap.data().count);
                } else {
                    await setDoc(voteDocRef, { count: 103 });
                    setVoteCount(103);
                }
            } catch (error) {
                console.error("Error fetching vote count:", error);
                setVoteCount(103); // Fallback
            } finally {
                setIsLoading(false);
            }
        };
        
        checkVotedStatus();
        fetchVoteCount();
    }, []);

    const handleVote = async () => {
        if (!hasVoted) {
            setIsLoading(true);
            try {
                await updateDoc(voteDocRef, {
                    count: increment(1)
                });
                
                const newVoteCount = voteCount + 1;
                setVoteCount(newVoteCount);
                setHasVoted(true);
                localStorage.setItem('hasVotedForSiam', 'true');

            } catch (error) {
                console.error("Error updating vote count:", error);
                 toast({
                    variant: "destructive",
                    title: "ভোট দেওয়া যায়নি",
                    description: "ভোট দেওয়ার সময় একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
                });
            } finally {
                setIsLoading(false);
            }
        }
    };
    
    const handleShare = async () => {
        const shareData = {
            title: 'সিয়াম ফেরদৌস ইমনকে প্রি-ভোটে সমর্থন জানান!',
            text: 'আমি ডাকসু নির্বাচনে গবেষণা ও প্রকাশনা সম্পাদক পদে সিয়াম ফেরদৌস ইমনকে সমর্থন করছি। আপনিও প্রি-ভোটে অংশ নিয়ে তাকে সমর্থন জানান!',
            url: window.location.origin + '#pre-vote',
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback for browsers that don't support Web Share API
                await navigator.clipboard.writeText(shareData.url);
                toast({
                    title: "লিঙ্ক কপি হয়েছে!",
                    description: "প্রি-ভোটিং লিঙ্কটি আপনার ক্লিপবোর্ডে কপি করা হয়েছে।",
                });
            }
        } catch (error: any) {
            // Don't show an error if the user cancels the share dialog
            if (error.name === 'AbortError') {
                return;
            }
            console.error('Error sharing:', error);
            toast({
                variant: "destructive",
                title: "শেয়ার করা যায়নি",
                description: "এই মুহূর্তে শেয়ার করা যাচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।",
            });
        }
    };

    return (
        <section id="pre-vote" className="py-16 md:py-24 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Vote className="mx-auto h-16 w-16 text-primary animate-pulse" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">প্রি-ভোটিং: আপনার সমর্থনই আমাদের শক্তি</h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        মূল নির্বাচনের আগে আপনার মূল্যবান ভোট দিয়ে সিয়াম ফেরদৌস ইমনকে সমর্থন জানান এবং এই পরিবর্তনের যাত্রায় আমাদের সঙ্গী হোন।
                    </p>
                    
                    <Card className="mt-8 shadow-2xl bg-card max-w-md mx-auto">
                        <CardContent className="p-6">
                            <p className="font-body text-muted-foreground">মোট প্রাপ্ত ভোট:</p>
                             <div className="text-6xl font-bold font-headline text-primary my-4 min-h-[72px] flex items-center justify-center">
                                {isLoading ? (
                                    <div className="flex space-x-2">
                                        <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="h-4 w-4 bg-primary rounded-full animate-bounce"></div>
                                    </div>
                                ) : (
                                    voteCount.toLocaleString('bn-BD')
                                )}
                            </div>
                            <Button 
                                size="lg" 
                                className="w-full font-headline text-xl h-14" 
                                onClick={handleVote}
                                disabled={hasVoted || isLoading}
                            >
                                {hasVoted ? 'ভোট দিয়েছেন' : 'সিয়াম ভাইকে ভোট দিন'}
                            </Button>
                            {hasVoted && (
                                <p className="text-green-600 font-semibold mt-3">আপনার ভোট সফলভাবে গৃহীত হয়েছে!</p>
                            )}
                        </CardContent>
                    </Card>

                    <div className="mt-8">
                        <h3 className="font-headline text-xl font-semibold text-foreground">বন্ধুদের সাথে শেয়ার করুন</h3>
                        <div className="flex justify-center gap-4 mt-4">
                            <Button variant="outline" size="lg" onClick={handleShare}>
                                <Share2 className="h-5 w-5" />
                                এখনই শেয়ার করুন
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
    

    

    

    













