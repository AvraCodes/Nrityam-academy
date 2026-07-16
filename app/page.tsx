import Hero from "@/components/sections/Hero";
import ProblemStatement from "@/components/sections/ProblemStatement";
import VideoTestimonialsGallery from "@/components/sections/VideoTestimonialsGallery";
import { ModernPricingPage } from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const pricingPlans = [
  {
    planName: "Foundation",
    description: "Perfect for beginners starting their journey.",
    price: "49",
    features: [
      "2 Live sessions per week",
      "Access to session recordings",
      "Monthly feedback session",
      "Community group access",
    ],
    buttonText: "Start Learning",
    buttonVariant: "secondary" as const,
  },
  {
    planName: "Pro Student",
    description: "For serious students aiming for certification.",
    price: "89",
    features: [
      "4 Live sessions per week",
      "Lifetime access to recordings",
      "Weekly 1-on-1 feedback",
      "Certification preparation",
      "Theory & Abhinaya workshops",
    ],
    buttonText: "Enroll Now",
    buttonVariant: "primary" as const,
    isPopular: true,
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Hero />
      <ProblemStatement />
      <Team />
      <VideoTestimonialsGallery />
      <ModernPricingPage
        title="Investment in Your Art"
        subtitle="Choose the structured plan that fits your current level and goals."
        plans={pricingPlans}
      />
      <FAQ />
      <Contact />
    </div>
  );
}
