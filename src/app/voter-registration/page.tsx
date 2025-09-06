
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vote } from "lucide-react";

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

        <Card className="shadow-lg max-w-5xl mx-auto mt-12 bg-primary/5">
            <CardHeader>
                <CardTitle className="text-center font-headline text-3xl text-foreground">ভোট দেওয়ার নিয়ম জানেন তো?</CardTitle>
                <CardDescription className="text-center font-body text-muted-foreground mt-2">
                    আপনার মূল্যবান ভোট সঠিকভাবে প্রদান করতে আমাদের সহজ নির্দেশিকাটি দেখুন।
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild size="lg" className="font-headline">
                    <Link href="/voting-guide">
                        <Vote className="mr-2 h-5 w-5" />
                        ভোট প্রদান নির্দেশিকা দেখুন
                    </Link>
                </Button>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
