import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import TitleComponent from "./TitleComponent";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <TitleComponent></TitleComponent>,
    },
  };
}
