import Image from "next/image"

export function StorySection() {
  return (
    <section id="histoire" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-sm overflow-hidden">
              <Image
                src="/images/herbs-fresh.jpg"
                alt="Épices et légumes frais du Sénégal"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
              Notre Histoire
            </p>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-balance">
              Valoriser les ressources
              <span className="block text-primary">agricoles locales</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-sans leading-relaxed">
              <p>
                <strong className="text-foreground">Sén Universal NOKOSS</strong> est né d&apos;une volonté 
                de lutter contre l&apos;usage excessif des additifs chimiques dans notre alimentation. 
                Fondée à Mbour, dans la région de Thiès au Sénégal, notre entreprise transforme 
                les légumes et épices locaux en assaisonnements 100% naturels.
              </p>
              <p>
                Face à la forte utilisation de bouillons industriels contenant des exhausteurs 
                de goût artificiels et des taux élevés de sel, nous proposons une alternative 
                saine à base de persil, céleri, oignon, ail, gingembre et piment - des 
                ingrédients au coeur de la gastronomie sénégalaise traditionnelle.
              </p>
              <p>
                Notre mission : produire un assaisonnement naturel de qualité, sans additifs 
                chimiques, répondant aux exigences sanitaires et aux attentes des consommateurs 
                soucieux de leur santé.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 p-6 bg-card rounded-sm border border-border">
              <h3 className="font-serif text-lg mb-4 text-foreground">Nos Valeurs</h3>
              <div className="flex flex-wrap gap-3">
                {["Qualité", "Naturel", "Local", "Santé", "Innovation"].map((value) => (
                  <span 
                    key={value}
                    className="px-4 py-2 bg-primary/10 text-primary text-sm font-sans rounded-sm"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-serif text-primary">15</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Emplois créés</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Naturel</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary">0</p>
                <p className="text-sm text-muted-foreground font-sans mt-1">Additifs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
