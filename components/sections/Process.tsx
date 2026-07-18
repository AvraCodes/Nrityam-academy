"use client"

import { motion } from 'framer-motion'
import { Stethoscope, CalendarPlus, Video, Repeat, Star } from 'lucide-react'

const STEPS = [
  { icon: Stethoscope, k: '01', t: 'Evaluate', d: 'Submit a short video or join a live evaluation to determine your current level and batch placement.' },
  { icon: CalendarPlus, k: '02', t: 'Enroll', d: 'Select your preferred batch timings and complete the onboarding process.' },
  { icon: Video, k: '03', t: 'Learn', d: 'Attend live interactive classes twice a week, led directly by Guru Ranbbir Banerjee.' },
  { icon: Repeat, k: '04', t: 'Practice', d: 'Access lifetime recordings of your classes. Submit practice videos for personalized 1-on-1 feedback.' },
  { icon: Star, k: '05', t: 'Perform', d: 'Graduate to advanced repertoires, earn certifications, and prepare for stage performances.' },
]

export default function Process() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main/90 to-primary/80 mb-6">
            A structured path, <br/> from day one.
          </h2>
          <p className="text-lg text-text-muted font-light max-w-xl">
            We ensure every student is placed in the right batch and receives the foundational support needed to thrive.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden lg:block h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
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
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-white dark:bg-white/5 dark:bg-white/5 hover:border-primary/40 transition-colors shadow-sm">
                  <s.icon className="h-6 w-6 text-text-muted" />
                  <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-text-main border-[3px] border-white">{s.k}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-text-main">{s.t}</h3>
                <p className="mt-2 text-sm text-text-muted font-light leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
