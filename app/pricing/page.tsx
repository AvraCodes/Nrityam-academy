import { ModernPricingPage } from "@/components/sections/Pricing";
import WhatIsIncluded from "@/components/sections/WhatIsIncluded";

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

export default function PricingRoute() {
  return (
    <div className="flex flex-col pb-20">
      <ModernPricingPage
        title={<span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-secondary to-accent italic font-light pr-2">Investment in Your Art</span>}
        subtitle="Choose the structured plan that fits your current level and goals."
        plans={pricingPlans}
        showAnimatedBackground={true}
      />
      <div className="-mt-16">
        <WhatIsIncluded />
      </div>
    </div>
  );
}
