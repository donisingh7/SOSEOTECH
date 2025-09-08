import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = { api: { bodyParser: false } };

const formOpts = {
  multiples: false,
  keepExtensions: true,
  uploadDir: "/tmp",
  maxFileSize: 10 * 1024 * 1024, // 10MB
};
const nl2br = (s = "") => String(s).replace(/\n/g, "<br/>");

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Read + trim envs
  const RAW_USER = process.env.EMAIL_USER ?? process.env.SMTP_USER ?? "";
  const RAW_PASS = process.env.EMAIL_PASS ?? process.env.SMTP_PASS ?? "";
  const EMAIL_USER = RAW_USER.trim();
  const EMAIL_PASS = RAW_PASS.trim();
  const CAREERS_TO = (process.env.CAREERS_TO || EMAIL_USER).trim();

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("ENV_MISSING", {
      vercelEnv: process.env.VERCEL_ENV,
      hasUser: !!EMAIL_USER,
      hasPass: !!EMAIL_PASS,
    });
    return res.status(500).json({ error: "Server email credentials missing" });
  }

  let tempFilePath = null;
  try {
    const { fields, files } = await new Promise((resolve, reject) => {
      const form = formidable(formOpts);
      form.parse(req, (err, f, fl) => (err ? reject(err) : resolve({ fields: f, files: fl })));
    });

    const fullName = fields.fullName?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const cover = fields.cover?.toString() || "";
    if (!fullName || !email) return res.status(400).json({ error: "Missing required fields" });

    const attachments = [];
    const resume = files.resume;
    if (resume?.filepath) {
      tempFilePath = resume.filepath;
      const content = fs.readFileSync(resume.filepath);
      attachments.push({ filename: resume.originalFilename || "resume", content });
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

    if (tempFilePath) fs.unlink(tempFilePath, () => {});
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("CAREERS API ERROR:", err);
    if (tempFilePath) fs.unlink(tempFilePath, () => {});
    return res.status(500).json({ error: "Failed to send application" });
  }
}
