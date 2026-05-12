"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import CornerSwoosh from "./CornerSwoosh";
import FadeIn from "./FadeIn";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

const INITIAL: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  mensagem: "",
};

const WHATSAPP_URL =
  "https://wa.me/5527999559800?text=Olá%20AEX!%20Vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Endereço",
    lines: [
      "Shopping Mestre Álvaro",
      "Av. João Palácio, 300 — Salas 707 a 710",
      "Eurico Salles · Serra-ES — CEP 29160-161",
    ],
  },
  {
    icon: Phone,
    label: "WhatsApp",
    lines: ["+55 (27) 99955-9800"],
    href: WHATSAPP_URL,
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    /* UI only — backend de envio fica para fase posterior */
  }

  return (
    <section
      id="contato"
      className="relative w-full border-t border-white/5 bg-steel-900/40 py-24 md:py-32"
    >
      <div className="container-aex grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Form */}
        <FadeIn className="lg:col-span-7">
          <span className="eyebrow">Contato</span>
          <h2 className="section-heading mt-4 text-bone">
            Vamos conversar sobre <span className="text-accent">sua obra</span>?
          </h2>
          <div className="mt-6 h-px w-16 bg-accent" />
          <p className="mt-6 max-w-xl text-steel-200">
            Conte-nos sobre o seu projeto. Nossa equipe técnica responde em até
            24 horas úteis com uma análise inicial gratuita.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Nome"
              required
              value={form.nome}
              onChange={(v) => update("nome", v)}
              placeholder="Seu nome completo"
            />
            <Field
              label="Empresa"
              value={form.empresa}
              onChange={(v) => update("empresa", v)}
              placeholder="Razão social"
            />
            <Field
              label="E-mail"
              type="email"
              required
              value={form.email}
              onChange={(v) => update("email", v)}
              placeholder="email@empresa.com.br"
            />
            <Field
              label="Telefone"
              type="tel"
              value={form.telefone}
              onChange={(v) => update("telefone", v)}
              placeholder="(27) 0 0000-0000"
            />

            <div className="sm:col-span-2">
              <Label>Mensagem</Label>
              <textarea
                value={form.mensagem}
                onChange={(e) => update("mensagem", e.target.value)}
                rows={5}
                placeholder="Descreva o tipo de obra, área estimada, prazo e localização."
                className="mt-2 w-full resize-none border border-white/10 bg-ink px-4 py-3 text-sm text-bone placeholder:text-steel-400 transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary group w-full sm:w-auto">
                Enviar mensagem
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <p className="mt-3 text-xs text-steel-400">
                Ao enviar, você concorda em ser contatado pela equipe AEX.
              </p>
            </div>
          </form>
        </FadeIn>

        {/* Info */}
        <FadeIn delay={0.1} className="lg:col-span-5">
          <div className="relative h-full border border-white/10 bg-ink p-8 md:p-10">
            <CornerSwoosh />

            <h3 className="text-xl font-bold tracking-tight text-bone">
              Onde estamos
            </h3>
            <p className="mt-2 text-sm text-steel-300">
              Sediados na Serra-ES, com atuação em toda a região metropolitana
              de Vitória.
            </p>

            <ul className="mt-10 space-y-8">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const Inner = (
                  <>
                    <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-sm bg-accent/10 text-accent ring-1 ring-accent/30">
                      <Icon size={18} />
                    </span>
                    <div>
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-steel-300">
                        {info.label}
                      </span>
                      {info.lines.map((line, i) => (
                        <span
                          key={i}
                          className={
                            i === 0
                              ? "mt-1 block text-base font-semibold text-bone"
                              : "mt-0.5 block text-xs text-steel-400"
                          }
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </>
                );
                return (
                  <li key={info.label}>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-4 transition-colors"
                      >
                        {Inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">{Inner}</div>
                    )}
                    {info.label === "Endereço" && (
                      <iframe
                        src="https://maps.google.com/maps?q=Shopping+Mestre+%C3%81lvaro+Serra+ES&output=embed"
                        width="100%"
                        height="280"
                        style={{ border: 0, borderRadius: "12px", marginTop: "24px" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização AEX"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 border-t border-white/10 pt-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                Horário comercial
              </span>
              <p className="mt-2 text-sm text-steel-200">
                Segunda a sexta, das 8h às 18h.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-steel-300">
      {children}
    </label>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: FieldProps) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </Label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full border border-white/10 bg-ink px-4 py-3 text-sm text-bone placeholder:text-steel-400 transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  );
}
