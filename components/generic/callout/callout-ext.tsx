import {
  CalloutContainer,
  CalloutDescription,
  CalloutTitle,
  type CalloutContainerProps,
} from "fumadocs-ui/components/callout";
import { ReactNode } from "react";
import {
  BookIcon,
  HourglassIcon,
  InfoIcon,
  LightbulbIcon,
  SirenIcon,
  SkullIcon,
  TriangleAlertIcon,
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

const calloutTypes = {
  note: {
    title: "Note",
    icon: <InfoIcon className={iconClass} />,
    color: colorVar("fd-info"),
  },
  tip: {
    title: "Tip",
    icon: <LightbulbIcon className={iconClass} />,
    color: colorVar("fd-info"),
  },
  important: {
    title: "Important",
    icon: <SirenIcon className={iconClass} />,
    color: colorVar("fd-idea"),
  },
  warning: {
    title: "Warning",
    icon: <TriangleAlertIcon className={iconClass} />,
    color: colorVar("fd-warning"),
  },
  danger: {
    title: "Danger",
    icon: <SkullIcon className={iconClass} />,
    color: colorVar("fd-error"),
  },
  details: {
    title: "Details",
    icon: <BookIcon className={iconClass} />,
    color: colorVar("fd-muted-foreground"),
  },
  deprecated: {
    title: "Deprecated",
    icon: <HourglassIcon className={iconClass} />,
    color: "#bba66d",
  },
} as const satisfies CalloutMap;
export type CalloutExtType = keyof typeof calloutTypes;

export default function CalloutExt({
  children,
  title,
  type: inputType = "note",
  icon,
  ...props
}: Omit<CalloutContainerProps, "type" | "title"> & {
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
