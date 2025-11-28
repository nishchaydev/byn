"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { variants } from "@/lib/animations";

interface CaseCardProps {
    title: string;
    category: string;
    image: string;
    href: string;
    index?: number;
}

export default function CaseCard({ title, category, image, href, index = 0 }: CaseCardProps) {
    return (
        <motion.div
            variants={variants.fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-byn-gray"
        >
            <Link href={href} className="block w-full h-full">
                {/* Image */}
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-byn-teal uppercase bg-byn-teal/10 border border-byn-teal/20 rounded-full backdrop-blur-sm">
                            {category}
                        </span>
                        <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                            {title}
                        </h3>
                        <div className="flex items-center gap-2 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <span className="text-sm font-medium">View Case Study</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
