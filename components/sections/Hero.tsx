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

const AnimatedCounter = ({ value, duration = 1.6 }: { value: string; duration?: number }) => {
  const hasDecimals = value.includes('.')
  const hasNumbers = /[0-9]/.test(value)
  const shouldAnimate = hasNumbers && !hasDecimals
  
  if (!shouldAnimate) return <span>{value}</span>
  
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')
  
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const increment = numericValue / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      return () => clearInterval(timer)
    }
  }, [isInView, numericValue, duration])
  
  return <span ref={ref}>{count}{suffix}</span>
}

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-1 border-l border-primary/20 pl-4"
  >
    <div className="text-3xl sm:text-4xl font-serif leading-relaxed text-text-main font-medium tracking-tight">
      <AnimatedCounter value={value} />
    </div>
    <div className="text-xs sm:text-sm text-text-muted font-medium tracking-wide uppercase">
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-20 pb-16">
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
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight mb-8 text-balance leading-relaxed text-text-main">
                Master the True <br /> Art of <span className="text-primary italic font-light">Bharatanatyam</span>
              </h1>

              <p className="text-xl sm:text-2xl text-text-muted max-w-2xl mx-auto lg:mx-0 mb-14 leading-relaxed font-light text-balance">
                A structured, authentic learning path for serious students — from foundational steps to stage mastery.
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

      {/* Trust Metrics banner below the fold */}
      <div className="bg-white/40 dark:bg-black/40 backdrop-blur-md border-y border-primary/10 relative z-20">
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
