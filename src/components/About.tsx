"use client";

import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

const PILLARS = [
  "Engenharia técnica de alta performance",
  "Gestão de obras de alta complexidade",
  "Soluções integradas em construção civil",
  "Planejamento estratégico e metodologias modernas",
];

export default function About() {
  return (
    <section id="sobre" className="relative w-full bg-ink py-20 md:py-24">
      <div className="container-aex grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="order-2 lg:order-1">
          <span className="eyebrow">Sobre a AEX</span>
          <h2 className="section-heading mt-4 text-bone">
            Inteligência aplicada a cada{" "}
            <span className="text-accent">decisão construtiva</span>.
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-8 text-base leading-relaxed text-steel-200 md:text-lg">
            A AEX é uma empresa de engenharia sediada na Serra, no Espírito
            Santo, com forte atuação em toda a região metropolitana de Vitória.
            Somos especialistas em obras de alta complexidade — galpões
            logísticos, indústrias e empreendimentos comerciais — e expandimos
            progressivamente nossas operações para outros estados brasileiros,
            levando nossa metodologia técnica para além do ES.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel-200 md:text-lg">
            Nossa abordagem combina planejamento estratégico, metodologias
            modernas de gestão e um corpo técnico que conhece, na prática, o que
            é viabilizar uma obra industrial dentro do prazo e do orçamento.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-steel-100"
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 flex-none text-accent"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15} className="order-1 lg:order-2">
          <div className="relative">
            {/* Decorative frame echoing the swoosh */}
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-20 w-20 border-r-2 border-t-2 border-accent"
            />
            <div
              aria-hidden
              className="absolute -bottom-3 -left-3 h-20 w-20 border-b-2 border-l-2 border-accent"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/600x800/0A0A0A/FFFFFF?text=AEX+%7C+Obra+industrial"
              alt="Obra industrial AEX em execução"
              className="relative h-auto w-full grayscale-[20%] saturate-[1.05]"
              loading="lazy"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
