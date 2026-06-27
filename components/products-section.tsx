"use client"

import Image from "next/image"
import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"

const products = [
  {
    id: 1,
    name: "Sachet 100g",
    description: "Assaisonnement naturel en poudre - Mélange de persil, céleri, oignon, ail, gingembre et poivre noir",
    price: "500 FCFA",
    priceValue: 500,
    image: "/images/sachet-100g.jpg",
    category: "Poudre",
    ingredients: "Persil, Céleri, Coriandre, Oignon, Ail, Gingembre, Sel marin, Poivre noir",
  },
  {
    id: 2,
    name: "Sachet 500g",
    description: "Format familial - Idéal pour les restaurants et les grandes familles. 100% naturel sans conservateurs",
    price: "2 500 FCFA",
    priceValue: 2500,
    image: "/images/sachet-500g.jpg",
    category: "Poudre",
    ingredients: "Persil, Céleri, Coriandre, Oignon, Ail, Gingembre, Sel marin, Poivre noir",
  },
  {
    id: 3,
    name: "Cubes Naturels",
    description: "Alternative saine aux cubes industriels. Exhausteur de goût 100% naturel pour vos bouillons",
    price: "400 FCFA",
    priceValue: 400,
    image: "/images/cubes-nokoss.jpg",
    category: "Cubes",
    ingredients: "Légumes verts, Épices naturelles, Sel marin",
  },
  {
    id: 4,
    name: "Pack Découverte",
    description: "1 sachet 100g + 2 tablettes de cubes naturels. Parfait pour découvrir nos produits",
    price: "1 200 FCFA",
    priceValue: 1200,
    image: "/images/hero-spices.jpg",
    category: "Packs",
    ingredients: "Assortiment complet de nos produits naturels",
  },
  {
    id: 5,
    name: "Rossi de base",
    description: "1 sachet 1kg . Parfait pour vos assaisonnement naturel de base",
    price: "4 500 FCFA",
    priceValue: 4500,
    image: "/images/nokoss-rossi.jpeg",
    category: "Nokoss rossi",
    ingredients: "Persil, Céleri, Coriandre, Oignon, Ail, Gingembre, Sel marin, Poivre noir",
  },
]

const categories = ["Tous", "Poudre", "Cubes", "Packs"]

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const { addToCart } = useCart()

  const filteredProducts = activeCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="produits" className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-sans">
            Notre Gamme
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-balance">
            Assaisonnements Naturels
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
            Chaque produit est soigneusement préparé à partir d&apos;ingrédients 
            locaux sélectionnés, séchés et broyés selon des méthodes traditionnelles 
            pour préserver toutes leurs saveurs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 text-sm tracking-widest uppercase font-sans transition-all rounded-sm",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <article 
              key={product.id} 
              className="group bg-background rounded-sm overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
                {/* Badge 100% Naturel */}
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs tracking-widest uppercase font-sans rounded-sm">
                  100% Naturel
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-xs tracking-widest uppercase text-primary mb-2 font-sans">
                  {product.category}
                </p>
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-serif text-primary">{product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs tracking-widest uppercase bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm font-sans"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Wholesale CTA */}
        <div className="mt-16 text-center p-8 bg-background rounded-sm border border-border">
          <h3 className="text-2xl font-serif mb-4">Grossistes et Professionnels</h3>
          <p className="text-muted-foreground font-sans mb-6 max-w-xl mx-auto">
            Vous êtes un restaurant, hôtel, supermarché ou épicerie ? 
            Contactez-nous pour découvrir nos tarifs professionnels B2B.
          </p>
          <a 
            href="mailto:thiernogueye432@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors font-sans"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  )
}
