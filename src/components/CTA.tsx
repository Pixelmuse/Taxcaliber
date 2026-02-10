import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="section__title">
          Ready to simplify your taxes?
          <br />
          <span style={{ color: "rgba(255, 255, 255, 0.8)" }}>Start your journey today.</span>
        </h2>
        <p>
          Schedule a free discovery call to see how we can help your business thrive with accurate bookkeeping and expert
          tax planning.
        </p>
        <Link
          className="button button--ghost"
          href="/contact"
          id="link_body_cta_book-meeting"
          data-analytics-id="link_body_cta_book-meeting"
          style={{ background: "#fff", color: "var(--color-primary)" }}
        >
          Book a Meeting
        </Link>
      </div>
    </section>
  );
}
