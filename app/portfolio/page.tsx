"use client"

import * as React from "react"
import PortfolioCard from "@/components/PortfolioCard"
import GradientHeading from "@/components/GradientHeading"

const projects = [
    {
        title: "Neon Horizon",
        subtitle: "Web Design",
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
        video: ""
    },
    {
        title: "Cyber Pulse",
        subtitle: "Branding",
        poster: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=2564&auto=format&fit=crop",
        video: ""
    },
    {
        title: "Apex Finance",
        subtitle: "Development",
        poster: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2680&auto=format&fit=crop",
        video: ""
    },
    {
        title: "Quantum Leap",
        subtitle: "Marketing",
        poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        video: ""
    },
    {
        title: "Starlight Co.",
        subtitle: "Web Design",
        poster: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=2662&auto=format&fit=crop",
        video: ""
    },
    {
        title: "Velocity",
        subtitle: "App Dev",
        poster: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop",
        video: ""
    },
]

export default function PortfolioPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <section className="container mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <GradientHeading>Our <span className="text-white">Work</span></GradientHeading>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        A collection of projects that push boundaries and deliver results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p) => (
                        <PortfolioCard key={p.title} {...p} />
                    ))}
                </div>
            </section>
        </main>
    )
}
