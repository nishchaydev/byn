"use client"

import * as React from "react"
import ServicesCard from "@/components/ServicesCard"
import GradientHeading from "@/components/GradientHeading"
import { Layers, Zap, TrendingUp, PenTool, Smartphone, Globe } from "lucide-react"

const services = [
    {
        title: "Branding & Identity",
        desc: "We craft unique brand identities that resonate with your audience and stand the test of time.",
        Icon: <Layers size={32} className="text-byn-teal" />,
    },
    {
        title: "Web Design & Development",
        desc: "High-performance websites built with modern technologies for speed, security, and scalability.",
        Icon: <Globe size={32} className="text-byn-teal" />,
    },
    {
        title: "Marketing & Growth",
        desc: "Data-driven strategies to increase traffic, convert leads, and grow your revenue.",
        Icon: <TrendingUp size={32} className="text-byn-teal" />,
    },
    {
        title: "UI/UX Design",
        desc: "User-centric interfaces that are intuitive, engaging, and designed to convert.",
        Icon: <PenTool size={32} className="text-byn-teal" />,
    },
    {
        title: "App Development",
        desc: "Native and cross-platform mobile apps that deliver seamless user experiences.",
        Icon: <Smartphone size={32} className="text-byn-teal" />,
    },
    {
        title: "Business Automation",
        desc: "Streamline your operations with custom automation solutions and AI integration.",
        Icon: <Zap size={32} className="text-byn-teal" />,
    },
]

export default function ServicesPage() {
    return (
        <main className="bg-black min-h-screen text-white">
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <GradientHeading>Our <span className="text-white">Services</span></GradientHeading>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s) => (
                        <ServicesCard key={s.title} title={s.title} desc={s.desc} Icon={s.Icon} />
                    ))}
                </div>
            </section>
        </main>
    )
}
