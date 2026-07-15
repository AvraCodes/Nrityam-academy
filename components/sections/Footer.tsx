"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white/40 py-12 border-t border-white/5 relative z-10 text-left text-xs md:text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-lg font-semibold text-white tracking-wide">
                Nrityaam
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[--color-secondary] group-hover:scale-125 transition-transform" />
            </Link>
            <p className="text-white/30 text-xs">
              © {currentYear} Nrityaam School of Bharatanatyam. All rights reserved.
            </p>
          </div>

          {/* Quick links & Contact details */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center md:text-right">
            <a
              href="#system"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("system")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              The System
            </a>
            <a
              href="#mentor"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("mentor")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              Mentor
            </a>
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </div>

        </div>

        {/* Address and details sub-footer */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-white/30 text-xs">
          <p>
            Mentorship by Ranbbir Banerjee · Trusted by 850+ Students in 25 Countries.
          </p>
          <p>
            WhatsApp Support: +91 6291 333 077 · Email: contact@nrityaam.com
          </p>
        </div>
      </div>
    </footer>
  );
}
