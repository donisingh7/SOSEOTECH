// server.js
import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// --- Middleware
app.use(cors()); // allow all origins in dev; tighten for prod if needed
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// --- Multer: temp upload dir for resumes
const upload = multer({ dest: "uploads/" });

// --- Nodemailer transporter (Gmail + App Password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // e.g. soseotech@gmail.com
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

// --- Health check
app.get("/health", (_req, res) => res.json({ ok: true }));

// ===== CONTACT =====
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const to = process.env.CONTACT_TO || process.env.EMAIL_USER;

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

    res.json({ ok: true, message: "Contact email sent successfully" });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({ error: "Failed to send contact email" });
  }
});

// ===== CAREERS =====
app.post("/careers", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, cover } = req.body || {};
    if (!fullName || !email) {
      // clean up file if present
      if (req.file) fs.unlink(req.file.path, () => {});
      return res.status(400).json({ error: "Missing required fields" });
    }

    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname || "resume",
        content: fs.readFileSync(req.file.path),
      });
    }

    const to = process.env.CAREERS_TO || process.env.EMAIL_USER;

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
        <p>${(cover || "—").replace(/\n/g, "<br/>")}</p>
      `,
      attachments,
    });

    // cleanup temp file
    if (req.file) fs.unlink(req.file.path, () => {});
    res.json({ ok: true, message: "Application email sent successfully" });
  } catch (err) {
    console.error("CAREERS ERROR:", err);
    // cleanup temp file on error
    if (req.file) fs.unlink(req.file.path, () => {});
    res.status(500).json({ error: "Failed to send application email" });
  }
});

// --- Start server
app.listen(port, () => {
  console.log(`🚀 Backend API running at http://localhost:${port}`);
});
