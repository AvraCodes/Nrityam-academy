import React from 'react';
import { cn } from '@/lib/utils';

interface SkewCardProps {
  title: React.ReactNode;
  children: React.ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

export function SkewCard({ 
  title, 
  children, 
  gradientFrom = '#ffbc00', 
  gradientTo = '#ff0058',
  className 
}: SkewCardProps) {
  return (
    <div className={cn("group relative w-full h-full min-h-[220px] flex transition-all duration-500", className)}>
      {/* Skewed gradient panels */}
      <span
        className="absolute -top-[10%] left-[25%] w-[50%] h-[120%] rounded-lg transform -skew-x-[15deg] transition-all duration-500 group-hover:skew-x-0 group-hover:left-[5%] group-hover:w-[90%] group-hover:-top-[5%] group-hover:h-[110%] group-hover:animate-pulse"
        style={{
          background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />
      <span
        className="absolute -top-[10%] left-[25%] w-[50%] h-[120%] rounded-lg transform -skew-x-[15deg] blur-[40px] opacity-80 transition-all duration-500 group-hover:skew-x-0 group-hover:left-[5%] group-hover:w-[90%] group-hover:-top-[5%] group-hover:h-[110%] group-hover:animate-pulse"
        style={{
          background: `linear-gradient(315deg, ${gradientFrom}, ${gradientTo})`,
        }}
      />

      {/* Animated blurs */}
      <span className="pointer-events-none absolute inset-0 z-10">
        <span className="absolute top-0 left-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)]-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-100 animate-blob group-hover:top-[-40px] group-hover:left-[20px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
        <span className="absolute bottom-0 right-0 w-0 h-0 rounded-lg opacity-0 bg-[rgba(255,255,255,0.1)]-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-500 animate-blob animation-delay-1000 group-hover:bottom-[-40px] group-hover:right-[20px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100" />
      </span>

      {/* Content */}
      <div className="relative z-20 left-0 w-full h-full p-6 sm:p-8 bg-white/75 dark:bg-black/60-[20px] shadow-2xl rounded-xl border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white transition-all duration-500 group-hover:left-[-10px] group-hover:px-9 flex flex-col justify-center">
        <h2 className="text-lg sm:text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-zinc-950 dark:group-hover:text-zinc-950 transition-colors duration-300">{title}</h2>
        <div className="text-sm leading-relaxed text-zinc-700 dark:text-white/80 group-hover:text-zinc-900 dark:group-hover:text-zinc-950 transition-colors duration-300">{children}</div>
      </div>
    </div>
  );
}
