import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"
import { PortfolioCard } from "@/components/ui/portfolio-card"
import { ArrowRight, Layers, Zap, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-byn-black">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-byn-teal/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-byn-pink/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-byn-teal/30 bg-byn-teal/10 text-byn-teal text-sm font-bold tracking-widest uppercase animate-fade-in-up">
            The Future of Digital Agencies
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 leading-none animate-fade-in-up delay-100">
            CREATE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-byn-teal to-byn-pink">CONNECT.</span> <br />
            CONQUER.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 animate-fade-in-up delay-200">
            We build brands that refuse to be ignored. Premium design, cutting-edge technology, and fearless creativity for the modern era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Button variant="neon" size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-byn-black relative">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Branding & Identity"
              description="Strategic brand positioning, logo design, and visual identity systems that leave a lasting impression."
              icon={<Layers size={24} />}
              href="/services#branding"
            />
            <ServiceCard
              title="Web Design & Dev"
              description="Immersive, high-performance websites built with modern technologies like Next.js and React."
              icon={<Zap size={24} />}
              href="/services#web"
            />
            <ServiceCard
              title="Marketing & Growth"
              description="Data-driven marketing strategies and growth systems to scale your business exponentially."
              icon={<TrendingUp size={24} />}
              href="/services#marketing"
            />
          </div>
        </div>
      </section>

      {/* Why BYN Section */}
      <section className="py-24 bg-byn-gray border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                WE DON'T JUST BUILD WEBSITES. <br />
                <span className="text-byn-gold">WE BUILD EMPIRES.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-byn-gold font-bold text-xl">01</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Fearless Creativity</h3>
                    <p className="text-white/60">We push boundaries and challenge the status quo to create work that stands out in a crowded market.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-byn-gold font-bold text-xl">02</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Strategic Precision</h3>
                    <p className="text-white/60">Every pixel and line of code is backed by strategy and data to ensure maximum impact and ROI.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-byn-gold font-bold text-xl">03</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Future-Proof Tech</h3>
                    <p className="text-white/60">We use the latest technologies to build scalable, secure, and high-performance digital products.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black relative z-10">
                {/* Placeholder for abstract 3D visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-byn-gray to-black flex items-center justify-center">
                  <div className="text-white/20 font-display text-9xl font-bold opacity-20 rotate-[-45deg]">BYN</div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-byn-gold/20 rounded-2xl z-0" />
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-byn-teal/20 rounded-2xl z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-byn-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Selected Works</h2>
            <p className="text-white/60 max-w-2xl mx-auto">A showcase of our most recent and impactful projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard
              title="Neon Horizon"
              category="Web Design"
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
              href="/portfolio/neon-horizon"
            />
            <PortfolioCard
              title="Cyber Pulse"
              category="Branding"
              image="https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2564&auto=format&fit=crop"
              href="/portfolio/cyber-pulse"
            />
            <PortfolioCard
              title="Apex Finance"
              category="Development"
              image="https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2680&auto=format&fit=crop"
              href="/portfolio/apex-finance"
            />
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-byn-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-byn-teal/10 to-transparent" />
        <div className="container relative z-10 px-4 md:px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter">
            LET'S BUILD SOMETHING <br />
            <span className="text-byn-teal">UNSTOPPABLE.</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Ready to take your brand to the next level? Let's discuss your project and create a roadmap to success.
          </p>
          <Button variant="neon" size="lg" className="h-16 px-10 text-lg" asChild>
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
