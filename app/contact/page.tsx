import { ContactForm } from "@/components/contact/contact-form"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-byn-black">
            <section className="py-20 md:py-32 container px-4 md:px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
                    START YOUR <span className="text-byn-teal">PROJECT.</span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto">
                    Tell us about your vision. We&apos;ll help you build it.
                </p>
            </section>

            <section className="pb-24 container px-4 md:px-6">
                <ContactForm />
            </section>

            <section className="py-20 bg-byn-gray border-t border-white/5">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                            <p className="text-white/60 text-lg">hello@byn.agency</p>
                            <p className="text-white/60 text-lg">careers@byn.agency</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Visit Us</h3>
                            <p className="text-white/60 text-lg">123 Creative Lane</p>
                            <p className="text-white/60 text-lg">Design District, NY 10013</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                            <p className="text-white/60 text-lg">+1 (555) 123-4567</p>
                            <p className="text-white/60 text-lg">Mon-Fri, 9am - 6pm EST</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
