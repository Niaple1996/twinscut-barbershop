import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The TwinsCut – Barbershop Wuppertal',
    short_name: 'TwinsCut',
    description: 'Premium Barbershop in Wuppertal Elberfeld. Fade, Skin Fade, Haarschnitt & Bartpflege.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#C9A84C',
    icons: [
      { src: '/images/logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/logo.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
