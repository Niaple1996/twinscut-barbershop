export interface NavItem {
  label: string
  href: string
  highlight?: boolean
}

export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number
  popular?: boolean
}

export interface ServiceCategory {
  id: string
  name: string
  icon: string
  services: Service[]
}

export interface Barber {
  id: string
  name: string
  role: string
  specialty: string[]
  bio: string
  image: string
  yearsExperience: number
  instagram?: string
}

export interface Review {
  id: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
  text: string
  date: string
  source: 'google' | 'instagram' | 'direct'
  neighborhood?: string
}

export type BlogCategory = 'wuppertal' | 'haarschnitt' | 'bartpflege' | 'frisur-guide'

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: BlogCategory
  categoryLabel: string
  readTime: string
  datePublished: string
  dateModified: string
  image?: string
  keywords: string[]
  excerpt: string
}
