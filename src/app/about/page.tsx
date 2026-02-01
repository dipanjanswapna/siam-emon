
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Briefcase, HeartHandshake, Users, UserCheck } from "lucide-react";
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
        
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                <div className="relative aspect-square w-full max-w-[300px] mx-auto">
                    <Image
                      src="https://i.postimg.cc/T1VgWhkG/image.png"
                      alt="ডাঃ মনীষা চক্রবর্ত্তী"
                      fill
                      className="rounded-lg object-cover shadow-lg"
                      data-ai-hint="politician portrait"
                    />
                </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">ডাঃ মনীষা চক্রবর্ত্তী</h1>
              <p className="font-body text-primary text-xl mt-2">বরিশাল-৫ আসনে বাসদ মনোনীত সংসদ সদস্য পদপ্রার্থী</p>
              <p className="font-body text-lg mt-4 text-muted-foreground">
                সাহসী ও প্রতিবাদী এক নারীর নাম মনীষা চক্রবর্তী। নারীর প্রতি সহিংসতা, সবধরনের নিপীড়ন ও বৈষম্যের বিরুদ্ধে তিনি এক অক্লান্ত যোদ্ধা। শুধু নারীদের অধিকার আদায়েই নয়, শ্রমজীবী মেহনতি মানুষের অধিকার আদায়ে তিনি সব সময়ই রাজপথে সোচ্চার ও অগ্রণী ভূমিকায়।
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto">
            <div className="mt-16 space-y-12">
              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  শিক্ষা ও বেড়ে ওঠা
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  ডাঃ মনীষা চক্রবর্ত্তীর জন্ম বরিশাল নগরীর শ্রীনাথ চ্যাটার্জী লেনের পৈত্রিক বাড়িতে। নগরীতেই তার বেড়ে ওঠা। অসংখ্য প্রগতিশীল মানুষের সান্নিধ্যে বেড়ে ওঠা ডাঃ মনীষার ছোটবেলা অতিবাহিত হয় ফুপা লেখক ও নিসর্গবিদ দ্বিজেন শর্মার সংস্পর্শে। বরিশাল শের-ই-বাংলা মেডিক্যাল কলেজ থেকে কৃতিত্বের সাথে তিনি এমবিবিএস পাস করেন। ৩৪তম বিসিএসে স্বাস্থ্য ক্যাডারে সহকারী সার্জন পদে নিয়োগ পেলেও তিনি তাতে যোগ দেননি।
                </p>
              </section>

              <section>
                <h3 className="font-headline text-3xl font-bold text-foreground flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-primary" />
                  রাজনৈতিক ও সামাজিক কার্যক্রম
                </h3>
                <p className="font-body text-lg mt-4 text-muted-foreground border-l-4 border-primary pl-4">
                  শের-ই-বাংলা মেডিক্যাল কলেজে পড়ার সময়ই তিনি বাংলাদেশ সমাজতান্ত্রিক দল (বাসদ)-এর রাজনীতির সাথে যুক্ত হন। তিনি বর্তমানে বাসদ বরিশাল জেলা শাখার সদস্য সচিব। রাজনীতিতে তার নয় বছরের পথচলায় নানা চড়াই-উতরাই পেরোতে হয়েছে। প্রতিবাদী কর্মকাণ্ডের কারণে হামলা, মামলা ও কারাভোগও করতে হয়েছে তাকে। বরিশাল নগরী থেকে ব্যাটারিচালিত রিকশা উচ্ছেদের প্রতিবাদে শ্রমিকদের সাথে আন্দোলনে নেমে তিনি গ্রেফতারও হয়েছিলেন।
                </p>
              </section>
              
               <section>
                 <h3 className="font-headline text-3xl font-bold text-foreground flex items-center justify-center gap-3 text-center">
                   <HeartHandshake className="w-8 h-8 text-primary" />
                   গরিবের ডাক্তার
                 </h3>
                 <div className="font-body text-lg mt-4 text-muted-foreground space-y-4 text-left">
                  <p>
                    ডাঃ মনীষা চক্রবর্তী সরকারী চাকরিতে যোগ না দিয়ে বিনা পয়সায় গরীব মানুষদের চিকিৎসা দিয়ে থাকেন। এ কারণে বরিশালের শ্রমিক ও বস্তিবাসীর কাছে তিনি ‘দিদি’ বা 'গরিবের ডাক্তার' নামে পরিচিত। ২০১৮ সালে বরিশাল সিটি করপোরেশন নির্বাচনে তিনি প্রথম নারী মেয়র প্রার্থী হিসেবে প্রতিদ্বন্দ্বিতা করেন। তার নির্বাচনী ব্যয় নির্বাহ হয়েছিল নগরীর খেটে খাওয়া দিনমজুরদের মাটির ব্যাংকে সঞ্চয় করা টাকায়।
                  </p>
                </div>
              </section>

             <section>
                <h3 className="font-headline text-3xl font-bold text-foreground text-center">কেন মনীষা চক্রবর্তী?</h3>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>তরুণ ও প্রগতিশীল রাজনৈতিক পরিবারের পরীক্ষিত সদস্য।</p></Card>
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>জনবান্ধব, গরীব ও শ্রমজীবী মানুষের অধিকার আদায়ে সর্বদা সোচ্চার।</p></Card>
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>মেধাবী, বুদ্ধিদীপ্ত এবং স্পষ্টভাষী একজন নেতা।</p></Card>
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>সংখ্যালঘু সম্প্রদায়ের প্রতিনিধি হিসেবে তাদের আত্মবিশ্বাস যোগাতে সক্ষম।</p></Card>
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>তারুণ্যের প্রতীক, যা তরুণদের ইতিবাচক রাজনীতিতে অনুপ্রাণিত করবে।</p></Card>
                    <Card className="p-6 bg-card"><UserCheck className="w-8 h-8 text-primary mb-2" /> <p>লুটপাটের রাজনীতির বিপরীতে গণমানুষের অর্থায়নে রাজনীতিতে বিশ্বাসী।</p></Card>
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
            </div>
        </section>

      </div>
    </div>
  );
}
