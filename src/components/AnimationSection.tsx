"use client";

/* TODO FASE 2: animação scroll planta → terreno → galpão
 *
 * Comportamento planejado:
 *  - Sticky canvas dentro deste container h-[200vh]
 *  - 3 keyframes ligados a useScroll() / useTransform():
 *      0%   → planta técnica (linhas vetoriais finas)
 *      50%  → terreno (perspectiva, marcação topográfica)
 *      100% → galpão estrutural (estrutura metálica + telhado)
 *  - Transições com morph SVG ou crossfade entre camadas
 *  - Manter performance: GPU-only (transform/opacity), nada de layout shift
 *
 * Por enquanto, exibimos 3 cards horizontais como placeholder funcional.
 */

import { ArrowRight, ClipboardList, MapPinned, Factory } from "lucide-react";
import FadeIn from "./FadeIn";

const STAGES = [
  {
    icon: ClipboardList,
    label: "Planta",
    title: "Projeto técnico",
    description:
      "Levantamento, modelagem e validação de cada detalhe construtivo antes de qualquer movimentação.",
  },
  {
    icon: MapPinned,
    label: "Terreno",
    title: "Preparação do solo",
    description:
      "Topografia, terraplenagem e fundações dimensionadas para a complexidade da carga prevista.",
  },
  {
    icon: Factory,
    label: "Galpão",
    title: "Execução completa",
    description:
      "Estrutura, fechamentos, infraestrutura e entrega operacional dentro do prazo contratado.",
  },
];

export default function AnimationSection() {
  return (
    <section
      id="processo"
      className="relative h-[200vh] w-full bg-ink"
      aria-label="Processo construtivo: planta, terreno e galpão"
    >
      {/* Sticky stage — onde a animação da fase 2 vai morar */}
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-architectural bg-grid opacity-30"
        />

        <div className="container-aex relative z-10 py-20">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Da planta à entrega</span>
            <h2 className="section-heading mt-4">
              O processo que sustenta cada metro quadrado.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-steel-200">
              Um fluxo único, controlado fim a fim — projeto, terreno e
              estrutura sob a mesma engenharia.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {STAGES.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <FadeIn key={stage.label} delay={i * 0.12} className="contents">
                  <div className="group relative flex h-full flex-col justify-between border border-white/10 bg-steel-900/60 p-8 transition-colors hover:border-accent/60">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent/10 text-accent ring-1 ring-accent/30 transition-colors group-hover:bg-accent group-hover:text-ink">
                          <Icon size={22} />
                        </span>
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-steel-300">
                          {String(i + 1).padStart(2, "0")} · {stage.label}
                        </span>
                      </div>
                      <h3 className="mt-8 text-2xl font-bold tracking-tight text-bone">
                        {stage.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-steel-200">
                        {stage.description}
                      </p>
                    </div>

                    {/* Swoosh accent on hover */}
                    <span
                      aria-hidden
                      className="absolute right-4 top-4 h-[3px] w-3 rotate-45 rounded-sm bg-accent opacity-0 transition-all duration-300 group-hover:w-7 group-hover:opacity-100"
                    />
                  </div>

                  {i < STAGES.length - 1 && (
                    <div
                      aria-hidden
                      className="hidden items-center justify-center text-accent md:flex"
                    >
                      <ArrowRight size={20} />
                    </div>
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
