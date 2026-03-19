'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useReducedMotion, type Variant } from 'framer-motion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

const variants: Record<Direction, { hidden: Variant; visible: Variant }> = {
  up:    { hidden: { opacity: 0, y: 32 },   visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 },  visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -32 },  visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 },   visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: ScrollRevealProps) {
  const prefersReduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) obs.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
