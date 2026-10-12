"use client";

type Props = {
  time: Date;
  format?: Intl.DateTimeFormatOptions;
};

export default function Time({
  time,
  format = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
}: Props) {
  return (
    <time dateTime={time.toISOString()} suppressHydrationWarning>
      {time.toLocaleDateString(undefined, format)}
    </time>
  );
}
