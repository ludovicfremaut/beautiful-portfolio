import { ArrowDown } from "lucide-react";

// Section d'introduction du portfolio
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Contenu centré */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Titre principal avec animation progressive */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-reveal-up">
              Bonjour, je m'appelle
            </span>{" "}
            <span className="text-primary opacity-0 animate-reveal-up-delay-2">
              Ludovic Fremaut
            </span>
          </h1>

          {/* Paragraphe de présentation */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-reveal-up-delay-3">
            Je crée des sites web avec des technologies modernes. Je me
            concentre sur le front-end pour construire des interfaces claires et
            agréables à utiliser. J’aime apprendre de nouvelles choses et je
            cherche toujours à progresser dans ce que je fais.
          </p>

          {/* Bouton vers la section projets */}
          <div className="pt-4 opacity-0 animate-reveal-up-delay-4">
            <a href="#projects" className="nature-button">
              Mes projets
            </a>
          </div>
        </div>
      </div>

      {/* Flèche vers la section suivante */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5" />
      </div>
    </section>
  );
};
