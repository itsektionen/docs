import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import { siteUrl } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
});

export const metaConstants = {
  title: "it/docs",
  description: "Documentation relating to the IT Chapter",
};
export const metadata: Metadata = {
  applicationName: metaConstants.title,
  metadataBase: siteUrl,
  title: {
    default: metaConstants.title,
    template: `%s - ${metaConstants.title}`,
  },
  description: metaConstants.description,
  alternates: {
    canonical: "/",
  },
  creator: "IT Chapter Members",
  openGraph: {
    type: "website",
    siteName: metaConstants.title,
    title: metaConstants.title,
    description: metaConstants.description,
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
