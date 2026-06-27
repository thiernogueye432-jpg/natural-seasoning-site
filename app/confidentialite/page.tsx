import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité de Sén Universal NOKOSS - Comment nous traitons et protégeons vos données personnelles.",
}

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-sans mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4 text-balance">
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-muted-foreground font-sans mb-12">
          Dernière mise à jour : 26 juin 2026
        </p>

        <div className="space-y-8 text-foreground font-sans leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">1. Qui sommes-nous</h2>
            <p className="text-muted-foreground">
              Ce site et cette application sont édités par UNIVERSAL NOKOSS SARL, société établie à
              Mbour, région de Thiès, Sénégal. Nous produisons et commercialisons des produits
              d&apos;assaisonnement naturels en poudre. Pour toute question relative à vos données,
              vous pouvez nous contacter à thiernogueye432@gmail.com ou au +221 77 895 53 43.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">2. Données que nous collectons</h2>
            <p className="text-muted-foreground">
              Nous collectons uniquement les informations que vous nous fournissez volontairement,
              notamment lorsque vous remplissez le formulaire de contact ou passez une commande :
              votre nom, votre adresse e-mail, votre numéro de téléphone, votre zone de livraison et
              le contenu de votre message. Nous collectons également des données de navigation
              anonymes (statistiques de visite) afin d&apos;améliorer notre service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">3. Utilisation des données</h2>
            <p className="text-muted-foreground">
              Vos données sont utilisées exclusivement pour traiter vos demandes et commandes, vous
              recontacter, organiser la livraison de vos produits et améliorer notre service. Nous ne
              vendons ni ne louons vos données personnelles à des tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">4. Communication via WhatsApp</h2>
            <p className="text-muted-foreground">
              Lorsque vous choisissez de nous contacter via WhatsApp, vos échanges sont régis par la
              politique de confidentialité de WhatsApp. Nous utilisons ces conversations uniquement
              pour traiter votre commande ou répondre à vos questions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">5. Conservation des données</h2>
            <p className="text-muted-foreground">
              Nous conservons vos données uniquement le temps nécessaire au traitement de vos demandes
              et au respect de nos obligations légales. Vous pouvez à tout moment demander la
              suppression de vos données en nous contactant.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">6. Vos droits</h2>
            <p className="text-muted-foreground">
              Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos
              données personnelles. Pour exercer ces droits, contactez-nous à
              thiernogueye432@gmail.com.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">7. Modifications</h2>
            <p className="text-muted-foreground">
              Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute
              modification sera publiée sur cette page avec une date de mise à jour actualisée.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-foreground">8. Contact</h2>
            <p className="text-muted-foreground">
              Pour toute question concernant cette politique de confidentialité :
              <br />
              UNIVERSAL NOKOSS SARL
              <br />
              Mbour, région de Thiès, Sénégal
              <br />
              E-mail : thiernogueye432@gmail.com
              <br />
              Téléphone : +221 77 895 53 43
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
