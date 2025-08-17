import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ListTodo, Target } from "lucide-react";

const manifestoPledges = [
  {
    category: "অর্থনৈতিক উন্নয়ন",
    pledges: [
      { title: "৫০,০০০ নতুন প্রযুক্তি চাকরি তৈরি", status: "চলছে", progress: 40, description: "প্রযুক্তি সংস্থাগুলির সাথে অংশীদারিত্ব এবং উদ্ভাবন কেন্দ্র স্থাপন।" },
      { title: "ক্ষুদ্র ও মাঝারি উদ্যোগের জন্য সমর্থন", status: "চলছে", progress: 60, description: "স্বল্প সুদে ঋণ কর্মসূচি চালু করা হয়েছে এবং আমলাতান্ত্রিক বাধা হ্রাস করা হয়েছে।" },
    ]
  },
  {
    category: "শিক্ষা",
    pledges: [
      { title: "১০০টি নতুন 'স্মার্ট' স্কুল নির্মাণ", status: "সম্পন্ন", progress: 100, description: "সব ১০০টি স্কুল এখন ডিজিটাল ক্লাসরুম সহ চালু আছে।" },
      { title: "সেরা ১০% ছাত্রদের জন্য বিনামূল্যে বিশ্ববিদ্যালয় শিক্ষা", status: "চলছে", progress: 75, description: "বৃত্তি তহবিল প্রতিষ্ঠিত হয়েছে এবং আবেদনপত্র প্রক্রিয়া করা হচ্ছে।" },
      { title: "উচ্চ বিদ্যালয়ে বৃত্তিমূলক প্রশিক্ষণ চালু", status: "শুরু হয়নি", progress: 0, description: "পাঠ্যক্রম উন্নয়ন চলছে।" },
    ]
  },
  {
    category: "স্বাস্থ্যসেবা",
    pledges: [
      { title: "সমস্ত জেলা হাসপাতাল আধুনিকীকরণ", status: "চলছে", progress: 50, description: "অর্ধেক জেলায় আপগ্রেড সম্পন্ন হয়েছে, বাকিগুলিতে কাজ চলছে।" },
      { title: "প্রতিটি গ্রামে বিশুদ্ধ পানীয় জল নিশ্চিত করা", status: "চলছে", progress: 85, description: "অধিকাংশ অঞ্চলে নতুন জল শোধনাগার চালু আছে।" },
    ]
  },
  {
    category: "অবকাঠামো ও পরিবেশ",
    pledges: [
      { title: "১,০০০ কিমি গ্রামীণ রাস্তা মেরামত", status: "সম্পন্ন", progress: 100, description: "প্রকল্পটি নির্ধারিত সময়ের আগে শেষ হয়েছে, সংযোগ উন্নত হয়েছে।" },
      { title: "১ মিলিয়ন গাছ লাগানো", status: "চলছে", progress: 90, description: "একটি বিশাল সরকারি-বেসরকারি অংশীদারিত্বের ফলে প্রায় ৯০০,০০০ গাছ লাগানো হয়েছে।" },
    ]
  },
];

export default function ManifestoPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <ListTodo className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">আমাদের পরিকল্পনা ও অগ্রগতি</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            আমরা স্বচ্ছতা এবং জবাবদিহিতায় বিশ্বাস করি। এখানে একটি উন্নত বাংলার জন্য আমাদের বিস্তারিত পরিকল্পনা এবং মূল প্রতিশ্রুতিগুলির উপর আমাদের অগ্রগতির একটি লাইভ ট্র্যাকার রয়েছে। এই বিভাগটি নির্বাচন-পরবর্তী দায়িত্বের প্রতি আমাদের প্রতিশ্রুতি দেখানোর জন্য একটি স্থানধারক।
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {manifestoPledges.map((category) => (
            <Card key={category.category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-3xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.pledges.map((pledge) => (
                  <div key={pledge.title}>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-headline text-xl font-semibold">{pledge.title}</h4>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        {pledge.progress === 100 ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        ) : (
                          <Target className="w-5 h-5 text-accent" />
                        )}
                        <span className={pledge.progress === 100 ? "text-green-500" : "text-accent"}>
                          {pledge.status}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-muted-foreground mb-2">{pledge.description}</p>
                    <Progress value={pledge.progress} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
