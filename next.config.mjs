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
};

export default withMDX(config);
