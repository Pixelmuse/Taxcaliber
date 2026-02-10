import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__content">
          <span className="section__eyebrow">404</span>
          <h1>Page not found</h1>
          <p>The page you are looking for doesn&apos;t exist or was moved.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="section__subtitle" style={{ margin: "0 auto 32px" }}>
            Try heading back to the homepage or reach out if you need help.
          </p>
          <Link className="button button--secondary" href="/" id="link_body_cta_home" data-analytics-id="link_body_cta_home">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
