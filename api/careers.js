// /api/careers.js
import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const form = formidable({ multiples: false, keepExtensions: true });
    const { fields, files } = await new Promise((resolve, reject) =>
      form.parse(req, (err, f, fl) => (err ? reject(err) : resolve({ fields: f, files: fl })))
    );

    const fullName = fields.fullName?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const cover = fields.cover?.toString() || "";
    if (!fullName || !email) return res.status(400).json({ error: "Missing required fields" });

    const attachments = [];
    const resume = files.resume;
    if (resume?.filepath) {
      attachments.push({
        filename: resume.originalFilename || "resume",
        content: fs.readFileSync(resume.filepath),
      });
    }

    const { EMAIL_USER, EMAIL_PASS, CAREERS_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS) return res.status(500).json({ error: "Server email credentials missing" });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"SOSEOTECH Careers" <${EMAIL_USER}>`,
      replyTo: email,
      to: CAREERS_TO || EMAIL_USER,
      subject: `Careers Application — ${fullName}`,
      html: `
        <h2>New Careers Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${String(cover || "—").replace(/\n/g, "<br/>")}</p>
      `,
      attachments,
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CAREERS API ERROR:", err);
    return res.status(500).json({ error: "Failed to send application" });
  }
}
