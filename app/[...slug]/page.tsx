import { notFound } from "next/navigation";
import { wpQuery } from "@/lib/wp";
import { generateSEOMetadata } from "@/lib/seo";
import { CMS_PAGE_QUERY } from "@/lib/queries";

export const instant = false;

type PageProps = {
    params: Promise<{ slug: string[] }>;
};

async function getPage(uri: string) {
    const data = await wpQuery<any>(CMS_PAGE_QUERY, {
        uri,
    });

    return data?.page ?? null;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const uri = `/${slug.join("/")}/`;

    const page = await getPage(uri);

    if (!page) {
        return {};
    }

    return generateSEOMetadata(page.seo);
}

export default async function CMSPage({ params }: PageProps) {
    const { slug } = await params;
    const uri = `/${slug.join("/")}/`;

    const page = await getPage(uri);

    if (!page) {
        notFound();
    }
    /*
    {page.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: page.content,
          }}
        />
      )}
    */
    return (
        <main id="main">
            <article className="wrap pb-8 pt-16 md:pt-24">
                {/* Title + intro (WordPress: page title, optional excerpt) */}
                <div className="mx-auto max-w-3xl">
                    <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                        {page.title}
                    </h1>
                </div>
                {/* Thumbnail (WordPress: featured image). Remove the whole <figure> if a page has none. */}
                <figure className="mx-auto mt-12 max-w-5xl">
                    <div className="overflow-hidden rounded-[2rem] rounded-br-[6rem] bg-accent/15">
                        { page.featuredImage && (
                            <img
                                src={page.featuredImage?.node?.sourceUrl}
                                alt={page.featuredImage?.node?.altText}
                                className="h-full w-full object-cover"
                                width={1200}
                                height={600}
                            />
                        )}
                    </div>
                </figure>
                {/* Content (WordPress: the editor content, output as HTML) */}
                {page.content && (
                    <div
                    dangerouslySetInnerHTML={{
                        __html: page.content,
                    }}
                    />
                )}
            </article>
        </main>
    );
}