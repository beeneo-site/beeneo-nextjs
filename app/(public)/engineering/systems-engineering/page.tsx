'use client'
import { useI18n } from '@/lib/i18n-context'
import { SubpageTemplate } from '@/components/landing/subpage-template'
import { Cpu } from 'lucide-react'

export default function SystemsEngineeringPage() {
  const { t } = useI18n()
  const d = t.engineering.systemsEng
  return (
    <SubpageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: t.nav.engineering, href: '/engineering' }]}
      title={d.title}
      desc={d.desc}
      items={d.items}
      icon={<Cpu className="h-7 w-7 text-primary" />}
    />
  )
}
