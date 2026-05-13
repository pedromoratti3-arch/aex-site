"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

type Easing = (t: number) => number;

const easeOutExpo: Easing = (t) =>
  t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
const easeOutCubic: Easing = (t) => 1 - Math.pow(1 - t, 3);

type Stat = {
  value: string;
  unit: string;
  label: string;
  animateTo?: number;
  prefix?: string;
  easing?: Easing;
};

const STATS: Stat[] = [
  { value: "+450.000", unit: "m²", label: "produzidos", animateTo: 450000, prefix: "+", easing: easeOutExpo },
  { value: "+15", unit: "", label: "obras entregues", animateTo: 15, prefix: "+", easing: easeOutCubic },
  { value: "Brasil", unit: "", label: "Sede no Espírito Santo, em expansão nacional" },
];

const BR_FORMATTER = new Intl.NumberFormat("pt-BR");

function useCountUp(target: number, enabled: boolean, easing: Easing) {
  const [value, setValue] = useState(enabled ? 0 : target);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!enabled) {
      setValue(target);
      return;
    }
    const node = ref.current;
    if (!node || triggered.current) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || triggered.current) return;
        triggered.current = true;
        observer.disconnect();

        const startAt = performance.now() + 100;
        const duration = 2000;

        const tick = (now: number) => {
          if (now < startAt) {
            raf = requestAnimationFrame(tick);
            return;
          }
          const elapsed = now - startAt;
          const progress = Math.min(elapsed / duration, 1);
          setValue(Math.round(target * easing(progress)));
          if (progress < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, enabled, easing]);

  return { ref, formatted: BR_FORMATTER.format(value) };
}

function StatItem({ stat, isLast }: { stat: Stat; isLast: boolean }) {
  const reduce = useReducedMotion();
  const canAnimate = stat.animateTo != null && !reduce;
  const { ref, formatted } = useCountUp(
    stat.animateTo ?? 0,
    canAnimate,
    stat.easing ?? easeOutCubic,
  );
  const display = canAnimate ? `${stat.prefix ?? ""}${formatted}` : stat.value;

  return (
    <div
      className={`flex flex-col py-3 ${
        !isLast ? "border-b border-white/5" : ""
      }`}
    >
      <span className="flex items-baseline gap-2">
        <span
          ref={ref}
          className="text-3xl font-bold tracking-tightest text-bone md:text-4xl"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
        >
          {display}
        </span>
        {stat.unit && (
          <span className="text-sm font-medium text-accent">{stat.unit}</span>
        )}
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.18em] text-steel-300">
        {stat.label}
      </span>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-ink pt-32 sm:pt-36 md:pt-32 lg:pt-28"
    >
      {/* Cinematic photo background */}
      <picture aria-hidden="true" className="absolute inset-0 z-0 block">
        <source
          media="(max-width: 768px)"
          srcSet="/hero-galpao-mobile.webp"
          type="image/webp"
        />
        <source srcSet="/hero-galpao.webp" type="image/webp" />
        <img
          src="/hero-galpao.jpg"
          alt=""
          className="hero-photo h-full w-full object-cover object-center"
          style={{
            filter: "saturate(0.7) brightness(0.85) contrast(1.05)",
            animation: reduce
              ? "none"
              : "kenBurns 60s ease-in-out infinite alternate",
            transformOrigin: "center center",
          }}
        />
      </picture>

      {/* Dark gradient overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.65) 70%, rgba(10,10,10,0.85) 100%)",
        }}
      />

      {/* Radial vignette — focus center, darken edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 45%, rgba(10,10,10,0.6) 100%)",
        }}
      />

      {/* Architectural grid texture — heavily reduced */}
      <div
        aria-hidden
        className="absolute inset-0 z-20 bg-grid-architectural bg-grid opacity-[0.4]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 z-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-aex relative z-30 grid w-full grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
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
            <span className="text-accent">galpões logísticos</span>{" "}
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
              <StatItem
                key={s.label}
                stat={s}
                isLast={i === STATS.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
