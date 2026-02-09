import { Fragment } from "react/jsx-runtime";
import { LayerConfig, LayerToTree } from "./layerConfigSchema";
import * as lmixerLayersUnknown from "./lmixerLayers.json";
import { Heading } from "fumadocs-ui/components/heading";
import TreeGrid from "./tree/TreeGrid";
const lmixerLayers = lmixerLayersUnknown as LayerConfig;

const trees = lmixerLayers.layers.map((layer) => LayerToTree(layer));

export default function DrawAllLayers() {
  return trees.map((tree, index) => {
    return (
      <Fragment key={index}>
        <Heading as="h2" id={"layer-tree-" + tree.content.text}>
          {tree.content.text}
        </Heading>
        {TreeGrid(tree, false)}
      </Fragment>
    );
  });
}
