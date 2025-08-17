"use server";

import { summarizeFinancialAssets, SummarizeFinancialAssetsOutput } from "@/ai/flows/summarize-financial-assets";
import { z } from "zod";

const formSchema = z.object({
  financialAssets: z.string(),
});

type FormState = {
  success: boolean;
  data: SummarizeFinancialAssetsOutput | null;
  error: string | null;
};

export async function summarizeAssetsAction(
  values: z.infer<typeof formSchema>
): Promise<FormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      data: null,
      error: "Invalid input.",
    };
  }

  try {
    const result = await summarizeFinancialAssets(validatedFields.data);
    return {
      success: true,
      data: result,
      error: null,
    };
  } catch (error) {
    console.error("Error in summarizeFinancialAssets:", error);
    return {
      success: false,
      data: null,
      error: "Failed to generate summary. Please try again later.",
    };
  }
}
