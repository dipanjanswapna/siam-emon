
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Library, Users, Award, Calendar, Target, Download, DollarSign, Laptop, Archive, FlaskConical, Mail, Database, Presentation, BadgePercent, GraduationCap, Microscope, BrainCircuit, HandCoins, Vote } from "lucide-react";
import Link from "next/link";

const keyPledges = [
  {
    icon: BadgePercent,
    title: "বাজেট বাড়াও, গবেষণা বাঁচাও",
    description: "নির্বাচিত হলে গবেষণা বাজেট ২% থেকে ২০% বা তার বেশিতে উন্নীত করাই হবে আমার প্রধান লক্ষ্য। এক বছরে সম্ভব না হলেও, বর্তমান বাজেটকে দ্বিগুণ বা তিনগুণ করতে সর্বোচ্চ চাপ প্রয়োগ করে আদায় করব।"
  },
  {
    icon: Laptop,
    title: "একাডেমিক রাইটিং ও সফটওয়্যার ট্রেনিং",
    description: "R, SPSS, Python, Excel, GIS, MS Word-এর মতো গুরুত্বপূর্ণ সফটওয়্যারের উপর নিয়মিত বিনামূল্যে কর্মশালা আয়োজন ও হাতে-কলমে প্রশিক্ষণের ব্যবস্থা করব।"
  },
  {
    icon: HandCoins,
    title: "রিসোর্স হেল্পডেস্ক প্রতিষ্ঠা",
    description: "বিভাগভিত্তিক গবেষণা তহবিল ও আন্তর্জাতিক স্কলারশিপের সহায়তার জন্য একটি বিশেষ ‘রিসোর্স হেল্পডেস্ক’ প্রতিষ্ঠা করব।"
  },
  {
    icon: Mail,
    title: "জার্নাল অ্যাক্সেস ও ই-মেইল সক্ষমতা",
    description: "ইন্সটিটিউশনাল মেইল ಐডর সক্ষমতা বৃদ্ধি করব এবং বিশ্বমানের জার্নালগুলোতে বিনামূল্যে অ্যাক্সেস নিশ্চিত করব।"
  },
  {
    icon: BookOpen,
    title: "ডাকসুর নিজস্ব স্টুডেন্ট জার্নাল",
    description: "ডাকসুর উদ্যোগে একটি মানসম্মত 'স্টুডেন্ট জার্নাল' প্রকাশ করব, যেখানে শিক্ষার্থীরা তাদের গবেষণা সহজে প্রকাশ করতে পারবে।"
  },
  {
    icon: Archive,
    title: "ডিজিটাল আর্কাইভ প্রতিষ্ঠা",
    description: "প্রতিটি থিসিস ও গবেষণাপত্রের জন্য ডিজিটাল আর্কাইভ তৈরি করব, যেন মূল্যবান কাজগুলো হারিয়ে না যায়।"
  },
  {
    icon: Presentation,
    title: "কনফারেন্স ও সেমিনার আয়োজন",
    description: "শিক্ষার্থীদের জন্য গবেষণাভিত্তিক স্টুডেন্ট কনফারেন্স, ইয়ুথ কনফারেন্স ও সেমিনার আয়োজন করে তৃতীয়/চতুর্থ বর্ষ থেকেই গবেষণায় যুক্ত করব।"
  },
  {
    icon: GraduationCap,
    title: "সার্টিফিকেট ভেরিফিকেশন ফি কমানো",
    description: "স্কলারশিপে আবেদনের জন্য সার্টিফিকেট তোলা ও ভেরিফিকেশনের আকাশচুম্বী ফি সহনীয় পর্যায়ে নিয়ে আসব।"
  },
  {
    icon: BrainCircuit,
    title: "কোর্সে গবেষণা টুলস অন্তর্ভুক্তকরণ",
    description: "একাডেমিক ও প্র্যাকটিক্যাল কোর্সে সময়োপযোগী ও ঐচ্ছিক গবেষণা টুলস প্রশিক্ষণ অন্তর্ভুক্ত করার উদ্যোগ নেব।"
  },
  {
    icon: Microscope,
    title: "ছাড়পোকা দমনে সায়েন্টিফিক সমাধান",
    description: "আবাসিক হলগুলোতে ছাড়পোকার স্থায়ী সমাধানের জন্য গবেষণা টিম গঠন করে একটি সায়েন্টিফিক ও গবেষণালব্ধ সমাধান করব।"
  },
  {
    icon: FlaskConical,
    title: "খাবার ও পানির মান গবেষণা",
    description: "বিশ্ববিদ্যালয়ের খাবার পানি ও ক্যান্টিনের খাবারের উপর নিয়মিত গবেষণা ও পরীক্ষা চালিয়ে ডাকসুর ওয়েবসাইটে তথ্য আপডেট করব।"
  },
  {
    icon: Database,
    title: "One Stop Lab Solution প্রতিষ্ঠা",
    description: "অনুষদভিত্তিক 'One Stop Lab Solution' প্রতিষ্ঠা করব, যেখানে গবেষণার জন্য প্রয়োজনীয় সকল মেশিনারিজ ও কেমিক্যালস থাকবে।"
  }
];

