'use client'
import { useI18n } from '@/lib/i18n-context'
import { SubpageTemplate } from '@/components/landing/subpage-template'
import { Calculator } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinancePage() {
  const { t } = useI18n()
  const sp = t.sureneoProduct
  const mod = sp.modules[0]
  return (
    <SubpageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'sureNEO LOS', href: '/sureneo' }]}
      title={mod.title}
      desc={mod.desc}
      icon={<Calculator className="h-7 w-7 text-primary" />}
      items={['Autonomous e-Invoice ingestion via Gemini OCR', 'ETTN UUID checksum verification', 'TDHP dual-entry posting (770, 191, 320, 600)', 'GİB Özel Entegratör integration', 'Smart banking reconciliation', 'SMMM traffic-light audit dashboard', 'One-click SGK/Vergi dossier builder']}
    >
      <div className="text-center">
        <Link href="/signup" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
          {t.nav.getStarted} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SubpageTemplate>
  )
}
