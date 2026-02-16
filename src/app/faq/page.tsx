import type { Metadata } from "next";
import FaqClient from "@/components/FaqClient";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Tax & Bookkeeping FAQs | Taxcaliber",
  description: "Common questions about our virtual bookkeeping, tax prep, and services. Learn how Taxcaliber helps businesses nationwide.",
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
    question: "Do you offer a free introductory meeting?",
    answer:
      "Yes. We offer a free 15-minute introductory meeting for all new potential clients.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="container page-hero__content">
          <span className="page-hero__eyebrow">FAQ</span>
          <h1 className="page-hero__title">
            Hi, <span className="page-hero__highlight">how can we help?</span>
          </h1>
          <p className="page-hero__copy">
            We want you to feel confident before you reach out. Here are the most common questions we hear from new
            clients.
          </p>

        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <FaqClient items={faqs} />
        </div>
      </section>

      <CTA />
    </>
  );
}
