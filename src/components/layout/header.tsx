"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Vote } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "হোম" },
  { href: "/about", label: "সম্পর্কে" },
  { href: "/manifesto", label: "ইশতেহার" },
  { href: "/gallery", label: "গ্যালারি" },
  { href: "/transparency", label: "স্বচ্ছতা" },
  { href: "/get-involved", label: "যুক্ত হোন" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Vote className="h-8 w-8 text-primary" />
          <span className="text-xl font-headline font-bold text-primary">
            Seam Ferdous Emon
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-headline text-lg font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">নেভিগেশন মেনু খুলুন</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Vote className="h-8 w-8 text-primary" />
                  <span className="text-xl font-headline font-bold text-primary">
                    Seam Ferdous Emon
                  </span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "font-headline text-xl font-medium transition-colors hover:text-primary",
                      pathname === link.href ? "text-primary" : "text-muted-foreground"
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
