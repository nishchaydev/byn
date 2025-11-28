"use client";
import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Save, Trash } from "lucide-react";
import Link from "next/link";

type PortfolioItem = {
    id?: string;
    title: string;
    slug: string;
    summary: string;
    video_url: string;
    images: Record<string, unknown>; // simplified for now
};

const defaultItem: PortfolioItem = {
    title: "",
    slug: "",
    summary: "",
    video_url: "",
    images: {},
};

export default function PortfolioDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const isNew = id === "new";

    const [item, setItem] = useState<PortfolioItem>(defaultItem);
    const [loading, setLoading] = useState(!isNew);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isNew) {
            fetch(`/api/portfolio/${id}`)
                .then(res => res.json())
                .then(data => setItem(data))
                .catch(err => console.error(err))
                .finally(() => setLoading(false));
        }
    }, [id, isNew]);

    const handleChange = (field: keyof PortfolioItem, value: string | object) => {
        setItem(prev => ({ ...prev, [field]: value }));
        if (field === "title" && isNew && typeof value === "string") {
            setItem(prev => ({
                ...prev,
                slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
            }));
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            const url = isNew ? "/api/portfolio" : `/api/portfolio/${id}`;
            const method = isNew ? "POST" : "PUT";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item)
            });

            if (res.ok) {
                alert("Saved successfully!");
                router.push("/admin-network-console-byn-2025/portfolio");
            } else {
                alert("Failed to save");
            }
        } catch (error: unknown) {
            console.error(error);
            alert("Error saving item");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Delete this item?")) return;
        try {
            const res = await fetch(`/api/portfolio/${id}`, { method: "DELETE" });
            if (res.ok) router.push("/admin-network-console-byn-2025/portfolio");
        } catch (error: unknown) {
            console.error(error);
        }
    };

    if (loading) return <div className="p-8 text-white">Loading...</div>;

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Link href="/admin-network-console-byn-2025/portfolio">
                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <ArrowLeft className="text-white" />
                        </button>
                    </Link>
                    <h1 className="text-2xl font-bold flex-grow">{isNew ? "New Portfolio Item" : item.title}</h1>
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
                        <Input value={item.title} onChange={e => handleChange("title", e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Slug</label>
                        <Input value={item.slug} onChange={e => handleChange("slug", e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Video URL (Optional)</label>
                        <Input value={item.video_url || ""} onChange={e => handleChange("video_url", e.target.value)} placeholder="https://youtube.com/..." />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Summary</label>
                        <textarea
                            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal h-32"
                            value={item.summary || ""}
                            onChange={e => handleChange("summary", e.target.value)}
                        />
                    </div>
                    {/* Image upload would go here - using JSON for now */}
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Images (JSON)</label>
                        <textarea
                            className="w-full bg-black/20 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-byn-teal h-32 font-mono text-xs"
                            value={JSON.stringify(item.images, null, 2)}
                            onChange={e => {
                                try {
                                    handleChange("images", JSON.parse(e.target.value));
                                } catch { }
                            }}
                        />
                    </div>
                </NeonGlassCard>
            </div>
        </div>
    );
}
