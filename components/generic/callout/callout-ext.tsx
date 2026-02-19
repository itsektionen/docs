import { Callout, CalloutDescription } from "fumadocs-ui/components/callout";
import {
  BookText,
  CircleCheck,
  CircleX,
  Hourglass,
  Info,
  Lightbulb,
  Milestone,
  Siren,
  Skull,
  TriangleAlert,
} from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./generic.callout.calloutExt.module.css";

/*

Modified version of Fumadocs' <Callout/> Component

*/

const iconClassFill = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
const iconClassStroke = "size-5 -me-0.5 stroke-(--callout-color) text-fd-card";

export type CalloutExtType =
  | "info"
  | "warn"
  | "error"
  | "success"
  | "idea"
  | "note"
  | "tip"
  | "danger"
  | "important"
  | "details"
  | "deprecated"
  | "caution";

const calloutTypes: {
  [key in CalloutExtType]: {
    header: string;
    icon: ReactNode;
    className: string;
  };
} = {
  info: {
    header: "Info",
    icon: <Info className={iconClassStroke}></Info>,
    className: "calloutext-info",
  },
  warn: {
    header: "Warning",
    icon: <TriangleAlert className={iconClassFill}></TriangleAlert>,
    className: "calloutext-warn",
  },
  error: {
    header: "Error",
    icon: <CircleX className={iconClassFill}></CircleX>,
    className: "calloutext-error",
  },
  success: {
    header: "Success",
    icon: <CircleCheck className={iconClassFill}></CircleCheck>,
    className: "calloutext-success",
  },
  idea: {
    header: "Idea",
    icon: <Lightbulb className={iconClassStroke}></Lightbulb>,
    className: "calloutext-idea",
  },
  note: {
    header: "Note",
    icon: <Info className={iconClassStroke}></Info>,
    className: "calloutext-note",
  },
  caution: {
    header: "Caution",
    icon: <TriangleAlert className={iconClassStroke}></TriangleAlert>,
    className: "calloutext-warn",
  },
  tip: {
    header: "Tip",
    icon: <Milestone className={iconClassStroke}></Milestone>,
    className: "calloutext-tip",
  },
  danger: {
    header: "Danger",
    icon: <Skull className={iconClassStroke}></Skull>,
    className: "calloutext-danger",
  },
  important: {
    header: "Important",
    icon: <Siren className={iconClassStroke}></Siren>,
    className: "calloutext-important",
  },
  details: {
    header: "Details",
    icon: <BookText className={iconClassStroke}></BookText>,
    className: "calloutext-details",
  },
  deprecated: {
    header: "Deprecated",
    icon: <Hourglass className={iconClassStroke}></Hourglass>,
    className: "calloutext-deprecated",
  },
};

export default function CalloutExt({
  children,
  type,
  title,
  ...props
}: {
  children: ReactNode;
  title?: string;
  type: CalloutExtType;
}) {
  const calloutType = calloutTypes[type];

  if (calloutType == undefined) {
    throw new Error("Invalid Callout Type: " + type);
  }
  return (
    <div
      className={cn(
        "flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md",
        styles["calloutext-base-style"],
        styles[calloutType.className]
      )}
      {...props}
    >
      <div role="none" className="w-0.5 bg-(--callout-color)/50 rounded-sm" />
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        {calloutType.header && (
          <div className="flex gap-2">
            {calloutType.icon}
            <p className="font-medium my-0!">{title ?? calloutType.header}</p>
          </div>
        )}
        <CalloutDescription>{children}</CalloutDescription>
      </div>
    </div>
  );
}
