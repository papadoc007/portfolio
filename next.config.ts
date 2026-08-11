import type { NextConfig } from "next";

// For GitHub Pages project sites the app is served from /<repo>.
// The Actions workflow sets PAGES_BASE_PATH=/portfolio; local builds stay at root.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
