import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/sections/PageHero'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { businessInfo, openingHours } from '@/lib/data'
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, WhatsAppIcon, InstagramIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Kontakt & Anfahrt – Barbershop Wuppertal Elberfeld',
  description:
    'Kontakt und Anfahrt zum The TwinsCut Barbershop in Wuppertal Elberfeld. Öffnungszeiten, Adresse, Telefon und Online-Buchung.',
  alternates: { canonical: 'https://twinscut.de/kontakt' },
}

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Kontakt', href: '/kontakt' }]} />

      <PageHero
        title="Kontakt & Anfahrt"
        subtitle="Wir freuen uns auf deinen Besuch. Komm einfach vorbei oder buch deinen Termin online."
        breadcrumbs={[{ label: 'Kontakt' }]}
      />

      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <ScrollReveal direction="left">
            <div className="card-dark p-8">
              <h2 className="font-playfair text-h3 text-cream mb-6">Nachricht schreiben</h2>
              <ContactForm />
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-5">
              {/* Address */}
              <div className="card-dark p-6">
                <h2 className="font-playfair text-[1.1rem] text-cream mb-4">Adresse & Kontakt</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPinIcon size={16} className="mt-0.5 shrink-0" style={{ color: '#C9A84C' }} />
                    <div>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.street + ', ' + businessInfo.zip + ' ' + businessInfo.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] hover:text-[#C9A84C] transition-colors"
                        style={{ color: '#F5F0E8' }}
                      >
                        {businessInfo.street}<br />
                        {businessInfo.zip} {businessInfo.city}
                      </a>
                      <p className="text-[12px] mt-0.5" style={{ color: '#5C564E' }}>Stadtteil: Elberfeld</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <PhoneIcon size={16} className="shrink-0" style={{ color: '#C9A84C' }} />
                    <a href={`tel:${businessInfo.phone}`} className="text-[14px] hover:text-[#C9A84C] transition-colors" style={{ color: '#F5F0E8' }}>
                      {businessInfo.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MailIcon size={16} className="shrink-0" style={{ color: '#C9A84C' }} />
                    <a href={`mailto:${businessInfo.email}`} className="text-[14px] hover:text-[#C9A84C] transition-colors" style={{ color: '#F5F0E8' }}>
                      {businessInfo.email}
                    </a>
                  </li>
                </ul>
                <div className="flex gap-2 mt-5">
                  <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex-1 justify-center">
                    <WhatsAppIcon size={14} /> WhatsApp
                  </a>
                  <a href={businessInfo.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex-1 justify-center">
                    <InstagramIcon size={14} /> Instagram
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div className="card-dark p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ClockIcon size={16} style={{ color: '#C9A84C' }} />
                  <h2 className="font-playfair text-[1.1rem] text-cream">Öffnungszeiten</h2>
                </div>
                <ul className="space-y-2">
                  {openingHours.map((oh) => {
                    const today = new Date().toLocaleDateString('de-DE', { weekday: 'long' })
                    const isToday = today === oh.day
                    return (
                      <li
                        key={oh.day}
                        className="flex justify-between text-[14px] py-1.5"
                        style={{
                          borderBottom: '1px solid #1a1a1a',
                          fontWeight: isToday ? 600 : 400,
                        }}
                      >
                        <span style={{ color: isToday ? '#F5F0E8' : '#5C564E' }}>{oh.day}</span>
                        <span style={{ color: oh.hours === 'Geschlossen' ? '#3a3530' : isToday ? '#C9A84C' : '#A89F94' }}>
                          {oh.hours}
                        </span>
                      </li>
                    )
                  })}
                </ul>
                <p className="mt-3 text-[12px]" style={{ color: '#5C564E' }}>
                  * Walk-ins willkommen – online Termin empfohlen
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #2a2a2a' }}>
                <div
                  className="flex flex-col items-center justify-center gap-3 p-8 text-center"
                  style={{ background: '#111111' }}
                >
                  <MapPinIcon size={28} style={{ color: '#C9A84C' }} />
                  <p className="text-[14px] font-semibold" style={{ color: '#F5F0E8' }}>
                    The TwinsCut – Wuppertal Elberfeld
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.street + ', ' + businessInfo.zip + ' ' + businessInfo.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    In Google Maps öffnen
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}

// ─── Contact Form ────────────────────────────────────────────────────────────

function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium mb-1.5" style={{ color: '#A89F94' }}>
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Dein Name"
            className="w-full px-4 py-3 rounded-lg text-[14px] transition-colors"
            style={{
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              color: '#F5F0E8',
            }}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[13px] font-medium mb-1.5" style={{ color: '#A89F94' }}>
            Telefon / E-Mail *
          </label>
          <input
            id="phone"
            name="contact"
            type="text"
            required
            placeholder="0202 … oder name@mail.de"
            className="w-full px-4 py-3 rounded-lg text-[14px] transition-colors"
            style={{
              background: '#1a1a1a',
              border: '1px solid #2a2a2a',
              color: '#F5F0E8',
            }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-[13px] font-medium mb-1.5" style={{ color: '#A89F94' }}>
          Betreff
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Worum geht es?"
          className="w-full px-4 py-3 rounded-lg text-[14px]"
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            color: '#F5F0E8',
          }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[13px] font-medium mb-1.5" style={{ color: '#A89F94' }}>
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Deine Nachricht ..."
          className="w-full px-4 py-3 rounded-lg text-[14px] resize-y"
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            color: '#F5F0E8',
            minHeight: '120px',
          }}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 shrink-0 accent-[#C9A84C]"
        />
        <label htmlFor="privacy" className="text-[12px] leading-relaxed" style={{ color: '#5C564E' }}>
          Ich habe die{' '}
          <Link href="/datenschutz" className="underline hover:no-underline" style={{ color: '#C9A84C' }}>
            Datenschutzerklärung
          </Link>{' '}
          gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
        </label>
      </div>

      <button type="submit" className="btn btn-gold w-full justify-center">
        Nachricht senden
      </button>
    </form>
  )
}
