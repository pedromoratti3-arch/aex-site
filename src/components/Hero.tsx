"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

const STATS = [
  { value: "+450.000", unit: "m²", label: "produzidos" },
  { value: "+15", unit: "", label: "obras entregues" },
  { value: "Brasil", unit: "", label: "Sede no Espírito Santo, em expansão nacional" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-ink pt-32 sm:pt-36 md:pt-32 lg:pt-28"
    >
      {/* Architectural grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-architectural bg-grid opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-aex relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-accent" />
            <span className="eyebrow">Engenharia · Gestão · Construção</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tightest text-bone md:text-6xl lg:text-7xl"
          >
            Inteligência construtiva para{" "}
            <span className="relative inline-block">
              <span className="text-accent">galpões logísticos</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-sm bg-accent/40"
              />
            </span>{" "}
            e indústrias.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base text-steel-200 md:text-lg"
          >
            Engenharia de alta performance, do Espírito Santo para o Brasil.
            Planejamento estratégico, metodologias modernas e execução sem
            desvios — para obras de alta complexidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#obras" className="btn-primary group">
              Ver obras
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://wa.me/5527999559800?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20AEX%20e%20gostaria%20de%20conversar%20sobre%20um%20poss%C3%ADvel%20empreendimento.%20Pode%20me%20direcionar%20%C3%A0%20pessoa%20respons%C3%A1vel%20por%20novos%20projetos%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline group"
            >
              <MessageSquare size={16} />
              Falar com a equipe
            </a>
          </motion.div>
        </div>

        {/* Stats column */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 lg:self-end"
        >
          <div className="border-t-2 border-accent/40 pt-6 lg:border-l-2 lg:border-t-0 lg:pl-6 lg:pt-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col py-3 ${
                  i !== STATS.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tightest text-bone md:text-4xl">
                    {s.value}
                  </span>
                  {s.unit && (
                    <span className="text-sm font-medium text-accent">
                      {s.unit}
                    </span>
                  )}
                </span>
                <span className="mt-1 text-xs uppercase tracking-[0.18em] text-steel-300">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
