import { InvoiceGenerator } from "@/components/invoice/invoice-generator"

export default function DashboardInvoicesPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white tracking-tight">Invoices</h2>
            </div>
            <InvoiceGenerator />
        </div>
    )
}
