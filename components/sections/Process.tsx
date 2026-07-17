"use client"

import { motion } from 'framer-motion'
import { Stethoscope, CalendarPlus, Video, Repeat, Sparkles } from 'lucide-react'

const STEPS = [
  { icon: Stethoscope, k: '01', t: 'Evaluate', d: 'Submit a short video or join a live evaluation to determine your current level and batch placement.' },
  { icon: CalendarPlus, k: '02', t: 'Enroll', d: 'Select your preferred batch timings and complete the onboarding process.' },
  { icon: Video, k: '03', t: 'Learn', d: 'Attend live interactive classes twice a week, led directly by Guru Ranbbir Banerjee.' },
  { icon: Repeat, k: '04', t: 'Practice', d: 'Access lifetime recordings of your classes. Submit practice videos for personalized 1-on-1 feedback.' },
  { icon: Sparkles, k: '05', t: 'Perform', d: 'Graduate to advanced repertoires, earn certifications, and prepare for stage performances.' },
]

export default function Process() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[--color-bg-ivory] border-t border-[--color-primary]/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[--color-text-main] mb-6">
            A structured path, <br/> from day one.
          </h2>
          <p className="text-lg text-[--color-text-muted] font-light max-w-xl">
            We ensure every student is placed in the right batch and receives the foundational support needed to thrive.
          </p>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-[--color-secondary]/30 to-transparent" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[--color-primary]/20 bg-white hover:border-[--color-primary]/40 transition-colors shadow-sm">
                  <s.icon className="h-6 w-6 text-[--color-text-muted]" />
                  <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-[--color-secondary] text-[10px] font-bold text-black border-[3px] border-white">{s.k}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-[--color-text-main]">{s.t}</h3>
                <p className="mt-2 text-sm text-[--color-text-muted] font-light leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
