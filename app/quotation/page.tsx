import { QuotationGenerator } from "@/components/quotation/quotation-generator"

export default function QuotationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-12 container px-4 md:px-6">
                <QuotationGenerator />
            </section>
        </div>
    )
}
