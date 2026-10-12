import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://raw.githubusercontent.com/itsektionen/**"),
    ],
  },
  serverExternalPackages: ["@takumi-rs/core"],
  // NOTE: This only works in dev. Static export uses nginx to do this
  async rewrites() {
    return [
      {
        source: "/docs/:slug*.md",
        destination: "/llms.mdx/docs/:slug*/content.md",
      },
      {
        source: "/docs/:slug*.mdx",
        destination: "/llms.mdx/docs/:slug*/content.md",
      },
    ];
  },
};

export default withMDX(config);
