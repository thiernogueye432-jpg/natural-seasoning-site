import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, MessageCircle, Wallet, Smartphone, CreditCard } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo-nokoss.jpg"
                alt="Logo NOKOSS"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <span className="text-xl font-serif tracking-wide text-foreground">
                Sén Universal NOKOSS
              </span>
            </Link>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-sm mb-4">
              Le goût naturel au coeur de votre cuisine. Assaisonnements 100% 
              naturels, sans additifs chimiques, fabriqués au Sénégal.
            </p>
            <p className="text-sm text-muted-foreground font-sans mb-6">
              <strong className="text-foreground">Fondateur :</strong> El Hadji Thierno GUEYE
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={`https://wa.me/221778955343?text=${encodeURIComponent(
                  "Bonjour Sen Universal NOKOSS !\n\nJe souhaite passer une commande directement. Pouvez-vous me communiquer la disponibilite et les modalites de livraison ?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="font-serif text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#produits" 
                  className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link 
                  href="#histoire" 
                  className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link 
                  href="#processus" 
                  className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  Processus
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors font-sans text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans">
              <li>
                <a 
                  href="tel:+221778955343" 
                  className="hover:text-primary transition-colors"
                >
                  +221 77 895 53 43
                </a>
              </li>
              <li>
                <a 
                  href="mailto:thiernogueye432@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  thiernogueye432@gmail.com
                </a>
              </li>
              <li>
                Mbour / Madinatou Salam<br />
                Région de Thiès, Sénégal
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-sans mr-2">Paiements acceptes :</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-sm border border-border">
                  <Wallet className="w-4 h-4 text-[#1DC1EC]" />
                  <span className="text-xs font-sans text-foreground">Wave</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-sm border border-border">
                  <Smartphone className="w-4 h-4 text-[#FF6600]" />
                  <span className="text-xs font-sans text-foreground">Orange Money</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-sm border border-border">
                  <CreditCard className="w-4 h-4 text-primary" />
                  <span className="text-xs font-sans text-foreground">Carte</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-sans">
            &copy; {new Date().getFullYear()} UNIVERSAL NOKOSS SARL. Tous droits reserves.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/confidentialite"
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-sans"
            >
              Confidentialité
            </Link>
            <p className="text-sm text-muted-foreground font-sans">
              Fabrique avec passion au Senegal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
