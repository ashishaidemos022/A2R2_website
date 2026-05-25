import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A2R2 Labs | Agentic AI Architecture",
  description:
    "A2R2 Labs partners with enterprises to design and deploy agentic AI workflows for regulated, mission-critical environments.",
  metadataBase: new URL("https://a2r2labs.com"),
  openGraph: {
    title: "A2R2 Labs | Agentic AI Architecture",
    description:
      "Agentic AI architecture and deployment for enterprises operating in regulated, mission-critical environments.",
    url: "https://a2r2labs.com",
    siteName: "A2R2 Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A2R2 Labs | Agentic AI Architecture",
    description:
      "Agentic AI architecture and deployment for regulated enterprise environments.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
