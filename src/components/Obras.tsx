"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import FadeIn from "./FadeIn";

type Obra = {
  title: string;
  type: string;
  area: string;
  img: string;
};

/* TODO: trocar imagens placeholder por fotos reais das obras AEX */
const PLACEHOLDER_GALPAO =
  "https://placehold.co/800x600/0A0A0A/00D26A?text=Galp%C3%A3o+Log%C3%ADstico";

const OBRAS: Obra[] = [
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
  // Placeholders para testes visuais até as fotos reais chegarem
  { title: "Galpão Logístico Linhares", type: "Galpão Logístico", area: "38.500 m²", img: PLACEHOLDER_GALPAO },
  { title: "Centro de Operações Aracruz", type: "Galpão Logístico", area: "22.400 m²", img: PLACEHOLDER_GALPAO },
  { title: "Plataforma Logística Sul ES", type: "Galpão Logístico", area: "51.200 m²", img: PLACEHOLDER_GALPAO },
  { title: "Galpão Cross-Docking Vila Velha", type: "Galpão Logístico", area: "14.600 m²", img: PLACEHOLDER_GALPAO },
  { title: "Polo Industrial Guarapari", type: "Galpão Logístico", area: "19.800 m²", img: PLACEHOLDER_GALPAO },
  { title: "Hub Multimodal Norte", type: "Galpão Logístico", area: "36.700 m²", img: PLACEHOLDER_GALPAO },
  { title: "Galpão Frigorífico São Mateus", type: "Galpão Logístico", area: "28.900 m²", img: PLACEHOLDER_GALPAO },
  { title: "Centro de Distribuição Cachoeiro", type: "Galpão Logístico", area: "17.200 m²", img: PLACEHOLDER_GALPAO },
  { title: "Plataforma Logística Colatina", type: "Galpão Logístico", area: "24.500 m²", img: PLACEHOLDER_GALPAO },
];

const DESKTOP_PAGE_SIZE = 6;
const MOBILE_PAGE_SIZE = 4;

export default function Obras() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(DESKTOP_PAGE_SIZE);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () =>
      setPageSize(mq.matches ? MOBILE_PAGE_SIZE : DESKTOP_PAGE_SIZE);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const totalPages = Math.max(1, Math.ceil(OBRAS.length / pageSize));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const start = (currentPage - 1) * pageSize;
  const currentObras = OBRAS.slice(start, start + pageSize);

  function goToPage(page: number) {
    if (page === currentPage || page < 1 || page > totalPages) return;
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const showPagination = OBRAS.length > pageSize;

  return (
    <section
      ref={sectionRef}
      id="obras"
      className="relative w-full scroll-mt-20 bg-ink py-20 md:scroll-mt-24"
    >
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

        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentObras.map((obra) => (
              <article
                key={obra.title}
                className="group relative overflow-hidden border border-white/10 bg-steel-900/60 transition-all duration-300 hover:border-accent"
              >
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
                    <Plus
                      size={16}
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
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

                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"
                />
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {showPagination && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={goToPage}
          />
        )}
      </div>
    </section>
  );
}

function Pagination({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  return (
    <nav
      aria-label="Paginação do portfólio"
      className="mt-12 flex justify-center"
    >
      <ul className="flex items-center gap-8 sm:gap-10">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isActive = page === currentPage;
          return (
            <li key={page}>
              <button
                type="button"
                onClick={() => onChange(page)}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Ir para a página ${page}`}
                className={`relative pb-1 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive ? "text-bone" : "text-steel-300 hover:text-bone"
                }`}
              >
                {page}
                {isActive && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
