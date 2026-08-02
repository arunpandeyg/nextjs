import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */  
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    remotePatterns: [
      {      
      protocol: "https",
      hostname: "images.Cloudinary.com",
    },
    ],
  },
};

export default nextConfig;
