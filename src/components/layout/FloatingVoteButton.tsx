
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FloatingVoteButton() {
  return (
    <Link href="/#pre-vote" passHref className="fixed bottom-4 left-6 z-50">
      <Button
        variant="ghost"
        className="h-20 w-20 p-0 rounded-full animate-pulse"
        aria-label="সমর্থন জানান"
      >
        <Image
          src="https://i.postimg.cc/P5tTsbT9/moi-logo-white.png"
          alt="মই মার্কায় সমর্থন দিন"
          width={80}
          height={80}
          className="rounded-full object-contain bg-destructive p-2"
        />
      </Button>
    </Link>
  );
}
