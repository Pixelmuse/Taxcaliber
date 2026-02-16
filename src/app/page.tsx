import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import CalendlyPopupLink from "@/components/CalendlyPopupLink";

export const metadata: Metadata = {
  title: "Virtual CPA & Bookkeeping Services | Taxcaliber",
  description:
    "Virtual bookkeeping and tax prep for small businesses nationwide. US-based CPA support from Phoenix-monthly bookkeeping, payroll, tax filing.",
  alternates: {
    canonical: "/",
  },
};

const reasons = [
  {
    title: "100% US-based firm",
    description:
      "Your financial data stays in the US with a team that understands local regulations and compliance.",
    icon: "flag",
  },
  {
    title: "Down-to-earth communication",
    description:
      "No accounting jargon or confusing instructions. We speak your language, not IRS code.",
    icon: "chat_bubble",
  },
  {
    title: "All-virtual workflow",
    description:
      "Documents, meetings, and signatures handled online so you can stay on top of your finances.",
    icon: "laptop_mac",
  },
  {
    title: "Clean and accurate books",
    description:
      "Reliable financials you can use for decision-making and tax time, with every transaction categorized correctly.",
    icon: "fact_check",
  },
  {
    title: "Responsive and supportive",
    description:
      "When you have questions, you actually get answers. We stay responsive and proactive year-round.",
    icon: "support_agent",
  },
  {
    title: "Secure and compliant",
    description:
      "Bank-level encryption and secure portals protect your data. Privacy and security come first.",
    icon: "verified_user",
  },
];

const services = [
  {
    title: "Monthly bookkeeping",
    description:
      "Clear deliverables, transparent pricing, and ongoing support for your daily financial tracking needs.",
    icon: "calendar_today",
    href: "/services/bookkeeping",
    id: "link_body_card_monthly-bookkeeping",
  },
  {
    title: "Bookkeeping clean-up",
    description:
      "Get back on track with our specialized clean-up services. We organize your past records efficiently.",
    icon: "restore_page",
    href: "/services/bookkeeping#bookkeeping-cleanup",
    id: "link_body_card_bookkeeping-clean-up",
  },
  {
    title: "Payroll services",
    description:
      "Comprehensive payroll management ensuring your team gets paid correctly and on time, every time.",
    icon: "payments",
  },
  {
    title: "State sales tax filings",
    description:
      "Navigating complex state regulations and filing requirements so you remain compliant.",
    icon: "account_balance",
  },
  {
    title: "Individual tax prep",
    description:
      "Personalized tax preparation services designed to maximize your returns and minimize stress.",
    icon: "person",
    href: "/services/tax-preparation",
    id: "link_body_card_individual-tax-prep",
  },
  {
    title: "Small business tax",
    description:
      "Expert tax strategy and filing specifically tailored for small business structures and growth.",
    icon: "storefront",
  },
];

const steps = [
  "Schedule a free introductory call",
  "We review your books and goals",
  "Receive a clear quote with no surprise fees",
  "Start services with year-round support",
];

const badges = [
  { name: "ASCPA", src: "/images/ASCPA-logo.webp" },
  { name: "NATP", src: "/images/NATP-logo.webp" },
  { name: "NSA", src: "/images/NSA-logo.webp" },
  { name: "AAATP", src: "/images/AAATP-logo.webp" },
  { name: "Certified CPA", src: "/images/WAATP-logo.webp" },
];

