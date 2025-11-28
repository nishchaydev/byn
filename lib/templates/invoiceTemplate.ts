export function invoiceHTML({ invoice, project, company }: any) {
    return `
  <html>
  <head>
    <style>
      body{font-family:Inter,Arial;color:#111;background:white;padding:40px;max-width:800px;margin:0 auto;}
      .header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:40px;}
      .brand{font-size:24px;font-weight:bold;color:#000;}
      .meta{text-align:right;color:#666;font-size:14px;}
      table{width:100%;border-collapse:collapse;margin-top:30px;margin-bottom:30px;}
      th{text-align:left;padding:12px 8px;border-bottom:2px solid #eee;font-weight:600;color:#444;}
      td{padding:12px 8px;border-bottom:1px solid #eee;}
      .total-row{font-weight:bold;font-size:18px;}
      .footer{margin-top:60px;text-align:center;color:#888;font-size:12px;}
    </style>
  </head>
  <body>
    <div class="header">
      <div class="brand">
        BYN<br/>
        <span style="font-size:14px;font-weight:normal;color:#666">Build Your Network</span>
      </div>
      <div class="meta">
        <strong>Invoice #:</strong> ${invoice.invoice_number || 'DRAFT'}<br/>
        <strong>Date:</strong> ${new Date(invoice.created_at || Date.now()).toLocaleDateString()}<br/>
        <strong>Due Date:</strong> ${invoice.due_date ? new Date(invoice.due_date).toLocaleDateString() : '-'}
      </div>
    </div>
    
    <div style="margin-bottom:30px">
      <h3 style="margin-bottom:5px">Bill To:</h3>
      <div>${project?.client_name || invoice.client_name || 'Client'}</div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width:50%">Item</th>
          <th style="width:15%">Qty</th>
          <th style="width:15%">Rate</th>
          <th style="width:20%;text-align:right">Amount</th>
        </tr>
      </thead>
      <tbody>
        ${(invoice.items || []).map((it: any) => `
          <tr>
            <td>${it.description || it.item || 'Item'}</td>
            <td>${it.qty || 1}</td>
            <td>₹${it.rate || 0}</td>
            <td style="text-align:right">₹${(it.qty || 1) * (it.rate || 0)}</td>
          </tr>
        `).join("")}
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" style="text-align:right;padding-top:20px">Total</td>
          <td style="text-align:right;padding-top:20px" class="total-row">₹${invoice.total || 0}</td>
        </tr>
      </tfoot>
    </table>

    <div class="footer">
      Thank you for your business.
    </div>
  </body>
  </html>
  `;
}
