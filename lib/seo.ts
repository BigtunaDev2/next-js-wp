
import type { Metadata } from "next";

export function generateSEOMetadata(seo: any): Metadata {
  return {
    title: seo?.title || undefined,
    description: seo?.metaDesc || undefined,

    alternates: {
      canonical: seo?.canonical || undefined,
    },

    openGraph: {
      title: seo?.opengraphTitle || seo?.title || undefined,
      description:
        seo?.opengraphDescription || seo?.metaDesc || undefined,
      url: seo?.canonical || undefined,
      images: seo?.opengraphImage?.sourceUrl
        ? [
            {
              url: seo.opengraphImage.sourceUrl,
              alt: seo.opengraphImage.altText || "",
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.twitterTitle || seo?.title || undefined,
      description:
        seo?.twitterDescription || seo?.metaDesc || undefined,
      images: seo?.opengraphImage?.sourceUrl
        ? [seo.opengraphImage.sourceUrl]
        : undefined,
    },
  };
}
