import { icons } from "lucide-react";
import { createElement, ReactNode } from "react";
import LMixer from "content/icons/lmixer.svg";
import Image from "next/image";

const customIcons = {
  LMixer: LMixer,
};

export const iconResolver = function (icon: string | undefined): ReactNode {
  if (!icon) {
    return;
  }

  if (icon in customIcons) {
    return (
      <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="100%" height="100%">
          <Image
            src={customIcons[icon as keyof typeof customIcons].src}
            alt=""
            width={24}
            height={24}
            style={{ width: "100%", height: "100%" }}
          />
        </foreignObject>
      </svg>
    );
  }

  if (icon in icons) return createElement(icons[icon as keyof typeof icons]);

  return;
};
