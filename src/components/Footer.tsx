import Image from "next/image";
import Link from "next/link";
import CalendlyPopupLink from "@/components/CalendlyPopupLink";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <section className="footer__col footer__col--brand" aria-labelledby="footer-brand-title">
            <Link
              className="footer__logo"
              href="/"
              id="link_foot_cta_logo"
              data-analytics-id="link_foot_cta_logo"
              aria-label="Taxcaliber home"
            >
              <span className="footer__logo-mark" aria-hidden="true">
                <Image src="/images/taxcaliber-logo-140x140.png" alt="" width={46} height={46} />
              </span>
              <span className="footer__logo-text">Taxcaliber</span>
            </Link>
            <p className="footer__brand-blurb" id="footer-brand-title">
              Virtual CPA and bookkeeping services for modern small businesses.
            </p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/TaxcaliberLLC"
                target="_blank"
                rel="noopener noreferrer"
                id="link_foot_logo_facebook"
                data-analytics-id="link_foot_logo_facebook"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.03 3.66 9.2 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.25 0-1.64.78-1.64 1.57v1.88h2.79l-.45 2.91h-2.34V22c4.78-.74 8.44-4.91 8.44-9.94z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/taxcaliberllc/"
                target="_blank"
                rel="noopener noreferrer"
                id="link_foot_logo_instagram"
                data-analytics-id="link_foot_logo_instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
                    fill="currentColor"
                  />
                  <path
                    d="M17.2 3H6.8A3.8 3.8 0 0 0 3 6.8v10.4A3.8 3.8 0 0 0 6.8 21h10.4a3.8 3.8 0 0 0 3.8-3.8V6.8A3.8 3.8 0 0 0 17.2 3zm2 14.2a2 2 0 0 1-2 2H6.8a2 2 0 0 1-2-2V6.8a2 2 0 0 1 2-2h10.4a2 2 0 0 1 2 2z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/taxcaliberllc/"
                target="_blank"
                rel="noopener noreferrer"
                id="link_foot_logo_linkedin"
                data-analytics-id="link_foot_logo_linkedin"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M6.94 8.5H4.1V20h2.84V8.5zM5.52 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3zM20 13.2c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4v-1.2H11.3V20h2.84v-5.7c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20H20v-6.8z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </section>

          <nav className="footer__col footer__col--explore" aria-labelledby="footer-explore-heading">
            <h4 className="footer__column-title" id="footer-explore-heading">
              Explore
            </h4>
            <ul className="footer__links">
              <li>
                <Link href="/about" id="link_foot_text_about" data-analytics-id="link_foot_text_about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" id="link_foot_text_services" data-analytics-id="link_foot_text_services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/faq" id="link_foot_text_faq" data-analytics-id="link_foot_text_faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" id="link_foot_text_contact" data-analytics-id="link_foot_text_contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <section className="footer__col footer__col--contact" aria-labelledby="footer-contact-heading">
            <h4 className="footer__column-title" id="footer-contact-heading">
              Contact
            </h4>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle cx="12" cy="10" r="3" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  19820 N 7th St. Ste 230
                  <br />
                  Phoenix, AZ 85027
                </div>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <a href="tel:6028193395" id="link_foot_text_phone" data-analytics-id="link_foot_text_phone">
                  602-819-3395
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <a href="mailto:info@taxcaliber.com" id="link_foot_text_email" data-analytics-id="link_foot_text_email">
                  info@taxcaliber.com
                </a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="7" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
                    <line x1="12" y1="12" x2="15" y2="14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span>Mon-Fri, 8am-5pm MST</span>
              </div>
            </div>
            <div className="footer__contact-cta">
              <CalendlyPopupLink
                className="footer__action footer__action--primary"
                id="link_foot_cta_book-meeting"
                analyticsId="link_foot_cta_book-meeting"
              >
                Book a Meeting
              </CalendlyPopupLink>
            </div>
          </section>
        </div>

        <div className="footer__bottom">
          <div className="footer__fineprint">&copy; {currentYear} TaxCaliber, LLC. All rights reserved.</div>
          <div className="footer__legal">
            <Link href="/privacy" id="link_foot_text_privacy" data-analytics-id="link_foot_text_privacy">
              Privacy Policy
            </Link>
            <Link href="/terms" id="link_foot_text_terms" data-analytics-id="link_foot_text_terms">
              Terms of Service
            </Link>
            <a
              href="https://taxcaliber.taxdome.com/login"
              target="_blank"
              rel="noopener noreferrer"
              id="link_foot_cta_client-login"
              data-analytics-id="link_foot_cta_client-login"
            >
              Client Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
