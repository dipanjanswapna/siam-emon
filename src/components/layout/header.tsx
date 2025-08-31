"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Vote } from "lucide-react";

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
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 p-2 md:p-3">
      <div className="container mx-auto flex h-16 items-center justify-between rounded-full bg-primary/95 px-4 text-primary-foreground shadow-lg backdrop-blur-sm md:px-6">
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
                "font-headline text-md font-medium transition-colors hover:bg-primary-foreground/10 rounded-full px-4 py-2",
                pathname === link.href ? "bg-primary-foreground text-primary" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
             <Button asChild variant="secondary" className="font-headline bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link href="/get-involved">যুক্ত হোন</Link>
            </Button>
        </div>


        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">নেভিগেশন মেনু খুলুন</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-primary text-primary-foreground rounded-t-2xl h-auto">
              <div className="flex flex-col items-center gap-6 p-6 text-center">
                <Link href="/" className="flex items-center gap-2 mb-4">
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
                    className={cn(
                      "font-headline text-xl font-medium transition-colors hover:text-primary-foreground/80",
                      pathname === link.href ? "text-primary-foreground" : "text-primary-foreground/60"
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
