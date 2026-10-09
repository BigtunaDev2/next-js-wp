export default function Testimonial({ data }: { data: any }) {
return ( <section className="wrap py-24" aria-labelledby="t-h"> <h2 id="t-h" className="h2 max-w-2xl">
{data?.heading} </h2>
  <div className="mt-12 grid gap-6 md:grid-cols-2">
    {data?.cards?.map((card: any, index: number) => (
      <figure
        key={`${card.title}-${index}`}
        className={`rounded-[2rem] p-8 sm:p-10 ${
          index % 2 === 0
            ? "panel"
            : "bg-accent text-on-accent"
        }`}
      >
        <blockquote className="font-display text-2xl font-bold leading-snug sm:text-3xl">
          {card.copy?.trim()}
        </blockquote>

        <figcaption
          className={`mt-6 ${
            index % 2 === 0 ? "text-muted" : "opacity-90"
          }`}
        >
          {card.title}
        </figcaption>
      </figure>
    ))}
  </div>
</section>
);
}
