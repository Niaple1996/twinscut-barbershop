import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{ background: '#0a0a0a' }}
    >
      <span
        className="font-playfair text-[6rem] font-bold leading-none"
        style={{ color: 'rgba(201,168,76,0.1)' }}
      >
        404
      </span>
      <h1 className="font-playfair text-h2 text-cream mt-4 mb-3">
        Seite nicht gefunden
      </h1>
      <p className="text-[15px] mb-8" style={{ color: '#5C564E', maxWidth: '400px' }}>
        Die gesuchte Seite existiert leider nicht mehr oder wurde verschoben.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="btn btn-gold">Zur Startseite</Link>
        <Link href="/termin" className="btn btn-outline">Termin buchen</Link>
      </div>
    </div>
  )
}
