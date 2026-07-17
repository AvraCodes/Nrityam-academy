"use client"

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Video, Users, Medal, Clock, ShieldCheck, HeartPulse, GraduationCap, MapPin } from 'lucide-react'

function Counter({ value, decimals = 0, suffix = '' }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)
  
  useEffect(() => {
    if (!inView) return
    let s: number | null = null
    const step = (t: number) => {
      if (s === null) s = t
      const p = Math.min((t - s) / 1600, 1)
      setN((1 - Math.pow(1 - p, 3)) * value)
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value])
  
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>
}

function Tile({ children, wrapperClassName = '', className = '', delay = 0 }: { children: React.ReactNode; wrapperClassName?: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-[--color-primary]/10 bg-white/70 shadow-sm p-6 transition-colors hover:border-[--color-primary]/40 ${wrapperClassName}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: 'radial-gradient(380px circle at var(--mx) var(--my), rgba(122,30,44,0.05), transparent 70%)' }}
      />
      <div className={`relative z-10 h-full ${className}`}>{children}</div>
    </motion.div>
  )
}

export default function AcademyFeatures() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[--color-bg-ivory] border-t border-[--color-primary]/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[--color-text-main] mb-6">
            Everything you need <br/> to excel in dance.
          </h2>
          <p className="text-lg text-[--color-text-muted] font-light max-w-xl">
            A complete ecosystem designed to support your classical dance education, blending traditional rigor with modern accessibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
          
          {/* BIG hero tile 2x2 */}
          <Tile wrapperClassName="col-span-2 row-span-2" className="flex flex-col justify-between" delay={0}>
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[--color-primary]/20 ring-1 ring-[--color-primary]/30">
                <Video className="h-6 w-6 text-[--color-primary-light]" />
              </div>
              <span className="rounded-full bg-[--color-primary]/20 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-[--color-primary-light]">Live & Interactive</span>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[--color-text-main] mb-2">High-Definition Virtual Studio</h3>
              <p className="text-sm text-[--color-text-muted] max-w-md font-light leading-relaxed">
                Experience crystal-clear live classes. Our multi-camera setup ensures you see every footwork detail and facial expression exactly as the guru performs it.
              </p>
              {/* Abstract camera/focus UI elements */}
              <div className="mt-6 flex gap-4 opacity-70">
                <div className="w-16 h-16 border-2 border-[--color-primary]/20 rounded relative">
                   <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[--color-primary]/30" />
                   <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[--color-primary]/30" />
                   <div className="absolute inset-0 m-auto w-1 h-1 bg-[--color-secondary-dark] rounded-full animate-ping" />
                </div>
                <div className="flex-1 border-y border-[--color-primary]/10 flex items-center justify-center">
                  <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[--color-primary] to-transparent" />
                </div>
              </div>
            </div>
          </Tile>

          {/* 1x1 Global Community */}
          <Tile delay={0.1}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-primary]/5 ring-1 ring-[--color-primary]/10 mb-4 text-[--color-text-muted]">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-[--color-text-main] mb-1">Global Peers</h3>
            <p className="text-xs text-[--color-text-muted] font-light">Join students from <strong className="text-[--color-text-main]">25+ countries</strong>.</p>
          </Tile>

          {/* 1x1 Mentor */}
          <Tile delay={0.2} wrapperClassName="bg-[url('https://images.unsplash.com/photo-1549471013-3364d73206c8?q=80&w=400&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-[--color-primary]/60 group-hover:bg-[--color-primary]/40 transition-colors" />
            <div className="relative z-10 flex flex-col justify-end h-full">
              <div className="flex items-center gap-2 mb-1">
                <Medal className="w-4 h-4 text-[--color-secondary]" />
                <h3 className="text-sm font-medium text-white">Direct Mentorship</h3>
              </div>
              <p className="text-[10px] text-white/80">Taught entirely by Guru Ranbbir.</p>
            </div>
          </Tile>

          {/* 2x1 Lifetime Access */}
          <Tile wrapperClassName="col-span-2 row-span-1 bg-white/70 shadow-sm" delay={0.3}>
            <div className="flex h-full items-center gap-6">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-[--color-secondary-dark]/10 ring-1 ring-[--color-secondary-dark]/20">
                <Clock className="h-7 w-7 text-[--color-secondary-dark]" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-[--color-text-main] mb-1">Lifetime Recording Access</h3>
                <p className="text-sm text-[--color-text-muted] font-light">Your batch recordings are yours forever. Revisit complex modules anytime.</p>
              </div>
            </div>
          </Tile>

          {/* 1x2 Certification */}
          <Tile wrapperClassName="row-span-2 bg-white/70 shadow-sm" delay={0.4}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-primary]/5 ring-1 ring-[--color-primary]/10 mb-4 text-[--color-text-muted]">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-[--color-text-main] mb-2">Certification</h3>
                <p className="text-xs text-[--color-text-muted] font-light leading-relaxed">
                  Clear exams at every tier to earn verified Nrityam Academy certifications.
                </p>
              </div>
              <div className="w-full aspect-square rounded-full border border-dashed border-[--color-primary]/20 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity bg-[--color-primary]/5">
                <ShieldCheck className="w-10 h-10 text-[--color-secondary-dark]" />
              </div>
            </div>
          </Tile>

          {/* 1x1 Physical conditioning */}
          <Tile delay={0.5}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[--color-primary]/5 ring-1 ring-[--color-primary]/10 mb-4 text-[--color-primary]">
              <HeartPulse className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-medium text-[--color-text-main] mb-1">Fitness Focused</h3>
            <p className="text-xs text-[--color-text-muted] font-light">Dedicated stamina building modules.</p>
          </Tile>

          {/* 1x1 Offline Workshops */}
          <Tile delay={0.6}>
            <div className="flex flex-col items-center text-center justify-center h-full gap-2">
              <MapPin className="w-6 h-6 text-black/30" />
              <h3 className="text-sm font-medium text-[--color-text-main]">Annual Retreats</h3>
              <p className="text-[10px] text-[--color-text-muted]">Exclusive offline meetups in India & Europe.</p>
            </div>
          </Tile>

        </div>
      </div>
    </section>
  )
}
