"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiltCard } from '@/components/ui/tilt-card'
import { Layers, Network, ChevronRight, Activity, ArrowRight } from 'lucide-react'

export default function StudentJourney() {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'channels'>('lifecycle')

  const stages = [
    { title: 'Foundation Seeker', desc: 'Starting fresh. Learning basic Aramandi, footwork, and grasping the foundational rhythm.' },
    { title: 'Dedicated Learner', desc: 'Mastering all Adavus. Building stamina and preparing the body for sustained dance routines.' },
    { title: 'Expressive Artist', desc: 'Moving beyond pure physical movement to understand Abhinaya, evoking genuine emotion.' },
    { title: 'Repertoire Student', desc: 'Learning complex traditional pieces like Varnam and Jatiswaram, tying everything together.' },
    { title: 'Stage Performer', desc: 'Ready for Arangetram or stage performances with absolute technical and emotional mastery.' }
  ]

  const channels = [
    { name: 'Live Interactive Classes', role: 'Real-time guidance', desc: 'Join small-batch global live sessions via Zoom where the mentor watches and corrects your posture instantly.' },
    { name: 'Recorded Library', role: 'Practice at your pace', desc: 'Unlimited access to high-quality recordings of every class and dedicated tutorial modules for every Adavu.' },
    { name: '1-on-1 Feedback', role: 'Personalized correction', desc: 'Submit practice videos and receive detailed, time-stamped feedback on your form and expressions.' },
    { name: 'Theory Workshops', role: 'Intellectual depth', desc: 'Deep dive into the Natya Shastra, understanding the rich history and philosophy behind every movement.' },
    { name: 'Global Community', role: 'Peer inspiration', desc: 'Connect with fellow dancers worldwide, share progress, and stay motivated through community challenges.' }
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[--color-bg-ivory] border-t border-[--color-primary]/10" id="journey">
      
      {/* Structural visual background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[--color-primary]/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[--color-primary] mb-6">
            How We Nurture a Complete Dancer
          </h2>
          <p className="text-lg text-[--color-text-muted] font-light">
            We don't just teach steps; we guide you through a profound transformation. Every student follows a proven path supported by modern learning channels.
          </p>
        </div>

        {/* Dynamic Philosophy Summary Card */}
        <TiltCard className="mb-12 p-8 sm:p-10 border border-[--color-primary]/20 rounded-3xl bg-white/70 backdrop-blur-md transition-all duration-500 shadow-xl shadow-[--color-primary]/5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif text-[--color-text-main] tracking-wide">
                Dance Is Not Just Movement. <br className="hidden lg:block"/>
                <span className="text-[--color-primary]">It's Devotion.</span>
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {['Physical stamina and grace', 'Emotional depth and storytelling', 'Rhythmic precision and speed', 'Theoretical and cultural knowledge'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[--color-text-muted] font-light text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[--color-primary] flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-[--color-primary]/20 pt-6 md:pt-0 md:pl-8 flex-shrink-0">
              <p className="text-lg sm:text-xl font-medium text-[--color-primary]">
                Progress is made only when <br className="hidden sm:inline" />
                the foundation is unshakeable.
              </p>
              <p className="text-xs text-[--color-text-muted] mt-2 uppercase tracking-wider font-semibold">
                Patience. Practice. Perfection.
              </p>
            </div>
          </div>
        </TiltCard>

        {/* Dynamic Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-[--color-primary]/20 bg-[--color-primary]/5 p-1 relative">
            <button
              onClick={() => setActiveTab('lifecycle')}
              onMouseEnter={() => setActiveTab('lifecycle')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer relative z-10 ${
                activeTab === 'lifecycle'
                  ? 'bg-[--color-primary] text-white shadow-lg shadow-[--color-primary]/25'
                  : 'text-[--color-text-muted] hover:text-[--color-primary]'
              }`}
            >
              <Layers className="w-4 h-4" />
              The Journey
            </button>
            <button
              onClick={() => setActiveTab('channels')}
              onMouseEnter={() => setActiveTab('channels')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer relative z-10 ${
                activeTab === 'channels'
                  ? 'bg-[--color-primary] text-white shadow-lg shadow-[--color-primary]/25'
                  : 'text-[--color-text-muted] hover:text-[--color-primary]'
              }`}
            >
              <Network className="w-4 h-4" />
              How You Learn
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === 'lifecycle' && (
              <motion.div
                key="lifecycle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-4"
              >
                {stages.map((stage, i) => (
                  <div key={i} className="relative group">
                    <div className="h-full p-6 rounded-2xl border border-[--color-primary]/10 bg-white hover:bg-white transition-colors flex flex-col justify-between group-hover:border-[--color-primary]/30 relative z-10 shadow-sm">
                      <div>
                        <div className="text-[10px] font-mono text-[--color-primary] mb-3 tracking-widest uppercase">Stage 0{i + 1}</div>
                        <h4 className="text-base font-semibold text-[--color-text-main] mb-2 leading-tight">{stage.title}</h4>
                      </div>
                      <p className="text-xs text-[--color-text-muted] font-light mt-4 leading-relaxed">{stage.desc}</p>
                    </div>
                    {i < stages.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-[--color-primary]">
                        <ChevronRight className="w-6 h-6 opacity-50" />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'channels' && (
              <motion.div
                key="channels"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {channels.map((channel, i) => (
                  <div key={i} className="p-6 sm:p-8 rounded-2xl border border-[--color-primary]/10 bg-white hover:border-[--color-primary]/30 transition-colors flex flex-col gap-4 group shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[--color-primary]/10 border border-[--color-primary]/20 flex items-center justify-center text-[--color-primary] group-hover:scale-110 transition-transform">
                        <Activity className="w-4 h-4" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-black/20 group-hover:text-[--color-primary] transition-colors -rotate-45" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[--color-text-main] mb-1">{channel.name}</h4>
                      <p className="text-[10px] uppercase tracking-wider text-[--color-secondary-dark] font-medium mb-3">{channel.role}</p>
                      <p className="text-sm text-[--color-text-muted] font-light leading-relaxed">{channel.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
