import { InvoiceGenerator } from "@/components/invoice/invoice-generator"

export default function InvoicePage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-20 container px-4 md:px-6 text-center print:hidden">
                <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">
                    INVOICE <span className="text-byn-teal">GENERATOR.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Create professional invoices in seconds. Export to PDF and get paid faster.
                </p>
            </section>

            <section className="pb-24 container px-4 md:px-6">
                <InvoiceGenerator />
            </section>
        </div>
    )
}
