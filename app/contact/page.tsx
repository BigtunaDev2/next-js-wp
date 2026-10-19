import ContactForm from "@/components/ContactForm";

export default async function Contact() {
    return (
        <main id="main">
            <section className="wrap grid gap-12 pb-4 pt-16 md:pt-24 lg:grid-cols-[1fr_1.35fr]">
                <div>
                    <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
                        Tell us about your project.
                    </h1>
                    <p className="mt-5 max-w-md text-lg text-muted">
                        Three short steps. We reply within one working day.
                    </p>
                    <dl className="mt-10 space-y-5">
                        <div>
                            <dt className="text-sm font-medium text-muted">Email</dt>
                            <dd className="mt-1 font-display text-xl font-bold">
                                <a
                                    href="mailto:hello@fieldwork.studio"
                                    className="hover:text-accent"
                                >
                                    hello@fieldwork.studio
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-muted">Studio hours</dt>
                            <dd className="mt-1 font-display text-xl font-bold">
                                Mon to Fri, 10:00 – 18:00
                            </dd>
                        </div>
                        <div>
                            <dt className="text-sm font-medium text-muted">Location</dt>
                            <dd className="mt-1 font-display text-xl font-bold">
                                New Yourk, USA
                            </dd>
                        </div>
                    </dl>
                </div>
                <div>
                    {/* Success message (shown after sending) */}
                    <div
                        id="success"
                        className="panel rounded-[2rem] p-10"
                        role="status"
                        hidden
                    >
                        <h2 className="font-display text-3xl font-bold">
                            Thank you, <span id="success-name" />!
                        </h2>
                        <p className="mt-3 text-muted">
                            We got your message and will reply to{" "}
                            <span id="success-email" className="font-medium text-ink" /> soon.
                        </p>
                        <a href="index.html" className="btn btn-line mt-8">
                            Back to home
                        </a>
                    </div>
                    <ContactForm />
                </div>
            </section>
        </main>
    )
}
