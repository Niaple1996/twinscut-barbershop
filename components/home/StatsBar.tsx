import { stats } from '@/lib/data'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function StatsBar() {
  return (
    <section
      className="py-10 px-6"
      style={{
        background: '#111111',
        borderTop: '1px solid #1a1a1a',
        borderBottom: '1px solid #1a1a1a',
      }}
      aria-label="Kenndaten"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} direction="up" delay={i * 0.1}>
            <div
              className={`flex flex-col items-center text-center py-2 ${
                i < stats.length - 1 ? 'lg:border-r' : ''
              }`}
              style={{ borderColor: '#2a2a2a' }}
            >
              <span
                className="font-playfair text-[2.25rem] font-bold leading-none"
                style={{ color: '#C9A84C' }}
              >
                {stat.value}
                <span className="text-[1.5rem]">{stat.suffix}</span>
              </span>
              <span className="mt-1.5 text-[12px] uppercase tracking-widest font-medium" style={{ color: '#5C564E' }}>
                {stat.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
