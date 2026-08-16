import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import * as mdx from "eslint-plugin-mdx";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    ...mdx.flat,
    files: ["**/*.mdx"],
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    ".source/**",
  ]),
]);

export default eslintConfig;
