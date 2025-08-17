import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <Card className="shadow-lg sticky top-24">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x800.png"
                  alt="Candidate full portrait"
                  width={600}
                  height={800}
                  className="rounded-t-lg"
                  data-ai-hint="politician portrait"
                />
                <div className="p-6">
                  <h2 className="font-headline text-3xl font-bold">Our Candidate</h2>
                  <p className="font-body text-primary mt-1">For a Better Bengal</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">A Lifetime of Service</h1>
            <p className="font-body text-lg mt-6 text-muted-foreground">
              Driven by a deep-seated belief in justice and community, our candidate has dedicated their life to public service. This journey is not about power; it's about empowerment—giving a voice to the voiceless and creating a society where everyone has the opportunity to succeed.
            </p>

            <div className="mt-12 space-y-12">
              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  Early Life & Education
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  Born and raised in the heart of Bengal, our candidate learned the values of hard work and perseverance from a young age. After excelling in local schools, they earned a degree in Public Policy and Economics from a prestigious university, where their passion for social change was ignited.
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  Professional Career & Public Service
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  Before entering politics, our candidate worked as a community organizer, fighting for affordable housing and better public services. They later served on the city council, where they were instrumental in passing landmark legislation to support small businesses and improve public safety. Their pragmatic, people-first approach has earned them respect across the political spectrum.
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  Our Vision for the Future
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  Our candidate's vision is simple yet profound: to build a "Sonar Bangla" (Golden Bengal) where every child has access to a great education, every family has quality healthcare, and every person has the chance to achieve their dreams. This campaign is a movement for a more inclusive, prosperous, and resilient future.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
