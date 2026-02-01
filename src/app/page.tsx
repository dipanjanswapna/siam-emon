
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Users, Camera, Mail, ShieldCheck, MessageSquare, HelpCircle, Vote, Share2, Timer, Phone, Newspaper, HeartHandshake } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { collection, addDoc, serverTimestamp, doc, getDoc, getDocs, setDoc, updateDoc, increment, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type DotButtonPropType = {
  selected: boolean;
  onClick: () => void;
};

const DotButton: React.FC<DotButtonPropType> = (props) => {
  const { selected, onClick } = props;

  return (
    <button
      className={`h-3 w-3 rounded-full mx-1 ${selected ? 'bg-primary' : 'bg-muted'}`}
      type="button"
      onClick={onClick}
    />
  );
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <NoticeSection />
      <ElectionCountdown />
      <AboutSection />
      <NewsSection />
      <SocialWorkSection />
      <VoteBannerSection />
      <CampaignGallerySection />
      <TestimonialSection />
      <LeadershipSection />
      <FAQSection />
      <FeedbackSection />
      <PreVoteSection />
      <SupportSection />
    </div>
  );
}

function HeroSection() {

    return (
        <section className="relative text-center text-white h-80 md:h-96">
            <div className="overflow-hidden h-full">
                <div className="relative flex-[0_0_100%] h-full">
                    <Image
                        src={'https://i.postimg.cc/DydxCq5b/manisha-banner.jpg'}
                        alt={'ডাঃ মনীষা চক্রবর্ত্তী'}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={'political candidate banner'}
                    />
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

            <div className="container absolute inset-0 z-10 mx-auto px-4 flex flex-col justify-center items-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-6xl md:text-7xl drop-shadow-lg" role="img" aria-label="ladder">🪜</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-headline drop-shadow-lg mt-4">ডাঃ মনীষা চক্রবর্ত্তী</h1>
                    <p className="mt-4 text-xl md:text-2xl font-semibold text-primary-foreground/90 drop-shadow-md">
                        বরিশাল-৫ আসনে গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বাসদ মনোনীত প্রার্থী
                    </p>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto font-body drop-shadow-md">
                        সংসদকে শ্রমজীবী মানুষের অধিকার আদায়ের প্রতিষ্ঠানে পরিণত করতে ডাঃ মনীষা চক্রবর্ত্তীকে মই মার্কায় আপনার সমর্থন দিন।
                    </p>
                    <div className="mt-8 flex gap-4 justify-center">
                        <Button asChild size="lg" className="font-headline text-lg">
                            <Link href="/manifesto">আমাদের ইশতেহার</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                            <Link href="/get-involved">যুক্ত হোন</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}


function NoticeSection() {
    const [noticeText, setNoticeText] = useState("বরিশালকে পাল্টাতে মই মার্কায় ভোট চাই!");
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
            <section className="bg-destructive py-3 text-white w-full overflow-x-hidden">
                <div className="relative flex items-center whitespace-nowrap">
                    <p className="text-lg font-headline">নোটিশ লোড হচ্ছে...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-destructive py-3 text-white w-full overflow-x-hidden">
            <div className="relative flex items-center whitespace-nowrap w-full overflow-x-hidden">
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

function ElectionCountdown() {
    const [timeLeft, setTimeLeft] = useState<{
        days?: number,
        hours?: number,
        minutes?: number,
        seconds?: number
    }>({});
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const calculateTimeLeft = () => {
            const difference = +new Date("2026-02-12T00:00:00") - +new Date();
            let timeLeftData = {};

            if (difference > 0) {
                timeLeftData = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }
            return timeLeftData;
        };

        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = Object.keys(timeLeft).length ? (
        Object.entries(timeLeft).map(([interval, value]) => {
            const displayValue = value.toLocaleString('bn-BD').padStart(2, '০');
            let label;
            switch(interval) {
                case 'days': label = 'দিন'; break;
                case 'hours': label = 'ঘণ্টা'; break;
                case 'minutes': label = 'মিনিট'; break;
                case 'seconds': label = 'সেকেন্ড'; break;
            }

            return (
                <div key={interval} className="flex flex-col items-center">
                    <div className="text-3xl md:text-5xl font-bold font-headline text-primary bg-card rounded-lg p-2 md:p-4 w-20 md:w-28 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        {displayValue}
                    </div>
                    <div className="mt-2 text-sm md:text-base font-semibold text-muted-foreground">{label}</div>
                </div>
            );
        })
    ) : <p className="text-3xl font-bold text-primary">ভোটের উৎসব শুরু!</p>;
    
    if (!isClient) {
        return (
            <section className="py-8 md:py-12 bg-background">
                 <div className="container mx-auto px-4 text-center">
                     <Skeleton className="h-10 w-3/4 mx-auto" />
                     <div className="mt-8 flex justify-center gap-4 md:gap-8">
                         <div className="flex flex-col items-center"><Skeleton className="h-24 w-24" /><Skeleton className="h-6 w-16 mt-2" /></div>
                         <div className="flex flex-col items-center"><Skeleton className="h-24 w-24" /><Skeleton className="h-6 w-16 mt-2" /></div>
                         <div className="flex flex-col items-center"><Skeleton className="h-24 w-24" /><Skeleton className="h-6 w-16 mt-2" /></div>
                         <div className="flex flex-col items-center"><Skeleton className="h-24 w-24" /><Skeleton className="h-6 w-16 mt-2" /></div>
                     </div>
                 </div>
            </section>
        );
    }

    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4 text-center text-foreground">
                <h2 className="text-3xl md:text-4xl font-bold font-headline flex justify-center items-center gap-3">
                    <Timer className="w-8 h-8 animate-bounce text-primary" />
                    ঐতিহাসিক ১২ই ফেব্রুয়ারির অপেক্ষা
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">শোষণমুক্তির নতুন দিগন্ত উন্মোচনের আর মাত্র...</p>
                <div className="mt-8 flex flex-row flex-nowrap justify-center gap-2 md:gap-4">
                    {timerComponents}
                </div>
                 <p className="mt-8 text-lg md:text-xl font-semibold animate-pulse text-destructive">প্রতিটি ভোট গুরুত্বপূর্ণ! আপনার ভোটেই আসবে পরিবর্তন।</p>
            </div>
        </section>
    );
}

function AboutSection() {
  return (
    <section className="py-8 md:py-12 bg-card">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-lg border-border bg-background">
          <div className="grid md:grid-cols-2">
            <div className="relative min-h-[300px] md:min-h-0">
              <Image
                src="https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg"
                alt="ডাঃ মনীষা চক্রবর্ত্তী"
                fill
                className="object-cover"
                data-ai-hint="politician portrait"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">ডাঃ মনীষা চক্রবর্ত্তী</h2>
              <div className="font-body text-lg space-y-4 text-muted-foreground">
                <p>
                  <span className="text-primary font-bold">ডাঃ মনীষা চক্রবর্ত্তী</span> দীর্ঘদিন ধরে বরিশাল অঞ্চলের মানুষের নাগরিক অধিকার, শ্রমজীবী মানুষের জীবনের সংকট ও তাদের উপর যে কোন অন্যায় আক্রমণের বিরুদ্ধে সোচ্চার আছেন।
                </p>
                <p>
                  তার লড়াইয়ে সহ্য করতে হয়েছে জেল, জুলুম, হামলা-মামলাসহ নানা প্রতিকূল পরিস্থিতি। এই সব পরিস্থিতি মোকাবিলা করেও মনীষা চক্রবর্ত্তীকে দমানো যায়নি, তিনি তার লড়াই সংগ্রাম অব্যাহত রেখেছেন এবং সামনেও রাখবেন।
                </p>
              </div>

              <Button asChild className="mt-8 font-headline text-lg w-fit mx-auto md:mx-0">
                <Link href="/about">
                  তার সম্পর্কে আরও জানুন <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

type News = {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    imageHint: string;
}

function NewsSection() {
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            const newsCollection = collection(db, "news");
            const q = query(newsCollection, orderBy("date", "desc"), limit(3));
            const newsSnapshot = await getDocs(q);
            const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
            setNews(newsList);
            setIsLoading(false);
        };
        fetchNews();
    }, []);

    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Newspaper className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        নির্বাচনী <span className="text-destructive">সংবাদ</span>
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী প্রচারণার সর্বশেষ খবর ও আপডেট।
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                         Array.from({ length: 3 }).map((_, index) => (
                             <Card key={index}><Skeleton className="w-full h-80"/></Card>
                         ))
                    ) : (
                        news.map((item) => (
                            <Card key={item.id} className="flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card">
                                <div className="relative w-full aspect-video">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-t-lg"
                                        data-ai-hint={item.imageHint}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                                    <CardDescription>{item.date}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="font-body text-muted-foreground">{item.description}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button asChild variant="secondary">
                                        <Link href={`/news-updates/${item.id}`}>বিস্তারিত পড়ুন</Link>
                                    </Button>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
                 <div className="text-center mt-8">
                    <Button asChild>
                        <Link href="/news-updates">সকল সংবাদ দেখুন</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
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

    if (socialWorks.length === 0 && !isLoading) return null;

    return (
        <section className="py-8 md:py-12 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HeartHandshake className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        সামাজিক কার্যক্রম
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        ডাঃ মনীষা চক্রবর্ত্তীর বিভিন্ন সামাজিক ও সেবামূলক কার্যক্রমের একাংশ।
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                     {isLoading ? (
                         Array.from({ length: 4 }).map((_, index) => (
                           <Skeleton key={index} className="w-full aspect-[3/4] rounded-lg" />
                         ))
                    ) : (
                        socialWorks.map(sw => (
                             <Card key={sw.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                               <Image
                                src={sw.image}
                                alt={sw.alt}
                                fill
                                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                                data-ai-hint={sw.imageHint}
                               />
                             </Card>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

function VoteBannerSection() {
  return (
    <section 
        className="py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{backgroundImage: "url('https://i.postimg.cc/t4G2wDk1/male-student-1.jpg')"}}
        data-ai-hint="political rally crowd"
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-white drop-shadow-md">
          বরিশালকে পাল্টাতে মই মার্কায় ভোট চাই!
        </h2>
        <p className="mt-4 font-body text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          আগামী ১২ই ফেব্রুয়ারী, একটি শোষণ বৈষম্যহীন ও সাম্প্রদায়িক সম্প্রীতির বরিশাল গড়তে মই মার্কায় ভোট দিন।
        </p>
        <div className="mt-8 bg-background/20 backdrop-blur-sm border-2 border-dashed border-primary rounded-lg p-6 max-w-md mx-auto shadow-xl">
            <h3 className="font-headline text-4xl font-extrabold text-primary">ডাঃ মনীষা চক্রবর্ত্তী</h3>
            <div className="flex justify-center items-center gap-4 mt-2">
                 <span className="text-4xl" role="img" aria-label="ladder">🪜</span>
                 <p className="font-body text-white text-2xl">মই মার্কা</p>
            </div>
        </div>
      </div>
    </section>
  );
}

type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    hint: string;
};

function CampaignGallerySection() {
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);

    useEffect(() => {
        const fetchGalleryImages = async () => {
            setIsLoading(true);
            try {
                const galleryCollection = collection(db, "gallery");
                const gallerySnapshot = await getDocs(galleryCollection);
                const galleryList = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
                
                if (galleryList.length > 0) {
                    setGalleryImages(galleryList);
                } else {
                    setGalleryImages([
                        {id: "1", src: "https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg", alt: "Manisha Chakrabarty", hint: "politician portrait"},
                        {id: "2", src: "https://i.postimg.cc/Gpd2g0x3/news-1.jpg", alt: "Campaign Rally", hint: "political rally"},
                        {id: "3", src: "https://i.postimg.cc/C5YgZpLz/news-2.jpg", alt: "Public Speaking", hint: "public speaking"},
                        {id: "4", src: "https://i.postimg.cc/Pq2Y5YVp/news-3.jpg", alt: "Meeting with locals", hint: "community meeting"},
                    ]);
                }
            } catch (error) {
                 console.error("Error fetching gallery images:", error);
                 setGalleryImages([
                    {id: "1", src: "https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg", alt: "Manisha Chakrabarty", hint: "politician portrait"},
                    {id: "2", src: "https://i.postimg.cc/Gpd2g0x3/news-1.jpg", alt: "Campaign Rally", hint: "political rally"},
                    {id: "3", src: "https://i.postimg.cc/C5YgZpLz/news-2.jpg", alt: "Public Speaking", hint: "public speaking"},
                    {id: "4", src: "https://i.postimg.cc/Pq2Y5YVp/news-3.jpg", alt: "Meeting with locals", hint: "community meeting"},
                 ]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGalleryImages();
    }, []);

    return (
        <section className="py-8 md:py-12 bg-card w-full overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Camera className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        <span className="text-destructive">প্রচারণার</span> একাংশ
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী প্রচারণার কিছু বিশেষ মুহূর্ত।
                    </p>
                </div>
            </div>
             <div className="mt-12">
                <div className="overflow-hidden" ref={emblaRef}>
                     <div className="flex">
                        {isLoading ? (
                            Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] p-2">
                                    <Skeleton className="w-full h-80 rounded-lg" />
                                </div>
                            ))
                        ) : (
                            galleryImages.map((image, index) => (
                                <Link href="/gallery" key={`${image.id}-${index}`} className="flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] p-2">
                                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 w-full">
                                        <CardContent className="p-0 h-full">
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    className="object-cover rounded-md"
                                                    data-ai-hint={image.hint}
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
                 <div className="flex justify-center mt-4">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

type Testimonial = {
    id: string;
    name: string;
    role: string;
    image: string;
    imageHint: string;
    testimonial: string;
};

function TestimonialSection() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, setScrollSnaps, onSelect]);


    useEffect(() => {
        const fetchTestimonials = async () => {
            setIsLoading(true);
            try {
                const testimonialsCollection = collection(db, "testimonials");
                const testimonialsSnapshot = await getDocs(testimonialsCollection);
                const dbTestimonials = testimonialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));

                const fallbackTestimonials: Testimonial[] = [
                    {
                        id: "fallback-1",
                        name: "কমরেড বজলুর রশিদ ফিরোজ",
                        role: "সাধারণ সম্পাদক, বাসদ কেন্দ্রীয় কমিটি",
                        image: "https://i.postimg.cc/t4G2wDk1/male-student-1.jpg",
                        imageHint: "male leader",
                        testimonial: "মহান মুক্তিযুদ্ধের চেতনায় একটি অসাম্প্রদায়িক বাংলাদেশ গড়তে মনীষার মতো নেত্রীর বিকল্প নেই।"
                    },
                    {
                        id: "fallback-2",
                        name: "ইমাম হোসেন খোকন",
                        role: "সদস্য, বাসদ কেন্দ্রীয় কমিটি বর্ধিত ফোরাম",
                        image: "https://i.postimg.cc/wxM1807v/male-student-2.jpg",
                        imageHint: "political activist",
                        testimonial: "ডাঃ মনীষা বরিশালের জনগণের কন্ঠস্বর। তার লড়াই-সংগ্রাম আমাদের সকলের জন্য অনুপ্রেরণা।"
                    },
                    {
                        id: "fallback-3",
                        name: "প্রশান্ত দাস হরি",
                        role: "সাধারণ সম্পাদক, বাংলাদেশের কমিউনিস্ট পার্টি, ঝালকাঠি",
                        image: "https://i.postimg.cc/sgg5G5wX/political-leader-3.jpg",
                        imageHint: "senior man",
                        testimonial: "নারী বিদ্বেষের বিরুদ্ধে এবং শ্রমজীবী মানুষের পক্ষে এমন সোচ্চার কণ্ঠ আমাদের সংসদে প্রয়োজন।"
                    },
                ];

                setTestimonials(dbTestimonials.length > 0 ? dbTestimonials : fallbackTestimonials);
            } catch (error) {
                console.error("Error fetching testimonials, using fallback.", error);
                 setTestimonials([
                    {
                        id: "fallback-1",
                        name: "কমরেড বজলুর রশিদ ফিরোজ",
                        role: "সাধারণ সম্পাদক, বাসদ কেন্দ্রীয় কমিটি",
                        image: "https://i.postimg.cc/t4G2wDk1/male-student-1.jpg",
                        imageHint: "male leader",
                        testimonial: "মহান মুক্তিযুদ্ধের চেতনায় একটি অসাম্প্রদায়িক বাংলাদেশ গড়তে মনীষার মতো নেত্রীর বিকল্প নেই।"
                    },
                    {
                        id: "fallback-2",
                        name: "ইমাম হোসেন খোকন",
                        role: "সদস্য, বাসদ কেন্দ্রীয় কমিটি বর্ধিত ফোরাম",
                        image: "https://i.postimg.cc/wxM1807v/male-student-2.jpg",
                        imageHint: "political activist",
                        testimonial: "ডাঃ মনীষা বরিশালের জনগণের কন্ঠস্বর। তার লড়াই-সংগ্রাম আমাদের সকলের জন্য অনুপ্রেরণা।"
                    },
                    {
                        id: "fallback-3",
                        name: "প্রশান্ত দাস হরি",
                        role: "সাধারণ সম্পাদক, বাংলাদেশের কমিউনিস্ট পার্টি, ঝালকাঠি",
                        image: "https://i.postimg.cc/sgg5G5wX/political-leader-3.jpg",
                        imageHint: "senior man",
                        testimonial: "নারী বিদ্বেষের বিরুদ্ধে এবং শ্রমজীবী মানুষের পক্ষে এমন সোচ্চার কণ্ঠ আমাদের সংসদে প্রয়োজন।"
                    },
                ]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTestimonials();
    }, []);
    
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Users className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                       সহযোদ্ধাদের <span className="text-destructive">কিছু কথা</span>
                    </h2>
                </div>
                <div className="mt-12 overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                       {isLoading ? (
                           Array.from({ length: 3 }).map((_, i) => (
                               <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] p-4" key={i}>
                                   <Card className="bg-card p-6 text-center h-full">
                                       <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                                       <Skeleton className="h-6 w-32 mx-auto mb-2" />
                                       <Skeleton className="h-4 w-40 mx-auto mb-4" />
                                       <div className="space-y-2 w-full">
                                           <Skeleton className="h-4 w-full" />
                                           <Skeleton className="h-4 w-5/6 mx-auto" />
                                       </div>
                                   </Card>
                               </div>
                           ))
                       ) : (
                           testimonials.map((testimonial) => (
                               <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] p-4" key={testimonial.id}>
                                   <Card className="bg-card p-6 text-center shadow-lg h-full flex flex-col">
                                       <Image
                                           src={testimonial.image}
                                           alt={testimonial.name}
                                           width={96}
                                           height={96}
                                           className="rounded-full mx-auto mb-4 border-4 border-primary/50 object-cover"
                                           data-ai-hint={testimonial.imageHint}
                                       />
                                       <CardTitle className="font-headline text-2xl">{testimonial.name}</CardTitle>
                                       <CardDescription className="font-body text-primary">{testimonial.role}</CardDescription>
                                       <p className="font-body text-muted-foreground mt-4 text-sm flex-grow">
                                           "{testimonial.testimonial}"
                                       </p>
                                   </Card>
                               </div>
                           ))
                       )}
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            selected={index === selectedIndex}
                            onClick={() => scrollTo(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

const leadershipPoints = [
    { icon: ShieldCheck, text: "মুক্তিযুদ্ধ এবং গণঅভ্যুত্থানের চেতনায় একটি বৈষম্যহীন, গণতান্ত্রিক ও অসাম্প্রদায়িক দেশ গঠন।" },
    { icon: Users, text: "শ্রমজীবী মানুষের অধিকার আদায়ের জন্য সংসদকে একটি কার্যকর প্রতিষ্ঠানে পরিণত করা।" },
    { icon: MessageSquare, text: "নারী বিদ্বেষী ও সাম্প্রদায়িক সকল অপশক্তির বিরুদ্ধে সোচ্চার থাকা এবং প্রতিরোধ গড়ে তোলা।" },
];

function LeadershipSection() {
    return (
        <section className="py-8 md:py-12 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                       আমার <span className="text-destructive">লক্ষ্য ও উদ্দেশ্য</span>
                    </h1>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leadershipPoints.map((point, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                <point.icon className="w-6 h-6" />
                            </div>
                            <p className="font-body text-muted-foreground">{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const faqItems = [
    {
        question: "ডাঃ মনীষা চক্রবর্ত্তী কে?",
        answer: "ডাঃ মনীষা চক্রবর্ত্তী বাংলাদেশের সমাজতান্ত্রিক দল- বাসদ মনোনীত এবং গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বরিশাল-৫ আসনের সংসদ সদস্য পদপ্রার্থী। তিনি দীর্ঘদিন ধরে বরিশাল অঞ্চলের মানুষের নাগরিক অধিকার ও শ্রমজীবী মানুষের সংকট নিয়ে কাজ করছেন।"
    },
    {
        question: "তার নির্বাচনী প্রতীক কী?",
        answer: "তার নির্বাচনী প্রতীক হলো 'মই' মার্কা।"
    },
    {
        question: "তার মূল রাজনৈতিক আদর্শ কী?",
        answer: "তার মূল রাজনৈতিক আদর্শ হলো বাংলাদেশের মুক্তিযুদ্ধ এবং জুলাই-আগস্টের গণঅভ্যুত্থানের চেতনায় একটি শোষণ, বৈষম্যহীন, গণতান্ত্রিক ও অসাম্প্রদায়িক সমাজ ও দেশ গঠন করা।"
    },
    {
        question: "নির্বাচন কবে অনুষ্ঠিত হবে?",
        answer: "আসন্ন ত্রয়োদশ জাতীয় সংসদ নির্বাচন আগামী ১২ই ফেব্রুয়ারী অনুষ্ঠিত হবে।"
    }
];

function FAQSection() {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HelpCircle className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                       সাধারণ জিজ্ঞাসা
                    </h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                       ডাঃ মনীষা চক্রবর্ত্তী ও তার নির্বাচনী প্রচারণা সম্পর্কে কিছু সাধারণ প্রশ্নের উত্তর।
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
    <section id="feedback-form" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg bg-card">
            <CardHeader className="text-center">
              <Mail className="mx-auto h-12 w-12 text-primary" />
              <CardTitle className="font-headline text-4xl md:text-5xl">আপনার মতামত দিন</CardTitle>
              <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                আপনার মূল্যবান মতামত, পরামর্শ বা প্রশ্ন আমাদের জানান।
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
                  </div>
                )}
                 <div className="space-y-2">
                    <Label htmlFor="subject" className="font-headline">আপনার মতামতের বিষয়</Label>
                    <Input id="subject" placeholder="যেমন: নির্বাচনী প্রচারণা, ইশতেহার" value={formData.subject} onChange={handleInputChange} required />
                  </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-headline">বিস্তারিত বিবরণ</Label>
                  <Textarea id="message" placeholder="আপনার মতামত বিস্তারিত এখানে লিখুন..." rows={6} value={formData.message} onChange={handleInputChange} required />
                </div>
                <Button type="submit" size="lg" className="w-full font-headline text-xl" disabled={isSubmitting}>
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
    return (
        <section id="pre-vote" className="py-8 md:py-12 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Vote className="mx-auto h-16 w-16 text-primary animate-pulse" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground"><span className="text-destructive">নির্বাচনী তহবিলে সহযোগিতা করুন</span></h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        গণমানুষের দেওয়া টাকায় নির্বাচন করতে চাওয়া ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী তহবিলে আপনার সহযোগিতা পাঠান।
                    </p>
                    
                    <Card className="mt-8 shadow-2xl bg-background max-w-lg mx-auto">
                        <CardHeader>
                            <CardTitle>সহযোগিতা পাঠানোর মাধ্যম</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-left">
                           <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                               <p className="font-bold">বিকাশ:</p>
                               <div className="flex flex-col items-end">
                                   <p>01723709155</p>
                                   <p>01586225082</p>
                               </div>
                           </div>
                           <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                               <p className="font-bold">নগদ:</p>
                               <p>01684509990</p>
                           </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}

function SupportSection() {
    return (
        <section className="py-8 md:py-12 bg-background">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto rounded-lg p-8 md:p-12 text-center text-white" style={{background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--destructive)))'}}>
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-full">
                           <Phone className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">কোনো প্রশ্ন আছে?</h2>
                    <p className="font-body text-lg mt-2 opacity-90">যেকোনো সময় আমাদের ক্যাম্পেইন টিমের সাথে কথা বলুন।</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" variant="secondary" className="bg-white text-primary-foreground hover:bg-gray-200 font-bold">
                            <Link href="tel:+880123456789">এখনই কল করুন</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold">
                           <Link href="/#feedback-form">মতামত ফর্ম</Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </section>
    );
}
