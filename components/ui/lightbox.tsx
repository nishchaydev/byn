"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
    images: string[]
    isOpen: boolean
    onClose: () => void
    initialIndex?: number
}

export function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
    const [index, setIndex] = React.useState(initialIndex)

    React.useEffect(() => {
        if (isOpen) {
            setIndex(initialIndex)
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen, initialIndex])

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation()
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    // Keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowRight") nextImage()
            if (e.key === "ArrowLeft") prevImage()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isOpen, onClose])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-50"
                        onClick={onClose}
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 hidden md:block"
                        onClick={prevImage}
                    >
                        <ChevronLeft size={48} />
                    </button>

                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 z-50 hidden md:block"
                        onClick={nextImage}
                    >
                        <ChevronRight size={48} />
                    </button>

                    <motion.img
                        key={index}
                        src={images[index]}
                        alt={`Portfolio image ${index + 1}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm">
                        {index + 1} / {images.length}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
