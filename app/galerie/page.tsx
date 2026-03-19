import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { businessInfo } from '@/lib/data'
import { InstagramIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Galerie – Haarschnitte & Fades in Wuppertal',
  description:
    'Galerie von The TwinsCut – Skin Fade, High Fade, Classic Cut und Bartpflege. Schau dir unsere Arbeit an und buch deinen Termin in Wuppertal.',
  alternates: { canonical: 'https://twinscut.de/galerie' },
}

const categories = ['Alle', 'Fade', 'Skin Fade', 'Classic', 'Bart']

const photos = [
  { id: 'g1', alt: 'Skin Fade Wuppertal TwinsCut', category: 'Skin Fade' },
  { id: 'g2', alt: 'High Fade Haarschnitt Wuppertal', category: 'Fade' },
  { id: 'g3', alt: 'Classic Cut TwinsCut Barbershop', category: 'Classic' },
  { id: 'g4', alt: 'Bartpflege Nassrasur Wuppertal', category: 'Bart' },
  { id: 'g5', alt: 'Mid Fade Wuppertal', category: 'Fade' },
  { id: 'g6', alt: 'Textured Cut TwinsCut', category: 'Classic' },
  { id: 'g7', alt: 'Low Fade Haarschnitt', category: 'Fade' },
  { id: 'g8', alt: 'Skin Fade mit Musterschnitt', category: 'Skin Fade' },
  { id: 'g9', alt: 'Bart trimmen Wuppertal', category: 'Bart' },
  { id: 'g10', alt: 'Undercut TwinsCut Wuppertal', category: 'Classic' },
  { id: 'g11', alt: 'High Fade mit Textur', category: 'Fade' },
  { id: 'g12', alt: 'Skin Fade Barmen Elberfeld', category: 'Skin Fade' },
]

export default function GaleriePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Galerie', href: '/galerie' }]} />

      <PageHero
        title="Unsere Arbeit"
        subtitle={`${photos.length} Fotos – Fade, Classic Cut, Bartpflege und mehr.`}
        breadcrumbs={[{ label: 'Galerie' }]}
        centered
      />

      {/* Grid */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          {/* Category pills (static - no JS filter needed for SSR SEO) */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-[13px] font-medium cursor-default"
                style={{
                  background: cat === 'Alle' ? '#C9A84C' : '#111111',
                  color: cat === 'Alle' ? '#0a0a0a' : '#A89F94',
                  border: '1px solid #2a2a2a',
                }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Photo grid - CSS columns for natural masonry */}
          <div
            className="columns-2 md:columns-3 lg:columns-4 gap-3"
            style={{ columnGap: '12px' }}
          >
            {photos.map((photo, i) => (
              <ScrollReveal key={photo.id} direction="scale" delay={(i % 4) * 0.06}>
                <div
                  className="break-inside-avoid mb-3 rounded-xl overflow-hidden relative group"
                  style={{
                    background: '#1a1a1a',
                    aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/5',
                  }}
                >
                  {/* Placeholder */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: '#2a2a2a' }}
                    aria-hidden="true"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>

                  <Image
                    src={`/images/gallery/${photo.id}.jpg`}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 6 ? 'eager' : 'lazy'}

                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
                  >
                    <span
                      className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full"
                      style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
                    >
                      {photo.category}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section
        className="py-14 px-6 text-center"
        style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}
      >
        <ScrollReveal>
          <p className="text-[13px] uppercase tracking-widest font-medium mb-3" style={{ color: '#5C564E' }}>
            Noch mehr Fotos
          </p>
          <h2 className="font-playfair text-h3 text-cream mb-5">
            Folg uns auf Instagram
          </h2>
          <a
            href={businessInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex"
          >
            <InstagramIcon size={16} />
            @thetwinscut_wuppertal
          </a>
          <p className="mt-4 text-[12px]" style={{ color: '#5C564E' }}>
            Täglich neue Fotos direkt aus dem Shop
          </p>
        </ScrollReveal>
      </section>
    </>
  )
}
