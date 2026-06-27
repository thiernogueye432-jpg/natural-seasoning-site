import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sén Universal NOKOSS',
    short_name: 'NOKOSS',
    description:
      'Assaisonnements naturels en poudre, 100% naturel sans additifs chimiques. Sachets 100g, 500g et cubes naturels.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#fdfbf7',
    theme_color: '#b5471f',
    lang: 'fr',
    categories: ['food', 'shopping'],
    icons: [
      {
        src: '/icons/app-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/app-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/app-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
