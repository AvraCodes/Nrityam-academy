import Mentor from "@/components/sections/Mentor";
import Gallery from "@/components/sections/Gallery";
import Team from "@/components/sections/Team";

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-32">
      <Mentor />
      <Team />
      <Gallery />
    </div>
  );
}
