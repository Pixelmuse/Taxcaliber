"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __analyticsConsent?: boolean;
  }
}

export default function GtmManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__analyticsConsent === false) return;
    const query = searchParams?.toString();
    const fullPath = query ? `${pathname}?${query}` : pathname;
    if (lastPathRef.current === fullPath) return;
    lastPathRef.current = fullPath;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page_path: fullPath,
      page_title: document.title,
      timestamp: new Date().toISOString(),
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    const handler = (evt: MouseEvent) => {
      if (window.__analyticsConsent === false) return;
      const el = (evt.target as HTMLElement | null)?.closest?.("[data-analytics-id]");
      if (!el) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "ui_interaction",
        target: el.getAttribute("data-analytics-id"),
        action: "click",
        label: el.getAttribute("data-analytics-label") || undefined,
        timestamp: new Date().toISOString(),
      });
    };

    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null;
}
