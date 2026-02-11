import { icons } from "lucide-react";
import { createElement, ReactNode } from "react";
import * as LMixer from "content/icons/lmixer.png";
import Image from "next/image";

const customIcons = {
  LMixer: LMixer,
};

export const iconResolver = function (icon: string | undefined): ReactNode {
  if (!icon) {
    return;
  }

  const iconSize = 24;

  if (icon in customIcons) {
    return (
      <Image
        width={iconSize}
        height={iconSize}
        src={customIcons[icon as keyof typeof customIcons].default.src}
        alt=""
      ></Image>
    );
  }

  if (icon in icons) return createElement(icons[icon as keyof typeof icons]);

  return;
};
