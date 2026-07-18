"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from '@/components/ui/tilt-card'

import { Music, Smile, Target, BookOpen, Star } from 'lucide-react'

const STEP_DETAILS = [
  { name: 'Rhythm (Tala)', detail: 'Master the intricate footwork and complex rhythmic structures that form the foundation of Bharatanatyam. Precision is our baseline.', icon: Music },
  { name: 'Expression (Abhinaya)', detail: 'Learn to convey profound emotions and ancient stories through nuanced facial expressions and hand gestures (Mudras).', icon: Smile },
  { name: 'Discipline (Sadhana)', detail: 'Develop the rigorous physical stamina and mental fortitude required to respect and embody the art form.', icon: Target },
  { name: 'Tradition (Parampara)', detail: 'Connect with the ancient lineage. We preserve the pure Tanjore style while making it accessible to the modern student.', icon: BookOpen },
  { name: 'Performance (Marga)', detail: 'The culmination of your journey. Combine rhythm, expression, and discipline to command the stage with divine grace.', icon: Star },
]

const AUTO_ADVANCE_MS = 5000

export default function CoreBelief() {
  const [activeStep, setActiveStep] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEP_DETAILS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
  }

  return (
 <section className="relative py-16 sm:py-24 lg:py-32 bg-transparent overflow-hidden" id="philosophy">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-primary/40" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Our Philosophy
            </span>
            <div className="h-[1px] w-12 bg-primary/40" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif leading-relaxed text-primary mb-6"
          >
            The Art of <span className="text-accent">Bharatanatyam</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-accent font-light"
          >
            We believe true artistry cannot be rushed. Our methodology breaks down this divine dance into five essential pillars, building a dancer from the ground up.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left: Navigation Steps */}
          <div 
            className="lg:col-span-5 flex flex-col gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {STEP_DETAILS.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={idx}
                  onMouseEnter={() => handleStepClick(idx)}
                  className={`relative w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-start gap-4 group cursor-pointer border ${
                    isActive 
                      ? 'bg-secondary/10 border-secondary/30 shadow-lg shadow-secondary/5' 
                      : 'bg-transparent border-transparent hover:bg-secondary/5'
                  }`}
                >
                  {isActive && (
                    <motion.div layoutId="activeBg" className="absolute inset-0 bg-white/40 dark:bg-white/5 rounded-2xl -z-10" />
                  )}
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 border border-transparent ${
                      isActive ? 'bg-secondary text-bg-ivory' : 'border-accent/30 text-accent group-hover:bg-accent/10'
                    }`}>
                      {idx + 1}
                    </div>
                    <h4 className={`text-xl font-medium transition-colors ${
                      isActive ? 'text-text-main' : 'text-accent group-hover:text-text-main'
                    }`}>
                      {step.name}
                    </h4>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right: Content Display */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[250px] lg:min-h-[400px]">
            <motion.div className="flex-1 w-full lg:h-[450px]">
              <div className="h-full w-full p-8 sm:p-12 rounded-3xl border border-primary/20 bg-white/70 dark:bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col justify-center shadow-2xl">
                {/* Decorative glowing orb */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20" />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center text-accent mb-6">
                      {(() => {
                        const Icon = STEP_DETAILS[activeStep].icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif leading-relaxed text-text-main mb-4">
                      {STEP_DETAILS[activeStep].name}
                    </h3>
                    <p className="text-lg sm:text-xl text-accent font-light leading-relaxed">
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
