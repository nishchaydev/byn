"use client";
import { useEffect, useState } from "react";
import NeonButton from "@/components/NeonButton";
import NeonGlassCard from "@/components/NeonGlassCard";
import GradientHeading from "@/components/GradientHeading";
import { Mail, Phone, Calendar } from "lucide-react";

type Lead = {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    status: string;
    created_at: string;
};

export default function LeadsDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/leads")
            .then(res => res.json())
            .then(data => setLeads(data || []))
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8 min-h-screen bg-byn-black text-white">
            <div className="mb-8">
                <GradientHeading level={1} className="text-3xl mb-2">Leads</GradientHeading>
                <p className="text-white/60">Incoming inquiries from the contact form</p>
            </div>

            {loading ? (
                <div className="text-center py-20">Loading...</div>
            ) : leads.length === 0 ? (
                <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">No leads yet</h3>
                    <p className="text-white/60">New inquiries will appear here.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {leads.map(lead => (
                        <NeonGlassCard key={lead.id} className="flex flex-col md:flex-row gap-6 items-start">
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-white">{lead.name}</h3>
                                    <span className="text-xs text-white/40 flex items-center gap-1">
                                        <Calendar size={12} />
                                        {new Date(lead.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-byn-teal" />
                                        <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                                    </div>
                                    {lead.phone && (
                                        <div className="flex items-center gap-2">
                                            <Phone size={14} className="text-byn-pink" />
                                            <a href={`tel:${lead.phone}`} className="hover:text-white transition-colors">{lead.phone}</a>
                                        </div>
                                    )}
                                </div>
                                <div className="bg-black/30 p-4 rounded-lg border border-white/5 text-white/80 text-sm">
                                    {lead.message}
                                </div>
                            </div>
                            <div className="flex-shrink-0 flex flex-col gap-2">
                                <span className={`px-3 py-1 rounded text-xs font-bold uppercase text-center ${lead.status === 'new' ? 'bg-blue-500/20 text-blue-400' :
                                        lead.status === 'contacted' ? 'bg-yellow-500/20 text-yellow-400' :
                                            'bg-green-500/20 text-green-400'
                                    }`}>
                                    {lead.status}
                                </span>
                                {/* Actions could go here (e.g. Mark Contacted) */}
                            </div>
                        </NeonGlassCard>
                    ))}
                </div>
            )}
        </div>
    );
}
