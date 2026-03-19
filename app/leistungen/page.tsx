import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import FAQPageSchema from '@/components/seo/FAQPageSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { serviceCategories, leistungenFAQ, businessInfo } from '@/lib/data'
import { CheckIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Leistungen & Preise – Barbershop Wuppertal',
  description:
    'Preise für Haarschnitte, Fade, Skin Fade, Bartpflege und Nassrasur beim Barbershop in Wuppertal. Ab 18 €. Komplett-Paket ab 40 €.',
  alternates: { canonical: 'https://twinscut.de/leistungen' },
}

export default function LeistungenPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Leistungen & Preise', href: '/leistungen' }]} />
      <FAQPageSchema items={leistungenFAQ} />

      <PageHero
        title="Leistungen & Preise"
        subtitle="Von klassischen Haarschnitten bis zur Nassrasur – transparente Preise, professionelle Ergebnisse."
        breadcrumbs={[{ label: 'Leistungen & Preise' }]}
      />

      {/* Services */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-5xl mx-auto space-y-12">
          {serviceCategories.map((cat, ci) => (
            <ScrollReveal key={cat.id} direction="up" delay={ci * 0.1}>
              <div>
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="gold-line flex-shrink-0" style={{ width: 32 }} />
                  <h2 className="font-playfair text-h2 text-cream">{cat.name}</h2>
                </div>

                {/* Service rows */}
                <div className="space-y-3">
                  {cat.services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-start sm:items-center justify-between gap-4 p-5 rounded-xl transition-colors group"
                      style={{
                        background: '#111111',
                        border: '1px solid #2a2a2a',
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-[15px] font-semibold" style={{ color: '#F5F0E8' }}>
                            {service.name}
                          </h3>
                          {service.popular && (
                            <span
                              className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full"
                              style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
                            >
                              Beliebt
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-[13px]" style={{ color: '#5C564E' }}>
                          {service.description}
                        </p>
                        <p className="mt-1 text-[12px]" style={{ color: '#3a3530' }}>
                          ca. {service.duration} Min.
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className="font-playfair text-[1.4rem] font-bold" style={{ color: '#C9A84C' }}>
                          {service.price} €
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Included always */}
      <section className="py-12 px-6" style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="font-playfair text-h3 text-cream mb-6">Immer dabei – ohne Aufpreis</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              'Persönliche Beratung zum richtigen Schnitt',
              'Professionelles Styling & Finish',
              'Heißes Handtuch bei Bartbehandlungen',
            ].map((item, i) => (
              <ScrollReveal key={item} direction="up" delay={i * 0.1}>
                <div
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: '#0a0a0a', border: '1px solid #2a2a2a' }}
                >
                  <CheckIcon size={16} className="shrink-0 mt-0.5" style={{ color: '#C9A84C' }} />
                  <span className="text-[14px]" style={{ color: '#A89F94' }}>{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <span className="section-label mb-3">Häufige Fragen</span>
              <h2 className="font-playfair text-h2 text-cream mt-4">FAQ</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {leistungenFAQ.map((item, i) => (
              <ScrollReveal key={item.question} direction="up" delay={i * 0.08}>
                <details
                  className="group rounded-xl overflow-hidden"
                  style={{ background: '#111111', border: '1px solid #2a2a2a' }}
                >
                  <summary
                    className="flex items-center justify-between px-6 py-4 cursor-pointer list-none"
                    style={{ color: '#F5F0E8' }}
                  >
                    <span className="text-[15px] font-semibold pr-4">{item.question}</span>
                    <span
                      className="shrink-0 text-[18px] transition-transform duration-200 group-open:rotate-45"
                      style={{ color: '#C9A84C' }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-[14px] leading-relaxed" style={{ color: '#A89F94' }}>
                      {item.answer}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a1200 0%, #0a0a0a 50%, #1a1200 100%)',
          borderTop: '1px solid #2a2a2a',
        }}
      >
        <ScrollReveal>
          <h2 className="font-playfair text-h2 text-cream mb-4">Termin vereinbaren</h2>
          <p className="mb-6 text-[15px]" style={{ color: '#A89F94' }}>
            Buche jetzt deinen Termin – online in unter 2 Minuten.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/termin" className="btn btn-gold">Jetzt buchen</Link>
            <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  )
}
