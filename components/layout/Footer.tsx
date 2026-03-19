import Link from 'next/link'
import { businessInfo, navItems, openingHours } from '@/lib/data'
import { InstagramIcon, TikTokIcon, WhatsAppIcon, MapPinIcon, PhoneIcon, MailIcon } from '@/components/ui/Icons'
import Logo from '@/components/layout/Logo'

const footerLinks = [
  { label: 'Leistungen & Preise', href: '/leistungen' },
  { label: 'Unser Team', href: '/team' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Blog & Tipps', href: '/blog' },
  { label: 'Kontakt & Anfahrt', href: '/kontakt' },
  { label: 'Termin buchen', href: '/termin' },
]

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  const today = new Date()
  const isOpen = (() => {
    const day = today.getDay() // 0=Sun, 6=Sat
    const hour = today.getHours()
    if (day === 0) return false
    if (day === 6) return hour >= 9 && hour < 18
    return hour >= 10 && hour < 20
  })()

  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1a1a1a' }}>
      {/* CTA Band */}
      <div
        className="py-12 px-6 text-center"
        style={{
          background: 'linear-gradient(135deg, #1a1200 0%, #0a0a0a 50%, #1a1200 100%)',
          borderBottom: '1px solid #2a2a2a',
        }}
      >
        <p className="section-label justify-center mb-4">Bereit für deinen nächsten Look?</p>
        <h2 className="font-playfair text-h2 text-cream mb-6">
          Dein Termin in Wuppertal wartet
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/termin" className="btn btn-gold">
            Jetzt Termin buchen
          </Link>
          <a href={businessInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            WhatsApp
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="lg:col-span-1">
          <Logo variant="light" size="sm" />
          <p className="mt-4 text-[13px] leading-relaxed" style={{ color: '#5C564E' }}>
            Premium Barbershop in Wuppertal Elberfeld. Seit 2020 der Anlaufpunkt für Männer, die Wert auf einen perfekten Haarschnitt legen.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href={businessInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors"
              style={{ background: '#1a1a1a', color: '#A89F94' }}
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={businessInfo.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors"
              style={{ background: '#1a1a1a', color: '#A89F94' }}
              aria-label="TikTok"
            >
              <TikTokIcon size={18} />
            </a>
            <a
              href={businessInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg transition-colors"
              style={{ background: '#1a1a1a', color: '#A89F94' }}
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Navigation
          </h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[13px] transition-colors hover:text-[#F5F0E8]"
                  style={{ color: '#5C564E' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3
            className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Öffnungszeiten
          </h3>
          <ul className="space-y-1.5">
            {openingHours.map((oh) => (
              <li key={oh.day} className="flex justify-between text-[13px]">
                <span style={{ color: '#5C564E' }}>{oh.day}</span>
                <span
                  style={{
                    color: oh.hours === 'Geschlossen' ? '#3a3530' : '#A89F94',
                  }}
                >
                  {oh.hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ backgroundColor: isOpen ? '#22C55E' : '#EF4444' }}
            />
            <span className="text-[12px]" style={{ color: isOpen ? '#22C55E' : '#EF4444' }}>
              {isOpen ? 'Jetzt geöffnet' : 'Jetzt geschlossen'}
            </span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3
            className="text-[11px] font-bold tracking-[0.15em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Kontakt
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(businessInfo.street + ', ' + businessInfo.zip + ' ' + businessInfo.city)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[13px] group"
                style={{ color: '#5C564E' }}
              >
                <MapPinIcon size={15} className="mt-0.5 shrink-0 group-hover:text-gold" style={{ color: '#C9A84C' }} />
                <span className="group-hover:text-[#A89F94] transition-colors">
                  {businessInfo.street}<br />
                  {businessInfo.zip} {businessInfo.city}
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center gap-3 text-[13px] group"
                style={{ color: '#5C564E' }}
              >
                <PhoneIcon size={15} style={{ color: '#C9A84C' }} />
                <span className="group-hover:text-[#A89F94] transition-colors">{businessInfo.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-3 text-[13px] group"
                style={{ color: '#5C564E' }}
              >
                <MailIcon size={15} style={{ color: '#C9A84C' }} />
                <span className="group-hover:text-[#A89F94] transition-colors">{businessInfo.email}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5"
        style={{ borderColor: '#1a1a1a' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px]" style={{ color: '#3a3530' }}>
            © {new Date().getFullYear()} The TwinsCut · Barbershop Wuppertal · Est. 2020
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] hover:text-[#A89F94] transition-colors"
                style={{ color: '#3a3530' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
