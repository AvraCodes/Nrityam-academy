"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from '@/components/ui/tilt-card'

const STEP_DETAILS = [
  { name: 'Rhythm (Tala)', detail: 'Master the intricate footwork and complex rhythmic structures that form the foundation of Bharatanatyam. Precision is our baseline.' },
  { name: 'Expression (Abhinaya)', detail: 'Learn to convey profound emotions and ancient stories through nuanced facial expressions and hand gestures (Mudras).' },
  { name: 'Discipline (Sadhana)', detail: 'Develop the rigorous physical stamina and mental fortitude required to respect and embody the art form.' },
  { name: 'Tradition (Parampara)', detail: 'Connect with the ancient lineage. We preserve the pure Tanjore style while making it accessible to the modern student.' },
  { name: 'Performance (Marga)', detail: 'The culmination of your journey. Combine rhythm, expression, and discipline to command the stage with divine grace.' },
]

const AUTO_ADVANCE_MS = 5000

export default function CoreBelief() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEP_DETAILS.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          advance()
          return 0
        }
        return prev + (100 / (AUTO_ADVANCE_MS / 50))
      })
    }, 50)
    return () => clearInterval(interval)
  }, [advance])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setProgress(0)
  }

  return (
    <section className="relative py-24 sm:py-32 bg-[--color-bg-ivory] border-t border-[--color-primary]/10 overflow-hidden" id="philosophy">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(122,30,44,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[--color-primary]/30 bg-[--color-primary]/10 px-4 py-1.5 mb-6"
          >
            <span className="text-[11px] font-medium tracking-widest text-[--color-secondary] uppercase">
              Our Philosophy
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[--color-text-main] mb-6"
          >
            The Art of <span className="text-[--color-primary]">Bharatanatyam</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[--color-text-muted] font-light"
          >
            We believe true artistry cannot be rushed. Our methodology breaks down this divine dance into five essential pillars, building a dancer from the ground up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Navigation Steps */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {STEP_DETAILS.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 group cursor-pointer border ${
                    isActive 
                      ? 'bg-white/60 border-[--color-primary]/20 shadow-lg shadow-[--color-primary]/5' 
                      : 'bg-transparent border-transparent hover:bg-[--color-primary]/5'
                  }`}
                >
                  {/* Progress bar background for active step */}
                  {isActive && (
                    <div 
                      className="absolute inset-y-0 left-0 bg-[--color-primary]/20 transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 border border-transparent ${
                      isActive ? 'bg-[--color-primary] text-white' : 'bg-[--color-primary]/10 text-[--color-text-muted] group-hover:bg-[--color-primary]/20'
                    }`}>
                      {idx + 1}
                    </div>
                    <span className={`text-base sm:text-lg font-medium transition-colors ${
                      isActive ? 'text-[--color-text-main]' : 'text-[--color-text-muted] group-hover:text-[--color-text-main]'
                    }`}>
                      {step.name}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[250px] lg:min-h-[400px]">
            <motion.div className="flex-1 w-full lg:h-[450px]">
              <div className="h-full w-full p-8 sm:p-12 rounded-3xl border border-[--color-primary]/20 bg-white/70 backdrop-blur-md relative overflow-hidden flex flex-col justify-center shadow-2xl">
                {/* Decorative glowing orb */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-[--color-primary] rounded-full blur-[100px] opacity-20" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/30 flex items-center justify-center text-[--color-primary] mb-6">
                      <span className="font-serif text-2xl">{activeStep + 1}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[--color-text-main] mb-4">
                      {STEP_DETAILS[activeStep].name}
                    </h3>
                    <p className="text-lg sm:text-xl text-[--color-text-muted] font-light leading-relaxed">
                      {STEP_DETAILS[activeStep].detail}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
