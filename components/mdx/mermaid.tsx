import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { renderMermaidSVG } from "beautiful-mermaid";

function getMermaidSvg(chart: string): { svg: string } | { error: unknown } {
  try {
    const svg = renderMermaidSVG(chart.replaceAll("\\n", "\n"), {
      bg: "var(--color-fd-card)",
      fg: "var(--color-fd-foreground)",
      interactive: true,
      transparent: true,
    });
    return { svg };
  } catch (error) {
    return { error };
  }
}

export function Mermaid({ chart }: { chart: string }) {
  const result = getMermaidSvg(chart);

  if ("error" in result) {
    console.error("Failed to render Mermaid diagram:", result.error);
    return (
      <CodeBlock title="Mermaid (Render Error)">
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
