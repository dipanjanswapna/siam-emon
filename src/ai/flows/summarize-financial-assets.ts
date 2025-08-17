// Summarizes financial assets declared by a candidate to allow comparison to other candidates.

'use server';

/**
 * @fileOverview Summarizes financial assets declared by a candidate.
 *
 * - summarizeFinancialAssets - A function that handles the summarization of financial assets.
 * - SummarizeFinancialAssetsInput - The input type for the summarizeFinancialAssets function.
 * - SummarizeFinancialAssetsOutput - The return type for the summarizeFinancialAssets function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFinancialAssetsInputSchema = z.object({
  financialAssets: z
    .string()
    .describe(
      'A detailed description of the financial assets declared by the candidate.'
    ),
});
export type SummarizeFinancialAssetsInput = z.infer<
  typeof SummarizeFinancialAssetsInputSchema
>;

const SummarizeFinancialAssetsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the candidate\'s declared financial assets, highlighting key holdings and potential conflicts of interest.'
    ),
});
export type SummarizeFinancialAssetsOutput = z.infer<
  typeof SummarizeFinancialAssetsOutputSchema
>;

export async function summarizeFinancialAssets(
  input: SummarizeFinancialAssetsInput
): Promise<SummarizeFinancialAssetsOutput> {
  return summarizeFinancialAssetsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFinancialAssetsPrompt',
  input: {schema: SummarizeFinancialAssetsInputSchema},
  output: {schema: SummarizeFinancialAssetsOutputSchema},
  prompt: `You are an AI expert in finance and government ethics.  A voter has asked you to summarize the following financial disclosure statement from a candidate for public office.  Focus on readability, brevity, and potential conflicts of interest.  Be direct and to-the-point.

Financial assets: {{{financialAssets}}}`,
});

const summarizeFinancialAssetsFlow = ai.defineFlow(
  {
    name: 'summarizeFinancialAssetsFlow',
    inputSchema: SummarizeFinancialAssetsInputSchema,
    outputSchema: SummarizeFinancialAssetsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
