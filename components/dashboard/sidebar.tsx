"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    FileText,
    FileSpreadsheet,
    Users,
    Settings,
    LogOut,
    File
} from "lucide-react"

const sidebarItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Invoices", href: "/dashboard/invoices", icon: FileSpreadsheet },
    { name: "Quotations", href: "/dashboard/quotations", icon: FileText },
    { name: "Proposals", href: "/dashboard/proposals", icon: File },
    { name: "Clients", href: "/dashboard/clients", icon: Users },
]

export function DashboardSidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-black border-r border-white/10 flex flex-col h-screen sticky top-0">
            <div className="p-6 border-b border-white/10">
                <Link href="/" className="flex flex-col">
                    <h1 className="text-white text-xl font-black leading-none tracking-widest">BYN</h1>
                    <p className="text-white/60 text-xs font-medium leading-none tracking-[0.2em] mt-1">TOOLKIT</p>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {sidebarItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    const isUnderDev = ["Proposals", "Clients"].includes(item.name)

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                                isActive
                                    ? "bg-byn-teal/10 text-byn-teal font-bold"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <Icon size={20} />
                            <span className="text-sm">{item.name}</span>
                            {isUnderDev && (
                                <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-byn-gold text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                                    SOON
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-white/10 space-y-2">
                <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5 hover:text-white transition-all duration-200"
                >
                    <Settings size={20} />
                    <span className="text-sm">Settings</span>
                </Link>
                <button
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-red-500/10 hover:text-red-500 transition-all duration-200"
                >
                    <LogOut size={20} />
                    <span className="text-sm">Logout</span>
                </button>
            </div>
        </aside>
    )
}
