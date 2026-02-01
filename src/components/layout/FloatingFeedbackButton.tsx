
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

export function FloatingFeedbackButton() {
  return (
    <Link href="/#feedback-form" passHref>
      <Button
        variant="accent"
        className="fixed bottom-6 right-6 h-14 w-auto px-5 rounded-full shadow-lg z-50 animate-pulse flex items-center gap-2"
      >
        <MessageSquarePlus className="h-5 w-5" />
        <span className="text-base font-headline">মতামত দিন!</span>
      </Button>
    </Link>
  );
}
