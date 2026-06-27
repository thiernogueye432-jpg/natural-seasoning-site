"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, MessageCircle, CreditCard, Smartphone, Wallet } from "lucide-react"

const messageSuggestions = [
  {
    label: "Passer une commande",
    text: "Bonjour, je souhaite passer une commande. Voici les produits qui m'intéressent : ",
  },
  {
    label: "Demander les prix",
    text: "Bonjour, pouvez-vous me communiquer vos tarifs et les quantités disponibles ?",
  },
  {
    label: "Livraison",
    text: "Bonjour, je voudrais connaître vos modalités et délais de livraison.",
  },
  {
    label: "Partenariat B2B",
    text: "Bonjour, je représente une entreprise/un commerce et je souhaite discuter d'un partenariat de revente.",
  },
  {
    label: "Message personnalisé",
    text: "",
  },
]

const productOptions = [
  "Sachet 100g (500 FCFA)",
  "Sachet 500g (2 500 FCFA)",
  "Cubes Naturels (400 FCFA)",
  "Pack Découverte (1 200 FCFA)",
]

const regionOptions = [
  "Dakar",
  "Thiès",
  "Diourbel",
  "Fatick",
  "Kaffrine",
  "Kaolack",
  "Kédougou",
  "Kolda",
  "Louga",
  "Matam",
  "Saint-Louis",
  "Sédhiou",
  "Tambacounda",
  "Ziguinchor",
  "Extérieur du Sénégal",
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [selectedRegion, setSelectedRegion] = useState("")

  const buildMessage = (
    baseText: string,
    products: string[],
    region: string,
  ) => {
    let text = baseText
    if (products.length > 0) {
      text += "\n- " + products.join("\n- ")
    }
    if (region) {
      text += `\n\nZone de livraison : ${region}`
    }
    return text
  }

  const handleSuggestionClick = (suggestion: { label: string; text: string }) => {
    setSelectedSuggestion(suggestion.label)
    // Reset sub-options when switching suggestion
    setSelectedProducts([])
    setSelectedRegion("")
    setFormData((prev) => ({ ...prev, message: suggestion.text }))
  }

  const handleProductToggle = (product: string) => {
    const base = messageSuggestions.find((s) => s.label === "Passer une commande")?.text ?? ""
    const next = selectedProducts.includes(product)
      ? selectedProducts.filter((p) => p !== product)
      : [...selectedProducts, product]
    setSelectedProducts(next)
    setFormData((prev) => ({ ...prev, message: buildMessage(base, next, selectedRegion) }))
  }

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region)
    const base = messageSuggestions.find((s) => s.label === selectedSuggestion)?.text ?? formData.message
    setFormData((prev) => ({ ...prev, message: buildMessage(base, selectedProducts, region) }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp with the message
    const whatsappMessage = `Bonjour, je suis ${formData.name}.\n\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage: ${formData.message}`
    window.open(`https://wa.me/221778955343?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Contactez-nous
            </p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-balance">
              Parlons de vos besoins
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-12">
              Vous avez des questions sur nos produits ? Vous souhaitez passer 
              une commande ou discuter d&apos;un partenariat B2B ? N&apos;hésitez pas 
              à nous contacter.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Email</p>
                  <a 
                    href="mailto:thiernogueye432@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    thiernogueye432@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Téléphone</p>
                  <a 
                    href="tel:+221778955343" 
                    className="text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    +221 77 895 53 43
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">WhatsApp</p>
                  <a 
                    href={`https://wa.me/221778955343?text=${encodeURIComponent(
                      "Bonjour Sen Universal NOKOSS !\n\nJe souhaite passer une commande directement.\n\nVoici ce qui m'interesse :\n- Sachet 100g (500 FCFA)\n- Sachet 500g (2 500 FCFA)\n- Cubes Naturels (400 FCFA)\n- Pack Decouverte (1 200 FCFA)\n\nMerci de me communiquer la disponibilite et les modalites de livraison."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    +221 77 895 53 43
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-foreground mb-1">Adresse</p>
                  <p className="text-muted-foreground font-sans">
                    Mbour / Madinatou Salam<br />
                    Région de Thiès, Sénégal
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-12 p-6 bg-background rounded-sm border border-border">
              <h3 className="font-serif text-lg mb-4 text-foreground">Moyens de paiement acceptes</h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Wave */}
                <div className="flex flex-col items-center p-4 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#1DC1EC]/10 flex items-center justify-center mb-2">
                    <Wallet className="w-6 h-6 text-[#1DC1EC]" />
                  </div>
                  <span className="text-sm font-sans text-foreground font-medium">Wave</span>
                </div>
                {/* Orange Money */}
                <div className="flex flex-col items-center p-4 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#FF6600]/10 flex items-center justify-center mb-2">
                    <Smartphone className="w-6 h-6 text-[#FF6600]" />
                  </div>
                  <span className="text-sm font-sans text-foreground font-medium">Orange Money</span>
                </div>
                {/* Carte Bancaire */}
                <div className="flex flex-col items-center p-4 bg-card rounded-sm border border-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-sans text-foreground font-medium">Carte Bancaire</span>
                </div>
              </div>
            </div>

            {/* Business Info */}
            <div className="mt-6 p-6 bg-background rounded-sm border border-border">
              <h3 className="font-serif text-lg mb-3 text-foreground">UNIVERSAL NOKOSS SARL</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Societe a Responsabilite Limitee<br />
                Capital social : 5 000 000 FCFA<br />
                Siege social : Mbour, Region de Thies
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 lg:p-12 rounded-sm border border-border">
            <h3 className="text-2xl font-serif mb-6">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-sans"
                >
                  Votre Nom
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                  placeholder="Ex: Fatou Diallo"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-sans"
                >
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                  placeholder="Ex: fatou@exemple.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-sans"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                  placeholder="Ex: +221 77 123 45 67"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm tracking-widest uppercase text-muted-foreground mb-2 font-sans"
                >
                  Votre Message
                </label>
                <p className="text-xs text-muted-foreground mb-3 font-sans">
                  Choisissez une suggestion ou écrivez votre propre message :
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {messageSuggestions.map((suggestion) => (
                    <button
                      key={suggestion.label}
                      type="button"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className={
                        selectedSuggestion === suggestion.label
                          ? "px-4 py-2 text-xs tracking-wide rounded-full border border-primary bg-primary text-primary-foreground transition-colors font-sans"
                          : "px-4 py-2 text-xs tracking-wide rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary transition-colors font-sans"
                      }
                    >
                      {suggestion.label}
                    </button>
                  ))}
                </div>

                {/* Sous-options : produits pour une commande */}
                {selectedSuggestion === "Passer une commande" && (
                  <div className="mb-4 p-4 bg-card rounded-sm border border-border">
                    <p className="text-xs tracking-wide uppercase text-muted-foreground mb-3 font-sans">
                      Sélectionnez vos produits
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {productOptions.map((product) => (
                        <label
                          key={product}
                          className="flex items-center gap-2 text-sm text-foreground font-sans cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(product)}
                            onChange={() => handleProductToggle(product)}
                            className="w-4 h-4 accent-primary"
                          />
                          {product}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sous-options : zone de livraison */}
                {(selectedSuggestion === "Livraison" || selectedSuggestion === "Passer une commande") && (
                  <div className="mb-4">
                    <label
                      htmlFor="region"
                      className="block text-xs tracking-wide uppercase text-muted-foreground mb-2 font-sans"
                    >
                      Zone de livraison
                    </label>
                    <select
                      id="region"
                      value={selectedRegion}
                      onChange={(e) => handleRegionChange(e.target.value)}
                      className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-sans"
                    >
                      <option value="">-- Choisissez votre région --</option>
                      {regionOptions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-input border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none font-sans"
                  placeholder="Comment pouvons-nous vous aider ?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors font-sans flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
