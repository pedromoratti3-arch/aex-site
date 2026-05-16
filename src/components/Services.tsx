"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import FadeIn from "./FadeIn";

const imageVariants = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -32 : 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const textVariants = (fromLeft: boolean) => ({
  hidden: { opacity: 0, x: fromLeft ? -32 : 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2,
    },
  },
});

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
      "https://placehold.co/1600x900/0F0F0F/525252?text=Foto+%C2%B7+Galp%C3%B5es+Log%C3%ADsticos",
    alt: "Foto · Galpões Logísticos",
  },
  {
    title: "Indústrias",
    description:
      "Plantas industriais executadas com rigor técnico — da fundação às utilidades. Coordenação total entre disciplinas.",
    bullets: ["Layout fabril", "Infraestrutura crítica", "Compliance técnico"],
    image:
      "https://placehold.co/1600x900/0F0F0F/525252?text=Foto+%C2%B7+Ind%C3%BAstrias",
    alt: "Foto · Indústrias",
  },
  {
    title: "Obras Comerciais",
    description:
      "Empreendimentos comerciais de alto padrão, com gestão integrada de prazo, custo e qualidade do começo ao habite-se.",
    bullets: ["Retrofit e expansão", "Acabamentos premium", "Gestão completa"],
    image:
      "https://placehold.co/1600x900/0F0F0F/525252?text=Foto+%C2%B7+Obras+Comerciais",
    alt: "Foto · Obras Comerciais",
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

        <div className="mt-16 space-y-6 lg:space-y-8">
          {SERVICES.map((service, i) => {
            const imageOnLeft = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F] lg:grid-cols-2"
              >
                <motion.div
                  variants={imageVariants(imageOnLeft)}
                  className={`relative aspect-video lg:aspect-auto lg:h-full ${
                    imageOnLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </motion.div>

                <motion.div
                  variants={textVariants(!imageOnLeft)}
                  className={`flex flex-col justify-center p-8 lg:p-10 ${
                    imageOnLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="mb-4 text-2xl font-bold tracking-tight text-bone lg:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-base leading-relaxed text-steel-200">
                    {service.description}
                  </p>
                  <ul className="mb-6 space-y-3">
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
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-all hover:gap-3 hover:text-accent-hover"
                  >
                    Saber mais
                    <ArrowUpRight size={18} />
                  </a>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
