"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

declare global {
  interface Window {
    __analyticsConsent?: boolean;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setMessage("Thanks! Your message has been sent. We'll reply within 1-2 business days.");
      if (window.__analyticsConsent !== false) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "form_submit_success",
          form_id: "form_contact_main",
          timestamp: new Date().toISOString(),
        });
      }
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <form className="form contact-form" onSubmit={handleSubmit} id="form_contact_main" data-analytics-id="form_contact_main">
      <div className="form__row">
        <label>
          Full Name
          <input className="input" name="name" required placeholder="John Smith" />
        </label>
        <label>
          Email Address
          <input className="input" name="email" type="email" required placeholder="you@email.com" />
        </label>
      </div>
      <label className="form__full">
        Subject
        <select className="select" name="subject" defaultValue="" required>
          <option value="" disabled>
            Select a topic
          </option>
          <option value="general">General Inquiry</option>
          <option value="bookkeeping">Monthly Bookkeeping</option>
          <option value="tax-prep">Tax Preparation</option>
          <option value="payroll">Payroll Services</option>
          <option value="consultation">Schedule Consultation</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="form__full">
        Message
        <textarea className="textarea" name="message" required placeholder="How can we help you?" />
      </label>
      <button
        className="btn-submit"
        type="submit"
        disabled={status === "loading"}
        id="btn_contact_submit"
        data-analytics-id="btn_contact_submit"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {message ? (
        <p
          className="status"
          id={status === "success" ? "contact_success_message" : undefined}
          data-analytics-id={status === "success" ? "contact_success_message" : undefined}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
