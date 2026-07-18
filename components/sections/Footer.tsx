"use client"

import React from 'react'
import { Map, MapMarker, MapControls, MarkerContent } from "@/components/ui/map-component"
import { ArrowUpRight, Instagram, Youtube, Facebook, MapPin, Mail, Phone, ArrowUp } from "lucide-react"
import Link from "next/link"
import { DIcons } from "dicons";
import { useTheme } from "next-themes";

const Footer = () => {
  const { setTheme } = useTheme();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative bg-primary-dark border-t border-white/5 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Map Section */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2 group w-fit">
                <span className="font-serif text-2xl font-semibold text-white tracking-wide">
                  Nrityaam
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
              </Link>
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                Empowering dancers globally with authentic Bharatanatyam training, structured curriculum, and a passionate community.
              </p>
            </div>

            {/* Map Container */}
            <div className="h-[200px] w-full rounded-2xl overflow-hidden border border-white/10 relative group">
              <Map
                center={[88.3639, 22.5726]} // Kolkata coordinates
                zoom={12}
                pitch={45}
                styles={{
                  light: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                  dark: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
                }}
              >
                <MapMarker 
                  longitude={88.3639} 
                  latitude={22.5726}
                  color="var(--color-primary)"
                >
                  <MarkerContent className="bg-primary text-white">
                    <MapPin className="w-4 h-4" />
                  </MarkerContent>
                </MapMarker>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <MapControls className="bg-white/10 dark:bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/20 dark:bg-white/5" />
                </div>
              </Map>
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl" />
            </div>

            <div className="flex items-start gap-3 text-sm text-zinc-400">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p>
                Headquarters in Kolkata, West Bengal<br />
                Available Worldwide via Live Sessions
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Platform */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-sm">Academy</h3>
              <ul className="flex flex-col gap-4">
                {["The System", "Mentor", "Gallery", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-semibold text-sm">Legal</h3>
              <ul className="flex flex-col gap-4">
                {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-6 col-span-2 sm:col-span-1">
              <h3 className="text-white font-semibold text-sm">Contact</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="mailto:hello@nrityaam.com" className="text-zinc-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <Mail className="w-4 h-4 group-hover:-rotate-12 transition-transform" />
                    hello@nrityaam.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919876543210" className="text-zinc-400 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    +91 98765 43210
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-2">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Youtube, href: "#" },
                  { icon: Facebook, href: "#" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - User Provided Theme Component */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 pb-6">
          <p className="text-zinc-500 text-sm order-3 sm:order-1">
            © {new Date().getFullYear()} Nrityaam School of Bharatanatyam. All rights reserved.
          </p>

          <div className="flex items-center justify-center order-1 sm:order-2">
            <div className="flex items-center rounded-full border border-white/20 bg-white/5 p-1">
              <button
                onClick={() => setTheme("light")}
                className="bg-primary/20 mr-2 rounded-full p-2 text-white hover:bg-primary transition-colors"
              >
                <DIcons.Sun className="h-4 w-4" strokeWidth={1.5} />
                <span className="sr-only">Light Theme</span>
              </button>

              <button type="button" onClick={handleScrollTop} className="p-2 text-zinc-400 hover:text-white transition-colors">
                <DIcons.ArrowUp className="h-4 w-4" strokeWidth={1.5} />
                <span className="sr-only">Top</span>
              </button>

              <button
                onClick={() => setTheme("dark")}
                className="ml-2 rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <DIcons.Moon className="h-4 w-4" strokeWidth={1.5} />
                <span className="sr-only">Dark Theme</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-zinc-500 text-sm order-2 sm:order-3 text-center flex-wrap justify-center">
            <span>Built with</span>
            <span className="text-primary animate-pulse">❤</span>
            <span>by <a href="https://brew-web.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-medium">Avra from BrewWeb</a> (<a href="https://portfolioavra.vercel.app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">Portfolio</a>)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
