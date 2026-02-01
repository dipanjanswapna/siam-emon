
"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type News = {
    id: string;
    category: string;
    title: string;
    date: string;
    content: string;
    image: string;
    imageHint: string;
};

export default function NewsDetailPage({ params }: { params: { id: string } }) {
    const [newsItem, setNewsItem] = useState<News | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNewsItem = async () => {
            if (params.id) {
                setIsLoading(true);
                try {
                    const docRef = doc(db, "news", params.id);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setNewsItem({ id: docSnap.id, ...docSnap.data() } as News);
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching news item:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchNewsItem();
    }, [params.id]);
    
    if (isLoading) {
        return (
             <div className="container mx-auto px-4 py-16 md:py-24">
                <Skeleton className="h-8 w-1/4 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-80 w-full mb-8" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-5/6 mb-4" />
            </div>
        )
    }

    if (!newsItem) {
        return <div className="text-center py-24">খবরটি খুঁজে পাওয়া যায়নি।</div>
    }

    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <article className="max-w-4xl mx-auto">
                    <header className="mb-8">
                         <Badge variant="secondary" className="w-fit mb-4">{newsItem.category}</Badge>
                        <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">{newsItem.title}</h1>
                         <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{newsItem.date}</span>
                        </div>
                    </header>
                    <div className="relative w-full aspect-video mb-8">
                        <Image
                            src={newsItem.image}
                            alt={newsItem.title}
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint={newsItem.imageHint}
                        />
                    </div>
                    <div 
                        className="font-body text-lg text-muted-foreground leading-relaxed whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: newsItem.content.replace(/\n/g, '<br />') }}
                    />

                </article>
            </div>
        </div>
    );
}

