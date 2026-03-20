import Link from 'next/link'
import { serviceCategories } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRightIcon } from '@/components/ui/Icons'

const icons = {
  haarschnitte: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  ),
  bart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 15s1 2 4 2 4-2 4-2" />
      <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="2" />
      <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="2" />
    </svg>
  ),
  extras: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
}

export default function ServicesPreview() {
  return (
    <section className="py-20 px-6" style={{ background: '#0a0a0a' }} aria-label="Leistungen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="section-label justify-center mb-4">Was wir anbieten</span>
            <h2 className="font-playfair text-h2 text-cream mt-4">
              Leistungen & Preise
            </h2>
            <p className="mt-3 text-[15px]" style={{ color: '#5C564E', maxWidth: '480px', margin: '12px auto 0' }}>
              Von klassischen Haarschnitten bis zur Nassrasur – alles was du für einen
              gepflegten Auftritt brauchst.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.id} direction="up" delay={i * 0.05}>
              <div
                className="card-dark p-8 h-full flex flex-col"
                style={{ borderColor: '#2a2a2a' }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 shrink-0"
                  style={{ background: 'rgba(201,168,76,0.08)', color: '#C9A84C' }}
                >
                  {icons[cat.id as keyof typeof icons]}
                </div>

                {/* Name */}
                <h3 className="font-playfair text-h3 text-cream mb-3">{cat.name}</h3>

                {/* Services list */}
                <ul className="space-y-2 flex-1 mb-6">
                  {cat.services.slice(0, 3).map((s) => (
                    <li key={s.id} className="flex items-center justify-between text-[14px]">
                      <span style={{ color: '#A89F94' }}>
                        {s.name}
                        {s.popular && (
                          <span
                            className="ml-2 text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded"
                            style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
                          >
                            Beliebt
                          </span>
                        )}
                      </span>
                      <span className="font-semibold" style={{ color: '#C9A84C' }}>
                        ab {s.price} €
                      </span>
                    </li>
                  ))}
                  {cat.services.length > 3 && (
                    <li className="text-[13px]" style={{ color: '#5C564E' }}>
                      + {cat.services.length - 3} weitere
                    </li>
                  )}
                </ul>

                {/* Link */}
                <Link
                  href="/leistungen"
                  className="flex items-center gap-2 text-[13px] font-semibold transition-colors"
                  style={{ color: '#C9A84C' }}
                >
                  Alle Preise ansehen
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <Link href="/termin" className="btn btn-gold">
              Jetzt Termin buchen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
