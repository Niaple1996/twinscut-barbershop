import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'bartpflege-tipps')!

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

        <h2>Warum Bartpflege so wichtig ist</h2>
        <p>
          Ein gut gepflegter Bart ist kein Selbstläufer. Ohne die richtige Routine wird aus dem
          coolen Vollbart schnell ein ungepflegtes Erscheinungsbild. Die gute Nachricht: Du
          brauchst keine aufwendige Routine – aber eine konsequente.
        </p>

        <h2>Die tägliche Bartpflege-Routine</h2>
        <h3>Waschen</h3>
        <p>
          Wasche deinen Bart 2–3 Mal pro Woche mit einem speziellen Bartshampoo (kein
          normales Haarshampoo – zu aggressiv). Tägliches Waschen trocknet die Haut
          unter dem Bart aus und führt zu Juckreiz.
        </p>
        <h3>Einölen</h3>
        <p>
          Bartöl ist der wichtigste Schritt. Es pflegt sowohl das Barthaar als auch die
          Haut darunter. Täglich 2–5 Tropfen einmassieren – am besten nach dem Waschen,
          wenn die Haut noch leicht feucht ist.
        </p>
        <h3>Kämmen</h3>
        <p>
          Käm me oder bürste deinen Bart täglich. Das verteilt das Öl gleichmäßig, verhindert
          Verfilzungen und gibt dem Bart Form.
        </p>

        <h2>Wöchentliche Bartpflege</h2>
        <ul>
          <li><strong>Kontur nachziehen:</strong> Die Linien um den Bart scharf halten – Kinn, Wangen, Hals</li>
          <li><strong>Trimmen:</strong> Ungleichmäßige Stellen begradigen</li>
          <li><strong>Peeling:</strong> 1x pro Woche ein mildes Gesichtspeeling – befreit die Poren unter dem Bart</li>
        </ul>

        <h2>Monatliche Bartpflege – der Fachmann</h2>
        <p>
          Einmal im Monat zum Barbershop – das macht den Unterschied zwischen "gut gepflegt"
          und "perfekt". Ein professioneller Barber sieht, was du selbst im Spiegel übersiehst:
          schiefer Wuchs, ungleiche Seiten, Konturen, die korrigiert werden müssen.
        </p>
        <p>
          Bei <Link href="/leistungen">The TwinsCut</Link> kostet die Bartpflege ab 15 €.
          Die klassische Nassrasur (heißes Tuch, Rasiermesser, Aftershave) für 20 € ist
          ein echtes Erlebnis – nicht nur Pflege, sondern auch Entspannung.
        </p>

        <h2>Die richtigen Bartpflege-Produkte</h2>
        <p>Worauf du beim Kauf achten solltest:</p>
        <ul>
          <li><strong>Bartöl:</strong> Arganöl, Jojobaöl oder Mandelöl als Basis – Finger weg von Mineralöl</li>
          <li><strong>Bartbalsam:</strong> Für längere Bärte – gibt mehr Halt als Öl</li>
          <li><strong>Bartshampoo:</strong> pH-hautneutral, sanft, kein Sulfat</li>
          <li><strong>Bartwachs:</strong> Für das Styling von Schnurrbärten und Konturenstützung</li>
        </ul>

        <h2>Häufige Fehler bei der Bartpflege</h2>
        <ul>
          <li>Den Bart täglich waschen – zu aggressiv</li>
          <li>Rasierklingen nicht regelmäßig wechseln</li>
          <li>Keine Feuchtigkeitspflege unter dem Bart</li>
          <li>Konturenpflege nur selbst – professionelle Korrekturen vernachlässigen</li>
          <li>Auf günstige Einweg-Rasierer setzen statt auf eine gute Klinge</li>
        </ul>

        <h2>Bartpflege in Wuppertal</h2>
        <p>
          Du willst deinen Bart professionell pflegen lassen oder den nächsten Schritt mit
          einer klassischen Nassrasur machen? Komm zu The TwinsCut in Wuppertal Elberfeld –
          wir beraten dich, zeigen dir die richtige Routine und pflegen deinen Bart auf
          Profi-Niveau.
        </p>

        <div className="not-prose mt-8">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Bartpflege in Wuppertal</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>Bartpflege ab 15 € · Nassrasur ab 20 €</p>
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
