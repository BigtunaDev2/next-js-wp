export default function TrustedBy({ data }: { data: any }) {
  return (
    <section className="bg-ink py-10 text-bg" aria-label="Clients">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
        <p className="text-sm font-medium opacity-80">Trusted by teams at</p>
        <ul className="flex flex-1 flex-wrap items-center justify-between gap-x-8 gap-y-3 font-display text-xl font-bold">
          {data.map((client : { logo: string }, index: number) => (
            <li key={index}>{client.logo}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}