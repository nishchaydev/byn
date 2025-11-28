import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PortfolioCardProps {
    title: string
    category: string
    image: string
    href: string
    className?: string
}

export function PortfolioCard({ title, category, image, href, className }: PortfolioCardProps) {
    return (
        <Link
            href={href}
            className={cn("group relative block overflow-hidden rounded-xl bg-byn-gray aspect-[4/3]", className)}
        >
            {/* Placeholder for image - in real app use Next.js Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-byn-teal text-xs font-bold uppercase tracking-widest mb-2">{category}</span>
                <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
                    <div className="h-10 w-10 rounded-full bg-byn-teal text-black flex items-center justify-center">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
                <div className="mt-4 h-1 w-12 bg-byn-teal rounded-full" />
            </div>
        </Link>
    )
}
