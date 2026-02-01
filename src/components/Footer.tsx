import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link
              className="footer__logo"
              href="/"
              id="link_foot_cta_logo"
              data-analytics-id="link_foot_cta_logo"
              aria-label="TaxCaliber home"
            >
              <span className="footer__logo-mark" aria-hidden="true">
                <Image src="/images/taxcaliber-logo-140x140.png" alt="" width={46} height={46} />
              </span>
              <span className="footer__logo-text">TaxCaliber</span>
            </Link>
            <p>Virtual CPA and bookkeeping services for modern small businesses.</p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com"
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
                href="https://www.instagram.com"
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
                href="https://www.linkedin.com"
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
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <Link href="/about" id="link_foot_text_about" data-analytics-id="link_foot_text_about">
                About
              </Link>
            </p>
            <p>
              <Link href="/services" id="link_foot_text_services" data-analytics-id="link_foot_text_services">
                Services
              </Link>
            </p>
            <p>
              <Link href="/faq" id="link_foot_text_faq" data-analytics-id="link_foot_text_faq">
                FAQ
              </Link>
            </p>
            <p>
              <Link href="/contact" id="link_foot_text_contact" data-analytics-id="link_foot_text_contact">
                Contact
              </Link>
            </p>
          </div>
          <div>
            <h4>Legal</h4>
            <p>
              <Link href="/privacy" id="link_foot_text_privacy" data-analytics-id="link_foot_text_privacy">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link href="/terms" id="link_foot_text_terms" data-analytics-id="link_foot_text_terms">
                Terms of Service
              </Link>
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>19820 N 7th St. Ste 230</p>
            <p>Phoenix, AZ 85027</p>
            <p>
              <a href="tel:6028193395" id="link_foot_text_phone" data-analytics-id="link_foot_text_phone">
                602-819-3395
              </a>
            </p>
            <p>
              <a
                href="mailto:info@taxcaliber.com"
                id="link_foot_text_email"
                data-analytics-id="link_foot_text_email"
              >
                info@taxcaliber.com
              </a>
            </p>
          </div>
          <div>
            <h4>Start Here</h4>
            <p>Free 15-minute introductory meeting for new clients.</p>
            <Link
              className="button button--secondary"
              href="/contact"
              id="link_foot_cta_contact-us"
              data-analytics-id="link_foot_cta_contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="footer__fineprint">(c) 2026 TaxCaliber, LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
