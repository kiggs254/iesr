import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for cPanel hosting — produces an `out/` folder of plain HTML/CSS/JS.
  output: "export",

  images: {
    // Required for static export: no image optimisation server is available.
    // next/image still renders correctly; images are served as-is.
    unoptimized: true,
  },
};

export default nextConfig;
