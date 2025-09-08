// /api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: "Missing required fields" });

  const { EMAIL_USER, EMAIL_PASS, CONTACT_TO } = process.env;
  if (!EMAIL_USER || !EMAIL_PASS) return res.status(500).json({ error: "Server email credentials missing" });

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"SOSEOTECH Forms" <${EMAIL_USER}>`, // authenticated sender
      replyTo: email,                            // user address for replies
      to: CONTACT_TO || EMAIL_USER,
      subject: `Contact Form — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return res.status(500).json({ error: "Email send failed" });
  }
}
