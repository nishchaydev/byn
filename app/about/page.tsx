import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            {/* Hero Section */}
            <section className="py-20 md:py-32 container px-4 md:px-6">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
                    WE ARE <span className="text-byn-teal">BYN.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
                    A new breed of digital agency. We combine elite design, cutting-edge technology, and strategic thinking to build brands that dominate their industries.
                </p>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-byn-gray border-y border-white/5">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Our Philosophy</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-byn-teal mb-2">Create.</h3>
                                    <p className="text-white/60">We don't just design; we create worlds. Every project is an opportunity to push the boundaries of what's possible.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-byn-pink mb-2">Connect.</h3>
                                    <p className="text-white/60">Great design connects with people on an emotional level. We build experiences that resonate and inspire.</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-byn-gold mb-2">Conquer.</h3>
                                    <p className="text-white/60">In a crowded digital landscape, you need to stand out. We give you the tools to dominate your market.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square md:aspect-auto bg-black rounded-2xl border border-white/10 overflow-hidden">
                            {/* Placeholder for philosophy image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-byn-teal/20 to-byn-pink/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-display text-9xl font-bold text-white/5">BYN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 container px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/3 aspect-[3/4] bg-byn-gray rounded-2xl overflow-hidden border border-white/10 relative">
                        {/* Placeholder for founder image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-2xl font-bold text-white">Alex Sterling</h3>
                            <p className="text-byn-teal font-medium">Founder & Creative Director</p>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">The Visionary</h2>
                        <p className="text-white/60 text-lg mb-6 leading-relaxed">
                            "I started BYN with a simple mission: to kill boring websites. The internet is flooded with templates and cookie-cutter designs. We're here to bring art back to the web, backed by the science of conversion."
                        </p>
                        <p className="text-white/60 text-lg mb-8 leading-relaxed">
                            With over a decade of experience working with Fortune 500 companies and disruptive startups, Alex leads a team of elite creatives and developers who share a passion for excellence.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="outline" asChild>
                                <a href="#">LinkedIn</a>
                            </Button>
                            <Button variant="outline" asChild>
                                <a href="#">Twitter</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-byn-gray border-t border-white/5">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">Our Journey</h2>
                    <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-xs">
                                2020
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black p-6 rounded-xl border border-white/10 shadow-lg">
                                <h3 className="font-bold text-white mb-1">Inception</h3>
                                <p className="text-white/60 text-sm">BYN was founded in a small studio with a big vision.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold text-xs">
                                2021
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black p-6 rounded-xl border border-white/10 shadow-lg">
                                <h3 className="font-bold text-white mb-1">Global Reach</h3>
                                <p className="text-white/60 text-sm">Expanded our client base to 10+ countries and grew the team.</p>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-byn-teal bg-byn-teal/20 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-byn-teal font-bold text-xs">
                                2023
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-black p-6 rounded-xl border border-byn-teal/50 shadow-[0_0_20px_rgba(0,229,209,0.1)]">
                                <h3 className="font-bold text-white mb-1">The New Era</h3>
                                <p className="text-white/60 text-sm">Launched the BYN Toolkit and established ourselves as industry leaders.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 container px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Ready to join the elite?</h2>
                <Button variant="neon" size="lg" asChild>
                    <Link href="/contact">Work With Us</Link>
                </Button>
            </section>
        </div>
    )
}
