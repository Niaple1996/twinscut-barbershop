import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'barbershop-wuppertal')!

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `https://twinscut.de/blog/${post.slug}` },
  openGraph: { title: post.title, description: post.description, type: 'article' },
}

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} />

      <ArticleLayout post={post}>
        <h2>Was ist ein Barbershop – und was macht einen guten aus?</h2>
        <p>
          Ein Barbershop ist mehr als ein Friseur. Während klassische Friseursalons oft auf
          Damen- und Herrenhaarschnitte ausgerichtet sind, hat sich der Barbershop auf die
          Männerpflege spezialisiert. Fade, Skin Fade, Nassrasur, Bartpflege – diese
          Disziplinen sind das Handwerk des Barbers.
        </p>
        <p>
          In Wuppertal hat sich in den letzten Jahren eine lebhafte Barbershop-Szene entwickelt.
          Vor allem in Elberfeld, dem historischen Stadtzen trum rund um den Döppersberg, finden
          Männer heute Barbershops, die Wert auf Qualität und Atmosphäre legen.
        </p>

        <h2>Barbershop Wuppertal: Worauf kommt es an?</h2>
        <p>Einen guten Barbershop erkennst du an mehreren Merkmalen:</p>
        <ul>
          <li><strong>Saubere Arbeit beim Fade:</strong> Der Übergang muss nahtlos sein – kein "Treppeneffekt".</li>
          <li><strong>Erfahrung mit verschiedenen Haartypen:</strong> Lockiges Haar, feines Haar, dunkles Haar – jeder Typ erfordert eine andere Technik.</li>
          <li><strong>Atmosph äre:</strong> Ein guter Barbershop ist auch ein Ort, an dem du dich entspannst.</li>
          <li><strong>Transparente Preise:</strong> Keine versteckten Kosten, klare Leistungspakete.</li>
          <li><strong>Bewertungen:</strong> Schau auf Google – echte Kundenmeinungen sind das zuverlässigste Signal.</li>
        </ul>

        <h2>The TwinsCut – Wuppertals Premium-Barbershop in Elberfeld</h2>
        <p>
          The TwinsCut wurde 2020 von zwei Brüdern in Wuppertal Elberfeld gegründet. Was als
          kleines Projekt begann, hat sich zu einem der bekanntesten Barbershops im Bergischen
          Land entwickelt. Mit einer Google-Bewertung von 4,9 Sternen bei über 87 Bewertungen
          gehört The TwinsCut zu den meistempfohlenen Barbershops in Wuppertal.
        </p>
        <p>
          Das Angebot umfasst klassische Haarschnitte, Fades in allen Varianten (Low, Mid, High,
          Skin Fade), Bartpflege und die klassische Nassrasur. Alle Leistungen sind transparent
          auf der <Link href="/leistungen">Preisseite</Link> einsehbar.
        </p>

        <h2>Wuppertal Elberfeld: Das Zentrum der Barbershop-Kultur</h2>
        <p>
          Wuppertal ist eine kreative Stadt – und das spiegelt sich auch in der Barbershop-Szene
          wider. Elberfeld, als kulturelles und gastronomi sches Zentrum der Stadt, hat sich zum
          natürlichen Heimatort für Premium-Barbershops entwickelt.
        </p>
        <p>
          Von Barmen über Vohwinkel bis Ronsdorf: Kunden fahren aus allen Stadtteilen nach
          Elberfeld, wenn sie wissen, dass sie dort exzellente Arbeit bekommen. Auch aus
          Remscheid und Solingen kommen regelmäßig Kunden zu The TwinsCut – ein Qualitätsbeweis,
          der für sich spricht.
        </p>

        <h2>Haarschnitt Wuppertal: Preisvergleich 2025</h2>
        <p>
          Die Preise für Herrenhaarschnitte in Wuppertal variieren stark. Ein Standard-Haarschnitt
          beim normalen Friseur kostet zwischen 15 und 25 Euro. Ein Fade beim spezialisierten
          Barbershop liegt in der Regel zwischen 25 und 35 Euro – je nach Barbershop, Lage und
          Service-Level.
        </p>
        <p>
          Bei <Link href="/leistungen">The TwinsCut</Link> gilt:
        </p>
        <ul>
          <li>Classic Cut ab 25 €</li>
          <li>Fade ab 28 €</li>
          <li>Skin Fade ab 30 €</li>
          <li>Haar + Bart Komplett ab 40 €</li>
        </ul>
        <p>
          Angesichts der Qualität und des Service liegt das im oberen Mittelfeld – wer einmal
          da war, versteht warum.
        </p>

        <h2>Fazit: Dein Barbershop in Wuppertal</h2>
        <p>
          Ob du gezielt nach einem Fade-Spezialisten suchst, eine klassische Nassrasur willst
          oder einfach einen Barbershop in Wuppertal, dem du langfristig vertrauen kannst –
          The TwinsCut in Elberfeld ist eine sichere Wahl.
        </p>
        <p>
          <Link href="/termin">Buch deinen Termin</Link> direkt online oder komm einfach vorbei.
          Walk-ins sind willkommen.
        </p>

        <div className="not-prose mt-8">
          <div
            className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Jetzt Termin buchen</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>
                Mo–Fr 10–20 Uhr · Sa 9–18 Uhr · Walk-ins willkommen
              </p>
            </div>
            <Link href="/termin" className="btn btn-gold btn-sm shrink-0">
              Termin buchen <ArrowRightIcon size={14} />
            </Link>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}

function ArticleLayout({ children, post }: { children: React.ReactNode, post: typeof blogPosts[0] }) {
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)
  return (
    <div style={{ background: '#0a0a0a' }}>
      {/* Article header */}
      <header
        className="py-14 px-6"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)',
          borderBottom: '1px solid #2a2a2a',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-[12px]">
            <Link href="/" style={{ color: '#5C564E' }}>Startseite</Link>
            <span className="mx-2" style={{ color: '#2a2a2a' }}>›</span>
            <Link href="/blog" style={{ color: '#5C564E' }}>Blog</Link>
            <span className="mx-2" style={{ color: '#2a2a2a' }}>›</span>
            <span style={{ color: '#A89F94' }}>{post.categoryLabel}</span>
          </nav>
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4"
            style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}
          >
            {post.categoryLabel}
          </span>
          <h1 className="font-playfair text-h1 text-cream mb-4">{post.title}</h1>
          <p className="text-[15px]" style={{ color: '#A89F94' }}>{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-[12px]" style={{ color: '#5C564E' }}>
            <span>{formatDate(post.datePublished)}</span>
            <span>·</span>
            <span>{post.readTime} Lesezeit</span>
            <span>·</span>
            <span>The TwinsCut, Wuppertal</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-dark">{children}</div>
      </div>

      {/* Related articles */}
      <div className="max-w-3xl mx-auto px-6 pb-14 pt-4" style={{ borderTop: '1px solid #1a1a1a' }}>
        <h2 className="font-playfair text-[1.25rem] text-cream mb-6">Weitere Artikel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map(r => (
            <Link
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="card-dark p-4 block group"
            >
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: '#C9A84C' }}
              >
                {r.categoryLabel}
              </span>
              <p
                className="text-[13px] font-semibold mt-1.5 group-hover:text-[#C9A84C] transition-colors leading-snug"
                style={{ color: '#F5F0E8' }}
              >
                {r.title}
              </p>
              <p className="text-[12px] mt-1" style={{ color: '#5C564E' }}>{r.readTime}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
