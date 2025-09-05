
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rss, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "ক্যাম্পেইন আপডেট",
    title: "ব্যাপক উৎসাহ ও উদ্দীপনার মধ্য দিয়ে নির্বাচনী প্রচারণা শুরু",
    date: "সেপ্টেম্বর ১, ২০২৫",
    description: "আজ থেকে আনুষ্ঠানিকভাবে ডাকসু নির্বাচনের প্রচারণা শুরু হয়েছে। সিয়াম ফেরদৌস ইমন তার সমর্থকদের নিয়ে ক্যাম্পাসের বিভিন্ন স্থানে গণসংযোগ করেন এবং শিক্ষার্থীদের সাথে মতবিনিময় করেন।",
    image: "https://i.postimg.cc/XJm37J1p/photo_2025-08-21_01-07_12.jpg",
    imageHint: "campaign launch",
    link: "#"
  },
  {
    category: "প্রেস রিলিজ",
    title: "গবেষণা বাজেট বৃদ্ধির দাবিতে সিয়াম ফেরদৌস ইমনের ইশতেহার প্রকাশ",
    date: "আগস্ট ৩০, ২০২৫",
    description: "আজ এক সংবাদ সম্মেলনের মাধ্যমে গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী সিয়াম ফেরদৌস ইমন তার নির্বাচনী ইশতেহার প্রকাশ করেছেন। ইশতেহারে তিনি নির্বাচিত হলে ডাকসুর গবেষণা বাজেট ২০% এ উন্নীত করার অঙ্গীকার করেন।",
    image: "https://i.postimg.cc/SRhTrbJg/photo-2025-08-21-01-04-12.jpg",
    imageHint: "press conference",
    link: "/manifesto"
  },
    {
    category: "বিশেষ ঘোষণা",
    title: "শিক্ষার্থীদের জন্য বিনামূল্যে একাডেমিক রাইটিং কর্মশালার আয়োজন",
    date: "আগস্ট ২৮, ২০২৫",
    description: "ডাকসু নির্বাচন উপলক্ষে সিয়াম ফেরদৌস ইমনের উদ্যোগে আগামী সপ্তাহে শিক্ষার্থীদের জন্য একটি বিনামূল্যে একাডেমিক রাইটিং কর্মশালার আয়োজন করা হয়েছে। কর্মশালায় অংশগ্রহণের জন্য রেজিস্ট্রেশন চলছে।",
    image: "https://i.postimg.cc/4ypCf1hS/photo-2025-08-21-01-06-17.jpg",
    imageHint: "workshop announcement",
    link: "#"
  },
   {
    category: "সাক্ষাৎকার",
    title: "গণমাধ্যমের মুখোমুখি সিয়াম ফেরদৌস ইমন",
    date: "আগস্ট ২৫, ২০২৫",
    description: "একটি বেসরকারি টেলিভিশনে ডাকসু নির্বাচন নিয়ে আলোচনায় সিয়াম ফেরদৌস ইমন তার বিভিন্ন পরিকল্পনা ও ভাবনার কথা তুলে ধরেন। তিনি একটি ছাত্রবান্ধব ও গবেষণামুখী ডাকসু গঠনের প্রত্যয় ব্যক্ত করেন।",
    image: "https://i.postimg.cc/KYTxK34X/photo_2025-08-21_17-43_25.jpg",
    imageHint: "tv interview",
    link: "#"
  }
];

export default function NewsUpdatesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto fade-in-up">
          <Rss className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">সংবাদ ও আপডেট</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমার নির্বাচনী প্রচারণা, কার্যক্রম এবং বিভিন্ন গুরুত্বপূর্ণ ঘোষণার সর্বশেষ আপডেট এখানে পাবেন।
          </p>
        </header>

        <main className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    data-ai-hint={item.imageHint}
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{item.category}</Badge>
                  <CardTitle className="font-headline text-xl mt-2 hover:text-primary">
                     <Link href={item.link}>{item.title}</Link>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="font-body">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
