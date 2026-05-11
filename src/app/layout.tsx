import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AEX | Inteligência Construtiva",
  description:
    "Engenharia, gestão de obras de alta complexidade e soluções integradas em construção civil. Galpões logísticos, indústrias e obras comerciais no Espírito Santo.",
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
    description:
      "Engenharia de alta performance no Espírito Santo. +450.000 m² produzidos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-ink font-sans text-bone antialiased">{children}</body>
    </html>
  );
}
