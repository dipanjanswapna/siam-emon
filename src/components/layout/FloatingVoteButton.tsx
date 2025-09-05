
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FloatingVoteButton() {
  return (
    <Link href="/#pre-vote" passHref className="fixed bottom-24 left-6 z-50">
      <Button
        variant="ghost"
        className="h-20 w-20 p-0 rounded-full"
        aria-label="প্রি-ভোটে অংশ নিন"
      >
        <Image
          src="https://i.postimg.cc/C5FPWXhs/Screenshot_2025-08-30_121415-Picsart-Ai-Image-Enhancer-removebg-preview.png"
          alt="প্রি-ভোট দিন"
          width={80}
          height={80}
          className="rounded-full object-contain"
        />
      </Button>
    </Link>
  );
}

