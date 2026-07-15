import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Run lint separately; don't block builds on ESLint warnings
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.googleusercontent.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
