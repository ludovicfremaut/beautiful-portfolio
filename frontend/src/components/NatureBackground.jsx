import { useEffect, useState } from "react";

// Composant d’arrière-plan animé qui génère des "pollen" (étoiles) et des "feuilles flottantes"
export const NatureBackground = () => {
  const [pollens, setPollens] = useState([]); // Grains de pollen
  const [leaves, setLeaves] = useState([]); // Feuilles flottantes

  useEffect(() => {
    generatePollens();
    generateLeaves();

    const handleResize = () => {
      generatePollens(); // Réajuste la densité des pollen au redimensionnement
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function pour générer les pollens
  const generatePollens = () => {
    const numberOfPollens = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newPollens = [];

    for (let i = 0; i < numberOfPollens; i++) {
      newPollens.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setPollens(newPollens);
  };

  // Function pour générer les feuilles (identique "Pollens")
  const generateLeaves = () => {
    const numberOfLeaves = 4;
    const newLeaves = [];

    for (let i = 0; i < numberOfLeaves; i++) {
      newLeaves.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        opacity: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setLeaves(newLeaves);
  };

  // Boucle pour multiplier les feuilles 
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {pollens.map((pollen) => (
        <div
          key={pollen.id}
          className="pollen-dot animate-pulse-soft"
          style={{
            width: pollen.size + "px",
            height: pollen.size + "px",
            left: pollen.x + "%",
            top: pollen.y + "%",
            opacity: pollen.opacity,
            animationDuration: pollen.animationDuration + "s",
          }}
        />
      ))}

      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-float"
          style={{
            width: leaf.size * 15 + "px",
            height: leaf.size * 6 + "px",
            left: leaf.x + "%",
            top: leaf.y + "%",
            opacity: leaf.opacity,
            animationDuration: leaf.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
