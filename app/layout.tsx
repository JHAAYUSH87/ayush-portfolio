
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Jha | Python, Backend & Applied AI",
  description:
    "Explore Ayush Jha's projects in Python development, backend engineering, APIs, and AI-powered applications.",
  applicationName: "Ayush Jha Portfolio",
  openGraph: {
    title: "Ayush Jha — Developer Portfolio",
    description:
      "Building useful things with Python, backend systems, and applied AI.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
