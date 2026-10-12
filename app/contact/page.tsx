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
                                Ahmedabad, India
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
                        hidden=""
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
                    <form
                        id="contact-form"
                        noValidate=""
                        className="panel rounded-[2rem] p-6 sm:p-10"
                    >
                        {/* Step indicator */}
                        <ol className="mb-8 flex gap-2" aria-label="Form progress">
                            <li className="flex-1" data-li="">
                                <div data-bar="" className="h-1.5 rounded-full bg-accent" />
                                <span data-label="" className="mt-2 block text-xs font-medium">
                                    1. About you
                                </span>
                            </li>
                            <li className="flex-1" data-li="">
                                <div data-bar="" className="h-1.5 rounded-full bg-ink/15" />
                                <span
                                    data-label=""
                                    className="mt-2 block text-xs font-medium text-muted"
                                >
                                    2. Your project
                                </span>
                            </li>
                            <li className="flex-1" data-li="">
                                <div data-bar="" className="h-1.5 rounded-full bg-ink/15" />
                                <span
                                    data-label=""
                                    className="mt-2 block text-xs font-medium text-muted"
                                >
                                    3. Review
                                </span>
                            </li>
                        </ol>
                        <h2
                            id="step-title"
                            tabIndex={-1}
                            className="font-display text-2xl font-bold outline-none"
                        >
                            About you
                        </h2>
                        {/* Step 1 */}
                        <div data-step="" className="mt-6 space-y-5">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium">Your name</span>
                                <input
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    className="field"
                                />
                                <span
                                    data-err="name"
                                    role="alert"
                                    className="mt-1.5 block text-sm font-medium text-accent"
                                    hidden=""
                                />
                            </label>
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium">Email</span>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="field"
                                />
                                <span
                                    data-err="email"
                                    role="alert"
                                    className="mt-1.5 block text-sm font-medium text-accent"
                                    hidden=""
                                />
                            </label>
                        </div>
                        {/* Step 2 */}
                        <div data-step="" className="mt-6 space-y-5" hidden="">
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium">
                                    What do you need?
                                </span>
                                <select name="service" className="field">
                                    <option value="">Select a service</option>
                                    <option>Brand website</option>
                                    <option>UI and UX design</option>
                                    <option>Web app or dashboard</option>
                                    <option>Design system</option>
                                </select>
                                <span
                                    data-err="service"
                                    role="alert"
                                    className="mt-1.5 block text-sm font-medium text-accent"
                                    hidden=""
                                />
                            </label>
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium">
                                    Budget (optional)
                                </span>
                                <select name="budget" className="field">
                                    <option value="">Not sure yet</option>
                                    <option>Under $3,000</option>
                                    <option>$3,000 – $8,000</option>
                                    <option>$8,000+</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="mb-2 block text-sm font-medium">
                                    Tell us about the project
                                </span>
                                <textarea
                                    name="message"
                                    rows={5}
                                    className="field"
                                    defaultValue={""}
                                />
                                <span
                                    data-err="message"
                                    role="alert"
                                    className="mt-1.5 block text-sm font-medium text-accent"
                                    hidden=""
                                />
                            </label>
                        </div>
                        {/* Step 3 */}
                        <div data-step="" className="mt-6" hidden="">
                            <dl id="review" className="space-y-3" />
                        </div>
                        {/* Honeypot: hidden from people, bots tend to fill it in */}
                        <input
                            name="company"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />
                        <p
                            id="form-error"
                            role="alert"
                            className="mt-5 text-sm font-medium text-accent"
                            hidden=""
                        >
                            Something went wrong. Please try again.
                        </p>
                        <div className="mt-8 flex items-center justify-between">
                            <button
                                type="button"
                                id="btn-back"
                                className="btn btn-line"
                                hidden=""
                            >
                                Back
                            </button>
                            <span id="spacer" />
                            <button
                                type="submit"
                                id="btn-next"
                                className="btn btn-solid disabled:opacity-60"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}