export default function ManifestoPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        <header className="text-center max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">আমার অঙ্গীকার: একটি গবেষণা-উদ্যমী ডাকসু</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
             সিয়াম ফেরদৌস ইমন, গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী হিসেবে আমি বিশ্বাস করি, একটি উন্নত ও আধুনিক ঢাকা বিশ্ববিদ্যালয় গড়ার মূল ভিত্তি হলো গবেষণা ও প্রকাশনার অবাধ সুযোগ। আমি শুধু স্বপ্ন দেখাই না, স্বপ্ন বাস্তবায়নের জন্য সুনির্দিষ্ট পরিকল্পনা নিয়ে আপনাদের সামনে حاضر হয়েছি। আপনাদের ভোটে নির্বাচিত হলে, আমি এই অঙ্গীকারগুলো বাস্তবায়নে দৃঢ়প্রতিজ্ঞ থাকব।
          </p>
           <Button asChild variant="accent" size="lg" className="mt-8 font-headline text-lg">
                <Link href="https://drive.google.com/file/d/1CFsCGTggXtmQCZM48fPg_HzLk2Mi68Y7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    সম্পূর্ণ ইশতেহার ডাউনলোড করুন
                </Link>
            </Button>
        </header>

        <main className="mt-16 space-y-16">
          <section id="manifesto-pdf" className="mb-16">
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="font-headline text-4xl font-bold text-foreground">সম্পূর্ণ ইশতেহার</h2>
                <p className="font-body text-lg mt-2 text-muted-foreground">
                    আমার বিস্তারিত পরিকল্পনা এবং অঙ্গীকারগুলো জানতে সম্পূর্ণ ইশতেহারটি দেখুন।
                </p>
            </div>
            <div className="mt-8 relative w-full h-[80vh] max-w-4xl mx-auto shadow-lg">
                <iframe
                    src="https://drive.google.com/file/d/1CFsCGTggXtmQCZM48fPg_HzLk2Mi68Y7/preview"
                    className="w-full h-full border-2 border-border rounded-lg"
                    allow="autoplay"
                ></iframe>
            </div>
          </section>

          <section id="pledges">
            <Card className="shadow-lg bg-card">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl">আমার প্রধান অঙ্গীকারসমূহ</CardTitle>
                <CardDescription className="font-body">আমার প্রতিটি প্রতিশ্রুতি শিক্ষার্থীদের প্রত্যক্ষ কল্যাণে এবং একটি গবেষণা-বান্ধব পরিবেশ তৈরির লক্ষ্যে নিবেদিত।</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {keyPledges.map((pledge) => (
                  <Card key={pledge.title} className="flex flex-col items-center text-center p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md">
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
          
          <section id="conclusion" className="text-center max-w-4xl mx-auto border-t pt-12">
            <Vote className="mx-auto h-16 w-16 text-primary" />
            <h2 className="font-headline text-3xl font-bold text-foreground mt-6">
              ৯ তারিখ সারাদিন, গবেষণায় ৯ নং ব্যালটে ভোট দিন
            </h2>
            <div className="mt-4 space-y-2 font-body text-lg text-muted-foreground">
              <p>৯ তারিখ ডাকসু</p>
              <p>৯ নং ব্যালটে সিয়াম</p>
              <p>৯ নং ব্যালটে গবেষণা ও প্রকাশনা</p>
            </div>
            <div className="mt-8 bg-primary/10 border-2 border-dashed border-primary rounded-lg p-6 max-w-md mx-auto">
                <h3 className="font-headline text-3xl font-extrabold text-primary">সিয়াম ফেরদৌস ইমন</h3>
                <p className="font-body text-foreground text-xl mt-1">ব্যালট নং <span className="font-extrabold text-2xl text-red-600">০৯</span></p>
                <p className="font-body text-muted-foreground text-lg">গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী</p>
            </div>
            <p className="mt-8 font-body text-lg text-muted-foreground">
                আপনার মূল্যবান ভোটটি দিয়ে আমার এই যাত্রায় সঙ্গী হোন। আসুন, আমরা সবাই মিলে একটি জ্ঞানভিত্তিক, প্রগতিশীল এবং উন্নত ঢাকা বিশ্ববিদ্যালয় গড়ে তুলি।
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}
