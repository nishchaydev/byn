"use client";
import { useEffect, useState } from "react";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import GradientHeading from "@/components/GradientHeading";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";

type PortfolioItem = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    images?: any;
};

export default function PortfolioManager() {
    const [items, setItems] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/portfolio")
            .then(res => res.json())
            .then(data => setItems(data || []))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <GradientHeading level={1} className="text-3xl mb-2">Portfolio</GradientHeading>
                    <p className="text-white/60">Showcase your best work</p>
                </div>
                <Link href="/admin-network-console-byn-2025/portfolio/new">
                    <NeonButton variant="primary">
                        <Plus className="mr-2 h-4 w-4" /> New Item
                    </NeonButton>
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map(item => (
                        <NeonGlassCard key={item.id} className="flex flex-col h-full">
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-white/60 text-sm mb-6 flex-grow">{item.summary}</p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <Link href={`/admin-network-console-byn-2025/portfolio/${item.id}`}>
                                    <NeonButton variant="secondary" className="w-full justify-center text-sm">
                                        <Edit className="mr-2 h-3 w-3" /> Edit Item
                                    </NeonButton>
                                </Link>
                            </div>
                        </NeonGlassCard>
                    ))}
                </div>
            )}
        </div>
    );
}
