import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'wuppertal-barmen-friseur')!

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `https://twinscut.de/blog/${post.slug}` },
}

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} />
      <ArticleLayout post={post}>

        <h2>Friseure in Wuppertal Barmen – ein Überblick</h2>
        <p>
          Barmen ist nach Elberfeld der bevölkerungsreichste Stadtteil Wuppertals. Rund um
          den Barmer Marktplatz, die Berliner Straße und das Nordbahntrassen-Viertel gibt es
          eine Reihe von Friseuren und Barbershops.
        </p>
        <p>
          Die Preisspanne für einen Herrenhaarschnitt in Barmen liegt bei:
        </p>
        <ul>
          <li>Einfacher Haarschnitt: 12–20 €</li>
          <li>Mit Fade: 20–30 €</li>
          <li>Premium Barbershop (spezialisiert): 25–40 €</li>
        </ul>

        <h2>Barmen oder Elberfeld: Lohnt sich die Fahrt?</h2>
        <p>
          Viele Kunden aus Barmen fahren bewusst nach Elberfeld zu The TwinsCut. Nicht weil
          es keinen guten Friseur in Barmen gibt, sondern weil der Unterschied bei
          spezialisierten Schnitten – besonders beim Fade und Skin Fade – deutlich spürbar ist.
        </p>
        <p>
          Die Fahrt von Barmen nach Elberfeld dauert mit dem Auto 10 Minuten, mit der
          Schwebebahn sogar noch schneller. Wer ein gutes Ergebnis will, nimmt das gerne in Kauf.
        </p>

        <h2>Was Kunden aus Barmen über The TwinsCut sagen</h2>
        <blockquote>
          "Ich fahre extra von Barmen nach Elberfeld – das sagt alles. Tarek macht meinen
          High Fade immer perfekt." – Leon K., Barmen
        </blockquote>
        <blockquote>
          "Hab vorher einen guten Friseur in Barmen gehabt, aber seit ich The TwinsCut
          kenne, fahre ich nur noch dorthin. Der Unterschied beim Fade ist enorm." – David S.
        </blockquote>

        <h2>Wuppertal Barmen: Barbarisch gute Haarschnitte</h2>
        <p>
          Egal ob du aus Barmen, Oberbarmen oder Nordstadt kommst – The TwinsCut in
          Wuppertal Elberfeld ist dein Barbershop. Du findest uns im Herzen von Elberfeld,
          gut zu erreichen mit Auto, Bus und natürlich der Wuppertaler Schwebebahn.
        </p>
        <p>
          <Link href="/termin">Buche deinen Termin</Link> online – oder komm einfach als
          Walk-in vorbei.
        </p>

        <h2>Anfahrt von Barmen nach The TwinsCut Elberfeld</h2>
        <ul>
          <li><strong>Mit dem Auto:</strong> Ca. 10 Minuten über die B7 (Bundesstraße)</li>
          <li><strong>Mit der Schwebebahn:</strong> Linie 60 Richtung Elberfeld, ca. 8 Stationen</li>
          <li><strong>Mit dem Bus:</strong> Mehrere Direktverbindungen über die Berliner Straße</li>
        </ul>
        <p>
          Parken am Döppersberg oder in der Tiefgarage Elberfeld Mitte – kostenlose Kurzparkplätze
          in der Nähe vorhanden.
        </p>

        <div className="not-prose mt-8">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Von Barmen nach Elberfeld – 10 Min.</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>Haarschnitt & Fade ab 25 € · Termin online buchbar</p>
            </div>
            <Link href="/termin" className="btn btn-gold btn-sm shrink-0">Jetzt buchen <ArrowRightIcon size={14} /></Link>
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
      <header className="py-14 px-6" style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a0a0a 100%)', borderBottom: '1px solid #2a2a2a' }}>
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-[12px]">
            <Link href="/" style={{ color: '#5C564E' }}>Startseite</Link><span className="mx-2" style={{ color: '#2a2a2a' }}>›</span>
            <Link href="/blog" style={{ color: '#5C564E' }}>Blog</Link>
          </nav>
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4" style={{ background: 'rgba(201,168,76,0.1)', color: '#C9A84C' }}>{post.categoryLabel}</span>
          <h1 className="font-playfair text-h1 text-cream mb-4">{post.title}</h1>
          <p className="text-[15px]" style={{ color: '#A89F94' }}>{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-5 text-[12px]" style={{ color: '#5C564E' }}>
            <span>{formatDate(post.datePublished)}</span><span>·</span><span>{post.readTime} Lesezeit</span>
          </div>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-12"><div className="prose-dark">{children}</div></div>
      <div className="max-w-3xl mx-auto px-6 pb-14 pt-4" style={{ borderTop: '1px solid #1a1a1a' }}>
        <h2 className="font-playfair text-[1.25rem] text-cream mb-6">Weitere Artikel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map(r => (
            <Link key={r.slug} href={`/blog/${r.slug}`} className="card-dark p-4 block group">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#C9A84C' }}>{r.categoryLabel}</span>
              <p className="text-[13px] font-semibold mt-1.5 group-hover:text-[#C9A84C] transition-colors leading-snug" style={{ color: '#F5F0E8' }}>{r.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
