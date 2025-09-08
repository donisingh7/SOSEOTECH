// Vercel serverless function: POST /api/contact
// Expects JSON: { name, email, phone?, message }

import nodemailer from "nodemailer";

// tiny helper
const nl2br = (s = "") => String(s).replace(/\n/g, "<br/>");

export default async function handler(req, res) {
  // CORS (safe even if same-origin)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Read SMTP creds (accept EMAIL_* or legacy SMTP_* just in case)
    const EMAIL_USER = process.env.EMAIL_USER || process.env.SMTP_USER || "";
    const EMAIL_PASS = process.env.EMAIL_PASS || process.env.SMTP_PASS || "";
    const CONTACT_TO = process.env.CONTACT_TO || EMAIL_USER;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("ENV_MISSING", { hasUser: !!EMAIL_USER, hasPass: !!EMAIL_PASS, env: process.env.VERCEL_ENV });
      return res.status(500).json({ error: "Server email credentials missing" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"SOSEOTECH Forms" <${EMAIL_USER}>`, // authenticated sender (DMARC safe)
      replyTo: email,                             // so you can reply to the visitor
      to: CONTACT_TO,
      subject: `Contact Form — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${nl2br(message)}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}
