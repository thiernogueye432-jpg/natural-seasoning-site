"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { CartButton } from "@/components/cart"
import { InstallButton } from "@/components/install-button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#produits" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Produits
            </Link>
            <Link 
              href="#histoire" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Notre Histoire
            </Link>
            <Link 
              href="#processus" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Processus
            </Link>
            <Link 
              href="#contact" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button + Cart */}
          <div className="hidden md:flex items-center gap-4">
            <InstallButton />
            <CartButton />
            <Link
              href="#produits"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors"
            >
              Commander
            </Link>
          </div>

          {/* Mobile Cart + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartButton />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-80 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            <Link 
              href="#produits" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Produits
            </Link>
            <Link 
              href="#histoire" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Notre Histoire
            </Link>
            <Link 
              href="#processus" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Processus
            </Link>
            <Link 
              href="#contact" 
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#produits"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase rounded-sm hover:bg-primary/90 transition-colors mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commander
            </Link>
            <InstallButton className="inline-flex items-center justify-center gap-2 px-6 py-2.5 border border-primary text-primary text-sm tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors" />
          </div>
        </div>
      </nav>
    </header>
  )
}
