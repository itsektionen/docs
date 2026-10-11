import { renderMermaidSVG } from "beautiful-mermaid";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

function getMermaidSvg(chart: string): { svg: string } | { error: Error } {
  try {
    const svg = renderMermaidSVG(chart, {
      bg: "var(--color-fd-card)",
      fg: "var(--color-fd-foreground)",
      accent: "var(--color-fd-primary)",
      interactive: true,
      transparent: true,
    });
    return { svg };
  } catch (error) {
    return { error: error instanceof Error ? error : new Error(String(error)) };
  }
}

export function Mermaid({ chart }: { chart: string }) {
  const result = getMermaidSvg(chart);

  if ("error" in result) {
    console.error("Failed to render Mermaid diagram:", result.error);
    return (
      <CodeBlock title={`Mermaid Error: ${result.error.message}`}>
        <Pre>{chart}</Pre>
      </CodeBlock>
    );
  }

  return (
    <div
      className="flex justify-center overflow-x-auto [&_svg]:max-w-full [&_svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: result.svg }}
    />
  );
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
