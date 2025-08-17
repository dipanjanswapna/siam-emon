import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, Scale } from "lucide-react";
import FinancialSummaryForm from "@/components/transparency/financial-summary-form";

export default function TransparencyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Scale className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-5xl md:text-6xl font-bold mt-4 text-foreground">Our Commitment to Transparency</h1>
          <p className="font-body text-lg mt-4 text-muted-foreground">
            We believe that public trust is earned through openness and honesty. This page is dedicated to financial transparency, providing voters with clear, understandable information about our candidate's financial standing and our campaign's funding.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline">Candidate Financial Summary</CardTitle>
                        <CardDescription className="font-body">Use our AI-powered tool to get a simple summary of a candidate's declared financial assets. Paste the full text of the disclosure below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FinancialSummaryForm />
                    </CardContent>
                </Card>
            </div>
            <div className="lg:col-span-2">
                <Card className="shadow-lg h-full bg-primary/5">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3"><Handshake className="w-6 h-6 text-primary" /> Why This Matters</CardTitle>
                    </CardHeader>
                    <CardContent className="font-body text-muted-foreground space-y-4">
                        <p>Financial disclosures are often long, complex legal documents that are difficult for the average voter to understand. </p>
                        <p>This tool uses Generative AI to analyze the text and provide a summary that highlights key holdings and potential conflicts of interest, making it easier for you to make an informed decision.</p>
                        <p className="text-sm italic">Note: This is an AI-generated summary and should be used for informational purposes. Please refer to the original documents for official information.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
