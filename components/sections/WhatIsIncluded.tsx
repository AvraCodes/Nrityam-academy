"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, HelpCircle, Award, UserCheck, Check } from "lucide-react";

const details = [
  {
    icon: Video,
    title: "Learning System",
    highlights: [
      "Live weekly classes (4-5 sessions/month)",
      "Full class recordings (lifetime access)",
      "PDF study notes + video guides",
      "Studio-recorded audio files for practice",
    ],
  },
  {
    icon: HelpCircle,
    title: "Support System",
    highlights: [
      "WhatsApp support (< 4-hour response)",
      "Direct Q&A sessions with the mentor",
      "Global community access & peer feedback",
      "Weekly homework check & video corrections",
    ],
  },
  {
    icon: Award,
    title: "Credibility & Certification",
    highlights: [
      "University-approved certification",
      "Kolkata Charukala Society & Rabindra Bharati University Dance Dept.",
      "Structured level-by-level curriculum",
      "Annual examinations and evaluations",
    ],
  },
  {
    icon: UserCheck,
    title: "1-on-1 Sessions",
    highlights: [
      "Customized goal-based training",
      "Personal evaluation & challenge assessment",
      "Faster results with dedicated expert guidance",
      "Individual correction sessions",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
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

export default function WhatIsIncluded() {
  return (
    <section id="what-is-included" className="bg-transparent py-20 md:py-28 text-text-main relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
              Features Included
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What is <em className="italic text-accent">Included</em> in the Training?
          </h2>

          <p className="text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            Everything you need to grow from a passionate learner to a confident performer.
          </p>
        </div>

        {/* Grid cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {details.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-8 bg-white/40 backdrop-blur-md border border-white/20 rounded-3xl hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col text-left group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary-glow/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-main font-sans">
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-3 flex-1">
                  {item.highlights.map((highlight, subIdx) => (
                    <li key={subIdx} className="flex items-start gap-3 text-sm text-text-muted leading-relaxed">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary-glow/10 flex items-center justify-center text-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
