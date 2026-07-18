import Hero from "@/components/sections/Hero";
import CoreBelief from "@/components/sections/CoreBelief";
import CurriculumStructure from "@/components/sections/CurriculumStructure";
import StudentJourney from "@/components/sections/StudentJourney";
import Process from "@/components/sections/Process";
import AcademyFeatures from "@/components/sections/AcademyFeatures";
import LearningPortal from "@/components/sections/LearningPortal";
import GlobalStudents from "@/components/sections/GlobalStudents";
import { ModernPricingPage } from "@/components/sections/Pricing";
import Team from "@/components/sections/Team";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";

const pricingPlans = [
  {
    planName: "Foundation",
    description: "Perfect for beginners starting their journey.",
    price: "3,999",
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
    price: "6,999",
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
    <div className="relative flex flex-col min-h-[100dvh] overflow-hidden">
      <Hero />
      <CoreBelief />
      <Process />
      <CurriculumStructure />
      <StudentJourney />
      <AcademyFeatures />
      <LearningPortal />
      <GlobalStudents />
      <Team />
      <ModernPricingPage
        title={<span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-secondary to-accent italic font-light pr-2">Investment in Your Art</span>}
        subtitle="Choose the structured plan that fits your current level and goals."
        plans={pricingPlans}
      />
      <FAQ />
      <FinalCTA />
      <Contact />
    </div>
  );
}
