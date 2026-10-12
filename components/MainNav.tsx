import Link from "next/link";

type Item = {
  id: string; label: string; path?: string | null; url?: string | null;
  cssClasses?: string[] | null; childItems?: { nodes: Item[] } | null;
};

const kids = (i: Item) => i.childItems?.nodes ?? [];

function NavLink({ item, className }: { item: Item; className?: string }) {
  if (item.url?.startsWith("#")) return <a href={item.url} className={className}>{item.label}</a>;
  if (item.path?.startsWith("/")) return <Link href={item.path} className={className}>{item.label}</Link>;
  return <a href={item.url ?? "#"} className={className}>{item.label}</a>;
}

/* Full class names (not built dynamically) so Tailwind can see them */
const topPanel =
  "invisible absolute z-50 opacity-0 transition duration-200 " +
  "group-hover/top:visible group-hover/top:opacity-100 " +
  "group-focus-within/top:visible group-focus-within/top:opacity-100";
const subPanel =
  "invisible absolute z-50 opacity-0 transition duration-200 " +
  "group-hover/sub:visible group-hover/sub:opacity-100 " +
  "group-focus-within/sub:visible group-focus-within/sub:opacity-100";

export default function MainNav({ items }: { items: Item[] }) {
  return (
    <>
      {/* ---------- Desktop ---------- */}
      <ul className="hidden items-center gap-1 lg:flex">
        {items.map((top) => {
          const level2 = kids(top);
          const mega = top.cssClasses?.includes("mega");
          return (
            // Mega item is NOT "relative", so its panel spans the whole <nav> (which must be "relative")
            <li key={top.id} className={`group/top ${mega ? "" : "relative"}`}>
              <NavLink item={top} className="block rounded-full px-4 py-2 text-sm font-medium hover:text-accent" />

              {level2.length > 0 && mega && (
                <div className={`${topPanel} left-0 right-0 top-full pt-3`}>
                  <div className="panel grid gap-8 rounded-[2rem] p-8 sm:grid-cols-3">
                    {level2.map((col) => (
                      <div key={col.id}>
                        <NavLink item={col} className="font-display text-lg font-bold hover:text-accent" />
                        <ul className="mt-3 space-y-2">
                          {kids(col).map((l) => (
                            <li key={l.id}><NavLink item={l} className="text-muted hover:text-accent" /></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {level2.length > 0 && !mega && (
                <div className={`${topPanel} left-0 top-full w-64 pt-3`}>
                  <ul className="panel rounded-2xl p-2">
                    {level2.map((l2) => {
                      const level3 = kids(l2);
                      return (
                        <li key={l2.id} className="group/sub relative">
                          <NavLink item={l2} className="flex items-center justify-between rounded-xl px-3 py-2 text-sm hover:bg-accent/10" />
                          {level3.length > 0 && (
                            <div className={`${subPanel} left-full top-0 w-60 pl-2`}>
                              <ul className="panel rounded-2xl p-2">
                                {level3.map((l3) => (
                                  <li key={l3.id}>
                                    <NavLink item={l3} className="block rounded-xl px-3 py-2 text-sm hover:bg-accent/10" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* ---------- Mobile ---------- */}
      <details className="lg:hidden">
        <summary className="line cursor-pointer list-none rounded-full px-4 py-2 text-sm font-medium">Menu</summary>
        <div className="panel absolute left-0 right-0 top-full mt-2 max-h-[75vh] overflow-y-auto rounded-3xl p-4">
          <MobileList items={items} />
        </div>
      </details>
    </>
  );
}

function MobileList({ items, depth = 0 }: { items: Item[]; depth?: number }) {
  return (
    <ul className={depth ? "ml-3 border-l border-ink/20 pl-3" : ""}>
      {items.map((i) => (
        <li key={i.id} className="py-1">
          {kids(i).length ? (
            <details>
              <summary className="cursor-pointer py-1 font-medium">{i.label}</summary>
              <MobileList items={kids(i)} depth={depth + 1} />
            </details>
          ) : (
            <NavLink item={i} className="block py-1" />
          )}
        </li>
      ))}
    </ul>
  );
}
