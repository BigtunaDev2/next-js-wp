export default function OurTeam({ data }: { data: any }) {
    const blobStyles = [
        "bg-accent text-on-accent",
        "bg-sun text-ink [border-radius:40%_60%_58%_42%/44%_58%_42%_56%]",
        "bg-ink text-bg [border-radius:55%_45%_38%_62%/60%_40%_60%_40%]",
        "bg-accent/80 text-on-accent [border-radius:45%_55%_60%_40%/50%_55%_45%_50%]",
    ];

    const getInitials = (name: string) =>
        name
            .trim()
            .split(/\s+/)
            .map((part) => part[0])
            .join("")
            .toUpperCase();

    return (
        <section id="team" className="bg-surface py-24">
            <div className="wrap">
                <h2 className="h2 max-w-2xl">{data?.heading}</h2>
                <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
                    {data?.cards?.map((card: any, index: number) => (
                        <li key={card.title}>
                            <div
                                className={`blob grid aspect-square place-items-center font-display text-5xl font-extrabold ${blobStyles[index % blobStyles.length]
                                    }`}
                                aria-hidden="true"
                            >
                                {getInitials(card.title)}
                            </div>

                            <p className="mt-4 font-display text-xl font-bold">
                                {card.title}
                            </p>

                            <p className="whitespace-pre-line text-muted">
                                {card.copy?.trim()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

    );
}
