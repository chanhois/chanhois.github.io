import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/600.css";
import { social } from "./_portfolio/social";
import "./globals.css";

export const metadata: Metadata = {
  title: social.title,
  description: social.description,
  openGraph: {
    title: social.title,
    description: social.description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: social.title,
    description: social.description,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
