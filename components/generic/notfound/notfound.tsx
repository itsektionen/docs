"use client";
import { getLocationInfo, getMapping } from "@/lib/pathnameMapper";
import { usePathname } from "fumadocs-core/framework";
import SiMoN from "./images/SiMoN.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { SidebarTabsDropdown } from "fumadocs-ui/components/sidebar/tabs/dropdown";
import { getSidebarTabs } from "fumadocs-ui/components/sidebar/tabs/index";
import { source } from "@/lib/source";
import { Card, Cards } from "fumadocs-ui/components/card";
import IconedCard from "../iconedCard";
import { Info } from "lucide-react";

export default function NotFound({ children }: { children?: ReactNode }) {
  const pathname = usePathname();
  const locationInfo = getLocationInfo(getMapping(pathname));

  let image = null;
  switch (locationInfo.notFoundImage?.imageName) {
    case "SiMoN":
      image = SiMoN;
      break;
    default:
      image = null;
      break;
  }
  const tabs = getSidebarTabs(source.getPageTree(), {
    transform: (option, node) => {
      return {
        ...option,
        icon: <div className="size-full [&_svg]:size-full">{node.icon}</div>,
      };
    },
  });

  return (
    <article
      className="flex flex-col w-full max-w-[900px] mx-auto [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14 xl:layout:[--fd-toc-width:268px]"
      id="nd-page"
    >
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
          {image && (
            <Image
              src={image}
              alt={locationInfo.notFoundImage?.imageAlt ?? ""}
            />
          )}
        </div>
        <hr />
        <div>
          <div className="grid grid-cols-2 gap-3 @container">
            {tabs.map((x) => {
              return (
                <IconedCard
                  key={x.url}
                  href={x.url}
                  icon={x.icon}
                  title={x.title}
                >
                  {x.description}
                </IconedCard>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </article>
  );
}
