"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    title: "Galpões Logísticos",
    description:
      "Estruturas de grande porte para operações de armazenagem e distribuição. Engenharia dimensionada para fluxo, carga e expansão.",
    bullets: ["Estrutura metálica", "Pisos de alta resistência", "Docas e pátio"],
  },
  {
    title: "Indústrias",
    description:
      "Plantas industriais executadas com rigor técnico — da fundação às utilidades. Coordenação total entre disciplinas.",
    bullets: ["Layout fabril", "Infraestrutura crítica", "Compliance técnico"],
  },
  {
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
      className="relative w-full overflow-hidden py-20 lg:py-24"
    >
      {/* Camada 1: foto de fundo + overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/obras/zucchi-v4.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Camada 2: conteúdo */}
      <div className="container-aex relative z-10">
        <FadeIn className="max-w-3xl">
          <span className="eyebrow">Serviços</span>
          <h2 className="section-heading mt-4 text-bone">
            Soluções integradas para obras de{" "}
            <span className="text-accent">alta complexidade</span>.
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 space-y-4 lg:mt-16"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="grid grid-cols-1 items-start gap-6 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md lg:grid-cols-[1.2fr_2fr_auto] lg:items-center lg:gap-10 lg:p-8"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight text-bone lg:text-2xl">
                  {service.title}
                </h3>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-neutral-300 lg:text-base">
                  {service.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="shrink-0 text-accent"
                      />
                      <span className="text-sm text-neutral-200">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:text-right">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
                >
                  Saber mais
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
