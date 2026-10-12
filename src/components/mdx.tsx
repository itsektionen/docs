import * as StepComponents from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import CalloutExt from "@/components/generic/callout/callout-ext";
import ExclusiveTo from "@/components/generic/callout/exclusive-to";
import Card from "@/components/generic/card";
import Icon from "@/components/generic/icon";
import * as mermaidComponents from "@/components/mdx/mermaid";
import FixtureInfos from "@/components/lmixer/fixtures/fixture-infos";
import FixtureGroups from "@/components/lmixer/fixtures/fixture-groups";
import FixtureTypes from "@/components/lmixer/fixtures/fixture-types";
import DrawAllLayers from "@/components/lmixer/layer/draw-all-layers";
import LayerTreeExplaination from "@/components/lmixer/layer/layer-tree-explaination";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    ...StepComponents,
    ...mermaidComponents,
    ...components,
    ExclusiveTo,
    CalloutExt,
    Icon,
    Card,
    FixtureInfos,
    FixtureGroups,
    FixtureTypes,
    DrawAllLayers,
    LayerTreeExplaination,
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
