import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  
  // outputFileTracingRoot: path.resolve(__dirname, "../../"), 

  outputFileTracingRoot: path.resolve(process.cwd()),
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ]
  }
};

export default nextConfig;
