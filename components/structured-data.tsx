const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://senuniversalnokoss.com/#organization",
      name: "Sén Universal NOKOSS",
      legalName: "UNIVERSAL NOKOSS SARL",
      url: "https://senuniversalnokoss.com",
      logo: "https://senuniversalnokoss.com/images/logo-nokoss.jpg",
      description:
        "Production et commercialisation de produits d'assaisonnement naturels et d'art culinaire en poudre, 100% naturel, sans additifs chimiques.",
      email: "thiernogueye432@gmail.com",
      telephone: "+221778955343",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mbour",
        addressRegion: "Thiès",
        addressCountry: "SN",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://senuniversalnokoss.com/#website",
      url: "https://senuniversalnokoss.com",
      name: "Sén Universal NOKOSS",
      description: "Le goût naturel au coeur de votre cuisine",
      publisher: {
        "@id": "https://senuniversalnokoss.com/#organization",
      },
      inLanguage: "fr-SN",
    },
    {
      "@type": "Product",
      name: "Sachet 100g - Assaisonnement Naturel NOKOSS",
      image: "https://senuniversalnokoss.com/images/sachet-100g.jpg",
      description:
        "Assaisonnement naturel en poudre - Mélange de persil, céleri, oignon, ail, gingembre et poivre noir. 100% naturel sans additifs.",
      brand: {
        "@type": "Brand",
        name: "NOKOSS",
      },
      offers: {
        "@type": "Offer",
        price: "500",
        priceCurrency: "XOF",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "Sachet 500g - Assaisonnement Naturel NOKOSS",
      image: "https://senuniversalnokoss.com/images/sachet-500g.jpg",
      description:
        "Format familial - Idéal pour les restaurants et les grandes familles. 100% naturel sans conservateurs.",
      brand: {
        "@type": "Brand",
        name: "NOKOSS",
      },
      offers: {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "XOF",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "Product",
      name: "Cubes Naturels NOKOSS",
      image: "https://senuniversalnokoss.com/images/cubes-nokoss.jpg",
      description:
        "Alternative saine aux cubes industriels. Exhausteur de goût 100% naturel pour vos bouillons.",
      brand: {
        "@type": "Brand",
        name: "NOKOSS",
      },
      offers: {
        "@type": "Offer",
        price: "400",
        priceCurrency: "XOF",
        availability: "https://schema.org/InStock",
      },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
