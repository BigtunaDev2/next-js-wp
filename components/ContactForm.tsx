"use client";

import { useRef, useState } from "react";

type Data = { yourname: string; email: string; service: string; budget: string; message: string; company: string };
type Errors = Partial<Record<keyof Data, string>>;

const steps = ["About you", "Your project", "Review"];
const empty: Data = { yourname: "", email: "", service: "", budget: "", message: "", company: "" };
const input = "line w-full rounded-2xl bg-bg px-4 py-3 text-ink placeholder:text-muted";

export default function ContactForm() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<Data>(empty);
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const heading = useRef<HTMLHeadingElement>(null);

    const set = (k: keyof Data) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
            setData((d) => ({ ...d, [k]: e.target.value }));

    function validate(s: number) {
        const e: Errors = {};
        if (s === 0) {
            if (!data.yourname.trim()) e.yourname = "Please enter your name.";
            if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email address.";
        }
        if (s === 1) {
            if (!data.service) e.service = "Choose a service.";
            if (data.message.trim().length < 10) e.message = "Tell us a little more (10+ characters).";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function go(n: number) {
        setStep(n);
        requestAnimationFrame(() => heading.current?.focus()); // keeps keyboard/screen-reader users oriented
    }

    async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!validate(step)) return;
        if (step < steps.length - 1) return go(step + 1); // Enter key moves forward

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const json = await res.json().catch(() => ({}));

            if (res.status === 422 && json.errors) {
                const map: Record<string, keyof Data> = {
                    "your-name": "yourname", "your-email": "email", service: "service", "your-message": "message",
                };
                const fieldErrors: Errors = {};
                for (const [k, msg] of Object.entries(json.errors)) if (map[k]) fieldErrors[map[k]] = String(msg);
                setErrors(fieldErrors);
                setStatus("idle");
                go(fieldErrors.yourname || fieldErrors.email ? 0 : 1); // back to the step with the problem
                return;
            }
            if (!res.ok) throw new Error();
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    }

    if (status === "sent") {
        return (
            <div className="panel rounded-[2rem] p-10" role="status">
                <h2 className="font-display text-3xl font-bold">Thank you, {data.yourname.split(" ")[0]}!</h2>
                <p className="mt-3 text-muted">We got your message and will reply to {data.email} soon.</p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} noValidate className="panel rounded-[2rem] p-6 sm:p-10">
            {/* Step indicator */}
            <ol className="mb-8 flex gap-2" aria-label="Form progress">
                {steps.map((label, i) => (
                    <li key={label} aria-current={i === step ? "step" : undefined} className="flex-1">
                        <div className={`h-1.5 rounded-full ${i <= step ? "bg-accent" : "bg-ink/15"}`} />
                        <span className={`mt-2 block text-xs font-medium ${i === step ? "text-ink" : "text-muted"}`}>
                            {i + 1}. {label}
                        </span>
                    </li>
                ))}
            </ol>

            <h2 ref={heading} tabIndex={-1} className="font-display text-2xl font-bold outline-none">
                {steps[step]}
            </h2>

            <div className="mt-6 space-y-5">
                {step === 0 && (
                    <>
                        <Field label="Your name" error={errors.yourname}>
                            <input className={input} value={data.yourname} onChange={set("yourname")} autoComplete="name"
                                aria-invalid={!!errors.yourname} />
                        </Field>
                        <Field label="Email" error={errors.email}>
                            <input type="email" className={input} value={data.email} onChange={set("email")}
                                autoComplete="email" aria-invalid={!!errors.email} />
                        </Field>
                    </>
                )}

                {step === 1 && (
                    <>
                        <Field label="What do you need?" error={errors.service}>
                            <select className={input} value={data.service} onChange={set("service")} aria-invalid={!!errors.service}>
                                <option value="">Select a service</option>
                                <option>Brand website</option>
                                <option>UI and UX design</option>
                                <option>Web app or dashboard</option>
                                <option>Design system</option>
                            </select>
                        </Field>
                        <Field label="Budget (optional)">
                            <select className={input} value={data.budget} onChange={set("budget")}>
                                <option value="">Not sure yet</option>
                                <option>Under $3,000</option>
                                <option>$3,000 – $8,000</option>
                                <option>$8,000+</option>
                            </select>
                        </Field>
                        <Field label="Tell us about the project" error={errors.message}>
                            <textarea rows={5} className={input} value={data.message} onChange={set("message")}
                                aria-invalid={!!errors.message} />
                        </Field>
                    </>
                )}

                {step === 2 && (
                    <dl className="space-y-3">
                        {[
                            ["Name", data.yourname], ["Email", data.email], ["Service", data.service],
                            ["Budget", data.budget || "Not sure yet"], ["Message", data.message],
                        ].map(([k, v]) => (
                            <div key={k} className="line rounded-2xl p-4">
                                <dt className="text-xs font-medium text-muted">{k}</dt>
                                <dd className="mt-1 whitespace-pre-wrap">{v}</dd>
                            </div>
                        ))}
                    </dl>
                )}

                {/* Honeypot: hidden from people, bots fill it in */}
                <input className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"
                    value={data.company} onChange={set("company")} name="company" />
            </div>

            {status === "error" && (
                <p role="alert" className="mt-5 text-sm font-medium">Something went wrong. Please try again.</p>
            )}

            <div className="mt-8 flex items-center justify-between">
                {step > 0 ? (
                    <button type="button" onClick={() => go(step - 1)} className="btn btn-line">Back</button>
                ) : <span />}
                <button type="submit" disabled={status === "sending"} className="btn btn-solid disabled:opacity-60">
                    {step < steps.length - 1 ? "Continue" : status === "sending" ? "Sending…" : "Send message"}
                </button>
            </div>
        </form>
    );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium">{label}</span>
            {children}
            {error && <span role="alert" className="mt-1.5 block text-sm font-medium text-accent">{error}</span>}
        </label>
    );
}
