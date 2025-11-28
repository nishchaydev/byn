"use client";

import { motion } from "framer-motion";

const layers = [
    {
        id: "01",
        title: "Fearless Creativity",
        description: "We push boundaries and challenge the status quo to create work that stands out in a crowded market.",
        color: "text-byn-teal",
        borderColor: "border-byn-teal/20",
    },
    {
        id: "02",
        title: "Strategic Precision",
        description: "Every pixel and line of code is backed by strategy and data to ensure maximum impact and ROI.",
        color: "text-byn-pink",
        borderColor: "border-byn-pink/20",
    },
    {
        id: "03",
        title: "Future-Proof Tech",
        description: "We use the latest technologies to build scalable, secure, and high-performance digital products.",
        color: "text-byn-gold",
        borderColor: "border-byn-gold/20",
    },
    {
        id: "04",
        title: "Global Network",
        description: "Access to a worldwide network of top-tier talent and resources to fuel your growth.",
        color: "text-white",
        borderColor: "border-white/20",
    },
];

export default function NeuralEngine() {
    return (
        <div className="space-y-8">
            {layers.map((layer, index) => (
                <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex gap-6 group"
                >
                    {/* Node Visualization */}
                    <div className="relative flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 ${layer.color} font-bold text-xl border ${layer.borderColor} group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                            {layer.id}
                            <div className={`absolute inset-0 rounded-full ${layer.color.replace('text-', 'bg-')}/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </div>
                        {index !== layers.length - 1 && (
                            <div className="w-0.5 h-full bg-white/10 absolute top-12 bottom-0 group-hover:bg-gradient-to-b group-hover:from-white/50 group-hover:to-transparent transition-colors" />
                        )}
                    </div>

                    {/* Content */}
                    <div className="pb-8">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                            {layer.title}
                        </h3>
                        <p className="text-white/60 max-w-md group-hover:text-white/80 transition-colors">
                            {layer.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
