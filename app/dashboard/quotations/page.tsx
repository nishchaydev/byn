import { QuotationGenerator } from "@/components/quotation/quotation-generator"

export default function DashboardQuotationsPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white tracking-tight">Quotations</h2>
            </div>
            <QuotationGenerator />
        </div>
    )
}
