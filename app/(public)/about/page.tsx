'use client'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-context'
import { team, locations, accreditation, beeneoReferences } from '@/lib/team'
import { MapPin, BadgeCheck, CheckCircle2 } from 'lucide-react'

function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function AboutPage() {
  const { t, locale } = useI18n()
  const a = t.about
  const l = t.leadership
  const refs = beeneoReferences[locale]

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo-beeneo.png" alt="beeNEO" className="h-12 dark:hidden" />
            <img src="/logo-beeneo-white.png" alt="beeNEO" className="h-12 hidden dark:block" />
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">{a.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">{a.subtitle}</p>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">{a.desc}</p>
        </div>
      </section>

      {/* Leadership / Founder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-3">{l.title}</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">{l.desc}</p>
          <div className="max-w-2xl rounded-2xl border border-border/50 bg-background p-6 lg:p-8 flex flex-col sm:flex-row gap-6">
            <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden bg-muted">
              <Image src="/team/ayhan-onal.jpg" alt={l.founderName} fill className="object-cover" sizes="112px" />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">{l.founderName}</h3>
              <p className="text-sm font-medium text-primary mb-3">{l.founderRole}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{l.founderBio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-3">{a.teamTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">{a.teamDesc}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="rounded-2xl border border-border/50 bg-background p-6">
                <div className="flex items-center gap-4 mb-4">
                  {m.photo ? (
                    <div className="relative h-16 w-16 shrink-0 rounded-xl overflow-hidden bg-muted">
                      <Image src={m.photo} alt={m.name} fill className="object-cover" sizes="64px" />
                    </div>
                  ) : (
                    <div className="h-16 w-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-primary">{initials(m.name)}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight">{m.name}</h3>
                    <p className="text-xs font-medium text-primary mt-1">{m.role[locale]}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.bio[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-10">{a.locationsTitle}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="rounded-2xl border border-border/50 bg-background p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold">{loc.city}</h3>
                </div>
                <p className="text-xs font-medium text-primary mb-3">{loc.label[locale]}</p>
                <address className="not-italic text-sm text-muted-foreground leading-relaxed">
                  {loc.lines.map((line, i) => <span key={i} className="block">{line}</span>)}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-10">{a.accreditationTitle}</h2>
          <div className="rounded-2xl border border-border/50 bg-background p-6 lg:p-8 flex flex-col sm:flex-row items-center gap-8">
            <div className="relative h-32 w-32 shrink-0">
              <Image src={accreditation.badgeImage} alt={accreditation.title[locale]} fill className="object-contain" sizes="128px" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BadgeCheck className="h-5 w-5 text-primary" />
                <h3 className="font-display text-lg font-semibold">{accreditation.title[locale]}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-3">No. {accreditation.docNo}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{accreditation.desc[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="font-display text-2xl font-bold mb-3">{a.referencesTitle}</h2>
          <p className="text-muted-foreground max-w-2xl mb-10">{a.referencesDesc}</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {refs.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border/50 bg-background p-6">
                <CheckCircle2 className="h-7 w-7 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
