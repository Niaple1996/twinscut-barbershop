import Link from 'next/link'
import { businessInfo } from '@/lib/data'

export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-center py-2 px-4 text-[12px] font-semibold tracking-wide"
      style={{ backgroundColor: '#C9A84C', color: '#0a0a0a' }}
    >
      <span className="hidden sm:inline">Jetzt online buchen – ohne Wartezeit </span>
      <Link
        href="/termin"
        className="underline underline-offset-2 font-bold hover:no-underline transition-all"
      >
        Termin buchen →
      </Link>
      <span className="mx-3 opacity-40 hidden sm:inline">|</span>
      <a href={`tel:${businessInfo.phone}`} className="hidden sm:inline hover:underline">
        {businessInfo.phoneDisplay}
      </a>
    </div>
  )
}
