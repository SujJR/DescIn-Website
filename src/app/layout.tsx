import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://descin.vercel.app"),
  title: "DeScIn - Design Society India",
  description:
    "DeScIn official website featuring membership, events, resources, chapters, and design research initiatives.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "DeScIn - Design Society India",
    description:
      "DeScIn official website featuring membership, events, resources, chapters, and design research initiatives.",
    siteName: "DeScIn",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 512,
        height: 512,
        alt: "DeScIn - Design Society India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeScIn - Design Sciences Foundation India",
    description:
      "DeScIn official website featuring membership, events, resources, chapters, and design research initiatives.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
