
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Handshake, Mail, Phone, Users, MessageSquare, Facebook, Instagram, Youtube, Edit, MapPin } from "lucide-react";
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
            <Card className="shadow-lg bg-card">
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
                    <CardTitle className="font-headline flex items-center gap-3"><MessageSquare className="w-8 h-8 text-primary"/> সরাসরি যোগাযোগ</CardTitle>
                    <CardDescription className="font-body">আমাদের টিমের সাথে সরাসরি যোগাযোগের জন্য নিচে বিভিন্ন মাধ্যম দেওয়া হলো।</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                    {/* Phone Contact */}
                    <Card className="text-center p-6 bg-primary/5 border-primary/20 flex flex-col items-center justify-between">
                        <div className="p-4 bg-primary/20 rounded-lg">
                           <Phone className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-headline text-xl font-bold mt-4">জরুরি যোগাযোগ</h3>
                        <p className="font-body text-muted-foreground mt-2 flex-grow">যেকোনো জরুরি বিষয়ে সরাসরি ফোন করুন</p>
                        <Button asChild className="mt-4 bg-primary hover:bg-primary/90 w-full">
                          <Link href="tel:+8801623593673">এখনই কল করুন</Link>
                        </Button>
                    </Card>
                    {/* Email Contact */}
                    <Card className="text-center p-6 bg-blue-500/5 border-blue-500/20 flex flex-col items-center justify-between">
                         <div className="p-4 bg-blue-500/20 rounded-lg">
                           <Mail className="w-8 h-8 text-blue-700" />
                        </div>
                        <h3 className="font-headline text-xl font-bold mt-4">ইমেইল সাপোর্ট</h3>
                        <p className="font-body text-muted-foreground mt-2 flex-grow">বিস্তারিত জিজ্ঞাসার জন্য ইমেইল করুন</p>
                        <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700 w-full">
                           <Link href="mailto:siam.emon.52@gmail.com">ইমেইল পাঠান</Link>
                        </Button>
                    </Card>
                    {/* In-person */}
                     <Card className="text-center p-6 bg-destructive/5 border-destructive/20 flex flex-col items-center justify-between">
                         <div className="p-4 bg-destructive/20 rounded-lg">
                           <MapPin className="w-8 h-8 text-destructive" />
                        </div>
                        <h3 className="font-headline text-xl font-bold mt-4">সরাসরি দেখা</h3>
                        <p className="font-body text-muted-foreground mt-2 flex-grow">আমাদের অফিসে এসে সরাসরি কথা বলুন</p>
                        <Button asChild className="mt-4 bg-destructive hover:bg-destructive/90 w-full">
                          <Link href="https://maps.app.goo.gl/1o2paoHFcAHdyrAK9" target="_blank" rel="noopener noreferrer">ঠিকানা দেখুন</Link>
                        </Button>
                    </Card>
                    <Card className="text-center p-6 bg-secondary text-secondary-foreground flex flex-col items-center justify-between">
                         <div className="p-4 bg-foreground/10 rounded-lg">
                           <Edit className="w-8 h-8 text-foreground" />
                        </div>
                        <h3 className="font-headline text-xl font-bold mt-4">আপনার মতামত জানান</h3>
                        <p className="font-body text-muted-foreground mt-2 flex-grow">আপনার মূল্যবান মতামত, পরামর্শ বা প্রশ্ন পাঠান।</p>
                        <Button asChild variant="secondary" className="mt-4 w-full">
                           <Link href="/#feedback-form">মতামত ফর্ম</Link>
                        </Button>
                    </Card>
                </CardContent>
            </Card>

            <Card className="shadow-lg">
                <CardHeader>
                     <CardTitle className="font-headline flex items-center gap-3"><Users className="w-8 h-8 text-primary"/> আমাদের অনুসরণ করুন</CardTitle>
                     <CardDescription className="font-body">আমাদের ফেসবুক, ইউটিউব এবং ইনস্টাগ্রাম পেজ ফলো করে সব আপডেট এবং কার্যক্রম সম্পর্কে জানতে পারবেন।</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center gap-6">
                    <Link href="https://www.facebook.com/siam.emon.52" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
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

          </div>
        </div>

        <section id="campaign-office-map" className="mt-16">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl flex items-center justify-center gap-3">
                <MapPin className="w-10 h-10 text-primary"/>
                আমাদের ক্যাম্পেইন অফিস
              </CardTitle>
              <CardDescription className="font-body text-lg text-muted-foreground">সরাসরি দেখা করতে বা আমাদের কার্যক্রমে অংশ নিতে চলে আসুন।</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full rounded-lg overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.905613342377!2d90.39122391544636!3d23.75069398458925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bd552c2b3b%3A0x4e70f1178462d615!2sDhaka%20University%20Central%20Students%20Union%20(DUCSU)!5e0!3m2!1sen!2sbd!4v1724915786193!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Campaign Office Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
