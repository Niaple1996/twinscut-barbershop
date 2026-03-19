import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRightIcon } from '@/components/ui/Icons'

// Gallery placeholder items (real images to be dropped into /public/images/gallery/)
const galleryItems = [
  { id: 'g1', alt: 'Skin Fade Wuppertal TwinsCut', label: 'Skin Fade', aspect: 'tall' },
  { id: 'g2', alt: 'High Fade Haarschnitt', label: 'High Fade', aspect: 'wide' },
  { id: 'g3', alt: 'Classic Cut TwinsCut', label: 'Classic Cut', aspect: 'square' },
  { id: 'g4', alt: 'Bartpflege Nassrasur', label: 'Bartpflege', aspect: 'square' },
  { id: 'g5', alt: 'Mid Fade Wuppertal', label: 'Mid Fade', aspect: 'wide' },
  { id: 'g6', alt: 'Textured Cut', label: 'Textured', aspect: 'tall' },
]

function GalleryPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center"
      style={{ background: '#1a1a1a' }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="mt-2 text-[11px]" style={{ color: '#2a2a2a' }}>{label}</span>
    </div>
  )
}

export default function GalleryPreview() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}
      aria-label="Galerie"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="section-label mb-3">Unsere Arbeit</span>
              <h2 className="font-playfair text-h2 text-cream mt-3">Galerie</h2>
            </div>
            <Link
              href="/galerie"
              className="flex items-center gap-2 text-[13px] font-semibold shrink-0 transition-colors"
              style={{ color: '#C9A84C' }}
            >
              Alle Fotos
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryItems.map((item, i) => (
            <ScrollReveal key={item.id} direction="scale" delay={i * 0.08}>
              <Link
                href="/galerie"
                className="block relative rounded-xl overflow-hidden group"
                style={{ aspectRatio: item.aspect === 'tall' ? '3/4' : item.aspect === 'wide' ? '4/3' : '1/1' }}
                aria-label={`Galerie – ${item.alt}`}
              >
                <GalleryPlaceholder label={item.label} />

                {/* Real image (when available) */}
                <Image
                  src={`/images/gallery/${item.id}.jpg`}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 3 ? 'eager' : 'lazy'}

                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
                >
                  <span
                    className="text-[12px] font-semibold uppercase tracking-wide"
                    style={{ color: '#C9A84C' }}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.5}>
          <div className="mt-10 text-center">
            <Link href="/galerie" className="btn btn-outline">
              Alle Fotos ansehen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
