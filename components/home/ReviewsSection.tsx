'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { reviews, businessInfo } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { formatDate } from '@/lib/utils'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1,2,3,4,5].map((s) => (
        <svg
          key={s}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={s <= rating ? '#C9A84C' : '#2a2a2a'}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const initials = review.author.split(' ').map(w => w[0]).join('').toUpperCase()

  return (
    <div
      className="card-dark p-6 flex flex-col gap-4 shrink-0"
      style={{ width: 'clamp(280px, 85vw, 360px)' }}
    >
      <StarRating rating={review.rating} />
      <blockquote className="text-[14px] leading-relaxed flex-1" style={{ color: '#A89F94' }}>
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <footer className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
            style={{ background: 'rgba(201,168,76,0.12)', color: '#C9A84C' }}
          >
            {initials}
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: '#F5F0E8' }}>{review.author}</p>
            {review.neighborhood && (
              <p className="text-[11px]" style={{ color: '#5C564E' }}>{review.neighborhood}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] uppercase tracking-wide font-medium" style={{ color: '#C9A84C' }}>
            {review.source === 'google' ? 'Google' : review.source}
          </p>
          <p className="text-[11px] mt-0.5" style={{ color: '#5C564E' }}>{formatDate(review.date)}</p>
        </div>
      </footer>
    </div>
  )
}

export default function ReviewsSection() {
  const prefersReduced = useReducedMotion()
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll carousel
  useEffect(() => {
    if (prefersReduced) return
    const track = trackRef.current
    if (!track) return

    let pos = 0
    let raf: number

    const step = () => {
      if (!isPaused) {
        pos += 0.4
        const maxScroll = track.scrollWidth / 2
        if (pos >= maxScroll) pos = 0
        track.scrollLeft = pos
      }
      raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isPaused, prefersReduced])

  return (
    <section
      className="py-20"
      style={{ background: '#111111', borderTop: '1px solid #1a1a1a' }}
      aria-label="Kundenbewertungen"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="section-label mb-4">Was Kunden sagen</span>
              <h2 className="font-playfair text-h2 text-cream mt-4">Bewertungen</h2>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: '#0a0a0a', border: '1px solid #2a2a2a' }}>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[22px] font-bold font-playfair" style={{ color: '#C9A84C' }}>
                  {businessInfo.aggregateRating.ratingValue}
                  <span className="text-[14px] font-normal ml-1" style={{ color: '#5C564E' }}>/ 5</span>
                </p>
                <p className="text-[11px]" style={{ color: '#5C564E' }}>
                  {businessInfo.aggregateRating.reviewCount} Google-Bewertungen
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Carousel */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6"
        style={{ scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Duplicate reviews for infinite loop illusion */}
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} review={review} />
        ))}
      </div>
    </section>
  )
}
