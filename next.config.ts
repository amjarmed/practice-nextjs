import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // hostnames
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
