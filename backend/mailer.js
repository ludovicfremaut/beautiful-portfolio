// mailer.js

// Chargement des variables d'environnement
require('dotenv').config();
const nodemailer = require('nodemailer');

// Création du transporteur SMTP avec les infos du .env
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Fonction pour envoyer un mail
async function sendMail(subject, text, html) {
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email envoyé :', info.messageId);
  } catch (error) {
    console.error('❌ Erreur d’envoi de mail :', error);
  }
}

module.exports = { sendMail };
