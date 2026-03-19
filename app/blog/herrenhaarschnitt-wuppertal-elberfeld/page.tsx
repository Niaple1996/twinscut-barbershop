import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'herrenhaarschnitt-wuppertal-elberfeld')!

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

        <h2>Was kostet ein Herrenhaarschnitt in Wuppertal Elberfeld?</h2>
        <p>
          Die Preise für Herrenhaarschnitte in Wuppertal variieren je nach Salon, Lage und
          Spezialisierung. Ein grober Überblick:
        </p>
        <ul>
          <li><strong>Normaler Friseur:</strong> 15–25 €</li>
          <li><strong>Spezialisierter Barbershop:</strong> 25–35 €</li>
          <li><strong>Premium-Barbershop:</strong> 30–45 € (inkl. Beratung, Styling, Service)</li>
        </ul>
        <p>
          Bei <Link href="/leistungen">The TwinsCut</Link> startet der Classic Cut bei 25 €,
          ein Fade kostet ab 28 €, der Skin Fade ab 30 €. Das Komplett-Paket (Haar + Bart)
          gibt es ab 40 €.
        </p>

        <h2>Barbershop vs. Friseur – was ist der Unterschied?</h2>
        <p>
          Viele Männer fragen sich, ob ein Barbershop den höheren Preis wirklich rechtfertigt.
          Die kurze Antwort: Ja – wenn du weißt, worauf du Wert legst.
        </p>

        <h3>Was ein Barbershop anders macht</h3>
        <ul>
          <li><strong>Spezialisierung auf Männer:</strong> Alles ist auf Herrenpflege ausgerichtet</li>
          <li><strong>Fade-Expertise:</strong> Ein klassischer Friseur kann selten einen sauberen Skin Fade</li>
          <li><strong>Beratung:</strong> Welcher Schnitt passt zu deiner Kopfform? Ein Barber nimmt sich Zeit</li>
          <li><strong>Atmospäre:</strong> Kein Warten zwischen Damenbedienungen – der Shop ist für dich</li>
          <li><strong>Nassrasur:</strong> Das klassische Rasiermesser-Erlebnis gibt es nur beim Barber</li>
        </ul>

        <h2>Haarschnitt-Stile im Überblick</h2>

        <h3>Classic Cut</h3>
        <p>
          Der Klassiker. Oben länger, Seiten kürzer, saubere Übergänge. Zeitlos,
          professionell und zu fast jedem Anlass geeignet.
        </p>

        <h3>Fade</h3>
        <p>
          Stufenloser Übergang von kurz (Seiten/Nacken) zu länger (oben). In Wuppertal
          aktuell der meistgefragte Schnitt – besonders bei jüngeren Männern.
        </p>

        <h3>Undercut</h3>
        <p>
          Klarer Schnitt zwischen Oben und Seiten ohne Übergang. Moderner Look mit starkem
          Kontrast – erfordert regelmäßige Pflege.
        </p>

        <h3>Textured Crop</h3>
        <p>
          Kurze, strukturierte Haare oben mit einer gewissen Textur. Funktioniert besonders
          gut mit einem Fade oder Mid-Skin Fade.
        </p>

        <h2>Pflegetipps nach dem Haarschnitt</h2>
        <ul>
          <li>Verwende ein hochwertiges Shampoo – keine günstigen Produkte mit Sulfaten</li>
          <li>Haarpflege-Produkte (Pomade, Wax, Clay) helfen dem Schnitt seine Form zu halten</li>
          <li>Lass den Fade alle 3–4 Wochen auffrischen – sonst verliert er seinen Look</li>
          <li>Föhne das Haar in die gewünschte Richtung – das spart morgens Zeit</li>
        </ul>

        <h2>Herrenhaarschnitt Wuppertal Elberfeld: Fazit</h2>
        <p>
          Wer in Elberfeld einen guten Herrenhaarschnitt sucht, sollte nicht beim nächstbesten
          Friseur landen. The TwinsCut bietet professionelle Barbershop-Qualität zu
          fairen Preisen – mit persönlicher Beratung und einem Ergebnis, das auch nach
          Wochen noch gut aussieht.
        </p>

        <div className="not-prose mt-8">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Termin in Wuppertal Elberfeld</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>Classic Cut ab 25 € · Fade ab 28 €</p>
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
            <Link href="/" style={{ color: '#5C564E' }}>Startseite</Link>
            <span className="mx-2" style={{ color: '#2a2a2a' }}>›</span>
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
