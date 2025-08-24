
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpenCheck, BrainCircuit, Library, Users, Camera, X, Heart, Megaphone, Flag, Award, FileText, Mic, GraduationCap, HandHeart, BookText, ShieldCheck, MessageSquare, Mail, Icon, ImagePlus, Annoyed, HelpCircle, Vote, Share2, DollarSign, Archive, Laptop, Combine, Trophy } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
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
    description: "একটি গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে আমি শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় সুযোগ-সুবিধা নিশ্চিত করতে কাজ করব।",
    image: "https://i.postimg.cc/9XZXtkTj/photo-2025-08-18-01-30-06.jpg",
    imageHint: "research opportunity"
  },
  {
    title: "Dean's Award 2025 , জীব বিজ্ঞান অনুষদ",
    subtitle: "শিক্ষায় অবদানের জন্য সম্মাননা",
    description: "ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন, গবেষণা ও প্রকাশনায় অবদান এবং সার্বিক একাডেমিক উৎকর্ষতা সাধনের জন্য আমাকে এই সম্মাননায় ভূষিত করা হয়েছে।",
    image: "https://i.postimg.cc/7LwWCm7D/Screenshot-2025-08-18-014212.png",
    imageHint: "receiving award"
  },
  {
    title: "গবেষণামূলক উপস্থাপনা",
    subtitle: "নতুন ধারণা, নতুন পথ",
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে আমি আমার গবেষণামূলক কাজগুলো শিক্ষার্থীদের সামনে তুলে ধরছি, যা তাদের মধ্যে নতুন ধারণা ও গবেষণার প্রতি আগ্রহ সৃষ্টি করবে।",
    image: "https://i.postimg.cc/763HDBgz/Screenshot-2025-08-18-020259.png",
    imageHint: "research presentation"
  },
  {
    title: "গবেষণাগারে নিরলস কাজ",
    subtitle: "গবেষণায় আধুনিক প্রযুক্তি",
    description: "একটি উন্নত গবেষণামুখী ছাত্র সংসদ গঠনের অঙ্গীকার নিয়ে আমি শিক্ষার্থীদের জন্য গবেষণাগারে প্রয়োজনীয় আধুনিক সুযোগ-সুবিধা নিশ্চিত করতে কাজ করছি।",
    image: "https://i.postimg.cc/vHRK5YwG/photo-2025-08-18-02-08-33.jpg",
    imageHint: "working in lab"
  },
  {
    title: "গবেষণাগারে আমি: জ্ঞানের সন্ধানে",
    subtitle: "ল্যাবরেটরি থেকে নতুন উদ্ভাবন",
    description: "একটি উন্নত গবেষণামূলক পরিবেশ নিশ্চিত করার মাধ্যমে শিক্ষার্থীদের মাঝে নতুন উদ্ভাবনী ধারণার জন্ম দিতে আমি নিরলসভাবে কাজ করে যাচ্ছি।",
    image: "https://i.postimg.cc/wxPZWxXt/photo-2025-08-18-01-23-31.jpg",
    imageHint: "siam in laboratory"
  },
  {
    title: "জাতীয় সম্মেলনে আমার অংশগ্রহণ",
    subtitle: "গবেষণা ও প্রকাশনার প্রতি প্রতিশ্রুতি",
    description: "২৪তম জাতীয় সম্মেলন এবং বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় উপস্থিত থেকে আমি দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে গবেষণা ও প্রকাশনা খাতের ভবিষ্যৎ নিয়ে আলোচনা করি।",
    image: "https://i.postimg.cc/26MQRS7y/Screenshot-2025-08-18-015837.png",
    imageHint: "national conference"
  },
  {
    title: "পরিবেশ সুরক্ষা অভিযান",
    subtitle: "সবুজ বাঁচাও",
    description: "পরিবেশ রক্ষায় আমি বৃক্ষরোপণ এবং সচেতনতামূলক কার্যক্রম চলমান রেখেছি।",
    image: "https://i.postimg.cc/7hPr1K0g/photo-2025-08-18-00-47-45.jpg",
    imageHint: "environment protection campaign"
  },
  {
    title: "শিক্ষায় অবদানের জন্য সম্মাননা",
    subtitle: "অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি",
    description: "একটি শিক্ষাবান্ধব পরিবেশ তৈরিতে আমার অবদানের জন্য অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি বিভাগ কর্তৃক আমাকে এই বিশেষ সম্মাননা প্রদান করা হয়।",
    image: "https://i.postimg.cc/FRpK3W74/photo-2025-08-18-02-08-11.jpg",
    imageHint: "receiving award biology"
  },
    {
    title: "গবেষণায় আমার সক্রিয় অংশগ্রহণ",
    subtitle: "ঢাকা বিশ্ববিদ্যালয় প্রাণিবিজ্ঞান বিভাগ কর্তৃক আয়োজিত",
    description: "বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় (২০২৪) উপস্থিত হয়ে আমি গবেষণা ও প্রকাশনা খাতে আমার অঙ্গীকার ব্যক্ত করেছি।",
    image: "https://i.postimg.cc/PJqYGk1N/photo-2025-08-18-01-08-52.jpg",
    imageHint: "research participation"
  },
];

