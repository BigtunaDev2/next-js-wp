import type { Metadata } from "next";
import { Syne, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Global/Header";
import Footer from "@/components/Global/Footer";
import { getGlobal } from "@/lib/global";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });

// Default title for every page. Pages override it with generateMetadata.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Fieldwork Studio", template: "%s | Fieldwork" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Global data: fetched once here and shared by Header and Footer
  const g = await getGlobal().catch(() => null);
  const settings = g?.siteSettings?.siteSettings;
  const megaMenu = g?.myGlobalSetting?.myACFSetting?.megaMenu
  const footer = g.myGlobalSetting?.myACFSetting?.footer;
  console.log("Footer data:", footer);
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${hanken.variable}`}>
      <body>
        <Providers>
          <Header menu={g?.primary?.menuItems?.nodes ?? []} settings={settings} megaMenu={megaMenu} />
          {children}
          <Footer footer={footer} />
        </Providers>
      </body>
    </html>
  );
}
