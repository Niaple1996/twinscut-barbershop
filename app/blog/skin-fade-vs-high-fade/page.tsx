import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'skin-fade-vs-high-fade')!

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

        <h2>Was ist der Unterschied zwischen Skin Fade und High Fade?</h2>
        <p>
          Die Frage kommt häufig: Skin Fade oder High Fade – welcher ist besser? Die kurze
          Antwort: Es sind zwei verschiedene Dimensionen, keine direkte Konkurrenz.
        </p>
        <ul>
          <li><strong>High Fade</strong> beschreibt die <em>Position</em> des Fades am Kopf (hoch, nahe am Oberkopf)</li>
          <li><strong>Skin Fade</strong> beschreibt die <em>Intensität</em> des Übergangs (bis auf null/Haut)</li>
        </ul>
        <p>
          Du kannst also einen <strong>High Skin Fade</strong> haben (hoch + bis auf Haut) – das ist
          sogar die beliebteste Kombination. Oder einen <strong>Low Fade</strong> ohne Skin (niedriger
          Übergang, der nicht bis auf null geht).
        </p>

        <h2>Vergleichstabelle: Skin Fade vs. High Fade</h2>
        <table>
          <thead>
            <tr>
              <th>Merkmal</th>
              <th>Skin Fade</th>
              <th>High Fade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Was es beschreibt</td>
              <td>Intensität (bis auf Haut)</td>
              <td>Position (hoch am Kopf)</td>
            </tr>
            <tr>
              <td>Pflege-Aufwand</td>
              <td>Hoch (alle 2–3 Wochen)</td>
              <td>Mittel (alle 3–4 Wochen)</td>
            </tr>
            <tr>
              <td>Handwerkliches Niveau</td>
              <td>Sehr anspruchsvoll</td>
              <td>Mittel</td>
            </tr>
            <tr>
              <td>Look</td>
              <td>Scharf, präzise, modern</td>
              <td>Auffällig, modern</td>
            </tr>
            <tr>
              <td>Beste Kombination</td>
              <td>Mit Mid oder High Position</td>
              <td>Mit Skin oder Kurzhaar oben</td>
            </tr>
            <tr>
              <td>Preis (bei TwinsCut)</td>
              <td>Ab 30 €</td>
              <td>Ab 28 €</td>
            </tr>
          </tbody>
        </table>

        <h2>Skin Fade: Was macht ihn besonders?</h2>
        <p>
          Beim Skin Fade (auch "Zero Fade" oder "Bald Fade") verschwindet das Haar an den
          Seiten und im Nacken komplett bis auf die Haut. Das ergibt einen extremen Kontrast
          zum längeren Haar oben.
        </p>
        <p>
          Das Besondere: Ein sauberer Skin Fade ist handwerklich das Schwierigste, was ein
          Barber leisten kann. Es darf keine sichtbaren Linien, keine Stufen, kein "Treppeneffekt"
          geben – nur ein gleichmäßiger, weicher Übergang von null zu längeren Haaren.
        </p>
        <p>
          The TwinsCut in Wuppertal hat sich auf den Skin Fade spezialisiert. Unsere Barber
          machen täglich dutzende Skin Fades – mit einer Präzision, die man sehen muss.
        </p>

        <h2>High Fade: Wann ist er die richtige Wahl?</h2>
        <p>
          Ein High Fade beginnt sehr hoch am Kopf – oft nur 3–5 cm unterhalb des Oberkopfes.
          Das erzeugt einen starken Kontrast und einen modernen, auffälligen Look.
        </p>
        <p>
          Der High Fade funktioniert am besten mit:
        </p>
        <ul>
          <li>Kurzem bis mittlerem Haar oben</li>
          <li>Textured Crops oder Quiff</li>
          <li>Braided Styles oder Dreads</li>
        </ul>
        <p>
          Für Männer mit rundem Gesicht ist der High Fade besonders vorteilhaft – er streckt
          optisch und gibt dem Gesicht mehr Länge.
        </p>

        <h2>Welcher ist der richtige für mich?</h2>
        <p>
          Ehrlich gesagt: Lass dich von uns beraten. Beim ersten Termin nehmen wir uns Zeit,
          schauen uns deine Kopfform, dein Haar und deinen Lifestyle an – und empfehlen dir
          den Schnitt, der wirklich zu dir passt.
        </p>
        <p>
          Viele unserer Stammkunden haben mit einem einfachen Fade angefangen und sind über
          die Zeit zum Skin Fade gewechselt – weil sie den Unterschied im Ergebnis gesehen haben.
        </p>

        <div className="not-prose mt-8">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Skin Fade oder High Fade – wir beraten dich</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>Barbershop Wuppertal · Fade ab 28 €</p>
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
