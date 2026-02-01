
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award, CheckCircle, ShipWheel, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Skeleton } from "@/components/ui/skeleton";


type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    hint: string;
};


export default function AboutPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            setIsLoading(true);
            const teamMembersCollection = collection(db, "teamMembers");
            const teamMembersSnapshot = await getDocs(teamMembersCollection);
            const teamMembersList = teamMembersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as TeamMember));
            setTeamMembers(teamMembersList);
            setIsLoading(false);
        };
        fetchTeamMembers();
    }, []);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        
        {/* Profile Card Section */}
        <section className="mb-16">
          <div className="max-w-sm mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <Image
                  src="https://i.postimg.cc/8z9WzRy4/photo-2025-08-18-15-33-20-1.jpg"
                  alt="সিয়াম ফেরদৌস ইমন"
                  width={600}
                  height={800}
                  className="rounded-t-lg object-contain"
                  data-ai-hint="politician portrait"
                />
                <div className="p-6 text-center">
                  <h2 className="font-headline text-3xl font-bold">সিয়াম ফেরদৌস ইমন</h2>
                  <p className="font-body text-primary mt-1">গবেষণা ও প্রকাশনা সম্পাদক পদপ্রার্থী</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="max-w-5xl mx-auto">
            <div className="text-center">
                <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">সেবার এক জীবন: আমার একনিষ্ঠ অঙ্গীকার</h1>
                <p className="font-body text-lg mt-6 text-muted-foreground">
                অনেকেই নেতৃত্বকে ক্ষমতার কেন্দ্রবিন্দু মনে করেন, কিন্তু আমার কাছে এটি একটি আজীবন সেবার ব্রত। আমি বিশ্বাস করি, সত্যিকার নেতৃত্ব জন্ম নেয় সাধারণ শিক্ষার্থীদের পাশে দাঁড়ানোর এবং তাদের জন্য নিঃস্বার্থভাবে কাজ করার মধ্য দিয়ে। আমি মনে করি, কোনো পদ বা সম্মান নয়, বরং সেবাই আমার আসল পরিচয়।
                </p>
                <p className="font-body text-lg mt-4 text-muted-foreground">
                আমার ছাত্রজীবন থেকে শুরু করে আজ পর্যন্ত প্রতিটি পদক্ষেপে আমি এই সেবার মানসিকতাকেই ধারণ করার চেষ্টা করেছি। আমি শুধু একজন পদপ্রার্থী নই, বরং আপনাদেরই একজন সহযোদ্ধা—একজন স্বপ্নদ্রষ্টা, যে কিনা শিক্ষার্থীদের জন্য একটি উন্নত ভবিষ্যৎ গড়তে প্রতিশ্রুতিবদ্ধ।
                </p>
                 <p className="font-body text-lg mt-4 text-muted-foreground">
                আমার কাছে সেবা কোনো নির্দিষ্ট পদের বা সময়ের গণ্ডিতে সীমাবদ্ধ নয়; এটি আমার জীবনের এক অবিচ্ছেদ্য অংশ। গবেষণার ক্ষেত্রে, প্রকাশনার জগতে এবং বিভিন্ন ছাত্রকল্যাণমূলক সামাজিক কর্মকাণ্ডে আমি যেটুকু ভূমিকা রেখেছি, তা এই সেবার ব্রত থেকেই রেখেছি। এই ব্রত নিয়েই আমি আপনাদের পাশে থাকতে চাই।
                </p>
            </div>

            <div className="mt-16 space-y-12">
              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  আমার পথচলার শুরু
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  আমার বেড়ে ওঠা পিরোজপুর শহরে। পিরোজপুর গভর্নমেন্ট হাই স্কুল থেকে আমার শিক্ষাজীবনের ভিত্তি স্থাপিত হয়, যা আমাকে মেধা ও শৃঙ্খলাবোধের শিক্ষা দিয়েছে। মাধ্যমিক শেষ করে আমি আদমজী ক্যান্টনমেন্ট কলেজে ভর্তি হই, যা আমার জীবনে এক নতুন অধ্যায়ের সূচনা করে। কলেজের কঠোর পরিবেশ আমাকে নিয়মানুবর্তিতা এবং নেতৃত্বের গুণাবলী শিখিয়েছে। এখানে থাকাকালীন আমি বিএনসিসি-র (বাংলাদেশ ন্যাশনাল ক্যাডেট কোর) ক্যাডেট লেফটেন্যান্ট-কর্নেল হিসেবে দায়িত্ব পালন করি এবং তায়কোয়ান্দো ও ইকো অ্যামিকা ক্লাবের মতো বিভিন্ন সংগঠনের সঙ্গে যুক্ত ছিলাম। এই অভিজ্ঞতাগুলো আমাকে দলগত কাজ ও সাংগঠনিক দক্ষতা অর্জনে সহায়তা করেছে। বর্তমানে আমি ঢাকা বিশ্ববিদ্যালয়ের প্রাণিবিদ্যা বিভাগ থেকে স্নাতক শেষ করে জেনেটিক্স ও মলিকুলার বায়োলজি বিষয়ে স্নাতকোত্তর করছি। এই বিশ্ববিদ্যালয় আমাকে গবেষণা, প্রকাশনা এবং ছাত্র আন্দোলনের সঙ্গে পরিচিত করেছে এবং একজন সচেতন নাগরিক হিসেবে গড়ে তুলেছে।
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  আমার কাজ ও জনসেবা
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  আমি বিশ্বাস করি, অর্জিত জ্ঞান কেবল ব্যক্তিগত উন্নতির জন্য নয়, বরং তা সমাজের বৃহত্তর কল্যাণে ব্যবহৃত হওয়া উচিত। আমি বিগব্যাং একাডেমি এবং ইউসিসি কোচিং সেন্টারে জীববিজ্ঞান শিক্ষক হিসেবে কাজ করেছি, যা আমার কাছে একটি সেবার ব্রত। শিক্ষার্থীদের মাঝে বিজ্ঞানের প্রতি আগ্রহ তৈরি করা এবং তাদের মেধা বিকাশে সহায়তা করা আমার অন্যতম লক্ষ্য। আমি অ্যানিমাল জেনেটিক্স এবং মলিকিউলার বায়োলজি ক্লাবের (AGMBC) সভাপতি এবং জুওলজি ডিবেটিং ক্লাবের সহ-সভাপতি হিসেবে দায়িত্ব পালন করেছি। এই পদগুলো আমাকে ছাত্রসমাজের সমস্যাগুলো কাছ থেকে দেখার এবং সমাধানের পথ খুঁজে বের করার সুযোগ দিয়েছে। এছাড়াও আমি বিভিন্ন স্বেচ্ছাসেবী কর্মকাণ্ডে, যেমন—দুস্থদের মাঝে ত্রাণ ও শীতবস্ত্র বিতরণ এবং পরিবেশ সচেতনতা বৃদ্ধিতে কাজ করি। আমার কাজের অভিজ্ঞতা এবং সমাজের প্রতি আমার অঙ্গীকারই আমাকে একজন প্রতিশ্রুতিবদ্ধ নেতা হিসেবে প্রতিষ্ঠিত করেছে।
                </p>
              </section>
              
               <section>
                 <h3 className="font-headline text-3xl font-bold text-foreground flex items-center justify-center gap-3 text-center">
                   <Award className="w-8 h-8 text-primary" />
                   আমার ভবিষ্যতের লক্ষ্য
                 </h3>
                 <div className="font-body text-lg mt-4 text-muted-foreground space-y-4 text-left">
                  <p>
                    আমি কেবল বর্তমানের সমস্যা সমাধানে আগ্রহী নই, বরং ভবিষ্যতের জন্য একটি সুদূরপ্রসারী লক্ষ্য নিয়ে কাজ করতে চাই। আমার লক্ষ্য হলো এমন একটি ছাত্রসমাজ গড়ে তোলা, যা দেশের অগ্রযাত্রায় সক্রিয় ভূমিকা রাখবে। আমার কিছু প্রধান লক্ষ্য নিচে দেওয়া হলো:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-bold text-foreground">একটি গবেষণামুখী সংস্কৃতি তৈরি:</span> আমি ঢাকা বিশ্ববিদ্যালয়ে গবেষণার সংস্কৃতিকে আরও বেগবান করতে চাই। শিক্ষার্থীরা যাতে নতুন জ্ঞান ও উদ্ভাবনের নেশায় গবেষণা করে, সেজন্য গবেষণাগারে আধুনিক সরঞ্জাম নিশ্চিত করা এবং আন্তর্জাতিক সেমিনারে অংশগ্রহণের সুযোগ তৈরি করব।
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-bold text-foreground">প্রযুক্তি ও শিক্ষার মেলবন্ধন:</span> আমি শিক্ষাব্যস্থায় প্রযুক্তিগত আধুনিকায়ন আনতে আগ্রহী। অনলাইন রিসোর্স অ্যাক্সেস, ডিজিটাল লাইব্রেরি এবং প্রোগ্রামING ও ডেটা অ্যানালাইসিসের মতো কর্মশালা আয়োজনের মাধ্যমে শিক্ষার্থীদের প্রযুক্তিগত দক্ষতা বাড়াতে চাই।
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-bold text-foreground">ছাত্র-শিক্ষক সম্পর্ক উন্নয়ন:</span> আমি নিয়মিত আলোচনার মাধ্যমে শিক্ষক ও শিক্ষার্থীদের মধ্যে একটি শক্তিশালী সেতুবন্ধন তৈরি করতে চাই, যাতে শিক্ষার্থীরা তাদের সমস্যাগুলো সহজে শিক্ষকদের কাছে তুলে ধরতে পারে।
                      </span>
                    </li>
                     <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-bold text-foreground">একটি দায়িত্বশীল নেতৃত্ব:</span> আমি এমন একটি ছাত্র সংসদ গড়ে তুলতে চাই যা স্বচ্ছ, দায়বদ্ধ এবং শিক্ষার্থীদের প্রতি সর্বদা প্রতিশ্রুতিবদ্ধ থাকবে।
                      </span>
                    </li>
                  </ul>
                  <p className="border-t border-border pt-4">
                    আমার এই লক্ষ্যগুলো কেবল কথার কথা নয়, বরং আমার কাজের প্রতিফলন। এই ভিশন ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য একটি উজ্জ্বল ভবিষ্যৎ নিশ্চিত করবে বলে আমি বিশ্বাস করি।
                  </p>
                </div>
              </section>

             <section>
                <h3 className="font-headline text-3xl font-bold text-foreground text-center">আমার পথচলার সঙ্গীরা</h3>
                <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg group">
                        <Image
                            src="https://i.postimg.cc/GtNj8Tzk/500230099-3604313253210085-5495573021943078961-n.jpg"
                            alt="আমাদের যাত্রা"
                            fill
                            className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint="team students"
                        />
                    </div>
                    <div className="font-body text-lg text-muted-foreground space-y-4">
                        <p>
                        আমি এবং আমার দল কোনো হঠাৎ করে আসা নেতা নই। আমাদের এই যাত্রা শুরু হয়েছিল ঢাকা বিশ্ববিদ্যালয়ের প্রতিটি শিক্ষার্থীর হৃদয়ের কথা শোনার মধ্য দিয়ে। আমি দেখেছি আপনাদের স্বপ্ন, উপলব্ধি করেছি আপনাদের সংগ্রাম। আর তাই, আমাদের এই যাত্রা কেবল একটি নির্বাচন জেতার জন্য নয়, এটি একটি পরিবর্তনের জন্য।
                        </p>
                        <div className="pl-4 border-l-4 border-primary space-y-2">
                            <p><strong>শুরুর গল্প:</strong> আমার যাত্রা শুরু হয় ফজলুল হক মুসলিম হলের বিতর্ক ক্লাব থেকে। সেখান থেকে আমি শিখেছি কীভাবে যুক্তি দিয়ে কথা বলতে হয় এবং ভিন্নমতকে সম্মান করতে হয়।</p>
                            <p><strong>মাঠের অভিজ্ঞতা:</strong> আমি শুধু এসি রুমে বসে পরিকল্পনা করিনি। আমি আপনাদের সাথে মাঠে ছিলাম, বিভিন্ন সেমিনার ও কর্মশালায় অংশ নিয়েছি এবং আপনাদের সমস্যাগুলো সরাসরি জেনেছি।</p>
                            <p><strong>প্রতিশ্রুতি থেকে কাজ:</strong> আমি শুধু প্রতিশ্রুতি দেইনি, কাজ করে দেখিয়েছি। শিক্ষক হিসেবে কাজ করার মাধ্যমে আমি আপনাদের শিক্ষাগত চাহিদাগুলো বুঝতে পেরেছি।</p>
                        </div>
                        <p className="font-semibold text-foreground pt-2">
                        এই যাত্রা আপনাদের বিশ্বাস আর ভালোবাসার ওপর ভিত্তি করে গড়ে উঠেছে। আমি জানি, আমার সামনে অনেক চ্যালেঞ্জ আছে, কিন্তু আপনাদের সমর্থন পেলে আমি সেই চ্যালেঞ্জগুলো অতিক্রম করতে পারব। আসুন, এই পরিবর্তনের যাত্রায় আমার সঙ্গী হন।
                        </p>
                    </div>
                </div>
              </section>
            </div>
        </section>

        <section id="team" className="py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আমার পথচলার সঙ্গীরা</h1>
            </div>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <Card key={index} className="text-center shadow-lg">
                            <Skeleton className="w-full aspect-square rounded-t-lg" />
                            <div className="p-4">
                                <Skeleton className="h-6 w-3/4 mx-auto" />
                                <Skeleton className="h-4 w-1/2 mx-auto mt-2" />
                            </div>
                        </Card>
                    ))
                ) : (
                    teamMembers.map((member) => (
                        <Card key={member.id} className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <CardContent className="p-0">
                                <div className="relative w-full aspect-square rounded-t-lg overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={member.hint}
                                    />
                                </div>
                                <div className="p-4">
                                    <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                                    <CardDescription className="font-body text-primary">{member.role}</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </section>

        <section id="full-panel" className="py-16 md:py-24 bg-card rounded-lg">
            <div className="text-center max-w-4xl mx-auto">
                <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আমাদের সম্পূর্ণ দল</h1>
                 <div className="w-24 h-1 bg-destructive mx-auto mt-2 mb-8"></div>
            </div>
             <div className="max-w-5xl mx-auto">
                 <Card className="shadow-2xl overflow-hidden">
                     <CardContent className="p-0">
                        <div className="relative w-full aspect-[16/9]">
                             <Image
                                src="https://i.postimg.cc/kXmRMQyY/image.png"
                                alt="স্বতন্ত্র শিক্ষার্থী ঐক্য - সম্পূর্ণ প্রার্থী দল"
                                fill
                                className="object-cover"
                                data-ai-hint="political team banner"
                             />
                        </div>
                     </CardContent>
                 </Card>
                  <div className="text-center mt-6">
                    <h3 className="font-headline text-2xl font-bold text-primary">স্বতন্ত্র শিক্ষার্থী ঐক্য - সম্পূর্ণ প্রার্থী দল</h3>
                    <p className="font-body text-muted-foreground mt-2 max-w-3xl mx-auto">
                        বিভিন্ন বিভাগ ও অনুষদের প্রতিনিধিত্বকারী আমাদের এই দল শিক্ষার্থীদের সার্বিক কল্যাণে প্রতিশ্রুতিবদ্ধ।
                    </p>
                </div>
             </div>
        </section>

      </div>
    </div>
  );
}
    

    
