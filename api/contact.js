// /api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Basic CORS (useful when hitting from localhost:5173)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // e.g. info@soseotech.com
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    const to = process.env.CONTACT_TO || "info@soseotech.com";

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to,
      subject: `Contact Form — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
