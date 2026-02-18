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
      <Image
        src={customIcons[icon as keyof typeof customIcons].src}
        alt=""
        width={24}
        height={24}
      />
    );
  }

  if (icon in icons) return createElement(icons[icon as keyof typeof icons]);

  return;
};
