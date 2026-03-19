import type { Metadata } from 'next'
import Link from 'next/link'
import ArticleSchema from '@/components/seo/ArticleSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { blogPosts } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { ArrowRightIcon } from '@/components/ui/Icons'

const post = blogPosts.find(p => p.slug === 'fade-haircut-erklaert')!

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

        <h2>Was ist ein Fade Haircut?</h2>
        <p>
          Ein Fade (englisch: "ausblenden") ist eine Schnitttechnik, bei der das Haar an den
          Seiten und im Nacken stufenlos von kurz zu lang übergeht. Das Ergebnis ist ein
          nahtloser Übergang ohne sichtbare Kanten – ein "Ausblenden" in die Haut oder in
          längeres Haar.
        </p>
        <p>
          Der Fade ist seit Jahren einer der beliebtesten Herrenhaarschnitte weltweit – und das
          zu Recht. Er sieht gepflegt aus, funktioniert mit fast jeder Kopfform und ist
          vielseitig kombinierbar.
        </p>

        <h2>Fade-Varianten im Überblick</h2>

        <h3>Low Fade</h3>
        <p>
          Der Low Fade beginnt tief am Ohr und im Nacken. Der Übergang ist subtil und dezent –
          perfekt für alle, die einen gepflegten Look mögen, ohne zu auffällig zu wirken. Ideal
          für das Büro oder konservative Umgebungen.
        </p>

        <h3>Mid Fade</h3>
        <p>
          Der Mid Fade liegt in der Mitte zwischen Low und High. Er beginnt auf Höhe des Ohrs
          und ist die am häufigsten gewünschte Variante. Ein universeller Schnitt, der zu den
          meisten Gesichtsformen passt.
        </p>

        <h3>High Fade</h3>
        <p>
          Der High Fade beginnt hoch am Kopf – oft knapp unterhalb des Oberkopfes. Er wirkt
          modern, selbstbewusst und auffällig. Viele kombinieren einen High Fade mit längeren
          Haaren oben (z.B. Quiff oder Textured Fringe).
        </p>

        <h3>Skin Fade (Zero Fade)</h3>
        <p>
          Beim Skin Fade verschwindet das Haar komplett bis auf die Haut – ein sogenannter
          "null Übergang". Das ist handwerklich das anspruchsvollste: Ein sauberer Skin Fade
          erfordert viel Erfahrung und gute Scheren-/Maschinentechnik.
        </p>
        <p>
          The TwinsCut in Wuppertal hat sich besonders auf den Skin Fade spezialisiert. Wenn
          du einen perfekten Skin Fade suchst – <Link href="/termin">buch deinen Termin</Link>.
        </p>

        <h2>Welcher Fade passt zu meiner Gesichtsform?</h2>
        <ul>
          <li><strong>Ovales Gesicht:</strong> Du hast Glück – fast jeder Fade funktioniert.</li>
          <li><strong>Rundes Gesicht:</strong> High Fade streckt optisch und macht das Gesicht schmaler.</li>
          <li><strong>Eckiges Gesicht:</strong> Low oder Mid Fade, kombiniert mit weicherer Oberseite.</li>
          <li><strong>Langes Gesicht:</strong> Low Fade mit nicht zu kurzem Oben, um die Länge auszugleichen.</li>
          <li><strong>Dreieckiges Gesicht:</strong> Mid Fade mit Volumen oben für Balance.</li>
        </ul>

        <h2>Pflegetipps für deinen Fade</h2>
        <p>
          Ein Fade sieht direkt nach dem Schnitt am besten aus – aber mit der richtigen Pflege
          hält er deutlich länger:
        </p>
        <ul>
          <li>Wasche das Haar 2–3x pro Woche (tägliches Waschen trocknet aus)</li>
          <li>Nutze ein hochwertiges Haaröl oder Leave-in Conditioner für Geschmeidigkeit</li>
          <li>Styling mit Pomade oder Wax verleiht dem Fade mehr Definition</li>
          <li>Lass den Fade alle 3–4 Wochen auffrischen – sonst verliert er die Schärfe</li>
        </ul>

        <h2>Fade beim Barbershop Wuppertal buchen</h2>
        <p>
          Du willst deinen Fade von echten Profis schneiden lassen? Bei The TwinsCut in
          Wuppertal Elberfeld bist du richtig. Wir beraten dich persönlich, welcher Fade zu
          deiner Kopfform passt – und setzen ihn präzise um.
        </p>

        <div className="not-prose mt-8">
          <div className="rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" style={{ background: '#111111', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div>
              <p className="font-semibold" style={{ color: '#F5F0E8' }}>Fade in Wuppertal buchen</p>
              <p className="text-[13px] mt-1" style={{ color: '#5C564E' }}>Skin Fade, Low, Mid oder High Fade – ab 28 €</p>
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
            <span className="mx-2" style={{ color: '#2a2a2a' }}>›</span>
            <span style={{ color: '#A89F94' }}>{post.categoryLabel}</span>
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
