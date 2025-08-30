
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FloatingVoteButton() {
  return (
    <Link href="/#pre-vote" passHref>
      <div className="fixed bottom-24 right-6 z-50 animate-pulse">
        <Button
          variant="ghost"
          className="h-16 w-16 p-0 rounded-full shadow-lg"
          aria-label="প্রি-ভোটে অংশ নিন"
        >
          <Image
            src="https://i.postimg.cc/C5FPWXhs/Screenshot-2025-08-30-121415-Picsart-Ai-Image-Enhancer-removebg-preview.png"
            alt="প্রি-ভোট দিন"
            width={64}
            height={64}
            className="rounded-full object-contain"
          />
        </Button>
      </div>
    </Link>
  );
}
