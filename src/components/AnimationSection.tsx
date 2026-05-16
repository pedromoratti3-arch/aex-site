"use client";

/* TODO FUTURO: substituir esta seção por animação scroll storytelling
 * planta → terreno → galpão construído. Requer assets visuais reais e
 * implementação dedicada com Framer Motion ou GSAP ScrollTrigger.
 */

import { motion } from "framer-motion";
import Image from "next/image";
import { ClipboardList } from "lucide-react";
import FadeIn from "./FadeIn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type Stage = {
  label: string;
  title: string;
  description: string;
  image: string | null;
  alt: string;
};

const STAGES: Stage[] = [
  {
    label: "Planta",
    title: "Projeto técnico",
    description:
      "Levantamento, modelagem e validação de cada detalhe construtivo antes de qualquer movimentação.",
    image: null,
    alt: "",
  },
  {
    label: "Terreno",
    title: "Preparação do solo",
    description:
      "Topografia, terraplenagem e fundações dimensionadas para a complexidade da carga prevista.",
    image: "/processos/processo-terreno.webp",
    alt: "Terraplanagem em obra AEX",
  },
  {
    label: "Galpão",
    title: "Execução completa",
    description:
      "Estrutura, fechamentos, infraestrutura e entrega operacional dentro do prazo contratado.",
    image: "/processos/processo-galpao.webp",
    alt: "Estrutura metálica em montagem",
  },
];

export default function AnimationSection() {
  return (
    <section
      id="processo"
      className="relative w-full overflow-hidden bg-ink py-20"
      aria-label="Processo construtivo: planta, terreno e galpão"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-architectural bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)]"
      />

      <div className="container-aex relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Da planta à entrega</span>
          <h2 className="section-heading mt-4">
            O processo que sustenta cada{" "}
            <span className="text-accent">metro quadrado</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-steel-200">
            Um fluxo único, controlado fim a fim — projeto, terreno e estrutura
            sob a mesma engenharia.
          </p>
        </FadeIn>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.label}
              variants={cardVariants}
              className="h-full"
            >
              <article className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-steel-900/60">
                {stage.image ? (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={stage.image}
                      alt={stage.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center bg-accent/10">
                    <ClipboardList size={56} className="text-accent/50" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent/80">
                    {String(i + 1).padStart(2, "0")} · {stage.label}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-bone">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-200">
                    {stage.description}
                  </p>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
