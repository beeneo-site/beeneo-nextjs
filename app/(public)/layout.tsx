'use client'
import { I18nProvider } from '@/lib/i18n-context'
import { LandingNavbar } from '@/components/landing/navbar'
import { LandingFooter } from '@/components/landing/footer'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider initial="tr">
      <div className="min-h-screen flex flex-col">
        <LandingNavbar />
        <main className="flex-1 pt-16">{children}</main>
        <LandingFooter />
      </div>
    </I18nProvider>
  )
}
