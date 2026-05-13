import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const DESCRIPTION =
  "Engenharia de alta performance em galpões logísticos e indústrias. Sede no Espírito Santo, em expansão nacional.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AEX | Inteligência Construtiva",
  description: DESCRIPTION,
  keywords: [
    "AEX",
    "construção civil",
    "galpões logísticos",
    "indústrias",
    "obras comerciais",
    "engenharia",
    "Espírito Santo",
    "Serra ES",
  ],
  authors: [{ name: "AEX | Inteligência Construtiva" }],
  openGraph: {
    title: "AEX | Inteligência Construtiva",
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    siteName: "AEX | Inteligência Construtiva",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "AEX | Inteligência Construtiva",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "AEX | Inteligência Construtiva",
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/hero-galpao.webp"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          as="image"
          href="/hero-galpao-mobile.webp"
          media="(max-width: 768px)"
        />
      </head>
      <body className="bg-ink font-sans text-bone antialiased">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
