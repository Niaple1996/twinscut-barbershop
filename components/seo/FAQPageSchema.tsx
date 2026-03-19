import JsonLd from './JsonLd'

interface FAQItem {
  question: string
  answer: string
}

interface FAQPageSchemaProps {
  items: FAQItem[]
}

export default function FAQPageSchema({ items }: FAQPageSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}
