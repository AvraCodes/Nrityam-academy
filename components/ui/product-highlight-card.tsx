"use client";

import * as React from "react";
import { m as motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the properties for the ProductHighlightCard component
interface ProductHighlightCardProps extends HTMLMotionProps<"div"> {
  categoryIcon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
}

export const ProductHighlightCard = React.forwardRef<HTMLDivElement, ProductHighlightCardProps>(
  ({ className, categoryIcon, category, title, description, imageSrc, imageAlt, imageClassName, ...props }, ref) => {
    
    // --- Animation Logic for 3D Tilt Effect ---
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const isHovered = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
      const { left, top, width, height } = currentTarget.getBoundingClientRect();
      mouseX.set((clientX - left) / width);
      mouseY.set((clientY - top) / height);
      isHovered.set(1);
    };

    // Transform mouse position into a rotation value
    const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
    const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);
    
    // Apply spring physics for a smoother animation
    const springConfig = { stiffness: 300, damping: 20 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    
    // --- Animation Logic for Glow Effect Removed ---

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0.5);
          mouseY.set(0.5);
          isHovered.set(0);
        }}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full h-full rounded-2xl bg-white/70 dark:bg-white/5 shadow-lg transition-shadow duration-300 hover:shadow-2xl border border-primary/10",
          className
        )}
        {...props}
      >
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="absolute inset-4 rounded-xl bg-bg-ivory/5 dark:bg-white/5 shadow-inner overflow-hidden">
          
          {/* Diagonal line texture */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Glow effect removed as requested */}

          <div className="relative z-10 flex h-full flex-col justify-center gap-6 p-6">
            {/* CORRECTED THIS LINE */}
            <div className="flex items-center space-x-2 text-text-main">
              {categoryIcon}
              <span className="text-sm font-medium">{category}</span>
            </div>
            
            {/* CORRECTED THIS LINE */}
            <div className="text-text-main">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
              <p className="mt-2 max-w-[80%] text-xs text-text-muted font-light">
                {description}
              </p>
            </div>
          </div>
          
          {/* Product Image */}
          {imageSrc && (
            <motion.img
              src={imageSrc}
              alt={imageAlt || ""}
              style={{ transform: "translateZ(30px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "absolute object-contain",
                imageClassName || "-right-4 -bottom-4 h-48 w-48 rounded-xl shadow-lg opacity-90"
              )}
            />
          )}
        </div>
      </motion.div>
    );
  }
);

ProductHighlightCard.displayName = "ProductHighlightCard";
