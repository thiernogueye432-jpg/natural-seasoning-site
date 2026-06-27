import { Leaf, Sun, Package, Truck, Scissors, Filter } from "lucide-react"

const steps = [
  {
    icon: Leaf,
    number: "01",
    title: "Sélection & Tri",
    description: "Nous sélectionnons les légumes frais et épices locaux de qualité. Persil, céleri, oignon, ail, gingembre - uniquement les meilleurs ingrédients.",
  },
  {
    icon: Scissors,
    number: "02",
    title: "Lavage & Découpe",
    description: "Désinfection soigneuse et découpe en petits morceaux pour faciliter le séchage. Hygiène stricte selon les normes HACCP.",
  },
  {
    icon: Sun,
    number: "03",
    title: "Séchage Traditionnel",
    description: "Séchage à 50-60°C dans nos séchoirs industriels pour préserver les huiles essentielles et les saveurs naturelles.",
  },
  {
    icon: Filter,
    number: "04",
    title: "Broyage & Tamisage",
    description: "Broyage fin pour obtenir une poudre homogène, puis tamisage pour garantir une granulométrie uniforme.",
  },
  {
    icon: Package,
    number: "05",
    title: "Mélange & Conditionnement",
    description: "Mélange selon notre formule secrète, puis conditionnement en sachets hermétiques pour préserver la fraîcheur.",
  },
  {
    icon: Truck,
    number: "06",
    title: "Livraison",
    description: "Distribution dans les supermarchés, épiceries, restaurants et hôtels de Mbour, Saly et toute la région de Thiès.",
  },
]

export function ProcessSection() {
  return (
    <section id="processus" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Notre Processus
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-balance">
            De la Ferme à Votre Cuisine
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Chaque étape de notre processus de fabrication est conçue pour vous 
            livrer les assaisonnements les plus frais et les plus savoureux.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="relative group"
            >
              <div className="relative bg-background p-8 rounded-sm border border-border hover:border-primary/50 transition-all h-full">
                {/* Number */}
                <span className="absolute -top-4 -right-2 text-6xl font-serif text-muted/30 select-none">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Guarantee */}
        <div className="mt-16 bg-primary/10 p-8 rounded-sm text-center">
          <h3 className="text-2xl font-serif mb-4 text-foreground">Garantie Qualité</h3>
          <p className="text-muted-foreground font-sans max-w-2xl mx-auto">
            Tous nos produits sont fabriqués selon des normes sanitaires strictes. 
            Contrôle qualité rigoureux à chaque étape. Aucun additif chimique, 
            conservateur artificiel ou exhausteur de goût.
          </p>
        </div>
      </div>
    </section>
  )
}
