import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://raw.githubusercontent.com/itsektionen/**"),
    ],
  },
};

export default withMDX(config);
