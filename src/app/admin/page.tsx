
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="text-center max-w-4xl mx-auto">
          <Shield className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">অ্যাডমিন প্যানেল</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            ওয়েবসাইট পরিচালনার জন্য অ্যাডমিন প্যানেলে স্বাগতম।
          </p>
        </header>

        <main className="mt-16">
            <Card>
                <CardHeader>
                    <CardTitle>সাইট পরিচালনা</CardTitle>
                    <CardDescription>এখান থেকে ওয়েবসাইটের বিভিন্ন অংশ পরিচালনা করুন।</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>এখানে বিভিন্ন অ্যাডমিন টুলস এবং অপশন যুক্ত করা হবে।</p>
                </CardContent>
            </Card>
        </main>

      </div>
    </div>
  );
}
