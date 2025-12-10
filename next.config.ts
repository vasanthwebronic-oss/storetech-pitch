// next.config.ts
import type { NextConfig } from "next";

const repoName = process.env.REPO_NAME || ""; // Set this when exporting: REPO_NAME=repo-name

const nextConfig: NextConfig = {
  output: "export",                  
  reactCompiler: true,               
  basePath: repoName ? `/${repoName}` : "",
  assetPrefix: repoName ? `/${repoName}/` : "",
  images: {
    unoptimized: true,               
  },
};

export default nextConfig;
