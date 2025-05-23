import cors from "cors";

const allowedOrigins = [
  "http://localhost",
  "http://localhost:5173",
  "https://beautiful-portfolio-production-96fa.up.railway.app", // 👈 ajoute ce domaine
];


const corsMiddleware = cors({
  origin: (origin, callback) => {
    console.log("🌐 Requête CORS depuis :", origin);
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    callback(new Error("Non autorisé par CORS"));
  },
  credentials: true,
});

export default corsMiddleware;
