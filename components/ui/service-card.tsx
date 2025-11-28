import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
    title: string
    description: string
    icon: React.ReactNode
    href: string
    className?: string
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
    return (
        <Card className={cn("group relative overflow-hidden border-white/10 bg-byn-gray hover:border-byn-teal transition-all duration-300", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-byn-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardHeader>
                <div className="mb-4 text-byn-teal group-hover:scale-110 transition-transform duration-300 w-12 h-12 flex items-center justify-center rounded-lg bg-byn-teal/10">
                    {icon}
                </div>
                <CardTitle className="text-xl group-hover:text-byn-teal transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="mb-6 text-base">{description}</CardDescription>
                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-bold text-white group-hover:text-byn-teal transition-colors uppercase tracking-wider"
                >
                    Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </CardContent>
        </Card>
    )
}
