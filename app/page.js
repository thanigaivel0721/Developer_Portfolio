import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import dynamic from "next/dynamic";

// Dynamically import ScrollToTop for client-side rendering only
const ScrollToTop = dynamic(() => import("./components/helper/scroll-to-top"), { ssr: false });

async function getData() {
  try {
    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`, {
      next: { revalidate: 60 }, // Optional: ISR (Incremental Static Regeneration)
    });

    if (!res.ok) {
      console.error("Failed to fetch blogs");
      return [];
    }

    const data = await res.json();
    // Filter articles with cover images and shuffle them randomly
    return data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* Uncomment the Blog section once it's ready */}
      {/* blogs.length > 0 && <Blog blogs={blogs} /> */}
      <ContactSection />
      <ScrollToTop />
    </>
  );
}
