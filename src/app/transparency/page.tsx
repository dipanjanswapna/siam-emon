
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, Landmark, Goal, Banknote, Building } from "lucide-react";
import FinancialSummaryForm from "@/components/transparency/financial-summary-form";
import Link from "next/link";

const manifestoPledges = [
  {
    title: "শ্রমজীবী মানুষের অধিকার আদায়",
    status: "চলমান",
    statusColor: "bg-yellow-500 hover:bg-yellow-600",
    icon: Users,
    updates: [
      "সংসদকে শ্রমজীবী মানুষের অধিকার আদায়ের প্রতিষ্ঠানে পরিণত করার লক্ষ্যে কাজ করা হচ্ছে।",
    ]
  },
  {
    title: "নারী অধিকার ও সাম্প্রদায়িক সম্প্রীতি",
    status: "চলমান",
    statusColor: "bg-yellow-500 hover:bg-yellow-600",
    icon: Users,
    updates: [
        "নারী বিদ্বেষী ও সাম্প্রদায়িক সকল অপশক্তির বিরুদ্ধে সোচ্চার থাকা এবং প্রতিরোধ গড়ে তোলার কাজ চলছে।"
    ]
  },
];


export default function TransparencyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto">
          <Scale className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">স্বচ্ছতা: আমার প্রতিশ্রুতি, আপনার বিশ্বাস</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমি বিশ্বাস করি যে, নেতৃত্ব জনগণের আস্থা ও বিশ্বাসের ওপর প্রতিষ্ঠিত। আর এই আস্থা অর্জনের মূল ভিত্তি হলো সম্পূর্ণ স্বচ্ছতা ও জবাবদিহিতা। এই পেজটি তাই শুধু একটি ওয়েবসাইট সেকশন নয়, এটি আমার অঙ্গীকার যে আমি প্রতিটি পদক্ষেপে আপনাদের কাছে দায়বদ্ধ থাকব।
          </p>
        </header>

        <main className="mt-16 space-y-12">
          
          <Card id="financial-transparency" className="shadow-lg">
            <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-4">
                  <Landmark className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline text-4xl">আর্থিক স্বচ্ছতা</CardTitle>
                </div>
                <CardDescription className="font-body text-lg mt-2">
                  আমার নির্বাচনী প্রচারণার জন্য প্রতিটি অর্থ কোথা থেকে আসছে এবং কোথায় ব্যয় হচ্ছে, তার একটি বিস্তারিত ও নিয়মিত হালনাগাদকৃত তালিকা এখানে প্রকাশ করা হবে।
                </CardDescription>
            </CardHeader>
            <CardContent>
             <div className="mt-8 grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-3">
                    <Card className="shadow-inner bg-card">
                        <CardHeader>
                            <CardTitle className="font-headline">প্রার্থীর আর্থিক সম্পদের AI সারসংক্ষেপ</CardTitle>
                            <CardDescription className="font-body">যেকোনো প্রার্থীর (আমার সহ) ঘোষিত আর্থিক সম্পদের একটি সহজ সারসংক্ষেপ পেতে এই AI-চালিত টুল ব্যবহার করুন। নীচে প্রকাশের সম্পূর্ণ পাঠ্যটি আটকান।</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <FinancialSummaryForm />
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2">
                    <Card className="shadow-inner bg-card h-full">
                        <CardHeader>
                            <CardTitle className="font-headline">নির্বাচনী তহবিলে সহযোগিতা</CardTitle>
                        </CardHeader>
                        <CardContent className="font-body text-muted-foreground space-y-4">
                           <p>গণমানুষের অর্থায়নে নির্বাচন করছে বাসদ। আপনার সহযোগিতা আমাদের লক্ষ্য পূরণে সহায়তা করবে।</p>
                           <div className="space-y-2 text-sm">
                               <div className="flex justify-between items-center p-2 rounded-md bg-background"><span><Banknote className="inline-block mr-2"/> বিকাশ:</span> <span>01723709155</span></div>
                               <div className="flex justify-between items-center p-2 rounded-md bg-background"><span><Building className="inline-block mr-2"/> নগদ:</span> <strong>01684509990</strong></div>
                           </div>
                           <Button asChild>
                            <Link href="/#pre-vote">আরও দেখুন</Link>
                           </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
            </CardContent>
          </Card>

          <Card id="manifesto-tracking" className="shadow-lg">
             <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-4">
                  <Goal className="h-10 w-10 text-primary" />
                  <CardTitle className="font-headline text-4xl">আমার প্রতিশ্রুতির বাস্তবায়ন</CardTitle>
                </div>
                <CardDescription className="font-body text-lg mt-2">
                    আমার ইশতেহারে যে সকল প্রতিশ্রুতি আমি দিয়েছি, সেগুলোর বাস্তবায়ন প্রক্রিয়া এই সেকশনে অনুসরণ করুন। প্রতিটি প্রতিশ্রুতির বর্তমান অবস্থা আমি নিয়মিত আপডেট করব।
                </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {manifestoPledges.map((pledge, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
                     <Card className="mb-4 shadow-md bg-card hover:bg-secondary">
                       <AccordionTrigger className="p-6 text-left hover:no-underline">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                               <div className={`flex-shrink-0 p-1.5 rounded-full text-white ${pledge.statusColor}`}>
                                  <pledge.icon className="h-6 w-6" />
                               </div>
                               <h3 className="font-headline text-xl font-bold text-foreground text-left">{pledge.title}</h3>
                            </div>
                            <Badge className={`${pledge.statusColor} text-white`}>{pledge.status}</Badge>
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
            </CardContent>
          </Card>
          
          <Card id="team" className="shadow-lg">
            <CardHeader className="text-center">
                <div className="flex justify-center items-center gap-4">
                    <Users className="h-10 w-10 text-primary" />
                    <CardTitle className="font-headline text-4xl">আমার দল ও নেতৃত্ব</CardTitle>
                </div>
                <CardDescription className="font-body text-lg mt-2">
                  আমার নেতৃত্বকে আরও মানবিক এবং জবাবদিহিমূলক করতে আমি এবং আমার দলের সদস্যদের সংক্ষিপ্ত পরিচিতি, তাদের ভূমিকা এবং যোগাযোগের তথ্য এখানে থাকবে।
                </CardDescription>
                <div className="pt-4">
                  <Button asChild size="lg">
                      <Link href="/about#team">আমার টিমের সাথে পরিচিত হোন</Link>
                  </Button>
                </div>
            </CardHeader>
          </Card>

        </main>
      </div>
    </div>
  );
}
