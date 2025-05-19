import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SocialNetwork",
    description:
      "Un réseau social nouvelle génération, conçu pour évoluer d’un simple MVC à une architecture microservices moderne. Entre sécurité, scalabilité et performance, ce projet met en œuvre les bases solides d'une plateforme sociale ambitieuse.",
    image: "/projects/SocialNetwork.png",
    tags: ["Node.js", "TypeScript", "EJS"],
    demoURL: "#",
    githubURL: "https://github.com/ludovicfremaut/Social-Network",
  },
  {
    id: 2,
    title: "Portfolio V1",
    description:
      "Première version de mon portfolio personnel, développée avec React, TypeScript et Vite. Ce projet m’a permis de me lancer dans la création d’une interface moderne, responsive et animée. Je l’intègre ici comme point de départ de mon parcours, pour illustrer ma progression technique et créative.",
    image: "/projects/FirstPortfolio.png",
    tags: ["React", "Vite", "TailwindCSS"],
    demoURL: "#",
    githubURL: "https://github.com/ludovicfremaut/PortFolio-ludovic_fremaut",
  },
  {
    id: 1,
    title: "AI-Covoit",
    description:
      "Projet de conception d’un système intelligent de covoiturage. Réalisé en autonomie lors d’un parcours ECF, il formalise l’architecture d’une API REST optimisée pour mettre en relation conducteurs et passagers selon leurs contraintes. Une base solide pour un futur backend intelligent.",
    image: "/projects/AI-covoit.png",
    tags: ["TypeScript", "Docker", "MongoDB"],
    demoURL: "#",
    githubURL:
      "https://github.com/ludovicfremaut/AI-covoit/tree/J2-API-user-auth",
  },
];
export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 maw-w-2xl mx-auto">
          Voici une sélection de projets réalisés au fil de ma formation et de
          mes expérimentations personnelles. Chaque projet reflète une étape de
          ma progression : de mes premières conceptions à des architectures plus
          complexes avec microservices, API sécurisées ou interface animée. J’y
          applique mes connaissances en backend, frontend et gestion de projet —
          toujours avec curiosité et envie d’aller plus loin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoURL}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubURL}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ludovicfremaut"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
