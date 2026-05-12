"use client";

import { Plus } from "lucide-react";
import FadeIn from "./FadeIn";

/* TODO: trocar imagens placeholder por fotos reais das obras AEX */
const OBRAS = [
  {
    title: "Centro Logístico Serra Norte",
    type: "Galpão Logístico",
    area: "32.500 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Galp%C3%A3o+Log%C3%ADstico",
  },
  {
    title: "Planta Industrial Vitória",
    type: "Indústria",
    area: "18.200 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Planta+Industrial",
  },
  {
    title: "Centro de Distribuição ES",
    type: "Galpão Logístico",
    area: "44.000 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Centro+Distribui%C3%A7%C3%A3o",
  },
  {
    title: "Complexo Comercial Cariacica",
    type: "Obra Comercial",
    area: "9.800 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Obra+Comercial",
  },
  {
    title: "Indústria Metalúrgica Viana",
    type: "Indústria",
    area: "21.700 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Ind%C3%BAstria+Metal%C3%BArgica",
  },
  {
    title: "Hub Logístico Civit",
    type: "Galpão Logístico",
    area: "27.300 m²",
    img: "https://placehold.co/800x600/0A0A0A/00D26A?text=Hub+Log%C3%ADstico",
  },
];

export default function Obras() {
  return (
    <section id="obras" className="relative w-full bg-ink py-24 md:py-32">
      <div className="container-aex">
        <FadeIn className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfólio</span>
            <h2 className="section-heading mt-4 text-bone">
              Obras <span className="text-accent">entregues</span>.
            </h2>
            <div className="mt-6 h-px w-16 bg-accent" />
          </div>
          <p className="max-w-md text-sm text-steel-200">
            +450.000 m² em +15 obras concluídas. Do Espírito Santo para o
            Brasil — uma seleção dos projetos.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OBRAS.map((obra, i) => (
            <FadeIn key={obra.title} delay={(i % 3) * 0.1}>
              <article className="group relative overflow-hidden border border-white/10 bg-steel-900/60 transition-all duration-300 hover:border-accent">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                  {/* TODO: trocar imagens placeholder por fotos reais */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={obra.img}
                    alt={obra.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-80"
                  />
                  <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-sm bg-ink/70 text-bone backdrop-blur-sm ring-1 ring-white/10 transition-all duration-300 group-hover:bg-accent group-hover:text-ink group-hover:ring-accent">
                    <Plus size={16} className="transition-transform duration-300 group-hover:rotate-90" />
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                      {obra.type}
                    </span>
                    <span className="text-xs text-steel-300">{obra.area}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold tracking-tight text-bone transition-colors group-hover:text-accent">
                    {obra.title}
                  </h3>
                </div>

                {/* Bottom swoosh on hover */}
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
