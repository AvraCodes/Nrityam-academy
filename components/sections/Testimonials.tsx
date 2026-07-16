"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/AuroraBackground";

const testimonials = [
  {
    text: "Before Nrityaam, I had been learning from random YouTube videos for two years and barely had any fundamentals. Within 3 months of joining, my footwork and aramandi completely transformed. Ranbbir sir explains everything with such clarity — technique, talam, abhinaya, all in one structured system.",
    name: "Priya Nair",
    role: "Student — Dubai, UAE",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
  },
  {
    text: "I live in Toronto and had almost given up finding a serious Bharatanatyam teacher online. Nrityaam changed everything. The live sessions are thorough, recordings are always available, and the WhatsApp support is genuinely fast. I feel like I'm in a real studio.",
    name: "Anjali Krishnan",
    role: "Student — Toronto, Canada",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
  },
  {
    text: "The university-approved certification was a huge deciding factor for me. But what kept me was the quality of teaching. The curriculum is designed like a proper syllabus — level by level — and I can see my progress clearly month after month.",
    name: "Deepa Venkataraman",
    role: "Student — Singapore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
  },
  {
    text: "I'm a working professional with limited time. Nrityaam's system with lifetime class recordings and weekly feedback means I can practice on my own schedule without falling behind. In 6 months I've improved more than in 2 years of self-study.",
    name: "Meera Subramaniam",
    role: "Student — London, UK",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=1364&auto=format&fit=crop",
  },
  {
    text: "What makes Ranbbir sir exceptional is that he corrects every student individually. It doesn't feel like an online class — it feels personal. The stamina training and angasudhi focus is something I never got from any other teacher.",
    name: "Sowmya Rajan",
    role: "Student — Melbourne, Australia",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-xl shadow-primary/5 max-w-sm w-full" key={i}>
                  <div className="text-text-main text-sm md:text-base leading-relaxed font-medium">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={48}
                      height={48}
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white/50"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-text-main tracking-tight leading-5">{name}</div>
                      <div className="text-sm text-text-muted mt-1 leading-5 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  // Split the testimonials into two arrays for two columns
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3).concat(testimonials.slice(0, 1)); // Just balancing the items

  return (
    <section id="reviews">
      <AuroraBackground variant="sunset" className="py-20 md:py-28 text-text-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-[800px] flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
          
          {/* Header (Left Side) */}
          <div className="md:w-1/2 flex flex-col justify-center h-full">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-primary" />
                <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
                  Student Reviews
                </span>
              </div>

              <h2
                className="text-4xl md:text-6xl font-light leading-tight text-primary mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                850+ Students.<br />
                <em className="italic text-text-main">Real Results.</em>
              </h2>

              <p className="text-text-main/80 max-w-md text-lg leading-relaxed font-medium">
                From beginners with no prior training to students preparing for
                stage performances — see how our structured approach transformed their dance journey.
              </p>
            </div>

            <div className="mt-4">
              <a
                href="https://www.instagram.com/ranbbir.dance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/50 backdrop-blur-md rounded-full border border-white/40 text-sm text-text-main hover:bg-white/80 transition-colors duration-200 group font-medium shadow-sm"
              >
                <span>Watch more reviews on Instagram</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scrolling Columns (Right Side) */}
          <div className="md:w-1/2 flex h-full justify-center md:justify-end gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <TestimonialsColumn
              testimonials={firstColumn}
              duration={18}
              className="hidden md:flex flex-col"
            />
            <TestimonialsColumn
              testimonials={secondColumn}
              duration={22}
              className="flex flex-col"
            />
          </div>

        </div>
      </AuroraBackground>
    </section>
  );
}
