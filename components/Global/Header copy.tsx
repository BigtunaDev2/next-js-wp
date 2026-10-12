"use client";

import { useState } from "react";
import Link from "next/link";
import MainNav from "@/components/MainNav";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { wpQuery } from "@/lib/wp";

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

// Server component. Only ThemeSwitcher is a client component.
export default function Header({ menu, settings }: { menu: any[]; settings?: any }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <header className="sticky top-3 z-40 px-3">
      {/* "relative" lets the dropdowns anchor to the pill. Do NOT add overflow-hidden. */}
      <nav
        className="panel relative mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-6 pr-2"
        aria-label="Main"
      >
        <a href="index.html" className="font-display text-lg font-extrabold">
          fieldwork<span className="text-accent">.</span>
        </a>
        {/* ---------- Desktop menu ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          <li>
            <a href="index.html" className="navlink" data-nav="home">
              Home
            </a>
          </li>
          {/* MEGA MENU: compact panel, 5 items on the left, preview on the right.
     Change the width with w-[620px]. "relative" anchors it under the Services link. */}
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
          <li>
            <a href="index.html#work" className="navlink">
              Work
            </a>
          </li>
          {/* NESTED DROPDOWN: level 1 > level 2 > level 3 */}
          <li className="group/top relative">
            <a
              href="about.html"
              className="navlink"
              aria-haspopup="true"
              data-nav="company"
            >
              Company{" "}
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
            <div className="invisible absolute z-50 opacity-0 transition duration-200 group-hover/top:visible group-hover/top:opacity-100 group-focus-within/top:visible group-focus-within/top:opacity-100 left-0 top-full w-64 pt-3">
              <ul className="panel rounded-2xl p-2">
                <li>
                  <a href="about.html" className="ddlink" data-nav="about">
                    About us
                  </a>
                </li>
                <li>
                  <a href="index.html#team" className="ddlink">
                    Team
                  </a>
                </li>
                <li className="group/sub relative">
                  <a href="index.html#work" className="ddlink" aria-haspopup="true">
                    Our work{" "}
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
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </a>
                  <div className="invisible absolute z-50 opacity-0 transition duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100 left-full top-0 w-60 pl-2">
                    <ul className="panel rounded-2xl p-2">
                      <li>
                        <a href="index.html#work" className="ddlink">
                          Retail
                        </a>
                      </li>
                      <li>
                        <a href="index.html#work" className="ddlink">
                          Fintech
                        </a>
                      </li>
                      <li>
                        <a href="index.html#work" className="ddlink">
                          Hospitality
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="group/sub relative">
                  <a
                    href="index.html#process"
                    className="ddlink"
                    aria-haspopup="true"
                  >
                    How we work{" "}
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
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </a>
                  <div className="invisible absolute z-50 opacity-0 transition duration-200 group-hover/sub:visible group-hover/sub:opacity-100 group-focus-within/sub:visible group-focus-within/sub:opacity-100 left-full top-0 w-60 pl-2">
                    <ul className="panel rounded-2xl p-2">
                      <li>
                        <a href="index.html#process" className="ddlink">
                          Our process
                        </a>
                      </li>
                      <li>
                        <a href="index.html#packages" className="ddlink">
                          Packages
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="contact.html" className="navlink" data-nav="contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <div
            className="line flex items-center rounded-full p-0.5"
            role="group"
            aria-label="Colour theme"
          >
            <button
              data-set-theme="light"
              aria-label="Light theme"
              className="theme-btn grid h-8 w-8 place-items-center rounded-full"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <circle cx={12} cy={12} r={4} />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            </button>
            <button
              data-set-theme="dark"
              aria-label="Dark theme"
              className="theme-btn grid h-8 w-8 place-items-center rounded-full"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            </button>
            <button
              data-set-theme="contrast"
              aria-label="High contrast theme"
              className="theme-btn grid h-8 w-8 place-items-center rounded-full"
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={12} cy={12} r={9} />
                <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <a
            href="contact.html"
            className="btn btn-solid hidden !py-2.5 xl:inline-flex"
          >
            Start a project
          </a>
          {/* ---------- Mobile menu: nested <details>, no previews on small screens ---------- */}
          <details className="mobile-menu lg:hidden">
            <summary className="line cursor-pointer list-none rounded-full px-4 py-2 text-sm font-medium">
              Menu
            </summary>
            <div className="panel absolute left-0 right-0 top-full mt-2 max-h-[75vh] overflow-y-auto rounded-3xl p-4">
              <ul className="text-base">
                <li className="py-1">
                  <a href="index.html" className="block py-1">
                    Home
                  </a>
                </li>
                <li className="py-1">
                  <details>
                    <summary className="cursor-pointer py-1 font-medium">
                      Services
                    </summary>
                    <ul className="ml-3 border-l border-ink/20 pl-3 text-muted">
                      <li className="py-1">
                        <a href="index.html#services" className="block py-1">
                          Brand websites
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="index.html#services" className="block py-1">
                          UI and UX design
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="index.html#services" className="block py-1">
                          Web apps
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="index.html#services" className="block py-1">
                          Design systems
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="index.html#services" className="block py-1">
                          Speed and SEO
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="py-1">
                  <a href="index.html#work" className="block py-1">
                    Work
                  </a>
                </li>
                <li className="py-1">
                  <details>
                    <summary className="cursor-pointer py-1 font-medium">
                      Company
                    </summary>
                    <ul className="ml-3 border-l border-ink/20 pl-3">
                      <li className="py-1">
                        <a href="about.html" className="block py-1">
                          About us
                        </a>
                      </li>
                      <li className="py-1">
                        <a href="index.html#team" className="block py-1">
                          Team
                        </a>
                      </li>
                      <li className="py-1">
                        <details>
                          <summary className="cursor-pointer py-1">
                            Our work
                          </summary>
                          <ul className="ml-3 border-l border-ink/20 pl-3 text-muted">
                            <li className="py-1">
                              <a href="index.html#work">Retail</a>
                            </li>
                            <li className="py-1">
                              <a href="index.html#work">Fintech</a>
                            </li>
                            <li className="py-1">
                              <a href="index.html#work">Hospitality</a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li className="py-1">
                        <details>
                          <summary className="cursor-pointer py-1">
                            How we work
                          </summary>
                          <ul className="ml-3 border-l border-ink/20 pl-3 text-muted">
                            <li className="py-1">
                              <a href="index.html#process">Our process</a>
                            </li>
                            <li className="py-1">
                              <a href="index.html#packages">Packages</a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li className="py-1">
                  <a href="contact.html" className="block py-1">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </nav>
    </header>

  );
}