const CheckIcon = () => (
  <svg className="hero__check-icon" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#35c36b" />
    <path d="M7.5 12.5l2.8 2.8 6.2-6.4" fill="none" stroke="#0a0a0f" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <section className="hero hero--nebula">
        <div className="hero__background">
          <Image
            src="/images/hero-bg.webp"
            alt="Professional accountant working virtually"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="hero__glow" />
          <div className="hero__glow hero__glow--secondary" />
        </div>
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">
              High caliber service, <span>zero stress.</span>
            </h1>
            <p className="hero__copy">
              Bookkeeping and tax preparation for small businesses and rental property owners - done virtually,
              accurately, and on time. Whether you are behind on your books, growing a business, or juggling rental income
              and expenses, Taxcaliber makes finance simple so you can focus on what matters.
            </p>
            <ul className="hero__checklist">
              <li className="hero__item">
                <CheckIcon /> US based, virtual firm
              </li>
              <li className="hero__item">
                <CheckIcon /> Monthly bookkeeping & clean-up
              </li>
              <li className="hero__item">
                <CheckIcon /> Expert tax preparation
              </li>
              <li className="hero__item">
                <CheckIcon /> Rental property & Airbnb specialists
              </li>
            </ul>
            <div className="hero__actions">
              <CalendlyPopupLink
                className="button hero__cta-primary"
                id="link_hero_cta_book-meeting"
                analyticsId="link_hero_cta_book-meeting"
              >
                Book a Meeting
                <span style={{ display: "inline-flex", marginLeft: "8px" }} aria-hidden="true">
                  {"\u2192"}
                </span>
              </CalendlyPopupLink>
              <Link
                className="button hero__cta-secondary"
                href="/services"
                id="link_hero_cta_view-services"
                data-analytics-id="link_hero_cta_view-services"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div className="section--center">
            <h2 className="section__title">Who We Help</h2>
            <p className="section__subtitle" style={{ margin: "0 auto" }}>
              Taxcaliber partners with small business owners, real estate investors, Airbnb and vacation rental hosts, and
              individuals juggling income from multiple sources. If bookkeeping feels overwhelming or tax season keeps
              getting more complicated, we are here to make it easier.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--center">
        <div className="container">
          <span className="eyebrow-pill">Why Taxcaliber?</span>
          <h2 className="section__title">Why Clients Choose Us</h2>
          <p className="section__subtitle" style={{ margin: "0 auto 32px" }}>
            We combine professional expertise with modern convenience to give you peace of mind.
          </p>
          <div className="grid-3 feature-grid" style={{ marginTop: "30px", textAlign: "left" }}>
            {reasons.map((reason) => (
              <div className="card feature-card" key={reason.title}>
                <div className="feature-card__icon" aria-hidden="true">
                  <span className="material-icons">{reason.icon}</span>
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h2 className="section__title" style={{ marginBottom: "6px" }}>
                Proud member of professional associations
              </h2>
            </div>
            <div style={{ alignSelf: "center" }}>
              <Link
                className="button button--ghost"
                href="/about"
                id="link_body_cta_learn-more-about"
                data-analytics-id="link_body_cta_learn-more-about"
              >
                Learn more about us
              </Link>
            </div>
          </div>
          <div className="badge-strip" style={{ marginTop: "24px" }}>
            {badges.map((badge) => (
              <Image key={badge.name} src={badge.src} alt={badge.name} width={140} height={60} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section--center">
            <span className="eyebrow-pill">Services</span>
            <h2 className="section__title">Full coverage for tax and bookkeeping</h2>
            <p className="section__subtitle" style={{ margin: "0 auto 32px" }}>
              Professional financial services tailored to your needs. From monthly maintenance to annual filings, we ensure
              accuracy and compliance.
            </p>
          </div>
          <div className="grid-3 feature-grid" style={{ marginTop: "30px", textAlign: "left" }}>
            {services.map((service) => (
              <div key={service.title}>
                {service.href ? (
                  <Link href={service.href} id={service.id} data-analytics-id={service.id} className="service-card service-card--link">
                    <span className="material-icons service-card__watermark" aria-hidden="true">
                      {service.icon}
                    </span>
                    <div className="service-card__content">
                      <div className="service-card__icon" aria-hidden="true">
                        <span className="material-icons">{service.icon}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </Link>
                ) : (
                  <div className="service-card">
                    <span className="material-icons service-card__watermark" aria-hidden="true">
                      {service.icon}
                    </span>
                    <div className="service-card__content">
                      <div className="service-card__icon" aria-hidden="true">
                        <span className="material-icons">{service.icon}</span>
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link
              className="service-cta"
              href="/services"
              id="link_body_cta_explore-services"
              data-analytics-id="link_body_cta_explore-services"
            >
              Explore All Services
              <span className="material-icons" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--bordered">
        <div className="container">
          <span className="section__eyebrow">How it works</span>
          <h2 className="section__title">Simple, guided, and transparent</h2>
          <div className="steps" style={{ marginTop: "24px" }}>
            {steps.map((step) => (
              <div className="step" key={step}>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
