import JsonLd from './JsonLd'
import { businessInfo } from '@/lib/data'

export default function BarberShopSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: businessInfo.name,
    url: businessInfo.website,
    logo: `${businessInfo.website}/images/logo.png`,
    image: `${businessInfo.website}/images/hero-barbershop.jpg`,
    description: 'Premium Barbershop in Wuppertal Elberfeld. Fade, Skin Fade, Haarschnitt und Bartpflege seit 2020.',
    foundingDate: businessInfo.foundingDate,
    priceRange: businessInfo.priceRange,
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, EC-Karte',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.street,
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.state,
      postalCode: businessInfo.zip,
      addressCountry: businessInfo.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.lat,
      longitude: businessInfo.lng,
    },
    telephone: businessInfo.phone,
    email: businessInfo.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: businessInfo.aggregateRating.ratingValue.toString(),
      reviewCount: businessInfo.aggregateRating.reviewCount.toString(),
      bestRating: businessInfo.aggregateRating.bestRating.toString(),
    },
    sameAs: [businessInfo.instagram, businessInfo.tiktok],
  }

  return <JsonLd data={data} />
}
