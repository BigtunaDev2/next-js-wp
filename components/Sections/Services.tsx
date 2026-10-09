export default function Services( { data }: { data: any }) {
  return (
    <section
      id="services"
      className="wrap grid gap-10 py-24 lg:grid-cols-[1fr_1.7fr]"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="h2">{data?.title}</h2>
        <p className="mt-4 max-w-sm text-muted">
          {data?.description}
        </p>
      </div>
      <div className="divide-y divide-ink/20 border-y border-ink/20">
        {data?.accordion.map((accordion: { heading: string; copy: string }, index: number) => (
          <details className="group py-6" key={index}>
          <summary className="flex items-center justify-between gap-4">
            <span className="font-display text-2xl font-bold sm:text-3xl">
              {accordion.heading}
            </span>
            <span className="plus grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-xl text-on-accent">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-lg text-muted">
            {accordion.copy}
          </p>
        </details>
        ))}
      </div>
    </section>
  )
}