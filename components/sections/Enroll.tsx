"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Clipboard, Compass, Award } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Book your 15-minute meeting",
    desc: "Schedule a quick call with Ranbir sir to introduce yourself and share your goals.",
  },
  {
    icon: Clipboard,
    title: "Current Goals & Challenges Assessment",
    desc: "We will review your previous dance training, check physical stamina, and assess challenges.",
  },
  {
    icon: Compass,
    title: "Get a Custom Roadmap",
    desc: "Obtain a direct level placement and step-by-step curriculum customized for YOUR journey.",
  },
  {
    icon: Award,
    title: "Decide Why Nrityaam is Right",
    desc: "Enroll in the monthly system with support structures, and begin training right away.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Enroll() {
  return (
    <section id="enroll" className="bg-bg-ivory py-20 md:py-28 text-text-main relative border-t border-text-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
              Next Steps
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Ready to <em className="italic text-accent">Transform</em> Your Journey?
          </h2>

          <p className="text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            Here is the step-by-step process of joining Nrityaam and mapping out your classical training.
          </p>
        </div>

        {/* Steps roadmap timeline layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-white/5 dark:bg-white/5 border border-text-light/20 rounded-3xl hover:shadow-lg transition-all duration-300 relative text-left group"
              >
                {/* Step indicator number */}
                <div className="absolute top-6 right-6 text-5xl font-serif text-text-light/20 group-hover:text-primary/10 transition-colors font-bold select-none">
                  0{idx + 1}
                </div>

                <div className="w-10 h-10 rounded-xl bg-primary-glow/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-semibold text-text-main mb-3 leading-tight font-sans">
                  {step.title}
                </h3>

                <p className="text-text-muted text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Direct CTA callout */}
        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-full shadow-primary hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            Start Your Road Assessment Now
          </button>
        </div>

      </div>
    </section>
  );
}
