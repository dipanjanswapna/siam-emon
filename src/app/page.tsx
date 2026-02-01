
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, BookOpen, BookOpenCheck, BrainCircuit, Library, Users, Camera, X, Flag, GraduationCap, HandHeart, ShieldCheck, MessageSquare, Mail, HelpCircle, Vote, Share2, DollarSign, Archive, Laptop, Combine, Trophy, VolumeX, Volume2, FlaskConical, HandCoins, BadgePercent, Presentation, Database, Microscope, Quote, Tv, Timer, SearchCheck, Phone } from "lucide-react";
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


const icons: { [key: string]: React.ElementType } = {
    BadgePercent,
    Laptop,
    HandCoins,
    Mail,
    BookOpen,
    Archive,
    Presentation,
    GraduationCap,
    BrainCircuit,
    Microscope,
    FlaskConical,
    Database,
    DollarSign,
    BookOpenCheck,
    Users
};


export default function Home() {
  return (
    <div className="flex flex-col">
      <VideoSection />
      <NoticeSection />
      <ElectionCountdown />
      <AboutSection />
      <VoteBannerSection />
      <VoteCallToActionSection />
      <VoterSearchAdSection />
      <CommitmentSection />
      <CampaignGallerySection />
      <LogicalMovementSection />
      <MediaSection />
      <SkillsLeadershipServiceSection />
      <SocialWorkSection />
      <TestimonialSection />
      <LeadershipSection />
      <FAQSection />
      <FeedbackSection />
      <PreVoteSection />
      <SupportSection />
    </div>
  );
}

function VideoSection() {
    const [player, setPlayer] = useState<any>(null);
    const [isMuted, setIsMuted] = useState(true);

    const videoId = "R8BGvAqQl1Y";

    useEffect(() => {
        const loadYouTubeAPI = () => {
            if (!(window as any).YT) {
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName('script')[0];
                if (firstScriptTag && firstScriptTag.parentNode) {
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }
            }

            (window as any).onYouTubeIframeAPIReady = () => {
                const newPlayer = new (window as any).YT.Player('youtube-player', {
                    videoId: videoId,
                    playerVars: {
                        'autoplay': 1,
                        'mute': 1,
                        'loop': 1,
                        'playlist': videoId,
                        'controls': 0,
                        'showinfo': 0,
                        'modestbranding': 1,
                        'rel': 0,
                    },
                    events: {
                        'onReady': (event: any) => {
                           event.target.playVideo();
                           setPlayer(event.target);
                        }
                    }
                });
            };

             if ((window as any).YT && (window as any).YT.Player) {
                (window as any).onYouTubeIframeAPIReady();
            }
        };

        loadYouTubeAPI();

    }, [videoId]);
    
    const handleMuteToggle = () => {
        if (!player) return;

        if (player.isMuted()) {
            player.unMute();
            setIsMuted(false);
        } else {
            player.mute();
            setIsMuted(true);
        }
    };

    return (
        <section className="relative w-full aspect-video bg-black py-12 md:py-16">
            <div id="youtube-player" className="absolute top-0 left-0 w-full h-full"></div>
             <Button 
                variant="secondary"
                size="icon"
                onClick={handleMuteToggle}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
            >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                <span className="sr-only">{isMuted ? "Unmute" : "Mute"}</span>
            </Button>
        </section>
    );
}

