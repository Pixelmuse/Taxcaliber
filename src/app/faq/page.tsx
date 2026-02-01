import type { Metadata } from "next";
import Link from "next/link";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Taxcaliber's virtual CPA and bookkeeping services.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "Are you US-based?",
    answer:
      "Yes. All services are handled within the United States and never outsourced. We are based in Phoenix, Arizona and serve clients nationwide.",
  },
  {
    question: "Do you work with clients outside your home state?",
    answer:
      "Absolutely. Our virtual setup means we can provide the same excellent service no matter where you are located.",
  },
  {
    question: "I am behind on bookkeeping - can you help?",
    answer:
      "Yes, we specialize in catch-up bookkeeping. We can bring your books current and prepare clean financials so you can move forward with confidence.",
  },
  {
    question: "Do you offer monthly bookkeeping packages?",
    answer:
      "Yes. We offer custom monthly bookkeeping packages based on transaction volume and complexity, with transparent pricing.",
  },
  {
    question: "Can you handle payroll?",
    answer:
      "Yes. We provide payroll setup, compliance, and recurring payroll processing that integrates with your bookkeeping.",
  },
  {
    question: "What software do you use?",
    answer: "We primarily work with QuickBooks Online.",
  },
  {
    question: "How do I send documents securely?",
    answer:
      "We use secure, encrypted file-sharing methods and a client portal for sensitive documents.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes. We offer a free 15-minute discovery call for all new potential clients.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="faq-hero">
        <div className="container faq-hero__content">
          <span className="faq-tag">FAQ</span>
          <h1>
            Hi, <span className="faq-gradient">how can we help?</span>
          </h1>
          <p>
            We want you to feel confident before you reach out. Here are the most common questions we hear from new
            clients.
          </p>
          <div className="faq-hero__card">
            <h3>Still unsure?</h3>
            <p>Reach out and we will point you in the right direction, even if we are not the perfect fit.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <FaqClient items={faqs} />
        </div>
      </section>

      <section className="faq-cta">
        <div className="container faq-cta__content">
          <h2>
            Ready to simplify your taxes?
            <br />
            Start your journey today.
          </h2>
          <p>
            Schedule a free discovery call to see how we can help your business thrive with accurate bookkeeping and expert
            tax planning.
          </p>
          <Link className="faq-cta__button" href="/contact">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
