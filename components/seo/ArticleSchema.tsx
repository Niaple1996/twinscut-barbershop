import JsonLd from './JsonLd'
import { businessInfo } from '@/lib/data'
import type { BlogPost } from '@/types'

interface ArticleSchemaProps {
  post: BlogPost
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: businessInfo.name,
      url: businessInfo.website,
    },
    publisher: {
      '@type': 'Organization',
      name: businessInfo.name,
      url: businessInfo.website,
      logo: {
        '@type': 'ImageObject',
        url: `${businessInfo.website}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${businessInfo.website}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(', '),
  }

  return <JsonLd data={data} />
}
