import * as StepComponents from "fumadocs-ui/components/steps";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import CalloutExt from "@/components/generic/callout/callout-ext";
import ExclusiveTo from "@/components/generic/callout/exclusive-to";
import Card from "@/components/generic/card";
import Icon from "@/components/generic/icon";
import * as mermaidComponents from "@/components/mdx/mermaid";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { ComponentProps } from "react";

export function getMDXComponents(components?: MDXComponents) {
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
    img: ({ src, ...rest }: ComponentProps<"img">) => {
      if (!src || src instanceof Blob) return null;
      return <ImageZoom src={src} {...rest} />;
    },
  };
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
