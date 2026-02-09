"use client";
import { getLocationInfo, getMapping } from "@/lib/pathnameMapper";
import { usePathname } from "fumadocs-core/framework";
import SiMoN from "./images/SiMoN.svg";
import Image from "next/image";
import { getSidebarTabs } from "fumadocs-ui/components/sidebar/tabs/index";
import { source } from "@/lib/source";
import IconedCard from "../iconedCard";
import { DocsPage } from "fumadocs-ui/layouts/docs/page";
import { Cards } from "fumadocs-ui/components/card";

export default function NotFound() {
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
    <DocsPage full={true}>
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
          <Cards>
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
            })}
          </Cards>
        </div>
      </div>
    </DocsPage>
  );
}
