import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import ExclusiveTo from "./components/generic/callout/exclusive-to";
import CalloutExt from "./components/generic/callout/callout-ext";
import Icon from "./components/generic/icon";
import Card from "./components/generic/card";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    ExclusiveTo: ExclusiveTo,
    CalloutExt: CalloutExt,
    Icon: Icon,
    Card: Card,
  };
}
