import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import FixtureTypes from './components/lmixer/fixtures/FixtureTypes';
import FixtureInfos from './components/lmixer/fixtures/FixtureInfos';
import FixtureGroups from './components/lmixer/fixtures/FixtureGroups';
import LayerTreeExplaination from './components/lmixer/layer/LayerTreeExplaination';
import DrawAllLayers from './components/lmixer/layer/DrawAllLayers';
import ExclusiveTo from './components/generic/callout/ExclusiveTo';
import CalloutExt from './components/generic/callout/CalloutExt';

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
    CalloutExt: CalloutExt
  };
}
