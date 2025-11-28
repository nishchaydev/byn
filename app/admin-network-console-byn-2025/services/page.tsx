"use client";
import { useEffect, useState } from "react";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import GradientHeading from "@/components/GradientHeading";
import Link from "next/link";
import { Plus, Edit, Trash } from "lucide-react";

type Service = {
    id: string;
    title: string;
    slug: string;
    summary: string;
    icon_url?: string;
};

export default function ServicesManager() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/services")
            .then(res => res.json())
            .then(data => setServices(data || []))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <GradientHeading level={1} className="text-3xl mb-2">Services</GradientHeading>
                    <p className="text-white/60">Manage your service offerings</p>
                </div>
                <Link href="/admin-network-console-byn-2025/services/new">
                    <NeonButton variant="primary">
                        <Plus className="mr-2 h-4 w-4" /> New Service
                    </NeonButton>
                </Link>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(s => (
                        <NeonGlassCard key={s.id} className="flex flex-col h-full">
                            <div className="flex items-center gap-4 mb-4">
                                {s.icon_url && <img src={s.icon_url} alt="" className="w-10 h-10 rounded bg-white/10 p-1" />}
                                <h3 className="text-xl font-bold text-white">{s.title}</h3>
                            </div>
                            <p className="text-white/60 text-sm mb-6 flex-grow">{s.summary}</p>
                            <div className="mt-auto pt-4 border-t border-white/10">
                                <Link href={`/admin-network-console-byn-2025/services/${s.id}`}>
                                    <NeonButton variant="secondary" className="w-full justify-center text-sm">
                                        <Edit className="mr-2 h-3 w-3" /> Edit Service
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
