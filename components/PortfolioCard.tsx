"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NextImage from "next/image";

export default function PortfolioCard({ title, subtitle, poster, video }: {
    title: string; subtitle?: string; poster?: string; video?: string;
}) {
    const [hover, setHover] = useState(false);

    return (
        <motion.article
            className="byn-gradient-border byn-glass rounded-2xl overflow-hidden relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: 240 }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/40 z-10 pointer-events-none" />
            {video && hover ? (
                <video src={video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
            ) : (
                <NextImage src={poster || ""} alt={title} fill className="object-cover" />
            )}

            <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                <div className="text-sm text-gray-300">{subtitle}</div>
                <h3 className="text-xl font-semibold text-white mt-2">{title}</h3>
            </div>
            <div className="absolute -bottom-6 left-6 transform translate-y-6 opacity-0 transition-all duration-300 pointer-events-none">
                {/* small accent or badge can go here */}
            </div>
        </motion.article>
    );
}
