"use client";

import type { MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyPopupLinkProps = {
  className?: string;
  id?: string;
  analyticsId?: string;
  children: ReactNode;
  url?: string;
};

export default function CalendlyPopupLink({
  className,
  id,
  analyticsId,
  children,
  url = "https://calendly.com/ruth-taxcaliber/15min",
}: CalendlyPopupLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <a className={className} href={url} onClick={handleClick} id={id} data-analytics-id={analyticsId}>
      {children}
    </a>
  );
}

