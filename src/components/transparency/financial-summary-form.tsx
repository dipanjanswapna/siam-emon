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
    message: "Please enter a more detailed description of the financial assets (at least 50 characters).",
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
          title: "An error occurred",
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
                <FormLabel className="font-headline text-lg">Declared Financial Assets</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Paste the full text of the candidate's declared financial assets here..."
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
                Analyzing...
              </>
            ) : (
                <>
                 <Sparkles className="mr-2 h-4 w-4" />
                 Generate Summary
                </>
            )}
          </Button>
        </form>
      </Form>

      {isPending && (
         <Card className="bg-primary/5 animate-pulse">
            <CardHeader>
                <CardTitle className="font-headline">Generating Summary...</CardTitle>
                <CardDescription>Our AI is analyzing the document. This may take a moment.</CardDescription>
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
            <CardTitle className="font-headline flex items-center gap-2"><Sparkles className="w-6 h-6 text-accent"/> AI-Generated Summary</CardTitle>
            <CardDescription className="font-body">This is a concise overview of the provided financial assets.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="font-body whitespace-pre-wrap">{summary}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
