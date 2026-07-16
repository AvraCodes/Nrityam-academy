"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "System", href: "/curriculum" },
  { label: "Mentor", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-0 right-0 z-[100] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="px-5 backdrop-blur-2xl bg-white/40 border border-white/20 rounded-full py-3.5 flex justify-between items-center shadow-lg">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-[1.5px] border-primary group-hover:border-primary-light transition-colors shadow-sm">
              <Image src="/logo.jpeg" alt="Nrityaam Logo" fill className="object-cover" />
            </div>
            <span className="font-serif text-2xl font-bold text-text-main tracking-wide">
              Nrityaam
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-primary font-medium" : "text-text-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/916291333077"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-4 py-2 text-sm text-text-muted hover:text-text-main transition-colors"
            >
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 bg-primary hover:bg-primary-light text-white text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer border border-white/10 shadow-primary"
            >
              Book a Call
            </Link>
            {/* Mobile toggle */}
            <button
              className="md:hidden p-1.5 text-text-muted hover:text-primary transition-colors cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-bg-ivory/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6 text-lg"
          >
            <button
              className="absolute top-6 right-6 p-2 text-text-muted hover:text-primary transition-colors cursor-pointer"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-text-main hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-full font-medium cursor-pointer"
            >
              Book a Free Call
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
