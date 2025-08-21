
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Library, Users, Award, Calendar, Target, Download, DollarSign, Laptop, Archive } from "lucide-react";

const keyPledges = [
  {
    icon: DollarSign,
    title: "গবেষণা তহবিল ও স্কলারশিপ",
    description: "বিভাগভিত্তিক গবেষণা তহবিল এবং আন্তর্জাতিক স্কলারশিপের জন্য ‘রিসার্চ হেল্প ডেস্ক’ চালু করব।"
  },
  {
    icon: BookOpen,
    title: "শিক্ষার্থীদের নিজস্ব জার্নাল",
    description: "ডাকসুর উদ্যোগে একটি 'স্টুডেন্ট জার্নাল অব ঢাকা ইউনিভার্সিটি (SJDU)' প্রকাশ করব, যেখানে শিক্ষার্থীরা তাদের গবেষণা সহজে প্রকাশ করতে পারবে।"
  },
  {
    icon: Archive,
    title: "ডিজিটাল আর্কাইভ ও ওপেন অ্যাকসেস",
    description: "প্রতিটি বিভাগের গবেষণা-প্রবন্ধ ও থিসিসের জন্য ডিজিটাল আর্কাইভ তৈরি এবং আন্তর্জাতিক জার্নালে বিনামূল্যে অ্যাক্সেসের ব্যবস্থা করব।"
  },
  {
    icon: Laptop,
    title: "প্রশিক্ষণ ও কর্মশালা",
    description: "একাডেমিক রাইটিং, গবেষণা পদ্ধতি এবং SPSS, R, EndNote, Latex এর মতো সফটওয়্যারের উপর নিয়মিত বিনামূল্যে কর্মশালা আয়োজন করব।"
  },
  {
    icon: Users,
    title: "গবেষণায় স্বচ্ছতা ও অংশগ্রহণ",
    description: "প্রতিটি উদ্যোগ শিক্ষার্থীদের পরামর্শ ও অংশগ্রহণের মাধ্যমে গড়ে তুলব। শিক্ষার্থীরাই হবে গবেষণা ও প্রকাশনার মূল চালিকা শক্তি।"
  }
];

