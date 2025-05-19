import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import { cn } from "../lib/utils.js";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }

  return (
    <section className="py- 24 px-4 relative bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Contacter-<span className="text-primary">Moi</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsum
        mollitia alias suscipit non error nam eum, aliquid facere nostrum.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6"> Contact Informations</h3>

          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />{" "}
              </div>
              <div>
                <h4 className="font-medium"> Email </h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />{" "}
              </div>
              <div>
                <h4 className="font-medium"> Phone </h4>
                <a
                  href="tel:+33673151112"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (+33) 6-73-15-11-12
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />{" "}
              </div>
              <div>
                <h4 className="font-medium"> Lcation </h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Marcelcave, France
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Linkedin</h4>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.linkedin.com/in/ludovic-fremaut-dev/">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg shadow-xs">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
          <form className="space-y-6" action="">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {" "}
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Ludovic fremaut ..."
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {" "}
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="john@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {" "}
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                placeholder="Hello, I'dlike to talk about ...."
              />
            </div>
            <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"
            )}
            >
                Send Message <Send size={16} />
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};
