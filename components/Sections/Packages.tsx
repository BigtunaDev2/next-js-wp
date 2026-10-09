export default function Packages({ data }: { data: any }) {
  return (
    <section
      id="packages"
      className="panel mx-2 rounded-[2.5rem] py-24 sm:mx-4 sm:rounded-[4rem]"
    > <div className="wrap">
        <h2 className="h2 max-w-2xl">{data?.heading}</h2>
        <p className="mt-3 whitespace-pre-line text-muted">
          {data?.copy?.trim()}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {data?.cards?.map((card: any, index: number) => (
            <article
              key={card.title}
              className={`rounded-[2rem] p-8 ${card.isFeatured
                ? "bg-accent text-on-accent lg:-mt-4 lg:pb-12"
                : "line"
                }`}
            >
              <h3 className="font-display text-2xl font-bold">
                {card.title}
              </h3>

              <p
                className={`mt-1 ${card.isFeatured ? "opacity-90" : "text-muted"
                  }`}
              >
                {card.subTitle}
              </p>

              <p className="mt-6 font-display text-4xl font-extrabold">
                {card.price}
              </p>

              <div className={`mt-6 space-y-2 ${card.isFeatured ? "text-on-accent [&_ul]:opacity-95" : "text-muted"} [&_ul]:space-y-2 [&_ul]:list-none`} dangerouslySetInnerHTML={{ __html: card.copy ?? "" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
