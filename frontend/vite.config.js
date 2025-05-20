import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: true, // 👈 ajoute ceci
    strictPort: true,
    allowedHosts: ["beautiful-portfolio-production-96fa.up.railway.app"],
  },
});
