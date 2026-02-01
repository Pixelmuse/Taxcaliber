import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const isValidPayload = (payload: ContactPayload) =>
  payload.name.trim() && payload.email.trim() && payload.subject.trim() && payload.message.trim();

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!isValidPayload(payload)) {
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    const toEmail = process.env.RESEND_TO_EMAIL;

    if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
      return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 });
    }

    const subjectLine = `Taxcaliber Contact: ${payload.subject}`;
    const textBody = `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\n${payload.message}`;

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject: subjectLine,
      text: textBody,
      html: `
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Subject:</strong> ${payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 });
  }
}
