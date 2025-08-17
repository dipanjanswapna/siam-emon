import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Landmark, GraduationCap, HeartHandshake, Briefcase, Lightbulb } from "lucide-react";

// Placeholder data
const newsItems = [
  {
    title: "Successful Town Hall Meeting in North District",
    description: "Our candidate connected with hundreds of residents, listening to their concerns and sharing our vision.",
    date: "October 26, 2024",
    image: "https://placehold.co/600x400.png",
    imageHint: "town hall meeting"
  },
  {
    title: "New Education Initiative Announced",
    description: "A comprehensive plan to modernize schools and support teachers was unveiled today.",
    date: "October 24, 2024",
    image: "https://placehold.co/600x400.png",
    imageHint: "classroom students"
  },
  {
    title: "Volunteer Drive Kicks Off with Great Enthusiasm",
    description: "Over 200 new volunteers joined our campaign this weekend to help spread the word.",
    date: "October 22, 2024",
    image: "https://placehold.co/600x400.png",
    imageHint: "community volunteers"
  },
];

const manifestoHighlights = [
  {
    icon: GraduationCap,
    title: "Education Reform",
    description: "Investing in modern schools, teacher training, and student scholarships."
  },
  {
    icon: HeartHandshake,
    title: "Healthcare for All",
    description: "Expanding access to quality healthcare facilities and affordable services."
  },
  {
    icon: Briefcase,
    title: "Job Creation",
    description: "Fostering economic growth and creating sustainable employment opportunities."
  },
  {
    icon: Landmark,
    title: "Infrastructure Development",
    description: "Building and upgrading roads, bridges, and public transport systems."
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
        alt="Candidate Portrait"
        fill
        className="object-cover opacity-20"
        data-ai-hint="political candidate portrait"
        priority
      />
      <div className="relative container mx-auto flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold text-foreground leading-tight">
          A New Dawn for a Golden Bengal
        </h1>
        <p className="font-body text-xl md:text-2xl mt-4 max-w-3xl text-muted-foreground">
          Join us in building a future of progress, prosperity, and unity for everyone.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="font-headline text-lg">
            <Link href="/manifesto">Our Vision</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-headline text-lg">
            <Link href="/get-involved">Get Involved</Link>
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
            alt="Candidate speaking"
            width={600}
            height={750}
            className="w-full h-auto"
            data-ai-hint="politician speaking"
          />
        </div>
        <div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Meet Your Candidate</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            A dedicated public servant with a lifelong commitment to our community. With a proven track record of fighting for the people, our candidate brings the experience, passion, and integrity needed to lead us forward.
          </p>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            From improving local schools to championing small businesses, their work has always been about creating opportunities and improving lives.
          </p>
          <Button asChild className="mt-6 font-headline text-lg">
            <Link href="/about">
              Read Full Biography <ArrowRight className="ml-2 h-5 w-5" />
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
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Our Commitment to You</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            Our manifesto is a promise. A promise to work tirelessly on the issues that matter most to you and your family.
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
                <Link href="/manifesto">Explore the Full Manifesto <ArrowRight className="ml-2 h-5 w-5" /></Link>
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
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground">Campaign Trail Updates</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            Stay up-to-date with our latest activities, announcements, and events.
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
          <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-foreground">Your Voice, Your Vote, Our Future</h2>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            Every single vote is a powerful voice for change. It's your opportunity to shape our community and ensure a government that represents your values and fights for your needs. Don't be silent. Your participation in this election is crucial for building a stronger democracy and a better tomorrow for all.
          </p>
          <Button asChild className="mt-8 font-headline text-lg" variant="accent">
            <Link href="/get-involved#register-to-vote">Learn How to Register</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
