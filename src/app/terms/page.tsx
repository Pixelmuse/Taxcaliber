import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Taxcaliber terms of service and usage guidelines.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__content">
          <span className="about-tag">Terms</span>
          <h1>Terms and Conditions</h1>
          <p>Effective Date: February 1, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-content">
          <p className="legal-intro">
            Welcome to https://taxcaliber.com (the "Site"), operated by Taxcaliber, LLC ("Taxcaliber", "we", "us", or
            "our"). By accessing this Site, you agree to the following Terms and Conditions.
          </p>

          <h2 className="legal-heading">Website Use</h2>
          <p>
            This Site provides general information about bookkeeping, tax preparation, and accounting services. Content is
            provided for informational purposes only and does not constitute legal, tax, or financial advice.
          </p>

          <h2 className="legal-heading">No Client Relationship</h2>
          <p>
            Use of this Site or submission of a contact form does not create a CPA-client, accountant-client, or advisory
            relationship. A formal engagement agreement must be executed before services are provided.
          </p>

          <h2 className="legal-heading">Accuracy of Information</h2>
          <p>
            While we strive to keep information accurate and up to date, we make no guarantees regarding completeness or
            accuracy. Tax laws and regulations change frequently.
          </p>

          <h2 className="legal-heading">Intellectual Property</h2>
          <p>
            All content on this Site, including text, graphics, logos, and design elements, is the property of Taxcaliber,
            LLC and may not be copied or reused without written permission.
          </p>

          <h2 className="legal-heading">Limitation of Liability</h2>
          <p>
            Taxcaliber is not liable for any direct or indirect damages arising from use of this Site or reliance on its
            content.
          </p>

          <h2 className="legal-heading">External Links</h2>
          <p>
            This Site may contain links to third-party websites. We are not responsible for the content or privacy
            practices of those sites.
          </p>

          <h2 className="legal-heading">Privacy</h2>
          <p>Use of this Site is also governed by our Privacy Policy.</p>

          <h2 className="legal-heading">Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Arizona, without regard to conflict of law principles.</p>

          <h2 className="legal-heading">Changes to Terms</h2>
          <p>We may update these Terms at any time. Continued use of the Site constitutes acceptance of the updated Terms.</p>

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
