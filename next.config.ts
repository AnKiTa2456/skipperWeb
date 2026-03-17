import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com',
      },
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
      },
      {
        protocol: 'https',
        hostname: 'skiper-ui.com',
      },
    ],
  },
};

export default nextConfig;
