
export default function RecentProjects({ data }: { data: any }) {
    const cardStyles = [
        {
            background: "bg-accent",
            corner: "rounded-br-[7rem]",
            order: "",
            visual: "storefront",
        },
        {
            background: "bg-sun",
            corner: "rounded-bl-[7rem]",
            order: "md:order-2",
            visual: "chart",
        },
        {
            background: "bg-ink",
            corner: "rounded-tr-[7rem]",
            order: "",
            visual: "content",
        },
    ];

    return (
        <section
            id="work"
            className="panel mx-2 rounded-[2.5rem] py-24 sm:mx-4 sm:rounded-[4rem]"
        >
            <div className="wrap">
                <h2 className="h2 max-w-2xl">
                    {data?.heading}
                </h2>

                <p className="mt-3 text-muted">
                    {data?.description}
                </p>

                <div className="mt-14 space-y-20">
                    {data?.cards?.map((card: any, index: number) => {
                        const style = cardStyles[index % cardStyles.length];

                        return (
                            <a
                                href="#"
                                key={index}
                                className="group grid items-center gap-8 md:grid-cols-2"
                            >
                                {/* Visual */}
                                <div className={`relative overflow-hidden rounded-[2rem] ${style.corner} ${style.background} p-8 sm:p-12 ${style.order}`}>
                                    <div className="rounded-2xl bg-surface p-4" aria-hidden="true">

                                        {style.visual === "storefront" && (
                                            <>
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
                                            </>
                                        )}

                                        {style.visual === "chart" && (
                                            <div className="flex h-32 items-end gap-2">
                                                <i className="h-1/3 flex-1 rounded-t-lg bg-accent/40" />
                                                <i className="h-2/3 flex-1 rounded-t-lg bg-accent" />
                                                <i className="h-1/2 flex-1 rounded-t-lg bg-accent/40" />
                                                <i className="h-5/6 flex-1 rounded-t-lg bg-ink" />
                                                <i className="h-3/5 flex-1 rounded-t-lg bg-accent/40" />
                                            </div>
                                        )}

                                        {style.visual === "content" && (
                                            <div className="space-y-2.5">
                                                <i className="block h-4 w-2/3 rounded bg-ink" />
                                                <i className="block h-2 w-full rounded bg-muted/50" />
                                                <i className="block h-2 w-5/6 rounded bg-muted/50" />
                                                <i className="mt-4 block h-9 w-28 rounded-full bg-accent" />
                                            </div>
                                        )}

                                    </div>
                                </div>

                                {/* Text */}
                                <div className={index === 1 ? "md:order-1" : ""}>
                                    <p className="text-sm font-medium text-muted">
                                        {card.subHeading}
                                    </p>

                                    <h3 className="mt-2 font-display text-3xl font-bold group-hover:text-accent sm:text-4xl">
                                        {card.heading}
                                    </h3>

                                    <p className="mt-3 max-w-md text-muted">
                                        {card.copy}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}