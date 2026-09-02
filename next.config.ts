import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  allowedDevOrigins: [
    "192.168.2.23",
    "192.168.2.23:3000",
    "192.168.2.32",
    "192.168.2.32:3000",
    "192.168.*",
    "192.168.*:3000",
    "192.168.1.*",
    "192.168.0.*",
    "10.*",
    "localhost",
    "localhost:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ryzfriykqluohxvulezu.supabase.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
