import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import ExclusiveTo from "./components/generic/callout/exclusive-to";
import CalloutExt from "./components/generic/callout/callout-ext";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ExclusiveTo: ExclusiveTo,
    CalloutExt: CalloutExt,
  };
}
