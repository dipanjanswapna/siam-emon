
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Vote } from "lucide-react";

export default function VoterRegistrationPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Card className="shadow-lg max-w-5xl mx-auto">
             <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl md:text-5xl">ভোটার রেজিস্ট্রেশন</CardTitle>
                 <CardDescription className="font-body text-lg mt-2 text-muted-foreground">
                   আপনার ভোট প্রদানের জন্য প্রয়োজনীয় তথ্য ও লিঙ্ক।
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
                <p className="text-muted-foreground">জাতীয় পরিচয়পত্র এবং ভোটার তালিকা সংক্রান্ত তথ্যের জন্য বাংলাদেশ নির্বাচন কমিশনের ওয়েবসাইটে ভিজিট করুন।</p>
                <Button asChild size="lg">
                    <Link href="https://services.nidw.gov.bd/nid-portal/" target="_blank" rel="noopener noreferrer">
                        <Vote className="mr-2 h-5 w-5" />
                        ভোটার তথ্য দেখুন
                    </Link>
                </Button>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
