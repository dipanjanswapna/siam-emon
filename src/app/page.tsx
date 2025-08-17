import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Landmark, GraduationCap, HeartHandshake, Briefcase, Lightbulb } from "lucide-react";

// Placeholder data
const newsItems = [
  {
    title: "উত্তর জেলায় সফল টাউন হল মিটিং",
    description: "আমাদের প্রার্থী শত শত বাসিন্দাদের সাথে সংযোগ স্থাপন করেছেন, তাদের উদ্বেগ শুনেছেন এবং আমাদের দৃষ্টিভঙ্গি শেয়ার করেছেন।",
    date: "অক্টোবর ২৬, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "town hall meeting"
  },
  {
    title: "নতুন শিক্ষা উদ্যোগ ঘোষণা করা হয়েছে",
    description: "স্কুল আধুনিকীকরণ এবং শিক্ষকদের সহায়তার জন্য একটি ব্যাপক পরিকল্পনা আজ উন্মোচন করা হয়েছে।",
    date: "অক্টোবর ২৪, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "classroom students"
  },
  {
    title: "স্বেচ্ছাসেবক অভিযান büyük উৎসাহের সাথে শুরু হয়েছে",
    description: "এই সপ্তাহান্তে ২০০ জনেরও বেশি নতুন স্বেচ্ছাসেবক আমাদের প্রচারাভিযানে যোগ দিয়েছেন।",
    date: "অক্টোবর ২২, ২০২৪",
    image: "https://placehold.co/600x400.png",
    imageHint: "community volunteers"
  },
];

const manifestoHighlights = [
  {
    icon: GraduationCap,
    title: "শিক্ষা সংস্কার",
    description: "আধুনিক স্কুল, শিক্ষক প্রশিক্ষণ এবং ছাত্র বৃত্তি প্রকল্পে বিনিয়োগ।"
  },
  {
    icon: HeartHandshake,
    title: "সকলের জন্য স্বাস্থ্যসেবা",
    description: "মানসম্মত স্বাস্থ্যসেবা সুবিধা এবং সাশ্রয়ী মূল্যের পরিষেবাগুলিতে অ্যাক্সেস প্রসারিত করা।"
  },
  {
    icon: Briefcase,
    title: "কর্মসংস্থান সৃষ্টি",
    description: "অর্থনৈতিক প্রবৃদ্ধি বাড়ানো এবং টেকসই কর্মসংস্থানের সুযোগ সৃষ্টি করা।"
  },
  {
    icon: Landmark,
    title: "অবকাঠামো উন্নয়ন",
    description: "রাস্তা, সেতু এবং গণপরিবহন ব্যবস্থা নির্মাণ ও আপগ্রেড করা।"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ManifestoSection />
      <NewsSection />
      <WhyVoteSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] bg-background">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="প্রার্থীর প্রতিকৃতি"
        fill
        className="object-cover opacity-20"
        data-ai-hint="political candidate portrait"
        priority
      />
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground leading-tight">
          ঢাকা বিশ্ববিদ্যালয়: একটি নতুন দিগন্ত
        </h1>
        <p className="font-body text-xl md:text-2xl mt-4 max-w-3xl text-muted-foreground">
          সবার জন্য উন্নতি, সমৃদ্ধি এবং ঐক্যের ভবিষ্যৎ গড়তে আমাদের সাথে যোগ দিন।
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="font-headline text-lg">
            <Link href="/manifesto">আমাদের লক্ষ্য</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-headline text-lg">
            <Link href="/get-involved">যুক্ত হোন</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-4">
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <Image
            src="https://placehold.co/600x750.png"
            alt="প্রার্থী বক্তৃতা দিচ্ছেন"
            width={600}
            height={750}
            className="w-full h-auto"
            data-ai-hint="politician speaking"
          />
        </div>
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার প্রার্থীকে জানুন</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের সম্প্রদায়ের প্রতি আজীবন প্রতিশ্রুতিবদ্ধ একজন নিবেদিতপ্রাণ জনপ্রতিনিধি। জনগণের জন্য লড়াই করার প্রমাণিত ট্র্যাক রেকর্ড সহ, আমাদের প্রার্থী আমাদের এগিয়ে নিয়ে যাওয়ার জন্য প্রয়োজনীয় অভিজ্ঞতা, আবেগ এবং সততা নিয়ে এসেছেন।
          </p>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            স্থানীয় স্কুলের উন্নতি থেকে শুরু করে ছোট ব্যবসার পক্ষে কথা বলা পর্যন্ত, তাদের কাজ সবসময় সুযোগ তৈরি করা এবং জীবনযাত্রার মান উন্নত করা।
          </p>
          <Button asChild className="mt-6 font-headline text-lg">
            <Link href="/about">
              সম্পূর্ণ জীবনী পড়ুন <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার প্রতি আমাদের প্রতিশ্রুতি</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের ইশতেহার একটি প্রতিশ্রুতি। আপনার এবং আপনার পরিবারের জন্য সবচেয়ে গুরুত্বপূর্ণ বিষয়গুলিতে অক্লান্তভাবে কাজ করার প্রতিশ্রুতি।
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {manifestoHighlights.map((item) => (
            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild className="font-headline text-lg">
                <Link href="/manifesto">সম্পূর্ণ ইশতেহার দেখুন <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">প্রচারণার সর্বশেষ খবর</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমাদের সর্বশেষ কার্যক্রম, ঘোষণা এবং ইভেন্টগুলির সাথে আপ-টু-ডেট থাকুন।
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
                data-ai-hint={item.imageHint}
              />
              <CardHeader>
                <CardTitle className="font-headline">{item.title}</CardTitle>
                <CardDescription className="font-body">{item.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="font-body text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyVoteSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto text-center px-4">
        <div className="max-w-3xl mx-auto">
          <Lightbulb className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-foreground">আপনার কণ্ঠ, আপনার ভোট, আমাদের ভবিষ্যৎ</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            প্রতিটি ভোট পরিবর্তনের জন্য একটি শক্তিশালী কণ্ঠস্বর। এটি আপনার সম্প্রদায়কে গঠন করার এবং আপনার মূল্যবোধের প্রতিনিধিত্বকারী এবং আপনার প্রয়োজনের জন্য লড়াই করে এমন একটি সরকার নিশ্চিত করার সুযোগ। নীরব থাকবেন না। একটি শক্তিশালী গণতন্ত্র এবং সকলের জন্য একটি উন্নত আগামীকাল গড়ার জন্য এই নির্বাচনে আপনার অংশগ্রহণ অত্যন্ত গুরুত্বপূর্ণ।
          </p>
          <Button asChild className="mt-8 font-headline text-lg" variant="accent">
            <Link href="/get-involved#register-to-vote">নিবন্ধন করতে শিখুন</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
