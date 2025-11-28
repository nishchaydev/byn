import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function BrandKitPage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-20 md:py-32 container px-4 md:px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                    BRAND <span className="text-byn-teal">KIT.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Official assets and guidelines for the BYN brand.
                </p>
            </section>

            <section className="pb-24 container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Logos */}
                    <div className="bg-byn-gray rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-display font-bold text-white mb-6">Logos</h2>
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-black p-6 rounded-lg flex items-center justify-center border border-white/10 aspect-video">
                                <span className="text-white font-display font-bold text-2xl">BYN</span>
                            </div>
                            <div className="bg-white p-6 rounded-lg flex items-center justify-center border border-white/10 aspect-video">
                                <span className="text-black font-display font-bold text-2xl">BYN</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4" /> Download SVG
                            </Button>
                            <Button variant="outline" className="w-full">
                                <Download className="mr-2 h-4 w-4" /> Download PNG
                            </Button>
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="bg-byn-gray rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-display font-bold text-white mb-6">Colors</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-byn-teal shadow-neon-teal" />
                                <div>
                                    <p className="text-white font-bold">Electric Teal</p>
                                    <p className="text-white/60 text-sm">#00E5D1</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-byn-pink shadow-neon-pink" />
                                <div>
                                    <p className="text-white font-bold">Neon Pink</p>
                                    <p className="text-white/60 text-sm">#FF3366</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-byn-gold shadow-neon-gold" />
                                <div>
                                    <p className="text-white font-bold">Electric Gold</p>
                                    <p className="text-white/60 text-sm">#F0C54A</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-lg bg-black border border-white/20" />
                                <div>
                                    <p className="text-white font-bold">BYN Black</p>
                                    <p className="text-white/60 text-sm">#000000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Typography */}
                    <div className="bg-byn-gray rounded-2xl border border-white/10 p-8 md:col-span-2">
                        <h2 className="text-2xl font-display font-bold text-white mb-6">Typography</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-white/40 text-sm mb-2">Headline Font</p>
                                <h3 className="text-4xl font-display font-bold text-white mb-4">Bebas Neue</h3>
                                <p className="text-white/60">
                                    Used for headlines, titles, and large display text. Always uppercase, bold, and confident.
                                </p>
                            </div>
                            <div>
                                <p className="text-white/40 text-sm mb-2">Body Font</p>
                                <h3 className="text-4xl font-sans font-bold text-white mb-4">Inter</h3>
                                <p className="text-white/60">
                                    Used for body copy, UI elements, and smaller text. Clean, legible, and modern.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
