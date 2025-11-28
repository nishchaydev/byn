"use client";
import { useEffect, useState } from "react";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import GradientHeading from "@/components/GradientHeading";
import Link from "next/link";
import { Plus, ExternalLink, Edit } from "lucide-react";

type Project = {
    id: string;
    title: string;
    status: string;
    budget: number;
    client_name: string;
    cover_url?: string
};

export default function ProjectsManager() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    async function load() {
        try {
            const res = await fetch("/api/projects");
            if (res.ok) {
                const data = await res.json();
                setProjects(data || []);
            }
        } catch (error) {
            console.error("Failed to load projects", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { load(); }, []);

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <GradientHeading level={1} className="text-3xl mb-2">Projects</GradientHeading>
                    <p className="text-white/60">Manage your client projects and deliverables</p>
                </div>
                <Link href="/admin-network-console-byn-2025/projects/new">
                    <NeonButton variant="primary">
                        <Plus className="mr-2 h-4 w-4" /> New Project
                    </NeonButton>
                </Link>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-byn-teal"></div>
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">No projects yet</h3>
                    <p className="text-white/60 mb-6">Create your first project to get started.</p>
                    <Link href="/admin-network-console-byn-2025/projects/new">
                        <NeonButton variant="primary">Create Project</NeonButton>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(p => (
                        <NeonGlassCard key={p.id} className="flex flex-col h-full">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white truncate pr-2">{p.title}</h3>
                                <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${p.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                        p.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                                            'bg-yellow-500/20 text-yellow-400'
                                    }`}>
                                    {p.status.replace('_', ' ')}
                                </span>
                            </div>

                            <div className="flex-grow space-y-2 mb-6">
                                <div className="text-sm text-white/60">
                                    <span className="block text-xs uppercase tracking-wider text-white/40">Client</span>
                                    {p.client_name || 'N/A'}
                                </div>
                                <div className="text-sm text-white/60">
                                    <span className="block text-xs uppercase tracking-wider text-white/40">Budget</span>
                                    {p.budget ? `₹${p.budget.toLocaleString()}` : 'N/A'}
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                                <Link href={`/admin-network-console-byn-2025/projects/${p.id}`} className="flex-1">
                                    <NeonButton variant="secondary" className="w-full justify-center text-sm">
                                        <Edit className="mr-2 h-3 w-3" /> Manage
                                    </NeonButton>
                                </Link>
                                {/* Public link if applicable */}
                                {/* <Link href={`/portfolio/${p.id}`} target="_blank">
                    <button className="p-2 text-white/40 hover:text-white transition-colors">
                        <ExternalLink size={18} />
                    </button>
                </Link> */}
                            </div>
                        </NeonGlassCard>
                    ))}
                </div>
            )}
        </div>
    );
}
