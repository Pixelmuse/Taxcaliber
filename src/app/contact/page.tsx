import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import { Handshake, MessageCircle, ShieldCheck, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Taxcaliber | Virtual CPA Services",
  description: "Schedule a free consultation to discuss your tax and bookkeeping needs. Virtual CPA serving clients nationwide. Call 602-819-3395.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">Contact</span>
          <h1 className="page-hero__title">Let&apos;s start the conversation</h1>
          <p className="page-hero__copy">
            Have questions about our services or ready to schedule an introductory meeting? We&apos;re here to help you simplify your
            finances with expert guidance.
          </p>
          <div className="contact-hero__stats">
            <div className="contact-stat">
              <span className="contact-stat__number">{"\u003c"} 24hrs</span>
              <span className="contact-stat__label">Average response time</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat__number">100%</span>
              <span className="contact-stat__label">Free introductory meeting</span>
            </div>
            <div className="contact-stat">
              <span className="contact-stat__number">15min</span>
              <span className="contact-stat__label">introductory meeting length</span>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-card">
            <h2 className="section__title">Contact Information</h2>
            <p>
              Reach out through any channel that works best for you. We&apos;re available Monday through Friday to answer your
              questions.
            </p>
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <span className="material-icons">location_on</span>
              </div>
              <div>
                <h3>Office Address</h3>
                <p>
                  19820 N 7th St. Ste 230
                  <br />
                  Phoenix, AZ 85027
                </p>
                <p> <strong>* Visits by appointment only</strong></p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <span className="material-icons">call</span>
              </div>
              <div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:6028193395" id="link_body_text_phone" data-analytics-id="link_body_text_phone">
                    602-819-3395
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <span className="material-icons">email</span>
              </div>
              <div>
                <h3>Email</h3>
                <p>
                  <a
                    href="mailto:info@taxcaliber.com"
                    id="link_body_text_email"
                    data-analytics-id="link_body_text_email"
                  >
                    info@taxcaliber.com
                  </a>
                </p>
              </div>
            </div>
            <div className="contact-availability">
              <h4>
                <span className="material-icons" aria-hidden="true">
                  schedule
                </span>
                Business Hours
              </h4>
              <p>Mon-Fri from 8am to 5pm MST</p>
            </div>
          </div>
          <div className="contact-form-card">
            <h2 className="section__title">Send us a message</h2>
            <p>Fill out the form below and we&apos;ll respond within 1-2 business days.</p>
            <ContactForm siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY} />
          </div>
        </div>
      </section>

      <section className="contact-trust">
        <div className="container contact-trust__content">
          <span className="section__eyebrow">Why choose us</span>
          <h2 className="section__title">Trusted by businesses across Arizona</h2>
          <div className="contact-trust__grid">
            <div className="contact-trust__item">
              <div className="contact-trust__icon" aria-hidden="true">
                <Target />
              </div>
              <h3>Judgment-free</h3>
              <p>We are here to help, not judge. Whatever your financial situation, we&apos;ll guide you forward.</p>
            </div>
            <div className="contact-trust__item">
              <div className="contact-trust__icon" aria-hidden="true">
                <MessageCircle />
              </div>
              <h3>Clear communication</h3>
              <p>No confusing jargon. We explain things in plain language you can understand.</p>
            </div>
            <div className="contact-trust__item">
              <div className="contact-trust__icon" aria-hidden="true">
                <Handshake />
              </div>
              <h3>Responsive support</h3>
              <p>Quick replies and ongoing availability mean you are never left wondering.</p>
            </div>
            <div className="contact-trust__item">
              <div className="contact-trust__icon" aria-hidden="true">
                <ShieldCheck />
              </div>
              <h3>Secure & compliant</h3>
              <p>Bank-level security and full compliance give you peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-faq">
        <div className="container contact-faq__content">
          <span className="section__eyebrow">Quick answers</span>
          <h2 className="section__title">Frequently asked questions</h2>
          <div className="contact-faq__item">
            <h3>How quickly will I hear back?</h3>
            <p>We respond to all inquiries within 1-2 business days, and often sooner during business hours.</p>
          </div>
          <div className="contact-faq__item">
            <h3>Is the introductory meeting really free?</h3>
            <p>Yes. We offer a complimentary 15-minute introductory meeting to discuss your needs and see if we are a good fit.</p>
          </div>
          <div className="contact-faq__item">
            <h3>Do you work with clients outside Arizona?</h3>
            <p>Absolutely. While we are based in Phoenix, we serve clients nationwide through our virtual platform.</p>
          </div>
          <div className="contact-faq__item">
            <h3>What happens after I submit this form?</h3>
            <p>We will review your message and reach out within 1-2 business days to continue the conversation.</p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
