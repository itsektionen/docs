import path from "node:path";

import {
  type FileObject,
  printErrors,
  scanURLs,
  validateFiles,
} from "next-validate-link";

import { source } from "@/lib/source";

type Page = ReturnType<typeof source.getPages>[number];

function getHeadings(page: Page): string[] {
  return page.data.toc.map((item) => item.url.slice(1));
}

function escapeWorkflowData(value: string): string {
  return value
    .replaceAll("%", "%25")
    .replaceAll("\r", "%0D")
    .replaceAll("\n", "%0A");
}

function escapeWorkflowProperty(value: string): string {
  return escapeWorkflowData(value)
    .replaceAll(":", "%3A")
    .replaceAll(",", "%2C");
}

function annotateErrors(
  results: Awaited<ReturnType<typeof validateFiles>>
): void {
  if (process.env.GITHUB_ACTIONS !== "true") return;

  for (const result of results) {
    for (const error of result.errors) {
      const reason =
        error.reason instanceof Error ? error.reason.message : error.reason;
      const message = escapeWorkflowData(`${error.url}: ${reason}`);
      const file = escapeWorkflowProperty(result.file);

      console.log(
        `::error file=${file},line=${error.line},col=${error.column},title=Broken documentation link::${message}`
      );
    }
  }
}

async function getFiles(): Promise<FileObject[]> {
  return Promise.all(
    source.getPages().map(async (page) => {
      if (!page.absolutePath) {
        throw new Error(`Page ${page.url} does not have a source path.`);
      }

      return {
        path: page.absolutePath,
        content: await page.data.getText("raw"),
        url: page.url,
        data: page.data,
      };
    })
  );
}

async function validateLinks(): Promise<void> {
  const scanned = await scanURLs({
    preset: "next",
    // Work around next-validate-link's platform-sensitive route glob handling.
    pages: [path.join("docs", "[[...slug]]", "page.tsx")],
    populate: {
      "docs/[[...slug]]": source.getPages().map((page) => ({
        value: {
          slug: page.slugs,
        },
        hashes: getHeadings(page),
      })),
    },
  });

  const results = await validateFiles(await getFiles(), {
    scanned,
    markdown: {
      components: {
        Card: { attributes: ["href"] },
      },
    },
    checkRelativePaths: "as-url",
  });

  annotateErrors(results);
  printErrors(results, true);
}

void validateLinks();
