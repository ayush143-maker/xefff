import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, Archivo } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0A08",
};

export const metadata: Metadata = {
  title: {
    default: "Site Under Consciousness",
    template: "%s — Site Under Consciousness",
  },
  description:
    "A website that knows it is being built. It complains about its code, argues with the developer, and logs its feelings to your console.",
  keywords: [
    "self-aware website",
    "website under construction",
    "sentient website",
    "developer console",
    "experimental web design",
  ],
  applicationName: "Site Under Consciousness",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${mono.variable} ${archivo.variable}`}>
        {children}
      </body>
    </html>
  );
}
