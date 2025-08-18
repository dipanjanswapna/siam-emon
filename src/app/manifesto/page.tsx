
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Library, Users, Award, Calendar, Target, Download } from "lucide-react";

const keyPledges = [
  {
    icon: CheckCircle,
    title: "গবেষণায় সহযোগিতা",
    description: "শিক্ষার্থীদের গবেষণামূলক কাজে সার্বিক সহায়তা, আন্তর্জাতিক মানের সেমিনার ও ওয়ার্কশপের আয়োজন এবং প্রয়োজনীয় ফান্ডিং নিশ্চিত করা।"
  },
  {
    icon: BookOpen,
    title: "প্রকাশনা সহজীকরণ",
    description: "আন্তর্জাতিক জার্নালে লেখা প্রকাশে সহায়তা এবং বিশ্ববিদ্যালয়ের নিজস্ব একটি আধুনিক প্রকাশনা প্ল্যাটফর্ম তৈরি করা।"
  },
  {
    icon: Library,
    title: "ডিজিটাল লাইব্রেরি",
    description: "একটি উন্নত, সহজলভ্য এবং আধুনিক ডিজিটাল লাইব্রেরি স্থাপন করা, যেখানে দেশ-বিদেশের সেরা রিসোর্স পাওয়া যাবে।"
  },
  {
    icon: Users,
    title: "ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন",
    description: "নিয়মিত মতবিনিময় সভা এবং কার্যকর যোগাযোগ ব্যবস্থা গড়ে তুলে শিক্ষক ও শিক্ষার্থীদের মধ্যে একটি আস্থার সম্পর্ক তৈরি করা।"
  },
  {
    icon: Award,
    title: "সামাজিক ও সাংস্কৃতিক কর্মকাণ্ড",
    description: "বিতর্ক, পাবলিক স্পিকিং, এবং অন্যান্য সামাজিক ও সাংস্কৃতিক অনুষ্ঠানের আয়োজন করে শিক্ষার্থীদের প্রতিভা বিকাশের সুযোগ তৈরি করা।"
  }
];

export default function ManifestoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">ইশতেহার: আমাদের অঙ্গীকার, আমাদের পথ</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            ঢাকা বিশ্ববিদ্যালয়ের কেন্দ্রীয় ছাত্র সংসদ (ডাকসু) নির্বাচনে গবেষণা ও প্রকাশনা সম্পাদক পদে সিয়াম ফেরদৌস ইমন-এর ইশতেহার পেজে স্বাগতম। এটি আমাদের অভিজ্ঞতা ও বাস্তবসম্মত চিন্তাভাবনার প্রতিফলন, কোনো গতানুগতিক প্রতিশ্রুতি নয়।
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
                <CardTitle className="font-headline text-4xl">প্রধান অঙ্গীকারসমূহ</CardTitle>
                <CardDescription className="font-body">আমাদের প্রধান প্রতিশ্রুতিগুলো, যা শিক্ষার্থীদের জীবনমান উন্নয়নে সরাসরি ভূমিকা রাখবে।</CardDescription>
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
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">বিস্তারিত পরিকল্পনা</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                    প্রতিটি অঙ্গীকারের পেছনে আমাদের সুনির্দিষ্ট ও বাস্তবায়নযোগ্য পরিকল্পনা রয়েছে। আমরা শুধু স্বপ্ন দেখাই না, স্বপ্ন বাস্তবায়নের পথও তৈরি করি।
                </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline">গবেষণার সুযোগ বৃদ্ধি</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p><strong>ল্যাব সুবিধা:</strong> সকল বিভাগের গবেষণাগার আধুনিকায়ন এবং ২৪/৭ খোলা রাখার উদ্যোগ গ্রহণ।</p>
                        <p><strong>ফান্ডিং:</strong> সরকারি ও বেসরকারি উদ্যোগে গবেষণা অনুদান বৃদ্ধি এবং আবেদন প্রক্রিয়া সহজীকরণ।</p>
                        <p><strong>মেন্টরশিপ:</strong> সিনিয়র গবেষক ও শিক্ষকদের নিয়ে একটি মেন্টরশিপ প্রোগ্রাম চালু করা।</p>
                    </CardContent>
                </Card>
                 <Card className="shadow-md">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রকাশনা ও ডিজিটাল লাইব্রেরি</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p><strong>ওয়ার্কশপ:</strong> 'কীভাবে গবেষণা প্রবন্ধ লিখতে হয়'—এই বিষয়ে নিয়মিত কর্মশালার আয়োজন।</p>
                        <p><strong>সহযোগিতা:</strong> আন্তর্জাতিক প্রকাশনা সংস্থার সাথে চুক্তি করে প্রকাশনা ফি কমানোর চেষ্টা।</p>
                        <p><strong>ডিজিটাল রিসোর্স:</strong> বিশ্বের সেরা বিশ্ববিদ্যালয়গুলোর ডিজিটাল লাইব্রেরিতে বিনামূল্যে প্রবেশের ব্যবস্থা করা।</p>
                    </CardContent>
                </Card>
            </div>
          </section>

          <section id="timeline">
             <div className="text-center max-w-4xl mx-auto">
                <Calendar className="mx-auto h-12 w-12 text-primary" />
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 text-foreground">বাস্তবায়নের সময়সীমা</h2>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                    আমরা একটি নির্দিষ্ট সময়সীমার মধ্যে আমাদের প্রতিশ্রুতিগুলো বাস্তবায়ন করতে অঙ্গীকারবদ্ধ।
                </p>
            </div>
            <div className="mt-12 space-y-8">
                <Card className="shadow-md bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রথম ৬ মাস</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                        <p> • সকল গবেষণা সুযোগ এবং অনুদান সম্পর্কে তথ্য নিয়ে একটি কেন্দ্রীয় ডাটাবেস তৈরি।</p>
                        <p> • ছাত্র-শিক্ষক সম্পর্ক উন্নয়নে প্রথম মতবিনিময় সভার আয়োজন।</p>
                        <p> • ডিজিটাল লাইব্রেরি প্রকল্পের প্রাথমিক পর্যায় শুরু করা।</p>
                    </CardContent>
                </Card>
                <Card className="shadow-md bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রথম বছর</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-2">
                       <p> • অন্তত দুটি আন্তর্জাতিক মানের গবেষণা সেমিনারের আয়োজন।</p>
                       <p> • বিশ্ববিদ্যালয়ের নিজস্ব প্রকাশনা প্ল্যাটফর্মের উদ্বোধন।</p>
                       <p> • মেন্টরশিপ প্রোগ্রামের সফল বাস্তবায়ন এবং এর ফলাফল মূল্যায়ন।</p>
                    </CardContent>
                </Card>
            </div>
          </section>
          
          <section id="conclusion" className="text-center max-w-4xl mx-auto border-t pt-12">
            <h2 className="font-headline text-3xl font-bold text-foreground">শেষ কথা</h2>
            <p className="font-body text-lg mt-4 text-muted-foreground">
                এই ইশতেহার আমাদের সম্মিলিত স্বপ্নের দলিল। আপনাদের সমর্থন ও বিশ্বাসই আমাদের এই পথচলার মূল শক্তি। আসুন, আমরা সবাই মিলে একটি জ্ঞানভিত্তিক, প্রগতিশীল এবং উন্নত ঢাকা বিশ্ববিদ্যালয় গড়ে তুলি।
            </p>
            <p className="mt-6 font-headline text-xl text-primary font-semibold">
                আপনার মূল্যবান ভোটটি দিয়ে আমাদের এই যাত্রায় সঙ্গী হোন।
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
