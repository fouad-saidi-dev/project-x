import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-playfair font-bold">M</span>
              </div>
              <span className="font-playfair font-bold text-xl">Medjool Star</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              L'excellence du Mejhoul marocain depuis 2013
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="/about" className="hover:text-accent transition-colors">À propos</a></li>
              <li><a href="/quality" className="hover:text-accent transition-colors">Qualité</a></li>
              <li><a href="/products" className="hover:text-accent transition-colors">Produits</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Province d'Errachidia, Maroc</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+212 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@medjoolstar.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 Medjool Star. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
