import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MapPinIcon, ClockIcon, PhoneIcon } from '@/components/ui/Icons'
import { businessInfo, openingHours } from '@/lib/data'

const neighborhoods = [
  { name: 'Elberfeld', note: 'Direkt im Zentrum' },
  { name: 'Barmen', note: '10 Min. entfernt' },
  { name: 'Vohwinkel', note: '15 Min. entfernt' },
  { name: 'Oberbarmen', note: '12 Min. entfernt' },
  { name: 'Ronsdorf', note: '18 Min. entfernt' },
  { name: 'Remscheid', note: '20 Min. entfernt' },
]

export default function WuppertalSection() {
  return (
    <section
      className="py-20 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a' }}
      aria-label="Standort Wuppertal"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Text content */}
        <ScrollReveal direction="left">
          <div>
            <span className="section-label mb-4">Unser Standort</span>
            <h2 className="font-playfair text-h2 text-cream mt-4 mb-5">
              Dein Barbershop in Wuppertal – von Elberfeld bis Barmen
            </h2>
            <div className="prose-dark">
              <p>
                The TwinsCut ist der Premium-Barbershop im Herzen von Wuppertal Elberfeld. Seit 2020
                kommen Kunden aus dem gesamten Bergischen Land zu uns – aus Barmen, Vohwinkel,
                Oberbarmen, Ronsdorf und sogar aus dem benachbarten Remscheid und Solingen.
              </p>
              <p>
                Was uns auszeichnet? Wir nehmen uns Zeit für jeden Kunden. Kein Fließband,
                keine Kompromisse. Nur präzise Arbeit, hochwertige Produkte und eine
                entspannte Atmosphäre, in der du dich wohlfühlst.
              </p>
            </div>

            {/* Neighborhood tags */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest font-bold mb-3" style={{ color: '#5C564E' }}>
                Kunden aus der Region
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <div
                    key={n.name}
                    className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                    style={{
                      background: '#111111',
                      border: '1px solid #2a2a2a',
                      color: '#A89F94',
                    }}
                  >
                    <span style={{ color: '#C9A84C' }}>📍</span> {n.name}
                    <span className="ml-1 text-[11px]" style={{ color: '#5C564E' }}>
                      · {n.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Info card + map */}
        <ScrollReveal direction="right" delay={0.15}>
          <div className="space-y-4">
            {/* Address card */}
            <div className="card-dark p-6">
              <h3 className="font-playfair text-[1.1rem] text-cream mb-4">Anfahrt & Kontakt</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPinIcon size={16} className="mt-0.5 shrink-0" style={{ color: '#C9A84C' }} />
                  <div>
                    <p className="text-[14px]" style={{ color: '#F5F0E8' }}>
                      {businessInfo.street}
                    </p>
                    <p className="text-[13px]" style={{ color: '#5C564E' }}>
                      {businessInfo.zip} {businessInfo.city} · Elberfeld
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon size={16} className="shrink-0" style={{ color: '#C9A84C' }} />
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="text-[14px] hover:text-[#F5F0E8] transition-colors"
                    style={{ color: '#A89F94' }}
                  >
                    {businessInfo.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon size={16} className="mt-0.5 shrink-0" style={{ color: '#C9A84C' }} />
                  <div className="text-[13px]">
                    {openingHours.map((oh) => (
                      <div key={oh.day} className="flex justify-between gap-6">
                        <span style={{ color: '#5C564E' }}>{oh.day.slice(0, 2)}</span>
                        <span style={{ color: oh.hours === 'Geschlossen' ? '#3a3530' : '#A89F94' }}>
                          {oh.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/termin" className="btn btn-gold btn-sm flex-1 justify-center">
                  Termin buchen
                </Link>
                <a
                  href={businessInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm flex-1 justify-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map embed (DSGVO: static + click to load) */}
            <MapEmbed />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// DSGVO-compliant map: static image first, load iframe on click
function MapEmbed() {
  return (
    <div
      className="rounded-xl overflow-hidden relative"
      style={{ aspectRatio: '16/9', background: '#1a1a1a', border: '1px solid #2a2a2a' }}
    >
      {/* Static map placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <MapPinIcon size={32} style={{ color: '#C9A84C' }} />
        <p className="text-[13px] font-semibold" style={{ color: '#F5F0E8' }}>
          The TwinsCut – Wuppertal Elberfeld
        </p>
        <p className="text-[12px]" style={{ color: '#5C564E' }}>
          {businessInfo.street}, {businessInfo.zip} Wuppertal
        </p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.street + ', ' + businessInfo.zip + ' ' + businessInfo.city)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm mt-2"
        >
          In Google Maps öffnen
        </a>
      </div>
    </div>
  )
}
