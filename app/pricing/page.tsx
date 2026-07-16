import { ModernPricingPage } from "@/components/sections/Pricing";

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

export default function PricingRoute() {
  return (
    <ModernPricingPage
      title="Investment in Your Art"
      subtitle="Choose the structured plan that fits your current level and goals."
      plans={pricingPlans}
      showAnimatedBackground={true}
    />
  );
}
