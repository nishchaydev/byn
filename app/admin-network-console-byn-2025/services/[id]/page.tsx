"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Trash } from "lucide-react";
import Link from "next/link";

type Service = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    content: string;
    icon_url: string;
};

const defaultService: Service = {
    title: "",
    slug: "",
    summary: "",
    content: "",
    icon_url: "",
};

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const isNew = id === "new";

    const [service, setService] = useState<Service>(defaultService);
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew) {
            // Note: We need a GET /api/services/[id] route which we haven't created yet.
            // For now, we'll fetch all and filter (inefficient but works for small data)
            // OR we should create the specific route. Let's assume we'll create the route next.
            fetch(`/api/services/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [id, isNew]);

    const handleChange = (field: keyof Service, value: string) => {
        setService(prev => ({ ...prev, [field]: value }));
        if (field === "title" && isNew) {
            setService(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const url = isNew ? "/api/services" : `/api/services/${id}`;
            const method = isNew ? "POST" : "PUT";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(service)
            });

            if (res.ok) {
                alert("Service saved!");
                router.push("/admin-network-console-byn-2025/services");
            } else {
                alert("Failed to save");
            }
        } catch (error: unknown) {
            console.error(error);
            alert("Error saving service");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Delete this service?")) return;
        try {
            const res = await fetch(`/api/services/${id}`, { method: "DELETE" });
            if (res.ok) router.push("/admin-network-console-byn-2025/services");
        } catch (error: unknown) {
            console.error(error);
        }
    };

    if (loading) return <div className="p-8 text-white">Loading...</div>;

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/admin-network-console-byn-2025/services">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ArrowLeft className="text-white" />
                        </button>
                    </Link>
                    <h1 className="text-2xl font-bold flex-grow">{isNew ? "New Service" : service.title}</h1>
                    {!isNew && (
                        <button onClick={handleDelete} className="p-2 text-red-400 hover:bg-red-500/10 rounded mr-2">
                            <Trash size={20} />
                        </button>
                    )}
                    <NeonButton onClick={handleSave} disabled={saving}>
                        <Save className="mr-2 h-4 w-4" /> Save
                    </NeonButton>
                </div>

                <NeonGlassCard className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Title</label>
                        <Input value={service.title} onChange={e => handleChange("title", e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Slug</label>
                        <Input value={service.slug} onChange={e => handleChange("slug", e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Icon URL</label>
                        <Input value={service.icon_url || ""} onChange={e => handleChange("icon_url", e.target.value)} placeholder="https://..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Summary</label>
                        <textarea
                            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal h-24"
                            value={service.summary || ""}
                            onChange={e => handleChange("summary", e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Full Content (Markdown)</label>
                        <textarea
                            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal h-64 font-mono text-sm"
                            value={service.content || ""}
                            onChange={e => handleChange("content", e.target.value)}
                        />
                    </div>
                </NeonGlassCard>
            </div>
        </div>
    );
}