function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 flex flex-col items-center">
            <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-lg overflow-hidden shadow-lg group">
                <Image
                src="https://i.postimg.cc/tTcVFV1Q/539530889-122093783187002829-1661414873762122234-n-1-Picsart-Ai-Image-Enhancer.jpg"
                alt="সিয়াম ফেরদৌস ইমন - গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী"
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                data-ai-hint="politician portrait"
                />
            </div>
             <div className="mt-6 text-center w-full max-w-xs">
                <div className="bg-primary/20 text-primary font-bold py-1.5 px-3 rounded-md text-sm">
                    গবেষণা ও প্রকাশনা সম্পাদক
                </div>
                <h3 className="font-headline text-3xl font-bold text-foreground my-2">
                    সিয়াম ফেরদৌস ইমন
                </h3>
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <div className="bg-primary text-primary-foreground font-bold py-1.5 text-sm">
                        ব্যালট নম্বর
                    </div>
                    <div className="bg-card text-destructive text-5xl font-bold py-2">
                        ০৯
                    </div>
                </div>
            </div>
          </div>
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">আমার পরিচিতি</h2>
            <div className="font-body text-lg md:text-xl space-y-4 text-muted-foreground">
              <p>
                আমি <span className="text-primary font-bold">সিয়াম ফেরদৌস ইমন</span>, ঢাকা বিশ্ববিদ্যালয়ের ২০১৮-১৯ সেশনের প্রাণিবিদ্যা বিভাগের মাস্টার্সে (Genetics and Molecular Biology Branch) অধ্যয়নরত এবং ফজলুল হক মুসলিম হলের নিয়মিত আবাসিক শিক্ষার্থী। আমি বিগত ৬ বছর ধরে বিশ্ববিদ্যালয় জীবনে বিভিন্ন <span className="text-accent font-semibold">ছাত্রকল্যাণমূলক কার্যক্রম</span>, যোক্তিক ও ন্যায্য দাবি আদায়ের পাশাপাশি <span className="text-accent font-semibold">গবেষণা ও একাডেমিক কর্মকাণ্ডের</span> সাথে শুরু থেকে সক্রিয় আছি।
              </p>
              <p>
                আপনাদের ভালোবাসা, সহযোগিতা ও আস্থার জোরেই আমি আসন্ন ঢাকা বিশ্ববিদ্যালয়ের কেন্দ্রীয় ছাত্র সংসদ (ডাকসু) নির্বাচনে <span className="bg-destructive/20 text-destructive font-bold p-1 rounded">গবেষণা ও প্রকাশনা সম্পাদক পদে</span> প্রার্থী হওয়ার সিদ্ধান্ত নিয়েছি।
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

function VoterSearchAdSection() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
                <Card className="shadow-lg bg-card border-border">
                    <div className="grid md:grid-cols-3 items-center text-center md:text-left p-8 gap-8">
                        <div className="md:col-span-1 flex justify-center">
                            <SearchCheck className="w-24 h-24 text-primary" />
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">আপনার <span className="text-destructive">ভোটার তথ্য</span> খুঁজুন</h2>
                            <p className="font-body text-lg mt-2 text-muted-foreground">
                                ডাকসু নির্বাচনের জন্য আপনার ভোটার নম্বর এবং কেন্দ্র সহজেই খুঁজে নিন। ঢাকা বিশ্ববিদ্যালয় আইসিটি সেল দ্বারা পরিচালিত পোর্টালে আপনার তথ্য যাচাই করুন।
                            </p>
                            <Button asChild size="lg" className="mt-6 font-headline text-lg">
                                <Link href="/voter-registration">
                                    এখনই খুঁজুন
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
}

