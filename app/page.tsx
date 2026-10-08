import Image from "next/image";
import { wpQuery } from "@/lib/wp";
import { HOME_QUERY } from "@/lib/queries";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";

export default async function Home() {
  const data = await wpQuery<any>(HOME_QUERY);
  const { homepage } = data.page;
  console.log("Homepage data:", );
  return (
    <>
  {(homepage.banner && <Hero data={homepage?.banner}/>) || null}


  {/* ============ CLIENTS ============ */}
  <TrustedBy data={homepage?.logos} />
  
  {/* ============ SERVICES: sticky split + accordion ============ */}
  <Services data={homepage?.services} />

  {/* ============ WORK: case studies ============ */}
  <section
    id="work"
    className="panel mx-2 rounded-[2.5rem] py-24 sm:mx-4 sm:rounded-[4rem]"
  >
    <div className="wrap">
      <h2 className="h2 max-w-2xl">Recent projects</h2>
      <p className="mt-3 text-muted">
        Sample case studies. Swap in your own clients and live links.
      </p>
      <div className="mt-14 space-y-20">
        {/* Case 1 */}
        <a href="#" className="group grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] rounded-br-[7rem] bg-accent p-8 sm:p-12">
            <div className="rounded-2xl bg-surface p-4" aria-hidden="true">
              <div className="flex gap-1.5">
                <i className="h-2 w-2 rounded-full bg-sun" />
                <i className="h-2 w-2 rounded-full bg-accent" />
                <i className="h-2 w-2 rounded-full bg-muted" />
              </div>
              <div className="mt-5 h-5 w-3/4 rounded bg-ink" />
              <div className="mt-2 h-5 w-1/2 rounded bg-ink" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                <i className="h-16 rounded-xl bg-sun" />
                <i className="h-16 rounded-xl bg-accent/30" />
                <i className="h-16 rounded-xl bg-accent/30" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted">
              Brand website · Retail
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold group-hover:text-accent sm:text-4xl">
              Northwind: a new storefront in six weeks
            </h3>
            <p className="mt-3 max-w-md text-muted">
              Rebuilt a slow catalogue site in Next.js. Load time dropped from
              4.1s to 1.2s and enquiries rose 38%.
            </p>
          </div>
        </a>
        {/* Case 2 (mirrored) */}
        <a href="#" className="group grid items-center gap-8 md:grid-cols-2">
          <div className="md:order-2">
            <div className="relative overflow-hidden rounded-[2rem] rounded-bl-[7rem] bg-sun p-8 sm:p-12">
              <div className="rounded-2xl bg-surface p-4" aria-hidden="true">
                <div className="flex h-32 items-end gap-2">
                  <i className="h-1/3 flex-1 rounded-t-lg bg-accent/40" />
                  <i className="h-2/3 flex-1 rounded-t-lg bg-accent" />
                  <i className="h-1/2 flex-1 rounded-t-lg bg-accent/40" />
                  <i className="h-5/6 flex-1 rounded-t-lg bg-ink" />
                  <i className="h-3/5 flex-1 rounded-t-lg bg-accent/40" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:order-1">
            <p className="text-sm font-medium text-muted">Web app · Fintech</p>
            <h3 className="mt-2 font-display text-3xl font-bold group-hover:text-accent sm:text-4xl">
              Brightloop: a dashboard teams actually use
            </h3>
            <p className="mt-3 max-w-md text-muted">
              Designed and built a reporting dashboard with live charts,
              role-based access and CSV export.
            </p>
          </div>
        </a>
        {/* Case 3 */}
        <a href="#" className="group grid items-center gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] rounded-tr-[7rem] bg-ink p-8 sm:p-12">
            <div className="rounded-2xl bg-surface p-4" aria-hidden="true">
              <div className="space-y-2.5">
                <i className="block h-4 w-2/3 rounded bg-ink" />
                <i className="block h-2 w-full rounded bg-muted/50" />
                <i className="block h-2 w-5/6 rounded bg-muted/50" />
                <i className="mt-4 block h-9 w-28 rounded-full bg-accent" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-muted">
              Design system · Hospitality
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold group-hover:text-accent sm:text-4xl">
              Oakhouse: one system for twelve venues
            </h3>
            <p className="mt-3 max-w-md text-muted">
              A Tailwind component library with light and dark themes now powers
              every venue site.
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* ============ PROCESS ============ */}
  <section id="process" className="wrap py-24">
    <h2 className="h2 max-w-2xl">How a project runs</h2>
    <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <li className="panel rounded-[2rem] rounded-tl-[4rem] p-7">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent font-display text-xl font-bold text-on-accent">
          1
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Discover</h3>
        <p className="mt-2 text-muted">
          We learn your goals, audience and constraints in a short workshop.
        </p>
      </li>
      <li className="panel rounded-[2rem] rounded-tl-[4rem] p-7 lg:mt-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sun font-display text-xl font-bold text-ink">
          2
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Design</h3>
        <p className="mt-2 text-muted">
          Wireframes first, then full screens you can click through.
        </p>
      </li>
      <li className="panel rounded-[2rem] rounded-tl-[4rem] p-7 lg:mt-16">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-accent font-display text-xl font-bold text-on-accent">
          3
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Build</h3>
        <p className="mt-2 text-muted">
          We code in Next.js and Tailwind and share a live preview each week.
        </p>
      </li>
      <li className="panel rounded-[2rem] rounded-tl-[4rem] p-7 lg:mt-24">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sun font-display text-xl font-bold text-ink">
          4
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold">Launch</h3>
        <p className="mt-2 text-muted">
          We test, deploy, train your team and stay on for 30 days of support.
        </p>
      </li>
    </ol>
  </section>
  {/* ============ TEAM ============ */}
  <section id="team" className="bg-surface py-24">
    <div className="wrap">
      <h2 className="h2 max-w-2xl">The people behind the pixels</h2>
      <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        <li>
          <div
            className="blob grid aspect-square place-items-center bg-accent font-display text-5xl font-extrabold text-on-accent"
            aria-hidden="true"
          >
            JD
          </div>
          <p className="mt-4 font-display text-xl font-bold">John Doe</p>
          <p className="text-muted">Creative director</p>
        </li>
        <li>
          <div
            className="blob grid aspect-square place-items-center bg-sun font-display text-5xl font-extrabold text-ink [border-radius:40%_60%_58%_42%/44%_58%_42%_56%]"
            aria-hidden="true"
          >
            JS
          </div>
          <p className="mt-4 font-display text-xl font-bold">Jane Smith</p>
          <p className="text-muted">Lead Next.js developer</p>
        </li>
        <li>
          <div
            className="blob grid aspect-square place-items-center bg-ink font-display text-5xl font-extrabold text-bg [border-radius:55%_45%_38%_62%/60%_40%_60%_40%]"
            aria-hidden="true"
          >
            MJ
          </div>
          <p className="mt-4 font-display text-xl font-bold">Mike Johnson</p>
          <p className="text-muted">UX designer</p>
        </li>
        <li>
          <div
            className="blob grid aspect-square place-items-center bg-accent/80 font-display text-5xl font-extrabold text-on-accent [border-radius:45%_55%_60%_40%/50%_55%_45%_50%]"
            aria-hidden="true"
          >
            DL
          </div>
          <p className="mt-4 font-display text-xl font-bold">David Lee</p>
          <p className="text-muted">Project manager</p>
        </li>
      </ul>
    </div>
  </section>
  {/* ============ TESTIMONIALS ============ */}
  <section className="wrap py-24" aria-labelledby="t-h">
    <h2 id="t-h" className="h2 max-w-2xl">
      Kind words from clients
    </h2>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <figure className="panel rounded-[2rem] p-8 sm:p-10">
        <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">
          They shipped our new site two weeks early, and it is the fastest page
          we have ever had.
        </blockquote>
        <figcaption className="mt-6 text-muted">
          Priya N., Marketing lead at Northwind
        </figcaption>
      </figure>
      <figure className="rounded-[2rem] bg-accent p-8 text-on-accent sm:p-10">
        <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">
          Clear updates every week. Our team now edits pages on its own without
          breaking the design.
        </blockquote>
        <figcaption className="mt-6 opacity-90">
          James O., Founder of Brightloop
        </figcaption>
      </figure>
    </div>
  </section>
  {/* ============ PACKAGES ============ */}
  <section
    id="packages"
    className="panel mx-2 rounded-[2.5rem] py-24 sm:mx-4 sm:rounded-[4rem]"
  >
    <div className="wrap">
      <h2 className="h2 max-w-2xl">Simple packages</h2>
      <p className="mt-3 text-muted">
        Sample pricing. Every project is scoped after a free call.
      </p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <article className="line rounded-[2rem] p-8">
          <h3 className="font-display text-2xl font-bold">Launch</h3>
          <p className="mt-1 text-muted">One-page brand site</p>
          <p className="mt-6 font-display text-4xl font-extrabold">
            From $2,400
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li>Custom design</li>
            <li>Next.js and Tailwind build</li>
            <li>Basic SEO setup</li>
            <li>2 weeks delivery</li>
          </ul>
        </article>
        <article className="rounded-[2rem] bg-accent p-8 text-on-accent lg:-mt-4 lg:pb-12">
          <h3 className="font-display text-2xl font-bold">Grow</h3>
          <p className="mt-1 opacity-90">Multi-page site with CMS</p>
          <p className="mt-6 font-display text-4xl font-extrabold">
            From $6,500
          </p>
          <ul className="mt-6 space-y-2 opacity-95">
            <li>Up to 10 pages</li>
            <li>Headless CMS</li>
            <li>Animations and analytics</li>
            <li>5 weeks delivery</li>
          </ul>
        </article>
        <article className="line rounded-[2rem] p-8">
          <h3 className="font-display text-2xl font-bold">Scale</h3>
          <p className="mt-1 text-muted">Custom web app</p>
          <p className="mt-6 font-display text-4xl font-extrabold">
            Let's talk
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li>Auth and database</li>
            <li>Dashboards and APIs</li>
            <li>Design system included</li>
            <li>Ongoing support</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</>

  );
}
