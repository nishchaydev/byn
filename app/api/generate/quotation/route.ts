import { NextResponse } from "next/server";

interface QuotationItem {
  description: string;
  amount: number;
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { clientName, projectTitle, items } = data as { clientName: string; projectTitle: string; items: QuotationItem[] };

    // Calculate total
    const total = items.reduce((sum: number, item: QuotationItem) => sum + item.amount, 0);

    // Generate HTML
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Quotation - ${projectTitle}</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; }
          .container { max-width: 800px; mx-auto; padding: 40px; }
          .header { display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 2px solid #3A8DFF; padding-bottom: 20px; }
          .logo { font-size: 24px; font-weight: bold; color: #3A8DFF; }
          .title { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
          .meta { margin-bottom: 40px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          th { text-align: left; padding: 12px; border-bottom: 1px solid #ddd; color: #666; }
          td { padding: 12px; border-bottom: 1px solid #eee; }
          .total { text-align: right; font-size: 24px; font-weight: bold; color: #3A8DFF; }
          .footer { margin-top: 60px; font-size: 12px; color: #999; text-align: center; border-top: 1px solid #eee; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="logo">BYN AGENCY</div>
            <div style="text-align: right;">
              <div>Date: ${new Date().toLocaleDateString()}</div>
              <div>Ref: QT-${Math.floor(Math.random() * 10000)}</div>
            </div>
          </div>
          
          <div class="meta">
            <div class="title">Quotation</div>
            <div><strong>Client:</strong> ${clientName}</div>
            <div><strong>Project:</strong> ${projectTitle}</div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th style="text-align: right;">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${items.map((item: QuotationItem) => `
                <tr>
                  <td>${item.description}</td>
                  <td style="text-align: right;">$${item.amount.toLocaleString()}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <div class="total">
            Total: $${total.toLocaleString()}
          </div>

          <div class="footer">
            <p>Thank you for your business. This quotation is valid for 30 days.</p>
            <p>BYN Agency | create.connect.conquer</p>
          </div>
        </div>
        <script>window.print();</script>
      </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Quotation generation error:", error);
    return new NextResponse("Error generating quotation", { status: 500 });
  }
}
