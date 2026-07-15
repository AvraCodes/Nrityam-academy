import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import System from "@/components/sections/System";
import WhatIsIncluded from "@/components/sections/WhatIsIncluded";
import Mentor from "@/components/sections/Mentor";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Enroll from "@/components/sections/Enroll";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemStatement />
      <System />
      <WhatIsIncluded />
      <Mentor />
      <Testimonials />
      <Gallery />
      <Enroll />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
