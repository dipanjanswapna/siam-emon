import Link from "next/link";
import { Facebook, Youtube, Instagram, Waves } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground rounded-t-2xl">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          
          {/* Logo and Subscribe */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Waves className="h-8 w-8" />
              <span className="text-2xl font-headline font-bold">
                মন তরঙ্গ
              </span>
            </Link>
            <p className="font-body text-sm text-primary-foreground/80 mb-6">
              বাংলাদেশের তরুণদের জন্য সহজলভ্য, গোপনীয় ও কলঙ্কহীন মানসিক স্বাস্থ্য সহায়তা প্ল্যাটফর্ম।
            </p>
            <h3 className="font-headline text-lg font-semibold mb-2">নতুন আপডেট পেতে সাবস্ক্রাইব করুন!</h3>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input 
                type="email" 
                placeholder="আপনার ইমেইল লিখুন" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background focus:text-foreground"
              />
              <Button type="submit" variant="accent" className="bg-lime-400 hover:bg-lime-500 text-black">সাবস্ক্রাইব</Button>
            </div>
          </div>

          {/* Spacer */}
          <div className="md:col-span-1"></div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">ফিচারসমূহ</h3>
              <ul className="space-y-2 font-body">
                <li><Link href="#" className="hover:underline text-primary-foreground/80">AI চ্যাট সহায়তা</Link></li>
                <li><Link href="#" className="hover:underline text-primary-foreground/80">মুড ট্র্যাকার</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">সেবাসমূহ</h3>
              <ul className="space-y-2 font-body">
                <li><Link href="#" className="hover:underline text-primary-foreground/80">রিলাক্সেশন এক্সারসাইজ</Link></li>
                <li><Link href="#" className="hover:underline text-primary-foreground/80">সেলফ অ্যাসেসমেন্ট</Link></li>
                <li><Link href="#" className="hover:underline text-primary-foreground/80">পিয়ার কমিউনিটি</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">অন্যান্য</h3>
              <ul className="space-y-2 font-body">
                <li><Link href="/about" className="hover:underline text-primary-foreground/80">আমাদের সম্পর্কে</Link></li>
                <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">যোগাযোগ করুন</Link></li>
                <li><Link href="#" className="hover:underline text-primary-foreground/80">প্রশ্ন ও উত্তর</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-body">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">
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
          <div className="flex gap-4 text-primary-foreground/80">
            <Link href="#" className="hover:underline">শর্তাবলী</Link>
            <Link href="#" className="hover:underline">গোপনীয়তা নীতি</Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
