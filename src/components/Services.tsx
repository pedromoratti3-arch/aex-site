"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
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
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
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
      className="relative w-full overflow-hidden border-t border-white/5 bg-steel-900/40 py-20"
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
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-16 max-w-5xl space-y-6 lg:space-y-8"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F] p-8 lg:p-12"
            >
              <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-16">
                <div className="select-none text-[120px] font-light leading-none tracking-tighter text-accent/15 lg:text-[180px]">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <h3 className="text-2xl font-bold tracking-tight text-bone lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-steel-200">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-3 text-sm text-steel-100 lg:text-base"
                      >
                        <Check
                          size={20}
                          strokeWidth={2}
                          className="flex-none text-accent"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contato"
                    className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
                  >
                    Saber mais
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
