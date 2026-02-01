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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
                src="https://i.postimg.cc/C5FPWXhs/Screenshot_2025-08-30_121415-Picsart-Ai-Image-Enhancer-removebg-preview.png"
                alt="সিয়াম ফেরদৌস ইমন Logo"
                width={32}
                height={32}
                className="h-8 w-8"
            />
            <span className="font-bold font-headline sm:inline-block">
              সিয়াম ফেরদৌস ইমন
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="hidden md:flex items-center gap-4">
                 <Button asChild variant="default" className="font-headline bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/get-involved">যুক্ত হোন</Link>
                </Button>
            </div>
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">নেভিগেশন মেনু খুলুন</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background">
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
                          "font-headline text-xl font-medium transition-colors hover:text-foreground/80",
                           pathname === link.href ? "text-foreground" : "text-foreground/60"
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
