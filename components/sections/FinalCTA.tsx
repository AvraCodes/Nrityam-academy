"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HoverButton } from '@/components/ui/hover-button'

export default function FinalCTA() {
  return (
 <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden ">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(122,30,44,0.05),transparent_50%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Trust Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/50 dark:bg-white/5 backdrop-blur-sm px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-dark"></span>
              </span>
              <span className="text-[11px] font-medium tracking-wide text-text-main">
                Limited Spots Available for Next Batch
              </span>
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-secondary mb-6 text-balance leading-relaxed">
            Ready to Begin Your Dance Journey?
          </h2>
          
          <p className="text-lg sm:text-xl text-text-muted font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our global community of passionate dancers. Whether you're starting fresh or perfecting your Arangetram repertoire, we have a place for you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <HoverButton 
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto bg-white dark:bg-white/5 dark:bg-white/5 text-primary border border-primary hover:bg-primary/5 shadow-xl shadow-primary/10 h-14 px-8 text-base font-medium"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </HoverButton>
            <button
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto h-14 px-8 rounded-full text-sm font-medium text-text-main hover:text-primary transition-colors bg-white dark:bg-white/5 dark:bg-white/5 hover:bg-primary/5 border border-primary/20 shadow-sm"
            >
              Have Questions?
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
