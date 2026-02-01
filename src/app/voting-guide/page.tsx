
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, PersonStanding, FileCheck, XCircle, Info, Vote } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: PersonStanding,
        title: "ধাপ ১: ভোট কেন্দ্রে প্রবেশ",
        description: "আপনার বিশ্ববিদ্যালয় পরিচয়পত্র এবং ভোটার স্লিপ সঙ্গে নিয়ে নির্ধারিত ভোট কেন্দ্রে প্রবেশ করুন। কেন্দ্রের বাইরে থাকা তালিকা থেকে আপনার ভোটার নম্বর ও কক্ষ নম্বর জেনে নিন।",
        image: "https://i.postimg.cc/GtNj8Tzk/500230099-3604313253210085-5495573021943078961-n.jpg",
        imageHint: "students queue"
    },
    {
        icon: FileCheck,
        title: "ধাপ ২: পরিচয় যাচাই ও ব্যালট পেপার সংগ্রহ",
        description: "ভোট কক্ষের দায়িত্বপ্রাপ্ত পোলিং অফিসারের কাছে আপনার পরিচয়পত্র ও ভোটার স্লিপ দেখান। তিনি আপনার পরিচয় যাচাই করে আপনাকে একটি ব্যালট পেপার সরবরাহ করবেন।",
        image: "https://i.postimg.cc/3rBmGTG2/Whats-App-Image-2025-09-05-at-02-12-22-b88166e9.jpg",
        imageHint: "ballot paper"
    },
    {
        icon: CheckSquare,
        title: "ধাপ ৩: গোপন কক্ষে ভোট প্রদান",
        description: "ব্যালট পেপার নিয়ে গোপন কক্ষে প্রবেশ করুন। আপনার পছন্দের প্রার্থীদের নামের পাশে থাকা খালি ঘরে ✔ চিহ্ন দিন। গবেষণা ও প্রকাশনা সম্পাদক পদে আমাকে ভোট দিতে ব্যালট নম্বর ০৯ এর পাশে ✔ দিন।",
        image: "https://i.postimg.cc/k5bWRRN5/Whats-App-Image-2025-09-05-at-02-12-20-6fcd5737.jpg",
        imageHint: "voting symbol"
    },
    {
        icon: Vote,
        title: "ধাপ ৪: ব্যালট বাক্সে নিক্ষেপ",
        description: "ভোট দেওয়া শেষ হলে ব্যালট পেপারটি সঠিকভাবে ভাঁজ করে স্বচ্ছ ব্যালট বাক্সে ফেলুন। নিশ্চিত করুন যে আপনার ব্যালটটি বাক্সের ভেতরে পড়েছে।",
        image: "https://i.postimg.cc/Z59dXvML/Whats-App-Image-2025-09-05-at-02-12-17-efb3723a.jpg",
        imageHint: "ballot box"
    }
];

const dosAndDonts = {
    dos: [
        "পরিচয়পত্র ও ভোটার স্লিপ অবশ্যই সাথে রাখুন।",
        "শান্তিপূর্ণভাবে লাইনে দাঁড়িয়ে своей очереди অপেক্ষা করুন।",
        "ভোট দেওয়ার নিয়মাবলী ভালোভাবে পড়ে নিন।",
        "গোপন কক্ষে একা প্রবেশ করুন।",
        "সঠিকভাবে পছন্দের প্রার্থীর প্রতীকের ঘরে ✔ চিহ্ন দিন।"
    ],
    donts: [
        "ভোট কেন্দ্রে মোবাইল ফোন বা কোনো ইলেকট্রনিক ডিভাইস ব্যবহার করবেন না।",
        "ভোট কক্ষের ভেতরে ছবি তোলা বা ভিডিও করা থেকে বিরত থাকুন।",
        "ব্যালট পেপারে অপ্রয়োজনীয় কিছু লিখবেন না বা নষ্ট করবেন না।",
        "একাধিক প্রার্থীকে ভোট দেবেন না, এতে আপনার ভোট বাতিল হতে পারে।",
        "অন্য কাউকে আপনার ভোট প্রদানে প্রভাবিত করার চেষ্টা করবেন না।"
    ]
};

export default function VotingGuidePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto fade-in-up">
          <Vote className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">ভোট প্রদান নির্দেশিকা</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আপনার মূল্যবান ভোট সঠিকভাবে প্রদান করতে এই সহজ নির্দেশিকা অনুসরণ করুন।
          </p>
        </header>

        <main className="mt-16 space-y-16">
          <section id="voting-steps">
             <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '200ms' }}>
                 <h2 className="font-headline text-4xl font-bold text-foreground">ভোট দেওয়ার সহজ ধাপসমূহ</h2>
                 <p className="font-body text-muted-foreground mt-2">আপনার ভোট প্রদানের প্রক্রিয়াটি সহজ করতে নিচের ধাপগুলো অনুসরণ করুন।</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="fade-in-up" style={{ animationDelay: `${200 + index * 150}ms` }}>
                  <Card className="flex flex-col md:flex-row items-center gap-6 p-6 h-full shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-4 rounded-full">
                       <step.icon className="h-10 w-10" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                      <CardDescription className="font-body mt-2 text-md">{step.description}</CardDescription>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          <section id="dos-and-donts">
             <div className="text-center mb-12 fade-in-up" style={{ animationDelay: '400ms' }}>
                 <h2 className="font-headline text-4xl font-bold text-foreground">করণীয় ও বর্জনীয়</h2>
                 <p className="font-body text-muted-foreground mt-2">ভোট কেন্দ্রে প্রবেশের পর যা করবেন এবং যা করবেন না।</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="fade-in-up" style={{ animationDelay: '500ms' }}>
                <Card className="shadow-lg bg-primary/5 border-primary/20 h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <CheckSquare className="h-8 w-8 text-primary" />
                    <CardTitle className="font-headline text-2xl text-primary">করণীয়</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 font-body text-muted-foreground">
                      {dosAndDonts.dos.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="fade-in-up" style={{ animationDelay: '600ms' }}>
                <Card className="shadow-lg bg-destructive/5 border-destructive/20 h-full">
                   <CardHeader className="flex flex-row items-center gap-4">
                    <XCircle className="h-8 w-8 text-destructive" />
                    <CardTitle className="font-headline text-2xl text-destructive">বর্জনীয়</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 font-body text-muted-foreground">
                      {dosAndDonts.donts.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <XCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
           <section id="final-appeal" className="fade-in-up" style={{ animationDelay: '800ms' }}>
                <Card className="bg-primary/10 border-primary/20">
                     <CardContent className="p-8 text-center">
                        <Info className="mx-auto h-12 w-12 text-primary mb-4"/>
                        <h3 className="font-headline text-3xl font-bold text-foreground">আপনার ভোট মূল্যবান!</h3>
                        <p className="font-body text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
                            আপনার একটি সঠিক সিদ্ধান্ত ঢাকা বিশ্ববিদ্যালয়ের未来 নির্ধারণ করবে। আমি আপনাদের পাশে থেকে একটি গবেষণা-বান্ধব ও ছাত্র-কল্যাণমূলক ডাকসু গড়ে তুলতে চাই। আপনার মূল্যবান ভোটটি দিয়ে আমাকে সেবা করার সুযোগ দিন।
                        </p>
                    </CardContent>
                </Card>
           </section>

        </main>
      </div>
    </div>
  );
}
