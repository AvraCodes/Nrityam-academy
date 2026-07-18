"use client"

import React from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const GlobePulse = dynamic(
  () => import("@/components/ui/globe-pulse").then((mod) => mod.GlobePulse),
  { ssr: false }
)

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
  location: string
}

const testimonials: Testimonial[] = [
  {
    text: "The structured curriculum and personalized feedback have completely transformed my understanding of Bharatanatyam.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
    name: "Ankita",
    role: "Senior Student",
    location: "USA"
  },
  {
    text: "Learning from halfway across the world felt impossible, but the live sessions and detailed corrections make it feel like an in-person class.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    name: "Bhavitha",
    role: "Intermediate Level",
    location: "Botswana"
  },
  {
    text: "The focus on Adavus and theoretical depth is unparalleled. I've grown so much as a dancer and a performer.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    name: "Divya Shakti",
    role: "Performer",
    location: "South Africa"
  },
  {
    text: "I love the community here. The masterclasses and interactive sessions are incredibly inspiring for my journey.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    name: "Shopnil Saha",
    role: "Beginner Level",
    location: "Bangladesh"
  },
  {
    text: "The academy brings the authentic essence of Indian classical dance right into my living room.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
    name: "Richa Amehra",
    role: "Advanced Student",
    location: "Dubai"
  },
  {
    text: "Absolutely rigorous and rewarding. The mentor's eye for detail ensures you never compromise on the technique.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    name: "Anasuya Mukherjee",
    role: "Foundation Level",
    location: "India"
  }
]

const DragCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden" ref={containerRef}>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-6 cursor-grab active:cursor-grabbing w-max pb-8 pt-4 px-4"
      >
        {testimonials.map(({ text, image, name, role, location }, i) => (
          <div 
            className="w-[300px] sm:w-[350px] p-8 rounded-3xl border border-primary/10 bg-white dark:bg-white/5 dark:bg-white/5 shadow-sm transition-colors hover:border-primary/30 pointer-events-none select-none" 
            key={i}
          >
            <div className="text-sm text-text-main font-light leading-relaxed">
              "{text}"
            </div>
            <div className="flex items-center justify-between gap-3 mt-5 border-t border-primary/10 pt-4">
              <div className="flex items-center gap-3">
                <img
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  src={image}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover ring-1 ring-primary/30"
                />
                <div className="flex flex-col">
                  <div className="font-semibold text-xs tracking-tight text-text-main leading-tight">
                    {name}
                  </div>
                  <div className="text-[10px] text-text-muted tracking-tight mt-0.5">
                    {role}
                  </div>
                </div>
              </div>
              <div className="text-[10px] text-primary font-medium bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap">
                {location}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function GlobalStudents() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-bg-ivory overflow-hidden" id="gallery">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-ivory via-bg-ivory/90 to-bg-ivory z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(122,30,44,0.05),transparent_70%)] z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-text-main mb-6">
            Connecting Dancers <br className="hidden sm:block" />
            <span className="text-primary">
              Across the Globe
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto font-sans">
            Join our thriving community of international students learning authentic Bharatanatyam from the comfort of their homes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side: Globe Pulse */}
          <div className="relative flex flex-col items-center justify-center">
            <GlobePulse className="w-full max-w-[320px] sm:max-w-[500px]" />
          </div>

          {/* Right Side: Interactive Drag Carousel */}
          <div className="relative w-full overflow-hidden rounded-3xl border border-primary/10 bg-primary/5 py-8 flex flex-col">
            <div className="px-8 pb-4">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Drag to explore stories
              </p>
            </div>
            <DragCarousel testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  )
}
