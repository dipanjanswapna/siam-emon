
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "সম্পর্কে" },
  { href: "/manifesto", label: "ইশতেহার" },
  { href: "/gallery", label: "গ্যালারি" },
  { href: "/news-updates", label: "সংবাদ" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-destructive text-destructive-foreground shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
           <Link href="/" className="flex items-center gap-2">
              <Image src="https://i.postimg.cc/pX05kCjD/moi-logo.png" alt="মই প্রতীক" width={32} height={32} />
              <span className="font-bold font-headline text-lg sm:text-xl">
                ডাঃ মনীষা চক্রবর্ত্তী
              </span>
          </Link>
        </div>
        
        <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10",
                    pathname === link.href ? "bg-white/20 font-semibold" : "text-destructive-foreground/80"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center pl-4">
                 <Button asChild variant="outline" className="font-headline border-white/50 text-white hover:bg-white/10 hover:text-white">
                    <Link href="/get-involved">যুক্ত হোন</Link>
                </Button>
            </div>

            {/* Mobile Navigation Trigger */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="hover:bg-white/10">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">নেভিগেশন মেনু খুলুন</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-destructive text-destructive-foreground border-l-0">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 mb-4">
                       <Image src="https://i.postimg.cc/pX05kCjD/moi-logo.png" alt="মই প্রতীক" width={32} height={32} />
                      <span className="text-xl font-headline font-bold">
                        ডাঃ মনীষা চক্রবর্ত্তী
                      </span>
                    </Link>
                    {[...navLinks, { href: "/get-involved", label: "যুক্ত হোন" }].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "font-headline text-2xl font-medium transition-colors hover:text-destructive-foreground",
                           pathname === link.href ? "text-destructive-foreground" : "text-destructive-foreground/70"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
