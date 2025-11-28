import React from "react";

export default function GradientHeading({ children, className = "", level = 2 }: { children: React.ReactNode; className?: string; level?: 1 | 2 | 3 | 4 | 5 | 6 }) {
    const Tag = `h${level}` as React.ElementType;

    return React.createElement(
        Tag,
        { className: `font-extrabold tracking-tight ${level === 1 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'} ${className}` },
        <span className="byn-gradient-text">{children}</span>
    );
}
