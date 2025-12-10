// next.config.ts
import type { NextConfig } from "next";

const repoName = "storetech-pitch";

const nextConfig: NextConfig = {
  output: "export",
  reactCompiler: true,
  basePath: `/${repoName}`,       
  assetPrefix: `/${repoName}`,   
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
