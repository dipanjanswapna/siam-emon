
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Handshake, Mail, MapPin, Phone, PiggyBank, FileText } from "lucide-react";

export default function GetInvolvedPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Handshake className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আন্দোলনে যোগ দিন</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আপনার সমর্থন আমাদের সাফল্যের জন্য অত্যাবশ্যক। আপনি আপনার সময় স্বেচ্ছাসেবক করতে পারেন, একটি অনুদান দিতে পারেন, বা কেবল শব্দটি ছড়িয়ে দিতে পারেন, প্রতিটি পদক্ষেপ একটি পার্থক্য তৈরি করে।
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-headline text-4xl font-bold mb-8 text-foreground">যোগাযোগের তথ্য</h2>
            <div className="grid md:grid-cols-1 gap-8">
              <Card className="shadow-lg">
                <CardHeader className="flex-row items-center gap-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="font-headline">ক্যাম্পেইন সদর দপ্তর</CardTitle>
                    <CardDescription className="font-body">১২৩ ডেমোক্রেসি লেন, ক্যাপিটল সিটি</CardDescription>
                  </div>
                </CardHeader>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="flex-row items-center gap-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="font-headline">আমাদের কল করুন</CardTitle>
                    <CardDescription className="font-body">(১২৩) ৪৫৬-৭৮৯০</CardDescription>
                  </div>
                </CardHeader>
              </Card>
                <Card className="shadow-lg">
                <CardHeader className="flex-row items-center gap-4">
                  <Mail className="w-8 h-8 text-primary" />
                  <div>
                    <CardTitle className="font-headline">আমাদের ইমেইল করুন</CardTitle>
                    <CardDescription className="font-body">contact@siamfermousemon.com</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Donation & Voter Reg */}
          <div className="space-y-12">
             <Card className="shadow-lg bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3"><PiggyBank className="w-8 h-8 text-primary"/> প্রচারাভিযানে অবদান রাখুন</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-body text-muted-foreground mb-4">আপনার উদার অনুদান আমাদের প্রচারাভিযানকে শক্তিশালী করে, আমাদের আরও ভোটারের কাছে পৌঁছাতে এবং একটি উন্নত বাংলার জন্য আমাদের দৃষ্টিভঙ্গি ভাগ করে নিতে সহায়তা করে। প্রতিটি অবদান, বড় বা ছোট, একটি বাস্তব প্রভাব ফেলে।</p>
                    <Button variant="accent" size="lg" className="w-full font-headline text-lg">এখনই অনুদান দিন</Button>
                </CardContent>
            </Card>

            <Card id="register-to-vote" className="shadow-lg bg-primary/5">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center gap-3"><FileText className="w-8 h-8 text-primary"/> ভোটার হিসেবে নিবন্ধন করুন</CardTitle>
                    <CardDescription className="font-body">আপনার কণ্ঠস্বর শোনান! ভোট দেওয়া আপনার অধিকার এবং আপনার শক্তি।</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 font-body">
                   <div>
                     <h4 className="font-bold text-foreground">কিভাবে নিবন্ধন করবেন:</h4>
                     <ol className="list-decimal list-inside text-muted-foreground space-y-1 mt-2">
                        <li>আপনার ভোট দেওয়ার যোগ্যতা পরীক্ষা করুন।</li>
                        <li>অনলাইনে বা স্থানীয় নির্বাচন অফিসে ভোটার নিবন্ধন ফর্ম পূরণ করুন।</li>
                        <li>প্রয়োজনীয় শনাক্তকরণ নথি সহ ফর্মটি জমা দিন।</li>
                        <li>নির্বাচনের দিনের আগে আপনার নিবন্ধন স্থিতি নিশ্চিত করুন।</li>
                     </ol>
                   </div>
                   <Button asChild className="font-headline">
                     <a href="#" target="_blank" rel="noopener noreferrer">অফিসিয়াল নির্বাচন কমিশন সাইট</a>
                   </Button>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

    