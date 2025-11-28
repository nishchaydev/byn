"use client"

import { Construction } from "lucide-react"

export function DevelopmentBadge() {
    return (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
            <div className="bg-byn-gold text-black px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2 border-2 border-white">
                <Construction size={16} />
                <span className="text-xs tracking-wider uppercase">Site Under Development</span>
            </div>
        </div>
    )
}
