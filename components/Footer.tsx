"use client";

import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, ArrowUpRight, LucideIcon } from "lucide-react";

type FooterLinkItem = {
    name: string;
    href: string;
    icon?: LucideIcon;
};

type FooterSection = {
    title: string;
    links: FooterLinkItem[];
};

const footerLinks: FooterSection[] = [
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Web Development", href: "/services#web" },
            { name: "Branding", href: "/services#branding" },
            { name: "Marketing", href: "/services#marketing" },
            { name: "Consulting", href: "/services#consulting" },
        ],
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", href: "https://twitter.com", icon: Twitter },
            { name: "Instagram", href: "https://instagram.com", icon: Instagram },
            { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
            { name: "GitHub", href: "https://github.com", icon: Github },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-byn-black border-t border-white/5 pt-20 pb-10">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-byn-teal to-byn-pink rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                B
                            </div>
                            <span className="text-2xl font-display font-bold text-white tracking-tight">BYN</span>
                        </Link>
                        <p className="text-white/60 max-w-xs">
                            Building the future of digital experiences. We create brands that refuse to be ignored.
                        </p>
                    </div>

                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-white font-bold mb-6">{column.title}</h3>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-byn-teal transition-colors flex items-center gap-2 group"
                                        >
                                            {link.icon && <link.icon size={16} />}
                                            <span>{link.name}</span>
                                            {!link.icon && (
                                                <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                            )}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} BYN Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors">Terms</Link>
                        <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors">Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
