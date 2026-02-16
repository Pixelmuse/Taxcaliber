"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CTA() {
  const handleCalendlyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/ruth-taxcaliber/15min" });
    }
  };

  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="section__title">
          Ready to simplify your taxes?
          <br />
          <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>Start your journey today.</span>
        </h2>
        <p>
          Schedule a free introductory meeting to see how we can help your business thrive with accurate bookkeeping and expert
          tax planning.
        </p>
        <a
          className="button button--ghost"
          href="https://calendly.com/ruth-taxcaliber/15min"
          onClick={handleCalendlyClick}
          id="link_body_cta_book-introductory-meeting"
          data-analytics-id="link_body_cta_book-introductory-meeting"
          style={{ background: "#fff", color: "var(--color-primary)" }}
        >
          Book a Free Introductory Meeting
        </a>
      </div>
    </section>
  );
}
