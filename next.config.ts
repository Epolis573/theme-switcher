/**
 * @file next.config.ts
 * @description Custom Next.js configuration
 *
 * Learn more: https://nextjs.org/docs/app/building-your-application/configuring/next-config-js
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React strict mode (optional but recommended for highlighting potential problems)
  reactStrictMode: true,

  // Enable SWC-based minification for faster builds

  // Optional: set custom asset prefix or basePath if needed
  // basePath: "/your-subpath",
  // assetPrefix: "/your-subpath",

  // Experimental options can go here
  // experimental: {},
};

export default nextConfig;