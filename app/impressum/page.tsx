import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import { businessInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von The TwinsCut Barbershop Wuppertal.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero title="Impressum" breadcrumbs={[{ label: 'Impressum' }]} />

      <section className="py-12 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto prose-dark">

          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            The TwinsCut GbR<br />
            {businessInfo.street}<br />
            {businessInfo.zip} {businessInfo.city}
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: <a href={`tel:${businessInfo.phone}`}>{businessInfo.phoneDisplay}</a><br />
            E-Mail: <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE [Ihre USt-ID]
          </p>

          <h2>Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
            Seiten verantwortlich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
            bzw. Erstellers.
          </p>
        </div>
      </section>
    </>
  )
}
