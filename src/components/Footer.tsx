"use client";

import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5527999559800?text=Olá%20AEX!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const COLUMNS = [
  {
    title: "Navegação",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Obras", href: "#obras" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Galpões Logísticos", href: "#servicos" },
      { label: "Indústrias", href: "#servicos" },
      { label: "Obras Comerciais", href: "#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Serra, ES — Brasil", href: "#contato" },
      { label: "WhatsApp", href: WHATSAPP_URL },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink">
      <div className="container-aex grid grid-cols-1 gap-12 py-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <a
            href="#top"
            aria-label="AEX | Inteligência Construtiva"
            className="inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/logo.png"
              alt="AEX | Inteligência Construtiva"
              width={96}
              height={96}
              quality={100}
              className="h-12 w-auto"
            />
            <span className="border-l border-white/15 pl-3 text-[10px] font-medium uppercase tracking-[0.25em] text-steel-300">
              Inteligência Construtiva
            </span>
          </a>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-steel-300">
            Engenharia, gestão de obras de alta complexidade e soluções
            integradas em construção civil. Galpões logísticos, indústrias e
            obras comerciais.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-steel-300">
            <span className="h-px w-8 bg-accent" />
            Serra · Espírito Santo
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-steel-200 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-aex flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/aex-i-inteligência-construtiva/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da AEX"
              className="text-bone transition-colors hover:text-accent"
            >
              <Linkedin size={20} strokeWidth={1.6} />
            </a>
            <a
              href="https://www.instagram.com/aex.engenharia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da AEX"
              className="text-bone transition-colors hover:text-accent"
            >
              <Instagram size={20} strokeWidth={1.6} />
            </a>
          </div>
          <p className="text-xs text-steel-300">Serra, ES — Brasil</p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-aex flex flex-col items-start justify-between gap-2 py-6 text-xs text-steel-400 md:flex-row md:items-center">
          <p>© 2025 AEX | Inteligência Construtiva. Todos os direitos reservados.</p>
          <p className="text-xs text-white/40">CNPJ: 40.581.277/0001-70</p>
        </div>
      </div>
    </footer>
  );
}
