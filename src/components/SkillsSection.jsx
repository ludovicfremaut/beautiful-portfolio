import { useState } from "react";
import { cn } from "../lib/utils.js";
import {
  Code,
  Server,
  Wrench,
  FileCode,
  Database,
  Terminal,
  GitMerge,
  Github,
  Figma,
  Send,
  Monitor,
} from "lucide-react";

// Dictionnaire des icônes par compétence
const iconMap = {
  "HTML/CSS": <FileCode size={20} />,
  JavaScript: <Code size={20} />,
  React: <Monitor size={20} />,
  "Tailwind CSS": <Code size={20} />,
  TypeScript: <Code size={20} />,
  "Node.js": <Server size={20} />,
  "Express.js": <Server size={20} />,
  MongoDB: <Database size={20} />,
  PostgreSQL: <Database size={20} />,
  Git: <GitMerge size={20} />,
  GitHub: <Github size={20} />,
  Figma: <Figma size={20} />,
  Postman: <Send size={20} />,
  VSCode: <Terminal size={20} />,
};

// Explication rapide pour chaque skill
const skillDetails = {
  "HTML/CSS": "Structure et style des pages web.",
  JavaScript: "Langage de programmation côté client.",
  React: "Bibliothèque JS pour créer des interfaces dynamiques.",
  "Tailwind CSS": "Framework CSS utilitaire pour mise en page rapide.",
  TypeScript: "Surcouche de JavaScript typée.",
  "Node.js": "Exécution JavaScript côté serveur.",
  "Express.js": "Framework léger pour APIs Node.js.",
  MongoDB: "Base NoSQL orientée documents.",
  PostgreSQL: "Base SQL robuste et relationnelle.",
  Git: "Système de version de code.",
  GitHub: "Hébergement de projets Git.",
  Figma: "Outil de design collaboratif.",
  Postman: "Tests d’API et endpoints REST.",
  VSCode: "Éditeur de code moderne.",
};

// Couleurs par catégorie
const bgByCategory = {
  frontend: "bg-green-100",
  backend: "bg-blue-100",
  tools: "bg-purple-100",
};

const skills = [
    // Outils
  { name: "Git", level: 70, category: "tools" },
  { name: "GitHub", level: 75, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  { name: "Postman", level: 85, category: "tools" },
  { name: "VSCode", level: 90, category: "tools" },

  // Frontend
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 65, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },
  { name: "TypeScript", level: 65, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 75, category: "backend" },
];

const categories = ["Tout", "Frontend", "Backend", "Outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
  (skill) =>
    activeCategory === "Tout" || 
    (activeCategory === "Frontend" && skill.category === "frontend") ||
    (activeCategory === "Backend" && skill.category === "backend") ||
    (activeCategory === "Outils" && skill.category === "tools")
);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
        </h2>

        {/* Filtres de catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cartes de compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "p-6 rounded-lg shadow-xs card-hover transition-all",
                "bg-card border border-border",
                bgByCategory[skill.category] // Applique couleur selon catégorie
              )}
              title={skillDetails[skill.name]} // Tooltip d’explication
            >
              {/* Icône + Nom */}
<div className="flex items-center gap-2 mb-4 text-left text-green-700 dark:text-lime-300 hover:text-primary transition-colors">
  {iconMap[skill.name] || <Code size={20} />}
  <h3 className="font-semibold text-lg">{skill.name}</h3>
</div>

              {/* Barre de progression */}
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left transition-all duration-1000 ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
