import NeonGlassCard from "./NeonGlassCard";

export default function ServicesCard({ title, desc, Icon }: { title: string; desc: string; Icon?: React.ReactNode }) {
    return (
        <NeonGlassCard title={title} icon={Icon}>
            <div className="text-sm text-gray-300">{desc}</div>
        </NeonGlassCard>
    );
}
