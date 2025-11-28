"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import GradientHeading from "@/components/GradientHeading";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Trash, FileText, Receipt } from "lucide-react";
import Link from "next/link";

type Project = {
    id?: string;
    title: string;
    slug: string;
    status: string;
    description: string;
    budget: number;
    client_name: string;
    start_date: string;
    end_date: string;
    cover_url: string;
};

const defaultProject: Project = {
    title: "",
    slug: "",
    status: "planning",
    description: "",
    budget: 0,
    client_name: "",
    start_date: "",
    end_date: "",
    cover_url: "",
};

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const isNew = id === "new";

    const [project, setProject] = useState<Project>(defaultProject);
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew) {
            fetch(`/api/projects/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.error) {
                        alert("Error loading project");
                        router.push("/admin-network-console-byn-2025/projects");
                    } else {
                        setProject(data);
                    }
                })
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [id, isNew, router]);

    const handleChange = (field: keyof Project, value: string | number) => {
        setProject(prev => ({ ...prev, [field]: value }));

        // Auto-generate slug from title if new
        if (field === "title" && isNew && typeof value === "string") {
            setProject(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const url = isNew ? "/api/projects" : `/api/projects/${id}`;
            const method = isNew ? "POST" : "PUT";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(project)
            });

            const data = await res.json();

            if (res.ok) {
                alert("Project saved successfully!");
                if (isNew) {
                    router.push(`/admin-network-console-byn-2025/projects/${data.id}`);
                }
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error: unknown) {
            console.error("Save error:", error);
            alert("Failed to save project");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this project? This cannot be undone.")) return;

        try {
            const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
            if (res.ok) {
                router.push("/admin-network-console-byn-2025/projects");
            } else {
                alert("Failed to delete project");
            }
        } catch (error) {
            console.error("Delete error:", error);
        }
    };

    if (loading) return <div className="p-8 text-white">Loading...</div>;

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/admin-network-console-byn-2025/projects">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ArrowLeft className="text-white" />
                        </button>
                    </Link>
                    <div className="flex-grow">
                        <h1 className="text-2xl font-bold text-white">{isNew ? "New Project" : project.title}</h1>
                        <p className="text-white/60 text-sm">{isNew ? "Create a new project" : `ID: ${id}`}</p>
                    </div>
                    {!isNew && (
                        <button
                            onClick={handleDelete}
                            className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors mr-2"
                        >
                            <Trash size={20} />
                        </button>
                    )}
                    <NeonButton onClick={handleSave} disabled={saving}>
                        <Save className="mr-2 h-4 w-4" /> {saving ? "Saving..." : "Save Project"}
                    </NeonButton>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <NeonGlassCard>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Project Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Project Title</label>
                                    <Input
                                        value={project.title}
                                        onChange={e => handleChange("title", e.target.value)}
                                        placeholder="e.g. Website Redesign"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Slug (URL Friendly)</label>
                                    <Input
                                        value={project.slug}
                                        onChange={e => handleChange("slug", e.target.value)}
                                        placeholder="website-redesign"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Description</label>
                                    <textarea
                                        className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal min-h-[150px]"
                                        value={project.description || ""}
                                        onChange={e => handleChange("description", e.target.value)}
                                        placeholder="Project description..."
                                    />
                                </div>
                            </div>
                        </NeonGlassCard>

                        {!isNew && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <NeonGlassCard className="hover:border-byn-teal/50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-byn-teal/10 rounded-lg text-byn-teal group-hover:bg-byn-teal/20">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Quotations</h4>
                                            <p className="text-xs text-white/60">Manage estimates</p>
                                        </div>
                                    </div>
                                </NeonGlassCard>
                                <NeonGlassCard className="hover:border-byn-pink/50 cursor-pointer transition-colors group">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-byn-pink/10 rounded-lg text-byn-pink group-hover:bg-byn-pink/20">
                                            <Receipt size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Invoices</h4>
                                            <p className="text-xs text-white/60">Manage billing</p>
                                        </div>
                                    </div>
                                </NeonGlassCard>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <NeonGlassCard>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Status & Client</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Status</label>
                                    <select
                                        className="w-full bg-black/20 border border-white/10 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal"
                                        value={project.status}
                                        onChange={e => handleChange("status", e.target.value)}
                                    >
                                        <option value="planning">Planning</option>
                                        <option value="in_progress">In Progress</option>
                                        <option value="completed">Completed</option>
                                        <option value="on_hold">On Hold</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Client Name</label>
                                    <Input
                                        value={project.client_name || ""}
                                        onChange={e => handleChange("client_name", e.target.value)}
                                        placeholder="Client Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Budget (INR)</label>
                                    <Input
                                        type="number"
                                        value={project.budget || 0}
                                        onChange={e => handleChange("budget", parseFloat(e.target.value))}
                                    />
                                </div>
                            </div>
                        </NeonGlassCard>

                        <NeonGlassCard>
                            <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Timeline</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">Start Date</label>
                                    <Input
                                        type="date"
                                        value={project.start_date || ""}
                                        onChange={e => handleChange("start_date", e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-white/70 mb-1">End Date</label>
                                    <Input
                                        type="date"
                                        value={project.end_date || ""}
                                        onChange={e => handleChange("end_date", e.target.value)}
                                    />
                                </div>
                            </div>
                        </NeonGlassCard>
                    </div>
                </div>
            </div>
        </div>
    );
}
