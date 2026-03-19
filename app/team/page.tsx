import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { team, businessInfo } from '@/lib/data'
import { InstagramIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Das Team – Barber Wuppertal',
  description:
    'Lern die Barber von The TwinsCut kennen – zwei Brüder, eine Leidenschaft. Premium-Barbershop in Wuppertal seit 2020.',
  alternates: { canonical: 'https://twinscut.de/team' },
}

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Team', href: '/team' }]} />

      <PageHero
        title="Das Team"
        subtitle="Zwei Brüder. Eine Leidenschaft. Jeder Haarschnitt ist Handwerk."
        breadcrumbs={[{ label: 'Team' }]}
        centered
      />

      {/* Team grid */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((barber, i) => (
            <ScrollReveal key={barber.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.15}>
              <article className="card-dark overflow-hidden">
                {/* Photo */}
                <div
                  className="relative"
                  style={{ aspectRatio: '4/3', background: '#1a1a1a' }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ color: '#2a2a2a' }}
                    aria-hidden="true"
                  >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                  <Image
                    src={barber.image}
                    alt={`${barber.name} – ${barber.role} bei The TwinsCut Wuppertal`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"

                  />
                  {/* Gold overlay on hover */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.7), transparent)' }}
                    aria-hidden="true"
                  />
                </div>

                {/* Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="font-playfair text-[1.75rem] text-cream">{barber.name}</h2>
                      <p className="text-[13px] uppercase tracking-wider font-semibold mt-1" style={{ color: '#C9A84C' }}>
                        {barber.role}
                      </p>
                      <p className="text-[12px] mt-1" style={{ color: '#5C564E' }}>
                        {barber.yearsExperience} Jahre Erfahrung
                      </p>
                    </div>
                    {barber.instagram && (
                      <a
                        href={barber.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl transition-colors"
                        style={{ background: '#1a1a1a', color: '#A89F94' }}
                        aria-label={`${barber.name} auf Instagram`}
                      >
                        <InstagramIcon size={18} />
                      </a>
                    )}
                  </div>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {barber.specialty.map((s) => (
                      <span
                        key={s}
                        className="text-[12px] font-medium px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.15)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-[14px] leading-relaxed" style={{ color: '#A89F94' }}>
                    {barber.bio}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="py-16 px-6"
        style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}
      >
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center mb-5">Unsere Philosophie</span>
            <blockquote className="font-playfair text-[1.5rem] sm:text-[1.75rem] italic mt-6" style={{ color: '#F5F0E8', lineHeight: 1.5 }}>
              &ldquo;Wir glauben, dass jeder Mann verdient, mit einem Haarschnitt rauszugehen,
              auf den er stolz ist. Kein Fließband – nur echte Arbeit.&rdquo;
            </blockquote>
            <p className="mt-4 text-[14px] uppercase tracking-widest font-semibold" style={{ color: '#C9A84C' }}>
              – The TwinsCut, Wuppertal 2020
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center" style={{ background: '#0a0a0a' }}>
        <ScrollReveal>
          <h2 className="font-playfair text-h3 text-cream mb-4">Termin mit deinem Barber</h2>
          <Link href="/termin" className="btn btn-gold">
            Jetzt buchen
          </Link>
        </ScrollReveal>
      </section>
    </>
  )
}
