import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Taxcaliber privacy policy and data usage practices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__content">
          <span className="about-tag">Privacy</span>
          <h1>Privacy Policy</h1>
          <p>Effective Date: February 1, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="legal-intro">
            Taxcaliber, LLC ("Taxcaliber", "we", "us", or "our") values your privacy. This Privacy Policy explains how we
            collect, use, and protect information when you visit https://taxcaliber.com (the "Site").
          </p>

          <h2 className="legal-heading">Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul className="list-check">
            <li>Information submitted through contact forms (such as name, email address, and message content).</li>
          </ul>
          <h3>Automatically Collected Information</h3>
          <ul className="list-check">
            <li>Usage data such as pages visited, referring sources, and general site interaction patterns.</li>
          </ul>

          <h2 className="legal-heading">Analytics & Tracking</h2>
          <p>
            We use Google Analytics via Google Tag Manager to understand how visitors use our Site and where traffic comes
            from. This data is aggregated and used solely to improve the Site experience.
          </p>

          <h2 className="legal-heading">Cookies</h2>
          <p>The Site uses limited cookies for functionality and analytics:</p>
          <ul className="list-check">
            <li>_ga - Google Analytics cookie used to distinguish users.</li>
            <li>klaro - Cookie used by Klaro Consent Management to store your consent preferences.</li>
          </ul>
          <p>We do not use cookies for advertising, remarketing, or third-party marketing.</p>

          <h2 className="legal-heading">Consent Management</h2>
          <p>
            We use Klaro to manage cookie consent. You may accept or decline non-essential cookies at any time through the
            consent banner.
          </p>

          <h2 className="legal-heading">Email Communications</h2>
          <p>
            Contact form submissions are delivered using Resend, an email delivery service. Resend may process submitted
            data solely for message delivery. We do not knowingly use Resend for marketing automation or tracking.
          </p>

          <h2 className="legal-heading">How We Use Information</h2>
          <ul className="list-check">
            <li>Respond to inquiries.</li>
            <li>Improve website performance and usability.</li>
            <li>Monitor traffic trends and site usage.</li>
          </ul>

          <h2 className="legal-heading">Data Sharing</h2>
          <p>
            We do not sell, rent, or trade your personal information. Data is only shared with service providers necessary
            to operate the Site (e.g., analytics, email delivery).
          </p>

          <h2 className="legal-heading">Data Security</h2>
          <p>
            We take reasonable administrative and technical steps to protect your information. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="legal-heading">Your Rights</h2>
          <p>
            Depending on your location, you may have rights to request access to your personal information or request
            correction or deletion of your data. To make a request, contact us using the information below.
          </p>

          <h2 className="legal-heading">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised
            effective date.
          </p>

          <h2 className="legal-heading">Contact Information</h2>
          <p>
            Taxcaliber, LLC
            <br />
            19820 N 7th St. Ste 230
            <br />
            Phoenix, AZ 85027
            <br />
            Phone: 602-819-3395
          </p>
        </div>
      </section>
    </>
  );
}
