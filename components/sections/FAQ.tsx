"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Do I need prior experience in Bharatanatyam to join?',
    a: 'Not at all. We have batches dedicated entirely to beginners where we focus on building foundational strength, Aramandi posture, and basic Adavus before moving to complex sequences.',
  },
  {
    q: 'How do online classes compare to learning in person?',
    a: 'Our online structure is designed to mimic physical presence. With small batch sizes and a mandatory requirement to keep your camera on, Guru Ranbbir can correct your posture and expressions in real-time, just like in a physical studio.',
  },
  {
    q: 'What if I miss a live session?',
    a: 'Every single live class is recorded in high definition and uploaded to your student portal immediately. You will have lifetime access to these recordings for your enrolled batch to practice at your own pace.',
  },
  {
    q: 'How does the 1-on-1 feedback system work?',
    a: 'Once a week, you can record yourself practicing a specific Adavu or Abhinaya piece and submit it through the portal. Guru Ranbbir provides detailed, time-stamped feedback highlighting what you did well and where you need correction.',
  },
  {
    q: 'Do you offer certification or exams?',
    a: 'Yes. Our curriculum is structured into distinct tiers. At the end of every tier, you can opt for an evaluation. Upon passing, you receive a verified Nrityam Academy certification, leading up to an Arangetram level qualification.',
  },
  {
    q: 'Can I perform on stage through this academy?',
    a: 'Absolutely. We host annual offline retreats and showcases in both India and Europe. Advanced students who pass the requisite tiers are given opportunities to perform in these prestigious showcases.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-bg-ivory">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary-dark/30 bg-secondary-dark/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-secondary-dark mb-6">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-main mb-6">
            Everything you need <br /> to know.
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setOpen(i)}
                onMouseLeave={() => setOpen(null)}
                className={`rounded-2xl border bg-white/50 dark:bg-white/5 transition-colors ${isOpen ? 'border-secondary-dark/40 shadow-sm' : 'border-primary/10 hover:border-primary/20'}`}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 sm:px-8 py-6 text-left"
                >
                  <span className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-text-main' : 'text-text-muted'}`}>
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${isOpen ? 'bg-secondary-dark text-white border-transparent shadow-sm' : 'bg-transparent border-primary/20 text-text-muted'}`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 sm:px-8 pb-8 text-sm sm:text-base text-text-muted font-light leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
