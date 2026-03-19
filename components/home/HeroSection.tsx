'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { businessInfo } from '@/lib/data'

export default function HeroSection() {
  const prefersReduced = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: { opacity: prefersReduced ? 1 : 0, y: prefersReduced ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : delay },
  })

  return (
    <section
      className="relative flex items-center justify-start overflow-hidden"
      style={{ minHeight: '100svh', background: '#0a0a0a' }}
      aria-label="Hero – The TwinsCut Barbershop Wuppertal"
    >
      {/* Background: dark gradient with gold tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse at 65% 40%, rgba(201,168,76,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(201,168,76,0.04) 0%, transparent 40%),
            linear-gradient(160deg, #0f0f0f 0%, #0a0a0a 60%, #080808 100%)
          `,
        }}
      />

      {/* Decorative vertical gold lines (background) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[15, 35, 65, 85].map((pos) => (
          <div
            key={pos}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pos}%`,
              background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.06), transparent)',
            }}
          />
        ))}
      </div>

      {/* EST badge top right */}
      <div
        className="absolute top-8 right-8 hidden lg:flex flex-col items-center"
        style={{ color: 'rgba(201,168,76,0.3)' }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase">EST</span>
        <span className="font-playfair text-[28px] font-bold leading-none">2020</span>
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase">WUP</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div {...fadeUp(0)}>
            <span className="section-label mb-6 inline-flex">
              Wuppertal · Elberfeld · Est. 2020
            </span>
          </motion.div>

          {/* Gold accent line */}
          <motion.span {...fadeUp(0.1)} className="gold-line mb-6 block" />

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-playfair text-hero text-cream"
            style={{ lineHeight: 1.05 }}
          >
            Premium
            <span className="block" style={{ color: '#C9A84C' }}>Haarschnitte.</span>
            <span className="block text-[0.7em]" style={{ color: '#A89F94' }}>
              Wuppertals finest Barber.
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            {...fadeUp(0.35)}
            className="mt-6 text-[16px] sm:text-[18px] leading-relaxed max-w-xl"
            style={{ color: '#A89F94' }}
          >
            Fade, Skin Fade, Classic Cut und Bartpflege – von Hand, mit Präzision und
            Leidenschaft. Seit 2020 der Barbershop für Männer in Wuppertal.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="mt-9 flex flex-wrap gap-3">
            <Link href="/termin" className="btn btn-gold">
              Termin buchen
            </Link>
            <Link href="/leistungen" className="btn btn-outline">
              Preise & Leistungen
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-10 flex flex-wrap items-center gap-5 pt-8"
            style={{ borderTop: '1px solid #1a1a1a' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] font-semibold" style={{ color: '#F5F0E8' }}>
                {businessInfo.aggregateRating.ratingValue}
              </span>
              <span className="text-[12px]" style={{ color: '#5C564E' }}>
                ({businessInfo.aggregateRating.reviewCount} Google-Bewertungen)
              </span>
            </div>
            <div className="flex items-center gap-2 text-[13px]" style={{ color: '#5C564E' }}>
              <span style={{ color: '#C9A84C' }}>✓</span>
              <span>Über 1.200 Kunden</span>
            </div>
            <div className="flex items-center gap-2 text-[13px]" style={{ color: '#5C564E' }}>
              <span style={{ color: '#C9A84C' }}>✓</span>
              <span>Walk-ins willkommen</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: prefersReduced ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: prefersReduced ? 0 : 1.2, duration: prefersReduced ? 0 : 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#5C564E' }}>
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          }}
        />
      </motion.div>
    </section>
  )
}
