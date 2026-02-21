import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Layers,
  Mail,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  XCircle,
  Home,
} from "lucide-react";
import CalendlyPopupLink from "@/components/CalendlyPopupLink";
export const metadata: Metadata = {
  title: "Small Business Tax Preparation | Taxcaliber CPA",
  description: "Individual and business tax prep with expert guidance. Rental properties, S-corps, gig workers. Nationwide service, personalized support.",
  alternates: {
    canonical: "/services/tax-preparation",
  },
};

export default function TaxPrepPage() {
  return (
    <>
      <section className="tax-prep-hero">
        <div className="tax-prep-hero__inner container">
          <div className="tax-prep-hero__text">
            <h1>
              Tax preparation that feels <em>clear and calm</em>
            </h1>
            <p>
              Expert tax preparation for individuals and small businesses. Specialists in rental properties, self-employment,
              S-Corps, and gig income. Virtual, US-based, judgment-free.
            </p>
            <div className="tax-prep-hero__cta">
              <a
                className="tax-prep-hero__btn tax-prep-hero__btn--primary"
                href="https://calendly.com/ruth-taxcaliber/15min"
                id="link_body_cta_book-meeting_taxprep"
                data-analytics-id="link_body_cta_book-meeting_taxprep"
                target="_blank"
                rel="noreferrer"
              >
                Book a Meeting <span className="tax-prep-hero__btn-arrow">→</span>
              </a>
              <a className="tax-prep-hero__btn tax-prep-hero__btn--secondary" href="#pricing">
                View Pricing
              </a>
            </div>
            <div className="tax-prep-hero__trust">
              <div className="tax-prep-hero__trust-item">
                <Check className="tax-prep-hero__trust-icon" aria-hidden="true" />
                <span>100% US-based</span>
              </div>
              <div className="tax-prep-hero__trust-item">
                <Check className="tax-prep-hero__trust-icon" aria-hidden="true" />
                <span>Bank-Level Security</span>
              </div>
              <div className="tax-prep-hero__trust-item">
                <Check className="tax-prep-hero__trust-icon" aria-hidden="true" />
                <span>No Surprise Fees</span>
              </div>
            </div>
          </div>
          <div className="tax-prep-hero__summary">
            <h3>What&apos;s Included</h3>
            <div className="tax-prep-hero__summary-item">
              <Check className="tax-prep-hero__summary-icon" aria-hidden="true" />
              <span>Federal & applicable state returns</span>
            </div>
            <div className="tax-prep-hero__summary-item">
              <Check className="tax-prep-hero__summary-icon" aria-hidden="true" />
              <span>Income, deductions & credits review</span>
            </div>
            <div className="tax-prep-hero__summary-item">
              <Check className="tax-prep-hero__summary-icon" aria-hidden="true" />
              <span>Secure e-filing & document delivery</span>
            </div>
            <div className="tax-prep-hero__summary-item">
              <Check className="tax-prep-hero__summary-icon" aria-hidden="true" />
              <span>Clear fee estimate before work begins</span>
            </div>
            <div className="tax-prep-hero__summary-item">
              <Check className="tax-prep-hero__summary-icon" aria-hidden="true" />
              <span>Direct communication if anything is missing</span>
            </div>
          </div>
        </div>
      </section>

      <div className="tax-prep-wrap">
        <section className="tax-prep-section">
          <span className="tax-prep-section__label">Who We Serve</span>
          <h2 className="section__title">Tax prep built around your situation</h2>
          <p className="tax-prep-section__desc">
            We prepare returns for individuals and small businesses with more than just a simple W-2, though we are happy to
            help with those too.
          </p>
          <div className="tax-prep-cards">
            <div className="tax-prep-card">
              <div className="tax-prep-card__icon tax-prep-card__icon--purple" aria-hidden="true">
                <span className="material-icons">person</span>
              </div>
              <h4>Individual Tax Returns</h4>
              <p>For taxpayers with complex or non-traditional income and filing needs.</p>
              <span className="tax-prep-card__chip">Starting at $350</span>
            </div>
            <div className="tax-prep-card">
              <div className="tax-prep-card__icon tax-prep-card__icon--green" aria-hidden="true">
                <span className="material-icons">storefront</span>
              </div>
              <h4>Small Business Returns</h4>
              <p>Sole proprietors, single-member LLCs, and S-Corps. Cleaner with bookkeeping, not required.</p>
              <span className="tax-prep-card__chip">S-Corps from $750</span>
            </div>
          </div>
        </section>

        <section className="tax-prep-section">
          <span className="tax-prep-section__label">Specialties</span>
          <h2 className="section__title">Income types we know well</h2>
          <p className="tax-prep-section__desc">
            Our experience covers the situations that most firms fumble. If your taxes feel complicated, you are in the
            right place.
          </p>
          <div className="tax-prep-tags">
            <div className="tax-prep-tag">
              <Home className="tax-prep-tag__icon" aria-hidden="true" />
              Rental Properties
            </div>
            <div className="tax-prep-tag">
              <Building2 className="tax-prep-tag__icon" aria-hidden="true" />
              Airbnb & Short-Term Rentals
            </div>
            <div className="tax-prep-tag">
              <Briefcase className="tax-prep-tag__icon" aria-hidden="true" />
              Self-Employed & Freelancers
            </div>
            <div className="tax-prep-tag">
              <Sparkles className="tax-prep-tag__icon" aria-hidden="true" />
              Gig Economy Income
            </div>
            <div className="tax-prep-tag">
              <MonitorSmartphone className="tax-prep-tag__icon" aria-hidden="true" />
              Social Media & Online Income
            </div>
            <div className="tax-prep-tag">
              <Layers className="tax-prep-tag__icon" aria-hidden="true" />
              Multiple Income Sources / States
            </div>
            <div className="tax-prep-tag">
              <FileText className="tax-prep-tag__icon" aria-hidden="true" />
              Schedule C Activity
            </div>
            <div className="tax-prep-tag">
              <ShieldCheck className="tax-prep-tag__icon" aria-hidden="true" />
              Accurate & Compliant Filing
            </div>
          </div>
        </section>

        <section className="tax-prep-section">
          <span className="tax-prep-section__label">How It Works</span>
          <h2 className="section__title">Our tax preparation process</h2>
          <p className="tax-prep-section__desc">Straightforward from start to finish. No unnecessary back-and-forth.</p>
          <div className="tax-prep-steps">
            <div className="tax-prep-step">
              <div className="tax-prep-step__number">1</div>
              <div>
                <h4>Introductory Meeting</h4>
                <p>A brief call to discuss your situation, evaluate the return needed, and determine scope.</p>
              </div>
            </div>
            <div className="tax-prep-step">
              <div className="tax-prep-step__number">2</div>
              <div>
                <h4>Engagement & Fee Estimate</h4>
                <p>You receive an engagement letter and a clear fee estimate based on what was discussed.</p>
              </div>
            </div>
            <div className="tax-prep-step">
              <div className="tax-prep-step__number">3</div>
              <div>
                <h4>Document Upload</h4>
                <p>Securely upload documents through our client portal. We flag anything missing.</p>
              </div>
            </div>
            <div className="tax-prep-step">
              <div className="tax-prep-step__number">4</div>
              <div>
                <h4>Review & Preparation</h4>
                <p>Your return is prepared carefully using the information provided.</p>
              </div>
            </div>
            <div className="tax-prep-step">
              <div className="tax-prep-step__number">5</div>
              <div>
                <h4>Final Review & Filing</h4>
                <p>You review and electronically sign your return before it is filed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="tax-prep-section" id="pricing">
          <span className="tax-prep-section__label">Pricing</span>
          <h2 className="section__title">What to expect to pay</h2>
          <p className="tax-prep-section__desc">
            Fees vary based on the complexity of your return. A clear estimate is always provided before any work begins.
          </p>
          <div className="tax-prep-pricing">
            <table>
              <thead>
                <tr>
                  <th>Return Type</th>
                  <th>Starting At</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individual - Federal + Home State</td>
                  <td>from $350</td>
                </tr>
                <tr>
                  <td>Additional State Return</td>
                  <td>$50 each</td>
                </tr>
                <tr>
                  <td>Federal + 1 Sole Proprietor / Schedule C</td>
                  <td>from $550</td>
                </tr>
                <tr>
                  <td>Federal + 1 Rental Property</td>
                  <td>from $550</td>
                </tr>
                <tr>
                  <td>Each Additional Rental Property</td>
                  <td>$100 each</td>
                </tr>
                <tr>
                  <td>S-Corporation Return</td>
                  <td>from $750</td>
                </tr>
              </tbody>
            </table>
            <p className="tax-prep-pricing__note">
              Pricing starts at the amounts shown and is based on complexity and documentation provided.
            </p>
          </div>
        </section>

        <section className="tax-prep-section">
          <span className="tax-prep-section__label">Scope</span>
          <h2 className="section__title">What is in - and what is not</h2>
          <p className="tax-prep-section__desc">
            Keeping scope clear means no confusion and no unexpected charges. Additional services are always available under
            a separate engagement.
          </p>
          <div className="tax-prep-scope">
            <div className="tax-prep-scope__box tax-prep-scope__box--include">
              <h4>Tax Prep Includes</h4>
              <ul>
                <li>
                  <CheckCircle2 className="tax-prep-scope__icon tax-prep-scope__icon--include" aria-hidden="true" />
                  <span>Preparation of federal and applicable state returns</span>
                </li>
                <li>
                  <CheckCircle2 className="tax-prep-scope__icon tax-prep-scope__icon--include" aria-hidden="true" />
                  <span>Review of income, deductions, and credits</span>
                </li>
                <li>
                  <CheckCircle2 className="tax-prep-scope__icon tax-prep-scope__icon--include" aria-hidden="true" />
                  <span>Secure electronic filing and document delivery</span>
                </li>
              </ul>
            </div>
            <div className="tax-prep-scope__box tax-prep-scope__box--exclude">
              <h4>Not Included</h4>
              <ul>
                <li>
                  <XCircle className="tax-prep-scope__icon tax-prep-scope__icon--exclude" aria-hidden="true" />
                  <span>Bookkeeping or expense organization</span>
                </li>
                <li>
                  <XCircle className="tax-prep-scope__icon tax-prep-scope__icon--exclude" aria-hidden="true" />
                  <span>Record reconstruction or clean-up</span>
                </li>
                <li>
                  <XCircle className="tax-prep-scope__icon tax-prep-scope__icon--exclude" aria-hidden="true" />
                  <span>Payroll processing or payroll tax filings</span>
                </li>
                <li>
                  <XCircle className="tax-prep-scope__icon tax-prep-scope__icon--exclude" aria-hidden="true" />
                  <span>Sales tax filings or amendments</span>
                </li>
                <li>
                  <XCircle className="tax-prep-scope__icon tax-prep-scope__icon--exclude" aria-hidden="true" />
                  <span>IRS audit representation</span>
                </li>
              </ul>
              <p className="tax-prep-scope__note">Any of the above can be arranged under a separate engagement.</p>
            </div>
          </div>
        </section>

        <section className="tax-prep-section">
          <div className="tax-prep-expectations">
            <h3>A Few Honest Things to Know</h3>
            <p>
              We want to be upfront so expectations are aligned from the start. In some situations, we may not be the right
              fit or we may need to adjust our approach.
            </p>
            <div className="tax-prep-expectations__grid">
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Returns requiring significant record reconstruction before filing</span>
              </div>
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Last-minute filings where extensions are not an option</span>
              </div>
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Partnerships, multi-member LLCs, or C-Corporations (not currently accepting)</span>
              </div>
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Multi-state sales tax compliance or filings</span>
              </div>
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Incomplete or unavailable documentation</span>
              </div>
              <div className="tax-prep-expectations__item">
                <ArrowRight className="tax-prep-expectations__icon" aria-hidden="true" />
                <span>Aggressive or unsupported tax positions</span>
              </div>
            </div>
            <p className="tax-prep-expectations__note">
              Many of these situations can still be addressed through extensions, phased clean-up, or a separate
              engagement. We are happy to talk it through during a free introductory call.
            </p>
          </div>
        </section>

        <section className="tax-prep-section">
          <span className="tax-prep-section__label">Why TaxCaliber</span>
          <h2 className="section__title">Why clients choose us</h2>
          <div className="tax-prep-why">
            <div className="tax-prep-why__card">
              <BadgeCheck className="tax-prep-why__icon" aria-hidden="true" />
              <div>
                <h5>CPA & Enrolled Agent-led</h5>
                <p>Professional credentials that mean your return is in experienced, qualified hands.</p>
              </div>
            </div>
            <div className="tax-prep-why__card">
              <Globe className="tax-prep-why__icon" aria-hidden="true" />
              <div>
                <h5>100% US-Based & Virtual</h5>
                <p>Your data stays in the US. Work with us from anywhere - no office visits needed.</p>
              </div>
            </div>
            <div className="tax-prep-why__card">
              <MessageSquare className="tax-prep-why__icon" aria-hidden="true" />
              <div>
                <h5>Clear Communication</h5>
                <p>No jargon. We explain what is happening and why, in language that makes sense.</p>
              </div>
            </div>
            <div className="tax-prep-why__card">
              <Sparkles className="tax-prep-why__icon" aria-hidden="true" />
              <div>
                <h5>Detail-Focused, No Judgment</h5>
                <p>Rentals, gig income, messy records - we have seen it all. We are here to help.</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <section className="services-cta">
        <div className="container services-cta__content">
          <h2 className="section__title">Ready to simplify your taxes?</h2>
          <p>Start with a free 15-minute introductory meeting. No obligation - just a chance to see if we are the right fit.</p>
          <div className="services-cta__actions">
            <CalendlyPopupLink
              className="services-cta__button"
              id="link_body_cta_book-meeting_bottom"
              analyticsId="link_body_cta_book-meeting_bottom"
            >
              Get a Custom Quote
            </CalendlyPopupLink>
            <Link
              className="services-cta__button services-cta__button--ghost"
              href="/services"
              id="link_body_cta_view-services"
              data-analytics-id="link_body_cta_view-services"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
