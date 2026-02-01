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
  { href: "/transparency", label: "স্বচ্ছতা" },
  { href: "/voter-registration", label: "ভোটার অনুসন্ধান" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-foreground text-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
           <Image
                src="https://i.postimg.cc/C5FPWXhs/Screenshot_2025-08-30_121415-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                alt="সিয়াম ফেরদৌস ইমন Logo"
                width={32}
                height={32}
                className="h-8 w-8"
            />
          <span className="text-xl font-headline font-bold">
            সিয়াম ফেরদৌস ইমন
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-headline text-md font-medium transition-colors hover:text-background px-4 py-2",
                pathname === link.href ? "text-accent" : "text-background/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
             <Button asChild variant="outline" className="font-headline border-background/50 text-background/80 hover:bg-background hover:text-foreground">
                <Link href="/get-involved">যুক্ত হোন</Link>
            </Button>
        </div>


        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-background/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">নেভিগেশন মেনু খুলুন</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-foreground text-background p-0 w-3/4">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 mb-4">
                  <Image
                      src="https://i.postimg.cc/C5FPWXhs/Screenshot_2025-08-30_121415-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                      alt="সিয়াম ফেরদৌস ইমন Logo"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                  />
                  <span className="text-xl font-headline font-bold">
                    সিয়াম ফেরদৌস ইমন
                  </span>
                </Link>
                {[...navLinks, { href: "/get-involved", label: "যুক্ত হোন" }].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "font-headline text-xl font-medium transition-colors hover:text-background",
                      pathname === link.href ? "text-accent" : "text-background/70"
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
    </header>
  );
}
