"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";

const videos = [
  { src: "/videos/national/anasuya-mukherjee.mp4", name: "Anasuya Mukherjee", location: "India" },
  { src: "/videos/international/ankita-usa.mp4", name: "Ankita", location: "USA" },
  { src: "/videos/national/manisha-murmu.mp4", name: "Manisha Murmu", location: "India" },
  { src: "/videos/international/bhavitha.mp4", name: "Bhavitha", location: "Botswana" },
  { src: "/videos/national/prachurya-ghara.mp4", name: "Prachurya Ghara", location: "India" },
  { src: "/videos/international/divya-shakti.mp4", name: "Divya Shakti", location: "South Africa" },
  { src: "/videos/national/satashree-paul.mp4", name: "Satashree Paul", location: "India" },
  { src: "/videos/international/jeevitha-p.mp4", name: "Jeevitha P.", location: "USA" },
  { src: "/videos/national/siddharth-dixit.mp4", name: "Siddharth Dixit", location: "India" },
  { src: "/videos/international/priya-vinod.mp4", name: "Priya Vinod", location: "USA" },
  { src: "/videos/national/sucheta-chakraborty.mp4", name: "Sucheta Chakraborty", location: "India" },
  { src: "/videos/international/pruthuvi-sri.mov", name: "Pruthuvi Sri", location: "Sri Lanka" },
  { src: "/videos/national/tisha-saha.mp4", name: "Tisha Saha", location: "India" },
  { src: "/videos/international/puja-natesan.mp4", name: "Puja Natesan", location: "USA" },
  { src: "/videos/national/vaishnavi-avadhoot.mp4", name: "Vaishnavi Avadhoot", location: "India" },
  { src: "/videos/international/richa-amehra.mp4", name: "Richa Amehra", location: "Dubai" },
  { src: "/videos/international/shopnil-saha.mp4", name: "Shopnil Saha", location: "Bangladesh" },
];

// Wait, let's fix the name of sucheta: in command I ran: mv "...Sucheta Chakraborty..." to "...sucheta-chakraborty.mp4".
// Let me update the src mapping for Sucheta to match exactly.

export default function VideoTestimonialsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Split into 3 columns
  const col1 = videos.filter((_, i) => i % 3 === 0);
  const col2 = videos.filter((_, i) => i % 3 === 1);
  const col3 = videos.filter((_, i) => i % 3 === 2);

  const renderCard = (video: typeof videos[0]) => (
    <div key={video.src} className="relative rounded-2xl overflow-hidden mb-6 group cursor-pointer shadow-lg border border-white/20">
      <video
        src={video.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 bg-bg-ivory"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
        <h4 className="text-white font-serif text-lg font-medium tracking-wide">{video.name}</h4>
        <p className="text-white/80 text-sm font-sans flex items-center gap-1.5 mt-0.5">
          <span className="w-1 h-1 rounded-full bg-secondary block" />
          {video.location}
        </p>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-primary" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-primary">
            Student Stories
          </span>
          <span className="w-8 h-px bg-primary" />
        </div>
        <h2 className="text-4xl md:text-6xl font-light text-text-main mb-6 font-serif">
          Hear From Our <em className="italic text-primary font-serif">Global</em> Students
        </h2>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          Hover over the videos to hear about their experiences mastering the structured Bharatanatyam system.
        </p>
      </div>

      {/* Masonry Columns with Parallax Scroll */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px] overflow-hidden rounded-3xl relative">
          
          {/* Fading Edges */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-ivory to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg-ivory to-transparent z-20 pointer-events-none" />

          {/* Col 1 */}
          <motion.div style={{ y: y1 }} className="flex flex-col pt-12">
            {col1.map(renderCard)}
            {col1.map(renderCard)} {/* Duplicate for scrolling length */}
          </motion.div>

          {/* Col 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col -mt-[400px]">
            {col2.map(renderCard)}
            {col2.map(renderCard)}
          </motion.div>

          {/* Col 3 */}
          <motion.div style={{ y: y3 }} className="flex flex-col hidden lg:flex pt-24">
            {col3.map(renderCard)}
            {col3.map(renderCard)}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
