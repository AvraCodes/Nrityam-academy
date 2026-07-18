"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { TiltCard } from '@/components/ui/tilt-card'
import { PlayCircle, Video, CheckCircle2 } from 'lucide-react'

export default function LearningPortal({ reverseLayout = false }: { reverseLayout?: boolean }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    },
  }

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  }

  const layoutClasses = reverseLayout
    ? 'md:grid-cols-2 md:grid-flow-col-dense'
    : 'md:grid-cols-2'

  const textOrderClass = reverseLayout ? 'md:col-start-2' : ''
  const imageOrderClass = reverseLayout ? 'md:col-start-1' : ''

  return (
    <section className="relative py-12 sm:py-24 md:py-32 bg-transparent overflow-hidden border-t border-primary/10 z-10" id="portal">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div
          className={`grid grid-cols-1 gap-12 md:gap-16 w-full items-center ${layoutClasses}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content */}
          <motion.div
            className={`flex flex-col items-start gap-6 mt-10 md:mt-0 max-w-[540px] mx-auto md:mx-0 ${textOrderClass}`}
            variants={itemVariants}
          >
            <div className="space-y-4">
              <span className="text-secondary font-mono text-xs tracking-widest uppercase">
                The Learning Portal
              </span>
              <motion.h2 
                className="text-text-main text-3xl sm:text-[40px] font-serif font-medium leading-relaxed md:leading-relaxed"
              >
                Your virtual studio, <br />
                <span className="text-primary">accessible anywhere.</span>
              </motion.h2>
            </div>

            <motion.p 
              className="text-text-muted text-base sm:text-lg leading-relaxed font-light"
            >
              Missed a live class? Need to review a complex Jathi? Our proprietary learning portal houses a high-definition recording of every session, meticulously organized by module and batch.
            </motion.p>

            <ul className="space-y-3 mt-4">
              {[
                "Unlimited access to live session recordings",
                "Isolated Adavu practice modules",
                "Direct 1-on-1 feedback submission portal",
                "Downloadable theory PDFs and music tracks"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[400px] md:max-w-[520px]`}
            variants={itemVariants}
          >
            <TiltCard className="w-full">
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-2 pb-0">
                
                {/* Browser bar */}
                <div className="h-8 flex items-center px-4 gap-1.5 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>

                <div className="rounded-t-xl bg-white dark:bg-white/5 dark:bg-white/5 border border-primary/10 border-b-0 overflow-hidden relative shadow-inner">
                  {/* Mock Video Player */}
                  <div className="aspect-video relative bg-black flex flex-col justify-between overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1549471013-3364d73206c8?q=80&w=800&auto=format&fit=crop" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" alt="Video player" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur flex items-center justify-center border border-white shadow-lg text-primary cursor-pointer hover:scale-110 transition-transform">
                        <PlayCircle className="w-8 h-8 ml-1" />
                      </div>
                    </div>
                    {/* Mock Progress Bar */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-primary/20">
                      <div className="h-full bg-primary w-1/3" />
                    </div>
                  </div>

                  {/* Mock Video Details */}
                  <div className="p-5">
                    <h4 className="text-text-main font-medium text-lg mb-1">Module 4: Varnam Exploration (Part 1)</h4>
                    <p className="text-text-muted text-xs mb-4">Recorded on July 15, 2026 • 1h 45m</p>
                    
                    <div className="flex gap-3 overflow-hidden">
                      <div className="w-32 h-20 rounded-lg bg-primary/5 border border-primary/10 shrink-0 relative overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" fill sizes="128px" className="object-cover opacity-50" alt="thumb" />
                         <span className="absolute bottom-1 right-1 text-[8px] bg-black/80 px-1 rounded text-white">12:40</span>
                      </div>
                      <div className="w-32 h-20 rounded-lg bg-primary/5 border border-primary/30 shrink-0 relative overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" fill sizes="128px" className="object-cover opacity-90" alt="thumb" />
                         <span className="absolute bottom-1 right-1 text-[8px] bg-black/80 px-1 rounded text-white">45:12</span>
                         <div className="absolute inset-0 ring-2 ring-primary ring-inset" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
