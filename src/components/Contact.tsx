"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MapPin, Phone, Send } from "lucide-react";
import FadeIn from "./FadeIn";

type FormState = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";
type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  nome: "",
  empresa: "",
  email: "",
  telefone: "",
  mensagem: "",
};

const WHATSAPP_URL =
  "https://wa.me/5527999559800?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20AEX%20e%20gostaria%20de%20conversar%20sobre%20um%20poss%C3%ADvel%20empreendimento.%20Pode%20me%20direcionar%20%C3%A0%20pessoa%20respons%C3%A1vel%20por%20novos%20projetos%3F";

// Configure NEXT_PUBLIC_WEB3FORMS_KEY no Vercel após obter chave em https://web3forms.com/#start
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ACCESS_KEY_PLACEHOLDER";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (form.nome.trim().length < 3) errors.nome = "Mínimo 3 caracteres";
  if (!EMAIL_REGEX.test(form.email.trim()))
    errors.email = "Informe um e-mail válido";
  if (form.mensagem.trim().length < 10)
    errors.mensagem = "Mínimo 10 caracteres";
  return errors;
}

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
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const successRef = useRef<HTMLDivElement>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function resetForm() {
    setForm(INITIAL);
    setErrors({});
    setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.nome,
          company: form.empresa,
          email: form.email,
          phone: `Telefone: ${form.telefone}`,
          message: `Mensagem: ${form.mensagem}`,
          subject: `Novo lead via site AEX — ${form.nome}`,
          from_name: "Site AEX",
        }),
      });
      const data = await response.json();
      if (data?.success) {
        setStatus("success");
        requestAnimationFrame(() => {
          successRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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

          {status === "success" ? (
            <div
              ref={successRef}
              className="mt-10 border border-accent/40 bg-accent/5 p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent ring-1 ring-accent/40">
                <CheckCircle2 size={24} />
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-bone">
                Mensagem recebida!
              </h3>
              <p className="mt-3 max-w-md text-sm text-steel-200">
                Nossa equipe técnica responde em até 24h úteis. Para urgências,
                fale pelo WhatsApp.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-outline"
                >
                  Enviar nova mensagem
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              <Field
                label="Nome"
                required
                value={form.nome}
                onChange={(v) => update("nome", v)}
                placeholder="Seu nome completo"
                error={errors.nome}
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
                error={errors.email}
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
                  className={`mt-2 w-full resize-none border bg-ink px-4 py-3 text-sm text-bone placeholder:text-steel-400 transition-colors focus:outline-none ${
                    errors.mensagem
                      ? "border-red-500/60 focus:border-red-500"
                      : "border-white/10 focus:border-accent"
                  }`}
                />
                {errors.mensagem && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {errors.mensagem}
                  </p>
                )}
              </div>

              {status === "error" && (
                <div
                  role="alert"
                  className="sm:col-span-2 border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                >
                  Erro ao enviar. Tente novamente ou use o WhatsApp.
                </div>
              )}

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary group w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-steel-400">
                  Ao enviar, você concorda em ser contatado pela equipe AEX.
                </p>
              </div>
            </form>
          )}
        </FadeIn>

        {/* Info */}
        <FadeIn delay={0.1} className="lg:col-span-5">
          <div className="relative h-full border border-white/10 bg-ink p-8 md:p-10">
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
  error?: string;
};

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
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
        className={`mt-2 w-full border bg-ink px-4 py-3 text-sm text-bone placeholder:text-steel-400 transition-colors focus:outline-none ${
          error
            ? "border-red-500/60 focus:border-red-500"
            : "border-white/10 focus:border-accent"
        }`}
      />
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
