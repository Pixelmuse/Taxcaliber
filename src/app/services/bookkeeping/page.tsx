import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Layers,
  LineChart,
  ListChecks,
  NotebookText,
  Receipt,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bookkeeping",
  description: "Monthly bookkeeping services with accurate reconciliations and reporting.",
  alternates: {
    canonical: "/services/bookkeeping",
  },
};

export default function BookkeepingPage() {
  return (
    <>
      <section className="page-hero page-hero--dark bookkeeping-hero">
        <div className="container bookkeeping-hero__inner">
          <div className="bookkeeping-hero__text">
            <span className="page-hero__eyebrow">Services</span>
            <h1 className="page-hero__title">
              Bookkeeping that keeps you <span className="page-hero__highlight">in control</span>
            </h1>
            <p className="page-hero__copy">
              Monthly reconciliations, clean reporting, and dependable support so your business stays on track.
            </p>
            <div className="bookkeeping-hero__actions">
              <a
                className="bookkeeping-hero__btn bookkeeping-hero__btn--primary"
                href="https://calendly.com/ruth-taxcaliber/15min"
                id="link_body_cta_book-meeting_bookkeeping"
                data-analytics-id="link_body_cta_book-meeting_bookkeeping"
                target="_blank"
                rel="noreferrer"
              >
                Book a Meeting <ArrowRight aria-hidden="true" />
              </a>
              <a className="bookkeeping-hero__btn bookkeeping-hero__btn--secondary" href="#packages">
                View Pricing
              </a>
            </div>
            <div className="bookkeeping-hero__trust">
              <span>
                <BadgeCheck aria-hidden="true" /> 100% US-based
              </span>
              <span>
                <ShieldCheck aria-hidden="true" /> Tax-ready clean books
              </span>
              <span>
                <CalendarCheck aria-hidden="true" /> Monthly check-ins
              </span>
            </div>
          </div>
          <div className="bookkeeping-hero__cards">
            <div className="bookkeeping-hero-card">
              <div className="bookkeeping-hero-card__label">Essentials</div>
              <div className="bookkeeping-hero-card__price">
                $250<span>/month</span>
              </div>
              <p>Up to 100 transactions, 2 accounts, monthly P&amp;L and balance sheet.</p>
            </div>
            <div className="bookkeeping-hero-card">
              <div className="bookkeeping-hero-card__label">Plus</div>
              <div className="bookkeeping-hero-card__price">
                $500<span>/month</span>
              </div>
              <p>Up to 200 transactions, 4 accounts, sales tax filing, light A/P &amp; A/R tracking.</p>
            </div>
            <div className="bookkeeping-hero-card">
              <div className="bookkeeping-hero-card__label">Pro</div>
              <div className="bookkeeping-hero-card__price">
                $800<span>+/month</span>
              </div>
              <p>Up to 400 transactions, payroll, custom reporting, monthly review meeting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bookkeeping-section">
        <div className="container">
          <span className="section__eyebrow">Packages</span>
          <h2 className="section__title">Monthly bookkeeping packages</h2>
          <p className="section__subtitle">
            We match scope to your volume so you get accurate books without paying for more than you need.
          </p>
          <div className="bookkeeping-table" id="packages">
            <div className="bookkeeping-table__head">
              <div>Feature</div>
              <div>
                <div className="bookkeeping-table__plan">Essentials</div>
                <div className="bookkeeping-table__price">$250/month</div>
              </div>
              <div>
                <div className="bookkeeping-table__plan">Plus</div>
                <div className="bookkeeping-table__price">$500/month</div>
              </div>
              <div>
                <div className="bookkeeping-table__plan">Pro</div>
                <div className="bookkeeping-table__price">$800/month</div>
              </div>
            </div>
            {[
              ["Monthly transaction categorization", "✓", "✓", "✓"],
              ["Monthly transaction limit", "Up to 100", "Up to 200", "Up to 400"],
              ["Bank & credit card reconciliations", "Up to 2 accounts", "Up to 4 accounts", "Multiple accounts"],
              ["Monthly P&L and balance sheet", "✓", "✓", "✓"],
              ["Year-end tax-ready financials", "✓", "✓", "✓"],
              ["Secure client portal", "✓", "✓", "✓"],
              ["Email support", "Standard", "Priority", "Priority"],
              ["Sales tax filing (single state)", "—", "✓", "✓"],
              ["Payroll processing", "—", "—", "✓"],
              ["Custom reporting", "—", "—", "✓"],
            ].map(([feature, essentials, plus, pro]) => (
              <div className="bookkeeping-table__row" key={feature}>
                <div>{feature}</div>
                <div>{essentials}</div>
                <div>{plus}</div>
                <div>{pro}</div>
              </div>
            ))}
          </div>
          <p className="bookkeeping-note">
            All packages include QuickBooks Online. If your volume consistently exceeds your tier, we&apos;ll recommend the
            right fit.
          </p>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <span className="section__eyebrow">Optional add-ons</span>
          <h2 className="section__title">Extend your package</h2>
          <p className="section__subtitle">
            Add-ons are quoted separately and layered in only when you need them.
          </p>
          <div className="bookkeeping-addons">
            {[
              { title: "Bookkeeping clean-up", icon: <RefreshCcw aria-hidden="true" />, text: "Catch-up work for months or years behind. Quoted per month of cleanup." },
              { title: "Additional accounts", icon: <Layers aria-hidden="true" />, text: "Extra bank or credit card accounts beyond your package limit." },
              { title: "Additional transactions", icon: <ListChecks aria-hidden="true" />, text: "Handle spikes or ongoing volume beyond your tier's monthly limit." },
              { title: "Additional rental properties", icon: <NotebookText aria-hidden="true" />, text: "Per-property tracking for real estate investors with multiple rentals." },
              { title: "QuickBooks setup", icon: <LineChart aria-hidden="true" />, text: "OOne-time setup or conversion to get your books configured properly." },
              { title: "1099 preparation & filing", icon: <FileText aria-hidden="true" />, text: "Annual contractor reporting and filing service." },
            ].map((addon) => (
              <div className="bookkeeping-addon" key={addon.title}>
                <div className="bookkeeping-addon__icon">{addon.icon}</div>
                <h3>{addon.title}</h3>
                <p>{addon.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bookkeeping-section">
        <div className="container">
          <div className="bookkeeping-detail">
            <span className="section__eyebrow">QuickBooks setup</span>
            <h2 className="section__title">QuickBooks Online setup</h2>
            <p className="section__subtitle">
              We configure your books the right way from day one, then hand you clean reporting and a consistent workflow.
            </p>
            <div className="bookkeeping-detail__grid">
              <div className="bookkeeping-detail__card">
                <h3>Base setup (Core) — $400–$600</h3>
                <p>Great for new or simple businesses with straightforward needs.</p>
                <ul>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Company settings &amp; preferences
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Chart of accounts tailored to your business
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Banking &amp; credit card connection walk-through
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Initial income &amp; expense setup
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Single-state sales tax setup
                  </li>
                </ul>
              </div>
              <div className="bookkeeping-detail__card">
                <h3>Enhanced setup — $600–$900</h3>
                <p>Ideal for multiple rentals, invoicing, or complex revenue streams.</p>
                <ul>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Everything in Base setup
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Class/location or project setup
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Custom reporting configuration
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> QuickBooks Online training walk-through
                  </li>
                  <li>
                    <CheckCircle2 aria-hidden="true" /> Payroll or additional feature orientation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bookkeeping-detail">
            <span className="section__eyebrow">Clean-up & catch-up</span>
            <h2 className="section__title">Get your books back on track</h2>
            <p className="section__subtitle">
              Behind on bookkeeping? We can clean up and reconcile your past records without judgment.
            </p>
            <div className="bookkeeping-cleanup">
              <div className="bookkeeping-cleanup__lists">
                <div>
                  <h3>What this service includes</h3>
                  <ul>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> Review of your current setup
                    </li>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> Cleanup of misclassified transactions
                    </li>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> Bank &amp; credit card reconciliations
                    </li>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> Corrected financial reports
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Who this is for</h3>
                  <ul>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> You&apos;re behind on bookkeeping
                    </li>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> You have messy or inconsistent records
                    </li>
                    <li>
                      <CheckCircle2 aria-hidden="true" /> You need tax-ready books quickly
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bookkeeping-cleanup__card">
                <div className="bookkeeping-cleanup__tag">Starting investment</div>
                <div className="bookkeeping-cleanup__price">
                  $300 <span>per month of clean-up</span>
                </div>
                <a
                  className="bookkeeping-cleanup__cta"
                  href="https://calendly.com/ruth-taxcaliber/15min"
                  id="link_body_cta_book-cleanup"
                  data-analytics-id="link_body_cta_book-cleanup"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Your Cleanup
                </a>
                <div className="bookkeeping-cleanup__note">
                  <ShieldCheck aria-hidden="true" />
                  Secure assessment &amp; consultation
                </div>
              </div>
            </div>
          </div>

          <div className="bookkeeping-why">
            <span className="section__eyebrow">Why TaxCaliber</span>
            <h2 className="section__title">Why clients choose us</h2>
            <div className="bookkeeping-why__grid">
              {[
                {
                  title: "US-based, fully virtual firm",
                  text: "Your data stays in the US. Work with us from anywhere—no office visits needed.",
                },
                {
                  title: "Clear scope & transparent pricing",
                  text: "No hidden fees. You know exactly what you’re paying for before work begins.",
                },
                {
                  title: "Detail-focused, methodical approach",
                  text: "Every transaction categorized correctly. Every reconciliation checked.",
                },
                {
                  title: "Books prepared with tax accuracy",
                  text: "Year-end financials ready for your CPA—or we can handle tax prep too.",
                },
              ].map((item) => (
                <div className="bookkeeping-why__card" key={item.title}>
                  <div className="bookkeeping-why__icon">
                    <ShieldCheck aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__content">
          <h2>
            Ready to simplify your bookkeeping?
            <br />
            Start your journey today.
          </h2>
          <p>
            Start with a free 15-minute call. No obligation—just a chance to see if we&apos;re the right fit for your
            business.
          </p>
          <div className="services-cta__actions">
            <a
              className="services-cta__button"
              href="https://calendly.com/ruth-taxcaliber/15min"
              id="link_body_cta_book-meeting_bookkeeping-bottom"
              data-analytics-id="link_body_cta_book-meeting_bookkeeping-bottom"
              target="_blank"
              rel="noreferrer"
            >
              Get a Custom Quote
            </a>
            <Link className="services-cta__button services-cta__button--ghost" href="/services">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
