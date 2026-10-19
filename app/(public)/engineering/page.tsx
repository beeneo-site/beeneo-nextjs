'use client'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'
import { ArrowRight, Settings, GraduationCap, Cpu, ShieldCheck } from 'lucide-react'

const sections = [
  { key: 'processConsulting', href: '/engineering/process-consulting', icon: Settings },
  { key: 'coaching', href: '/engineering/coaching', icon: GraduationCap },
  { key: 'systemsEng', href: '/engineering/systems-engineering', icon: Cpu },
  { key: 'iso', href: '/engineering/iso-compliance', icon: ShieldCheck },
]

export default function EngineeringPage() {
  const { t } = useI18n()
  const eng = t.engineering
  return (
    <>
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">beeNEO Engineering</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">{eng.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-3">{eng.subtitle}</p>
          <p className="text-muted-foreground max-w-3xl">{eng.heroDesc}</p>
        </div>
      </section>
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          {sections.map((s) => {
            const Icon = s.icon
            const data = eng[s.key as keyof typeof eng] as { title: string; desc: string }
            return (
              <Link key={s.key} href={s.href} className="group p-8 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{data.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{data.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>
    </>
  )
}
