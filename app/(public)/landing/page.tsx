'use client'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'
import Image from 'next/image'
import { ArrowRight, Play, Hexagon, Cpu, Landmark, Users, AlertTriangle, UserPlus, FileText, Zap, Cloud, Shield, BookOpen, Share2 } from 'lucide-react'

const featureIcons = [Cpu, Landmark, Users, AlertTriangle, UserPlus, FileText]

export default function LandingPage() {
  const { t } = useI18n()
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.07) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
              <Hexagon className="h-3.5 w-3.5" /> {t.hero.badge}
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              {t.hero.title}
              <span className="block text-primary mt-1">for VSEs</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                {t.hero.cta} <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors">
                <Play className="h-4 w-4" /> {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-border/50">
            {t.hero.stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i}>
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 lg:py-28 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">{t.features.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feat: { title: string; desc: string }, i: number) => {
              const Icon = featureIcons[i] || Cpu
              return (
                <div key={i} className="group p-6 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Google Workspace */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-transparent p-8 lg:p-14 flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <Cloud className="h-3.5 w-3.5" /> Framework as a Service
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">{t.workspace.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.workspace.desc}</p>
              <div className="flex flex-wrap gap-3">
                {['Gmail', 'Google Drive', 'Google Sheets', 'Google Calendar', 'Apps Script', 'AppSheet'].map((svc) => (
                  <span key={svc} className="px-3 py-1.5 text-xs font-medium rounded-full border border-border bg-background">{svc}</span>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-80 aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <Zap className="h-16 w-16 text-primary mx-auto mb-3" />
                <p className="font-display font-bold text-lg">LEAF + LEAI</p>
                <p className="text-xs text-muted-foreground">On Google Workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance badges */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">Compliance & Standards Alignment</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['ISO 29110', 'ISO 9001', 'KVKK / GDPR'].map((std) => (
              <span key={std} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background text-sm">
                <Shield className="h-3.5 w-3.5 text-primary" /> {std}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Social Highlights */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Latest from beeNEO</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Insights on process engineering, compliance, and digital transformation</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Blog highlights */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">Blog</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'A Process Maturity Journey: From Ad Hoc to Institutionalized Excellence', image: '/blog/a-process-maturity-journey-from-ad-hoc-to-institutionalized-excellence.jpg', kicker: 'Process Coaching', href: '/blog' },
                  { title: 'The Coaching Mindset: Helping Teams Own Their Processes', image: '/blog/coaching-mindset-team-process-ownership.jpg', kicker: 'Process Coaching', href: '/blog' },
                  { title: 'From Audit Prep to Permanent Readiness', image: '/blog/audit-prep-permanent-readiness.jpg', kicker: 'Process Excellence', href: '/blog' },
                ].map((post, i) => (
                  <Link key={i} href={post.href} className="group flex gap-4 p-3 rounded-xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium text-primary">{post.kicker}</span>
                      <p className="text-sm font-medium leading-snug mt-1 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-4">
                View all articles <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            {/* Social highlights */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Share2 className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold text-lg">Social Media</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  '/social/Chf0Lo4OOZa.webp', '/social/lIbNytL6DiM.webp', '/social/Ab6ibYscSLk.webp',
                  '/social/ar3NlWj-znx.webp', '/social/LDxUerJpOyK.webp', '/social/tYjQHe-e4NI.webp',
                ].map((src, i) => (
                  <Link key={i} href="/social" className="relative aspect-square rounded-xl overflow-hidden bg-muted group">
                    <Image src={src} alt={`beeNEO social post ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </Link>
                ))}
              </div>
              <Link href="/social" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-4">
                See all posts <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">{t.cta.subtitle}</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-lg">
            {t.cta.button} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
