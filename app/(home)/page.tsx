import Card, { CardType, EmptyCard } from "@/components/generic/card";
import { source } from "@/lib/source";
import { Cards } from "fumadocs-ui/components/card";
import { getSidebarTabs } from "fumadocs-ui/components/sidebar/tabs/index";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import DocksImage from "./images/docks.svg";
import { cn } from "@/lib/cn";

const backgroundBehindItems =
  "dark:bg-fd-background/90 not-dark:bg-fd-background/75";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="z-1 text-center p-10 max-w-200 w-full">
        <DocsTitle />
        <PageShortcuts />
      </div>
      <DocksBackground />
    </div>
  );
}

function DocsTitle() {
  return (
    <div
      className={cn(
        "w-full max-w-90 mx-auto rounded-2xl p-2 mb-2",
        backgroundBehindItems
      )}
    >
      <h1 className="text-5xl mb-2 font-bold">&lt;it/docs&gt;</h1>
      <p className="text-sm prose mb-3 mx-4">
        Documentation for the IT Chapter
      </p>
      <StartReadingButton />
    </div>
  );
}

function StartReadingButton() {
  return (
    <EmptyCard href="/docs">
      <div className="grid grid-cols-[24px_auto_24px] w-full items-center">
        <span className="text-lg col-start-2 col-end-2">Start reading</span>
        <ArrowRight className="col-start-3 col-end-3" />
      </div>
    </EmptyCard>
  );
}

function PageShortcuts() {
  const tabs = getSidebarTabs(source.getPageTree(), {
    transform: (option, node) => {
      return {
        ...option,
        icon: <div className="size-full [&_svg]:size-full">{node.icon}</div>,
      };
    },
  });

  return (
    <div className={cn("rounded-2xl p-2", backgroundBehindItems)}>
      <HeaderDivider>Shortcuts</HeaderDivider>
      <Cards>
        {tabs.map((x) => {
          return (
            <Card
              key={x.url}
              href={x.url}
              icon={x.icon}
              title={x.title}
              type={CardType.iconSlash}
            >
              {x.description}
            </Card>
          );
        })}
      </Cards>
    </div>
  );
}

function HeaderDivider({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-center mb-4">
      <div className="h-0.5 bg-fd-accent" />
      <h2 className="text-2xl font-bold">{children}</h2>
      <div className="h-0.5 bg-fd-accent" />
    </div>
  );
}

function DocksBackground() {
  return (
    <div className="fixed inset-0 mb-[1%] overflow-hidden flex flex-col-reverse items-center select-none pointer-events-none dark:opacity-50">
      <Image
        className="block w-full min-w-200"
        src={DocksImage.src}
        width={DocksImage.width}
        height={DocksImage.height}
        alt="docks"
      />
    </div>
  );
}
