import { cn } from "@/lib/cn";
import Link from "fumadocs-core/link";
import * as FumaCard from "fumadocs-ui/components/card";
import { HTMLAttributes, ReactNode } from "react";

/*

Modified version of Fumadocs' <Card/> Component

*/

export enum CardType {
  baseUI = "base-ui",
  iconSlash = "icon-slash",
  noInternalStyling = "styleless"
}

type CardPropsGeneric = FumaCard.CardProps & {
  title?: ReactNode;
  type?: Exclude<CardType, CardType.noInternalStyling>;
};


type CardPropsNoStyling = Omit<Omit<CardPropsGeneric, "title">, "type"> & {
  type: CardType.noInternalStyling;
};

export type CardProps = CardPropsGeneric | CardPropsNoStyling

export default function Card(props: CardProps) {
  switch (props.type) {
    default:
    case CardType.baseUI:
      return FumaCard.Card(props);
    case CardType.iconSlash:
      return CardIconSlash(props);
    case CardType.noInternalStyling:
      return <OuterElement href={props.href} className={props.className} {...props}>{props.children}</OuterElement>
  }
}

function CardIconSlash(props: CardPropsGeneric) {
  return <OuterElement href={props.href} className={props.className} {...props}>
    <IconGrid>
      <IconSlash icon={props.icon} />
      <Content title={props.title} description={props.description}>
        {props.children}
      </Content>
    </IconGrid>
  </OuterElement>

}

function OuterElement({
  href,
  className,
  children,
  ...props
}: { href?: string } & Omit<CardProps, "title">) {
  const OuterElement = href ? Link : "div";
  return (
    <OuterElement
      href={href}
      {...props}
      data-card
      className={cn(
        "block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full",
        href && "hover:bg-fd-accent/80",
        className
      )}
    >
      {children}
    </OuterElement>
  );
}

function IconGrid({ children }: { children?: ReactNode }) {
  return (
    <div
      className="grid gap-2 h-full items-start"
      style={{
        gridTemplateColumns: "24px 1rem 3fr",
      }}
    >
      {children}
    </div>
  );
}

function IconSlash({ icon }: { icon?: ReactNode }) {
  return (
    <>
      <div className="not-prose mb-2 w-8 text-fd-foreground [&_svg]:size-full aspect-square p-1 mt-1">
        {icon}
      </div>
      <div className="h-10 mx-auto mt-1" role="none">
        <div className="border -skew-10 h-full mx-auto w-0" />
      </div>
    </>
  );
}

function Content({
  title,
  description,
  children,
}: {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="flex-1">
      <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>
      {description && (
        <p className="my-0! text-sm text-fd-muted-foreground">{description}</p>
      )}
      <div className="text-sm text-fd-muted-foreground prose-no-margin empty:hidden">
        {children}
      </div>
    </div>
  );
}
