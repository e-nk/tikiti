import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 images: {
   remotePatterns: [
     {
       hostname: "ceaseless-bloodhound-283.convex.cloud",
       protocol: "https",
     },
   ],
 },
};

export default nextConfig;
