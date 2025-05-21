import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: "Accueil", href: "#hero" },
  { name: "A propos", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-halo text-foreground">
                {" "}
                Ludovic Fremaut{" "}
              </span>{" "}
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center gap-x-4 z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile en-dehors de la navbar */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/95 dark:bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
