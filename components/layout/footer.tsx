import Link from "next/link"
import { Logo } from "@/components/ui/logo"

export function Footer() {
    return (
        <footer className="bg-byn-gray border-t border-white/10 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Logo className="mb-6" />
                        <p className="text-white/60 max-w-sm">
                            We build brands that refuse to be ignored. Premium design,
                            cutting-edge technology, and fearless creativity.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6 tracking-wider">
                            Explore
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/services"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/brand-kit"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Brand Kit
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-display text-lg font-bold text-white mb-6 tracking-wider">
                            Connect
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-white/60 hover:text-byn-teal transition-colors"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} BYN Agency. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-white/40 hover:text-white text-sm transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-white/40 hover:text-white text-sm transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
