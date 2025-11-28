export const transitions = {
    default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    slow: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    stagger: { delayChildren: 0.1, staggerChildren: 0.1 },
};

export const variants = {
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: transitions.default },
    },
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: transitions.default },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: transitions.default },
    },
    staggerContainer: {
        hidden: {},
        visible: { transition: transitions.stagger },
    },
};

export const reducedMotion = {
    transition: { duration: 0 },
    animate: { opacity: 1, y: 0, scale: 1 },
};
