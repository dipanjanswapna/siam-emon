
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Handshake, Mail, Phone, Users, MessageSquare, Facebook, Instagram, Youtube, Edit } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

export default function GetInvolvedPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Handshake className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">যুক্ত হোন: আমাদের সাথে যোগ দিন, পরিবর্তনের অংশ হন</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমরা বিশ্বাস করি যে একটি উজ্জ্বল ভবিষ্যৎ কেবল একজন বা কয়েকজনের দ্বারা তৈরি হয় না, বরং এটি সবার সম্মিলিত প্রচেষ্টা ও অংশগ্রহণের ফল। সিয়াম ফেরদৌস ইমন-এর এই পথচলা কোনো একক যাত্রা নয়, এটি ঢাকা বিশ্ববিদ্যালয়ের প্রতিটি শিক্ষার্থীর আকাঙ্ক্ষার প্রতিফলন। 'যুক্ত হোন' পেজটি আপনাদেরকে আমাদের এই পরিবর্তনের যাত্রায় সরাসরি অংশ নেওয়ার জন্য একটি সুযোগ করে দেবে।
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Volunteer Form */}
          <div className="order-2 lg:order-1">
            <Card className="shadow-lg bg-primary/5">
              <CardHeader>
                <CardTitle className="font-headline flex items-center gap-3"><Users className="w-8 h-8 text-primary"/> স্বেচ্ছাসেবক হিসেবে নিবন্ধন করুন</CardTitle>
                <CardDescription className="font-body">আপনার আগ্রহ এবং দক্ষতা অনুযায়ী বিভিন্ন কাজে অংশগ্রহণের সুযোগ রয়েছে। আপনার সামান্য সময় ও প্রচেষ্টাও একটি বড় পরিবর্তন আনতে পারে।</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6 font-body">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">আপনার নাম</Label>
                      <Input id="name" placeholder="আপনার সম্পূর্ণ নাম" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">যোগাযোগ নম্বর</Label>
                      <Input id="phone" placeholder="আপনার মোবাইল নম্বর" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label className="mb-3 block">কাজের ক্ষেত্র (আপনি কোন ধরনের কাজে আগ্রহী?)</Label>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                           <Checkbox id="social-media"/>
                           <Label htmlFor="social-media" className="font-normal">সামাজিক মাধ্যম ব্যবস্থাপনা</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                           <Checkbox id="campus-campaign"/>
                           <Label htmlFor="campus-campaign" className="font-normal">ক্যাম্পাস প্রচারণা</Label>
                        </div>
                         <div className="flex items-center space-x-2">
                           <Checkbox id="event-management"/>
                           <Label htmlFor="event-management" className="font-normal">ইভেন্ট ম্যানেজমেন্ট</Label>
                        </div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full font-headline text-lg">নিবন্ধন করুন</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact and Socials */}
          <div className="space-y-12 order-1 lg:order-2">
             <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3"><Mail className="w-8 h-8 text-primary"/> সরাসরি যোগাযোগ</CardTitle>
                    <CardDescription className="font-body">আমাদের টিমের সাথে সরাসরি যোগাযোগের জন্য একটি ইমেইল ঠিকানা বা ফোন নম্বর দেওয়া হলো।</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Phone className="w-5 h-5 text-muted-foreground" />
                        <span className="font-body text-foreground">(১২৩) ৪৫৬-৭৮৯০</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="w-5 h-5 text-muted-foreground" />
                        <span className="font-body text-foreground">contact@siamfermousemon.com</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                     <CardTitle className="font-headline flex items-center gap-3"><MessageSquare className="w-8 h-8 text-primary"/> আমাদের অনুসরণ করুন</CardTitle>
                     <CardDescription className="font-body">আমাদের ফেসবুক, টুইটার এবং ইনস্টাগ্রাম পেজের লিংক এখানে দেওয়া হবে। ফলো করে আপনারা আমাদের সব আপডেট এবং কার্যক্রম সম্পর্কে জানতে পারবেন।</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center gap-6">
                    <Link href="#" className="text-primary hover:text-accent transition-colors">
                        <Facebook className="h-10 w-10" />
                        <span className="sr-only">ফেসবুক</span>
                    </Link>
                    <Link href="#" className="text-primary hover:text-accent transition-colors">
                        <Youtube className="h-10 w-10" />
                        <span className="sr-only">ইউটিউব</span>
                    </Link>
                    <Link href="#" className="text-primary hover:text-accent transition-colors">
                        <Instagram className="h-10 w-10" />
                        <span className="sr-only">ইনস্টাগ্রাম</span>
                    </Link>
                </CardContent>
            </Card>

             <Card className="shadow-lg">
                <CardHeader>
                     <CardTitle className="font-headline flex items-center gap-3"><Edit className="w-8 h-8 text-primary"/> আপনার মতামত জানান</CardTitle>
                     <CardDescription className="font-body">আপনার মূল্যবান মতামত, পরামর্শ বা প্রশ্ন সরাসরি আমাদের কাছে পাঠান।</CardDescription>
                </CardHeader>
                <CardContent>
                   <Button asChild className="w-full" size="lg">
                     <Link href="/#feedback-form">মতামত ফর্ম</Link>
                   </Button>
                </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
