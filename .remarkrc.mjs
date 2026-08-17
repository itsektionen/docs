import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkLint from "remark-lint";
import remarkLintFirstHeadingLevel from "remark-lint-first-heading-level";
import remarkLintHeadingIncrement from "remark-lint-heading-increment";
import remarkLintNoDuplicateHeadingsInSection from "remark-lint-no-duplicate-headings-in-section";
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
    remarkLintNoDuplicateHeadingsInSection,
    remarkLintNoEmptyUrl,
    remarkLintNoUndefinedReferences,
    remarkLintNoUnusedDefinitions,
  ],
};

export default config;
