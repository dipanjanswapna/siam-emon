import Link from "next/link";
import { Facebook, Twitter, Instagram, Vote } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Vote className="h-8 w-8 text-primary" />
              <span className="text-xl font-headline font-bold text-primary">
                Seam Ferdous Emon
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm">
              একসাথে একটি উজ্জ্বল ভবিষ্যৎ গড়তে।
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-headline text-lg font-semibold">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <Link href="/about" className="text-muted-foreground hover:text-primary font-body">আমাদের সম্পর্কে</Link>
            <Link href="/manifesto" className="text-muted-foreground hover:text-primary font-body">ইশতেহার</Link>
            <Link href="/get-involved" className="text-muted-foreground hover:text-primary font-body">যুক্ত হোন</Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-headline text-lg font-semibold">আমাদের অনুসরণ করুন</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">ফেসবুক</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">টুইটার</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">ইনস্টাগ্রাম</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} Seam Ferdous Emon. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="mt-1">Paid for by the Committee to Elect Our Candidate.</p>
        </div>
      </div>
    </footer>
  );
}
