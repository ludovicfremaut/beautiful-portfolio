import express from "express";
import dotenv from "dotenv";
import corsMiddleware from "./middlewares/cors.js";
import mailRoutes from "./routes/mail.js";

const PORT = process.env.PORT || 3000;

// Chargement de la config env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(corsMiddleware);

// ✅ Gestion manuelle des requêtes OPTIONS (préflight CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // ou ton domaine frontend pour plus de sécurité
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// Routes
app.use("/send-email", mailRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Backend en écoute sur http://localhost:${PORT}`);
});
