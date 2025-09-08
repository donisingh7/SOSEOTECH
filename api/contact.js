import nodemailer from "nodemailer";

const nl2br = (s = "") => String(s).replace(/\n/g, "<br/>");

export default async function handler(req, res) {
  // CORS (safe)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ error: "Missing required fields" });

    // Read + trim envs; accept EMAIL_* or SMTP_*
    const RAW_USER = process.env.EMAIL_USER ?? process.env.SMTP_USER ?? "";
    const RAW_PASS = process.env.EMAIL_PASS ?? process.env.SMTP_PASS ?? "";
    const EMAIL_USER = RAW_USER.trim();
    const EMAIL_PASS = RAW_PASS.trim();
    const CONTACT_TO = (process.env.CONTACT_TO || EMAIL_USER).trim();

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error("ENV_MISSING", {
        vercelEnv: process.env.VERCEL_ENV,
        hasUser: !!EMAIL_USER,
        hasPass: !!EMAIL_PASS,
      });
      return res.status(500).json({ error: "Server email credentials missing" });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"SOSEOTECH Forms" <${EMAIL_USER}>`,
      replyTo: email,
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