function CommitmentSection() {
    const [commitments, setCommitments] = useState<Commitment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCommitments = async () => {
            setIsLoading(true);
            try {
                const commitmentsCollection = collection(db, "commitments");
                const commitmentsSnapshot = await getDocs(commitmentsCollection);
                let commitmentsList = commitmentsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Commitment));
                
                 if (commitmentsList.length === 0) {
                   commitmentsList = [
                        { id: "1", icon: "BadgePercent", title: "বাজেট বাড়াও, গবেষণা বাঁচাও", description: "নির্বাচিত হলে গবেষণা বাজেট ২% থেকে ২০% বা তার বেশিতে উন্নীত করাই হবে আমার প্রধান লক্ষ্য।" },
                        { id: "2", icon: "Laptop", title: "একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং", description: "R, SPSS, Python, Excel, GIS, MS Word-এর মতো গুরুত্বপূর্ণ সফটওয়্যারের উপর নিয়মিত বিনামূল্যে কর্মশালা আয়োজন করব।" },
                        { id: "3", icon: "HandCoins", title: "রিসোর্স হেল্পডেস্ক প্রতিষ্ঠা", description: "বিভাগভিত্তিক গবেষণা তহবিল ও আন্তর্জাতিক স্কলারশিপের সহায়তার জন্য একটি বিশেষ ‘রিসোর্স হেল্পডেস্ক’ প্রতিষ্ঠা করব।" },
                        { id: "4", icon: "Mail", title: "জার্নাল অ্যাক্সেস ও ই-মেইল সক্ষমতা", description: "ইন্সটিটিউশনাল মেইল আইডির সক্ষমতা বৃদ্ধি করব এবং বিশ্বমানের জার্নালগুলোতে বিনামূল্যে অ্যাক্সেস নিশ্চিত করব।" },
                    ];
                }

                const topCommitments = commitmentsList.length > 4 ? commitmentsList.slice(0, 4) : commitmentsList;
                setCommitments(topCommitments);

            } catch (error) {
                console.error("Error fetching commitments, using fallback.", error);
                 const fallbackCommitments = [
                    { id: "1", icon: "BadgePercent", title: "বাজেট বাড়াও, গবেষণা বাঁচাও", description: "নির্বাচিত হলে গবেষণা বাজেট ২% থেকে ২০% বা তার বেশিতে উন্নীত করাই হবে আমার প্রধান লক্ষ্য।" },
                    { id: "2", icon: "Laptop", title: "একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং", description: "R, SPSS, Python, Excel, GIS, MS Word-এর মতো গুরুত্বপূর্ণ সফটওয়্যারের উপর নিয়মিত বিনামূল্যে কর্মশালা আয়োজন করব।" },
                    { id: "3", icon: "HandCoins", title: "রিসোর্স হেল্পডেস্ক প্রতিষ্ঠা", description: "বিভাগভিত্তিক গবেষণা তহবিল ও আন্তর্জাতিক স্কলারশিপের সহায়তার জন্য একটি বিশেষ ‘রিসোর্স হেল্পডেস্ক’ প্রতিষ্ঠা করব।" },
                    { id: "4", icon: "Mail", title: "জার্নাল অ্যাক্সেস ও ই-মেইল সক্ষমতা", description: "ইন্সটিটিউশনাল মেইল আইডির সক্ষমতা বৃদ্ধি করব এবং বিশ্বমানের জার্নালগুলোতে বিনামূল্যে অ্যাক্সেস নিশ্চিত করব।" },
                ];
                setCommitments(fallbackCommitments);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCommitments();
    }, []);

    return (
        <section className="py-12 md:py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আমার <span className="text-destructive">অঙ্গীকার</span></h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        প্রিয় ঢাকা বিশ্ববিদ্যালয়ের সহপাঠীরা, আমরা সবাই জানি—জ্ঞানচর্চা, গবেষণা আর প্রকাশনা ছাড়া প্রকৃত উচ্চশিক্ষার অগ্রগতি সম্ভব নয়। কিন্তু আমাদের অনেক সম্ভাবনাময় গবেষণা কেবল সুযোগ ও প্ল্যাটফর্মের অভাবে থেমে যায়। আমি প্রতিশ্রুতি দিচ্ছি, যদি আপনারা আমাকে ডাকসু ২০২৫-এ গবেষণা ও প্রকাশনা সম্পাদক হিসেবে দায়িত্ব দেন, তবে আমি বিভাগভিত্তিক গবেষণা তহবিল ও আন্তর্জাতিক স্কলারশিপের সহায়তা, ডাকসুর নিজস্ব স্টুডেন্ট জার্নাল প্রকাশ, প্রতিটি থিসিস ও গবেষণার জন্য ডিজিটাল আর্কাইভ, একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং কর্মশালা এবং শিক্ষার্থীদের জন্য গবেষণাভিত্তিক কনফারেন্স ও সেমিনার আয়োজন করব। আপনার ভোটে গড়ে উঠুক একটি গবেষণা-উদ্যমী ডাকসু।
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {isLoading ? Array.from({ length: 4 }).map((_, i) => (
                        <Card key={i} className="text-center shadow-lg bg-background p-6">
                            <div className="bg-muted/50 p-4 rounded-full w-20 h-20 mx-auto animate-pulse"></div>
                             <div className="h-6 w-3/4 bg-muted/50 rounded mt-4 mx-auto animate-pulse"></div>
                             <div className="h-4 w-full bg-muted/50 rounded mt-4 mx-auto animate-pulse"></div>
                             <div className="h-4 w-5/6 bg-muted/50 rounded mt-2 mx-auto animate-pulse"></div>
                        </Card>
                    )) : commitments.map((commitment) => {
                        const IconComponent = icons[commitment.icon] || BrainCircuit;
                        return (
                            <Card key={commitment.id} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-background">
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
                 <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/manifesto">
                            সকল অঙ্গীকার দেখুন <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
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

    useEffect(() => {
        const fetchGalleryImages = async () => {
            setIsLoading(true);
            try {
                const galleryCollection = collection(db, "gallery");
                const gallerySnapshot = await getDocs(galleryCollection);
                const galleryList = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
                setGalleryImages(galleryList);
            } catch (error) {
                console.error("Error fetching gallery images:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGalleryImages();
    }, []);

    const imagesToDisplay = galleryImages.length > 0 ? [...galleryImages, ...galleryImages] : [];

    return (
        <section className="py-12 md:py-16 bg-card w-full overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Camera className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        <span className="text-destructive">নির্বাচনী প্রচারণার</span> একাংশ
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        আমার নির্বাচনী প্রচারণার কিছু বিশেষ মুহূর্ত, যা শিক্ষার্থীদের ভালোবাসা ও সমর্থনে পূর্ণ।
                    </p>
                </div>
            </div>
            <div className="mt-12 w-full overflow-x-hidden mask-image-lr group">
                 <div className="animate-scroll group-hover:pause-animation flex gap-4">
                    {isLoading ? (
                        Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex-shrink-0">
                                <Skeleton className="w-80 h-56 rounded-lg" />
                            </div>
                        ))
                    ) : (
                        imagesToDisplay.map((image, index) => (
                            <Link href="/gallery" key={`${image.id}-${index}`} className="flex-shrink-0">
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 w-80">
                                    <CardContent className="p-0">
                                        <div className="relative h-56 w-full">
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
            <section className="bg-gradient-to-r from-destructive to-red-500 py-3 text-white w-full overflow-x-hidden">
                <div className="relative flex items-center whitespace-nowrap">
                    <p className="text-lg font-headline">নোটিশ লোড হচ্ছে...</p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-r from-destructive to-red-500 py-3 text-white w-full overflow-x-hidden">
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


function VoteBannerSection() {
  return (
    <section 
        className="py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
        style={{backgroundImage: "url('https://i.postimg.cc/25Cmr4dk/SEAM-VAIAAAAA-Picsart-Ai-Image-Enhancer.jpg')"}}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-headline text-white drop-shadow-md">
          Remember, the Last Hope in Ballot no. 9
        </h2>
        <p className="mt-4 font-body text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          নয়(৯) অবহেলা, নয়(৯) বৈষম্য, নয়(৯) বাজেট সংকট। <br/>
          ৯ তারিখ সারাদিন, ৯ নং ব্যালটে গবেষণায় সিয়ামকে ভোট দিন।
        </p>
        <div className="mt-8 bg-background/20 backdrop-blur-sm border-2 border-dashed border-primary rounded-lg p-6 max-w-md mx-auto shadow-xl">
            <h3 className="font-headline text-4xl font-extrabold text-primary">সিয়াম ফেরদৌস ইমন</h3>
            <p className="font-body text-white text-2xl mt-1">ব্যালট নং <span className="font-extrabold text-3xl text-destructive">০৯</span></p>
            <p className="font-body text-gray-200 text-xl">গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী</p>
        </div>
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
            const difference = +new Date("2025-09-09T00:00:00") - +new Date();
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
                    <div className="text-3xl md:text-5xl font-bold font-headline text-primary bg-background/80 backdrop-blur-sm rounded-lg p-2 md:p-4 w-20 md:w-28 text-center shadow-lg hover:scale-105 transition-transform duration-300">
                        {displayValue}
                    </div>
                    <div className="mt-2 text-sm md:text-base font-semibold text-muted-foreground">{label}</div>
                </div>
            );
        })
    ) : <p className="text-3xl font-bold text-primary">ভোটের উৎসব শুরু!</p>;
    
    if (!isClient) {
        return (
            <section className="py-12 md:py-16 bg-background">
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
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 text-center text-foreground">
                <h2 className="text-3xl md:text-4xl font-bold font-headline flex justify-center items-center gap-3">
                    <Timer className="w-8 h-8 animate-bounce text-primary" />
                    ঐতিহাসিক দিনের অপেক্ষা
                </h2>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">গবেষণার নতুন দিগন্ত উন্মোচনের আর মাত্র...</p>
                <div className="mt-8 flex flex-row flex-nowrap justify-center gap-2 md:gap-4">
                    {timerComponents}
                </div>
                 <p className="mt-8 text-lg md:text-xl font-semibold animate-pulse text-primary">প্রতিটি সেকেন্ড গুরুত্বপূর্ণ! আপনার ভোটেই আসবে পরিবর্তন।</p>
            </div>
        </section>
    );
}

function VoteCallToActionSection() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-headline text-destructive">
                    ভোট দিন আমাকে!
                </h2>
                <p className="mt-2 font-body text-lg text-foreground">
                    আপনার প্রতিনিধি, আপনার কন্ঠস্বর | ডাকসু ২০২৫
                </p>
                <div className="mt-6">
                    <Button 
                        size="lg"
                        variant="accent"
                        className="font-headline text-md sm:text-lg font-bold h-auto py-3 px-6 sm:h-14 sm:px-8 rounded-full w-full sm:w-auto"
                    >
                       আপনার ভোটে গড়ে উঠুক একটি গবেষণা-উদ্যমী ডাকসু
                    </Button>
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
    <section className="bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <Flag className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground"><span className="text-destructive">যৌক্তিক আন্দোলনে</span> আমি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            শিক্ষার্থীদের অধিকার এবং বিভিন্ন সামাজিক ন্যায্যতার দাবিতে আমার অংশগ্রহণের ঝলক।
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {logicalMovementActivities.map((activity, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-background p-6 rounded-lg shadow-md">
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

const mediaItems = [
    {
        type: 'video',
        title: 'Banglanews24-এ আমার সাক্ষাৎকার',
        description: 'ঢাকা বিশ্ববিদ্যালয় কেন্দ্রীয় ছাত্র সংসদ (ডাকসু) নির্বাচন নিয়ে আমার ভাবনা ও পরিকল্পনা তুলে ধরেছি।',
        embedHtml: `<div style="position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%;"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbanglanews24%2Fvideos%2F1483287379763393%2F&show_text=true&app_id=" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe></div>`
    },
    {
        type: 'post',
        title: 'দৈনিক জনকণ্ঠে প্রকাশিত প্রতিবেদন',
        description: 'ডাকসু নির্বাচনে আমার প্রার্থিতা এবং শিক্ষার্থীদের জন্য আমার অঙ্গীকার নিয়ে দৈনিক জনকণ্ঠে প্রকাশিত একটি বিশেষ প্রতিবেদন।',
        embedHtml: `<div style="position: relative; padding-bottom: 100%; height: 0; overflow: hidden; max-width: 100%;"><iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdailyjanakanthabd%2Fposts%2Fpfbid02sVDcBrVpA4RcGW7sqhXM8nRV4eoKw5U8TbQRqaQfmrX9MCPPNV996qYo7G6zFWH4l&show_text=true&app_id=" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>`
    }
];


function MediaSection() {
    const [api, setApi] = React.useState<CarouselApi>();
    const plugin = React.useRef(Autoplay({ delay: 8000, stopOnInteraction: true }));

    return (
        <section className="bg-card py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Tv className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        <span className="text-destructive">গণমাধ্যমে</span> আমি
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        বিভিন্ন গণমাধ্যমে আমার সাক্ষাৎকার, প্রতিবেদন এবং ডাকসু নির্বাচন নিয়ে আমার ভাবনার প্রতিফলন।
                    </p>
                </div>

                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{ align: "center", loop: true }}
                    className="w-full mt-12"
                >
                    <CarouselContent className="-ml-4">
                        {mediaItems.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                <div className="p-1 h-full">
                                     <Card className="shadow-lg overflow-hidden h-full flex flex-col bg-background">
                                        <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                                            <h3 className="font-headline text-xl md:text-2xl font-bold">{item.title}</h3>
                                            <p className="font-body text-muted-foreground mt-2 mb-4 text-sm md:text-base flex-grow">{item.description}</p>
                                            <div 
                                                className="w-full mt-auto"
                                                dangerouslySetInnerHTML={{ __html: item.embedHtml }}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none z-10" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-none z-10" />
                </Carousel>
            </div>
        </section>
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
       { src: "https://i.postimg.cc/NfgFDsZH/photo_2025-08-21_23-30_00.jpg", alt: "বিতর্ক প্রতিযোগিতা", hint: "debate competition" },
       { src: "https://i.postimg.cc/T1xwZfwB/photo_2025-08-21_23-30_31.jpg", alt: "বিতর্ক প্রতিযোগিতা", hint: "debate competition" },
    ],
  },
    {
    icon: Trophy,
    title: "Intra Department Football Tournament 2023",
    description: "",
    images: [
        { src: "https://i.postimg.cc/SNDsv0pt/photo_2025-08-21_23-30_10.jpg", alt: "ফুটবল টুর্নামেন্ট", hint: "football tournament" },
    ],
  },
  {
    icon: Trophy,
    title: "প্রজাপতি মেলা ২০২১, ডিবেট কম্পিটিশন চ্যাম্পিয়ন, বারোয়ারী ডিবেট রানার্সআপ",
    description: "",
    images: [
        { src: "https://i.postimg.cc/XNKX9G1W/photo_2025-08-21_23-30_16.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
        { src: "https://i.postimg.cc/qqGRrS6q/photo_2025-08-21_23-30_21.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
        { src: "https://i.postimg.cc/xCM8xc0K/photo_2025-08-21_23-30_26.jpg", alt: "প্রজাপতি মেলা পুরস্কার", hint: "butterfly fair award" },
    ],
  },
];

function SkillsLeadershipServiceSection() {
    return (
        <section className="bg-card py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Combine className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        আমার <span className="text-destructive">দক্ষতা, নেতৃত্ব ও সেবা</span>
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                       আমি বিশ্বাস করি, একজন শিক্ষার্থীর প্রকৃত বিকাশ শুধু একাডেমিক পড়াশোনার মধ্যে সীমাবদ্ধ থাকে না, বরং তার পূর্ণতা আসে সহশিক্ষা কার্যক্রমের মাধ্যমে। আমার বিশ্ববিদ্যালয় জীবনজুড়ে আমি সেই চেষ্টাই করেছি—একদিকে যেমন যৌক্তিক আন্দোলনে রাজপথে থেকেছি, তেমনই সহপাঠী ও অনুজদের জন্য কর্মশালা ও সম্মেলন আয়োজন করেছি। ভর্তিচ্ছুদের স্বপ্নপূরণের পথে সঙ্গী হতে কলম ধরেছি, আবার গবেষণার জগতে তরুণদের উৎসাহিত করতে নতুন নতুন প্ল্যাটফর্ম তৈরির চেষ্টা করেছি। আমার এই পথচলা মূলত দক্ষতা, নেতৃত্ব ও সেবার এক সমন্বয়, যার মাধ্যমে আমি ঢাকা বিশ্ববিদ্যালয়ের প্রতিটি শিক্ষার্থীর জন্য একটি সমৃদ্ধ ক্যাম্পাস জীবন নিশ্চিত করতে চাই।
                    </p>
                </div>
                <div className="mt-16 space-y-8">
                  {skillsAndLeadershipActivities.map((activity, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-8 items-center bg-background p-6 rounded-lg shadow-md">
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
        <section className="py-12 md:py-16 bg-background w-full overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <HandHeart className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                        আমার <span className="text-destructive">সামাজিক</span> কাজ
                    </h2>
                    <p className="mt-4 font-body text-lg text-muted-foreground">
                        সমাজের প্রতি দায়বদ্ধতা থেকে আমার বিভিন্ন সামাজিক ও মানবিক কার্যক্রমের কিছু মুহূর্ত।
                    </p>
                </div>
            </div>
            <div className="mt-12 w-full overflow-x-hidden mask-image-lr group">
                 <div className="animate-scroll group-hover:pause-animation flex gap-4">
                    {isLoading ? (
                        Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="flex-shrink-0 p-4">
                                <Skeleton className="w-56 h-40 rounded-lg" />
                            </div>
                        ))
                    ) : (
                        imagesToDisplay.map((work, index) => (
                            <div key={`${work.id}-${index}`} className="flex-shrink-0 p-4">
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

type Testimonial = {
    id: string;
    name: string;
    role: string;
    image: string;
    imageHint: string;
    testimonial: string;
};

const fallbackTestimonials: Testimonial[] = [
    {
        id: "fallback-1",
        name: "আফরিন সুলতানা",
        role: "শিক্ষার্থী, অর্থনীতি বিভাগ",
        image: "https://i.postimg.cc/W3fJmG8p/female-student-1.jpg",
        imageHint: "female student",
        testimonial: "সিয়াম ভাই শুধু একজন ভালো সংগঠকই নন, একজন অসাধারণ মানুষও। হলের যেকোনো সমস্যায় আমরা তাকে সবসময় পাশে পেয়েছি। তার মতো একজন নিবেদিতপ্রাণ নেতাই ডাকসুতে প্রয়োজন।"
    },
    {
        id: "fallback-2",
        name: "তারেক হাসান",
        role: "শিক্ষার্থী, কম্পিউটার বিজ্ঞান ও প্রকৌশল বিভাগ",
        image: "https://i.postimg.cc/t4G2wDk1/male-student-1.jpg",
        imageHint: "male student",
        testimonial: "গবেষণার প্রতি সিয়াম ভাইয়ের আগ্রহ এবং তার পরিকল্পনাগুলো সত্যিই প্রশংসার যোগ্য। তার 'রিসোর্স হেল্পডেস্ক' এবং 'ডিজিটাল আর্কাইভ' এর ধারণাগুলো বাস্তবায়িত হলে আমাদের মতো তরুণ গবেষকরা অনেক উপকৃত হবে।"
    },
    {
        id: "fallback-3",
        name: "সুমাইয়া আক্তার",
        role: "শিক্ষার্থী, আন্তর্জাতিক সম্পর্ক বিভাগ",
        image: "https://i.postimg.cc/Wb04ZkXp/female-student-2.jpg",
        imageHint: "student portrait",
        testimonial: "যৌক্তিক আন্দোলনে সিয়াম ভাইয়ের সাহসী ভূমিকা আমাদের সবসময় অনুপ্রাণিত করে। তিনি শুধু কথার নেতা নন, কাজের মাধ্যমে নিজেকে প্রমাণ করেছেন। আমরা তার মতো একজন প্রতিনিধিই চাই।"
    },
    {
        id: "fallback-4",
        name: "রাকিবুল ইসলাম",
        role: "আবাসিক শিক্ষার্থী, ফজলুল হক মুসলিম হল",
        image: "https://i.postimg.cc/wxM1807v/male-student-2.jpg",
        imageHint: "student face",
        testimonial: "একজন হলের বড় ভাই হিসেবে সিয়াম ইমন ভাইয়ের তুলনা হয় না। পড়াশোনা থেকে শুরু করে ব্যক্তিগত সমস্যা—সবকিছুতেই তিনি আমাদের পরামর্শ দেন। তার মতো একজন অভিভাবক আমাদের প্রয়োজন।"
    },
    {
        id: "fallback-5",
        name: "ফারহানা চৌধুরী",
        role: "শিক্ষার্থী, প্রাণিবিদ্যা বিভাগ",
        image: "https://i.postimg.cc/8c7pFdR9/female-student-3.jpg",
        imageHint: "woman portrait",
        testimonial: "বিভাগের বড় ভাই হিসেবে সিয়াম ইমন ভাইয়ের একাডেমিক গাইডলাইন আমাদের জন্য আশীর্বাদস্বরূপ। তার আয়োজিত কর্মশালাগুলো আমাদের গবেষণার কাজে অনেক সাহায্য করেছে। গবেষণা ও প্রকাশনা সম্পাদক পদে তিনিই সেরা।"
    }
];

function TestimonialSection() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    useEffect(() => {
        const fetchTestimonials = async () => {
            setIsLoading(true);
            try {
                const testimonialsCollection = collection(db, "testimonials");
                const testimonialsSnapshot = await getDocs(testimonialsCollection);
                const testimonialsList = testimonialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));
                setTestimonials(testimonialsList.length > 0 ? testimonialsList : fallbackTestimonials);
            } catch (error) {
                console.error("Error fetching testimonials, using fallback.", error);
                setTestimonials(fallbackTestimonials);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (!api) return;
        
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        api.on("select", onSelect);
        
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);
    
    const displayData = isLoading ? Array.from({ length: 5 }).map((_, i) => ({id: `skel-${i}`})) : testimonials;

    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <Quote className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">
                       আমার সম্পর্কে <span className="text-destructive">শিক্ষার্থীদের কিছু কথা</span>
                    </h2>
                </div>
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full mt-12"
                >
                    <CarouselContent className="-ml-4">
                        {displayData.map((item, index) => (
                            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                <div className="p-1 h-full">
                                    <Card className="shadow-lg h-full flex flex-col items-center text-center p-8 transition-all duration-300 bg-card">
                                       {isLoading ? (
                                           <>
                                                <Skeleton className="w-24 h-24 rounded-full mb-4" />
                                                <Skeleton className="h-7 w-32 mb-2" />
                                                <Skeleton className="h-5 w-40 mb-4" />
                                                <div className="space-y-2 w-full">
                                                    <Skeleton className="h-4 w-full" />
                                                    <Skeleton className="h-4 w-full" />
                                                    <Skeleton className="h-4 w-3/4" />
                                                </div>
                                           </>
                                       ) : (
                                        <>
                                            <div className="relative w-24 h-24 mb-4">
                                                <Image
                                                    src={(item as Testimonial).image}
                                                    alt={(item as Testimonial).name}
                                                    fill
                                                    className="rounded-full object-cover border-4 border-primary/50"
                                                    data-ai-hint={(item as Testimonial).imageHint}
                                                />
                                            </div>
                                            <CardTitle className="font-headline text-2xl">{(item as Testimonial).name}</CardTitle>
                                            <CardDescription className="font-body text-primary">{(item as Testimonial).role}</CardDescription>
                                            <p className="font-body text-muted-foreground mt-4 text-sm flex-grow">
                                                "{(item as Testimonial).testimonial}"
                                            </p>
                                        </>
                                       )}
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => api?.scrollTo(i)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${current === i ? 'w-4 bg-primary' : 'bg-muted'}`}
                            aria-label={`Go to testimonial ${i + 1}`}
                          />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

const leadershipPoints = [
    { icon: ShieldCheck, text: "জাতির অগ্রগতি আর শিক্ষার্থীদের অধিকার—আমি আছি সবার পাশে, প্রতিটা পদক্ষেপে।" },
    { icon: Users, text: "মাঠে আছি, মাঠে থাকব—আপনাদের সুখ-দুঃখের সঙ্গী হব।" },
    { icon: GraduationCap, text: "কাজ করেছি, নেতৃত্ব দিয়েছি, সংগ্রাম করেছি—আপনাদের পাশে থেকে নিজেকে প্রমাণ করেছি।" },
    { icon: MessageSquare, text: "আপনাদের ভালোবাসা এবং বিশ্বাসই আমার মূলধন। আপনাদের ভোটে আমি আরও ভালো কিছু করে দেখাব।" },
];

function LeadershipSection() {
    return (
        <section className="py-12 md:py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
                        পদ নয়, <span className="text-destructive">দায়িত্বই আমার আসল পরিচয়।</span>
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
        <section className="py-12 md:py-16 bg-background">
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
    <section id="feedback-form" className="py-12 md:py-16 bg-background">
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
                <Button type="submit" size="lg" className="w-full font-headline text-xl bg-primary hover:bg-primary/90" disabled={isSubmitting}>
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
        <section id="pre-vote" className="py-12 md:py-16 bg-card">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Vote className="mx-auto h-16 w-16 text-primary animate-pulse" />
                    <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground"><span className="text-destructive">প্রি-ভোটিং:</span> আপনার সমর্থনই আমার শক্তি</h2>
                    <p className="font-body text-lg mt-4 text-muted-foreground">
                        মূল নির্বাচনের আগে আপনার মূল্যবান ভোট দিয়ে আমাকে সমর্থন জানান এবং এই পরিবর্তনের যাত্রায় আমার সঙ্গী হোন।
                    </p>
                    
                    <Card className="mt-8 shadow-2xl bg-background max-w-md mx-auto">
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
                                <p className="text-primary font-semibold mt-3">আপনার ভোট সফলভাবে গৃহীত হয়েছে!</p>
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

function SupportSection() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4">
                <Card className="max-w-4xl mx-auto rounded-lg p-8 md:p-12 text-center text-white" style={{background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--destructive)))'}}>
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-3 rounded-full">
                           <Phone className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold">কোনো প্রশ্ন আছে?</h2>
                    <p className="font-body text-lg mt-2 opacity-90">যেকোনো সময় আমাদের স্টুডেন্ট অ্যাডভাইজরের সাথে কথা বলুন।</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-200 font-bold">
                            <Link href="tel:+8801623593673">এখনই কল করুন</Link>
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
