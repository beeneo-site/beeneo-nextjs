'use client'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'
import { products, groupOrder, groupLabels, type Product } from '@/lib/products'
import {
  ArrowRight, Calculator, Users, Boxes, FileBarChart, BarChart3,
  GitBranch, ListChecks, Ticket, Workflow, Sparkles, Youtube, type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Calculator, Users, Boxes, FileBarChart, BarChart3, GitBranch, ListChecks, Ticket, Workflow,
}

export default function SureneoPage() {
  const { t, locale } = useI18n()
  const s = t.suite

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Platform</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">{s.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">{s.subtitle}</p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{s.intro}</p>
        </div>
      </section>

      {/* Grouped products */}
      <section className="py-14 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-14">
          {groupOrder.map((g) => {
            const items = products.filter((p) => p.group === g)
            if (!items.length) return null
            return (
              <div key={g}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-6 w-1.5 rounded-full" style={{ backgroundColor: items[0].color }} />
                  <h2 className="font-display text-xl font-bold">{groupLabels[g][locale]}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((p) => (
                    <ProductCard key={p.id} p={p} locale={locale} s={s} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Freemium / YouTube banner */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-8 lg:p-10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-display text-2xl font-bold">{s.freemiumTitle}</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl leading-relaxed mb-5">{s.freemiumDesc}</p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Youtube className="h-5 w-5" />
              YouTube
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ProductCard({ p, locale, s }: { p: Product; locale: string; s: Record<string, string> }) {
  const Icon = iconMap[p.icon] ?? Boxes
  const isLive = p.status === 'live'
  return (
    <Link
      id={p.id}
      href={p.href}
      className="group relative flex flex-col p-6 rounded-xl border border-border/50 bg-background hover:shadow-lg transition-all scroll-mt-24"
      style={{ borderTopColor: p.color, borderTopWidth: 3 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="h-11 w-11 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${p.color}1a` }}>
          <Icon className="h-5 w-5" style={{ color: p.color }} />
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full"
          style={{
            backgroundColor: isLive ? `${p.color}1a` : 'hsl(var(--muted))',
            color: isLive ? p.color : 'hsl(var(--muted-foreground))',
          }}
        >
          {isLive ? s.liveBadge : s.betaBadge}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{p.name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{(p.desc as Record<string, string>)[locale]}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 group-hover:gap-2 transition-all" style={{ color: p.color }}>
        {s.explore} <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
