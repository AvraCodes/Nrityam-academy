"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* ─── Navbar ────────────────────────────────────────────────────── */
const NAV_LINKS = ["System", "Mentor", "Reviews", "Contact"];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-5 backdrop-blur-xl bg-white/60 border border-text-light/10 rounded-full py-3.5 flex justify-between items-center mb-14 shadow-sm"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl font-semibold text-text-main tracking-wide">
            Nrityaam
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() =>
                document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-4 py-2 text-sm text-text-muted hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              {link}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/916291333077"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 text-sm text-text-muted hover:text-text-main transition-colors"
          >
            WhatsApp
          </a>
          <button
            id="nav-book-cta"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer border border-white/10 shadow-primary"
          >
            Book a Call
          </button>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-1.5 text-text-muted hover:text-text-main cursor-pointer"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-bg-ivory/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-lg animate-none"
          >
            <button
              className="absolute top-6 right-6 text-text-muted hover:text-text-main cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-text-main hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {link}
              </button>
            ))}
            <button
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-full font-medium cursor-pointer"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a Free Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Hero Section ──────────────────────────────────────────────── */
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
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full bg-bg-ivory text-text-main overflow-hidden"
    >
      {/* ── Foreground content ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen flex flex-col justify-between">
        <Navbar />

        {/* Main hero copy (Left Aligned) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-start text-left max-w-2xl ml-0 mr-auto mt-4 mb-24 flex-grow justify-center"
        >
          {/* Eyebrow pill */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2 bg-bg-subtle/80 hover:bg-bg-subtle backdrop-blur-md rounded-full text-sm mb-6 border border-text-light/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-primary text-xs tracking-wide uppercase font-semibold">
              School of Bharatanatyam — Est. 2019
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-light mb-2 leading-tight text-primary font-sans"
          >
            The Structured
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl pb-2 font-light bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent italic font-serif"
          >
            Bharatanatyam
          </motion.h2>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-light mb-6 text-text-main font-sans"
          >
            Training System
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            variants={itemVariants}
            className="text-text-muted mb-8 max-w-xl text-base md:text-lg leading-relaxed"
          >
            A proven learning path from foundation to stage — taught by Ranbbir
            Banerjee, a CCRT National Scholar and 3× World of Dance champion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              id="hero-book-cta"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-light text-white font-medium rounded-full transition-colors duration-200 shadow-primary cursor-pointer border border-white/10"
            >
              Book a Free Call with Ranbbir Sir
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3L13 8L8 13M13 8H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              id="hero-explore-cta"
              onClick={() =>
                document.getElementById("system")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 bg-bg-subtle border border-text-light/20 hover:bg-bg-subtle/80 text-text-main rounded-full transition-all duration-200 cursor-pointer"
            >
              Explore the System
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom space dummy to balance the flex container */}
        <div className="h-4" />
      </div>

      {/* ── Background layers (Light theme configuration) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 z-0"
      >
        {/* Background Video (Highly visible for light theme) */}
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-65"
        />

        {/* Ivory gradient overlays for a seamless, light transition into the bottom section */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-ivory/15 via-bg-ivory/45 to-bg-ivory" />

        {/* Ambient Maroon/Gold glow behind the content area */}
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-b from-primary/10 to-secondary/5 blur-3xl opacity-40 pointer-events-none" />
      </motion.div>
    </section>
  );
}
