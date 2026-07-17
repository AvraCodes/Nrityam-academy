"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from '@/components/ui/tilt-card'
import { ChevronDown, Book, Zap, Sparkles, Star } from 'lucide-react'

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
    icon: Sparkles
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

  const toggleLayer = (index: number) => {
    setActiveLayer(index === activeLayer ? -1 : index)
  }

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[--color-bg-ivory] border-t border-black/5" id="system">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[--color-secondary]/30 bg-[--color-secondary]/10 px-4 py-1.5 mb-6">
            <span className="text-[11px] font-medium tracking-widest text-[--color-secondary] uppercase">
              The Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[--color-text-main] mb-6">
            A Structured Path to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-secondary-dark] to-[--color-primary]">
              Mastery
            </span>
          </h2>
          <p className="text-lg text-[--color-text-muted] font-light max-w-2xl mx-auto">
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
                  ? 'bg-[--color-secondary-dark]'
                  : index < activeLayer
                    ? 'bg-[--color-secondary-dark]/30'
                    : 'bg-black/10'
              }`}
            />
          ))}
          <span className="text-[10px] font-mono text-[--color-text-muted] ml-4 tracking-wider flex-shrink-0">
            PHASE {activeLayer >= 0 ? activeLayer + 1 : '—'} / {LAYERS.length}
          </span>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {LAYERS.map((layer, index) => {
              const isActive = index === activeLayer
              const Icon = layer.icon
              return (
                <motion.div
                  key={layer.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <TiltCard className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isActive
                      ? 'border-[--color-secondary]/30 bg-white shadow-xl shadow-[--color-secondary]/5'
                      : 'border-black/5 bg-white/50 hover:bg-white/80'
                  }`}>
                    <button
                      onClick={() => toggleLayer(index)}
                      onMouseEnter={() => setActiveLayer(index)}
                      className="flex items-center gap-4 w-full p-6 sm:p-8 text-left"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive
                          ? 'bg-[--color-secondary] text-black shadow-lg shadow-[--color-secondary]/20'
                          : 'bg-black/5 text-[--color-text-muted]'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-grow">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className={`text-sm font-serif transition-colors ${isActive ? 'text-[--color-secondary-dark]' : 'text-black/30'}`}>
                            {layer.number}
                          </span>
                          <h3 className={`text-xl font-medium transition-colors ${isActive ? 'text-[--color-text-main]' : 'text-[--color-text-muted]'}`}>
                            {layer.title}
                          </h3>
                        </div>
                      </div>

                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
                          isActive ? 'border-[--color-secondary]/50 text-[--color-secondary-dark] bg-[--color-secondary]/10' : 'border-black/10 text-[--color-text-muted]'
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
                            <p className="text-[--color-text-muted] font-light text-base sm:text-lg leading-relaxed">
                              {layer.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
