import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        bone: "#FFFFFF",
        accent: {
          DEFAULT: "#00D26A",
          hover: "#00E875",
          dim: "#00A856",
        },
        steel: {
          900: "#111111",
          800: "#1A1A1A",
          700: "#222222",
          600: "#2E2E2E",
          500: "#3A3A3A",
          400: "#5C5C5C",
          300: "#8A8A8A",
          200: "#B8B8B8",
          100: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      backgroundImage: {
        "grid-architectural":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(0,210,106,0.08), transparent 60%)",
      },
      backgroundSize: {
        grid: "64px 64px",
      },
    },
  },
  plugins: [],
};

export default config;
