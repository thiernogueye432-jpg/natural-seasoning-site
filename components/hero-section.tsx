import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-spices.jpg"
          alt="Assaisonnements naturels et épices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-sans">
          100% Naturel - Sans Additifs Chimiques
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-balance mb-8">
          Le goût naturel au coeur de
          <span className="block text-primary mt-2">votre cuisine</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans leading-relaxed">
          Découvrez nos assaisonnements naturels en poudre à base d&apos;épices et 
          légumes locaux du Sénégal. Une alternative saine aux cubes industriels 
          pour sublimer vos plats traditionnels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#produits"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors font-sans"
          >
            Découvrir nos produits
          </Link>
          <Link
            href="#histoire"
            className="inline-flex items-center justify-center px-8 py-4 border border-foreground/30 text-foreground text-sm tracking-widest uppercase rounded-sm hover:border-primary hover:text-primary transition-colors font-sans"
          >
            Notre Histoire
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
