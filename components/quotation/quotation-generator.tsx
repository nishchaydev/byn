"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash, Download, Printer, Share, Upload, FileText } from "lucide-react"
import { Logo } from "@/components/ui/logo"
import { saveAs } from "file-saver"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"
import QRCode from "qrcode"

interface LineItem {
    id: string
    description: string
    details: string
    quantity: number
    rate: number
}

export function QuotationGenerator() {
    const [estimationTitle, setEstimationTitle] = React.useState("Website Redesign for Acme Corp")
    const [validUntil, setValidUntil] = React.useState(() => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
    const [date, setDate] = React.useState(() => new Date().toISOString().split('T')[0])

    const [clientName, setClientName] = React.useState("Jane Smith")
    const [clientCompany, setClientCompany] = React.useState("Acme Corporation")
    const [clientEmail, setClientEmail] = React.useState("jane.smith@acme.com")
    const [clientAddress, setClientAddress] = React.useState("123 Innovation Drive, Tech City")



    const [proposalSummary, setProposalSummary] = React.useState("")
    const [notes, setNotes] = React.useState("")
    const [includedServices, setIncludedServices] = React.useState("")
    const [paymentTerms, setPaymentTerms] = React.useState("")
    const [qrCodeData, setQrCodeData] = React.useState("")
    const [qrCodeUrl, setQrCodeUrl] = React.useState("")

    const previewRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (qrCodeData) {
            QRCode.toDataURL(qrCodeData, { width: 100, margin: 0 }, (err, url) => {
                if (!err) setQrCodeUrl(url)
            })
        } else {
            setQrCodeUrl("")
        }
    }, [qrCodeData])

    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        return `${day}-${month}-${year}`
    }

    const [items, setItems] = React.useState<LineItem[]>([
        {
            id: '1',
            description: "Phase 1: Discovery & Strategy",
            details: "Initial consultation, requirement gathering, and project roadmap.",
            quantity: 1,
            rate: 125000
        },
        {
            id: '2',
            description: "Phase 2: UI/UX Design",
            details: "Wireframing, mockups, and interactive prototype creation.",
            quantity: 1,
            rate: 290000
        },
    ])

    const addItem = () => {
        setItems([...items, { id: Math.random().toString(), description: "", details: "", quantity: 1, rate: 0 }])
    }

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id))
    }

    const updateItem = (id: string, field: keyof LineItem, value: string | number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return { ...item, [field]: value }
            }
            return item
        }))
    }

    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0)
    const total = subtotal

    const [showDownloadMenu, setShowDownloadMenu] = React.useState(false)

    const generatePDFBlob = async () => {
        if (!previewRef.current) return null

        const canvas = await html2canvas(previewRef.current, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        })

        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        })

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)
        return pdf.output('blob')
    }

    const handleDownloadPDF = async () => {
        const blob = await generatePDFBlob()
        if (blob) {
            saveAs(blob, `Quotation-${clientCompany || 'Draft'}.pdf`)
        }
        setShowDownloadMenu(false)
    }

    const handleDownloadImage = async (format: 'png' | 'jpeg') => {
        if (!previewRef.current) return

        const canvas = await html2canvas(previewRef.current, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        })

        const link = document.createElement('a')
        link.download = `Quotation-${clientCompany || 'Draft'}.${format}`
        link.href = canvas.toDataURL(`image/${format}`, format === 'jpeg' ? 0.9 : 1.0)
        link.click()
        setShowDownloadMenu(false)
    }

    const handleShare = async () => {
        try {
            const blob = await generatePDFBlob()
            if (!blob) return

            const file = new File([blob], `Quotation-${clientCompany || 'Draft'}.pdf`, { type: 'application/pdf' })

            if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    files: [file],
                    title: 'Quotation',
                    text: `Here is the quotation for ${clientCompany || 'your project'}.`,
                })
            } else {
                // Fallback for unsupported devices/browsers
                alert("Sharing is not supported on this device. Downloading PDF instead.")
                saveAs(blob, `Quotation-${clientCompany || 'Draft'}.pdf`)
            }
        } catch (error) {
            console.error('Error sharing:', error)
            alert("An error occurred while sharing. Downloading PDF instead.")
            const blob = await generatePDFBlob()
            if (blob) saveAs(blob, `Quotation-${clientCompany || 'Draft'}.pdf`)
        }
    }

    return (
        <div className="w-full max-w-7xl mx-auto">
            <style jsx global>{`
                @media print {
                    body {
                        background-color: white !important;
                        color: black !important;
                    }
                    body * {
                        visibility: hidden;
                    }
                    #quotation-preview, #quotation-preview * {
                        visibility: visible;
                    }
                    #quotation-preview {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        box-shadow: none !important;
                        background-color: white !important;
                        color: black !important;
                    }
                    /* Hide headers/footers if possible */
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    /* Force background colors */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
            `}</style>
            {/* Header Actions */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8 print:hidden">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Quotation / Estimate Generator</h1>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20">
                        Save Draft
                    </Button>
                    <Button variant="outline" onClick={() => window.print()} className="border-white/20 text-white hover:bg-white/10">
                        <Printer className="mr-2 h-4 w-4" /> Print
                    </Button>

                    <div className="relative">
                        <Button variant="neon" onClick={() => setShowDownloadMenu(!showDownloadMenu)}>
                            <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                        {showDownloadMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl z-50 py-2 border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
                                <button onClick={handleDownloadPDF} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-byn-teal transition-colors font-medium flex items-center gap-2">
                                    <FileText className="w-4 h-4" /> PDF Document
                                </button>
                                <button onClick={() => handleDownloadImage('png')} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-byn-teal transition-colors font-medium flex items-center gap-2">
                                    <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] border border-current rounded">P</span> PNG Image
                                </button>
                                <button onClick={() => handleDownloadImage('jpeg')} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-byn-teal transition-colors font-medium flex items-center gap-2">
                                    <span className="w-4 h-4 flex items-center justify-center font-bold text-[10px] border border-current rounded">J</span> JPEG Image
                                </button>
                            </div>
                        )}
                    </div>

                    <Button variant="outline" onClick={handleShare} className="border-white/20 text-white hover:bg-white/10">
                        <Share className="mr-2 h-4 w-4" /> Share
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Editor Column */}
                <div className="lg:col-span-2 space-y-6 print:hidden">

                    {/* General Info */}
                    <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-white font-medium">Estimation Title</label>
                                <Input
                                    value={estimationTitle}
                                    onChange={(e) => setEstimationTitle(e.target.value)}
                                    placeholder="e.g. Website Redesign Project"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-medium">Valid Until</label>
                                <Input
                                    type="date"
                                    value={validUntil}
                                    onChange={(e) => setValidUntil(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Client Info */}
                    <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                        <h3 className="text-white text-lg font-bold mb-4">Client Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-white font-medium">Client Name</label>
                                <Input
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                    placeholder="Client Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-medium">Client Company</label>
                                <Input
                                    value={clientCompany}
                                    onChange={(e) => setClientCompany(e.target.value)}
                                    placeholder="Company Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-white font-medium">Email</label>
                                <Input
                                    value={clientEmail}
                                    onChange={(e) => setClientEmail(e.target.value)}
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-white font-medium">Client Address</label>
                                <Input
                                    value={clientAddress}
                                    onChange={(e) => setClientAddress(e.target.value)}
                                    placeholder="Address"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Items */}
                    <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                        <h3 className="text-white text-lg font-bold mb-4">Items</h3>
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="grid grid-cols-12 gap-4 items-start border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                    <div className="col-span-12 md:col-span-5 space-y-2">
                                        <label className="text-xs text-white/60 uppercase font-bold">Item Name</label>
                                        <Input
                                            value={item.description}
                                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                                            placeholder="Item Name"
                                        />
                                        <Input
                                            value={item.details}
                                            onChange={(e) => updateItem(item.id, 'details', e.target.value)}
                                            placeholder="Description (Optional)"
                                            className="text-sm text-white/70"
                                        />
                                    </div>

                                    <div className="col-span-4 md:col-span-2 space-y-2">
                                        <label className="text-xs text-white/60 uppercase font-bold text-right block">Rate (INR)</label>
                                        <Input
                                            type="number"
                                            value={item.rate}
                                            onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                                            className="text-right"
                                        />
                                    </div>
                                    <div className="col-span-3 md:col-span-2 space-y-2">
                                        <label className="text-xs text-white/60 uppercase font-bold text-right block">Total</label>
                                        <div className="h-10 flex items-center justify-end font-bold text-white">
                                            ₹{(item.quantity * item.rate).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="col-span-2 md:col-span-1 flex justify-end pt-6">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-white/40 hover:text-red-500 transition-colors"
                                        >
                                            <Trash size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button
                            onClick={addItem}
                            variant="ghost"
                            className="mt-6 text-byn-teal hover:text-byn-teal/80 hover:bg-byn-teal/10"
                        >
                            <Plus className="mr-2 h-4 w-4" /> Add Item
                        </Button>
                    </div>

                    {/* Proposal Summary */}
                    <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                        <h3 className="text-white text-lg font-bold mb-4">Proposal Summary</h3>
                        <textarea
                            className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter a brief summary or cover letter for your proposal..."
                            value={proposalSummary}
                            onChange={(e) => setProposalSummary(e.target.value)}
                        />
                    </div>

                    {/* Notes & Additional Info */}
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                            <h3 className="text-white text-lg font-bold mb-4">Terms & Additional Info</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-white font-medium mb-2 block">Notes / Terms</label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal"
                                        placeholder="General notes..."
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-white font-medium mb-2 block">Included Services</label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal"
                                        placeholder="List included services..."
                                        value={includedServices}
                                        onChange={(e) => setIncludedServices(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="text-white font-medium mb-2 block">Payment Terms</label>
                                    <textarea
                                        className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal"
                                        placeholder="Payment terms details..."
                                        value={paymentTerms}
                                        onChange={(e) => setPaymentTerms(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                            <h3 className="text-white text-lg font-bold mb-4">QR Code (Payment/Link)</h3>
                            <Input
                                value={qrCodeData}
                                onChange={(e) => setQrCodeData(e.target.value)}
                                placeholder="Enter UPI ID or URL to generate QR"
                            />
                            {qrCodeUrl && (
                                <div className="mt-4 bg-white p-2 rounded w-fit">
                                    <img src={qrCodeUrl} alt="QR Code" className="w-24 h-24" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Attachments */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-white text-lg font-bold mb-4">Optional Attachments</h3>
                            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-byn-teal/50 transition-colors cursor-pointer bg-byn-gray">
                                <Upload className="mx-auto h-12 w-12 text-white/30 mb-4" />
                                <p className="text-white/60 text-sm mb-2">Click to upload or drag and drop</p>
                                <input type="file" className="hidden" />
                            </div>
                        </div>

                        {/* Totals Editor */}
                        <div className="bg-byn-gray p-6 rounded-xl border border-white/10">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-white/70">
                                    <span>Subtotal</span>
                                    <span className="text-white font-semibold">₹{subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-white/70">
                                    <span>Discount (INR)</span>
                                    <Input className="w-24 h-8 text-right bg-black/20 border-white/10" defaultValue="0" />
                                </div>

                                <div className="border-t border-white/10 my-2" />
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg text-white">Grand Total (INR)</span>
                                    <span className="font-bold text-lg text-byn-teal">₹{total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview Column (Sticky) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        <div id="quotation-preview" ref={previewRef} className="bg-white text-black rounded-xl shadow-2xl min-h-[1000px] flex flex-col print:shadow-none print:w-full print:h-auto print:min-h-0 print:overflow-visible">
                            <div className="p-8 print:p-4 flex-grow flex flex-col">
                                {/* Preview Header */}
                                <div className="flex justify-between items-start pb-4 border-b border-gray-200 print:pb-2">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-black text-white p-2 rounded font-display font-bold text-xl tracking-widest">BYN</div>
                                    </div>
                                    <div className="text-right">
                                        <h2 className="text-2xl font-black text-gray-900 tracking-widest">QUOTATION</h2>
                                    </div>
                                </div>

                                {/* Preview Details */}
                                <div className="grid grid-cols-3 gap-4 py-4 print:py-2">
                                    <div className="col-span-2">
                                        <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">Quote To</p>
                                        <p className="font-bold text-gray-900 text-lg md:text-xl leading-tight">{clientCompany || "Client Company"}</p>
                                        <p className="text-gray-600 text-sm leading-tight">{clientName}</p>
                                        <p className="text-gray-600 text-sm leading-tight">{clientAddress}</p>
                                        <p className="text-gray-600 text-sm leading-tight">{clientEmail}</p>
                                    </div>
                                    <div className="text-left text-xs">
                                        <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Details</p>
                                        <div className="grid grid-cols-2 gap-y-0.5 gap-x-2">
                                            <span className="text-gray-500 font-medium">Date:</span>
                                            <span className="font-bold text-gray-900 whitespace-nowrap">{formatDate(date)}</span>
                                            <span className="text-gray-500 font-medium">Valid:</span>
                                            <span className="font-bold text-gray-900 whitespace-nowrap">{formatDate(validUntil)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Preview Table */}
                                <div className="flex-grow">
                                    <table className="w-full text-sm">
                                        <thead className="text-gray-500 uppercase text-xs border-b-2 border-gray-200">
                                            <tr>
                                                <th className="pb-1 text-left font-bold tracking-wider w-2/3">Description</th>
                                                <th className="pb-1 text-right font-bold tracking-wider">CHARGES</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200">
                                            {items.map((item) => (
                                                <tr key={item.id}>
                                                    <td className="py-1.5 align-top">
                                                        <p className="font-semibold text-gray-900 leading-tight">{item.description || "Item Name"}</p>
                                                        <p className="text-xs text-gray-500 leading-tight">{item.details}</p>
                                                    </td>
                                                    <td className="py-1.5 text-right align-top text-gray-600 font-semibold">₹{(item.quantity * item.rate).toLocaleString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Preview Footer */}
                                <div className="pt-2 mt-auto">
                                    <div className="flex justify-end">
                                        <div className="w-1/2 space-y-1">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Subtotal</span>
                                                <span className="font-semibold text-gray-900">₹{subtotal.toLocaleString()}</span>
                                            </div>

                                            <div className="border-t border-gray-200 my-1" />
                                            <div className="flex justify-between font-bold text-lg">
                                                <span className="text-gray-900">Total</span>
                                                <span className="text-byn-teal">₹{total.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Notes & QR in Preview */}
                                    {(notes || includedServices || paymentTerms || qrCodeUrl) && (
                                        <div className="flex justify-between items-start gap-6 mt-4 pt-4 border-t border-gray-200 print:mt-2 print:pt-2">
                                            <div className="flex-1 space-y-2">
                                                {notes && (
                                                    <div>
                                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Notes / Terms</p>
                                                        <p className="text-[10px] text-gray-600 whitespace-pre-wrap leading-relaxed">{notes}</p>
                                                    </div>
                                                )}
                                                {includedServices && (
                                                    <div>
                                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Included Services</p>
                                                        <p className="text-[10px] text-gray-600 whitespace-pre-wrap leading-relaxed">{includedServices}</p>
                                                    </div>
                                                )}
                                                {paymentTerms && (
                                                    <div>
                                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-0.5">Payment Terms</p>
                                                        <p className="text-[10px] text-gray-600 whitespace-pre-wrap leading-relaxed">{paymentTerms}</p>
                                                    </div>
                                                )}
                                            </div>
                                            {qrCodeUrl && (
                                                <div className="flex flex-col items-center flex-shrink-0">
                                                    <img src={qrCodeUrl} alt="QR Code" className="w-16 h-16 mb-1" />
                                                    <p className="text-[8px] text-gray-400 uppercase tracking-wider">Scan to Pay</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="text-center text-[10px] text-gray-500 mt-4 pt-2 border-t border-gray-200 print:mt-2">
                                        <p className="font-bold">BYN Agency</p>
                                        <p>Freelance Web & Branding Studio | Indore, Madhya Pradesh</p>
                                        <p>nishchaydev@outlook.com | +91 86021 75892</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
