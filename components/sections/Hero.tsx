"use client"

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  Star,
  Globe,
  Award,
  Video,
  PlayCircle,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react'

import { GlassButton } from '@/components/ui/glass-button'

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-1 border-l border-primary/20 pl-4"
  >
    <div className="text-2xl sm:text-3xl font-serif leading-relaxed text-white font-medium tracking-tight">
      {value}
    </div>
    <div className="text-xs sm:text-sm text-white/70 font-medium tracking-wide uppercase">
      {label}
    </div>
  </motion.div>
)

const DanceSVG = () => (
  <svg className="absolute -right-64 top-0 h-full w-[800px] text-primary/5 opacity-50 blur-3xl" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M400 800C620.914 800 800 620.914 800 400C800 179.086 620.914 0 400 0C179.086 0 0 179.086 0 400C0 620.914 179.086 800 400 800Z" fill="currentColor"/>
  </svg>
)

export default function Hero() {
  return (
    <>
 <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-16">
        {/* Background radial gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,var(--color-bg-ivory))] opacity-60" />
        </div>

        <DanceSVG />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-24">
          <div className="flex flex-col items-center justify-center text-center">
            
            <motion.div 
              className="flex-1 w-full max-w-4xl mx-auto flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Status Text */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-primary/40" />
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Admissions Open 2026
                </span>
                <div className="h-[1px] w-12 bg-primary/40" />
              </motion.div>

              {/* Main Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-8 text-balance leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main to-text-muted">
                Master the True <br /> Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary italic font-light pl-1 pr-2 pb-1">Bharatanatyam</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto mb-14 leading-relaxed font-light text-balance">
                A structured, authentic learning path for serious students — from foundational steps to stage mastery.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-14">
                <GlassButton 
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
                  glassColor="rgba(255, 255, 255, 0.15)"
                >
                  Begin Your Journey
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </GlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Metrics banner below the fold */}
      <div className="bg-white/5 dark:bg-white/5 backdrop-blur-md border-y border-primary/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <StatItem value="19+" label="Years Expertise" />
            <StatItem value="850+" label="Active Students" />
            <StatItem value="25+" label="Countries" />
            <StatItem value="4.9/5" label="Average Rating" />
          </div>
        </div>
      </div>
    </>
  )
}
