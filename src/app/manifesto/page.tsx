
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Vote, FileText, ShieldCheck, Users, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const keyPledges = [
  {
    icon: ShieldCheck,
    title: "শোষণমুক্ত সমাজ",
    description: "মুক্তিযুদ্ধের চেতনায় একটি শোষণ, বৈষম্যহীন, গণতান্ত্রিক ও অসাম্প্রদায়িক সমাজ ও দেশ গঠন করা।"
  },
  {
    icon: Users,
    title: "শ্রমজীবী মানুষের অধিকার",
    description: "সংসদকে শ্রমজীবী মানুষের অধিকার আদায়ের কার্যকর প্রতিষ্ঠানে পরিণত করা।"
  },
  {
    icon: MessageSquare,
    title: "নারী অধিকার ও সাম্প্রদায়িক সম্প্রীতি",
    description: "নারী বিদ্বেষী ও সাম্প্রদায়িক সকল অপশক্তির বিরুদ্ধে সোচ্চার থাকা এবং প্রতিরোধ গড়ে তোলা।"
  },
];


export default function ManifestoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">আমাদের অঙ্গীকার</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
             ডাঃ মনীষা চক্রবর্ত্তী এবং বাংলাদেশের সমাজতান্ত্রিক দল (বাসদ) জনগণের অধিকার প্রতিষ্ঠার আন্দোলনের অংশ হিসেবে আসন্ন নির্বাচনকে দেখছে। আমাদের লক্ষ্য একটি শোষণমুক্ত ও বৈষম্যহীন বাংলাদেশ গড়া।
          </p>
           <Button asChild variant="accent" size="lg" className="mt-8 font-headline text-lg">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    সম্পূর্ণ ইশতেহার ডাউনলোড করুন
                </Link>
            </Button>
        </header>

        <main className="mt-16 space-y-16">
          
          <section id="pledges">
            <Card className="shadow-lg bg-card">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl">মূল প্রতিশ্রুতিসমূহ</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyPledges.map((pledge) => (
                  <Card key={pledge.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-background hover:bg-secondary transition-colors shadow-sm hover:shadow-md">
                    <div className="bg-primary/20 p-4 rounded-full mb-4">
                      <pledge.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-bold text-foreground">{pledge.title}</h3>
                    <p className="font-body text-muted-foreground mt-2 flex-grow">{pledge.description}</p>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </section>

           <section id="maatir-bank" className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image src="https://i.postimg.cc/Pq2Y5YVp/news-3.jpg" alt="মাটির ব্যাংক" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="clay piggy bank" />
                </div>
                <div>
                     <h2 className="font-headline text-4xl font-bold text-foreground">ভোট দিন, ভোটের খরচ জোগান</h2>
                     <p className="font-body text-lg mt-4 text-muted-foreground">
                        সাধারণ মানুষের মধ্যে একটি ধারণা রয়েছে নির্বাচন মানেই টাকার খেলা। বাসদ এই রাজনীতির সম্পূর্ণ বিপরীত অবস্থানে রয়েছে। জনগণের স্বার্থে যদি নির্বাচন হয়, তবে সেই নির্বাচনের খরচও জনগণই বহন করবে। তাই আমাদের নির্বাচনী শ্লোগান "ভোট দিন, ভোটের খরচ যোগান, জনগণের পক্ষের সৎ, যোগ্য ও নীতিবান প্রার্থীকে নির্বাচিত করুন।”
                     </p>
                     <p className="font-body text-lg mt-2 text-muted-foreground">
                        ইতিমধ্যে বরিশালের বিভিন্ন রিকশা গ্যারেজ, হোটেল ও বাসাবাড়িতে নির্বাচনী অর্থ সংগ্রহের জন্য শতাধিক মাটির ব্যাংক সরবরাহ করা হয়েছে। গণমানুষের অর্থায়নে নির্বাচন করছে বাসদ।
                     </p>
                </div>
           </section>
          
          <section id="conclusion" className="text-center max-w-4xl mx-auto border-t pt-12">
            <Vote className="mx-auto h-16 w-16 text-primary" />
            <h2 className="font-headline text-3xl font-bold text-foreground mt-6">
              আগামী ১২ই ফেব্রুয়ারী, মই মার্কায় ভোট দিন
            </h2>
            <p className="mt-8 font-body text-lg text-muted-foreground">
                আপনার মূল্যবান ভোটটি দিয়ে আমাদের এই যাত্রায় সঙ্গী হোন। আসুন, আমরা সবাই মিলে একটি শোষণমুক্ত, বৈষম্যহীন, গণতান্ত্রিক ও অসাম্প্রদায়িক বাংলাদেশ গড়ে তুলি।
            </p>
          </section>

          <section id="cta-support" className="text-center rounded-lg p-12 bg-gradient-to-r from-primary to-destructive text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold">
                    আমাদের ইশতেহার বাস্তবায়নে আপনার সহযোগিতা প্রয়োজন
                </h2>
                <p className="font-body text-lg mt-4 max-w-3xl mx-auto">
                    এই পরিকল্পনাগুলো বাস্তবায়নের জন্য আমাদের দরকার আপনাদের ভোট, সমর্থন এবং সক্রিয় অংশগ্রহণ।
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-200 font-headline text-lg">
                        <Link href="/#pre-vote">তহবিলে সহযোগিতা করুন</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-headline text-lg">
                        <Link href="/#feedback-form">প্রশ্ন ও মতামত দিন</Link>
                    </Button>
                </div>
            </section>

        </main>
      </div>
    </div>
  );
}
