"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowDown } from "lucide-react";

const struggles = [
  "No clear learning structure / can't find a structured & modern training system",
  "Learning choreography without strong basics",
  "Lack of stamina & angasudhi (proper posture & alignment)",
  "Theory, talam (rhythm) & abhinaya (expression) feel confusing",
  "Watch random tutorials... then feel more confused",
  "Progress feels slow or inconsistent",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function ProblemStatement() {
  return (
 <section id="system" className="bg-transparent py-20 md:py-28 overflow-hidden text-text-main relative border-white/10">
      {/* Background styling elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-glow/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-light/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and Callout */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
                The Hard Truth
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-light leading-tight text-primary mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Most Bharatanatyam Students <em className="italic text-accent">Struggle</em> Because...
            </h2>

            <p className="text-text-muted text-base leading-relaxed mb-8">
              Classical dance requires rigorous discipline, but without the right guidance, hours of practice often yield minimal improvement.
            </p>

            {/* Result callout card */}
            <div className="p-6 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/40 rounded-2xl shadow-md relative overflow-hidden group hover:bg-white/60 dark:bg-white/5 hover:border-primary/30 transition-colors">
              <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                The Common Result
              </div>
              <h3 className="text-xl font-medium text-text-main mb-2 font-sans">
                Months & Years of Effort...
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                But very little visible improvement in posture, rhythm, or stage confidence.
              </p>
            </div>
          </div>

          {/* Right Column: Struggles Checklist */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {struggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-5 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/40 rounded-2xl transition-all duration-300 group hover:translate-y-[-2px] hover:border-primary/40 hover:bg-white/70 dark:bg-white/5 hover:shadow-md"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-glow/10 border border-primary/20 text-primary font-sans text-sm font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </div>
                  <div className="text-left">
                    <p className="text-text-main text-sm md:text-base font-normal leading-relaxed group-hover:text-primary transition-colors">
                      {struggle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
