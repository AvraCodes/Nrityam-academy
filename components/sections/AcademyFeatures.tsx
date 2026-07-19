"use client"

import { useRef, useEffect, useState } from 'react'
import { m as motion, useInView } from 'framer-motion'
import { GiLotusFlower, GiIndianPalace, GiBurningDot, GiDoubleNecklace, GiScrollUnfurled, GiOpenBook, GiTribalPendant, GiBarefoot, GiHourglass, GiShieldBounces, GiHeartDrop, GiPositionMarker } from 'react-icons/gi'
import { ProductHighlightCard } from '@/components/ui/product-highlight-card'
import { GlowCard } from '@/components/ui/glow-card'

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

function Tile({ children, wrapperClassName = '', className = '', delay = 0, glowColor = 'primary', bgImage }: { children: React.ReactNode; wrapperClassName?: string; className?: string; delay?: number; glowColor?: 'primary' | 'secondary' | 'maroon' | 'red' | 'yellow' | 'cream'; bgImage?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative h-full ${wrapperClassName}`}
    >
      <GlowCard customSize glowColor={glowColor} className={`h-full w-full rounded-3xl border border-primary/10 bg-white/70 dark:bg-white/5 shadow-sm p-6 transition-colors hover:border-primary/40 overflow-hidden ${className}`}>
        {bgImage && (
          <img src={bgImage} alt="" className="absolute right-0 bottom-0 h-[80%] w-[80%] object-contain opacity-10 dark:opacity-20 [mask-image:radial-gradient(circle_at_bottom_right,black,transparent_70%)] pointer-events-none" />
        )}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </GlowCard>
    </motion.div>
  )
}

export default function AcademyFeatures() {
  return (
 <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent ">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-relaxed text-transparent bg-clip-text bg-gradient-to-br from-text-main via-text-main/90 to-primary/80 mb-6">
            Everything you need <br/> to excel in dance.
          </h2>
          <p className="text-lg text-text-muted font-light max-w-xl">
            A complete ecosystem designed to support your classical dance education, blending traditional rigor with modern accessibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] gap-4">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-2"
          >
            <ProductHighlightCard
              categoryIcon={<GiScrollUnfurled className="h-5 w-5" />}
              category="Interactive Studio"
              title="High-Definition Virtual Studio"
              description="Experience crystal-clear live classes. Our multi-camera setup ensures you see every footwork detail and facial expression exactly as the guru performs it."
              imageSrc="/virtual_studio.png"
              imageAlt="Virtual Studio Camera Setup"
              imageClassName="absolute right-0 top-0 h-full w-[60%] object-cover rounded-r-2xl [mask-image:linear-gradient(to_right,transparent_0%,black_30%)] pointer-events-none"
              contentClassName="max-w-[50%] z-20"
            />
          </motion.div>

          {/* 1x1 Global Community */}
          <Tile delay={0.1} glowColor="yellow" bgImage="/bg_lotus.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-text-muted">
              <GiLotusFlower className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Global Peers</h3>
            <p className="text-xs text-text-muted font-light">Join students from <strong className="text-text-main">25+ countries</strong>.</p>
          </Tile>

          {/* 1x1 Mentor */}
          <Tile delay={0.2} glowColor="maroon" bgImage="/bg_diya.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-primary">
              <GiBurningDot className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Direct Mentorship</h3>
            <p className="text-xs text-text-muted font-light">Taught entirely by <strong className="text-text-main">Guru Ranbbir</strong>.</p>
          </Tile>

          {/* 2x1 Lifetime Access */}
          <Tile wrapperClassName="col-span-2 row-span-1" delay={0.3} glowColor="cream" bgImage="/bg_hourglass.png" className="bg-white/70 dark:bg-white/5 flex flex-col justify-center">
            <div className="flex h-full items-center gap-6">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary-dark/10 ring-1 ring-secondary-dark/20">
                <GiHourglass className="h-7 w-7 text-secondary-dark" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-main mb-1">Lifetime Recording Access</h3>
                <p className="text-sm text-text-muted font-light">Your batch recordings are yours forever. Revisit complex modules anytime.</p>
              </div>
            </div>
          </Tile>

          {/* 1x2 Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="row-span-2"
          >
            <ProductHighlightCard
              categoryIcon={<GiOpenBook className="h-4 w-4" />}
              category="Certification"
              title="Verified Certification"
              description="Clear exams at every tier to earn verified Nrityam Academy certifications."
              imageSrc="/certification.png"
              imageAlt="Verified Certificate"
              imageClassName="absolute bottom-0 left-0 w-full h-[55%] object-cover rounded-b-2xl [mask-image:linear-gradient(to_bottom,transparent_0%,black_30%)] pointer-events-none opacity-95"
              contentClassName="justify-start pt-6 pb-0 z-20"
            />
          </motion.div>

          {/* 1x1 Physical conditioning */}
          <Tile delay={0.5} glowColor="red" bgImage="/bg_lotus.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-primary">
              <GiHeartDrop className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Fitness Focused</h3>
            <p className="text-xs text-text-muted font-light">Dedicated stamina building modules.</p>
          </Tile>

          {/* 1x1 Offline Workshops */}
          <Tile delay={0.6} glowColor="yellow" bgImage="/bg_diya.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-primary">
              <GiPositionMarker className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Annual Retreats</h3>
            <p className="text-xs text-text-muted font-light">Exclusive offline meetups globally.</p>
          </Tile>
          
          {/* 1x1 Theory */}
          <Tile delay={0.7} glowColor="maroon" bgImage="/bg_book.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-text-muted">
              <GiIndianPalace className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Natya Shastra</h3>
            <p className="text-xs text-text-muted font-light">Deep theoretical understanding.</p>
          </Tile>

          {/* 1x1 Live Q&A */}
          <Tile delay={0.8} bgImage="/bg_lotus.png">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 ring-1 ring-primary/10 mb-4 text-primary">
              <GiBarefoot className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-medium text-text-main mb-1">Live Q&A</h3>
            <p className="text-xs text-text-muted font-light">Weekly dedicated doubt clearing.</p>
          </Tile>

          {/* 2x1 Repertoire */}
          <Tile wrapperClassName="col-span-2 row-span-1" delay={0.9} bgImage="/bg_book.png">
            <div className="flex h-full items-center gap-6">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 ring-1 ring-primary/10">
                <GiDoubleNecklace className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-text-main mb-1">Advanced Repertoires</h3>
                <p className="text-sm text-text-muted font-light">Master traditional Margam pieces with authentic Tanjore style choreography.</p>
              </div>
            </div>
          </Tile>

        </div>
      </div>
    </section>
  )
}
