import nodemailer from "nodemailer";
import formidable from "formidable";
import { readFile } from "fs/promises";

export const config = { api: { bodyParser: false } };

function parseForm(req) {
  const form = formidable({ multiples: false, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })));
  });
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  try {
    const { fields, files } = await parseForm(req);
    const file = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    if (!file) return res.status(400).json({ error: "Resume file required" });

    const fileBuffer = await readFile(file.filepath);
    const filename = file.originalFilename || "resume.pdf";
    const contentType = file.mimetype || "application/pdf";

    const transporter = nodemailer.createTransport({
      host: (process.env.SMTP_HOST || "smtp.gmail.com").trim(),
      port: Number((process.env.SMTP_PORT || "465").trim()),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: (process.env.EMAIL_USER || "").trim(),
        pass: (process.env.EMAIL_PASS || "").trim(),
      },
    });

    await transporter.sendMail({
      from: (process.env.FROM_EMAIL || process.env.EMAIL_USER).trim(),
      to: (process.env.TO_EMAIL || process.env.EMAIL_USER).trim(),
      replyTo: (fields.email?.toString() || "").trim(),
      subject: `New Resume Submission — ${fields.name || "Applicant"}`,
      text:
        `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nRole: ${fields.role}\n\n` +
        `${fields.message || ""}`,
      attachments: [{ filename, content: fileBuffer, contentType }],
    });

    return res.status(200).json({ ok: true, message: "Resume submitted!" });
  } catch (err) {
    console.error("RESUME error:", err);
    return res.status(500).json({ error: "Resume submit failed" });
  }
}
