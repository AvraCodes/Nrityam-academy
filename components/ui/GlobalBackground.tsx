"use client";

import React from "react";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <video
        src="/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      {/* Soft overlay/blur to make text readable and blend pages */}
      <div className="absolute inset-0 bg-[#FFF2E2]/35 dark:bg-[#1a1a1a]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF2E2]/10 via-[#FFF2E2]/25 to-[#FFF2E2]/40 dark:from-bg-ivory/10 dark:via-bg-ivory/30 dark:to-bg-ivory/60" />
    </div>
  );
}
