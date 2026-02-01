import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Monthly bookkeeping, clean-up projects, payroll, sales tax filings, and tax preparation for individuals and small businesses.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Monthly bookkeeping",
    description:
      "Clear deliverables, transparent pricing, and ongoing support make for easy financial tracking.",
    details: ["Custom monthly plans", "Profit and loss + balance sheet reporting", "Year-round support"],
    icon: "calendar_today",
  },
  {
    title: "Bookkeeping clean-up",
    description:
      "Get back on track with our specialized clean-up services designed to organize past records efficiently.",
    details: ["Bring past months and years up to date", "Prepare clean financials for filing"],
    icon: "restore_page",
  },
  {
    title: "Payroll services",
    description: "Comprehensive payroll management ensuring your team gets paid on time, every time.",
    details: ["Setup and compliance", "Recurring payroll processing"],
    icon: "payments",
  },
  {
    title: "State sales tax filings",
    description: "Navigating complex state regulations and filing deadlines so you remain compliant.",
    details: ["Deadline tracking", "Filing support for multi-state businesses"],
    icon: "account_balance",
  },
  {
    title: "Individual tax prep",
    description:
      "Personalized tax preparation services designed to maximize deductions and minimize stress.",
    details: ["Specialized experience with rental properties", "Self-employed and gig worker expertise"],
    pricing: { price: "Starting at $350", detail: "Federal filing only" },
    icon: "person",
  },
  {
    title: "Small business tax",
    description: "Expert tax strategy and filing specifically tailored for small business growth.",
    details: ["Sole proprietors and single-member LLCs", "S-Corp returns aligned with your books"],
    pricing: { price: "Starting at $750", detail: "S-Corp federal filing" },
    icon: "storefront",
  },
];

const steps = [
  {
    title: "Schedule a free consultation",
    description: "We discuss your needs and determine the best service package for your situation.",
  },
  {
    title: "We review your books and goals",
    description: "Our team analyzes your financial situation to create a custom plan.",
  },
  {
    title: "Receive a clear quote with no surprise fees",
    description: "Transparent pricing means you know exactly what you are paying for upfront.",
  },
  {
    title: "Start services with year-round support",
    description: "We provide ongoing guidance and peace of mind whenever you need us.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="services-hero">
        <div className="container services-hero__content">
          <span className="services-hero__tag">Services</span>
          <h1 className="services-hero__title">
            Clear, reliable support for <span className="services-hero__highlight">your finances</span>
          </h1>
          <p className="services-hero__copy">
            From monthly bookkeeping to tax prep, Taxcaliber keeps your business on track with responsive, judgment-free
            guidance.
          </p>
          <div className="services-hero__panel">
            <h3>Pricing transparency</h3>
            <p>
              Individual tax returns start at $350. Small business returns like S-Corps start at $750. Monthly bookkeeping
              is custom-tailored based on transaction volume and complexity.
            </p>
            <Link
              className="services-btn"
              href="/contact"
              id="link_body_cta_request-quote"
              data-analytics-id="link_body_cta_request-quote"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="services-header">
            <span className="services-header__tag">Services</span>
            <h2>Full coverage for tax and bookkeeping</h2>
            <p>
              Professional financial services designed to help small businesses and individuals succeed with comprehensive,
              reliable support.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div className="services-card" key={service.title}>
                <div className="services-card__icon" aria-hidden="true">
                  <span className="material-icons">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="services-features">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {service.pricing ? (
                  <div className="services-pricing">
                    <div className="services-pricing__price">{service.pricing.price}</div>
                    <div className="services-pricing__detail">{service.pricing.detail}</div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-how">
        <div className="container services-how__content">
          <span className="services-how__tag">How it works</span>
          <h2>Simple, guided, and transparent</h2>
          <ul className="services-steps">
            {steps.map((step, index) => (
              <li className="services-step" key={step.title}>
                <div className="services-step__number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>
            Ready to simplify your taxes?
            <br />
            Start your journey today.
          </h2>
          <p>
            Schedule a free discovery call to see how we can help your business thrive with accurate bookkeeping and expert
            tax planning.
          </p>
          <Link
            className="services-cta__button"
            href="/contact"
            id="link_body_cta_book-consultation"
            data-analytics-id="link_body_cta_book-consultation"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
