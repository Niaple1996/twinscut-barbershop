'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/layout/Logo'
import AnnouncementBar from '@/components/layout/AnnouncementBar'
import { navItems } from '@/lib/data'
import { MenuIcon, CloseIcon, PhoneIcon } from '@/components/ui/Icons'

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 lg:hidden"
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          backdropFilter: open ? 'blur(4px)' : 'blur(0px)',
          WebkitBackdropFilter: open ? 'blur(4px)' : 'blur(0px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease, backdrop-filter 0.25s ease',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col lg:hidden overflow-y-auto"
        style={{
          background: '#111111',
          borderLeft: '1px solid #2a2a2a',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: open
            ? 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            : 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: open ? '-8px 0 40px rgba(0,0,0,0.5)' : 'none',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #2a2a2a' }}>
          <Logo variant="light" size="sm" />
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#A89F94' }}
            aria-label="Menü schließen"
          >
            <CloseIcon size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-4 py-6 space-y-1" aria-label="Mobile Navigation">
          {navItems.filter(i => !i.highlight).map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center px-4 py-3 rounded-lg text-[15px] font-medium transition-colors"
                style={{
                  color: isActive ? '#C9A84C' : '#F5F0E8',
                  backgroundColor: isActive ? 'rgba(201,168,76,0.08)' : 'transparent',
                }}
              >
                {item.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A84C' }} />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Booking CTA */}
        <div className="px-4 pb-8 pt-4" style={{ borderTop: '1px solid #2a2a2a' }}>
          <Link
            href="/termin"
            onClick={onClose}
            className="btn btn-gold w-full justify-center text-center"
          >
            Termin buchen
          </Link>
          <p className="text-center mt-3 text-[12px]" style={{ color: '#5C564E' }}>
            Mo–Fr 10–20 Uhr · Sa 9–18 Uhr
          </p>
        </div>
      </div>
    </>
  )
}

// ─── Main Header ─────────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style>{`
        .tc-nav-link { position: relative; transition: color 0.15s ease; }
        .tc-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: #C9A84C;
          border-radius: 1px;
          transform: scaleX(0);
          transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: left;
        }
        .tc-nav-link:hover::after,
        .tc-nav-link.active::after { transform: scaleX(1); }
        @media (prefers-reduced-motion: reduce) {
          .tc-nav-link::after { transition: none; }
        }
      `}</style>

      <AnnouncementBar />

      <div className="sticky top-0 z-30">
        <header
          className="w-full transition-shadow duration-300"
          style={{
            background: '#0a0a0a',
            borderBottom: '1px solid #2a2a2a',
            boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] flex items-center gap-6">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2.5 rounded-lg transition-colors"
              style={{ color: '#F5F0E8' }}
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <MenuIcon size={22} />
            </button>

            {/* Logo */}
            <Logo variant="light" size="sm" />

            {/* Desktop nav */}
            <nav aria-label="Hauptnavigation" className="hidden lg:flex items-center gap-1 ml-6 flex-1">
              {navItems.filter(i => !i.highlight).map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`tc-nav-link px-3 py-2 text-[14px] font-medium ${isActive ? 'active' : ''}`}
                    style={{ color: isActive ? '#C9A84C' : '#A89F94' }}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right: CTA + phone */}
            <div className="ml-auto flex items-center gap-3">
              <a
                href="tel:+49202123456"
                className="hidden md:flex items-center gap-2 text-[13px] font-medium transition-colors"
                style={{ color: '#5C564E' }}
                aria-label="Anrufen"
              >
                <PhoneIcon size={13} style={{ color: '#C9A84C' }} />
                <span className="hover:text-[#A89F94] transition-colors">0202 123456</span>
              </a>
              <Link href="/termin" className="btn btn-gold btn-sm hidden sm:inline-flex">
                Termin buchen
              </Link>
            </div>
          </div>
        </header>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
