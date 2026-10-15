import { llms, loader } from "fumadocs-core/source";
import { docsRoute, gitConfig } from "./shared";
import { defineDocs } from "fumadocs-mdx/macro";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { iconResolver } from "./custom-icons";
import { createElement } from "react";
import * as LucideIcons from "lucide-react";

const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: pageSchema,
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;
    const resolved = iconResolver(icon);
    if (resolved) return resolved;

    if (icon in LucideIcons) {
      const Comp = (LucideIcons as Record<string, any>)[icon];
      if (typeof Comp === "function" || typeof Comp === "object") {
        return createElement(Comp);
      }
    }
  },
});

export const docsLlms = llms(source, {
  renderPage: async (page) => `# ${page.data.title}
URL: ${page.url}
Source: https://raw.githubusercontent.com/${gitConfig.user}/${gitConfig.repo}/refs/heads/${gitConfig.branch}/${page.absolutePath}

${page.data.description ?? ""}

${await page.data.getText("processed")}`,
});
