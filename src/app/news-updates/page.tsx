
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rss, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    category: "নির্বাচনী সমাবেশ",
    title: "কাশীপুর বাজারে নির্বাচনী সমাবেশ অনুষ্ঠিত",
    date: "১ ফেব্রুয়ারী",
    description: "আজ ১ ফেব্রুয়ারী काशीপুর বাজারে বাংলাদেশের সমাজতান্ত্রিক দল- বাসদ মনোনীত এবং গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বরিশাল- ৫ আসনে সংসদ সদস্য পদপ্রার্থী ডা. মনীষা চক্রবর্তী নির্বাচনী সমাবেশ অনুষ্ঠিত।",
    image: "https://i.postimg.cc/Gpd2g0x3/news-1.jpg",
    imageHint: "political rally market",
    link: "#"
  },
  {
    category: "নির্বাচনী সমাবেশ",
    title: "রূপাতলি অঞ্চলে নির্বাচনী সমাবেশ অনুষ্ঠিত",
    date: "৩০ জানুয়ারী",
    description: "আজ ৩০ জানুয়ারী রূপাতলি অঞ্চলে বাংলাদেশের সমাজতান্ত্রিক দল- বাসদ মনোনীত এবং গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বরিশাল- ৫ আসনে সংসদ সদস্য পদপ্রার্থী ডা. মনীষা চক্রবর্তীর নির্বাচনী সমাবেশ অনুষ্ঠিত।",
    image: "https://i.postimg.cc/C5YgZpLz/news-2.jpg",
    imageHint: "community meeting outdoors",
    link: "#"
  },
    {
    category: "গণসংযোগ",
    title: "বরিশাল জেলা বার লাইব্রেরিতে প্রচারণা",
    date: "২৭ জানুয়ারী",
    description: "আজ সকাল ১১ টায় বরিশাল জেলা বার লাইব্রেরি থেকে প্রচারণা শুরু করেন ডা. মনীষা চক্রবর্তী। নেতৃবৃন্দ নির্বাচনের সুষ্ঠু পরিবেশ নিশ্চিত করার দাবি জানান।",
    image: "https://i.postimg.cc/Pq2Y5YVp/news-3.jpg",
    imageHint: "candidate speaking indoors",
    link: "#"
  },
   {
    category: "সংবাদ সম্মেলন",
    title: "নারী বিদ্বেষী আচরণের বিরুদ্ধে সোচ্চার নেতৃবৃন্দ",
    date: "৩০ জানুয়ারী",
    description: "রূপাতলির সমাবেশে নেতৃবৃন্দ বলেন, নির্বাচনী আচরণবিধিতে নারী বিদ্বেষী আচরণ নিষিদ্ধ হলেও কিছু প্রার্থী তা লঙ্ঘন করছেন। জনগণ এর সঠিক জবাব দেবে।",
    image: "https://i.postimg.cc/L6Rk561p/manisha-portrait.jpg",
    imageHint: "candidate portrait",
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
            ডাঃ মনীষা চক্রবর্ত্তীর নির্বাচনী প্রচারণা, কার্যক্রম এবং বিভিন্ন গুরুত্বপূর্ণ ঘোষণার সর্বশেষ আপডেট এখানে পাবেন।
          </p>
        </header>

        <main className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
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
