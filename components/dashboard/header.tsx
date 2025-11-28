"use client"

import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function DashboardHeader() {
    return (
        <header className="h-16 border-b border-white/10 bg-byn-gray/50 backdrop-blur-sm px-6 flex items-center justify-between sticky top-0 z-40">
            <div className="w-96">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 h-4 w-4" />
                    <Input
                        placeholder="Search documents, clients..."
                        className="pl-10 bg-black/20 border-white/10 h-9 text-sm focus-visible:ring-byn-teal"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative text-white/60 hover:text-white transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-byn-teal rounded-full ring-2 ring-byn-gray" />
                </button>
                <div className="h-6 w-px bg-white/10" />
                <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-white">Admin User</p>
                        <p className="text-xs text-white/60">admin@byn.agency</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-byn-teal to-byn-pink p-[1px]">
                        <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                            AU
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
