import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jean Carlo de Oliveira | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in full-stack development, VoIP integrations, and WhatsApp automation. Experienced in Node.js, React, .NET, PHP, and Laravel.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "VoIP Integration",
    "WhatsApp Automation",
    "React",
    "Node.js",
    ".NET",
    "PHP",
    "Laravel",
  ],
  authors: [{ name: "Jean Carlo de Oliveira" }],
  creator: "Jean Carlo de Oliveira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeazy.vercel.app",
    title: "Jean Carlo de Oliveira | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack development, VoIP integrations, and WhatsApp automation.",
    siteName: "Jean Carlo de Oliveira Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jean Carlo de Oliveira - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jean Carlo de Oliveira | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack development, VoIP integrations, and WhatsApp automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