const icons: { [key: string]: React.ElementType } = {
    DollarSign,
    BookOpenCheck,
    Archive,
    Laptop,
    BrainCircuit,
    Library,
    Award,
    FileText,
    Mic,
    GraduationCap,
    Users
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <NewHeroSection />
      <VideoSection />
      <AboutSection />
      <NoticeSection />
      <VoteBannerSection />
      <CommitmentSection />
      <ResearchSection />
      <PublicationSection />
      <LogicalMovementSection />
      <AcademicAchievementSection />
      <SkillsLeadershipServiceSection />
      <OrganizerAndEditorSection />
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
                         <Link href="/manifesto">আমার লক্ষ্য</Link>
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

function VideoSection() {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/0Yr2EGZI-xc?autoplay=1&controls=1&loop=1&playlist=0Yr2EGZI-xc&showinfo=0&rel=0&modestbranding=1"
                        title="Campaign Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}


function AboutSection() {
  return (
    <section className="py-8 md:py-12 bg-background">
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
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">আমার পরিচিতি</h2>
            <div className="font-body text-lg md:text-xl space-y-4 text-muted-foreground">
              <p>
                আমি <span className="text-primary font-bold">সিয়াম ফেরদৌস ইমন</span>, ঢাকা বিশ্ববিদ্যালয়ের ২০১৮-১৯ সেশনের প্রাণিবিদ্যা বিভাগের মাস্টার্সে (Genetics and Molecular Biology Branch) অধ্যয়নরত এবং ফজলুল হক মুসলিম হলের নিয়মিত আবাসিক শিক্ষার্থী। আমি বিগত ৬ বছর ধরে বিশ্ববিদ্যালয় জীবনে বিভিন্ন <span className="text-accent font-semibold">ছাত্রকল্যাণমূলক কার্যক্রম</span>, যোক্তিক ও ন্যায্য দাবি আদায়ের পাশাপাশি <span className="text-accent font-semibold">গবেষণা ও একাডেমিক কর্মকাণ্ডের</span> সাথে শুরু থেকে সক্রিয় আছি।
              </p>
              <p>
                আপনাদের ভালোবাসা, সহযোগিতা ও আস্থার জোরেই আমি আসন্ন ঢাকা বিশ্ববিদ্যালয়ের কেন্দ্রীয় ছাত্র সংসদ (ডাকসু) নির্বাচনে <span className="bg-primary/20 text-red-600 font-bold p-1 rounded">গবেষণা ও প্রকাশনা সম্পাদক পদে</span> প্রার্থী হওয়ার সিদ্ধান্ত নিয়েছি।
              </p>
              <p>
              আমি প্রতিশ্রুতি দিচ্ছি, যদি আপনারা আমাকে ডাকসু ২০২৫-এ গবেষণা ও প্রকাশনা সম্পাদক হিসেবে দায়িত্ব দেন, তবে আমি আপনাদের জন্য একটি কার্যকর এবং ছাত্রবান্ধব পরিবেশ তৈরি করতে কাজ করে যাবো।
              </p>
            </div>
            <Button asChild className="mt-8 font-headline text-lg">
              <Link href="/about">
                আমার সম্পর্কে আরও জানুন <ArrowRight className="ml-2 h-5 w-5" />
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
            try {
                const commitmentsCollection = collection(db, "commitments");
                const commitmentsSnapshot = await getDocs(commitmentsCollection);
                const commitmentsList = commitmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Commitment));
                setCommitments(commitmentsList);
            } catch (error) {
                console.error("Error fetching commitments, using fallback.", error);
                const fallbackCommitments = [
                    { id: "1", icon: "DollarSign", title: "গবেষণা তহবিল ও স্কলারশিপ", description: "আমি বিভাগভিত্তিক গবেষণা তহবিল এবং আন্তর্জাতিক স্কলারশিপের জন্য ‘রিসার্চ হেল্প ডেস্ক’ চালু করব।" },
                    { id: "2", icon: "BookOpenCheck", title: "শিক্ষার্থীদের নিজস্ব জার্নাল", description: "আমি ডাকসুর উদ্যোগে একটি স্টুডেন্ট জার্নাল (SJDU) প্রকাশ করব, যেখানে শিক্ষার্থীরা তাদের গবেষণা প্রকাশ করতে পারবে।" },
                    { id: "3", icon: "Archive", title: "ডিজিটাল আর্কাইভ ও ওপেন অ্যাকসেস", description: "আমি প্রতিটি বিভাগের গবেষণা-প্রবন্ধ ও থিসিসের জন্য ডিজিটাল আর্কাইভ তৈরি এবং আন্তর্জাতিক জার্নালে সহজ অ্যাক্সেস নিশ্চিত করব।" },
                    { id: "4", icon: "Laptop", title: "প্রশিক্ষণ ও কর্মশালা", description: "আমি একাডেমিক রাইটিং, গবেষণা পদ্ধতি এবং বিভিন্ন সফটওয়্যারের উপর নিয়মিত কর্মশালা আয়োজন করব।" },
                    { id: "5", icon: "Users", title: "গবেষণায় স্বচ্ছতা ও অংশগ্রহণ", description: "আমি প্রতিটি উদ্যোগ শিক্ষার্থীদের পরামর্শ ও অংশগ্রহণের মাধ্যমে গড়ে তুলব।" },
                ];
                setCommitments(fallbackCommitments);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCommitments();
    }, []);

    return (
        <section className="py-16 md:py-24 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আমার অঙ্গীকার</h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        প্রিয় ঢাকা বিশ্ববিদ্যালয়ের সহপাঠীরা, আমরা সবাই জানি—জ্ঞানচর্চা, গবেষণা আর প্রকাশনা ছাড়া প্রকৃত উচ্চশিক্ষার অগ্রগতি সম্ভব নয়। কিন্তু আমাদের অনেক সম্ভাবনাময় গবেষণা কেবল সুযোগ ও প্ল্যাটফর্মের অভাবে থেমে যায়। আমি প্রতিশ্রুতি দিচ্ছি, যদি আপনারা আমাকে ডাকসু ২০২৫-এ গবেষণা ও প্রকাশনা সম্পাদক হিসেবে দায়িত্ব দেন, তবে আমি বিভাগভিত্তিক গবেষণা তহবিল ও আন্তর্জাতিক স্কলারশিপের সহায়তা, ডাকসুর নিজস্ব স্টুডেন্ট জার্নাল প্রকাশ, প্রতিটি থিসিস ও গবেষণার জন্য ডিজিটাল আর্কাইভ, একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং কর্মশালা এবং শিক্ষার্থীদের জন্য গবেষণাভিত্তিক কনফারেন্স ও সেমিনার আয়োজন করব। আপনার ভোটে গড়ে উঠুক একটি গবেষণা-উদ্যমী ডাকসু।
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {isLoading ? Array.from({ length: 5 }).map((_, i) => (
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
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-green-700">ভোট দিন আমাকে!</h2>
        <p className="mt-2 text-lg md:text-xl font-body text-foreground">আপনার প্রতিনিধি, আপনার কন্ঠস্বর | ডাকসু ২০২৫</p>
        <p className="mt-4 inline-block bg-accent text-accent-foreground font-headline text-2xl md:text-3xl font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
          আপনার ভোটে গড়ে উঠুক একটি গবেষণা-উদ্যমী ডাকসু
        </p>
      </div>
    </section>
  );
}

const researchActivities = [
  {
    icon: Heart,
    title: "আমার গবেষণা",
    description: "আমি কেবল একজন প্রার্থী নই, বরং একজন সক্রিয় গবেষক। আমি বাংলাদেশ জুওলজিক্যাল সোসাইটির বার্ষিক সাধারণ সভায় নিয়মিত উপস্থিত থেকে দেশের সেরা গবেষক ও শিক্ষাবিদদের সাথে জ্ঞান আদান-প্রদান করি। আমার নিজস্ব গবেষণাগারে নিরলস কাজ করার অভিজ্ঞতা আমাকে শিক্ষার্থীদের বাস্তব সমস্যাগুলো বুঝতে সাহায্য করে।",
    images: [
      { src: "https://i.postimg.cc/vHRK5YwG/photo-2025-08-18-02-08-33.jpg", alt: "গবেষণাগারে কাজ করছি", hint: "working in lab" },
      { src: "https://i.postimg.cc/9XZXtkTj/photo-2025-08-18-01-30-06.jpg", alt: "গবেষণার সরঞ্জাম", hint: "research equipment" },
    ],
  },
  {
    icon: Megaphone,
    title: "আমার আয়োজিত সেমিনার ও আলোচনা সভা",
    description: "শিক্ষার্থীদের গবেষণায় উৎসাহিত করতে এবং তাদের উচ্চশিক্ষার পথ দেখাতে আমি একটি সেমিনার আয়োজনের পরিকল্পনা করেছি। এই সেমিনারে গবেষণার গুরুত্ব, বিদেশে উচ্চশিক্ষার সুযোগ এবং অভিজ্ঞ গবেষকদের সাথে সরাসরি আলোচনার ব্যবস্থা থাকবে। আমার লক্ষ্য হলো শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করা এবং তাদের মধ্যে নতুন কিছু শেখার আগ্রহ তৈরি করা।",
    images: [
        { src: "https://i.postimg.cc/ZYNzxJDx/photo-2025-08-21-01-06-15.jpg", alt: "সেমিনারে অংশগ্রহণকারীদের একাংশ", hint: "seminar audience" },
        { src: "https://i.postimg.cc/4ypCf1hS/photo-2025-08-21-01-06-17.jpg", alt: "আলোচনা সভায় বক্তব্য রাখছি", hint: "speaker presentation" },
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
    title: "আমার আয়োজিত ইয়ুথ কনফারেন্স",
    description: "গবেষণা ও প্রকাশনা সম্পাদকের দায়িত্ব শুধু পদ অলংকৃত করা নয়, বরং শিক্ষার্থীদের জন্য কার্যকর সুযোগ তৈরি করা। আমি অতীতেও সেই কাজটিই করেছি।\n\nএই ছবিগুলো আমার আয়োজিত কয়েকটি সফল উদ্যোগের প্রমাণ। একটি বড় পরিসরের জাতীয় সম্মেলন থেকে শুরু করে শিক্ষার্থীদের জন্য বিশেষায়িত কর্মশালা—প্রতিটি ক্ষেত্রেই আমি নেতৃত্ব দিয়েছি এবং তরুণদের জন্য শেখার ও নিজেদের মেলে ধরার সুযোগ তৈরি করেছি। কথা দিয়ে নয়, আমি কাজের মাধ্যমে শিক্ষার্থীদের পাশে থাকতে চাই।",
    images: [
      { src: "https://i.postimg.cc/KYTxK34X/photo_2025-08-21_17-43-25.jpg", alt: "তরুণ অংশগ্রহণকারীরা কনফারেন্সে অংশ নিচ্ছেন", hint: "youth conference" },
      { src: "https://i.postimg.cc/bwszhBhw/photo_2025-08-21_17-43-23.jpg", alt: "মঞ্চে বক্তা বক্তব্য রাখছেন", hint: "youth speaker" },
      { src: "https://i.postimg.cc/ht6KP1Db/photo_2025-08-21_17-43-20.jpg", alt: "তরুণ অংশগ্রহণকারীরা কনফারেন্সে অংশ নিচ্ছেন", hint: "youth conference" },
    ],
  },
];

function ResearchSection() {
  
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Camera className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আমার গবেষণা ও কার্যক্রম</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            জ্ঞানভিত্তিক সমাজ গঠনে আমার গবেষণা, ওয়ার্কশপ এবং বিভিন্ন কার্যক্রমের ঝলক।
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {researchActivities.map((activity, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-lg shadow-md">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <activity.icon className="w-8 h-8 text-primary" />
                  <h3 className="font-headline text-3xl font-bold text-foreground">{activity.title}</h3>
                </div>
                <p className="font-body text-muted-foreground whitespace-pre-line">{activity.description}</p>
              </div>
               <div className="relative w-full aspect-video rounded-lg overflow-hidden order-1 md:order-2">
                 <Carousel className="w-full h-full">
                    <CarouselContent>
                        {activity.images.map((image, i) => (
                        <CarouselItem key={i}>
                            <div className="relative w-full h-full aspect-video">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                            />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {activity.images.length > 1 && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                        </>
                    )}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


const publicationActivities = [
  {
    icon: BookText,
    title: "রাজপথ থেকে পড়ার টেবিল, আমি আছি তোমাদের পাশে।",
    description: "শিক্ষার্থীদের অধিকার আদায়ের সংগ্রামের পাশাপাশি তাদের একাডেমিক স্বপ্নপূরণের পথ সহজ করে দেওয়াও আমার দায়িত্ব বলে মনে করি। আমার লেখা \"Royal Admission Biology\" বইটি সেই চেষ্টারই একটি প্রতিফলন। ভর্তিযুদ্ধে অংশ নেওয়া ছোট ভাই-বোনদের জন্য আমার এই ক্ষুদ্র প্রয়াস, তাদের স্বপ্নযাত্রায় সামান্য সাহায্য করতে পারলেই আমি সার্থক।",
    images: [
      { src: "https://i.postimg.cc/8CVbShVj/Screenshot-2025-08-21-170853.png", alt: "Royal Admission Biology বইয়ের কভার", hint: "book cover", link: "https://bdbooks.net/product/Royal-Admission-Biology-1st-&-2nd-Paper-Short-Syllabus---2024-25" },
      { src: "https://i.postimg.cc/50Dr8XCv/photo-2025-08-21-17-23-48.jpg", alt: "সিয়াম ফেরদৌস ইমন", hint: "author portrait" },
    ],
  },
];


function PublicationSection() {

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <BookOpenCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">প্রকাশনায় আমি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            জ্ঞানচর্চা ও সৃজনশীলতার প্রসারে প্রকাশনা জগতে আমার উদ্যোগ ও কার্যক্রম।
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
              <div className="relative w-full aspect-video rounded-lg overflow-hidden order-1 md:order-2">
                 <Carousel className="w-full h-full">
                    <CarouselContent>
                        {activity.images.map((image, i) => (
                        <CarouselItem key={i}>
                            {image.link ? (
                                <Link href={image.link} target="_blank" rel="noopener noreferrer">
                                    <div className="relative w-full h-full aspect-video">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.hint}
                                    />
                                    </div>
                                </Link>
                            ) : (
                                <div className="relative w-full h-full aspect-video">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.hint}
                                />
                                </div>
                            )}
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {activity.images.length > 1 && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                        </>
                    )}
                </Carousel>
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
    title: "যৌক্তিক আন্দোলনে আমি",
    description: "সংগ্রামের সেই দিনগুলোর কথা আমি ভুলিনি। ১৭ই জুলাইয়ের সেই উত্তাল মুহূর্তে যখন সবাই শঙ্কায়, আমি শেষ মুহূর্ত পর্যন্ত হল আঁকড়ে ছিলাম, আমার ভাই-বন্ধু-সহযোদ্ধাদের ছেড়ে যাইনি। আসলে, ঢাকা বিশ্ববিদ্যালয়ের একজন ছাত্র হিসেবে আমার পরিচয় শুধু ক্লাসরুমে সীমাবদ্ধ থাকেনি। এই ক্যাম্পাসে পথচলার প্রথম দিন থেকে শুরু করে প্রতিটি যৌক্তিক ও ন্যায্য অধিকারের আন্দোলনে আমার ঠিকানা ছিল রাজপথ।",
    images: [
      { src: "https://i.postimg.cc/DZ8nTsg9/photo_2025-08-21_01-07_09.jpg", alt: "আন্দোলনে অংশগ্রহণ", hint: "protest movement" },
      { src: "https://i.postimg.cc/XJm37J1p/photo_2025-08-21_01-07_12.jpg", alt: "ছাত্রদের সমাবেশ", hint: "student gathering" },
      { src: "https://i.postimg.cc/bwpPv4gH/photo_2025-08-21_01-06_54.jpg", alt: "ছাত্রদের সমাবেশ", hint: "student gathering" },
      { src: "https://i.postimg.cc/CMnSrGdD/photo_2025-08-21_01-07_05.jpg", alt: "ছাত্রদের সমাবেশ", hint: "student gathering" },
      { src: "https://i.postimg.cc/VLj1mzqk/photo_2025-08-21_01-07_01.jpg", alt: "ছাত্রদের সমাবেশ", hint: "student gathering" },
    ],
  },
];

function LogicalMovementSection() {

  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Flag className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">যৌক্তিক আন্দোলনে আমি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            শিক্ষার্থীদের অধিকার এবং বিভিন্ন সামাজিক ন্যায্যতার দাবিতে আমার অংশগ্রহণের ঝলক।
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
              <div className="relative w-full aspect-video rounded-lg overflow-hidden order-1 md:order-2">
                <Carousel className="w-full h-full">
                    <CarouselContent>
                        {activity.images.map((image, i) => (
                        <CarouselItem key={i}>
                            <div className="relative w-full h-full aspect-video">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover"
                                data-ai-hint={image.hint}
                            />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    {activity.images.length > 1 && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                        </>
                    )}
                </Carousel>
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

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আমার একাডেমিক অর্জন</h2>
            <p className="mt-4 font-body text-lg text-muted-foreground">
              আমার শিক্ষাজীবনের কিছু উল্লেখযোগ্য সাফল্য এবং অর্জন নিচে তুলে ধরা হলো।
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
               const IconComponent = icons[achievement.icon] || Award;
               return (
               <Card key={achievement.id} className="flex flex-col shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-background overflow-hidden">
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
                    <IconComponent className="h-8 w-8 text-primary" />
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
    </>
  );
}

const skillsAndLeadershipActivities = [
  {
    icon: Trophy,
    title: "চ্যাম্পিয়ন, বারোয়ারী বিতর্ক প্রতিযোগিতা, প্রজাপতি মেলা ২০২২, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    description: "",
    images: [
      { src: "https://i.postimg.cc/Zq10xrhb/photo_2025-08-21_23-26_09.jpg", alt: "বিতর্ক প্রতিযোগিতা পুরস্কার", hint: "debate award" },
    ],
  },
  {
    icon: Trophy,
    title: "বারোয়ারী ডিবেট কম্পিটিশন, প্রজাপতি মেলা ২০২৩, জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    description: "",
    images: [
       { src: "https://i.postimg.cc/NfgFDsZH/photo_2025-08-21_23-30-00.jpg", alt: "বিতর্ক প্রতিযোগিতা", hint: "debate competition" },
       { src: "https://i.postimg.cc/T1xwZfwB/photo_2025-08-21_23-30_31.jpg", alt: "বিতর্ক প্রতিযোগিতা", hint: "debate competition" },
    ],
  },
    {
    icon: Trophy,
    title: "Intra Department Football Tournament 2023",
    description: "",
    images: [
        { src: "https://i.postimg.cc/SNDsv0pt/photo_2025-08-21_23-30-10.jpg", alt: "ফুটবল টুর্নামেন্ট", hint: "football tournament" },
    ],
  },
  {
    icon: Trophy,
    title: "প্রজাপতি মেলা ২০২১, ডিবেট কম্পিটিশন চ্যাম্পিয়ন, বারোয়ারী ডিবেট রানার্সআপ",
    description: "",
    images: [
        { src: "https://i.postimg.cc/XNKX9G1W/photo_2025-08-21_23-30-16.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
        { src: "https://i.postimg.cc/qqGRrS6q/photo_2025-08-21_23-30_21.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
        { src: "https://i.postimg.cc/xCM8xc0K/photo_2025-08-21_23-30_26.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
    ],
  },
];

function SkillsLeadershipServiceSection() {
    return (
        <section className="bg-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Combine className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        আমার দক্ষতা, নেতৃত্ব ও সেবা
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                       আমি বিশ্বাস করি, একজন শিক্ষার্থীর প্রকৃত বিকাশ শুধু একাডেমিক পড়াশোনার মধ্যে সীমাবদ্ধ থাকে না, বরং তার পূর্ণতা আসে সহশিক্ষা কার্যক্রমের মাধ্যমে। আমার বিশ্ববিদ্যালয় জীবনজুড়ে আমি সেই চেষ্টাই করেছি—একদিকে যেমন যৌক্তিক আন্দোলনে রাজপথে থেকেছি, তেমনই সহপাঠী ও অনুজদের জন্য কর্মশালা ও সম্মেলন আয়োজন করেছি। ভর্তিচ্ছুদের স্বপ্নপূরণের পথে সঙ্গী হতে কলম ধরেছি, আবার গবেষণার জগতে তরুণদের উৎসাহিত করতে নতুন নতুন প্ল্যাটফর্ম তৈরির চেষ্টা করেছি। আমার এই পথচলা মূলত দক্ষতা, নেতৃত্ব ও সেবার এক সমন্বয়, যার মাধ্যমে আমি ঢাকা বিশ্ববিদ্যালয়ের প্রতিটি শিক্ষার্থীর জন্য একটি সমৃদ্ধ ক্যাম্পাস জীবন নিশ্চিত করতে চাই।
                    </p>
                </div>
                <div className="mt-16 space-y-8">
                  {skillsAndLeadershipActivities.map((activity, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-card p-6 rounded-lg shadow-md">
                      <div className="order-2 md:order-1">
                        <div className="flex items-center gap-3 mb-4">
                          <activity.icon className="w-8 h-8 text-primary" />
                          <h3 className="font-headline text-3xl font-bold text-foreground">{activity.title}</h3>
                        </div>
                        {activity.description && <p className="font-body text-muted-foreground whitespace-pre-line">{activity.description}</p>}
                      </div>
                       <div className="relative w-full aspect-video rounded-lg overflow-hidden order-1 md:order-2">
                         <Carousel className="w-full h-full">
                            <CarouselContent>
                                {activity.images.map((image, i) => (
                                <CarouselItem key={i}>
                                    <div className="relative w-full h-full aspect-video">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.hint}
                                    />
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            {activity.images.length > 1 && (
                                <>
                                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none" />
                                </>
                            )}
                        </Carousel>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    );
}

const organizationExperience = [
    {
        title: "President",
        description: "Animal Genetics & Molecular Biology Club- AGMBC, গবেষণা রিলেটেড ক্লাব",
        image: "https://i.postimg.cc/6pgtWmgz/451374210-3661627947435304-7044717898982288749-n.jpg",
        link: "https://www.facebook.com/profile.php?id=61562612316669"
    },
    {
        title: "Co-Founder",
        description: "স্টুডেন্ট এলায়েন্স অফ পিরোজপুর (বলেশ্বর), উচ্চশিক্ষা সহায়ক বিষয়ক অর্গানাইজেশনের",
        image: "https://i.postimg.cc/pLn3ZXcY/image.png",
        link: null
    },
    {
        title: "Founder",
        description: "The Hemoglobin, রক্তদান ও সচেতনতা সৃষ্টি",
        image: "https://i.postimg.cc/j588TGkS/image.png",
        link: "https://www.facebook.com/hemoglobinorg.du"
    },
    {
        title: "Founding vice-president",
        description: "Zoology Debating Club, University of Dhaka, বিভাগের বিতর্ক ক্লাব",
        image: "https://i.postimg.cc/dQpbTy4t/image.png",
        link: "https://www.facebook.com/profile.php?id=100090628602499"
    },
    {
        title: "Secretary for Hospitality",
        description: "F.H Hall Debating Club-FHDC, হলের বিতর্ক সংগঠন",
        image: "https://i.postimg.cc/RF8Dfk1b/image.png",
        link: "https://www.facebook.com/FHDC1999"
    }
];

function OrganizerAndEditorSection() {
    const renderCard = (item: typeof organizationExperience[0]) => (
        <Card key={item.title} className="flex flex-col shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 bg-background overflow-hidden h-full">
            <div className="relative w-full aspect-square">
                <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint="organization logo"
                />
            </div>
            <div className="p-4 text-center flex flex-col flex-grow">
                <h3 className="font-headline text-xl font-bold">{item.title}</h3>
                <p className="font-body text-muted-foreground mt-1 flex-grow">{item.description}</p>
            </div>
        </Card>
    );

    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Users className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        একজন সংগঠক ও সম্পাদক হিসেবে আমার অভিজ্ঞতা
                    </h2>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {organizationExperience.map((item) => (
                        item.link ? (
                            <Link key={item.title} href={item.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
                                {renderCard(item)}
                            </Link>
                        ) : (
                           <div key={item.title} className="flex flex-col h-full">{renderCard(item)}</div>
                        )
                    ))}
                </div>
            </div>
        </section>
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
            try {
                const socialWorksCollection = collection(db, "socialWorks");
                const socialWorksSnapshot = await getDocs(socialWorksCollection);
                const socialWorksList = socialWorksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SocialWork));
                setSocialWorks(socialWorksList);
            } catch (error) {
                console.error("Error fetching social works:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSocialWorks();
    }, []);

    const imagesToDisplay = socialWorks.length > 0 ? [...socialWorks, ...socialWorks] : [];

    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HandHeart className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        আমার সামাজিক কাজ
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        সমাজের প্রতি দায়বদ্ধতা থেকে আমার বিভিন্ন সামাজিক ও মানবিক কার্যক্রমের কিছু মুহূর্ত।
                    </p>
                </div>
            </div>
            <div className="mt-12 w-full overflow-hidden mask-image-lr group">
                 <div className="animate-scroll group-hover:pause-animation">
                    {isLoading ? (
                        Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="inline-block p-4">
                                <Skeleton className="w-56 h-40 rounded-lg" />
                            </div>
                        ))
                    ) : (
                        imagesToDisplay.map((work, index) => (
                            <div key={`${work.id}-${index}`} className="inline-block p-4">
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-4">
                                        <div className="relative h-40 w-56">
                                            <Image
                                                src={work.image}
                                                alt={work.alt}
                                                fill
                                                className="object-contain rounded-md"
                                                data-ai-hint={work.imageHint}
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

const leadershipPoints = [
    { icon: ShieldCheck, text: "জাতির অগ্রগতি আর শিক্ষার্থীদের অধিকার—আমি আছি সবার পাশে, প্রতিটা পদক্ষেপে।" },
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
                        পদ নয়, <span className="text-red-600">দায়িত্বই আমার আসল পরিচয়।</span>
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
                     <p className="mt-2 font-headline text-2xl font-bold text-primary">প্রগতিশীল চিন্তাধারা, প্রযুক্তিগত দক্ষতা এবং সংগ্রামী মনোভাবের জন্য আমাকে ভোট দিন।</p>
                     <p className="mt-4 font-body text-muted-foreground">তোমাদের প্রত্যক্ষ ও পরোক্ষ সমর্থন, সহযোগিতা, মতামত, পরামর্শ ও ভালোবাসাই আমার একমাত্র শক্তি ও সাহস❤️</p>
                </div>
            </div>
        </section>
    );
}

const faqItems = [
    {
        question: "গবেষণা ও প্রকাশনা সম্পাদক পদে আমি কেন যোগ্য?",
        answer: "আমি নিজে একজন সক্রিয় গবেষক এবং ছাত্র সমাজের সমস্যাগুলো সম্পর্কে অবগত। আমি শিক্ষার্থীদের জন্য গবেষণা তহবিল, আন্তর্জাতিক স্কলারশিপের তথ্য প্রদানে ‘রিসার্চ হেল্প ডেস্ক’, ডাকসুর নিজস্ব স্টুডেন্ট জার্নাল প্রকাশ এবং ডিজিটাল আর্কাইভ তৈরির মতো বাস্তবসম্মত ও সুনির্দিষ্ট পরিকল্পনা করেছি, যা আমাকে এই পদের জন্য যোগ্য করে তুলেছে।"
    },
    {
        question: "শিক্ষার্থীদের জন্য আমার বিশেষ পরিকল্পনা কী?",
        answer: "আমার প্রধান পরিকল্পনার মধ্যে রয়েছে—গবেষণা পদ্ধতি, একাডেমিক রাইটিং এবং SPSS, R, EndNote, Latex এর মতো সফটওয়্যারের উপর নিয়মিত বিনামূল্যে কর্মশালা আয়োজন করা। এছাড়াও আমি শিক্ষার্থীদের গবেষণা উপস্থাপনের জন্য সেমিনার, কনফারেন্স ও পোস্টার প্রেজেন্টেশনের সুযোগ তৈরি করতে চাই।"
    },
    {
        question: "আমি কি শিক্ষার্থীদের অধিকার আদায়ে সক্রিয়?",
        answer: "হ্যাঁ, আমি আমার ক্যাম্পাস জীবনের শুরু থেকেই বিভিন্ন যৌক্তিক আন্দোলনে সক্রিয়ভাবে অংশগ্রহণ করেছি। আমি শিক্ষার্থীদের ন্যায্য দাবি আদায়ে সর্বদা সামনে থেকে নেতৃত্ব দিয়েছি এবং ভবিষ্যতেও ছাত্রসমাজের অধিকার রক্ষায় প্রতিশ্রুতিবদ্ধ থাকব।"
    },
    {
        question: "নির্বাচিত হলে আমি কীভাবে স্বচ্ছতা নিশ্চিত করব?",
        answer: "স্বচ্ছতা ও জবাবদিহিতা আমার কাজের মূল ভিত্তি হবে। আমি প্রতিটি উদ্যোগ শিক্ষার্থীদের পরামর্শ ও অংশগ্রহণের মাধ্যমে গড়ে তুলব। সকল কাজের নিয়মিত আপডেট ওয়েবসাইটের মাধ্যমে প্রকাশ করা হবে এবং শিক্ষার্থীরাই হবে গবেষণা ও প্রকাশনার মূল চালিকা শক্তি—ডাকসু হবে তাদের ভরসার জায়গা।"
    }
];

function FAQSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HelpCircle className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                       কেন আমাকে ভোট দেবেন?
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
              <CardTitle className="font-headline text-4xl md:text-5xl">আপনার মতামত দিন</CardTitle>
              <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                আপনার মূল্যবান মতামত, পরামর্শ বা অভিযোগ আমাকে জানান। আপনার প্রতিটি কথাই আমার কাছে গুরুত্বপূর্ণ।
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
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">প্রি-ভোটিং: আপনার সমর্থনই আমার শক্তি</h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        মূল নির্বাচনের আগে আপনার মূল্যবান ভোট দিয়ে আমাকে সমর্থন জানান এবং এই পরিবর্তনের যাত্রায় আমার সঙ্গী হোন।
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
                                {hasVoted ? 'ভোট দিয়েছেন' : 'আমাকে ভোট দিন'}
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

    



