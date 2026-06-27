"use client"

import Image from "next/image"
import { X, Plus, Minus, ShoppingBag, MessageCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { cn } from "@/lib/utils"

export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-SN").format(price) + " FCFA"
  }

  const generateWhatsAppMessage = () => {
    if (items.length === 0) return ""

    let message = "Bonjour Sen Universal NOKOSS !\n\n"
    message += "Je souhaite passer la commande suivante :\n\n"
    
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`
      message += `   Quantite: ${item.quantity}\n`
      message += `   Prix unitaire: ${item.price}\n`
      message += `   Sous-total: ${formatPrice(item.priceValue * item.quantity)}\n\n`
    })

    message += `----------------------------\n`
    message += `TOTAL: ${formatPrice(getTotalPrice())}\n`
    message += `Nombre d'articles: ${getTotalItems()}\n\n`
    message += `Merci de me confirmer la disponibilite et les modalites de livraison.`

    return encodeURIComponent(message)
  }

  const handleWhatsAppOrder = () => {
    const message = generateWhatsAppMessage()
    window.open(`https://wa.me/221778955343?text=${message}`, "_blank")
  }

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full sm:w-96 bg-background z-50 shadow-xl transition-transform duration-300 flex flex-col",
          isCartOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-serif">Mon Panier</h2>
            <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full font-sans">
              {getTotalItems()}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-secondary rounded-sm transition-colors"
            aria-label="Fermer le panier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground font-sans">Votre panier est vide</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-4 text-primary text-sm underline font-sans"
              >
                Continuer mes achats
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-card rounded-sm border border-border"
                >
                  <div className="relative w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm truncate">{item.name}</h3>
                    <p className="text-primary font-sans text-sm mt-1">{item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                        aria-label="Diminuer la quantite"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-sans text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center border border-border rounded-sm hover:bg-secondary transition-colors"
                        aria-label="Augmenter la quantite"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-muted-foreground hover:text-destructive transition-colors self-start"
                    aria-label="Supprimer du panier"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground font-sans">Total</span>
              <span className="text-xl font-serif text-primary">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-sm hover:bg-[#20BA5A] transition-colors font-sans text-sm tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              Commander via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-3 text-sm text-muted-foreground hover:text-destructive transition-colors font-sans"
            >
              Vider le panier
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4 font-sans">
              Paiement accepte : Wave, Orange Money, Carte Bancaire
            </p>
          </div>
        )}
      </div>
    </>
  )
}

// Cart Icon Button for Header
export function CartButton() {
  const { getTotalItems, setIsCartOpen } = useCart()
  const totalItems = getTotalItems()

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 text-foreground hover:text-primary transition-colors"
      aria-label="Ouvrir le panier"
    >
      <ShoppingBag className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-sans">
          {totalItems}
        </span>
      )}
    </button>
  )
}
