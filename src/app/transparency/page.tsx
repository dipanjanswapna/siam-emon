
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, FileText, BarChart, Users, CheckCircle, Clock } from "lucide-react";
import FinancialSummaryForm from "@/components/transparency/financial-summary-form";
import Link from "next/link";

const manifestoPledges = [
  {
    title: "গবেষণায় সহযোগিতা",
    status: "কাজ চলছে",
    statusColor: "bg-yellow-500",
    icon: Clock,
    updates: [
      "কেন্দ্রীয় ডাটাবেস তৈরির কাজ শুরু হয়েছে।",
      "প্রথম মতবিনিময় সভার তারিখ নির্ধারিত হয়েছে।"
    ]
  },
  {
    title: "প্রকাশনা সহজীকরণ",
    status: "পরিকল্পনাধীন",
    statusColor: "bg-blue-500",
    icon: CheckCircle,
    updates: [
      "বিশ্ববিদ্যালয়ের নিজস্ব প্রকাশনা প্ল্যাটফর্মের জন্য খসড়া প্রস্তাবনা তৈরি।",
    ]
  },
  {
    title: "ডিজিটাল লাইব্রেরি",
    status: "কাজ চলছে",
    statusColor: "bg-yellow-500",
    icon: Clock,
    updates: [
      "ডিজিটাল লাইব্রেরি প্রকল্পের প্রাথমিক পর্যায় শুরু হয়েছে।",
      "আন্তর্জাতিক রিসোর্স এক্সেসের জন্য আলোচনা চলছে।"
    ]
  },
    {
    title: "ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন",
    status: "সম্পন্ন হয়েছে",
    statusColor: "bg-green-500",
    icon: CheckCircle,
    updates: [
      "ছাত্র-শিক্ষকদের মধ্যে প্রথম মতবিনিময় সভা সফলভাবে অনুষ্ঠিত হয়েছে।",
      "যোগাযোগ সহজ করার জন্য একটি অনলাইন ফোরাম চালু করা হয়েছে।"
    ]
  },
];


export default function TransparencyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto">
          <Scale className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">স্বচ্ছতা: আমাদের প্রতিশ্রুতি, আপনার বিশ্বাস</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            সিয়াম ফেরদৌস ইমন বিশ্বাস করেন যে, নেতৃত্ব জনগণের আস্থা ও বিশ্বাসের ওপর প্রতিষ্ঠিত। আর এই আস্থা অর্জনের মূল ভিত্তি হলো সম্পূর্ণ স্বচ্ছতা ও জবাবদিহিতা। এই পেজটি তাই শুধু একটি ওয়েবসাইট সেকশন নয়, এটি আমাদের অঙ্গীকার যে আমরা প্রতিটি পদক্ষেপে জনগণের কাছে দায়বদ্ধ থাকব।
          </p>
        </header>

        <main className="mt-16 space-y-16">
          
          {/* Financial Transparency */}
          <section id="financial-transparency">
            <div className="text-center max-w-4xl mx-auto">
                <BarChart className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">আর্থিক স্বচ্ছতা</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                  আমাদের নির্বাচনী প্রচারণার জন্য প্রতিটি অর্থ কোথা থেকে আসছে এবং কোথায় ব্যয় হচ্ছে, তার একটি বিস্তারিত ও নিয়মিত হালনাগাদকৃত তালিকা এখানে প্রকাশ করা হবে।
                </p>
            </div>
             <div className="mt-12 grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="font-headline">প্রার্থীর আর্থিক সম্পদের AI সারসংক্ষেপ</CardTitle>
                            <CardDescription className="font-body">যেকোনো প্রার্থীর ঘোষিত আর্থিক সম্পদের একটি সহজ সারসংক্ষেপ পেতে আমাদের AI-চালিত টুল ব্যবহার করুন। নীচে প্রকাশের সম্পূর্ণ পাঠ্যটি আটকান।</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FinancialSummaryForm />
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card className="shadow-lg h-full bg-primary/5">
                        <CardHeader>
                            <CardTitle className="font-headline">ব্যয়ের বিবরণ ও ফান্ডিং উৎস</CardTitle>
                        </CardHeader>
                        <CardContent className="font-body text-muted-foreground space-y-4">
                           <p>আমাদের প্রচারণার সকল আয়-ব্যয়ের হিসাব শীঘ্রই এখানে প্রকাশ করা হবে। আমরা স্বচ্ছতায় বিশ্বাসী।</p>
                           {/* Example data - will be updated dynamically */}
                           <div className="space-y-2 text-sm">
                               <div className="flex justify-between"><span>মোট অনুদান:</span> <strong>৳ ০.০০</strong></div>
                               <div className="flex justify-between"><span>মোট ব্যয়:</span> <strong>৳ ০.০০</strong></div>
                           </div>
                           <Button disabled>বিস্তারিত দেখুন (শীঘ্রই আসছে)</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
          </section>

          {/* Manifesto Tracking */}
          <section id="manifesto-tracking">
            <div className="text-center max-w-4xl mx-auto">
                <FileText className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">প্রতিশ্রুতির বাস্তবায়ন</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                    আমাদের ইশতেহারে যে সকল প্রতিশ্রুতি দেওয়া হয়েছে, সেগুলোর বাস্তবায়ন প্রক্রিয়া এই সেকশনে অনুসরণ করুন। প্রতিটি প্রতিশ্রুতির বর্তমান অবস্থা নিয়মিত আপডেট করা হবে।
                </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {manifestoPledges.map((pledge, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                     <Card className="mb-4 shadow-md bg-card">
                       <AccordionTrigger className="p-6 text-left hover:no-underline">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                               <pledge.icon className={`h-8 w-8 p-1.5 rounded-full text-white ${pledge.statusColor}`} />
                               <h3 className="font-headline text-xl font-bold text-foreground">{pledge.title}</h3>
                            </div>
                            <Badge variant="secondary" className={`${pledge.statusColor} text-white`}>{pledge.status}</Badge>
                          </div>
                       </AccordionTrigger>
                       <AccordionContent className="px-6 pb-6">
                         <div className="border-l-4 border-primary pl-4 ml-6">
                            <h4 className="font-headline font-semibold text-foreground mb-2">অগ্রগতি প্রতিবেদন:</h4>
                            <ul className="list-disc list-inside font-body text-muted-foreground space-y-1">
                              {pledge.updates.map((update, i) => (
                                <li key={i}>{update}</li>
                              ))}
                            </ul>
                         </div>
                       </AccordionContent>
                     </Card>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
          
          {/* Team and Leadership */}
          <section id="team">
             <div className="text-center max-w-4xl mx-auto">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">দল ও নেতৃত্ব</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                  আমাদের নেতৃত্বকে আরও মানবিক এবং জবাবদিহিমূলক করতে সিয়াম ইমন এবং তার দলের সদস্যদের সংক্ষিপ্ত পরিচিতি, তাদের ভূমিকা এবং যোগাযোগের তথ্য এখানে থাকবে।
                </p>
                <Button asChild className="mt-6" size="lg">
                    <Link href="/about#team">আমাদের টিম দেখুন</Link>
                </Button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
