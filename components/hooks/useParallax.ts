import { useEffect } from "react";

export default function useParallax(ref: React.RefObject<HTMLElement | null>, intensity = 12) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        function onMove(e: MouseEvent) {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `translate3d(${x * intensity}px, ${y * intensity}px, 0)`;
        }
        function onLeave() {
            if (el) el.style.transform = `translate3d(0,0,0)`;
        }
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        return () => {
            el.removeEventListener("mousemove", onMove);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [ref, intensity]);
}
