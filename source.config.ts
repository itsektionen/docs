import { defineConfig } from "fumadocs-mdx/config";

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
    },
  },
});
