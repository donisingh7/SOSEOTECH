// Vercel serverless function: POST /api/careers
// Multipart form: fullName, email, phone?, cover?, resume(file)

import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

// store uploads in /tmp (ephemeral) – safe for Vercel functions
const formOpts = {
  multiples: false,
  keepExtensions: true,
  uploadDir: "/tmp",
  maxFileSize: 10 * 1024 * 1024, // 10 MB
};

const nl2br = (s = "") => String(s).replace(/\n/g, "<br/>");

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Read SMTP creds (EMAIL_* preferred; accept SMTP_* too)
  const EMAIL_USER = process.env.EMAIL_USER || process.env.SMTP_USER || "";
  const EMAIL_PASS = process.env.EMAIL_PASS || process.env.SMTP_PASS || "";
  const CAREERS_TO = process.env.CAREERS_TO || EMAIL_USER;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("ENV_MISSING", { hasUser: !!EMAIL_USER, hasPass: !!EMAIL_PASS, env: process.env.VERCEL_ENV });
    return res.status(500).json({ error: "Server email credentials missing" });
  }

  let tempFilePath = null;

  try {
    // Parse multipart-form
    const { fields, files } = await new Promise((resolve, reject) => {
      const form = formidable(formOpts);
      form.parse(req, (err, f, fl) => (err ? reject(err) : resolve({ fields: f, files: fl })));
    });

    const fullName = fields.fullName?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const cover = fields.cover?.toString() || "";

    if (!fullName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Prepare attachment (if any)
    const attachments = [];
    const resume = files.resume;
    if (resume?.filepath) {
      tempFilePath = resume.filepath;
      const content = fs.readFileSync(resume.filepath); // Buffer
      attachments.push({
        filename: resume.originalFilename || "resume",
        content,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"SOSEOTECH Careers" <${EMAIL_USER}>`,
      replyTo: email,
      to: CAREERS_TO,
      subject: `Careers Application — ${fullName}`,
      html: `
        <h2>New Careers Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${nl2br(cover || "—")}</p>
      `,
      attachments,
    });

    // cleanup temp file (best-effort)
    if (tempFilePath) fs.unlink(tempFilePath, () => {});
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CAREERS API ERROR:", err);
    if (tempFilePath) fs.unlink(tempFilePath, () => {});
    return res.status(500).json({ error: "Failed to send application" });
  }
}
