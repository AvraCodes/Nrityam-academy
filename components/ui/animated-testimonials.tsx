"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  autoplayInterval = 5000,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, autoplayInterval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, autoplayInterval, active]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className={cn("relative mx-auto max-w-sm px-4 py-8 md:max-w-4xl md:px-8 lg:px-12 md:py-16 font-sans", className)}>
      <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
        {/* Image stack */}
        <div className="relative h-72 w-full md:h-96">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length - Math.abs(index - active),
                  y: isActive(index) ? [0, -10, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut" as const,
                }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" as const }}
          >
            <h3 className="text-xl font-bold text-text-main">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-text-muted font-medium mt-1">
              {testimonials[active].designation}
            </p>

            <motion.p className="mt-6 text-base text-text-muted leading-relaxed font-normal">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut" as const,
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-text-light/30 bg-bg-subtle hover:bg-primary hover:border-primary transition-all duration-200 cursor-pointer"
            >
              <svg
                className="h-4 w-4 text-text-muted group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-text-light/30 bg-bg-subtle hover:bg-primary hover:border-primary transition-all duration-200 cursor-pointer"
            >
              <svg
                className="h-4 w-4 text-text-muted group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5 ml-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > active ? 1 : -1);
                    setActive(index);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                    isActive(index)
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-text-light/30 hover:bg-primary/55"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
