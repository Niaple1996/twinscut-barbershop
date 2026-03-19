import Link from 'next/link'
import Image from 'next/image'
import { team } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { InstagramIcon, ArrowRightIcon } from '@/components/ui/Icons'

export default function TeamPreview() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}
      aria-label="Das Team"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-14">
            <span className="section-label mb-4">Eure Barber</span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-4">
              <h2 className="font-playfair text-h2 text-cream">Das Team</h2>
              <Link
                href="/team"
                className="flex items-center gap-2 text-[13px] font-semibold transition-colors shrink-0"
                style={{ color: '#C9A84C' }}
              >
                Team kennenlernen
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {team.map((barber, i) => (
            <ScrollReveal key={barber.id} direction={i === 0 ? 'left' : 'right'} delay={i * 0.15}>
              <div className="card-dark overflow-hidden group">
                {/* Photo */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ background: '#1a1a1a' }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: '#2a2a2a' }}
                  >
                    {/* Placeholder when no image */}
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  {/* Real image - will show when available */}
                  <Image
                    src={barber.image}
                    alt={`${barber.name} – ${barber.role}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)',
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-playfair text-[1.35rem] text-cream">{barber.name}</h3>
                      <p className="text-[12px] uppercase tracking-wide font-medium mt-0.5" style={{ color: '#C9A84C' }}>
                        {barber.role}
                      </p>
                    </div>
                    {barber.instagram && (
                      <a
                        href={barber.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg transition-colors"
                        style={{ background: '#1a1a1a', color: '#A89F94' }}
                        aria-label={`${barber.name} auf Instagram`}
                      >
                        <InstagramIcon size={16} />
                      </a>
                    )}
                  </div>

                  {/* Specialty tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {barber.specialty.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-[13px] leading-relaxed line-clamp-3" style={{ color: '#5C564E' }}>
                    {barber.bio}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Philosophy */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-12 p-8 rounded-xl"
            style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.1)' }}
          >
            <blockquote className="font-playfair text-[1.25rem] italic text-center" style={{ color: '#F5F0E8' }}>
              "Zwei Brüder. Eine Leidenschaft. Jeder Haarschnitt ist unser Handwerk."
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
