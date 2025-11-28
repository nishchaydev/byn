"use client"

import * as React from "react"
import { PortfolioCard } from "@/components/ui/portfolio-card"
import { Lightbox } from "@/components/ui/lightbox"
import { Button } from "@/components/ui/button"

const projects = [
    {
        id: 1,
        title: "Neon Horizon",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 2,
        title: "Cyber Pulse",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2564&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 3,
        title: "Apex Finance",
        category: "Development",
        image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2680&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 4,
        title: "Quantum Leap",
        category: "Marketing",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 5,
        title: "Starlight Co.",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=2662&auto=format&fit=crop",
        href: "#",
    },
    {
        id: 6,
        title: "Velocity",
        category: "App Dev",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        href: "#",
    },
]

const categories = ["All", "Web Design", "Branding", "Development", "Marketing"]

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = React.useState("All")
    const [lightboxOpen, setLightboxOpen] = React.useState(false)
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(p => p.category === activeCategory)

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index)
        setLightboxOpen(true)
    }

    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-20 md:py-32 container px-4 md:px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                    OUR <span className="text-byn-teal">WORK.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
                    A collection of projects that push boundaries and deliver results.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                    ? "bg-byn-teal text-black shadow-neon-teal"
                                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            <section className="pb-20 container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <div key={project.id} onClick={() => openLightbox(index)} className="cursor-pointer">
                            <PortfolioCard
                                title={project.title}
                                category={project.category}
                                image={project.image}
                                href="#"
                                className="h-80"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Lightbox
                images={filteredProjects.map(p => p.image)}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                initialIndex={currentImageIndex}
            />
        </div>
    )
}
