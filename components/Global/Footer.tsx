export default function Footer({ footer }: { footer: any }) {
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
          {footer.heading}
        </h2>

        <p className="mt-5 max-w-xl text-lg opacity-85">
          {footer.copy}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={footer.primary.url}
            target={footer.primary.target || undefined}
            className="btn bg-sun text-ink"
            style={{
              backgroundColor: "rgb(var(--sun))",
              color: "#0a1640",
            }}
          >
            {footer.primary.title}
          </a>

          <a
            href={footer.secondary.url}
            target={footer.secondary.target || undefined}
            className="btn"
            style={{ border: "2px solid rgb(var(--bg))" }}
          >
            {footer.secondary.title}
          </a>
        </div>

        <div
          className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-sm opacity-85"
          style={{ borderColor: "rgb(var(--bg) / .3)" }}
        >
          <p>© 2026 Fieldwork Studio</p>

          <p>
            {footer.socialMedia.map((item: any, index: number) => (
              <span key={item.link.url}>
                {index > 0 && " · "}
                <a
                  href={item.link.url}
                  target={item.link.target || undefined}
                  rel={
                    item.link.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {item.link.title}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>


  )
}