"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MeshBackground from "./MeshBackground";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-byn-black">
            {/* WebGL Background */}
            <MeshBackground />

            {/* Content Overlay */}
            <div className="relative z-10 container px-4 md:px-6 text-center pointer-events-none">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="inline-block mb-6 pointer-events-auto"
                >
                    <div className="px-4 py-1.5 rounded-full border border-byn-teal/30 bg-byn-teal/10 text-byn-teal text-sm font-bold tracking-widest uppercase backdrop-blur-sm">
                        The Future of Digital Agencies
                    </div>
                </motion.div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 leading-none">
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                        className="block"
                    >
                        CREATE.
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                        className="block text-transparent bg-clip-text bg-gradient-to-r from-byn-teal to-byn-pink"
                    >
                        CONNECT.
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                        className="block"
                    >
                        CONQUER.
                    </motion.span>
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 pointer-events-auto"
                >
                    We build brands that refuse to be ignored. Premium design, cutting-edge technology, and fearless creativity for the modern era.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
                >
                    <Button
                        variant="neon"
                        size="lg"
                        asChild
                        className="relative overflow-hidden group"
                    >
                        <Link href="/contact">
                            <span className="relative z-10">Start Your Project</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        asChild
                        className="backdrop-blur-sm bg-black/20 border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <Link href="/portfolio">View Our Work</Link>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1 h-1 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
