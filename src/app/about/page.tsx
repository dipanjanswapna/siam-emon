
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
                  src="https://i.postimg.cc/LXCLpBjm/532463080-3680875555553854-4475665250768894271-n.jpg"
                  alt="সিয়াম ফেরদৌস ইমন"
                  width={600}
                  height={800}
                  className="rounded-t-lg object-contain"
                  data-ai-hint="politician portrait"
                />
                <div className="p-6">
                  <h2 className="font-headline text-3xl font-bold">সিয়াম ফেরদৌস ইমন</h2>
                  <p className="font-body text-primary mt-1">একটি উন্নত ভবিষ্যতের জন্য</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-2">
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">সেবার এক জীবন</h1>
            <p className="font-body text-lg mt-6 text-muted-foreground">
              ন্যায়বিচার এবং সম্প্রদায়ের প্রতি গভীর বিশ্বাসে চালিত, আমাদের প্রার্থী জনসেবায় তার জীবন উৎসর্গ করেছেন। এই যাত্রা ক্ষমতার জন্য নয়; এটি ক্ষমতায়নের জন্য—যারা কথা বলতে পারে না তাদের आवाज দেওয়া এবং এমন একটি সমাজ তৈরি করা যেখানে প্রত্যেকের সফল হওয়ার সুযোগ রয়েছে।
            </p>

            <div className="mt-12 space-y-12">
              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  প্রাথমিক জীবন ও শিক্ষা
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  ঢাকা বিশ্ববিদ্যালয়ের প্রাণকেন্দ্রে জন্মগ্রহণ ও বেড়ে ওঠা, আমাদের প্রার্থী ছোটবেলা থেকেই কঠোর পরিশ্রম এবং অধ্যবসায়ের মূল্য শিখেছেন। স্থানীয় স্কুলে দক্ষতা অর্জনের পর, তিনি ঢাকা বিশ্ববিদ্যালয় থেকে পাবলিক পলিসি এবং অর্থনীতিতে ডিগ্রি অর্জন করেন, যেখানে তার সামাজিক পরিবর্তনের আবেগ প্রজ্বলিত হয়েছিল। তিনি Zoology Debating Club এবং Animal Genetics & Molecular Biology Club (AGMBC)-এর মতো সংগঠনের সাথে যুক্ত ছিলেন।
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  পেশাগত জীবন ও জনসেবা
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  রাজনীতিতে প্রবেশের আগে, আমাদের প্রার্থী একজন কমিউনিটি সংগঠক এবং Bigbang Academy-তে Biology Instructor হিসেবে কাজ করেছেন, সাশ্রয়ী মূল্যের আবাসন এবং উন্নত জনসেবার জন্য লড়াই করেছেন। পরে তিনি সিটি কাউন্সিলে দায়িত্ব পালন করেন, যেখানে তিনি ছোট ব্যবসাগুলিকে সমর্থন এবং জননিরাপত্তা উন্নত করার জন্য যুগান্তকারী আইন পাসে সহায়ক ভূমিকা পালন করেন। তার বাস্তববাদী, জনমুখী দৃষ্টিভঙ্গি তাকে রাজনৈতিক বর্ণালী জুড়ে সম্মান অর্জন করেছে।
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  ভবিষ্যতের জন্য আমাদের লক্ষ্য
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  আমাদের প্রার্থীর লক্ষ্য সহজ কিন্তু গভীর: একটি "সোনার বাংলা" গড়া যেখানে প্রতিটি শিশু একটি சிறந்த শিক্ষা পাবে, প্রতিটি পরিবার মানসম্মত স্বাস্থ্যসেবা পাবে, এবং প্রতিটি ব্যক্তির স্বপ্ন পূরণের সুযোগ থাকবে। এই প্রচারণা আরও অন্তর্ভুক্তিমূলক, সমৃদ্ধ এবং স্থিতিস্থাপক ভবিষ্যতের জন্য একটি আন্দোলন। ডাকসু নির্বাচন ২০২৫ আমাদের লক্ষ্য অর্জনের একটি গুরুত্বপূর্ণ ধাপ।
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
