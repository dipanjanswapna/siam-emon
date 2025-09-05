
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-primary/5">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto fade-in-up">
          <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">গোপনীয়তা নীতি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আপনার তথ্যের সুরক্ষা এবং গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি, তা জানতে এই নীতিটি পড়ুন।
          </p>
        </header>

        <main className="mt-12 max-w-4xl mx-auto">
          <Card className="shadow-lg fade-in-up" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-3 text-2xl"><FileText/>আমাদের গোপনীয়তা নীতি</CardTitle>
               <CardDescription>শেষ আপডেট: সেপ্টেম্বর ১, ২০২৫</CardDescription>
            </CardHeader>
            <CardContent className="font-body text-muted-foreground space-y-6">
                <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">ভূমিকা</h2>
                    <p>
                        এই ওয়েবসাইটটি (seamferdousemon.vercel.app) সিয়াম ফেরদৌস ইমনের নির্বাচনী প্রচারণার জন্য তৈরি করা হয়েছে। আমরা আপনার গোপনীয়তাকে সম্মান করি এবং আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ। এই নীতিটি ব্যাখ্যা করে যে আমরা কোন তথ্য সংগ্রহ করি এবং কীভাবে তা ব্যবহার করি।
                    </p>
                </section>
                <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">আমরা কোন তথ্য সংগ্রহ করি?</h2>
                    <p>
                        আমরা দুই ধরনের তথ্য সংগ্রহ করতে পারি:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <strong>ব্যক্তিগত তথ্য:</strong> যখন আপনি আমাদের 'মতামত দিন' বা 'স্বেচ্ছাসেবক' ফর্ম পূরণ করেন, তখন আমরা আপনার নাম, ইমেইল, ফোন নম্বর, বিভাগ, হল এবং শিক্ষাবর্ষের মতো তথ্য সংগ্রহ করতে পারি।
                        </li>
                        <li>
                            <strong>স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য:</strong> আপনি যখন আমাদের ওয়েবসাইট ভিজিট করেন, তখন আমরা আপনার আইপি অ্যাড্রেস, ব্রাউজারের ধরন, এবং ভিজিটের সময় போன்ற কিছু সাধারণ তথ্য সংগ্রহ করি। এই তথ্যগুলো গুগল অ্যানালিটিক্স-এর মাধ্যমে সংগ্রহ করা হয় এবং ওয়েবসাইটের পারফরম্যান্স উন্নত করতে ব্যবহৃত হয়।
                        </li>
                    </ul>
                </section>
                <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">কীভাবে আমরা আপনার তথ্য ব্যবহার করি?</h2>
                     <p>
                        আপনার প্রদান করা তথ্যগুলো নিম্নলিখিত উদ্দেশ্যে ব্যবহৃত হয়:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>আপনার মতামত, প্রশ্ন বা অভিযোগের জবাব দিতে।</li>
                        <li>আপনাকে নির্বাচনী প্রচারণার বিভিন্ন আপডেট এবং তথ্য জানাতে।</li>
                        <li>স্বেচ্ছাসেবক কার্যক্রম সমন্বয় করতে।</li>
                        <li>ওয়েবসাইটের ব্যবহার বিশ্লেষণ করে এর মান উন্নত করতে।</li>
                    </ul>
                </section>
                 <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">তথ্যের সুরক্ষা</h2>
                    <p>
                        আপনার তথ্যের সুরক্ষা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। আমরা আপনার তথ্য সুরক্ষিত রাখতে বিভিন্ন প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা গ্রহণ করেছি। তবে, ইন্টারনেটের মাধ্যমে তথ্য আদান-প্রদান ১০০% সুরক্ষিত নয়, তাই আমরা полной সুরক্ষার নিশ্চয়তা দিতে পারি না।
                    </p>
                </section>
                <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">তৃতীয় পক্ষের সাথে তথ্য শেয়ার</h2>
                    <p>
                       আমরা আপনার ব্যক্তিগত তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা শেয়ার করি না, যদি না আইনগতভাবে বাধ্য হই।
                    </p>
                </section>
                 <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">আপনার অধিকার</h2>
                    <p>
                       আপনার নিজের ব্যক্তিগত তথ্য দেখা, সংশোধন করা বা মুছে ফেলার অধিকার আপনার রয়েছে। এর জন্য, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
                    </p>
                </section>
                <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">নীতির পরিবর্তন</h2>
                    <p>
                        আমরা সময়ে সময়ে এই গোপনীয়তা নীতি পরিবর্তন করার অধিকার রাখি। যেকোনো পরিবর্তন এই পেজে প্রকাশ করা হবে।
                    </p>
                </section>
                 <section className="space-y-2">
                    <h2 className="font-headline text-xl font-bold text-foreground">যোগাযোগ</h2>
                    <p>
                        এই গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে <Link href="/get-involved" className="text-primary hover:underline">আমাদের সাথে যোগাযোগ করুন</Link>।
                    </p>
                </section>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
