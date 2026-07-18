"use client";

import React from "react";
import Image from "next/image";
import { m as motion } from "framer-motion";
import { Award, ShieldCheck, Presentation, Tv } from "lucide-react";

const details = [
  {
    icon: Award,
    title: "CCRT National Scholarship",
    desc: "Prestigious holder of both Junior & Senior scholarships in classical dance.",
  },
  {
    icon: ShieldCheck,
    title: "3X World of Dance Champion",
    desc: "DV Solo category champion, competing and winning on global stages.",
  },
  {
    icon: Presentation,
    title: "Dhaka University Speaker",
    desc: "Key speaker at the ICTMD 3rd International Symposium.",
  },
  {
    icon: Tv,
    title: "12+ Years Bengali TV",
    desc: "Renowned Choreographer and director of dance programs on television.",
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

export default function Mentor() {
  return (
 <section id="mentor" className="bg-bg-subtle py-20 md:py-28 overflow-hidden text-text-main relative ">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-glow/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mentor Bio & Image */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-primary" />
              <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Meet Your Mentor
              </span>
            <div className="h-[1px] w-12 bg-primary/40" />
            </div>

            <h2
              className="text-4xl md:text-5xl font-light leading-tight text-primary mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Ranbbir <em className="italic text-accent">Banerjee</em>
            </h2>

            {/* Profile Image card wrapper */}
            <div className="relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden mb-6 group border border-text-light/20 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop"
                alt="Ranbbir Banerjee headshot portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-[10px] uppercase tracking-widest text-secondary font-bold">Founder & Lead Mentor</span>
                <h4 className="text-lg font-semibold text-white">Ranbbir Banerjee</h4>
              </div>
            </div>

            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
              A renowned Bharatanatyam dancer and mentor, Ranbbir Banerjee has spent over <strong>19 years</strong> in the industry, mentoring <strong>850+ students</strong> across <strong>25+ countries</strong>.
            </p>
          </div>

          {/* Right Column: Key Achievements details */}
          <div className="lg:col-span-7">
            <div className="mb-10 text-left">
              <h3
                className="text-2xl md:text-3xl font-light text-primary mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Learn from <em className="italic text-accent">Ranbbir?</em>
              </h3>
              <p className="text-text-light text-sm">
                A track record of excellence in classical performance and academic mentorship.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {details.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="p-6 bg-white dark:bg-white/5 dark:bg-white/5 border border-text-light/10 rounded-2xl hover:border-primary/25 transition-all duration-300 flex flex-col text-left group hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-glow/10 text-primary flex items-center justify-center border border-primary/20 mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-text-main mb-2 font-sans">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
