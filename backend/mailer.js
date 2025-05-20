// mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.production" });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Transporteur Mail non prêt :", err);
  } else {
    console.log("📬 Transporteur Mail prêt à envoyer");
  }
});

export async function sendMail(subject, text, html, replyTo) {
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
    html,
    replyTo,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email envoyé :", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Erreur d’envoi de mail :", error);
    throw error;
  }
}