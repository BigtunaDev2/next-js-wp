export default function HowWeWork({ data }: { data: any }) {
    return (
        <section id="process" className="wrap py-24">
            <h2 className="h2 max-w-2xl">{data?.heading}</h2>

            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {data?.cards?.map((card: any, index: number) => (

                    <li key={card.title} className="panel rounded-[2rem] rounded-tl-[4rem] p-7" style={{ marginTop: index === 0 ? 0 : `${index * 2}rem`, }} > <span className={`grid h-12 w-12 place-items-center rounded-full font-display text-xl font-bold ${index % 2 === 0 ? "bg-accent text-on-accent" : "bg-sun text-ink"}`} > {index + 1} </span>

                        <h3 className="mt-5 font-display text-2xl font-bold">
                            {card.title}
                        </h3>

                        <p className="mt-2 whitespace-pre-line text-muted">
                            {card.copy?.trim()}
                        </p>

                    </li>))}
            </ol>
        </section>

    );
}
