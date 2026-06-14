import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.0.0.35", "10.0.0.*"],
  images: {
    // Horizon gallery sources can exceed the new 50MB default in Next 16.
    maximumResponseBody: 100_000_000,
  },
};

export default nextConfig;
