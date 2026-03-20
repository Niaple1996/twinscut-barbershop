'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('tc_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('tc_cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('tc_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 animate-slide-up"
      role="dialog"
      aria-label="Cookie-Einstellungen"
      aria-live="polite"
    >
      <div
        className="p-5 rounded-xl"
        style={{
          background: '#111111',
          border: '1px solid #2a2a2a',
          boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
        }}
      >
        <p className="text-[13px] font-semibold mb-1 flex items-center gap-2" style={{ color: '#F5F0E8' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#C9A84C' }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          Cookies
        </p>
        <p className="text-[12px] leading-relaxed mb-4" style={{ color: '#5C564E' }}>
          Wir nutzen technisch notwendige Cookies für den Betrieb dieser Website.{' '}
          <Link href="/datenschutz" className="underline hover:no-underline" style={{ color: '#C9A84C' }}>
            Datenschutz
          </Link>
        </p>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="btn btn-gold btn-sm flex-1"
          >
            Akzeptieren
          </button>
          <button
            onClick={decline}
            className="btn btn-outline btn-sm flex-1"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  )
}
