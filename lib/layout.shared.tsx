import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import TitleComponent from "./title-component";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <TitleComponent />,
    },
  };
}
