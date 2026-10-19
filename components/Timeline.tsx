"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export type Milestone = { year: string; title: string; text: string };

export default function Timeline({ items }: { items: Milestone[] }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLElement>(".tl-item");
      const jumps = gsap.utils.toArray<HTMLElement>(".jump");

      // 1. Active milestone: the one at the reading line (not motion, so always on)
      function setActive(idx: number) {
        els.forEach((el, i) => {
          el.classList.toggle("is-active", i === idx);
          const j = jumps[i];
          if (!j) return;
          j.classList.toggle("is-current", i === idx);
          if (i === idx) j.setAttribute("aria-current", "true");
          else j.removeAttribute("aria-current");
        });
      }
      function update() {
        const line = Math.min(window.innerHeight * 0.4, 200); // matches the 120px jump offset
        const list = root.current!.querySelector(".tl-list")!.getBoundingClientRect();
        let idx = -1;
        if (list.top < line && list.bottom > 0) {
          els.forEach((el, i) => { if (el.getBoundingClientRect().top <= line) idx = i; });
        }
        // Near the very bottom the last milestone may never reach the line
        const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        if (atBottom && list.top < window.innerHeight) idx = els.length - 1;
        setActive(idx);
      }
      ScrollTrigger.create({
        trigger: ".tl-list", start: "top bottom", end: "bottom top",
        onUpdate: update, onRefresh: update,
      });
      update();

      // 2. Motion only when the visitor has not asked to reduce it
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".tl-progress", { scaleY: 0 }, {
          scaleY: 1, ease: "none", transformOrigin: "top",
          scrollTrigger: { trigger: ".tl-list", start: "top 65%", end: "bottom 65%", scrub: true },
        });
        els.forEach((el) => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });
      });
    },
    { scope: root }
  );

  // Click a year to scroll to its milestone
  const jump = (i: number) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(window, {
      duration: reduce ? 0 : 1, ease: "power2.inOut",
      scrollTo: { y: `#tl-${i}`, offsetY: 120 },
    });
  };

  return (
    <section
      className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_1.6fr]"
      aria-labelledby="timeline-title"
      ref={root} >
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
          {items.map((m, i) => (
            <button
              key={m.year}
              type="button"
              onClick={() => jump(i)}
              className="jump panel rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-accent"
            >
              {m.year}
            </button>
          ))}
        </div>
      </div>

      <ol className="tl-list relative mt-12 pl-10">
        <span aria-hidden="true" className="absolute left-[11px] top-0 h-full w-0.5 bg-ink/15" />
        <span aria-hidden="true" className="tl-progress absolute left-[11px] top-0 h-full w-0.5 origin-top bg-accent" />

        {items.map((m, i) => (
          <li key={m.year} id={`tl-${i}`} className="tl-item relative pb-14">
            <span className="tl-dot absolute -left-10 top-1 h-6 w-6 rounded-full border-4 border-bg bg-muted transition-all duration-300" />
            <p className="font-display text-sm font-bold text-accent">{m.year}</p>
            <h3 className="mt-1 font-display text-2xl font-bold">{m.title}</h3>
            <p className="mt-2 max-w-xl text-muted">{m.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
