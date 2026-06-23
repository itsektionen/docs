"use client";
import { usePathname } from "fumadocs-core/framework";
import SiMoN from "./images/SiMoN.svg";
import Image from "next/image";
import { getSidebarTabs } from "fumadocs-ui/components/sidebar/tabs/index";
import { source } from "@/lib/source";
import Card, { CardType } from "../card";
import { DocsPage } from "fumadocs-ui/layouts/docs/page";
import { Cards } from "fumadocs-ui/components/card";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";

export default function NotFound() {
  const pathname = usePathname();

  const tabs = getSidebarTabs(source.getPageTree(), {
    transform: (option, node) => {
      return {
        ...option,
        icon: <div className="size-full [&_svg]:size-full">{node.icon}</div>,
      };
    },
  });

  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
      <DocsPage>
        <div className="p-5 prose">
          <h1
            className="mx-auto w-fit my-0!"
            style={{
              fontSize: "5rem",
            }}
          >
            404
          </h1>
          <p className="mx-auto w-fit">Not found</p>
          <div className="w-50 mx-auto">
            {pathname.startsWith("/docs/locale") && (
              <Image src={SiMoN} alt="SiMoN" />
            )}
          </div>
          <hr />
          <div>
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
        </div>
      </DocsPage>
    </DocsLayout>
  );
}
