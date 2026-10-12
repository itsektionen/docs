"use client";

import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { useTheme } from "next-themes";
import { Suspense, use, useId, useSyncExternalStore } from "react";

const cache = new Map<string, Promise<unknown>>();
function cachePromise<T>(
  key: string,
  setPromise: () => Promise<T>
): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;
  const promise = setPromise();
  cache.set(key, promise);
  return promise;
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const { default: mermaid } = use(
    cachePromise("mermaid", () => import("mermaid"))
  );

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
    fontFamily: "inherit",
    theme: resolvedTheme === "dark" ? "dark" : "default",
  });

  const { svg, bindFunctions } = use(
    cachePromise(`${chart}-${resolvedTheme}`, () => mermaid.render(id, chart))
  );

  return (
    <div
      ref={(element) => {
        if (element) bindFunctions?.(element);
      }}
      className="flex justify-center overflow-x-auto [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function DiagramFallback() {
  return (
    <div className="flex justify-center items-center min-h-50 text-fd-muted-foreground border-2 bg-fd-card">
      Loading graph...
    </div>
  );
}

export function Mermaid({ chart }: { chart: string }) {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true, // Client
    () => false // server
  );
  if (!isClient) return <DiagramFallback />;
  return <MermaidContent chart={chart} />;
}

export function MermaidPreview({ chart }: { chart: string }) {
  return (
    <Tabs items={["Source", "Rendered"]}>
      <Tab value="Source">
        <DynamicCodeBlock
          lang="mermaid"
          code={`\`\`\`mermaid\n${chart.trim()}\n\`\`\``}
        />
      </Tab>
      <Tab value="Rendered">
        <Mermaid chart={chart} />
      </Tab>
    </Tabs>
  );
}