export default function ManifestoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">আমার অঙ্গীকার: একটি গবেষণা-উদ্যমী ডাকসু</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
             প্রিয় সহপাঠীরা, আমরা সবাই জানি—জ্ঞানচর্চা, গবেষণা আর প্রকাশনা ছাড়া প্রকৃত উচ্চশিক্ষার অগ্রগতি সম্ভব নয়। কিন্তু আমাদের অনেক সম্ভাবনাময় গবেষণা কেবল সুযোগ ও প্ল্যাটফর্মের অভাবে থেমে যায়। আমি আপনাদের জন্য একটি কার্যকর এবং ছাত্রবান্ধব পরিবেশ তৈরি করতে কাজ করে যাব। এখানে আমার প্রতিশ্রুতির বিস্তারিত তুলে ধরলাম।
          </p>
           <Button variant="accent" size="lg" className="mt-8 font-headline text-lg">
                <Download className="mr-2 h-5 w-5" />
                সম্পূর্ণ ইশতেহার ডাউনলোড করুন
            </Button>
        </header>

        <main className="mt-16 space-y-16">
          <section id="pledges">
            <Card className="shadow-lg bg-card">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl">আমার প্রধান অঙ্গীকারসমূহ</CardTitle>
                <CardDescription className="font-body">আমার প্রধান প্রতিশ্রুতিগুলো, যা শিক্ষার্থীদের জীবনমান উন্নয়নে সরাসরি ভূমিকা রাখবে।</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyPledges.map((pledge) => (
                  <div key={pledge.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                    <div className="bg-primary/20 p-4 rounded-full mb-4">
                      <pledge.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-headline text-xl font-bold text-foreground">{pledge.title}</h3>
                    <p className="font-body text-muted-foreground mt-2">{pledge.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section id="detailed-plan">
             <div className="text-center max-w-4xl mx-auto">
                <Target className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">আমার বিস্তারিত পরিকল্পনা</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                    প্রতিটি অঙ্গীকারের পেছনে আমার সুনির্দিষ্ট ও বাস্তবায়নযোগ্য পরিকল্পনা রয়েছে। আমি শুধু স্বপ্ন দেখাই না, স্বপ্ন বাস্তবায়নের পথও তৈরি করি।
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline">গবেষণা তহবিল ও প্রকাশনা</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p><strong>রিসার্চ হেল্প ডেস্ক:</strong> আন্তর্জাতিক গবেষণা স্কলারশিপের তথ্য ও আবেদন সহায়তার জন্য একটি বিশেষ ডেস্ক চালু করব।</p>
                        <p><strong>স্টুডেন্ট জার্নাল (SJDU):</strong> ডাকসুর উদ্যোগে শিক্ষার্থীদের গবেষণা প্রবন্ধ প্রকাশের জন্য একটি মানসম্মত জার্নাল প্রকাশ করব।</p>
                        <p><strong>সেমিনার ও কনফারেন্স:</strong> শিক্ষার্থীদের গবেষণা উপস্থাপনের জন্য নিয়মিত সেমিনার, কনফারেন্স ও পোস্টার প্রেজেন্টেশনের আয়োজন করব।</p>
                    </CardContent>
                </Card>
                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রশিক্ষণ ও ডিজিটাল রিসোর্স</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p><strong>ডিজিটাল আর্কাইভ:</strong> সকল বিভাগের গবেষণা-প্রবন্ধ ও থিসিসের জন্য একটি ডিজিটাল আর্কাইভ তৈরি করব, যা সবার জন্য উন্মুক্ত থাকবে।</p>
                        <p><strong>সফটওয়্যার ট্রেনিং:</strong> SPSS, R, EndNote, Latex-এর মতো গুরুত্বপূর্ণ সফটওয়্যারের উপর বিনামূল্যে কর্মশালার আয়োজন করব।</p>
                        <p><strong>একাডেমিক রাইটিং:</strong> গবেষণা পদ্ধতি ও একাডেমিক রাইটিং-এর উপর নিয়মিত প্রশিক্ষণ কর্মশালা পরিচালনা করব।</p>
                    </CardContent>
                </Card>
            </div>
          </section>

          <section id="timeline">
             <div className="text-center max-w-4xl mx-auto">
                <Calendar className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">বাস্তবায়নের সময়সীমা</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                    আমি একটি নির্দিষ্ট সময়সীমার মধ্যে আমার প্রতিশ্রুতিগুলো বাস্তবায়ন করতে অঙ্গীকারবদ্ধ।
                </p>
            </div>
            <div className="mt-12 space-y-8">
                <Card className="shadow-md bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রথম ৬ মাস</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p> • ‘রিসার্চ হেল্প ডেস্ক’ চালু এবং বিভাগভিত্তিক গবেষণা তহবিলের জন্য আবেদন গ্রহণ শুরু করব।</p>
                        <p> • ডিজিটাল আর্কাইভ তৈরির কাজ শুরু এবং প্রাথমিক তথ্য সংযোজন করব।</p>
                        <p> • প্রথম একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং কর্মশালার আয়োজন করব।</p>
                    </CardContent>
                </Card>
                <Card className="shadow-md bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রথম বছর</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                       <p> • 'স্টুডেন্ট জার্নাল অব ঢাকা ইউনিভার্সিটি (SJDU)'-এর প্রথম সংখ্যা প্রকাশ করব।</p>
                       <p> • অন্তত দুটি গবেষণাভিত্তিক কনফারেন্স ও পোস্টার প্রেজেন্টেশন ইভেন্টের আয়োজন করব।</p>
                       <p> • আন্তর্জাতিক জার্নালে বিনামূল্যে অ্যাকসেসের জন্য অন্তত একটি চুক্তি স্বাক্ষর করব।</p>
                    </CardContent>
                </Card>
            </div>
          </section>
          
          <section id="conclusion" className="text-center max-w-4xl mx-auto border-t pt-12">
            <h2 className="font-headline text-3xl font-bold text-foreground">আপনার কণ্ঠস্বরই হবে আমার পরিবর্তনের শক্তি</h2>
            <p className="font-body text-lg mt-4 text-muted-foreground">
                এই ইশতেহার আমাদের সম্মিলিত স্বপ্নের দলিল। আপনাদের সমর্থন ও বিশ্বাসই আমার পথচলার মূল শক্তি। আসুন, আমরা সবাই মিলে একটি জ্ঞানভিত্তিক, প্রগতিশীল এবং উন্নত ঢাকা বিশ্ববিদ্যালয় গড়ে তুলি।
            </p>
            <p className="mt-6 font-headline text-xl text-primary font-semibold">
                আপনার মূল্যবান ভোটটি দিয়ে আমার এই যাত্রায় সঙ্গী হোন।
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

    