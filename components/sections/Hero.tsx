"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import TextReveal from "../ui/TextReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full text-text-main overflow-hidden h-screen min-h-[700px] flex items-center bg-transparent"
    >
      {/* ── Background layers (Light theme configuration with premium blur) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {/* Ambient Radial Glow */}
        <div className="absolute top-[30%] left-[-10%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-primary/15 to-secondary/10 blur-[100px] opacity-60" />
      </motion.div>

      {/* ── Foreground content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center w-full">
        {/* Main hero copy (Left Aligned) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-start text-left max-w-2xl ml-0 mr-auto pt-20"
        >


          {/* Headline with TextReveal */}
          <div className="mb-6">
            <TextReveal
              text="The Structured"
              className="text-5xl md:text-7xl font-light mb-1 leading-tight text-primary font-sans"
              delay={0}
            />
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-7xl pb-2 font-light bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent italic font-serif"
            >
              Bharatanatyam
            </motion.h2>
            <TextReveal
              text="Training System"
              className="text-5xl md:text-7xl font-light text-text-main font-sans"
              delay={0.2}
            />
          </div>

          <motion.p
            variants={itemVariants}
            className="text-text-main/90 mb-10 max-w-xl text-base md:text-lg leading-relaxed font-light tracking-wide"
          >
            A proven learning path from foundation to stage — taught by Ranbbir
            Banerjee, a CCRT National Scholar and 3× World of Dance champion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-start gap-5"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-light text-white font-medium rounded-full transition-all duration-300 shadow-xl shadow-primary/20 cursor-pointer border border-white/10"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                href="/curriculum"
                className="px-8 py-4 bg-white/50 backdrop-blur-md border border-white/60 hover:bg-white/80 text-text-main font-medium rounded-full transition-all duration-300 cursor-pointer shadow-sm"
              >
                Explore the System
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
