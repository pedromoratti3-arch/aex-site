"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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
      className="relative w-full overflow-hidden border-t border-white/5 bg-steel-900/40 py-20 lg:py-24"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 space-y-3 lg:mt-16 lg:space-y-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="servico-card-bg relative overflow-hidden rounded-2xl"
            >
              <div className="pointer-events-none absolute inset-0 z-10 hidden bg-black/70 lg:block" />

              <div className="relative z-20 p-8 lg:p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold tracking-tight text-bone lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-neutral-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-col lg:border-l lg:border-white/25 lg:pl-12">
                    <div className="flex flex-1 items-center">
                      <ul className="w-full space-y-3">
                        {service.bullets.map((b) => (
                          <li key={b} className="flex items-center gap-3">
                            <Check
                              size={16}
                              strokeWidth={2}
                              className="shrink-0 text-accent"
                            />
                            <span className="text-base text-neutral-200">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <a
                        href="#contato"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
                      >
                        Saber mais
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
