"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Obras", href: "#obras" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function Logo() {
  return (
    <a
      href="#top"
      className="group flex items-center gap-4 transition-opacity duration-200 hover:opacity-80"
      aria-label="AEX | Inteligência Construtiva"
    >
      <Image
        src="/logo.png"
        alt="AEX | Inteligência Construtiva"
        width={128}
        height={128}
        quality={100}
        priority
        className="h-12 w-auto md:h-16"
      />
      <span
        aria-hidden
        className="hidden h-5 w-px bg-neutral-700 opacity-50 sm:block"
      />
      <span
        className="hidden font-light uppercase leading-none text-neutral-500 sm:inline"
        style={{
          fontWeight: 300,
          fontSize: "12px",
          letterSpacing: "0.25em",
          lineHeight: 1,
        }}
      >
        Inteligência Construtiva
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/95"
          : "border-b border-white/5 bg-ink/90"
      }`}
    >
      <div className="container-aex flex h-20 items-center justify-between md:h-24">
        <Logo />

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium tracking-wide text-steel-200 transition-colors hover:text-bone"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex btn-primary !py-2.5 !px-5 !text-xs"
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-bone md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-ink/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-aex flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm text-steel-200 transition-colors hover:bg-white/5 hover:text-bone"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
