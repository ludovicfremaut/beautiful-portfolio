// routes/mail.js
import express from "express";
import { sendMail } from "../mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs requis manquants." });
  }

  const subject = `Message de ${name}`;
  const text = `De: ${email}\n\n${message}`;
  const html = `<p><strong>De:</strong> ${email}</p><p>${message}</p>`;

  try {
    await sendMail(subject, text, html
    );
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Erreur d'envoi d'e-mail." });
  }
});

export default router;