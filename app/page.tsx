import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import NeuralEngine from "@/components/NeuralEngine";
import CaseCard from "@/components/CaseCard";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-byn-black">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-byn-black relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Expertise</h2>
              <p className="text-white/60 max-w-md">Comprehensive digital solutions designed to elevate your brand and drive growth.</p>
            </div>
            <Button variant="link" className="text-byn-teal" asChild>
              <Link href="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <ServicesGrid />
        </div>
      </section>

      {/* Neural Engine (USP) Section */}
      <section className="py-24 bg-byn-gray border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-byn-teal/5 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                WE DON&apos;T JUST BUILD WEBSITES. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-byn-gold to-yellow-200">WE BUILD EMPIRES.</span>
              </h2>
              <NeuralEngine />
            </div>
            <div className="relative h-[600px] hidden lg:block group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-sm relative z-10">
                <Image
                  src="/byn-hard.png"
                  alt="BYN System Hard"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="text-4xl font-bold text-white tracking-widest uppercase mb-2 drop-shadow-lg">BYN SYSTEM</div>
                  <div className="flex items-center gap-2 text-byn-teal font-mono text-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-byn-teal opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-byn-teal"></span>
                    </span>
                    ONLINE // HARD_LINE_ACTIVE
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-4 border-l-4 border-byn-teal/80" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-4 border-r-4 border-byn-teal/80" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-4 border-l-4 border-byn-teal/80" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-4 border-r-4 border-byn-teal/80" />
              </div>

              {/* Decorative Outer Borders */}
              <div className="absolute -top-5 -right-5 w-full h-full border border-byn-gold/20 rounded-2xl z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
              <div className="absolute -bottom-5 -left-5 w-full h-full border border-byn-teal/20 rounded-2xl z-0 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-byn-black relative">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A showcase of our most recent and impactful projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseCard
              index={0}
              title="Neon Horizon"
              category="Web Design"
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              href="/portfolio/neon-horizon"
            />
            <CaseCard
              index={1}
              title="Cyber Pulse"
              category="Branding"
              image="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2564&auto=format&fit=crop"
              href="/portfolio/cyber-pulse"
            />
            <CaseCard
              index={2}
              title="Apex Finance"
              category="Development"
              image="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2680&auto=format&fit=crop"
              href="/portfolio/apex-finance"
            />
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" asChild className="border-white/10 hover:bg-white/5">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-byn-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-byn-teal/10 to-transparent pointer-events-none" />

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-byn-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-byn-pink/5 rounded-full blur-[100px]" />

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter leading-none">
            LET&apos;S BUILD SOMETHING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-byn-teal to-byn-pink">UNSTOPPABLE.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Ready to take your brand to the next level? Let&apos;s discuss your project and create a roadmap to success.
          </p>
          <Button variant="neon" size="lg" className="h-16 px-10 text-lg shadow-[0_0_30px_rgba(58,141,255,0.3)] hover:shadow-[0_0_50px_rgba(58,141,255,0.5)] transition-shadow duration-500" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
