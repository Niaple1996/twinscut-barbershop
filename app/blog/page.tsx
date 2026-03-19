import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import BlogCard from '@/components/blog/BlogCard'
import { blogPosts } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog & Tipps – Haarschnitt, Bartpflege & Barbershop Wuppertal',
  description:
    'Tipps und Wissen rund um Haarschnitt, Fade, Bartpflege und den besten Barbershop in Wuppertal. Geschrieben von The TwinsCut.',
  alternates: { canonical: 'https://twinscut.de/blog' },
}

const categories = [
  { id: 'alle', label: 'Alle Artikel' },
  { id: 'wuppertal', label: 'Wuppertal' },
  { id: 'haarschnitt', label: 'Haarschnitt' },
  { id: 'bartpflege', label: 'Bartpflege' },
  { id: 'frisur-guide', label: 'Frisur-Guide' },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }]} />

      <PageHero
        title="Tipps & Wissen"
        subtitle="Alles über Haarschnitte, Bartpflege und den besten Barbershop in Wuppertal – direkt von The TwinsCut."
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="px-4 py-2 rounded-full text-[13px] font-medium cursor-default"
                style={{
                  background: cat.id === 'alle' ? '#C9A84C' : '#111111',
                  color: cat.id === 'alle' ? '#0a0a0a' : '#A89F94',
                  border: '1px solid #2a2a2a',
                }}
              >
                {cat.label}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} direction="up" delay={(i % 3) * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          {/* Local SEO callout */}
          <ScrollReveal delay={0.4}>
            <div
              className="mt-14 p-8 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              style={{
                background: '#111111',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              <div>
                <p className="font-playfair text-[1.1rem] text-cream">
                  Du suchst einen Barbershop in Wuppertal?
                </p>
                <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>
                  Komm vorbei oder buch direkt online – ohne Wartezeit.
                </p>
              </div>
              <Link href="/termin" className="btn btn-gold shrink-0">
                Termin buchen →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
