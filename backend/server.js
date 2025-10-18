// import express from "express";
// import nodemailer from "nodemailer";
// import multer from "multer";
// import cors from "cors";
// import dotenv from "dotenv";
// import fs from "fs";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });

// // health
// app.get("/health", (_req, res) => res.json({ ok: true }));

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // contact
// app.post("/contact", async (req, res) => {
//   try {
//     const { name, email, phone, message } = req.body || {};
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }
//     await transporter.sendMail({
//       from: `"SOSEOTECH Forms" <${process.env.EMAIL_USER}>`,
//       to: process.env.CONTACT_TO || process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `Contact Form — ${name}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "—"}</p>
//         <p><strong>Message:</strong></p>
//         <p>${String(message || "").replace(/\n/g, "<br/>")}</p>
//       `,
//     });
//     res.json({ ok: true, message: "Contact email sent successfully" });
//   } catch (err) {
//     console.error("CONTACT ERROR:", err.message);
//     res.status(500).json({ error: "Failed to send contact email" });
//   }
// });

// // careers
// app.post("/careers", upload.single("resume"), async (req, res) => {
//   try {
//     const { fullName, email, phone, cover } = req.body || {};
//     if (!fullName || !email) {
//       if (req.file) fs.unlink(req.file.path, () => {});
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const attachments = [];
//     if (req.file) {
//       attachments.push({
//         filename: req.file.originalname || "resume",
//         content: fs.readFileSync(req.file.path),
//       });
//     }

//     await transporter.sendMail({
//       from: `"SOSEOTECH Careers" <${process.env.EMAIL_USER}>`,
//       to: process.env.CAREERS_TO || process.env.EMAIL_USER,
//       replyTo: email,
//       subject: `Careers Application — ${fullName}`,
//       html: `
//         <h2>New Careers Application</h2>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "—"}</p>
//         <p><strong>Cover Letter:</strong></p>
//         <p>${String(cover || "—").replace(/\n/g, "<br/>")}</p>
//       `,
//       attachments,
//     });

//     if (req.file) fs.unlink(req.file.path, () => {});
//     res.json({ ok: true, message: "Application email sent successfully" });
//   } catch (err) {
//     console.error("CAREERS ERROR:", err.message);
//     if (req.file) fs.unlink(req.file.path, () => {});
//     res.status(500).json({ error: "Failed to send application email" });
//   }
// });

// app.listen(port, () => {
//   console.log(`🚀 Backend API running at http://localhost:${port}`);
// });

import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

// health
app.get("/health", (_req, res) => res.json({ ok: true }));

// ✅ FIXED: Added tls configuration to handle self-signed certificates
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    // Don't fail on invalid certs (for development)
    rejectUnauthorized: false
  }
});

// contact
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    await transporter.sendMail({
      from: `"SOSEOTECH Forms" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO || process.env.EMAIL_USER,
      replyTo: email,
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
    res.json({ ok: true, message: "Contact email sent successfully" });
  } catch (err) {
    console.error("CONTACT ERROR:", err.message);
    res.status(500).json({ error: "Failed to send contact email" });
  }
});

// careers
app.post("/careers", upload.single("resume"), async (req, res) => {
  try {
    const { fullName, email, phone, cover } = req.body || {};
    if (!fullName || !email) {
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

    await transporter.sendMail({
      from: `"SOSEOTECH Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.CAREERS_TO || process.env.EMAIL_USER,
      replyTo: email,
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

    if (req.file) fs.unlink(req.file.path, () => {});
    res.json({ ok: true, message: "Application email sent successfully" });
  } catch (err) {
    console.error("CAREERS ERROR:", err.message);
    if (req.file) fs.unlink(req.file.path, () => {});
    res.status(500).json({ error: "Failed to send application email" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Backend API running at http://localhost:${port}`);
});