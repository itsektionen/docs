import { register } from "node:module";

register("./asset-loader.mjs", import.meta.url);
register("fumadocs-mdx/node/loader", import.meta.url);
