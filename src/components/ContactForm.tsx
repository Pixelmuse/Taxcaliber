"use client";

import { useEffect, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

declare global {
  interface Window {
    __analyticsConsent?: boolean;
    dataLayer?: Array<Record<string, unknown>>;
    onTurnstileSuccess?: (token: string) => void;
    onTurnstileError?: () => void;
    onTurnstileExpired?: () => void;
  }
}

type ContactFormProps = {
  siteKey: string | undefined;
};

export default function ContactForm({ siteKey }: ContactFormProps) {
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [turnstileError, setTurnstileError] = useState<string>("");

  useEffect(() => {
    window.onTurnstileSuccess = (token: string) => {
      setTurnstileToken(token);
      setTurnstileError("");
    };
    window.onTurnstileError = () => {
      setTurnstileToken("");
      setTurnstileError("Turnstile verification failed. Please try again.");
    };
    window.onTurnstileExpired = () => {
      setTurnstileToken("");
      setTurnstileError("Verification expired. Please complete it again.");
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (siteKey && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification before submitting.");
      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(data?.error || "Request failed");
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
      setTurnstileToken("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong. Please try again or email us directly."
      );
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
          <option value="tax-preparation">Tax Preparation</option>
          <option value="payroll">Payroll Services</option>
          <option value="introductory-meeting">Schedule Introductory Meeting</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="form__full">
        Message
        <textarea className="textarea" name="message" required placeholder="How can we help you?" />
      </label>
      {siteKey ? (
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-theme="auto"
          data-size="flexible"
          data-callback="onTurnstileSuccess"
          data-error-callback="onTurnstileError"
          data-expired-callback="onTurnstileExpired"
        />
      ) : (
        <p className="status">Turnstile site key missing. Please set TURNSTILE_SITEKEY.</p>
      )}
      {turnstileError ? <p className="status">{turnstileError}</p> : null}
      <button
        className="btn-submit"
        type="submit"
        disabled={status === "loading" || (siteKey ? !turnstileToken : false)}
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
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
