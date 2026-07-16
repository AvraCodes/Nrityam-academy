import Enroll from "@/components/sections/Enroll";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col pt-32">
      <Enroll />
      <FAQ />
      <Contact />
    </div>
  );
}
