import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { StorySection } from "@/components/story-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Cart } from "@/components/cart"
import { CartProvider } from "@/context/cart-context"
import { InstallPrompt } from "@/components/install-prompt"

export default function HomePage() {
  return (
    <CartProvider>
      <main>
        <Header />
        <HeroSection />
        <ProductsSection />
        <StorySection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
      <Cart />
      <InstallPrompt />
    </CartProvider>
  )
}
