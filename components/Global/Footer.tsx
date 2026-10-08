export default function Footer() {
  return (
    <section
  id="contact"
  className="relative mt-24 overflow-hidden bg-ink text-bg"
>
  <svg
    aria-hidden="true"
    className="block w-full text-bg"
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    height={60}
  >
    <path
      fill="currentColor"
      d="M0 0h1440v20c-240 60-480 60-720 30S240 10 0 40z"
    />
  </svg>
  <div
    aria-hidden="true"
    className="blob absolute -right-24 top-20 h-96 w-96 bg-accent/40 blur-2xl"
  />
  <div className="wrap relative pb-16 pt-14">
    <h2 className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl">
      Got an idea? Let's build it.
    </h2>
    <p className="mt-5 max-w-xl text-lg opacity-85">
      Send a short note about your project. We reply within one working day.
    </p>
    <div className="mt-9 flex flex-wrap gap-3">
      <a
        href="mailto:hello@fieldwork.studio"
        className="btn bg-sun text-ink"
        style={{ backgroundColor: "rgb(var(--sun))", color: "#0a1640" }}
      >
        hello@fieldwork.studio
      </a>
      <a
        href="#"
        className="btn"
        style={{ border: "2px solid rgb(var(--bg))" }}
      >
        Book a call
      </a>
    </div>
    <div
      className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-sm opacity-85"
      style={{ borderColor: "rgb(var(--bg) / .3)" }}
    >
      <p>
        © <span id="year">2026</span> Fieldwork Studio
      </p>
      <p>Instagram · LinkedIn · Dribbble</p>
    </div>
  </div>
</section>

  )
}