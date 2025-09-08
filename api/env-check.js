export default function handler(req, res) {
  const u = (process.env.EMAIL_USER ?? process.env.SMTP_USER ?? "").trim();
  const p = (process.env.EMAIL_PASS ?? process.env.SMTP_PASS ?? "").trim();
  res.status(200).json({
    vercelEnv: process.env.VERCEL_ENV || "unknown",
    hasUser: !!u,
    hasPass: !!p,
    userMasked: u ? u.replace(/(^..).+(@.*$)/, "$1***$2") : null,
    passLen: p.length || 0
  });
}
