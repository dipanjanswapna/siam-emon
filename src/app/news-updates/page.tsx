
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rss, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

type News = {
    id: string;
    category: string;
    title: string;
    date: string;
    description: string;
    image: string;
    imageHint: string;
};

export default function NewsUpdatesPage() {
    const [newsItems, setNewsItems] = useState<News[]>([]);
    const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const newsCollection = collection(db, "news");
                const q = query(newsCollection, orderBy("date", "desc"));
                const newsSnapshot = await getDocs(q);
                const newsList = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as News));
                setNewsItems(newsList);
            } catch (error) {
                console.error("Error fetching news:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchNews();
    }, []);

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
          {isLoading ? (
               Array.from({ length: 6 }).map((_, index) => (
                    <Card key={index} className="h-full flex flex-col overflow-hidden shadow-lg bg-card">
                         <Skeleton className="w-full aspect-video" />
                         <CardHeader>
                              <Skeleton className="h-4 w-1/4" />
                              <Skeleton className="h-6 w-3/4 mt-2" />
                              <Skeleton className="h-4 w-1/2 mt-1" />
                         </CardHeader>
                         <CardContent className="flex-grow">
                             <Skeleton className="h-4 w-full" />
                             <Skeleton className="h-4 w-full mt-2" />
                         </CardContent>
                    </Card>
               ))
          ): (
            newsItems.map((item, index) => (
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
                        <Link href={`/news-updates/${item.id}`}>{item.title}</Link>
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pt-1">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                    </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                    <CardDescription className="font-body">{item.description}</CardDescription>
                    </CardContent>
                     <div className="p-6 pt-0">
                        <Button asChild>
                            <Link href={`/news-updates/${item.id}`}>বিস্তারিত পড়ুন</Link>
                        </Button>
                    </div>
                </Card>
                </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}
