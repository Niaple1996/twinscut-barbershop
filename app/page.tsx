import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import TeamPreview from '@/components/home/TeamPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import ReviewsSection from '@/components/home/ReviewsSection'
import WuppertalSection from '@/components/home/WuppertalSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'The TwinsCut – Barbershop Wuppertal | Premium Haarschnitte seit 2020',
  description:
    'The TwinsCut – Wuppertals Premium-Barbershop in Elberfeld. Fade, Skin Fade, Haarschnitt und Bartpflege. Jetzt online Termin buchen. 4.9 ★ bei Google.',
  alternates: { canonical: 'https://twinscut.de' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <TeamPreview />
      <GalleryPreview />
      <ReviewsSection />
      <WuppertalSection />
      <CTASection />
    </>
  )
}
