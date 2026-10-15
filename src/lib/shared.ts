import { createGetUrl } from "fumadocs-core/source";

export const appName = "it/docs";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";

export const gitConfig = {
  user: "itsektionen",
  repo: "docs",
  branch: "main",
};
export const gitRepoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://docs.kth.it"
);

export function getPageMarkdownUrl(page: {
  slugs: string[];
  url?: string;
  locale?: string;
}) {
  const segments = [...page.slugs, "content.md"];
  const path =
    page.url ??
    (page.slugs.length === 0
      ? docsRoute
      : `${docsRoute}/${page.slugs.join("/")}`);

  return { segments, url: `${path}.md` };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, "image.webp"];

  return { segments, url: getImageUrl(segments, page.locale) };
}
