import { cn } from "@/lib/cn";
import Link from "fumadocs-core/link";
import { CardProps } from "fumadocs-ui/components/card";

/*

Modified version of Fumadocs' <Card/> Component

*/

export default function IconedCard({ icon, title, ...props }: CardProps) {
  const OuterElement = props.href ? Link : "div";
  return (
    <OuterElement
      {...props}
      data-card
      className={cn(
        "block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full",
        props.href && "hover:bg-fd-accent/80",
        props.className
      )}
    >
      <div
        className="grid gap-2 h-full items-start"
        style={{
          gridTemplateColumns: "24px 1rem 3fr",
        }}
      >
        <div className="not-prose mb-2 w-8 text-fd-foreground [&_svg]:size-full aspect-square p-1 mt-1">
          {icon}
        </div>
        <div className="h-10 mx-auto mt-1" role="none">
          <div className="border -skew-10 h-full mx-auto w-0"></div>
        </div>
        <div className="flex-1">
          <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>
          <div className="text-sm text-fd-muted-foreground prose-no-margin empty:hidden">
            {props.children}
          </div>
        </div>
      </div>
    </OuterElement>
  );
}
