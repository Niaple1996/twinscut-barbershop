import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { businessInfo, openingHours } from '@/lib/data'
import { BookingIcon, PhoneIcon, ClockIcon, CheckIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Termin buchen – Barbershop Wuppertal',
  description:
    'Buche deinen Termin beim The TwinsCut Barbershop in Wuppertal online – einfach, schnell und ohne Wartezeit.',
  alternates: { canonical: 'https://twinscut.de/termin' },
}

const steps = [
  {
    num: '01',
    title: 'Leistung wählen',
    text: 'Haarschnitt, Fade, Bart oder Komplett-Paket – wähle aus unserem Angebot.',
  },
  {
    num: '02',
    title: 'Datum & Uhrzeit',
    text: 'Wähle einen freien Slot – Mo bis Fr 10–20 Uhr, Sa 9–18 Uhr.',
  },
  {
    num: '03',
    title: 'Bestätigung',
    text: 'Du erhältst sofort eine Bestätigung per E-Mail oder SMS.',
  },
]

export default function TerminPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Termin buchen', href: '/termin' }]} />

      <PageHero
        title="Termin buchen"
        subtitle="Online buchen – ohne Wartezeit. Einfach, schnell und direkt."
        breadcrumbs={[{ label: 'Termin buchen' }]}
        centered
      />

      {/* Steps */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
              {steps.map((step, i) => (
                <ScrollReveal key={step.num} direction="up" delay={i * 0.12}>
                  <div className="text-center">
                    <span
                      className="font-playfair text-[3rem] font-bold block leading-none"
                      style={{ color: 'rgba(201,168,76,0.15)' }}
                    >
                      {step.num}
                    </span>
                    <h3 className="font-playfair text-[1.1rem] text-cream mt-2 mb-2">{step.title}</h3>
                    <p className="text-[14px]" style={{ color: '#5C564E' }}>{step.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Main booking CTA card */}
          <ScrollReveal direction="scale">
            <div
              className="p-10 rounded-2xl text-center relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1a1200 0%, #111111 60%, #1a1200 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Gold glow */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px pointer-events-none"
                style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
                aria-hidden="true"
              />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
              >
                <BookingIcon size={28} />
              </div>

              <h2 className="font-playfair text-h2 text-cream mb-3">
                Jetzt online buchen
              </h2>
              <p className="text-[15px] mb-8" style={{ color: '#A89F94', maxWidth: '400px', margin: '12px auto 32px' }}>
                Wähle deinen Wunschtermin direkt in unserem Buchungssystem. Schnell, kostenlos und jederzeit verfügbar.
              </p>

              <a
                href={businessInfo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-[16px] px-10"
              >
                Zum Buchungssystem
              </a>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-[12px]" style={{ color: '#5C564E' }}>
                {['Kostenlos & unverbindlich', 'Sofortbestätigung', 'Erinnerung per SMS'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckIcon size={12} style={{ color: '#C9A84C' }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Alternative contact */}
      <section className="py-14 px-6" style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          <ScrollReveal direction="left">
            <div className="card-dark p-6">
              <div className="flex items-center gap-3 mb-3">
                <PhoneIcon size={18} style={{ color: '#C9A84C' }} />
                <h3 className="font-playfair text-[1rem] text-cream">Telefonisch</h3>
              </div>
              <p className="text-[13px] mb-3" style={{ color: '#5C564E' }}>
                Kein passender Termin online? Ruf uns direkt an.
              </p>
              <a href={`tel:${businessInfo.phone}`} className="btn btn-outline btn-sm w-full justify-center">
                {businessInfo.phoneDisplay}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="card-dark p-6">
              <div className="flex items-center gap-3 mb-3">
                <ClockIcon size={18} style={{ color: '#C9A84C' }} />
                <h3 className="font-playfair text-[1rem] text-cream">Öffnungszeiten</h3>
              </div>
              <ul className="text-[13px] space-y-1">
                {openingHours.slice(0, 3).map((oh) => (
                  <li key={oh.day} className="flex justify-between">
                    <span style={{ color: '#5C564E' }}>{oh.day.slice(0, 2)}</span>
                    <span style={{ color: '#A89F94' }}>{oh.hours}</span>
                  </li>
                ))}
                <li className="flex justify-between">
                  <span style={{ color: '#5C564E' }}>Sa</span>
                  <span style={{ color: '#A89F94' }}>09:00 – 18:00</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
