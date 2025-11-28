import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Layers, Zap, TrendingUp, PenTool, Smartphone, Globe } from "lucide-react"

const services = [
    {
        id: "branding",
        title: "Branding & Identity",
        description: "We craft unique brand identities that resonate with your audience and stand the test of time.",
        icon: <Layers size={32} />,
        deliverables: ["Logo Design", "Brand Guidelines", "Visual Identity", "Tone of Voice"],
        price: "From $5,000",
    },
    {
        id: "web",
        title: "Web Design & Development",
        description: "High-performance websites built with modern technologies for speed, security, and scalability.",
        icon: <Globe size={32} />,
        deliverables: ["UI/UX Design", "Next.js Development", "CMS Integration", "SEO Optimization"],
        price: "From $8,000",
    },
    {
        id: "marketing",
        title: "Marketing & Growth",
        description: "Data-driven strategies to increase traffic, convert leads, and grow your revenue.",
        icon: <TrendingUp size={32} />,
        deliverables: ["SEO & SEM", "Social Media Strategy", "Content Marketing", "Analytics & Reporting"],
        price: "From $3,000/mo",
    },
    {
        id: "uiux",
        title: "UI/UX Design",
        description: "User-centric interfaces that are intuitive, engaging, and designed to convert.",
        icon: <PenTool size={32} />,
        deliverables: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
        price: "From $4,000",
    },
    {
        id: "app",
        title: "App Development",
        description: "Native and cross-platform mobile apps that deliver seamless user experiences.",
        icon: <Smartphone size={32} />,
        deliverables: ["iOS & Android Apps", "React Native", "App Store Optimization", "Maintenance"],
        price: "From $15,000",
    },
    {
        id: "automation",
        title: "Business Automation",
        description: "Streamline your operations with custom automation solutions and AI integration.",
        icon: <Zap size={32} />,
        deliverables: ["Workflow Automation", "CRM Integration", "Chatbots", "Custom Tools"],
        price: "From $2,500",
    },
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-20 md:py-32 container px-4 md:px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                    OUR <span className="text-byn-teal">SERVICES.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    We offer a full suite of digital services to help you build, grow, and scale your business.
                </p>
            </section>

            <section className="py-12 container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="group relative bg-byn-gray rounded-2xl border border-white/10 p-8 hover:border-byn-teal transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 text-byn-teal w-16 h-16 rounded-xl bg-byn-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-white/60 mb-8 min-h-[80px]">{service.description}</p>

                            <div className="mb-8">
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Deliverables</h4>
                                <ul className="space-y-2">
                                    {service.deliverables.map((item) => (
                                        <li key={item} className="flex items-center text-white/70 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-byn-teal mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-byn-gold font-bold">{service.price}</span>
                                <Button variant="outline" size="sm" asChild>
                                    <Link href={`/contact?service=${service.id}`}>Request Quote</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 container px-4 md:px-6 text-center">
                <div className="bg-gradient-to-r from-byn-teal/10 to-byn-pink/10 rounded-3xl p-12 border border-white/10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Need something custom?</h2>
                    <p className="text-white/60 max-w-2xl mx-auto mb-8">
                        We love unique challenges. If you have a project that doesn't fit into a standard box, let's talk about it.
                    </p>
                    <Button variant="neon" size="lg" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
