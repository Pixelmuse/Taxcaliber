import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Taxcaliber | Virtual CPA Phoenix Arizona",
  description:
    "Phoenix-based virtual CPA firm led by Ruth Ortega, CPA, EA. Judgment-free tax and bookkeeping for small businesses nationwide.",
  alternates: {
    canonical: "/about",
  },
};

const values = [
  {
    title: "100% virtual service",
    description:
      "Your financial data stays in the U.S. with secure client portals and compliance with regulations.",
    icon: "language",
  },
  {
    title: "Clear, in-depth communication",
    description:
      "No accounting jargon or confusing instructions. We explain tax strategies like you are a person.",
    icon: "chat_bubble",
  },
  {
    title: "Documents and follow-through",
    description:
      "Documents, meetings, and questions handled within 48 hours. We stay on top of your financials.",
    icon: "fact_check",
  },
  {
    title: "Clean and accurate books",
    description:
      "Monthly financials you can trust for decision making and tax time, with every transaction categorized accurately.",
    icon: "receipt_long",
  },
  {
    title: "Responsive and supportive",
    description:
      "We do not have silly questions, only real answers. We support you year-round.",
    icon: "support_agent",
  },
  {
    title: "Secure and compliant",
    description:
      "Bank-level encryption and secure portals protect your data, helping with audits and security tracking.",
    icon: "verified_user",
  },
];

const credentials = [
  { name: "ASCPA", src: "/images/ASCPA-logo.webp" },
  { name: "NATP", src: "/images/NATP-logo.webp" },
  { name: "NSA", src: "/images/NSA-logo.webp" },
  { name: "AAATP", src: "/images/AAATP-logo.webp" },
  { name: "WAATP", src: "/images/WAATP-logo.webp" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">About Taxcaliber</span>
          <h1 className="page-hero__title">Virtual accounting built on trust and clarity</h1>
          <p className="page-hero__copy">
            Taxcaliber is a U.S.-based, fully virtual bookkeeping and tax firm built for real people running real
            businesses. No jargon. No judgment. Just clear, accurate support.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__image">
            <Image
              src="/images/calculator.webp"
              alt="Calculator and financial documents"
              width={720}
              height={520}
            />
          </div>
          <div className="about-mission__content">
            <span className="section__eyebrow">Who we are</span>
            <h2 className="section__title">A US-based virtual firm built for real people</h2>
            <p className="section__subtitle" >
              We understand the complexities of tax code and bookkeeping can be overwhelming. Our mission is to strip away
              the confusion and provide clarity, confidence, and peace of mind.
            </p>
            <p>
              We believe in treating every client with respect and empathy. Whether you are a freelancer, a small business
              owner, or managing rental properties, we are here to support your journey without the intimidation factor.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="about-values__header">
            <span className="section__eyebrow">Why clients choose us</span>
            <h2 className="section__title">Our commitment to you</h2>
            <p>
              We are guided by principles that put your success first, making complex accounting simple and stress-free.
            </p>
          </div>
          <div className="grid-3 feature-grid" style={{ textAlign: "left" }}>
            {values.map((value) => (
              <div className="card feature-card" key={value.title}>
                <div className="feature-card__icon" aria-hidden="true">
                  <span className="material-icons">{value.icon}</span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-founder">
        <div className="container about-founder__grid">
          <div className="about-founder__image">
            <Image src="/images/ruth-ortega-headshot.webp" alt="Ruth Ortega, CPA, EA" width={520} height={680} />
          </div>
          <div className="about-founder__content">
            <span className="section__eyebrow">Founder & principal</span>
            <h2 className="section__title">Ruth Ortega, CPA, EA</h2>
            <div className="about-founder__badges" aria-label="Professional credentials">
              <Image src="/images/Certified-CPA.webp" alt="Certified CPA credential badge" width={112} height={112} />
              <Image src="/images/Enrolled-Agent.webp" alt="Enrolled Agent credential badge" width={112} height={112} />
            </div>
            <div className="about-founder__title">Certified Public Accountant & Enrolled Agent</div>
            <p>
              Ruth founded Taxcaliber to bring high-caliber accounting expertise to small business owners without the
              intimidation factor. She blends detail-focused precision with a no-judgment approach so clients feel
              confident asking questions.
            </p>
            <p>
              Ruth specializes in small businesses and rental property taxation, ensuring every client gets a clear plan
              for compliance and growth. Her approach is simple: listen first, explain clearly, and deliver results you can
              trust.
            </p>
            <p>
              As a CPA licensed in Arizona and an Enrolled Agent, Ruth combines deep technical expertise with genuine 
              care for every client. She is your partner in long-term financial success
            </p>
          </div>
        </div>
      </section>

      <section className="about-credentials">
        <div className="container about-credentials__content">
          <div className="about-credentials__header">
            <span className="section__eyebrow">Professional affiliations</span>
            <h2 className="section__title">Credentials that back up our expertise</h2>
            <p>Proud member of leading professional accounting and tax organizations.</p>
          </div>
          <div className="about-credentials__grid">
            {credentials.map((credential) => (
              <div className="about-credential" key={credential.name}>
                <Image src={credential.src} alt={credential.name} width={180} height={80} />
                <span>{credential.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__content">
          <h2 className="section__title">
            Ready to simplify your taxes?
            <br />
            Start your journey today.
          </h2>
          <p>
            Schedule a free discovery call to see how we can help your business thrive with accurate bookkeeping and expert
            tax planning.
          </p>
          <Link
            className="about-cta__button"
            href="/contact"
            id="link_body_cta_book-introductory-call"
            data-analytics-id="link_body_cta_book-introductory-call"
          >
            Book a Free Introductory Call
          </Link>
        </div>
      </section>
    </>
  );
}
