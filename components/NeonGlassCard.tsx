"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import useParallax from "./hooks/useParallax";

type Props = {
    title?: string;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    className?: string;
};

export default function NeonGlassCard({ title, children, icon, badge, className = "" }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    useParallax(ref, 6);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`byn-gradient-border byn-glass byn-hover-glow rounded-2xl p-6 ${className}`}
            style={{ willChange: "transform" }}
        >
            {title || icon ? (
                <div className="flex items-start gap-4">
                    {icon && (
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                            <div className="w-8 h-8 flex items-center justify-center">{icon}</div>
                        </div>
                    )}
                    <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                            {title && <h3 className="text-lg font-semibold">{title}</h3>}
                            {badge && <div className="text-sm text-gray-300">{badge}</div>}
                        </div>
                        <div className="mt-3 text-sm text-gray-300">{children}</div>
                    </div>
                </div>
            ) : (
                <div className="text-sm text-gray-300">{children}</div>
            )}
        </motion.div>
    );
}
