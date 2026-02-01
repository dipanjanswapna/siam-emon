
import Link from "next/link";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer 
        className="relative bg-card text-primary-foreground"
    >
        <div className="container relative mx-auto px-4 py-12 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
                
                {/* Column 1: About */}
                <div className="md:col-span-1">
                     <h3 className="text-2xl font-headline font-bold mb-4">
                        ডাঃ মনীষা চক্রবর্ত্তী
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-6">
                        বরিশাল-৫ আসনে শ্রমজীবী মানুষের অধিকার আদায়ের লক্ষ্যে গণতান্ত্রিক যুক্তফ্রন্ট সমর্থিত বাসদ মনোনীত প্রার্থী।
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="md:col-span-1">
                    <h3 className="font-headline text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
                    <ul className="space-y-2 font-body">
                        <li><Link href="/" className="hover:underline text-primary-foreground/80">হোম</Link></li>
                        <li><Link href="/about" className="hover:underline text-primary-foreground/80">সম্পর্কে</Link></li>
                        <li><Link href="/manifesto" className="hover:underline text-primary-foreground/80">ইশতেহার</Link></li>
                        <li><Link href="/news-updates" className="hover:underline text-primary-foreground/80">সংবাদ ও আপডেট</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline text-primary-foreground/80">গোপনীয়তা নীতি</Link></li>
                    </ul>
                </div>

                {/* Column 3: Get Involved & Subscribe */}
                <div className="md:col-span-1">
                     <h3 className="font-headline text-lg font-semibold mb-4">যুক্ত হোন</h3>
                     <ul className="space-y-2 font-body mb-6">
                        <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">যোগাযোগ করুন</Link></li>
                        <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">স্বেচ্ছাসেবক হন</Link></li>
                     </ul>
                    <h3 className="font-headline text-lg font-semibold mb-2">আপডেট পান!</h3>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input 
                            type="email" 
                            placeholder="আপনার ইমেইল" 
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background focus:text-foreground"
                        />
                        <Button type="submit" variant="accent">দিন</Button>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-body">
                <div className="text-primary-foreground/80 text-center md:text-left">
                    <span>© ২০২৪ সর্বস্বত্ব সংরক্ষিত | </span>
                    <Link href="/admin" className="hover:underline">ডাঃ মনীষা চক্রবর্ত্তী ক্যাম্পেইন</Link>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">ফেসবুক</span>
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">ইউটিউব</span>
                    </Link>
                    <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">ইনস্টাগ্রাম</span>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
