"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    quote:
      "Before Nrityaam, I had been learning from random YouTube videos for two years and barely had any fundamentals. Within 3 months of joining, my footwork and aramandi completely transformed. Ranbbir sir explains everything with such clarity — technique, talam, abhinaya, all in one structured system.",
    name: "Priya Nair",
    designation: "Student — Dubai, UAE",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop",
  },
  {
    quote:
      "I live in Toronto and had almost given up finding a serious Bharatanatyam teacher online. Nrityaam changed everything. The live sessions are thorough, recordings are always available, and the WhatsApp support is genuinely fast. I feel like I'm in a real studio.",
    name: "Anjali Krishnan",
    designation: "Student — Toronto, Canada",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop",
  },
  {
    quote:
      "The university-approved certification was a huge deciding factor for me. But what kept me was the quality of teaching. The curriculum is designed like a proper syllabus — level by level — and I can see my progress clearly month after month.",
    name: "Deepa Venkataraman",
    designation: "Student — Singapore",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop",
  },
  {
    quote:
      "I'm a working professional with limited time. Nrityaam's system with lifetime class recordings and weekly feedback means I can practice on my own schedule without falling behind. In 6 months I've improved more than in 2 years of self-study.",
    name: "Meera Subramaniam",
    designation: "Student — London, UK",
    src: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=1364&auto=format&fit=crop",
  },
  {
    quote:
      "What makes Ranbbir sir exceptional is that he corrects every student individually. It doesn't feel like an online class — it feels personal. The stamina training and angasudhi focus is something I never got from any other teacher.",
    name: "Sowmya Rajan",
    designation: "Student — Melbourne, Australia",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-bg-ivory py-20 md:py-28 overflow-hidden text-text-main"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
              Student Reviews
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            850+ Students.{" "}
            <em className="italic text-accent">Real Results.</em>
          </h2>

          <p className="text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            From beginners with no prior training to students preparing for
            stage performances — here's what they say.
          </p>
        </div>

        {/* Animated testimonials */}
        <AnimatedTestimonials
          testimonials={testimonials}
          autoplay
          autoplayInterval={6000}
          className="max-w-5xl mx-auto"
        />

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/ranbbir.dance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors duration-200 group"
          >
            <span>Watch more student reviews on Instagram</span>
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
    </section>
  );
}
