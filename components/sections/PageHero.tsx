import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  centered?: boolean
  dark?: boolean
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  centered = false,
  dark = true,
}: PageHeroProps) {
  return (
    <section
      className="py-14 sm:py-20 px-6 relative overflow-hidden"
      style={{
        background: dark
          ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)'
          : '#0a0a0a',
        borderBottom: '1px solid #2a2a2a',
      }}
    >
      {/* Gold accent radial */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className={`max-w-7xl mx-auto relative ${centered ? 'text-center' : ''}`}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className={`flex items-center gap-2 text-[12px] flex-wrap ${centered ? 'justify-center' : ''}`}>
              <li>
                <Link href="/" className="transition-colors" style={{ color: '#5C564E' }}>
                  Startseite
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: '#2a2a2a' }}>›</span>
                  {crumb.href && i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.href} className="transition-colors" style={{ color: '#5C564E' }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ color: '#A89F94' }}>{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Gold line */}
        <span className={`gold-line mb-5 block ${centered ? 'mx-auto' : ''}`} />

        {/* Title */}
        <h1
          className="font-playfair text-h1 text-cream"
          style={{ maxWidth: centered ? '700px' : '600px', margin: centered ? '0 auto' : undefined }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="mt-4 text-[16px] leading-relaxed"
            style={{
              color: '#A89F94',
              maxWidth: centered ? '560px' : '500px',
              margin: centered ? '1rem auto 0' : '1rem 0 0',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
