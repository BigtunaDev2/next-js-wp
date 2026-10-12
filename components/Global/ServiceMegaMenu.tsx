"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServiceMegaMenu({ menu, settings }: { menu: any[]; settings?: any }) {

    const services = [
        {
            title: "Brand websites",
            image: "https://picsum.photos/seed/fw-websites/640/288",
            heading: "Sites that load fast and rank well",
            description:
                "Fast, SEO-ready sites built with Next.js, with layouts your team can extend.",
            href: "/#services",
        },
        {
            title: "UI and UX design",
            image: "https://picsum.photos/seed/fw-design/640/288",
            heading: "Design you can click before we build",
            description:
                "Wireframes, prototypes and polished screens, tested with real users before we code.",
            href: "/#services",
        },
        {
            title: "Web apps",
            image: "https://picsum.photos/seed/fw-dashboard/640/288",
            heading: "Tools your team will actually use",
            description:
                "Customer portals and admin tools with sign-in, APIs and clean data tables.",
            href: "/#services",
        },
        {
            title: "Design systems",
            image: "https://picsum.photos/seed/fw-system/640/288",
            heading: "One look across every page",
            description:
                "Tailwind component libraries and themes that keep your product consistent as it grows.",
            href: "/#services",
        },
        {
            title: "Speed and SEO",
            image: "https://picsum.photos/seed/fw-speed/640/288",
            heading: "Find out what slows you down",
            description:
                "We fix what holds your site back and send before-and-after Lighthouse reports.",
            href: "/#services",
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    const activeService = services[activeIndex];


    return (
        <li className="group/top relative" data-mega-wrap="">
            <a href="index.html#services" className="navlink" aria-haspopup="true">
                Services{" "}
                <svg
                    width={12}
                    height={12}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </a>
            <div className="invisible absolute left-0 top-full z-50 w-[620px] pt-3 opacity-0 transition duration-200 group-hover/top:visible group-hover/top:opacity-100 group-focus-within/top:visible group-focus-within/top:opacity-100">
                <div className="panel relative min-h-[300px] rounded-[1.75rem] p-3">
                    <ul className="w-[210px] space-y-1">
                        {services.map((service, index) => (
                            <li key={service.title}>
                                <Link
                                    href={service.href}
                                    onMouseEnter={() =>
                                        setActiveIndex(index)
                                    }
                                    onFocus={() =>
                                        setActiveIndex(index)
                                    }
                                    aria-current={
                                        activeIndex === index
                                            ? "true"
                                            : undefined
                                    }
                                    className={`flex items-center justify-between gap-2 rounded-xl px-3 py-3 font-display text-base font-bold ${activeIndex === index
                                        ? "bg-accent/10 text-accent"
                                        : ""
                                        }`}
                                >
                                    {service.title}
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="absolute bottom-3 left-[234px] right-3 top-3 flex flex-col"
                        aria-live="polite"
                    >
                        <div className="h-36 overflow-hidden rounded-2xl bg-accent/15">
                            <img
                                src={activeService.image}
                                alt=""
                                width={640}
                                height={288}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                            {activeService.heading}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-muted">
                            {activeService.description}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}