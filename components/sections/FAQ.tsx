"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do online Bharatanatyam classes work?",
    answer: "Our classes combine live weekly sessions with lifetime access to studio-recorded audio files for home practice and direct WhatsApp mentor corrections. Students submit short practice clips weekly and receive direct audio/video critiques on posture and alignment.",
  },
  {
    question: "What if I miss a live class?",
    answer: "Every live class is recorded and uploaded to the student portal within 2 hours. You get lifetime access to all recordings, meaning you can review materials and practice on your own schedule without falling behind.",
  },
  {
    question: "How does the university-approved certification work?",
    answer: "Nrityaam holds affiliations with Rabindra Bharati University Dance Dept. and Kolkata Charukala Society. We hold annual examinations and structured level evaluations. Successful candidates receive accredited classical certification for each level completed.",
  },
  {
    question: "Is there a minimum age or physical requirement to enroll?",
    answer: "We welcome serious students of all ages above 10. The training system includes stamina conditioning and posture correction drills (Angasudhi), so no previous athletic or dance history is required to begin.",
  },
  {
    question: "What is the assessment call like?",
    answer: "It's a friendly 15-minute 1-on-1 meeting on WhatsApp or Zoom with Ranbbir sir. He reviews your current experience level (if any), looks at flexibility/posture basic capability, and drafts a customized level-by-level curriculum roadmap for you.",
  },
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border border-white/20 rounded-2xl bg-white/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-primary/20">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left font-semibold text-text-main hover:text-primary transition-colors cursor-pointer select-none"
      >
        <span className="text-base md:text-lg pr-4 font-sans">{item.question}</span>
        <div className={`p-1.5 rounded-full transition-colors flex-shrink-0 ${
          isOpen ? "bg-primary text-white" : "bg-bg-subtle text-text-muted"
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-1 text-text-muted text-sm md:text-base leading-relaxed border-t border-bg-subtle">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-transparent py-20 md:py-28 overflow-hidden text-text-main border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4 font-serif"
          >
            Got <em className="italic text-accent">Questions?</em>
          </h2>

          <p className="text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            Everything you need to know about joining Nrityaam, class structures, certifications, and assessment roadmaps.
          </p>
        </div>

        {/* Accordions stack */}
        <div className="space-y-4">
          {faqData.map((item, idx) => (
            <AccordionItem
              key={idx}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
