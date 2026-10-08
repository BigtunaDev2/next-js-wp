export default function Hero({ data }) {
    return (
        <section className="relative overflow-hidden pb-0 pt-16 md:pt-24">
    <div aria-hidden="true" className="grid-bg absolute inset-0" />
    <div className="wrap relative">
      {data.eyebrow && (
        <p className="panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-sun" /> {data.eyebrow}
        </p>
      )}
      <h1 className="mt-7 max-w-5xl font-display text-5xl font-extrabold leading-[1] tracking-tight sm:text-7xl lg:text-8xl">
        {data.heading}
      </h1>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={data.primaryButton?.url} target={data.primaryButton?.target} className="btn btn-solid">
            {data.primaryButton?.title}
          </a>
          <a href={data.secondaryButton?.url} target={data.secondaryButton?.target} className="btn btn-line">
            {data.secondaryButton?.title}
          </a>
        </div>
      </div>
      {/* Three arches */}
      <div
        className="mt-16 grid grid-cols-3 items-end gap-3 sm:gap-6"
        aria-hidden="true"
      >
        <div className="h-56 rounded-t-[999px] bg-sun p-5 sm:h-80 sm:p-8">
          <div className="mx-auto mt-8 h-3 w-3/5 rounded bg-ink" />
          <div className="mx-auto mt-3 h-2 w-2/5 rounded bg-ink/40" />
          <div className="mx-auto mt-6 h-10 w-24 rounded-full bg-ink" />
        </div>
        <div className="h-72 rounded-t-[999px] bg-accent p-5 sm:h-[26rem] sm:p-8">
          <div className="mx-auto mt-12 grid w-4/5 grid-cols-2 gap-2">
            <i className="h-16 rounded-2xl bg-on-accent/90 sm:h-24" />
            <i className="h-16 rounded-2xl bg-on-accent/40 sm:h-24" />
            <i className="h-16 rounded-2xl bg-on-accent/40 sm:h-24" />
            <i className="h-16 rounded-2xl bg-on-accent/90 sm:h-24" />
          </div>
        </div>
        <div className="panel h-44 rounded-t-[999px] p-5 sm:h-64 sm:p-8">
          <pre className="mt-4 overflow-hidden text-center font-mono text-[10px] leading-5 text-muted sm:mt-10 sm:text-xs">
            &lt;Hero /&gt;{"\n"}&lt;Work /&gt;{"\n"}&lt;Contact /&gt;
          </pre>
        </div>
      </div>
    </div>
  </section>
      )
}