"use client";

import { useEffect } from "react";

const scripts = ["/klaro-config.js", "/klaro.js"];

export default function KlaroLoader() {
  useEffect(() => {
    const existing = new Set(
      Array.from(document.querySelectorAll<HTMLScriptElement>("script[data-klaro]")).map((script) => script.src)
    );

    scripts.forEach((src) => {
      if (existing.has(new URL(src, window.location.origin).toString())) return;
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.defer = false;
      script.setAttribute("data-klaro", "true");
      document.body.appendChild(script);
    });
  }, []);

  return null;
}
