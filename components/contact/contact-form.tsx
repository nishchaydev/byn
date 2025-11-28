"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
    { id: 1, title: "The Basics" },
    { id: 2, title: "Project Details" },
    { id: 3, title: "References" },
]

export function ContactForm() {
    const [currentStep, setCurrentStep] = React.useState(1)
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        timeline: "",
        files: null,
    })

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Handle submission logic here
        alert("Quote request sent! We will be in touch shortly.")
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-byn-gray rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
            {/* Progress Steps */}
            <div className="flex justify-between mb-12 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-0" />
                <div
                    className="absolute top-1/2 left-0 h-0.5 bg-byn-teal -z-0 transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step) => (
                    <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                        <div
                            className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 border-2",
                                currentStep >= step.id
                                    ? "bg-byn-teal border-byn-teal text-black"
                                    : "bg-black border-white/20 text-white/50"
                            )}
                        >
                            {currentStep > step.id ? <Check size={16} /> : step.id}
                        </div>
                        <span className={cn(
                            "text-xs font-bold uppercase tracking-wider absolute top-12 whitespace-nowrap",
                            currentStep >= step.id ? "text-white" : "text-white/30"
                        )}>
                            {step.title}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Your Name</label>
                                <Input
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                                <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Company / Brand</label>
                                <Input
                                    placeholder="Acme Inc."
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Service Required</label>
                                <select
                                    className="flex h-12 w-full rounded-lg border border-white/10 bg-byn-gray px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="">Select a service...</option>
                                    <option value="branding">Branding & Identity</option>
                                    <option value="web">Web Design & Development</option>
                                    <option value="marketing">Marketing & Growth</option>
                                    <option value="app">App Development</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Estimated Budget</label>
                                <select
                                    className="flex h-12 w-full rounded-lg border border-white/10 bg-byn-gray px-3 py-2 text-sm text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-byn-teal"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                >
                                    <option value="">Select a range...</option>
                                    <option value="5k-10k">$5k - $10k</option>
                                    <option value="10k-25k">$10k - $25k</option>
                                    <option value="25k-50k">$25k - $50k</option>
                                    <option value="50k+">$50k+</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Timeline</label>
                                <Input
                                    placeholder="e.g. 2 months, ASAP"
                                    value={formData.timeline}
                                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                                />
                            </div>
                        </motion.div>
                    )}

                    {currentStep === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Project References / Brief</label>
                                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-byn-teal/50 transition-colors cursor-pointer bg-black/20">
                                    <Upload className="mx-auto h-12 w-12 text-white/30 mb-4" />
                                    <p className="text-white/60 text-sm mb-2">Drag and drop files here, or click to upload</p>
                                    <p className="text-white/30 text-xs">PDF, PNG, JPG up to 10MB</p>
                                    <input type="file" className="hidden" />
                                </div>
                            </div>

                            <div className="bg-byn-teal/10 border border-byn-teal/20 rounded-lg p-4">
                                <h4 className="text-byn-teal font-bold mb-2">Quote Summary</h4>
                                <p className="text-white/60 text-sm">
                                    Based on your selection, we will prepare a preliminary quote for <strong>{formData.service || "your project"}</strong> within the <strong>{formData.budget || "specified"}</strong> range.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                        className={currentStep === 1 ? "invisible" : ""}
                    >
                        Back
                    </Button>

                    {currentStep < steps.length ? (
                        <Button type="button" variant="neon" onClick={handleNext}>
                            Next Step
                        </Button>
                    ) : (
                        <Button type="submit" variant="neon">
                            Submit Request
                        </Button>
                    )}
                </div>
            </form>
        </div>
    )
}
