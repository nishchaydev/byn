"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function TopNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-byn-black/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-byn-teal to-byn-pink rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
                        B
                    </div>
                    <span className="text-2xl font-display font-bold text-white tracking-tight">BYN</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-byn-teal relative group",
                                pathname === item.href ? "text-white" : "text-white/60"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-byn-teal"
                                />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-byn-teal transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden sm:inline-flex text-white hover:text-byn-teal hover:bg-white/5" asChild>
                        <Link href="/admin-network-console-byn-2025/login">Client Login</Link>
                    </Button>
                    <Button variant="neon" size="sm" asChild>
                        <Link href="/contact">Start Project</Link>
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
