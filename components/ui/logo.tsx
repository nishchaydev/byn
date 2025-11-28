import * as React from "react"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-2", className)}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-byn-teal"
            >
                <path
                    d="M20 0L37.3205 10V30L20 40L2.67949 30V10L20 0Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                />
                <path
                    d="M20 4L33.8564 12V28L20 36L6.14359 28V12L20 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M20 12L26.9282 16V24L20 28L13.0718 24V16L20 12Z"
                    fill="currentColor"
                />
            </svg>
            <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-wider text-white leading-none">
                    BYN
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-byn-teal uppercase leading-none">
                    Agency
                </span>
            </div>
        </div>
    )
}
