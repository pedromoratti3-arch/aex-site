"use client";

import { ArrowUpRight, Warehouse, Factory, Building2 } from "lucide-react";
import FadeIn from "./FadeIn";

const SERVICES = [
  {
    icon: Warehouse,
    title: "Galpões Logísticos",
    description:
      "Estruturas de grande porte para operações de armazenagem e distribuição. Engenharia dimensionada para fluxo, carga e expansão.",
    bullets: ["Estrutura metálica", "Pisos de alta resistência", "Docas e pátio"],
  },
  {
    icon: Factory,
    title: "Indústrias",
    description:
      "Plantas industriais executadas com rigor técnico — da fundação às utilidades. Coordenação total entre disciplinas.",
    bullets: ["Layout fabril", "Infraestrutura crítica", "Compliance técnico"],
  },
  {
    icon: Building2,
    title: "Obras Comerciais",
    description:
      "Empreendimentos comerciais de alto padrão, com gestão integrada de prazo, custo e qualidade do começo ao habite-se.",
    bullets: ["Retrofit e expansão", "Acabamentos premium", "Gestão completa"],
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative w-full border-t border-white/5 bg-steel-900/40 py-20"
    >
      <div className="container-aex">
        <FadeIn className="max-w-3xl">
          <span className="eyebrow">Serviços</span>
          <h2 className="section-heading mt-4 text-bone">
            Soluções integradas para obras de{" "}
            <span className="text-accent">alta complexidade</span>.
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 0.1}>
                <article className="group relative flex h-full flex-col border border-white/10 bg-ink p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700">
                  {/* Top swoosh accent */}
                  <span
                    aria-hidden
                    className="absolute right-6 top-6 h-[3px] w-4 rotate-45 rounded-sm bg-accent transition-all duration-300 group-hover:w-8"
                  />

                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-accent/10 text-accent ring-1 ring-accent/30 transition-all duration-300 group-hover:bg-accent group-hover:text-ink group-hover:ring-accent">
                    <Icon size={26} strokeWidth={1.6} />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-bone">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-200">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-white/5 pt-6">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-xs text-steel-300"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-bone transition-colors group-hover:text-accent"
                  >
                    Saber mais
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
