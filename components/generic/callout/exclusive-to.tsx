import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./generic.callout.exclusiveTo.module.css";

/*

Heavily modified version of Fumadocs' <Callout/> Component

*/

export type ExclusiveToLocations =
  | "KistanGeneric"
  | "LMixer"
  | "LMixerAddonSuite"
  | "LMixerAddonSuiteExtensions"
  | "LMixerKistanExclusiveAddon";
enum Icons {
  Kistan,
  None,
}

enum ContentClasses {
  KistanExclusive = "kistan-exclusive",
}

const exclusivityTypes: {
  [key in ExclusiveToLocations]: {
    header: string;
    description: string;
    icon: Icons;
    contentClass: ContentClasses;
  };
} = {
  KistanGeneric: {
    header: "Kistan exclusive!",
    description: "This content only applies to Kistan",
    icon: Icons.Kistan,
    contentClass: ContentClasses.KistanExclusive,
  },
  LMixer: {
    header: "Kistan's LMixer exclusive",
    description:
      "This content only applies to kistan's instance of LMixer. It is likely the case that the code is contained in setup scripts.",
    icon: Icons.Kistan,
    contentClass: ContentClasses.KistanExclusive,
  },
  LMixerAddonSuite: {
    header: "LMixer Addon Suite exclusive",
    description: "This content only applies to the LMixer Addon Suite.",
    icon: Icons.Kistan,
    contentClass: ContentClasses.KistanExclusive,
  },
  LMixerAddonSuiteExtensions: {
    header: "LMixer Addon Suite Extensions exclusive",
    description:
      "This content only applies to the LMixer Addon Suite Extensions.",
    icon: Icons.Kistan,
    contentClass: ContentClasses.KistanExclusive,
  },
  LMixerKistanExclusiveAddon: {
    header: "LMixer Kistan Exclusive Addon",
    description:
      "This content only applies to the LMixer Kistan_Specific Addon.",
    icon: Icons.Kistan,
    contentClass: ContentClasses.KistanExclusive,
  },
};

export default function ExclusiveTo({
  children,
  exclusiveTo,
}: {
  children: ReactNode;
  exclusiveTo: ExclusiveToLocations;
}) {
  const exclusiveInfo = exclusivityTypes[exclusiveTo];
  return (
    <div
      className={cn(
        "my-4 rounded-xl border bg-fd-card p-1 text-fd-card-foreground shadow-md",
        styles[exclusiveInfo.contentClass]
      )}
    >
      <div className="border-(--callout-color)/50 border-2 border-soild rounded-md p-2 my-0">
        <div className="flex flex-col gap-2 min-w-0 flex-1">
          <div className="text-center p-1">
            <p className={cn("font-medium my-0!")}>{exclusiveInfo.header}</p>
            <p className={cn("font-small my-0! text-fd-muted-foreground")}>
              {exclusiveInfo.description}
            </p>
          </div>
          <div
            role="none"
            className="h-0.5 bg-(--callout-color)/50 rounded-sm"
          />
          <div className="p-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
