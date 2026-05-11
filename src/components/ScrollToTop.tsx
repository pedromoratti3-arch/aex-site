"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Impede o navegador de restaurar a posição de scroll anterior
    // (back/forward, refresh). Sem isso, abrir o site após ter
    // rolado uma vez recarrega no meio/fim da página.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Força topo na primeira renderização, exceto quando há hash
    // explícito na URL (ex.: /#contato deve respeitar o âncora).
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
