import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'
import BarberShopSchema from '@/components/seo/BarberShopSchema'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://twinscut.de'),
  title: {
    default: 'The TwinsCut – Barbershop Wuppertal | Premium Haarschnitte seit 2020',
    template: '%s | The TwinsCut Barbershop Wuppertal',
  },
  description:
    'The TwinsCut – Wuppertals Premium-Barbershop in Elberfeld. Fade, Skin Fade, Haarschnitt und Bartpflege. Seit 2020. Jetzt online Termin buchen.',
  keywords: [
    'Barbershop Wuppertal',
    'Friseur Wuppertal',
    'Haarschnitt Wuppertal',
    'Fade Wuppertal',
    'Barber Elberfeld',
    'The TwinsCut',
    'Skin Fade Wuppertal',
    'Bartpflege Wuppertal',
  ],
  authors: [{ name: 'The TwinsCut', url: 'https://twinscut.de' }],
  creator: 'The TwinsCut',
  publisher: 'The TwinsCut',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'The TwinsCut',
    images: [
      {
        url: '/images/og-default.png',
        width: 1200,
        height: 630,
        alt: 'The TwinsCut – Premium Barbershop Wuppertal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The TwinsCut – Barbershop Wuppertal',
    description: 'Premium Barbershop in Wuppertal. Fade, Skin Fade, Haarschnitt & Bartpflege seit 2020.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col">
        <BarberShopSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn btn-gold btn-sm"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
