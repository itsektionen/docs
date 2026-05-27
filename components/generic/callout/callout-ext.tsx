import {
  CalloutContainer,
  CalloutDescription,
  CalloutTitle,
  type CalloutContainerProps,
  type CalloutType,
} from "fumadocs-ui/components/callout";
import { ReactNode } from "react";
import {
  CircleCheck,
  CircleX,
  Hourglass,
  Info,
  Lightbulb,
  Siren,
  TriangleAlert,
  Skull,
} from "lucide-react";

type CalloutConfig = {
  title: string;
  icon: ReactNode;
  color: string;
};
type CalloutMap<T extends string = string> = Record<T, CalloutConfig>;

const colorVar = (key: string) => `var(--color-${key}, var(--color-fd-muted))`;
// we use stroked callout icons, while normal fumadocs uses filled icons
const iconClass = "size-5 -me-0.5 stroke-(--callout-color) text-fd-card";

// All the callout types available in the standard fumadocs component
const calloutTypesFumadocs: CalloutMap<CalloutType> = {
  info: {
    title: "Info",
    icon: <Info className={iconClass}></Info>,
    color: colorVar("fd-info"),
  },
  warn: {
    title: "Warning",
    icon: <TriangleAlert className={iconClass}></TriangleAlert>,
    color: colorVar("fd-warning"),
  },
  warning: {
    title: "Warning",
    icon: <TriangleAlert className={iconClass}></TriangleAlert>,
    color: colorVar("fd-warning"),
  },
  error: {
    title: "Error",
    icon: <CircleX className={iconClass}></CircleX>,
    color: colorVar("fd-error"),
  },
  success: {
    title: "Success",
    icon: <CircleCheck className={iconClass}></CircleCheck>,
    color: colorVar("fd-success"),
  },
  idea: {
    title: "Idea",
    icon: <Lightbulb className={iconClass} />,
    color: colorVar("fd-idea"),
  },
};

const calloutTypesCustom: CalloutMap = {
  tip: {
    title: "Tip",
    icon: <Lightbulb className={iconClass} />,
    color: colorVar("fd-idea"),
  },
  deprecated: {
    title: "Deprecated",
    icon: <Hourglass className={iconClass}></Hourglass>,
    color: "#bba66d",
  },

  danger: {
    title: "Danger",
    icon: <Skull className={iconClass}></Skull>,
    color: "#eb1d1d",
  },
  important: {
    title: "Important",
    icon: <Siren className={iconClass}></Siren>,
    color: "#8e51ca",
  }
};

const calloutTypes: CalloutMap = {
  ...calloutTypesFumadocs,
  ...calloutTypesCustom,
};
export type CalloutExtType = keyof typeof calloutTypes;

export default function CalloutExt({
  children,
  title,
  type: inputType = "info",
  icon,
  ...props
}: Omit<CalloutContainerProps, "title"> & {
  type?: CalloutExtType;
  title?: ReactNode;
}) {
  const calloutType = calloutTypes[inputType];
  if (!calloutType) throw new Error(`Invalid callout type: ${inputType}`);
  return (
    <CalloutContainer
      icon={icon ?? calloutType.icon}
      // prettier-ignore
      style={{
        "--callout-color": calloutType.color,
      } as React.CSSProperties}
      {...props}
    >
      <CalloutTitle>{title ?? calloutType.title}</CalloutTitle>
      <CalloutDescription>{children}</CalloutDescription>
    </CalloutContainer>
  );
}
