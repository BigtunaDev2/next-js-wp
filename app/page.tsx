import Image from "next/image";
import { wpQuery } from "@/lib/wp";
import { HOME_QUERY } from "@/lib/queries";
import Hero from "@/components/Sections/Hero";
import TrustedBy from "@/components/Sections/TrustedBy";
import Services from "@/components/Sections/Services";
import type { Metadata } from "next";
import RecentProjects from "@/components/Sections/RecentProjects";
import HowWeWork from "@/components/Sections/HowWeWork";
import OurTeam from "@/components/Sections/OurTeam";
import Testimonial from "@/components/Sections/Testimonial";
import Packages from "@/components/Sections/Packages";

async function getPage() {
  const data = await wpQuery<any>(HOME_QUERY);
  return data.page;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPage();
  console.log("data", data.title);
  const seo = {title: data?.title, metaDesc: data?.content};

  return {
    title: seo?.title || data?.page?.title || "My Website",
    description: seo?.metaDesc || "",
  };
}


export default async function Home() {
  const data = await getPage();
  const { homepage } = data;
  
  return (
    <>
      {(homepage.banner && <Hero data={homepage?.banner}/>) || null}

      {/* ============ CLIENTS ============ */}
      <TrustedBy data={homepage?.logos} />

      {/* ============ SERVICES: sticky split + accordion ============ */}
      <Services data={homepage?.services} />

      {/* ============ WORK: case studies ============ */}
      <RecentProjects data={homepage?.recentProjects} />


      {/* ============ PROCESS ============ */}
      <HowWeWork data={homepage?.howWeWork} />


      {/* ============ TEAM ============ */}
      <OurTeam data={homepage?.team} />

      {/* ============ TESTIMONIALS ============ */}
      <Testimonial data={homepage?.testimonial} />

      {/* ============ PACKAGES ============ */}
      <Packages data={homepage?.packages} />
      </>

      );
}

