import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { w: 120, h: 40 },
  md: { w: 160, h: 54 },
  lg: { w: 200, h: 67 },
}

export default function Logo({ variant = 'light', size = 'md' }: LogoProps) {
  const { w, h } = sizes[size]
  const src = variant === 'light' ? '/images/logo-white.png' : '/images/logo.png'

  return (
    <Link href="/" aria-label="The TwinsCut – Startseite" className="inline-flex items-center shrink-0">
      <Image
        src={src}
        alt="The TwinsCut Barbershop Wuppertal"
        width={w}
        height={h}
        className="object-contain"
        priority
      />
    </Link>
  )
}
