import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: '8d6cc8001@smtp-brevo.com',
    pass: 'gwqFMSpR54trHLJN',
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Erreur de connexion SMTP ❌:', error);
  } else {
    console.log('Connexion SMTP réussie ✅');
  }
});
