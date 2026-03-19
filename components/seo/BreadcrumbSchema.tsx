import JsonLd from './JsonLd'
import { businessInfo } from '@/lib/data'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: businessInfo.website,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: `${businessInfo.website}${item.href}`,
      })),
    ],
  }

  return <JsonLd data={data} />
}
