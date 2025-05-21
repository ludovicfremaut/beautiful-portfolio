import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Liste des projets avec titres, descriptions, tags, images et liens
const projects = [
  {
    id: 1,
    title: "SocialNetwork",
    description:
      "Un réseau social nouvelle génération, conçu pour évoluer d’un simple MVC à une architecture microservices moderne. Entre sécurité, scalabilité et performance, ce projet met en œuvre les bases solides d'une plateforme sociale ambitieuse.",
    image: "/projects/SocialNetwork.png",
    tags: ["Node.js", "TypeScript", "EJS"],
    githubURL: "https://github.com/ludovicfremaut/Social-Network",
  },
  {
    id: 2,
    title: "Portfolio V1",
    description:
      "Première version de mon portfolio personnel, développée avec React, TypeScript et Vite. Ce projet m’a permis de me lancer dans la création d’une interface moderne, responsive et animée.",
    image: "/projects/FirstPortfolio.png",
    tags: ["React", "Vite", "TailwindCSS"],
    githubURL: "https://github.com/ludovicfremaut/PortFolio-ludovic_fremaut",
  },
  {
    id: 3,
    title: "AI-Covoit",
    description:
      "Conception d’un système intelligent de covoiturage. Réalisé en autonomie lors d’un parcours ECF, ce projet modélise une API REST optimisée pour mettre en relation conducteurs et passagers.",
    image: "/projects/AI-covoit.png",
    tags: ["TypeScript", "Docker", "MongoDB"],
    githubURL:
      "https://github.com/ludovicfremaut/AI-covoit/tree/J2-API-user-auth",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Projets <span className="text-primary"> réalisés</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques projets réalisés au fil de ma formation et de mes
          expérimentations. Ils reflètent mon évolution technique, mes choix
          d’architecture et ma curiosité constante.
        </p>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg shadow-md transition-transform duration-300 hover:scale-[1.02] flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-secondary/40 text-secondary-foreground rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Titre + description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Liens */}
                <div className="mt-auto flex justify-start items-center gap-4 pt-4">

                  <a
                    href={project.githubURL}
                    target="_blank"
                    className="link-button"
                    title="Voir le code"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton vers GitHub global */}
        <div className="text-center mt-12">
          <a
            className="nature-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ludovicfremaut"
          >
            Voir tous mes projets <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
