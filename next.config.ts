import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: "/travel-album",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/travel-album"
  }
};

export default nextConfig;
