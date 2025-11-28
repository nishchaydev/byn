"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="z-50">
                    <Logo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="/portfolio" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        Portfolio
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium text-byn-teal hover:text-white transition-colors">
                        Login
                    </Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="neon" size="sm">
                            Start Project
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 p-4 flex flex-col gap-4">
                    <Link
                        href="/"
                        className="text-lg font-medium text-white/70 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/services"
                        className="text-lg font-medium text-white/70 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-lg font-medium text-white/70 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/about"
                        className="text-lg font-medium text-white/70 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/dashboard"
                        className="text-lg font-medium text-byn-teal hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Dashboard Login
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Button variant="neon" className="w-full">
                            Start Project
                        </Button>
                    </Link>
                </div>
            )}
        </header>
    )
}
