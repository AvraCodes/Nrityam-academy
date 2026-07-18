"use client";

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { RippleButton } from "@/components/ui/multi-type-ripple-buttons";
import { Check } from 'lucide-react';
import { TiltCard } from "@/components/ui/tilt-card";

// --- Internal Helper Components (Not exported) --- //

const CheckIcon = ({ className }: { className?: string }) => (
  <Check className={className} strokeWidth={3} />
);

import { usePathname } from 'next/navigation';

// --- EXPORTED Building Blocks --- //

/**
 * We export the Props interface so you can easily type the data for your plans.
 */
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
}

/**
 * We export the PricingCard component itself in case you want to use it elsewhere.
 */
export const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, buttonVariant = 'primary'
}: PricingCardProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const cardClasses = `
    backdrop-blur-xl bg-white/40 dark:bg-white/5 rounded-3xl shadow-xl flex-1 max-w-sm px-8 py-10 flex flex-col transition-all duration-300
    border border-white/40 relative z-10 cursor-pointer
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? 'scale-105 relative ring-2 ring-primary/40 shadow-2xl hover:scale-[1.08]' : 'hover:scale-[1.03]'}
  `;
  
  const buttonClasses = `
    mt-10 w-full py-3 rounded-full font-semibold text-sm transition-all duration-300 font-sans cursor-pointer
    ${buttonVariant === 'primary' 
      ? 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20' 
      : 'bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:bg-white/5 text-text-main border border-white/60 dark:bg-white/10 dark:bg-white/5 dark:hover:bg-white/20 dark:bg-white/5 dark:text-white dark:border-white/20'
    }
  `;

  const displayButtonText = isHomePage ? "View Plan Benefits" : buttonText;
  const linkHref = isHomePage ? "/pricing" : "/contact";

  return (
    <Link href={linkHref} className="flex flex-1 max-w-sm">
      <TiltCard className={cardClasses.trim()} spotlight={true} tiltLimit={8}>
        {isPopular && (
          <div className="absolute -top-4 right-8 px-4 py-1 text-xs font-semibold rounded-full bg-primary text-white shadow-md">
            Most Popular
          </div>
        )}
        <div className="mb-4">
          <h2 className="text-3xl font-serif leading-relaxed text-primary">{planName}</h2>
          <p className="text-sm text-text-muted mt-2 font-medium">{description}</p>
        </div>
        <div className="my-6 flex items-baseline gap-2 text-text-main">
          <span className="text-5xl font-light font-serif leading-relaxed">₹{price}</span>
          <span className="text-sm text-text-muted font-medium">/mo</span>
        </div>
        <div className="card-divider w-full mb-6 h-px bg-gradient-to-r from-transparent via-text-main/10 to-transparent"></div>
        <ul className="flex flex-col gap-4 text-sm text-text-main font-medium mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckIcon className="text-primary w-5 h-5 shrink-0 mt-0.5" /> 
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="w-full mt-auto block">
          <RippleButton className={buttonClasses.trim()}>{displayButtonText}</RippleButton>
        </div>
      </TiltCard>
    </Link>
  );
};


// --- EXPORTED Customizable Page Component --- //

interface ModernPricingPageProps {
  /** The main title. Can be a string or a ReactNode for more complex content. */
  title: React.ReactNode;
  /** The subtitle text appearing below the main title. */
  subtitle: React.ReactNode;
  /** An array of plan objects that conform to PricingCardProps. */
  plans: PricingCardProps[];
  /** Whether to show the animated WebGL background. Defaults to true. */
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
}: ModernPricingPageProps) => {
  return (
    <div id="pricing" className="relative bg-transparent text-text-main w-full overflow-hidden pb-32">
      <main className="relative z-10 w-full flex flex-col items-center justify-center px-4 pt-32">
        <div className="w-full max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light leading-relaxed text-primary font-serif mb-6">
            {title}
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full max-w-5xl relative z-10">
          {plans.map((plan) => <PricingCard key={plan.planName} {...plan} />)}
        </div>
      </main>
    </div>
  );
};
