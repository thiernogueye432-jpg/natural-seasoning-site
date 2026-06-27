import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://senuniversalnokoss.com'),
  title: {
    default: 'Sén Universal NOKOSS | Assaisonnements Naturels en Poudre au Sénégal',
    template: '%s | Sén Universal NOKOSS',
  },
  description: 'Le goût naturel au coeur de votre cuisine. Production et commercialisation de produits d\'assaisonnement naturels et d\'art culinaire en poudre, 100% naturel, sans additifs chimiques. Sachets 100g, 500g et cubes naturels. Livraison au Sénégal.',
  keywords: [
    'assaisonnement naturel',
    'épices naturelles Sénégal',
    'NOKOSS',
    'cubes naturels',
    'bouillon naturel',
    'assaisonnement sans additifs',
    'épices en poudre',
    'cuisine sénégalaise',
    'Mbour',
    'art culinaire',
  ],
  authors: [{ name: 'UNIVERSAL NOKOSS SARL' }],
  creator: 'UNIVERSAL NOKOSS SARL',
  publisher: 'UNIVERSAL NOKOSS SARL',
  alternates: {
    canonical: 'https://senuniversalnokoss.com',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_SN',
    url: 'https://senuniversalnokoss.com',
    siteName: 'Sén Universal NOKOSS',
    title: 'Sén Universal NOKOSS | Assaisonnements Naturels en Poudre',
    description: 'Le goût naturel au coeur de votre cuisine. Assaisonnements 100% naturels, sans additifs chimiques. Sachets 100g, 500g et cubes naturels.',
    images: [
      {
        url: '/images/hero-spices.jpg',
        width: 1200,
        height: 630,
        alt: 'Assaisonnements naturels Sén Universal NOKOSS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sén Universal NOKOSS | Assaisonnements Naturels en Poudre',
    description: 'Le goût naturel au coeur de votre cuisine. Assaisonnements 100% naturels, sans additifs chimiques.',
    images: ['/images/hero-spices.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'food',
  generator: 'v0.app',
  applicationName: 'Sén Universal NOKOSS',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'NOKOSS',
  },
  formatDetection: {
    telephone: true,
  },
  verification: {
    google: 'cxVWwwaTf3DoVu--xKtevwohgXn9Nmc9xsHkD9RwHi8',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icons/app-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#b5471f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <head>
        <StructuredData />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
