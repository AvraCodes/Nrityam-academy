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
      <div className="absolute inset-0 backdrop-blur-[3px] bg-bg-ivory/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-ivory/10 via-bg-ivory/30 to-bg-ivory/60" />
    </div>
  );
}
