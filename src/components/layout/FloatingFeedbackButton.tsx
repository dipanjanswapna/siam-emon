import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

export function FloatingFeedbackButton() {
  return (
    <Link href="/get-involved" passHref>
      <Button
        variant="destructive"
        className="fixed bottom-8 right-8 h-16 w-auto px-6 rounded-full shadow-lg z-50 animate-pulse flex items-center gap-3"
      >
        <MessageSquarePlus className="h-6 w-6" />
        <span className="text-lg font-headline">মতামত দিন!</span>
      </Button>
    </Link>
  );
}
