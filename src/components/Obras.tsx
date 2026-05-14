"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";

type Obra = {
  id: string;
  title: string;
  type: string;
  area: string;
  img: string;
};

const OBRAS: Obra[] = [
  { id: "aurora", title: "Aurora", type: "Galpão Logístico", area: "44.000 m²", img: "/obras/aurora-v2.webp" },
  { id: "zucchi", title: "Zucchi", type: "Galpão Logístico", area: "32.500 m²", img: "/obras/zucchi-v3.webp" },
  { id: "medlevsohn", title: "MedLevensohn", type: "Indústria", area: "22.800 m²", img: "/obras/medlevsohn.webp" },
  { id: "jativi", title: "Jativi", type: "Galpão Logístico", area: "38.600 m²", img: "/obras/jativi.webp" },
  { id: "top-max", title: "Top Max", type: "Obra Comercial", area: "14.700 m²", img: "/obras/top-max.webp" },
  { id: "rdg-campo-log", title: "RDG · Campo Log", type: "Galpão Logístico", area: "51.300 m²", img: "/obras/rdg-campo-log.webp" },
  { id: "camplo-log-3", title: "Camplo Log 3", type: "Galpão Logístico", area: "52.000 m²", img: "/obras/camplo-log-3-v2.webp" },
  { id: "guindaste-centro-oeste", title: "Guindaste Centro Oeste", type: "Galpão Logístico", area: "27.900 m²", img: "/obras/guindaste-centro-oeste.webp" },
  { id: "aurora-log-3", title: "Aurora Log 3", type: "Galpão Logístico", area: "24.300 m²", img: "/obras/aurora-log-3.webp" },
  { id: "terlac", title: "Terlac", type: "Galpão Logístico", area: "18.500 m²", img: "/obras/terlac.webp" },
  { id: "viana-log", title: "Viana Log", type: "Galpão Logístico", area: "19.800 m²", img: "/obras/viana-log.webp" },
  { id: "fibrasa", title: "Fibrasa", type: "Indústria", area: "41.600 m²", img: "/obras/fibrasa.webp" },
  { id: "aurora-log-4", title: "Aurora Log 4", type: "Galpão Logístico", area: "35.200 m²", img: "/obras/aurora-log-4.webp" },
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
      className="relative w-full bg-ink py-20"
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
                key={obra.id}
                className="group relative overflow-hidden border border-white/10 bg-steel-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
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
