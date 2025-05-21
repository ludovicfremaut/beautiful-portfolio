import { Briefcase, Code, User } from "lucide-react";

// Composant qui présente la section "À propos"
export const AboutSection = () => {
  return (
    <section id="about" className="py-4 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          A propos de<span className="text-primary"> Moi</span>
        </h2>

        {/* Grille avec deux colonnes (texte + icônes/compétences) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Colonne de gauche : présentation personnelle */}
          <div className="space-y-6">
            <h3>Développeur web curieux et créatif</h3>

            <p className="text-muted-foreground">
              J’aime créer des sites et applications web modernes, avec une
              attention particulière à l’accessibilité, au design et à la
              performance. Je me concentre surtout sur le front-end, tout en
              développant aussi mes compétences en back-end grâce à des projets
              complets comme Best Social Network.
            </p>

            <p className="text-muted-foreground">
              Toujours en train d’apprendre, je progresse à chaque projet. Que
              ce soit avec React, TypeScript, Tailwind ou encore Node.js et
              Docker, je cherche à construire des solutions simples, claires et
              utiles.
            </p>

            {/* Boutons : contact + téléchargement de CV */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="nature-button">
                {" "}
                Me Contacter
              </a>
              <a
              // Utilise toujours rel="noopener noreferrer" avec target="_blank". C’est une bonne pratique pour la sécurité et la confidentialité.
                target="blank"
                rel="noopener noreferrer"
                href="/Fremaut-Ludovic.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Colonne de droite : présentation des compétences */}
          <div className="grid grid-cols-1 gap-6">
            {/* Développement web */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Création de sites responsives avec React, TypeScript,
                    Tailwind, et intégration d’APIs backend (Node.js, Express,
                    PostgreSQL).
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Interfaces modernes, accessibles et claires avec une
                    attention portée à l’expérience utilisateur. Utilisation de
                    Figma, SCSS, animations et interactions légères.
                  </p>
                </div>
              </div>
            </div>

             {/* Gestion de projet */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Participation à des projets en équipe comme un réseau social
                    en microservices. Utilisation de Git, GitHub, Docker et mise
                    en place des bases de l’intégration continue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
