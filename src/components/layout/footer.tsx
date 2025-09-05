
import Link from "next/link";
import { Facebook, Youtube, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer 
        className="relative bg-cover bg-center text-primary-foreground"
        style={{backgroundImage: "url('https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/538503858_122111516048974856_6103506213782870717_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=6Azx0wn-u9sQ7kNvwH-a51s&_nc_oc=AdmIhE8e2BtqgiWHqySuE8P5pFBxyttKCYS2r_11wxUxzeZush9t8cYC-RldeETgKCs&_nc_zt=23&_nc_ht=scontent.fdac138-2.fna&_nc_gid=fl8n0zl0ssM3uRWrln72xQ&oh=00_Afa4xnttrOOinBABNyqFfrX5aYXeZx8HF6y1Jo8zJmHf1w&oe=68C05425')"}}
    >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative mx-auto px-4 py-12 md:px-6">
            <div className="grid gap-12 md:grid-cols-3">
                
                {/* Column 1: About */}
                <div className="md:col-span-1">
                     <h3 className="text-2xl font-headline font-bold mb-4">
                        সিয়াম ফেরদৌস ইমন
                    </h3>
                    <p className="font-body text-sm text-primary-foreground/80 mb-6">
                        ঢাকা বিশ্ববিদ্যালয়ের ছাত্রসমাজের অধিকার ও গবেষণার সুযোগ নিশ্চিত করতে আমি অঙ্গীকারবদ্ধ। একটি উন্নত, সমৃদ্ধ এবং অন্তর্ভুক্তিমূলক ভবিষ্যতের জন্য আমাদের সাথে যোগ দিন।
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="md:col-span-1">
                    <h3 className="font-headline text-lg font-semibold mb-4">গুরুত্বপূর্ণ লিঙ্ক</h3>
                    <ul className="space-y-2 font-body">
                        <li><Link href="/" className="hover:underline text-primary-foreground/80">হোম</Link></li>
                        <li><Link href="/about" className="hover:underline text-primary-foreground/80">আমাদের সম্পর্কে</Link></li>
                        <li><Link href="/manifesto" className="hover:underline text-primary-foreground/80">ইশতেহার</Link></li>
                        <li><Link href="/transparency" className="hover:underline text-primary-foreground/80">স্বচ্ছতা</Link></li>
                        <li><Link href="/voting-guide" className="hover:underline text-primary-foreground/80">ভোট প্রদান নির্দেশিকা</Link></li>
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
                    <Link href="/admin" className="hover:underline">সিয়াম ফেরদৌস ইমন ক্যাম্পেইন</Link>
                    <span> | </span>
                    <Link href="https://www.facebook.com/dipanjanswapna2/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Developed by <span className="text-yellow-400 font-bold inline-block hover:animate-bounce">PRANGONS ECOSYSTEM</span>
                    </Link>
                </div>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <Link href="https://www.facebook.com/siam.emon.52" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground">
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
