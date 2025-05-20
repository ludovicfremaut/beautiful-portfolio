// server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";
import corsMiddleware from "./cors.js";
import mailRoutes from "./routes/mail.js";

// Chargement de la config env
dotenv.config({ path: ".env.production" });

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(corsMiddleware);

// Routes
app.use("/send-email", mailRoutes);

// Démarrage du serveur
app.listen(3000, () => {
  console.log("✅ Backend en écoute sur http://localhost:3000");
});