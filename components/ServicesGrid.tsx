"use client";

import { motion } from "framer-motion";
import { Layers, Zap, TrendingUp, Code, Palette, Globe } from "lucide-react";
import { variants } from "@/lib/animations";

const services = [
    {
        id: "branding",
        title: "Branding & Identity",
        description: "Strategic brand positioning, logo design, and visual identity systems that leave a lasting impression.",
        icon: Layers,
    },
    {
        id: "web",
        title: "Web Design & Dev",
        description: "Immersive, high-performance websites built with modern technologies like Next.js and React.",
        icon: Zap,
    },
    {
        id: "marketing",
        title: "Marketing & Growth",
        description: "Data-driven marketing strategies and growth systems to scale your business exponentially.",
        icon: TrendingUp,
    },
    {
        id: "app",
        title: "App Development",
        description: "Native and cross-platform mobile applications that deliver seamless user experiences.",
        icon: Code,
    },
    {
        id: "uiux",
        title: "UI/UX Design",
        description: "User-centric design interfaces that are intuitive, accessible, and visually stunning.",
        icon: Palette,
    },
    {
        id: "seo",
        title: "SEO & Content",
        description: "Optimization strategies to improve visibility and drive organic traffic to your digital assets.",
        icon: Globe,
    },
];

export default function ServicesGrid() {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={variants.staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {services.map((service) => (
                <motion.div
                    key={service.id}
                    variants={variants.fadeInUp}
                    className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-byn-teal/50 transition-colors overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-byn-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 text-byn-teal group-hover:scale-110 transition-transform duration-300">
                            <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-byn-teal transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
