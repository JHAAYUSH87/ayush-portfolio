
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Jha — Python, Backend & AI Developer",
  description:
    "Explore Ayush Jha's developer portfolio featuring Python projects, backend engineering, AI applications, and software development.",
  openGraph: {
    title: "Ayush Jha — Developer Portfolio",
    description:
      "Building useful things with Python, backend engineering, and applied AI.",
    type: "website",
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
