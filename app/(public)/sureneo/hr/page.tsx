'use client'
import { useI18n } from '@/lib/i18n-context'
import { SubpageTemplate } from '@/components/landing/subpage-template'
import { Users } from 'lucide-react'

export default function HRPage() {
  const { t } = useI18n()
  const mod = t.sureneoProduct.modules[1]
  return (
    <SubpageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'sureNEO LOS', href: '/sureneo' }]}
      title={mod.title}
      desc={mod.desc}
      icon={<Users className="h-7 w-7 text-primary" />}
      items={['AI-powered job description generator', 'CV parsing with fit-scoring', 'Training matrix monitoring', 'TGB Law 4691 & 5746 payroll exemptions', 'Bordro & MUHSGK preparation', 'delilim.com integration (expat work permits, YÖK Denklik)', 'One-click TGB Activity Report generation']}
    />
  )
}
