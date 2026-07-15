"use client";

import React from "react";
import Masonry from "./Masonry";

const galleryItems = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 800,
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 500,
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 900,
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 600,
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 700,
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop",
    url: "https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN",
    height: 850,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg-ivory py-20 md:py-28 overflow-hidden text-text-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
              Visual Journey
            </span>
            <span className="w-8 h-px bg-primary" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-light leading-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Studio & <em className="italic text-accent">Performances</em>
          </h2>

          <p className="text-text-muted max-w-xl mx-auto text-base leading-relaxed">
            A glimpse into our classrooms, stage showcases, and training sessions at Nrityaam.
          </p>
        </div>

        {/* Masonry Container */}
        <div className="relative w-full min-h-[600px] md:min-h-[850px]">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.97}
            blurToFocus
            colorShiftOnHover={false}
          />
        </div>

        {/* Action Link */}
        <div className="text-center mt-16">
          <a
            href="https://drive.google.com/drive/folders/1-Y1bJm8OSXMbUlykY4Q-OiIq3UlEBjdN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-text-light/30 hover:border-primary rounded-full text-sm font-medium tracking-wide transition-all duration-300 bg-white hover:bg-bg-subtle group shadow-sm text-text-main"
          >
            <span>View Full Google Drive Archive</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
