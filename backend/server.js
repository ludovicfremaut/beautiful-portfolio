// server.js
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
app.options("*", corsMiddleware);

// Routes
app.use("/send-email", mailRoutes);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Backend en écoute sur http://localhost:${PORT}`);
});