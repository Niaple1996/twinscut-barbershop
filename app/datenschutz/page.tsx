import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import { businessInfo } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von The TwinsCut Barbershop Wuppertal gemäß DSGVO.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" breadcrumbs={[{ label: 'Datenschutz' }]} />

      <section className="py-12 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-3xl mx-auto prose-dark">

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
            unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle"
            in dieser Datenschutzerklärung entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
            Website durch unsere IT-Systeme erfasst.
          </p>

          <h2>2. Hosting</h2>
          <p>
            Diese Website wird bei Vercel Inc. (San Francisco, USA) gehostet. Beim Besuch
            unserer Website wird Ihre IP-Adresse und andere technische Daten von den Servern
            von Vercel verarbeitet. Vercel ist zertifizierter Auftragsverarbeiter gemäß
            Art. 28 DSGVO.
          </p>

          <h2>3. Verantwortliche Stelle</h2>
          <p>
            The TwinsCut GbR<br />
            {businessInfo.street}<br />
            {businessInfo.zip} {businessInfo.city}<br />
            Telefon: {businessInfo.phoneDisplay}<br />
            E-Mail: {businessInfo.email}
          </p>

          <h2>4. Datenerfassung beim Besuch dieser Website</h2>
          <h3>Technisch notwendige Cookies</h3>
          <p>
            Wir setzen ausschließlich technisch notwendige Cookies ein. Diese sind für den
            Betrieb der Website erforderlich (z. B. Speicherung Ihrer Cookie-Einwilligung).
            Diese Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
            Wir haben ein berechtigtes Interesse an der korrekten Darstellung und Funktionalität
            unserer Website.
          </p>

          <h3>Server-Log-Dateien</h3>
          <p>
            Der Hoster dieser Seiten erhebt und speichert automatisch Informationen in
            sogenannten Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind:
            Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname,
            Uhrzeit der Serveranfrage, IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
            Datenquellen wird nicht vorgenommen.
          </p>

          <h2>5. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p>
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich ist.
          </p>

          <h2>6. Google Maps</h2>
          <p>
            Auf dieser Website werden keine Google Maps-Karten automatisch geladen. Stattdessen
            bieten wir einen Link zu Google Maps an, den Sie freiwillig öffnen können. Erst
            dann werden Daten an Google übertragen. Rechtsgrundlage für die Datenübertragung
            nach dem Klick auf den Link ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
          </p>

          <h2>7. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten zu erhalten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer Daten zu verlangen (Art. 17 DSGVO)</li>
            <li>Die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)</li>
            <li>Der Verarbeitung zu widersprechen (Art. 21 DSGVO)</li>
            <li>Ihre Daten in einem gängigen Format zu erhalten (Art. 20 DSGVO)</li>
          </ul>
          <p>
            Beschwerden können Sie bei der zuständigen Datenschutzbehörde einreichen:
            Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
          </p>

          <p className="text-[12px]" style={{ color: '#3a3530' }}>
            Stand: März 2025
          </p>
        </div>
      </section>
    </>
  )
}
