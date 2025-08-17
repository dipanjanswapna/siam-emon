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
                Sonar Bangla Vision
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm">
              Building a brighter future for Bengal, together.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <Link href="/about" className="text-muted-foreground hover:text-primary font-body">About</Link>
            <Link href="/manifesto" className="text-muted-foreground hover:text-primary font-body">Manifesto</Link>
            <Link href="/get-involved" className="text-muted-foreground hover:text-primary font-body">Get Involved</Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground font-body">
          <p>&copy; {new Date().getFullYear()} Sonar Bangla Vision. All rights reserved.</p>
          <p className="mt-1">Paid for by the Committee to Elect Our Candidate.</p>
        </div>
      </div>
    </footer>
  );
}
