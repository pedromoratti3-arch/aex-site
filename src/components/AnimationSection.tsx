"use client";

/* TODO FUTURO: substituir esta seção por animação scroll storytelling
 * planta → terreno → galpão construído. Requer assets visuais reais e
 * implementação dedicada com Framer Motion ou GSAP ScrollTrigger.
 */

import { ClipboardList, MapPinned, Factory } from "lucide-react";
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
      className="relative w-full overflow-hidden bg-ink py-24 md:py-32"
      aria-label="Processo construtivo: planta, terreno e galpão"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-architectural bg-grid opacity-30"
      />

      <div className="container-aex relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Da planta à entrega</span>
          <h2 className="section-heading mt-4">
            O processo que sustenta cada metro quadrado.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-steel-200">
            Um fluxo único, controlado fim a fim — projeto, terreno e estrutura
            sob a mesma engenharia.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STAGES.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <FadeIn key={stage.label} delay={i * 0.12}>
                <article className="group relative flex h-full flex-col justify-between border border-white/10 bg-steel-900/60 p-8 transition-colors hover:border-accent/60">
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

                  <span
                    aria-hidden
                    className="absolute right-4 top-4 h-[3px] w-3 rotate-45 rounded-sm bg-accent opacity-0 transition-all duration-300 group-hover:w-7 group-hover:opacity-100"
                  />
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
