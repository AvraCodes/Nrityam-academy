"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { usePathname, useRouter } from 'next/navigation';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  
  return (
    <a 
      href={pathname === '/' ? href : `/${href}`} 
      onClick={(e) => {
        if (pathname === '/') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
      className={cn(
        "relative inline-block text-sm px-4 py-2 rounded-full text-text-muted hover:bg-primary hover:text-white transition-all duration-300 ease-out whitespace-nowrap",
        "hover:scale-105 hover:shadow-lg font-medium tracking-wide"
      )}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const pathname = usePathname();
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Shape animation transition logic
  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-2xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  // Smart Hide-on-Scroll Down, Show-on-Scroll Up behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      // Ignore very small scroll movements to prevent stuttering
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down & past threshold - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const logoElement = (
    <Link 
      href="/" 
      onClick={handleLogoClick}
      className="flex items-center gap-2 group z-50 transition-transform duration-300 hover:scale-105"
    >
      <div className="relative w-9 h-9 rounded-full overflow-hidden border-[1.5px] border-primary group-hover:border-primary-light transition-colors shadow-sm">
        <img
          src="/logo.jpeg"
          alt="Nrityaam Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-serif text-xl font-bold tracking-tight text-text-main">
        Nrityaam
      </span>
    </Link>
  );

  return (
    <AnimatePresence>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className={cn(
            "w-full max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden",
            headerShapeClass,
            "border",
            isScrolled || isOpen 
              ? "bg-white/80 dark:bg-white/5 backdrop-blur-xl border-primary/10 shadow-lg" 
              : "bg-transparent border-transparent"
          )}
        >
          {/* Main Navbar Bar */}
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            {logoElement}

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              <AnimatedNavLink href="#system">The System</AnimatedNavLink>
              <AnimatedNavLink href="#portal">Portal</AnimatedNavLink>
              <AnimatedNavLink href="#mentor">Mentor</AnimatedNavLink>
              <AnimatedNavLink href="#gallery">Gallery</AnimatedNavLink>
              <AnimatedNavLink href="#pricing">Pricing</AnimatedNavLink>
              <AnimatedNavLink href="#faq">FAQ</AnimatedNavLink>
            </div>

            {/* CTA and Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href={pathname === '/' ? '#pricing' : '/#pricing'}
                onClick={(e) => {
                  if (pathname === '/') {
                    e.preventDefault();
                    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white dark:bg-white/5 dark:bg-white/5 text-text-main px-6 text-sm font-medium border border-primary/20 transition-all hover:bg-primary hover:text-white hover:scale-105 shadow-sm hover:shadow-lg cursor-pointer"
              >
                Enroll Now
              </a>
              
              <button 
                onClick={toggleMenu} 
                className="md:hidden p-2 -mr-2 text-text-main hover:text-primary transition-colors"
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden"
              >
                <div className="flex flex-col gap-4 px-8 pb-8 pt-4 border-t border-primary/10">
                  <a href={pathname === '/' ? "#system" : "/#system"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">The System</a>
                  <a href={pathname === '/' ? "#portal" : "/#portal"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">Portal</a>
                  <a href={pathname === '/' ? "#mentor" : "/#mentor"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">Mentor</a>
                  <a href={pathname === '/' ? "#gallery" : "/#gallery"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">Gallery</a>
                  <a href={pathname === '/' ? "#pricing" : "/#pricing"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">Pricing</a>
                  <a href={pathname === '/' ? "#faq" : "/#faq"} onClick={() => setIsOpen(false)} className="text-base text-text-muted hover:bg-primary hover:text-white px-4 py-2 rounded-xl transition-all font-medium">FAQ</a>
                  
                  <a
                    href="#pricing"
                    onClick={() => {
                      setIsOpen(false);
                      document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-white dark:bg-white/5 dark:bg-white/5 text-text-main border border-primary/20 text-base font-medium hover:bg-primary hover:text-white shadow-sm transition-all"
                  >
                    Enroll Now
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
