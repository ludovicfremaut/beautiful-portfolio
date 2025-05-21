import { Computer, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils.js";

export const ContactSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message envoyé !");
        e.target.reset();
      } else {
        alert("❌ Erreur : " + data.error);
      }
    } catch (err) {
      console.error("Erreur réseau :", err);
      alert("Erreur réseau. Vérifie que le backend tourne.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Contactez <span className="text-primary">Moi</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Vous avez un projet, une question ou simplement envie d’échanger ?
        N’hésitez pas à me contacter par mail, téléphone ou via LinkedIn. Je
        réponds rapidement.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">
            Informations de contact
          </h3>
<div className="flex flex-col items-center space-y-6">
  {/* Email */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Mail className="h-6 w-6 text-primary" />
    </div>
    <div className="text-center">
      <h4 className="font-medium">Email</h4>
      <a
        href="mailto:ludovic.fremaut@hotmail.fr"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        ludovic.fremaut@hotmail.fr
      </a>
    </div>
  </div>

  {/* Téléphone */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Phone className="h-6 w-6 text-primary" />
    </div>
    <div className="text-center">
      <h4 className="font-medium">Téléphone</h4>
      <a
        href="tel:+33673151112"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        (+33) 6 73 15 11 12
      </a>
    </div>
  </div>

  {/* Localisation */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <MapPin className="h-6 w-6 text-primary" />
    </div>
    <div className="text-center">
      <h4 className="font-medium">Localisation</h4>
      <p className="text-muted-foreground">Marcelcave, France</p>
    </div>
  </div>

  {/* LinkedIn */}
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">
      <Linkedin className="h-6 w-6 text-primary" />
    </div>
    <div className="text-center">
      <h4 className="font-medium">LinkedIn</h4>
      <a
        href="https://www.linkedin.com/in/ludovic-fremaut-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        linkedin.com/in/ludovic-fremaut-dev
      </a>
    </div>
  </div>
</div>
        {/* Formulaire de contact */}
        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Envoyer un message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ludovic Fremaut"
                className="w-full px-4 py-3 rounded-md border border-input bg-background outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Votre email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="exemple@email.com"
                className="w-full px-4 py-3 rounded-md border border-input bg-background outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Bonjour, je souhaite discuter de..."
                className="w-full px-4 py-3 rounded-md border border-input bg-background outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className={cn(
                "nature-button w-full flex items-center justify-center gap-2"
              )}
            >
              Envoyer le message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
