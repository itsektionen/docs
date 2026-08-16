import * as TabsComponents from "fumadocs-ui/components/tabs";
import * as StepComponents from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import CalloutExt from "./components/generic/callout/callout-ext";
import ExclusiveTo from "./components/generic/callout/exclusive-to";
import Card from "./components/generic/card";
import Icon from "./components/generic/icon";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...StepComponents,
    ...components,
    ExclusiveTo: ExclusiveTo,
    CalloutExt: CalloutExt,
    Icon: Icon,
    Card: Card,
  };
}
