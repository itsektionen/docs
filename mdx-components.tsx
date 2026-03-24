import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import FixtureTypes from "./components/lmixer/fixtures/fixture-types";
import FixtureInfos from "./components/lmixer/fixtures/fixture-infos";
import FixtureGroups from "./components/lmixer/fixtures/fixture-groups";
import LayerTreeExplaination from "./components/lmixer/layer/layer-tree-explaination";
import DrawAllLayers from "./components/lmixer/layer/draw-all-layers";
import ExclusiveTo from "./components/generic/callout/exclusive-to";
import CalloutExt from "./components/generic/callout/callout-ext";
import Card from "./components/generic/card";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    FixtureTypes: FixtureTypes,
    FixtureInfos: FixtureInfos,
    FixtureGroups: FixtureGroups,
    LayerTreeExplaination: LayerTreeExplaination,
    DrawAllLayers: DrawAllLayers,
    ExclusiveTo: ExclusiveTo,
    CalloutExt: CalloutExt,
    Card: Card,
  };
}
