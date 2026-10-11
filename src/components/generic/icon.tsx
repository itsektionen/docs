import { iconResolver } from "@/lib/custom-icons";

export default function Icon({ icon }: { icon: string }) {
  const resolvedIcon = iconResolver(icon);
  if (resolvedIcon === undefined) {
    throw new Error("Cannot find icon: " + icon);
  }

  return <span className="not-prose">{resolvedIcon}</span>;
}
