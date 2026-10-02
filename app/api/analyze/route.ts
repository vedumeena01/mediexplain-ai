import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const language = (formData.get("language") as string) || "en";

    if (!file) {
      return NextResponse.json({ error: "No report file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64Data = Buffer.from(bytes).toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Analyze this medical lab report image.
Extract:
1. Patient name, date, test panel name
2. Extracted biomarker values, units, reference intervals, and status (Normal, Elevated, Low)
3. Plain language patient-friendly summary in ${language === "hi" ? "Hindi (Devanagari)" : "English"}.
4. Potential risk indicators (Cardiovascular, Glycemic, Hepatic).
Return structured JSON.`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: file.type || "image/jpeg",
        },
      },
    ]);

    const responseText = result.response.text();
    return NextResponse.json({ success: true, analysis: responseText });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to analyze report" }, { status: 500 });
  }
}
