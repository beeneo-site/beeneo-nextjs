'use client'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import type { ReactNode } from 'react'

type Props = {
  breadcrumbs: { label: string; href: string }[]
  title: string
  desc: string
  items?: string[]
  children?: ReactNode
  icon?: ReactNode
}

export function SubpageTemplate({ breadcrumbs, title, desc, items, children, icon }: Props) {
  return (
    <>
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumbs.map((bc, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={bc.href} className="hover:text-foreground transition-colors">{bc.label}</Link>
              </span>
            ))}
          </nav>
          <div className="flex items-start gap-4">
            {icon && <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">{icon}</div>}
            <div>
              <h1 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">{desc}</p>
            </div>
          </div>
        </div>
      </section>
      {items && items.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border/50 bg-background">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {children && <section className="py-16"><div className="max-w-7xl mx-auto px-4 lg:px-8">{children}</div></section>}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Link href={breadcrumbs[breadcrumbs.length - 1]?.href || '/'} className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
        </div>
      </section>
    </>
  )
}
