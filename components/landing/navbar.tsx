'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'
import { localeLabels, localeFlags, locales, type Locale } from '@/lib/i18n'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { productGroupsForNav } from '@/lib/products'
import { lvkonGroups } from '@/lib/lvkon'

type DropdownItem = { href: string; label: string; desc?: string }
type NavItem = { label: string; href?: string; children?: { group: string; items: DropdownItem[] }[] }

function useNavItems(): NavItem[] {
  const { t, locale } = useI18n()
  return [
    { label: t.nav.home, href: '/' },
    {
      label: t.nav.engineering,
      children: [
        {
          group: t.nav.engineering,
          items: [
            { href: '/engineering', label: t.nav.engineering, desc: 'Overview' },
            { href: '/engineering/process-consulting', label: t.nav.processConsulting },
            { href: '/engineering/coaching', label: t.nav.coaching },
            { href: '/engineering/systems-engineering', label: t.nav.systemsEngineering },
            { href: '/engineering/iso-compliance', label: t.nav.isoCompliance },
          ],
        },
      ],
    },
    {
      label: t.nav.sureneo,
      children: [
        { group: t.suite.title, items: [{ href: '/sureneo', label: t.nav.sureneo, desc: t.suite.subtitle }] },
        ...productGroupsForNav(locale),
      ],
    },
    {
      label: t.nav.products,
      children: [
        {
          group: 'Lvkon E-Mobility',
          items: [
            { href: '/products/lvkon', label: t.nav.lvkon, desc: t.nav.lvkonOverview },
            ...lvkonGroups.map((g) => ({ href: `/products/lvkon#${g.slug}`, label: g.label[locale] })),
          ],
        },
      ],
    },
    { label: t.nav.about, href: '/about' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.socialMedia, href: '/social' },
  ]
}

export function LandingNavbar() {
  const { t, locale, setLocale } = useI18n()
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = useNavItems()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const handleEnter = (i: number) => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpenIdx(i) }
  const handleLeave = () => { timeoutRef.current = setTimeout(() => setOpenIdx(null), 200) }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo-beeneo.png" alt="beeNEO — sureNEO LOS" className="h-9 dark:hidden" />
          <img src="/logo-beeneo-white.png" alt="beeNEO — sureNEO LOS" className="h-9 hidden dark:block" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, i) => (
            <div key={i} className="relative" onMouseEnter={() => item.children && handleEnter(i)} onMouseLeave={handleLeave}>
              {item.href && !item.children ? (
                <Link href={item.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50">
                  {item.label}
                </Link>
              ) : (
                <Link href={item.children?.[0]?.items?.[0]?.href || '#'} className={cn('flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors', openIdx === i ? 'text-foreground bg-accent/50' : 'text-muted-foreground hover:text-foreground hover:bg-accent/50')}>
                  {item.label} <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', openIdx === i && 'rotate-180')} />
                </Link>
              )}
              {item.children && openIdx === i && (
                <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-xl shadow-lg p-2 min-w-[260px] animate-fade-in" onMouseEnter={() => handleEnter(i)} onMouseLeave={handleLeave}>
                  {item.children.map((group) => (
                    <div key={group.group}>
                      <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{group.group}</p>
                      {group.items.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setOpenIdx(null)}
                          className="flex flex-col px-3 py-2 rounded-lg text-sm hover:bg-accent/60 transition-colors">
                          <span className="font-medium text-foreground">{sub.label}</span>
                          {sub.desc && <span className="text-xs text-muted-foreground">{sub.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1.5 px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/50 transition-colors">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{localeFlags[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-lg shadow-lg p-1 min-w-[140px] animate-fade-in z-50">
                {locales.map((l) => (
                  <button key={l} onClick={() => { setLocale(l); setLangOpen(false) }}
                    className={cn('w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors', locale === l ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground')}>
                    <span>{localeFlags[l]}</span> {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link href="/login" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            {t.nav.login}
          </Link>
          <Link href="/signup" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            {t.nav.getStarted}
          </Link>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl max-h-[70vh] overflow-y-auto">
          <div className="p-4 space-y-1">
            {navItems.map((item, i) => (
              <div key={i}>
                {item.href && !item.children ? (
                  <Link href={item.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-accent/50">
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-foreground rounded-md hover:bg-accent/50">
                      {item.label} <ChevronDown className={cn('h-4 w-4 transition-transform', openIdx === i && 'rotate-180')} />
                    </button>
                    {openIdx === i && item.children?.map((group) => (
                      <div key={group.group} className="pl-4 space-y-0.5 mt-1">
                        {group.items.map((sub) => (
                          <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-accent/50">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
            <div className="pt-3 mt-3 border-t border-border flex flex-col gap-2">
              <Link href="/login" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-center text-muted-foreground hover:text-foreground">{t.nav.login}</Link>
              <Link href="/signup" onClick={() => setMobileOpen(false)} className="px-3 py-2 text-sm text-center font-medium bg-primary text-primary-foreground rounded-lg">{t.nav.getStarted}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
