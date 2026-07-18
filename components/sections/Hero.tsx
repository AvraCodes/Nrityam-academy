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

// Internal UI Components
import { HoverButton } from '@/components/ui/hover-button'
import { GlassButton } from '@/components/ui/glass-button'
import { TiltCard } from '@/components/ui/tilt-card'
import { FlipWords } from '@/components/ui/flip-words'

const AnimatedCounter = ({ value, duration = 1.6 }: { value: string; duration?: number }) => {
  const hasDecimals = value.includes('.')
  const hasNumbers = /[0-9]/.test(value)
  const shouldAnimate = hasNumbers && !hasDecimals
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const numericVal = shouldAnimate ? (parseInt(value.replace(/[^0-9]/g, '')) || 0) : 0
  const prefix = shouldAnimate ? (value.match(/^[^0-9]*/)?.[0] || '') : ''
  const suffix = shouldAnimate ? (value.replace(/^[^0-9]*[0-9]+/, '') || '') : ''

  useEffect(() => {
    if (!isInView || !shouldAnimate) return
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericVal))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }, [isInView, numericVal, duration, shouldAnimate])

  if (!shouldAnimate) {
    return <span ref={ref}>{value}</span>
  }

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-base font-bold text-text-main sm:text-lg">
      <AnimatedCounter value={value} />
    </span>
    <span className="text-[9px] uppercase tracking-wider text-text-muted font-medium sm:text-[10px] text-balance text-center">
      {label}
    </span>
  </div>
)

const DanceSVG = () => (
  <svg viewBox="0 0 800 600" className="absolute right-0 top-1/2 -translate-y-1/2 w-[70%] h-[90%] opacity-15 pointer-events-none select-none z-0 mix-blend-screen" fill="none">
    <defs>
      <linearGradient id="danceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-primary)" />
        <stop offset="100%" stopColor="var(--color-secondary)" />
      </linearGradient>
    </defs>
    <circle cx="450" cy="300" r="220" stroke="url(#danceGrad)" strokeWidth="1.5" strokeDasharray="6,6" />
    <circle cx="450" cy="300" r="160" stroke="url(#danceGrad)" strokeWidth="1" />
    {/* Abstract geometric poses */}
    <path d="M280,420 L380,310 L480,340 L580,210 L680,230" stroke="url(#danceGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="380" cy="310" r="5" fill="var(--color-secondary)" className="animate-pulse" />
    <circle cx="480" cy="340" r="5" fill="var(--color-primary)" />
    <circle cx="580" cy="210" r="7" fill="var(--color-secondary)" />
  </svg>
)

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-ivory pt-20 pb-16">
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,var(--color-bg-ivory))] opacity-80" />
      </div>

      <DanceSVG />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-1.5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-text-main">
                Admissions Open for Global Batch 2026
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 text-balance leading-[1.1]">
              <span className="bg-gradient-to-br from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                Master the True Art of
              </span> <br />
              <FlipWords 
                words={["Bharatanatyam", "Expression", "Rhythm", "Devotion"]} 
                className="text-primary -ml-2"
              />
            </h1>

            <p className="text-lg sm:text-xl text-text-muted max-w-xl mb-10 leading-relaxed font-light text-balance">
              A structured, authentic learning path for serious students — from foundational steps to stage mastery, guided by renowned mentor Ranbbir Banerjee.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mb-14">
              <GlassButton 
                onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary-dark text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
                glassColor="rgba(255, 255, 255, 0.15)"
              >
                Begin Your Journey
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </GlassButton>

              <button 
                onClick={() => document.getElementById("system")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center justify-center gap-3 h-12 px-7 rounded-full text-base font-medium text-text-main hover:text-primary transition-all bg-primary/5 hover:bg-primary/10 border border-primary/10 hover:border-primary/30 hover:scale-105 active:scale-95"
              >
                <PlayCircle className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                See How It Works
              </button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-primary/10">
              <StatItem value="19+" label="Years Expertise" />
              <StatItem value="850+" label="Active Students" />
              <StatItem value="25+" label="Countries" />
              <StatItem value="4.9/5" label="Average Rating" />
            </div>
          </motion.div>

          {/* Right side Visual - Abstract elements */}
          <motion.div 
            className="flex-1 w-full max-w-lg lg:max-w-none flex items-center justify-center relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-secondary-dark/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full backdrop-blur-sm" />
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 rounded-full overflow-hidden border border-white/20 shadow-2xl relative">
                 <Image src="/hero-dancer.png" fill sizes="(max-width: 768px) 192px, 192px" className="object-cover" alt="Dancer" priority />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
