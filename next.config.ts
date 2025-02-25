import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://avatars.githubusercontent.com/u'
      },
      {
        protocol: 'https',
        hostname: 'https://ui-avatars.com/api'
      }
    ]
  }
};

export default nextConfig;
