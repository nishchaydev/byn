import { NextResponse } from "next/server";
import { invoiceHTML } from "@/lib/templates/invoiceTemplate";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { invoice, project, format = "html" } = body;

    // Generate HTML
    const html = invoiceHTML({ invoice, project, company: {} });

    // If PDF requested and enabled
    if (format === "pdf" && process.env.ENABLE_PDF === "true") {
      // PDF generation temporarily disabled to fix build issues with chrome-aws-lambda
      return NextResponse.json({ html, message: "PDF generation disabled, returning HTML" });
    }

    return NextResponse.json({ html });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
