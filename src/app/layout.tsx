import "./global.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Provider } from "@/components/provider";
import { appName, siteUrl } from "@/lib/shared";

const inter = Inter({
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metaConstants = {
  title: appName,
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
    <html
      lang="en"
      className={`${inter.className} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
