import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: { bodyParser: false }, // let formidable handle multipart/form-data
};

export default async function handler(req, res) {
  // CORS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const form = formidable({ multiples: false, keepExtensions: true });
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => (err ? reject(err) : resolve({ fields, files })));
    });

    const fullName = fields.fullName?.toString() || "";
    const email = fields.email?.toString() || "";
    const phone = fields.phone?.toString() || "";
    const cover = fields.cover?.toString() || "";

    if (!fullName || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const attachments = [];
    const resume = files.resume;
    if (resume?.filepath) {
      attachments.push({
        filename: resume.originalFilename || "resume",
        content: fs.readFileSync(resume.filepath),
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CAREERS_TO || "careers@soseotech.com";

    await transporter.sendMail({
      from: `"${fullName}" <${email}>`,
      to,
      subject: `Careers Application — ${fullName}`,
      html: `
        <h2>New Careers Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${cover ? cover.replace(/\n/g, "<br/>") : "—"}</p>
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
