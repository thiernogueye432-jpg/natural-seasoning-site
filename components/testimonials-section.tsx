import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content: "Depuis que j'utilise NOKOSS, mes plats ont retrouvé le vrai goût de la cuisine sénégalaise traditionnelle. Ma famille adore et je suis rassurée pour notre santé.",
    author: "Fatou Diallo",
    role: "Mère de famille, Mbour",
    rating: 5,
  },
  {
    id: 2,
    content: "En tant que chef, la qualité des ingrédients est primordiale. NOKOSS offre une alternative naturelle aux cubes industriels que mes clients apprécient vraiment.",
    author: "Ibrahima Ndiaye",
    role: "Chef cuisinier, Restaurant Le Saly",
    rating: 5,
  },
  {
    id: 3,
    content: "Le rapport qualité-prix est excellent. Un sachet de 500g dure longtemps et le goût est incomparable. Je recommande à tous ceux qui veulent manger sainement.",
    author: "Aminata Sarr",
    role: "Restauratrice, Thiès",
    rating: 5,
  },
]

const stats = [
  { value: "96.9%", label: "Satisfaction client" },
  { value: "35%", label: "Choisissent le naturel" },
  { value: "50 000", label: "Sachets/mois" },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Témoignages
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Rejoignez les milliers de familles et professionnels qui ont choisi 
            NOKOSS pour une cuisine plus saine et plus savoureuse.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-8 mb-16 p-8 bg-card rounded-sm border border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground font-sans mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article 
              key={testimonial.id}
              className="bg-card p-8 rounded-sm border border-border hover:border-primary/30 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground font-serif text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div>
                <p className="font-serif text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground font-sans">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
