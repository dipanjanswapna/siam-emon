"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { summarizeAssetsAction } from "@/app/transparency/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  financialAssets: z.string().min(50, {
    message: "অনুগ্রহ করে আর্থিক সম্পদের আরও বিস্তারিত বিবরণ লিখুন (কমপক্ষে ৫০ অক্ষর)।",
  }),
});

export default function FinancialSummaryForm() {
  const [isPending, startTransition] = useTransition();
  const [summary, setSummary] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      financialAssets: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSummary(null);
    startTransition(async () => {
      const result = await summarizeAssetsAction(values);
      if (result.success && result.data) {
        setSummary(result.data.summary);
      } else {
        toast({
          variant: "destructive",
          title: "একটি ত্রুটি ঘটেছে",
          description: result.error,
        });
      }
    });
  }

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="financialAssets"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline text-lg">ঘোষিত আর্থিক সম্পদ</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="প্রার্থীর ঘোষিত আর্থিক সম্পদের সম্পূর্ণ লেখাটি এখানে পেস্ট করুন..."
                    rows={10}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending} className="font-headline text-lg">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                বিশ্লেষণ করা হচ্ছে...
              </>
            ) : (
                <>
                 <Sparkles className="mr-2 h-4 w-4" />
                 সারসংক্ষেপ তৈরি করুন
                </>
            )}
          </Button>
        </form>
      </Form>

      {isPending && (
         <Card className="bg-primary/5 animate-pulse">
            <CardHeader>
                <CardTitle className="font-headline">সারসংক্ষেপ তৈরি করা হচ্ছে...</CardTitle>
                <CardDescription>আমাদের AI ডকুমেন্ট বিশ্লেষণ করছে। এতে কিছুক্ষণ সময় লাগতে পারে।</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="h-4 bg-muted rounded-full w-full"></div>
                <div className="h-4 bg-muted rounded-full w-5/6"></div>
                <div className="h-4 bg-muted rounded-full w-3/4"></div>
            </CardContent>
         </Card>
      )}

      {summary && (
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Sparkles className="w-6 h-6 text-accent"/> AI দ্বারা তৈরি সারসংক্ষেপ</CardTitle>
            <CardDescription className="font-body">এটি প্রদত্ত আর্থিক সম্পদের একটি সংক্ষিপ্ত বিবরণ।</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-body whitespace-pre-wrap">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
