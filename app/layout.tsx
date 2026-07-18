import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import SmoothScroll from "@/components/ui/SmoothScroll";
import "./globals.css";

const runiga = localFont({
  src: "../public/fonts/Runiga.otf",
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nrityaam | School of Bharatanatyam",
  description:
    "A structured, modern Bharatanatyam training system trusted by 850+ students across 25 countries. Learn from world-class mentor Ranbbir Banerjee.",
  icons: {
    icon: "/logo.jpeg",
  },
  openGraph: {
    title: "Nrityaam | School of Bharatanatyam",
    description:
      "A proven learning path for serious students — from foundation to stage.",
    type: "website",
  },
};

import GlobalBackground from "@/components/ui/GlobalBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${runiga.variable} ${outfit.variable}`}
    >
      <head>
        <link rel="preload" href="/hero-bg.mp4" as="video" type="video/mp4" />
      </head>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <GlobalBackground />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
