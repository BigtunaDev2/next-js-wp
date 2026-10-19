"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServiceMegaMenu({ menu, megaMenu }: { menu: any[]; megaMenu?: any }) {

    const [activeIndex, setActiveIndex] = useState(0);

    const activeService = megaMenu[activeIndex];

    return (
        <li className="group/top relative" data-mega-wrap="">
            <a href="#services" className="navlink" aria-haspopup="true">
                Service{" "}
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
                        {megaMenu.map((service, index) => (
                            <li key={service.href.title}>
                                <Link
                                    href={service?.href?.url}
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
                                    {service.href.title}
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
                                src={activeService.menuImage?.node?.sourceUrl}
                                alt={activeService.menuImage?.node?.altText}
                                width={640}
                                height={288}
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                            {activeService.menuHeading}
                        </h3>

                        <p className="mt-1 text-sm leading-relaxed text-muted">
                            {activeService.menuDescription}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}