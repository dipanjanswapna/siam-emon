
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function VoterSearchPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="shadow-lg max-w-5xl mx-auto">
             <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl md:text-5xl">ভোটার অনুসন্ধান</CardTitle>
                 <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                   সৌজন্যে: ঢাকা বিশ্ববিদ্যালয় আইসিটি সেল
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="border rounded-lg overflow-hidden">
                    <iframe
                        src="https://ducsu.du.ac.bd/voter.php"
                        className="w-full h-[80vh]"
                        title="DUCSU Voter Search"
                    ></iframe>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
