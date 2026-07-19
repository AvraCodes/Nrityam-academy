"use client"

import { useState, useEffect } from 'react'
import { m as motion, AnimatePresence } from 'framer-motion'
import { GlowCard } from '@/components/ui/glow-card'
import { ChevronDown, Book, Zap, Heart, Star } from 'lucide-react'

const LAYERS = [
  {
    number: "01",
    title: "Foundation (Tattadavus)",
    desc: "The absolute bedrock of Bharatanatyam. Perfecting the basic posture (Aramandi), footwork clarity, and building the essential physical stamina required for complex sequences.",
    icon: Book
  },
  {
    number: "02",
    title: "Complex Rhythms (Jathis)",
    desc: "Combining foundational steps into complex mathematical rhythmic patterns. Learning to command space, speed, and precision in sync with Nattuvangam.",
    icon: Zap
  },
  {
    number: "03",
    title: "Expression (Abhinaya)",
    desc: "The soul of the dance. Learning the intricate vocabulary of hand gestures (Mudras) and facial expressions (Navarasas) to tell ancient stories and evoke deep emotions.",
    icon: Heart
  },
  {
    number: "04",
    title: "Repertoire (Marga)",
    desc: "The ultimate synthesis. Combining pure dance (Nritta) and expressive dance (Nritya) into full traditional items like Alarippu, Jatiswaram, Varnam, and Thillana.",
    icon: Star
  }
]

export default function CurriculumStructure() {
  const [activeLayer, setActiveLayer] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % LAYERS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered])

  const toggleLayer = (index: number) => {
    setActiveLayer(index === activeLayer ? -1 : index)
  }

  return (
 <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent " id="system">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main/90 to-primary/80 mb-6">
            A Structured Path to Mastery
          </h2>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">
            We don't just teach choreography. We build dancers. Our curriculum is layered, ensuring every student develops a robust foundation before advancing.
          </p>
        </motion.div>

        {/* Layer progress indicator */}
        <div className="flex items-center gap-3 mb-10 max-w-2xl mx-auto">
          {LAYERS.map((_, index) => (
            <button
              key={index}
              onClick={() => toggleLayer(index)}
              className={`h-1.5 flex-1 rounded-full transition-all duration-500 cursor-pointer ${
                index === activeLayer
                  ? 'bg-secondary-dark'
                  : index < activeLayer
                    ? 'bg-primary w-8' 
                    : 'bg-primary/20'
              }`}
            />
          ))}
          <span className="text-[10px] font-mono text-text-muted ml-4 tracking-wider flex-shrink-0">
            PHASE {activeLayer >= 0 ? activeLayer + 1 : '—'} / {LAYERS.length}
          </span>
        </div>

        <div className="space-y-4">
        <div className="max-w-4xl mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {LAYERS.map((layer, index) => {
                const isActive = activeLayer === index
                const Icon = layer.icon
                return (
                  <motion.div
                    key={layer.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    onMouseEnter={() => setActiveLayer(index)}
                  >
                    <GlowCard 
                      customSize
                      glowColor={['maroon', 'red', 'yellow', 'cream'][index % 4] as any}
                      className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                        isActive 
                          ? 'border-secondary/30 bg-white dark:bg-white/5 shadow-lg shadow-secondary/10' 
                          : 'border-accent/10 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10'
                      }`}
                    >
                      <button
                        onClick={() => toggleLayer(index)}
                        className="flex items-center gap-4 w-full p-6 sm:p-8 text-left cursor-pointer"
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isActive 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-primary/5 text-accent'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1">
                          <div className={`text-xs font-mono mb-1 tracking-widest ${
                            isActive ? 'text-primary' : 'text-accent/70'
                          }`}>
                            LAYER {layer.number}
                          </div>
                          <h3 className={`text-xl sm:text-2xl font-serif leading-relaxed transition-colors duration-300 ${
                            isActive ? 'text-text-main' : 'text-accent'
                          }`}>
                            {layer.title}
                          </h3>
                        </div>

                        <motion.div
                          animate={{ rotate: isActive ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                            isActive ? 'border-secondary/50 text-secondary bg-secondary/10' : 'border-accent/20 text-accent'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2 pl-[88px]">
                              <div className="h-px w-full bg-gradient-to-r from-black/10 to-transparent mb-6" />
                              <p className="text-base sm:text-lg text-accent font-light leading-relaxed">
                                {layer.desc}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlowCard>
                  </motion.div>
                )
            })}
          </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
