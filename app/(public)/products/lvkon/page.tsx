'use client'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-context'
import { lvkonGroups, lvkonReferences, lvkonFacts, lvkonCopy } from '@/lib/lvkon'
import { CheckCircle2 } from 'lucide-react'

export default function LvkonPage() {
  const { locale } = useI18n()
  const c = lvkonCopy[locale]
  const facts = lvkonFacts[locale]

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-4">{c.eyebrow}</p>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12">
            <div className="flex-1">
              <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-5">{c.title}</h1>
              <p className="text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed">{c.lead}</p>
            </div>
            <div className="shrink-0 rounded-2xl border border-border/50 bg-background p-6 flex items-center justify-center">
              <img src="/partners/lvkon-logo.svg" alt="Lvkon" className="h-14 w-auto object-contain" />
            </div>
          </div>
          {/* Facts strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {facts.map((f, i) => (
              <div key={i} className="rounded-xl border border-border/50 bg-card/50 px-5 py-6 text-center">
                <div className="font-display text-2xl lg:text-3xl font-bold text-primary">{f.value}</div>
                <div className="text-xs text-muted-foreground mt-1.5">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue intro */}
      <section className="pt-4 pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">{c.catalogTitle}</h2>
          <p className="text-muted-foreground max-w-3xl">{c.catalogLead}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {lvkonGroups.map((g) => (
              <a key={g.slug} href={`#${g.slug}`}
                className="text-sm px-4 py-2 rounded-full border border-border/60 bg-background hover:border-primary/40 transition-colors"
                style={{ color: g.color }}>
                {g.label[locale]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Groups */}
      {lvkonGroups.map((g) => (
        <section key={g.slug} id={g.slug} className="py-12 scroll-mt-20 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-7 w-1.5 rounded-full" style={{ backgroundColor: g.color }} />
              <h3 className="font-display text-2xl font-bold">{g.label[locale]}</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mb-8">{g.desc[locale]}</p>

            {g.subgroups.map((sg) => (
              <div key={sg.id} className="mb-10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5 flex items-center gap-2">
                  {sg.name}
                  <span className="text-xs font-normal normal-case text-muted-foreground/70">
                    ({sg.products.length} {c.productsWord})
                  </span>
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sg.products.map((p) => (
                    <div key={p.model} className="rounded-xl border border-border/50 bg-background overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                      <div className="relative aspect-[4/3] bg-muted/40">
                        <Image src={p.image} alt={p.model} fill className="object-contain p-4" sizes="(max-width:1024px) 50vw, 33vw" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        <div className="font-display text-lg font-bold mb-3" style={{ color: g.color }}>{p.model}</div>
                        <dl className="space-y-1.5 text-xs flex-1">
                          {Object.entries(p.specs).filter(([k]) => k !== 'Product Model').map(([k, v]) => (
                            <div key={k} className="flex gap-2">
                              <dt className="text-muted-foreground shrink-0 w-28">{k}</dt>
                              <dd className="text-foreground font-medium">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* References */}
      <section className="py-16 bg-card/50 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold mb-3">{c.referencesTitle}</h2>
          <p className="text-muted-foreground max-w-3xl mb-8">{c.referencesLead}</p>
          <div className="flex flex-wrap gap-3">
            {lvkonReferences.map((r) => (
              <div key={r} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border/50 bg-background">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
