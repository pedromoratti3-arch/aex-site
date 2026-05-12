type CornerSwooshProps = {
  className?: string;
};

/**
 * Detalhe decorativo da identidade AEX — referência ao traço diagonal verde
 * do "X" da logo. Sempre posicionado no canto superior direito de um card,
 * extravasando levemente para fora da borda (igual ao card "Onde estamos"
 * do Contato, que é o padrão visual da marca).
 *
 * O card hospedeiro precisa ter `position: relative` e NÃO pode estar com
 * `overflow: hidden`, senão o traço que extravasa é cortado.
 */
export default function CornerSwoosh({ className = "" }: CornerSwooshProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 40 40"
      fill="none"
      className={`pointer-events-none absolute -right-2 -top-2 h-10 w-10 ${className}`}
    >
      <line
        x1="6"
        y1="34"
        x2="34"
        y2="6"
        stroke="#00D26A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
