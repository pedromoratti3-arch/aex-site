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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
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
  featured: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Galpões Logísticos",
    description:
      "Estruturas de grande porte para operações de armazenagem e distribuição. Engenharia dimensionada para fluxo, carga e expansão.",
    bullets: ["Estrutura metálica", "Pisos de alta resistência", "Docas e pátio"],
    featured: true,
  },
  {
    title: "Indústrias",
    description:
      "Plantas industriais executadas com rigor técnico — da fundação às utilidades. Coordenação total entre disciplinas.",
    bullets: ["Layout fabril", "Infraestrutura crítica", "Compliance técnico"],
    featured: false,
  },
  {
    title: "Obras Comerciais",
    description:
      "Empreendimentos comerciais de alto padrão, com gestão integrada de prazo, custo e qualidade do começo ao habite-se.",
    bullets: ["Retrofit e expansão", "Acabamentos premium", "Gestão completa"],
    featured: false,
  },
];

function FeaturedServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-2xl border border-white/5 bg-[#0F0F0F] p-8 lg:col-span-2 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        <div className="flex flex-col">
          <h3 className="text-3xl font-bold tracking-tight text-bone lg:text-4xl">
            {service.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 lg:mt-6 lg:text-lg">
            {service.description}
          </p>

          <div className="mt-auto pt-6 lg:pt-8">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-base font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
            >
              Saber mais
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:border-l lg:border-white/5 lg:pl-12">
          <ul className="space-y-4">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <Check
                  size={20}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span className="text-base text-neutral-300">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex h-full flex-col rounded-2xl border border-white/5 bg-[#0F0F0F] p-6 lg:p-8"
    >
      <div>
        <h3 className="text-xl font-bold tracking-tight text-bone lg:text-2xl">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-neutral-400 lg:text-base">
          {service.description}
        </p>
      </div>

      <div className="mt-6 border-t border-white/5 pt-6">
        <ul className="space-y-3">
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

      <div className="mt-auto pt-6">
        <a
          href="#contato"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
        >
          Saber mais
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.div>
  );
}

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
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
        >
          {SERVICES.map((service) =>
            service.featured ? (
              <FeaturedServiceCard key={service.title} service={service} />
            ) : (
              <ServiceCard key={service.title} service={service} />
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
