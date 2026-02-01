"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Shield, PlusCircle, Edit, Trash2, LogOut, MessageSquare, Users, Bell, Camera, Quote, Newspaper, Megaphone, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";
import { useAuth } from "@/hooks/use-auth";
import { useSignOut } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Switch } from "@/components/ui/switch";


type Feedback = {
    id: string;
    name?: string;
    mobile?: string;
    subject: string;
    message: string;
    isAnonymous: boolean;
    createdAt: any;
};

type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    hint: string;
};

type Notice = {
    id: string;
    text: string;
};

type PromotionalPopup = {
    id: string;
    enabled: boolean;
    imageUrl: string;
    displayFrequency: 'every-load' | 'once-per-session' | 'once-per-day';
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    showOnMobile: boolean;
    showOnDesktop: boolean;
};

type GalleryImage = {
    id: string;
    src: string;
    alt: string;
    hint: string;
};

type Testimonial = {
    id: string;
    name: string;
    role: string;
    image: string;
    imageHint: string;
    testimonial: string;
};

type News = {
    id: string;
    category: string;
    title: string;
    date: string;
    description: string;
    content: string;
    image: string;
    imageHint: string;
};


function AdminPage() {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [notice, setNotice] = useState<Notice>({ id: "live-notice", text: "" });
    const [promotionalPopup, setPromotionalPopup] = useState<PromotionalPopup>({ 
        id: "promotional-popup", 
        enabled: true, 
        imageUrl: "", 
        displayFrequency: "once-per-session",
        title: "",
        description: "",
        buttonText: "",
        buttonLink: "",
        showOnMobile: true,
        showOnDesktop: true,
    });
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [news, setNews] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [isTeamMemberFormOpen, setIsTeamMemberFormOpen] = useState(false);
    const [currentTeamMember, setCurrentTeamMember] = useState<Partial<TeamMember>>({});
    const [isEditingTeamMember, setIsEditingTeamMember] = useState(false);

    const [isGalleryImageFormOpen, setIsGalleryImageFormOpen] = useState(false);
    const [currentGalleryImage, setCurrentGalleryImage] = useState<Partial<GalleryImage>>({});
    
    const [isTestimonialFormOpen, setIsTestimonialFormOpen] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState<Partial<Testimonial>>({});
    const [isEditingTestimonial, setIsEditingTestimonial] = useState(false);

    const [isNewsFormOpen, setIsNewsFormOpen] = useState(false);
    const [currentNews, setCurrentNews] = useState<Partial<News>>({});
    const [isEditingNews, setIsEditingNews] = useState(false);

    const [signOut] = useSignOut(auth);
    const router = useRouter();
    const {toast} = useToast();


    const fetchFeedbacks = async () => {
        const feedbacksCollection = collection(db, "feedback");
        const q = query(feedbacksCollection, orderBy("createdAt", "desc"));
        const feedbacksSnapshot = await getDocs(q);
        const feedbacksList = feedbacksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Feedback));
        setFeedbacks(feedbacksList);
    };

    const fetchTeamMembers = async () => {
        const teamMembersCollection = collection(db, "teamMembers");
        const teamMembersSnapshot = await getDocs(teamMembersCollection);
        const teamMembersList = teamMembersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamMember));
        setTeamMembers(teamMembersList);
    };

    const fetchNotice = async () => {
        const noticeSnapshot = await getDocs(collection(db, "notices"));
        if (!noticeSnapshot.empty) {
            const noticeDoc = noticeSnapshot.docs[0];
            setNotice({ id: noticeDoc.id, ...noticeDoc.data() } as Notice);
        }
    };
    
    const fetchPromotionalPopup = async () => {
        const popupDoc = await getDoc(doc(db, "siteSettings", "promotional-popup"));
        if (popupDoc.exists()) {
            const data = popupDoc.data();
             setPromotionalPopup({
                id: popupDoc.id,
                enabled: data.enabled ?? true,
                imageUrl: data.imageUrl ?? "",
                displayFrequency: data.displayFrequency ?? "once-per-session",
                title: data.title ?? "",
                description: data.description ?? "",
                buttonText: data.buttonText ?? "",
                buttonLink: data.buttonLink ?? "",
                showOnMobile: data.showOnMobile ?? true,
                showOnDesktop: data.showOnDesktop ?? true,
            });
        }
    };

    const fetchGalleryImages = async () => {
        const galleryCollection = collection(db, "gallery");
        const gallerySnapshot = await getDocs(galleryCollection);
        const galleryList = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GalleryImage));
        setGalleryImages(galleryList);
    };

    const fetchTestimonials = async () => {
        const testimonialsCollection = collection(db, "testimonials");
        const testimonialsSnapshot = await getDocs(testimonialsCollection);
        const testimonialsList = testimonialsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Testimonial));
        setTestimonials(testimonialsList);
    };

    const fetchNews = async () => {
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
        setNews(newsList);
    };


    const loadAllData = async () => {
        setIsLoading(true);
        try {
            await Promise.all([
                fetchFeedbacks(), 
                fetchTeamMembers(),
                fetchNotice(),
                fetchPromotionalPopup(),
                fetchGalleryImages(),
                fetchTestimonials(),
                fetchNews(),
            ]);
        } catch (error) {
            console.error("Error loading data: ", error);
            toast({
                variant: 'destructive',
                title: 'ডেটা লোড করতে সমস্যা হয়েছে',
                description: (error as Error).message,
            });
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        loadAllData();
    }, []);

     const handleDeleteFeedback = async (id: string) => {
        try {
            await deleteDoc(doc(db, "feedback", id));
            fetchFeedbacks();
            toast({
                title: "মতামত সফলভাবে মুছে ফেলা হয়েছে",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "মতামত মুছে ফেলতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };

    const handleTeamMemberFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const action = isEditingTeamMember ? 'আপডেট' : 'যোগ';
        try {
            if (isEditingTeamMember && currentTeamMember.id) {
                const teamMemberDoc = doc(db, "teamMembers", currentTeamMember.id);
                await updateDoc(teamMemberDoc, {
                    name: currentTeamMember.name,
                    role: currentTeamMember.role,
                    image: currentTeamMember.image,
                    hint: currentTeamMember.hint,
                });
            } else {
                await addDoc(collection(db, "teamMembers"), {
                    name: currentTeamMember.name,
                    role: currentTeamMember.role,
                    image: currentTeamMember.image,
                    hint: currentTeamMember.hint,
                });
            }
            closeTeamMemberForm();
            fetchTeamMembers();
            toast({
                title: `টিম মেম্বার সফলভাবে ${action} হয়েছে`,
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: `টিম মেম্বার ${action} করতে সমস্যা হয়েছে`,
                description: (error as Error).message,
            });
        }
    };

    const openTeamMemberForm = (member?: TeamMember) => {
        if (member) {
            setCurrentTeamMember(member);
            setIsEditingTeamMember(true);
        } else {
            setCurrentTeamMember({ name: "", role: "", image: "https://placehold.co/400x400.png", hint: "" });
            setIsEditingTeamMember(false);
        }
        setIsTeamMemberFormOpen(true);
    };

    const closeTeamMemberForm = () => {
        setIsTeamMemberFormOpen(false);
        setCurrentTeamMember({});
        setIsEditingTeamMember(false);
    };

    const handleDeleteTeamMember = async (id: string) => {
        try {
            await deleteDoc(doc(db, "teamMembers", id));
            fetchTeamMembers();
            toast({
                title: "টিম মেম্বার সফলভাবে মুছে ফেলা হয়েছে",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "টিম মেম্বার মুছে ফেলতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };

    const handleNoticeFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const noticeDoc = doc(db, "notices", "live-notice");
            await setDoc(noticeDoc, { text: notice.text });
            fetchNotice();
            toast({
                title: 'নোটিশ সফলভাবে আপডেট হয়েছে',
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'নোটিশ আপডেট করতে সমস্যা হয়েছে',
                description: (error as Error).message,
            });
        }
    };
    
    const handlePromotionalPopupFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const popupDoc = doc(db, "siteSettings", "promotional-popup");
            await setDoc(popupDoc, { 
                enabled: promotionalPopup.enabled, 
                imageUrl: promotionalPopup.imageUrl,
                displayFrequency: promotionalPopup.displayFrequency,
                title: promotionalPopup.title,
                description: promotionalPopup.description,
                buttonText: promotionalPopup.buttonText,
                buttonLink: promotionalPopup.buttonLink,
                showOnMobile: promotionalPopup.showOnMobile,
                showOnDesktop: promotionalPopup.showOnDesktop
            }, { merge: true });
            fetchPromotionalPopup();
            toast({
                title: 'প্রমোশনাল পপআপ সফলভাবে আপডেট হয়েছে',
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'পপআপ আপডেট করতে সমস্যা হয়েছে',
                description: (error as Error).message,
            });
        }
    };

    const handleGalleryImageFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "gallery"), {
                src: currentGalleryImage.src,
                alt: currentGalleryImage.alt,
                hint: currentGalleryImage.hint,
            });
            closeGalleryImageForm();
            fetchGalleryImages();
            toast({
                title: "গ্যালারির ছবি সফলভাবে যোগ হয়েছে",
            });
        } catch(error) {
            toast({
                variant: 'destructive',
                title: "গ্যালারির ছবি যোগ করতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };

    const openGalleryImageForm = () => {
        setCurrentGalleryImage({ src: "https://placehold.co/600x400.png", alt: "", hint: "" });
        setIsGalleryImageFormOpen(true);
    };

    const closeGalleryImageForm = () => {
        setIsGalleryImageFormOpen(false);
        setCurrentGalleryImage({});
    };

    const handleDeleteGalleryImage = async (id: string) => {
        try {
            await deleteDoc(doc(db, "gallery", id));
            fetchGalleryImages();
            toast({
                title: "গ্যালারির ছবি সফলভাবে মুছে ফেলা হয়েছে",
            });
        } catch(error) {
            toast({
                variant: 'destructive',
                title: "গ্যালারির ছবি মুছে ফেলতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };

    const handleTestimonialFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const action = isEditingTestimonial ? 'আপডেট' : 'যোগ';
        try {
            const testimonialData = {
                name: currentTestimonial.name,
                role: currentTestimonial.role,
                image: currentTestimonial.image,
                imageHint: currentTestimonial.imageHint,
                testimonial: currentTestimonial.testimonial,
            };

            if (isEditingTestimonial && currentTestimonial.id) {
                const testimonialDoc = doc(db, "testimonials", currentTestimonial.id);
                await updateDoc(testimonialDoc, testimonialData);
            } else {
                await addDoc(collection(db, "testimonials"), testimonialData);
            }
            closeTestimonialForm();
            fetchTestimonials();
            toast({
                title: `প্রশংসাপত্র সফলভাবে ${action} হয়েছে`,
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: `প্রশংসাপত্র ${action} করতে সমস্যা হয়েছে`,
                description: (error as Error).message,
            });
        }
    };

    const openTestimonialForm = (testimonial?: Testimonial) => {
        if (testimonial) {
            setCurrentTestimonial(testimonial);
            setIsEditingTestimonial(true);
        } else {
            setCurrentTestimonial({ name: "", role: "", image: "https://placehold.co/400x400.png", imageHint: "", testimonial: "" });
            setIsEditingTestimonial(false);
        }
        setIsTestimonialFormOpen(true);
    };

    const closeTestimonialForm = () => {
        setIsTestimonialFormOpen(false);
        setCurrentTestimonial({});
        setIsEditingTestimonial(false);
    };

    const handleDeleteTestimonial = async (id: string) => {
        try {
            await deleteDoc(doc(db, "testimonials", id));
            fetchTestimonials();
            toast({
                title: "প্রশংসাপত্র সফলভাবে মুছে ফেলা হয়েছে",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "প্রশংসাপত্র মুছে ফেলতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };
    
    const handleNewsFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const action = isEditingNews ? 'আপডেট' : 'যোগ';
        try {
            const newsData = {
                category: currentNews.category,
                title: currentNews.title,
                date: currentNews.date,
                description: currentNews.description,
                content: currentNews.content,
                image: currentNews.image,
                imageHint: currentNews.imageHint,
            };

            if (isEditingNews && currentNews.id) {
                const newsDoc = doc(db, "news", currentNews.id);
                await updateDoc(newsDoc, newsData);
            } else {
                await addDoc(collection(db, "news"), newsData);
            }
            closeNewsForm();
            fetchNews();
            toast({
                title: `সংবাদ সফলভাবে ${action} হয়েছে`,
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: `সংবাদ ${action} করতে সমস্যা হয়েছে`,
                description: (error as Error).message,
            });
        }
    };

    const openNewsForm = (newsItem?: News) => {
        if (newsItem) {
            setCurrentNews(newsItem);
            setIsEditingNews(true);
        } else {
            setCurrentNews({ 
                category: "", 
                title: "", 
                date: new Date().toISOString().split('T')[0], 
                description: "", 
                content: "", 
                image: "https://placehold.co/600x400.png", 
                imageHint: "" 
            });
            setIsEditingNews(false);
        }
        setIsNewsFormOpen(true);
    };

    const closeNewsForm = () => {
        setIsNewsFormOpen(false);
        setCurrentNews({});
        setIsEditingNews(false);
    };
    
    const handleDeleteNews = async (id: string) => {
        try {
            await deleteDoc(doc(db, "news", id));
            fetchNews();
            toast({
                title: "সংবাদ সফলভাবে মুছে ফেলা হয়েছে",
            });
        } catch (error) {
            toast({
                variant: 'destructive',
                title: "সংবাদ মুছে ফেলতে সমস্যা হয়েছে",
                description: (error as Error).message,
            });
        }
    };


    const handleSignOut = async () => {
        const success = await signOut();
        if (success) {
          router.push('/');
           toast({
              title: "সফলভাবে সাইন আউট হয়েছে",
              description: "আপনি অ্যাডমিন প্যানেল থেকে লগ আউট করেছেন।",
            });
        }
    };


  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center items-center gap-4">
              <Shield className="mx-auto h-12 w-12 text-primary" />
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">অ্যাডমিন প্যানেল</h1>
            </div>
            <p className="font-body text-lg mt-4 text-muted-foreground">
                ওয়েবসাইট পরিচালনার জন্য অ্যাডমিন প্যানেলে স্বাগতম।
            </p>
            <Button onClick={handleSignOut} variant="destructive" className="mt-4">
                <LogOut className="mr-2 h-4 w-4"/> সাইন আউট
            </Button>
        </header>

        <main className="mt-16">
            <Accordion type="multiple" className="w-full space-y-4">
                 <AccordionItem value="site-settings">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle className="flex items-center gap-2"><Megaphone />প্রমোশনাল পপআপ</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <form onSubmit={handlePromotionalPopupFormSubmit} className="space-y-6">
                                <div className="space-y-2">
                                     <div className="flex items-center space-x-2">
                                        <Switch
                                            id="popup-enabled"
                                            checked={promotionalPopup.enabled}
                                            onCheckedChange={(checked) => setPromotionalPopup({ ...promotionalPopup, enabled: checked })}
                                        />
                                        <Label htmlFor="popup-enabled">প্রমোশনাল পপআপ সক্রিয় করুন</Label>
                                    </div>
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="popup-image-url">পপআপ ছবির URL</Label>
                                    <Input
                                        id="popup-image-url"
                                        value={promotionalPopup.imageUrl}
                                        onChange={(e) => setPromotionalPopup({ ...promotionalPopup, imageUrl: e.target.value })}
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="popup-title">শিরোনাম</Label>
                                    <Input id="popup-title" value={promotionalPopup.title || ''} onChange={(e) => setPromotionalPopup({ ...promotionalPopup, title: e.target.value })} placeholder="পপআপের জন্য আকর্ষণীয় শিরোনাম" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="popup-description">বিবরণ</Label>
                                    <Textarea id="popup-description" value={promotionalPopup.description || ''} onChange={(e) => setPromotionalPopup({ ...promotionalPopup, description: e.target.value })} placeholder="সংক্ষিপ্ত বিবরণ যোগ করুন" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="popup-button-text">বাটনের লেখা</Label>
                                        <Input id="popup-button-text" value={promotionalPopup.buttonText || ''} onChange={(e) => setPromotionalPopup({ ...promotionalPopup, buttonText: e.target.value })} placeholder="যেমন: আরও জানুন" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="popup-button-link">বাটনের লিঙ্ক</Label>
                                        <Input id="popup-button-link" value={promotionalPopup.buttonLink || ''} onChange={(e) => setPromotionalPopup({ ...promotionalPopup, buttonLink: e.target.value })} placeholder="/manifesto" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="display-frequency">কতবার দেখানো হবে?</Label>
                                    <Select
                                        value={promotionalPopup.displayFrequency}
                                        onValueChange={(value: 'every-load' | 'once-per-session' | 'once-per-day') => setPromotionalPopup({ ...promotionalPopup, displayFrequency: value })}
                                    >
                                        <SelectTrigger id="display-frequency">
                                            <SelectValue placeholder="Select frequency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="every-load">প্রতিবার পেজ লোডে</SelectItem>
                                            <SelectItem value="once-per-session">প্রতি সেশনে একবার</SelectItem>
                                            <SelectItem value="once-per-day">প্রতিদিন একবার</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>কোথায় দেখাবেন?</Label>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center space-x-2">
                                            <Switch id="show-on-desktop" checked={promotionalPopup.showOnDesktop} onCheckedChange={(checked) => setPromotionalPopup({ ...promotionalPopup, showOnDesktop: checked })} />
                                            <Label htmlFor="show-on-desktop">ডেস্কটপ</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Switch id="show-on-mobile" checked={promotionalPopup.showOnMobile} onCheckedChange={(checked) => setPromotionalPopup({ ...promotionalPopup, showOnMobile: checked })} />
                                            <Label htmlFor="show-on-mobile">মোবাইল</Label>
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit">
                                    <Settings className="mr-2 h-4 w-4" /> সেটিংস সেভ করুন
                                </Button>
                            </form>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                <AccordionItem value="notice-bar">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>নোটিশ বার ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                             <form onSubmit={handleNoticeFormSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="notice-text">নোটিশের লেখা</Label>
                                    <Textarea
                                        id="notice-text"
                                        value={notice.text}
                                        onChange={(e) => setNotice({ ...notice, text: e.target.value })}
                                        placeholder="ওয়েবসাইটের জন্য নতুন নোটিশ লিখুন..."
                                        required
                                    />
                                </div>
                                <Button type="submit">
                                    <Bell className="mr-2 h-4 w-4" /> আপডেট করুন
                                </Button>
                            </form>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                <AccordionItem value="news">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>সংবাদ ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openNewsForm()}>
                                    <Newspaper className="mr-2 h-4 w-4" /> নতুন সংবাদ যোগ করুন
                                </Button>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {isLoading ? (
                                     Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} height={200} />)
                                ) : (
                                    news.map(n => (
                                        <Card key={n.id} className="p-4 bg-card flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-lg">{n.title}</h3>
                                                <p className="text-sm text-muted-foreground">{n.date}</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-4">
                                                <Button variant="outline" size="sm" onClick={() => openNewsForm(n)}>
                                                    <Edit className="h-4 w-4 mr-2" /> সম্পাদনা
                                                </Button>
                                                <Button variant="destructive" size="sm" onClick={() => handleDeleteNews(n.id)}>
                                                    <Trash2 className="h-4 w-4 mr-2" /> মুছুন
                                                </Button>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                 <AccordionItem value="gallery-images">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>গ্যালারি ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={openGalleryImageForm}>
                                    <Camera className="mr-2 h-4 w-4" /> নতুন ছবি যোগ করুন
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {isLoading ? (
                                    Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} height={150} />)
                                ) : (
                                    galleryImages.map(gi => (
                                        <Card key={gi.id} className="relative group overflow-hidden">
                                          <Image
                                            src={gi.src}
                                            alt={gi.alt}
                                            width={200}
                                            height={280}
                                            className="object-cover w-full h-full"
                                            data-ai-hint={gi.hint}
                                          />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <Button variant="destructive" size="icon" onClick={() => handleDeleteGalleryImage(gi.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                <AccordionItem value="testimonials">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>সহযোদ্ধাদের কথা ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openTestimonialForm()}>
                                    <Quote className="mr-2 h-4 w-4" /> নতুন বার্তা যোগ করুন
                                </Button>
                            </div>
                            <div className="space-y-4">
                                {isLoading ? (
                                    <Skeleton height={80} count={2} />
                                ) : (
                                    testimonials.map(t => (
                                        <Card key={t.id} className="flex items-center justify-between p-4 bg-card">
                                            <div className="flex items-center gap-4">
                                                <Image src={t.image} alt={t.name} width={50} height={50} className="rounded-full object-cover" />
                                                <div>
                                                    <h3 className="font-bold text-lg">{t.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{t.testimonial.substring(0, 50)}...</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" onClick={() => openTestimonialForm(t)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="destructive" size="icon" onClick={() => handleDeleteTestimonial(t.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                 <AccordionItem value="feedback">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>মতামত ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                             <ScrollArea className="h-96 pr-4">
                                <div className="space-y-4">
                                    {isLoading ? (
                                        <Skeleton height={100} count={3} />
                                    ) : feedbacks.length > 0 ? (
                                        feedbacks.map(f => (
                                            <Card key={f.id} className="bg-card p-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <p className="font-bold text-lg">{f.subject}</p>
                                                        <p className="text-muted-foreground mt-2">{f.message}</p>
                                                    </div>
                                                    <Button variant="destructive" size="icon" onClick={() => handleDeleteFeedback(f.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <div className="mt-4 border-t pt-4 text-sm text-muted-foreground">
                                                    {f.isAnonymous ? (
                                                        <p className="italic">পরিচয় গোপন রাখা হয়েছে</p>
                                                    ) : (
                                                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                                            <p><strong>নাম:</strong> {f.name}</p>
                                                            <p><strong>মোবাইল:</strong> {f.mobile}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </Card>
                                        ))
                                    ) : (
                                        <p>এখনও কোনো মতামত জমা পড়েনি।</p>
                                    )}
                                </div>
                            </ScrollArea>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
                <AccordionItem value="team-members">
                    <Card>
                        <AccordionTrigger className="p-6">
                            <CardTitle>টিম মেম্বার ব্যবস্থাপনা</CardTitle>
                        </AccordionTrigger>
                        <AccordionContent className="p-6 pt-0">
                            <div className="flex justify-end mb-4">
                                <Button onClick={() => openTeamMemberForm()}>
                                    <Users className="mr-2 h-4 w-4" /> নতুন মেম্বার যোগ করুন
                                </Button>
                            </div>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {isLoading ? (
                                    Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} height={80}/>)
                                ) : (
                                    teamMembers.map(tm => (
                                        <Card key={tm.id} className="p-4 bg-card flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <Image src={tm.image} alt={tm.name} width={50} height={50} className="rounded-full object-cover" />
                                                <div>
                                                    <h3 className="font-bold text-lg">{tm.name}</h3>
                                                    <p className="text-sm text-muted-foreground">{tm.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button variant="outline" size="icon" onClick={() => openTeamMemberForm(tm)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button variant="destructive" size="icon" onClick={() => handleDeleteTeamMember(tm.id)}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </Card>
                                    ))
                                )}
                            </div>
                        </AccordionContent>
                    </Card>
                </AccordionItem>
            </Accordion>
        </main>
      </div>

        {/* Gallery Image Form Dialog */}
        <Dialog open={isGalleryImageFormOpen} onOpenChange={setIsGalleryImageFormOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>নতুন গ্যালারির ছবি যোগ করুন</DialogTitle>
                    <DialogDescription>
                        এখানে গ্যালারির জন্য ছবির URL, alt টেক্সট এবং AI hint যোগ করুন।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleGalleryImageFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="gallery-src">ছবির URL</Label>
                        <Input
                            id="gallery-src"
                            value={currentGalleryImage.src || ''}
                            onChange={(e) => setCurrentGalleryImage({ ...currentGalleryImage, src: e.target.value })}
                             placeholder="https://placehold.co/600x400.png"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gallery-alt">ছবির বর্ণনা (Alt Text)</Label>
                        <Input
                            id="gallery-alt"
                            value={currentGalleryImage.alt || ''}
                            onChange={(e) => setCurrentGalleryImage({ ...currentGalleryImage, alt: e.target.value })}
                             placeholder="e.g., ক্যাম্পেইন এর মুহূর্ত"
                            required
                        />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="gallery-hint">ছবির Hint (for AI)</Label>
                        <Input
                            id="gallery-hint"
                            value={currentGalleryImage.hint || ''}
                            onChange={(e) => setCurrentGalleryImage({ ...currentGalleryImage, hint: e.target.value })}
                             placeholder="e.g. campaign moment"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">যোগ করুন</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeGalleryImageForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        
        {/* Team Member Form Dialog */}
        <Dialog open={isTeamMemberFormOpen} onOpenChange={setIsTeamMemberFormOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{isEditingTeamMember ? 'টিম মেম্বার সম্পাদনা করুন' : 'নতুন টিম মেম্বার যোগ করুন'}</DialogTitle>
                    <DialogDescription>
                        এখানে টিম মেম্বারের নাম, ভূমিকা, ছবির URL এবং ছবির Hint যোগ বা পরিবর্তন করুন।
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleTeamMemberFormSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="tm-name">নাম</Label>
                        <Input
                            id="tm-name"
                            value={currentTeamMember.name || ''}
                            onChange={(e) => setCurrentTeamMember({ ...currentTeamMember, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tm-role">ভূমিকা</Label>
                        <Input
                            id="tm-role"
                            value={currentTeamMember.role || ''}
                            onChange={(e) => setCurrentTeamMember({ ...currentTeamMember, role: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tm-image">ছবির URL</Label>
                        <Input
                            id="tm-image"
                            value={currentTeamMember.image || ''}
                            onChange={(e) => setCurrentTeamMember({ ...currentTeamMember, image: e.target.value })}
                            placeholder="https://placehold.co/400x400.png"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="tm-hint">ছবির Hint (for AI)</Label>
                        <Input
                            id="tm-hint"
                            value={currentTeamMember.hint || ''}
                            onChange={(e) => setCurrentTeamMember({ ...currentTeamMember, hint: e.target.value })}
                            placeholder="e.g. man portrait"
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">{isEditingTeamMember ? 'সংরক্ষণ করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeTeamMemberForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

        {/* Testimonial Form Dialog */}
        <Dialog open={isTestimonialFormOpen} onOpenChange={setIsTestimonialFormOpen}>
            <DialogContent className="max-w-lg w-full flex flex-col max-h-[90vh]">
                <form onSubmit={handleTestimonialFormSubmit} className="flex flex-col flex-grow min-h-0">
                    <DialogHeader className="flex-shrink-0">
                        <DialogTitle>{isEditingTestimonial ? 'প্রশংসাপত্র সম্পাদনা করুন' : 'নতুন প্রশংসাপত্র যোগ করুন'}</DialogTitle>
                        <DialogDescription>
                            এখানে শিক্ষার্থীর নাম, ভূমিকা, ছবি এবং মতামত যোগ বা পরিবর্তন করুন।
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="flex-grow my-4 pr-6 -mr-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="testim-name">নাম</Label>
                                <Input
                                    id="testim-name"
                                    value={currentTestimonial.name || ''}
                                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="testim-role">ভূমিকা</Label>
                                <Input
                                    id="testim-role"
                                    value={currentTestimonial.role || ''}
                                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, role: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="testim-image">ছবির URL</Label>
                                <Input
                                    id="testim-image"
                                    value={currentTestimonial.image || ''}
                                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, image: e.target.value })}
                                    placeholder="https://placehold.co/400x400.png"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="testim-image-hint">ছবির Hint (for AI)</Label>
                                <Input
                                    id="testim-image-hint"
                                    value={currentTestimonial.imageHint || ''}
                                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, imageHint: e.target.value })}
                                    placeholder="e.g., male student"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="testim-testimonial">প্রশংসাপত্র</Label>
                                <Textarea
                                    id="testim-testimonial"
                                    value={currentTestimonial.testimonial || ''}
                                    onChange={(e) => setCurrentTestimonial({ ...currentTestimonial, testimonial: e.target.value })}
                                    rows={4}
                                    required
                                />
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="flex-shrink-0 pt-4">
                        <Button type="submit">{isEditingTestimonial ? 'সংরক্ষণ করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeTestimonialForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>

        {/* News Form Dialog */}
        <Dialog open={isNewsFormOpen} onOpenChange={setIsNewsFormOpen}>
            <DialogContent className="max-w-3xl w-full flex flex-col max-h-[90vh]">
                 <form onSubmit={handleNewsFormSubmit} className="flex flex-col flex-grow min-h-0">
                    <DialogHeader className="flex-shrink-0">
                        <DialogTitle>{isEditingNews ? 'সংবাদ সম্পাদনা করুন' : 'নতুন সংবাদ যোগ করুন'}</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="flex-grow my-4 pr-6 -mr-6">
                        <div className="space-y-4">
                             <div className="space-y-2">
                                <Label htmlFor="news-title">শিরোনাম</Label>
                                <Input id="news-title" value={currentNews.title || ''} onChange={(e) => setCurrentNews({ ...currentNews, title: e.target.value })} required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="news-category">ক্যাটাগরি</Label>
                                <Input id="news-category" value={currentNews.category || ''} onChange={(e) => setCurrentNews({ ...currentNews, category: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="news-date">তারিখ</Label>
                                <Input type="date" id="news-date" value={currentNews.date || ''} onChange={(e) => setCurrentNews({ ...currentNews, date: e.target.value })} required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="news-image">ছবির URL</Label>
                                <Input id="news-image" value={currentNews.image || ''} onChange={(e) => setCurrentNews({ ...currentNews, image: e.target.value })} required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="news-image-hint">ছবির Hint</Label>
                                <Input id="news-image-hint" value={currentNews.imageHint || ''} onChange={(e) => setCurrentNews({ ...currentNews, imageHint: e.target.value })} />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="news-description">সংক্ষিপ্ত বিবরণ</Label>
                                <Textarea id="news-description" value={currentNews.description || ''} onChange={(e) => setCurrentNews({ ...currentNews, description: e.target.value })} required />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="news-content">বিস্তারিত কন্টেন্ট</Label>
                                <Textarea id="news-content" rows={10} value={currentNews.content || ''} onChange={(e) => setCurrentNews({ ...currentNews, content: e.target.value })} required />
                            </div>
                        </div>
                    </ScrollArea>
                    <DialogFooter className="flex-shrink-0 pt-4">
                        <Button type="submit">{isEditingNews ? 'আপডেট করুন' : 'যোগ করুন'}</Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary" onClick={closeNewsForm}>বাতিল</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
  );
}

export default useAuth(AdminPage);
