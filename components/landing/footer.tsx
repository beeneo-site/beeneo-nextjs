'use client'
import Link from 'next/link'
import { useI18n } from '@/lib/i18n-context'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/beeneo', icon: 'in' },
  { label: 'X (Twitter)', href: 'https://twitter.com/beeNEO_biz', icon: '𝕏' },
  { label: 'Instagram', href: 'https://www.instagram.com/beeneo_biz/', icon: 'ig' },
  { label: 'Facebook', href: 'https://www.facebook.com/1182270611632506', icon: 'fb' },
]

export function LandingFooter() {
  const { t } = useI18n()
  const fl = t.footerLinks
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-3">
              <img src="/logo-beeneo.png" alt="beeNEO" className="h-10 dark:hidden" />
              <img src="/logo-beeneo-white.png" alt="beeNEO" className="h-10 hidden dark:block" />
            </Link>
            <p className="text-sm text-muted-foreground">{t.footer.tagline}</p>
            <p className="text-xs text-muted-foreground mt-2">{t.footer.brand}</p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{fl.aboutUs}</Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{fl.blog}</Link>
            <Link href="/social" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{fl.socialMedia}</Link>
            <Link href="/impressum" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{fl.impressum}</Link>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
