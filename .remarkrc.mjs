import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkLint from "remark-lint";
import remarkLintFirstHeadingLevel from "remark-lint-first-heading-level";
import remarkLintHeadingIncrement from "remark-lint-heading-increment";
import remarkLintNoDuplicateHeadings from "remark-lint-no-duplicate-headings";
import remarkLintNoEmptyUrl from "remark-lint-no-empty-url";
import remarkLintNoUndefinedReferences from "remark-lint-no-undefined-references";
import remarkLintNoUnusedDefinitions from "remark-lint-no-unused-definitions";
import remarkPresetPrettier from "remark-preset-prettier";

const config = {
  plugins: [
    remarkFrontmatter,
    remarkGfm,
    remarkLint,
    remarkPresetPrettier,
    [remarkLintFirstHeadingLevel, 2],
    remarkLintHeadingIncrement,
    remarkLintNoDuplicateHeadings,
    remarkLintNoEmptyUrl,
    remarkLintNoUndefinedReferences,
    remarkLintNoUnusedDefinitions,
  ],
};

export default config;
