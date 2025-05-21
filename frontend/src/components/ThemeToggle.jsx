import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Fonction utilitaire pour fusionner des classes CSS

// Composant qui permet de basculer entre le mode clair et sombre
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // État pour savoir si le mode sombre est activé

  // À l’ouverture de la page, on regarde si un thème est déjà enregistré dans le localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark"); // Ajoute la classe "dark" au HTML
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // Fonction pour basculer entre clair <=> sombre
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "z-50 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
