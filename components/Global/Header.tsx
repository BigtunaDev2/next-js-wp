"use client";

import { useState } from "react";
import Link from "next/link";
import ServiceMegaMenu from "@/components/Global/ServiceMegaMenu";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { wpQuery } from "@/lib/wp";

// Server component. Only ThemeSwitcher is a client component.
export default function Header({ menu, settings }: { menu: any[]; settings?: any }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = menu;
  function renderItems(parentId: string | null) {
    const children = items.filter(
      (item) => item.parentId === parentId
    );

    return children.map((item) => {
      const hasChildren = items.some(
        (child) => child.parentId === item.id
      );
      return (
        <div key={item.id}>
          {item.cssClasses == 'mega-menu' ? (
            <ServiceMegaMenu menu={item.id} />
          ) : (
            <li className={hasChildren ? "group/top relative" : "relative group"}>
              <div className="flex items-center gap-2">
                <Link
                  href={item.url || "#"}
                  target={item.target || undefined}
                  className="navlink"
                  data-nav={item.label.toLowerCase() || ''}
                >
                  {item.label}
                  {hasChildren && (
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

                  )}
                </Link>
              </div>

              {hasChildren && (
                <div className="invisible absolute z-50 opacity-0 transition duration-200 group-hover/top:visible group-hover/top:opacity-100 group-focus-within/top:visible group-focus-within/top:opacity-100 left-0 top-full w-64 pt-3">
                  <ul className="panel rounded-2xl p-2 ddlink">
                    {renderItems(item.id)}
                  </ul>
                </div>
              )}
            </li>
          )}
        </div>
      );
    });
  }


  return (
    <header className="sticky top-3 z-40 px-3">
      {/* "relative" lets the dropdowns anchor to the pill. Do NOT add overflow-hidden. */}
      <nav
        className="panel relative mx-auto flex max-w-5xl items-center justify-between rounded-full py-2 pl-6 pr-2"
        aria-label="Main"
      >
        <a href="/" className="font-display text-lg font-extrabold">
          fieldwork<span className="text-accent">.</span>
        </a>
        {/* ---------- Desktop menu ---------- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {renderItems(null)}
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
