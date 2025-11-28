import Link from "next/link";

export default function NeonButton({ children, href, onClick, disabled, variant = "primary", className = "" }: { children: React.ReactNode; href?: string; onClick?: () => void; disabled?: boolean; variant?: "primary" | "secondary"; className?: string; }) {
    const baseStyles = "byn-btn focus:outline-none inline-flex items-center transition-all duration-300";
    const variantStyles = variant === "secondary"
        ? "bg-transparent border border-white/20 hover:bg-white/5 text-white"
        : "";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

    const content = (
        <button
            className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
    if (href && !disabled) return <Link href={href}>{content}</Link>;
    return content;
}
