import type { Metadata } from "next";
import Timeline, { type Milestone } from "@/components/Timeline";
import { wpQuery } from "@/lib/wp";
import { ABOUT_QUERY } from "@/lib/queries";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

const fallback: Milestone[] = [
    { year: "2019", title: "Fieldwork begins", text: "Two friends, one shared desk and a first client." },
    { year: "2021", title: "Our first design system", text: "We built a Tailwind component library for a hospitality client." },
    { year: "2023", title: "Everything moves to Next.js", text: "Every new project now ships on Next.js." },
    { year: "2025", title: "A team of eight", text: "Design, development and project management under one roof." },
    { year: "2026", title: "Over 60 launches and counting", text: "Brand sites, dashboards and design systems for growing teams." },
];

export default async function AboutPage() {
    // ACF repeater "timeline" on the About page, with sub fields year, title, text
    // TODO: Uncomment above line and remove this when WP is back online
    const data = await wpQuery<any>(ABOUT_QUERY).catch(() => null);
    const pageData = data?.page;
    const items: Milestone[] = pageData?.about?.timeline?.timeline?.length
    ? pageData?.about?.timeline?.timeline
    : null;
    // const items: Milestone[] = fallback;
    console.log("About page data:", data?.page);
    return (
        <main id="main">
            {/* Intro */}
            <section className="wrap pb-6 pt-16 md:pt-24">
                <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-7xl">
                    {pageData?.title || "About Fieldwork"}
                </h1>

                {data?.page?.content && (
                    <div
                    className="mt-7 max-w-2xl text-lg leading-relaxed text-muted"
                    dangerouslySetInnerHTML={{
                        __html: data?.page?.content,
                    }}
                    />
                )}
            </section>

            <Timeline items={items || fallback} />
            
            {/* <section
                className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr]"
                aria-labelledby="timeline-title"
            >
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <h2 id="timeline-title" className="h2">
                        Our timeline
                    </h2>
                    <p className="mt-3 max-w-xs text-muted">
                        Pick a year to jump straight to it.
                    </p>
                    <div
                        className="mt-6 flex flex-wrap gap-2"
                        role="group"
                        aria-label="Jump to year"
                    >
                        <button
                            type="button"
                            className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
                            data-jump="#tl-0"
                        >
                            2019
                        </button>
                        <button
                            type="button"
                            className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
                            data-jump="#tl-1"
                        >
                            2021
                        </button>
                        <button
                            type="button"
                            className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
                            data-jump="#tl-2"
                        >
                            2023
                        </button>
                        <button
                            type="button"
                            className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
                            data-jump="#tl-3"
                        >
                            2025
                        </button>
                        <button
                            type="button"
                            className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
                            data-jump="#tl-4"
                        >
                            2026
                        </button>
                    </div>
                </div>
                <ol className="tl-list relative pl-10">
                    <span
                        aria-hidden="true"
                        className="absolute left-[11px] top-0 h-full w-0.5 bg-ink/15"
                    />
                    <span
                        aria-hidden="true"
                        className="tl-progress absolute left-[11px] top-0 h-full w-0.5 origin-top bg-accent"
                    />
                    <li id="tl-0" className="tl-item relative pb-16">
                        <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
                        <p className="font-display text-sm font-bold text-accent">2019</p>
                        <h3 className="mt-1 font-display text-2xl font-bold">
                            Fieldwork begins
                        </h3>
                        <p className="mt-2 max-w-xl text-muted">
                            Two friends, one shared desk and a first client: a local bakery that
                            needed a website that worked on phones.
                        </p>
                    </li>
                    <li id="tl-1" className="tl-item relative pb-16">
                        <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
                        <p className="font-display text-sm font-bold text-accent">2021</p>
                        <h3 className="mt-1 font-display text-2xl font-bold">
                            Our first design system
                        </h3>
                        <p className="mt-2 max-w-xl text-muted">
                            We built a Tailwind component library for a hospitality client and
                            have reused the approach on every project since.
                        </p>
                    </li>
                    <li id="tl-2" className="tl-item relative pb-16">
                        <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
                        <p className="font-display text-sm font-bold text-accent">2023</p>
                        <h3 className="mt-1 font-display text-2xl font-bold">
                            Everything moves to Next.js
                        </h3>
                        <p className="mt-2 max-w-xl text-muted">
                            Faster pages, better SEO and a CMS our clients enjoy using. Every new
                            project now ships on Next.js.
                        </p>
                    </li>
                    <li id="tl-3" className="tl-item relative pb-16">
                        <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
                        <p className="font-display text-sm font-bold text-accent">2025</p>
                        <h3 className="mt-1 font-display text-2xl font-bold">
                            A team of eight
                        </h3>
                        <p className="mt-2 max-w-xl text-muted">
                            Design, development and project management under one roof, with a
                            studio of our own.
                        </p>
                    </li>
                    <li id="tl-4" className="tl-item relative pb-4">
                        <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
                        <p className="font-display text-sm font-bold text-accent">2026</p>
                        <h3 className="mt-1 font-display text-2xl font-bold">
                            Over 60 launches and counting
                        </h3>
                        <p className="mt-2 max-w-xl text-muted">
                            Brand sites, dashboards and design systems for teams in retail,
                            fintech and hospitality. Your project could be next.
                        </p>
                    </li>
                </ol>
            </section> */}
            {/* CTA */}
            <section className="wrap">
                <div
                    className="rounded-[2.5rem] bg-accent p-8 text-on-accent sm:p-14"
                    style={{ backgroundColor: "rgb(var(--accent))" }}
                >
                    <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                        Want to work with us?
                    </h2>
                    <p className="mt-4 max-w-lg opacity-90">
                        Tell us about your project in three short steps.
                    </p>
                    <Link
                        href="/contact"
                        className="btn mt-8"
                        style={{
                            backgroundColor: "rgb(var(--on-accent))",
                            color: "rgb(var(--accent))"
                        }}
                    >
                        Start a project
                    </Link>
                </div>
            </section>
        </main>
    );
}
