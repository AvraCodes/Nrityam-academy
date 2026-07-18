"use client";
import React, { useState, useRef, useEffect } from "react";
import { m as motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideToActionProps {
  onAction: () => void;
  text?: string;
  successText?: string;
  className?: string;
}

export function SlideToAction({
  onAction,
  text = "Slide to Begin",
  successText = "Let's Go!",
  className,
}: SlideToActionProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const knobWidth = 56;
  const padding = 8;
  const maxDrag = containerWidth - knobWidth - padding * 2;

  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      const resizeObserver = new ResizeObserver((entries) => {
        setContainerWidth(entries[0].contentRect.width);
      });
      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const handleDragEnd = () => {
    if (x.get() >= maxDrag - 10) {
      setIsSuccess(true);
      onAction();
      controls.start({ x: maxDrag });
    } else {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 20 } });
    }
  };

  const textOpacity = useTransform(x, [0, maxDrag * 0.8], [1, 0]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-16 w-full max-w-sm rounded-full overflow-hidden bg-white/5 dark:bg-white/5 border border-primary/20 backdrop-blur-md shadow-inner flex items-center p-2",
        isSuccess ? "border-primary/50" : "",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.span
          style={{ opacity: textOpacity }}
          className="text-sm font-medium tracking-widest uppercase text-text-main/70 ml-8"
        >
          {isSuccess ? successText : text}
        </motion.span>
      </div>

      <motion.div
        drag={isSuccess ? false : "x"}
        dragConstraints={{ left: 0, right: maxDrag > 0 ? maxDrag : 0 }}
        dragElastic={0.05}
        onDragEnd={handleDragEnd}
        animate={controls}
        style={{ x }}
        className="relative z-10 h-12 w-14 rounded-full bg-primary flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg"
      >
        {isSuccess ? (
          <Check className="w-5 h-5 text-white" />
        ) : (
          <ArrowRight className="w-5 h-5 text-white" />
        )}
      </motion.div>
      
      {/* Success fill background */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-primary/10 rounded-full origin-left"
        style={{ 
          width: '100%', 
          scaleX: useTransform(x, (val) => containerWidth > 0 ? (val + knobWidth + padding) / containerWidth : 0) 
        }}
      />
    </div>
  );
}
