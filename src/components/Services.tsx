"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const containerVariants = {
  hidden: {},
  visible: {},
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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
  image: string;
  alt: string;
};

const SERVICES: Service[] = [
  {
    title: "Galpões Logísticos",
    description:
      "Estruturas de grande porte para operações de armazenagem e distribuição. Engenharia dimensionada para fluxo, carga e expansão.",
    bullets: ["Estrutura metálica", "Pisos de alta resistência", "Docas e pátio"],
    image:
      "https://placehold.co/800x600/0F0F0F/525252?text=Foto+%C2%B7+Galp%C3%B5es",
    alt: "Placeholder Galpões Logísticos",
  },
  {
    title: "Indústrias",
    description:
      "Plantas industriais executadas com rigor técnico — da fundação às utilidades. Coordenação total entre disciplinas.",
    bullets: ["Layout fabril", "Infraestrutura crítica", "Compliance técnico"],
    image:
      "https://placehold.co/800x600/0F0F0F/525252?text=Foto+%C2%B7+Ind%C3%BAstrias",
    alt: "Placeholder Indústrias",
  },
  {
    title: "Obras Comerciais",
    description:
      "Empreendimentos comerciais de alto padrão, com gestão integrada de prazo, custo e qualidade do começo ao habite-se.",
    bullets: ["Retrofit e expansão", "Acabamentos premium", "Gestão completa"],
    image:
      "https://placehold.co/800x600/0F0F0F/525252?text=Foto+%C2%B7+Comerciais",
    alt: "Placeholder Obras Comerciais",
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
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-16 max-w-7xl space-y-4 lg:space-y-6"
        >
          {SERVICES.map((service, i) => {
            const textOnLeft = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="grid overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F] lg:grid-cols-2"
              >
                <div
                  className={`order-1 flex flex-col justify-between p-8 lg:p-10 ${
                    textOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-bone lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-400">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Check
                            size={16}
                            strokeWidth={2}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span className="text-sm text-neutral-300">{b}</span>
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

                <div
                  className={`relative order-2 min-h-[200px] lg:min-h-0 ${
                    textOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
