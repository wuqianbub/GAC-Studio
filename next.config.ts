import type { NextConfig } from "next";

const repoName = "GAC-Studio";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages 没有 next/image 优化服务
    unoptimized: true,
  },
  // GitHub Pages 是子路径部署： https://<user>.github.io/<repo>/
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: true,
  turbopack: {
    // Turbopack 在包含多个 lockfile 的工作区里可能会错误推断 root，
    // 进而导致依赖解析异常甚至 panic。显式固定到本项目目录。
    root: __dirname,
  },
};

export default nextConfig;
