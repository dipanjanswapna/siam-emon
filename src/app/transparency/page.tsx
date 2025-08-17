import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Scale } from "lucide-react";
import FinancialSummaryForm from "@/components/transparency/financial-summary-form";

export default function TransparencyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Scale className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">স্বচ্ছতার প্রতি আমাদের অঙ্গীকার</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমরা বিশ্বাস করি যে জনসাধারণের আস্থা খোলামেলা এবং সততার মাধ্যমে অর্জিত হয়। এই পৃষ্ঠাটি আর্থিক স্বচ্ছতার জন্য নিবেদিত, ভোটারদের আমাদের প্রার্থীর আর্থিক অবস্থা এবং আমাদের প্রচারণার তহবিল সম্পর্কে স্পষ্ট, বোধগম্য তথ্য প্রদান করে।
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline">প্রার্থীর আর্থিক সারসংক্ষেপ</CardTitle>
                        <CardDescription className="font-body">একজন প্রার্থীর ঘোষিত আর্থিক সম্পদের একটি সহজ সারসংক্ষেপ পেতে আমাদের AI-চালিত টুল ব্যবহার করুন। নীচে প্রকাশের সম্পূর্ণ পাঠ্যটি আটকান।</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FinancialSummaryForm />
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <Card className="shadow-lg h-full bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3"><Handshake className="w-6 h-6 text-primary" /> এটি কেন গুরুত্বপূর্ণ</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-4">
                        <p>আর্থিক প্রকাশগুলি প্রায়শই দীর্ঘ, জটিল আইনি নথি যা সাধারণ ভোটারের পক্ষে বোঝা কঠিন।</p>
                        <p>এই টুলটি জেনারেটরি এআই ব্যবহার করে পাঠ্য বিশ্লেষণ করে এবং একটি সারসংক্ষেপ প্রদান করে যা মূল হোল্ডিং এবং সম্ভাব্য স্বার্থের দ্বন্দ্ব তুলে ধরে, যা আপনার জন্য একটি জ্ঞাত সিদ্ধান্ত নেওয়া সহজ করে তোলে।</p>
                        <p className="text-sm italic">দ্রষ্টব্য: এটি একটি AI-উত্পন্ন সারসংক্ষেপ এবং তথ্যগত উদ্দেশ্যে ব্যবহার করা উচিত। অফিসিয়াল তথ্যের জন্য অনুগ্রহ করে মূল নথিগুলি দেখুন।</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
