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

export default async function Home() {
  let blogs = [];
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      { next: { revalidate: 60 } } // Enable ISR
    );

    if (res.ok) {
      const data = await res.json();
      blogs = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);
    } else {
      console.error("Failed to fetch blogs");
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* Uncomment this section once you add the Blog component */}
      {/* blogs.length > 0 && <Blog blogs={blogs} /> */}
      <ContactSection />
      <ScrollToTop />
    </>
  );
}
