import Link from "next/link";
import { Facebook, Youtube, Instagram, Vote } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground rounded-t-2xl">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          
          {/* Logo and Subscribe */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Vote className="h-8 w-8" />
              <span className="text-2xl font-headline font-bold">
                Seam Ferdous Emon
              </span>
            </Link>
            <p className="font-body text-sm text-primary-foreground/80 mb-6">
              একটি উন্নত, সমৃদ্ধ এবং অন্তর্ভুক্তিমূলক ভবিষ্যতের জন্য আমাদের সাথে যোগ দিন।
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-1 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">দ্রুত লিঙ্ক</h3>
              <ul className="space-y-2 font-body">
                <li><Link href="/" className="hover:underline text-primary-foreground/80">হোম</Link></li>
                <li><Link href="/about" className="hover:underline text-primary-foreground/80">আমাদের সম্পর্কে</Link></li>
                <li><Link href="/manifesto" className="hover:underline text-primary-foreground/80">ইশতেহার</Link></li>
                <li><Link href="/gallery" className="hover:underline text-primary-foreground/80">গ্যালারি</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-lg font-semibold mb-4">যুক্ত হোন</h3>
              <ul className="space-y-2 font-body">
                <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">যোগাযোগ করুন</Link></li>
                <li><Link href="/transparency" className="hover:underline text-primary-foreground/80">স্বচ্ছতা</Link></li>
                 <li>
                  <h3 className="font-headline text-lg font-semibold mt-4 mb-2">আপডেট পান!</h3>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input 
                      type="email" 
                      placeholder="আপনার ইমেইল" 
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-background focus:text-foreground"
                    />
                    <Button type="submit" variant="accent" size="sm" className="bg-lime-400 hover:bg-lime-500 text-black">দিন</Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm font-body">
           <div className="flex items-center gap-4 text-primary-foreground/80 text-center md:text-left">
              <span>© ২০২৪ সর্বস্বত্ব সংরক্ষিত</span>
              <Image 
                src="https://i.postimg.cc/KvkZtjtq/Screenshot-2025-08-18-191039-removebg-preview.png" 
                alt="Footer Logo"
                width={40}
                height={40}
                className="object-contain"
                />
              <Link href="/admin" className="hover:underline">সিয়াম ফেরদৌস ইমন ক্যাম্পেইন</Link>
           </div>
          <div className="flex gap-4 mt-4 md:mt-0">
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
        </div>
        
      </div>
    </footer>
  );
}
