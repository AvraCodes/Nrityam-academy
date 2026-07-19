"use client"

import { useState, useEffect } from 'react'
import { m as motion } from 'framer-motion'
import { Stethoscope, CalendarPlus, Video, Repeat, Star, ArrowRight } from 'lucide-react'

const STEPS = [
  { icon: Stethoscope, k: '01', t: 'Evaluate', d: 'Submit a short video or join a live evaluation to determine your current level and batch placement.' },
  { icon: CalendarPlus, k: '02', t: 'Enroll', d: 'Select your preferred batch timings and complete the onboarding process.' },
  { icon: Video, k: '03', t: 'Learn', d: 'Attend live interactive classes twice a week, led directly by Guru Ranbbir Banerjee.' },
  { icon: Repeat, k: '04', t: 'Practice', d: 'Access lifetime recordings of your classes. Submit practice videos for personalized 1-on-1 feedback.' },
  { icon: Star, k: '05', t: 'Perform', d: 'Graduate to advanced repertoires, earn certifications, and prepare for stage performances.' },
]

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [isHovered])

  return (
 <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent ">
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

        <div 
          className="relative mt-20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 sm:gap-8 lg:gap-10">
            {STEPS.map((s, i) => {
              const isActive = activeIndex === i;
              return (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                onClick={() => setActiveIndex(i)}
                className="relative flex flex-col items-center text-center sm:items-start sm:text-left cursor-pointer group"
              >
                <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 shadow-sm ${isActive ? 'border-primary bg-primary/10 scale-110' : 'border-primary/20 bg-white dark:bg-white/5 group-hover:border-primary/40'}`}>
                  <s.icon className={`h-6 w-6 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-muted'}`} />
                  <span className={`absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold border-[3px] border-white transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'bg-secondary text-text-main'}`}>{s.k}</span>
                </div>
                <h3 className={`mt-6 text-xl font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-text-main'}`}>{s.t}</h3>
                <p className={`mt-2 text-sm font-light leading-relaxed transition-colors duration-300 ${isActive ? 'text-text-main' : 'text-text-muted'}`}>{s.d}</p>

                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-7 left-[72px] right-[-24px] items-center -translate-y-1/2 z-0">
                    <div className={`h-[3px] w-full rounded-full transition-colors duration-300 ${isActive ? 'bg-primary' : 'bg-primary/30'}`} />
                    <svg className={`w-5 h-5 -ml-2 shrink-0 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary/30'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}
