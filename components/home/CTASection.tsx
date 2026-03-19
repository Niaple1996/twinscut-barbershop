import Link from 'next/link'
import { businessInfo } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CTASection() {
  return (
    <section
      className="py-20 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1200 0%, #0d0d0d 40%, #1a1200 100%)',
        borderTop: '1px solid #2a2a2a',
      }}
      aria-label="Termin buchen"
    >
      {/* Gold glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px pointer-events-none"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        aria-hidden="true"
      />
      {/* Subtle radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto text-center relative">
        <ScrollReveal>
          <span className="section-label justify-center mb-5">Bereit?</span>
          <h2 className="font-playfair text-h1 text-cream mt-4">
            Dein nächster Haarschnitt wartet
          </h2>
          <p className="mt-4 text-[16px]" style={{ color: '#A89F94', maxWidth: '480px', margin: '16px auto 0' }}>
            Buche jetzt deinen Termin online oder ruf uns an. Walk-ins sind natürlich auch
            willkommen – sofern Platz verfügbar.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/termin" className="btn btn-gold">
              Jetzt online buchen
            </Link>
            <a
              href={`tel:${businessInfo.phone}`}
              className="btn btn-outline"
            >
              {businessInfo.phoneDisplay} anrufen
            </a>
          </div>
          <p className="mt-5 text-[12px]" style={{ color: '#5C564E' }}>
            Mo–Fr 10–20 Uhr · Sa 9–18 Uhr · Walk-ins willkommen
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
