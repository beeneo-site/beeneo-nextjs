'use client'
import { useI18n } from '@/lib/i18n-context'
import { SubpageTemplate } from '@/components/landing/subpage-template'
import { Box } from 'lucide-react'

export default function ERPPage() {
  const { t } = useI18n()
  const mod = t.sureneoProduct.modules[2]
  return (
    <SubpageTemplate
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'sureNEO LOS', href: '/sureneo' }]}
      title={mod.title}
      desc={mod.desc}
      icon={<Box className="h-7 w-7 text-primary" />}
      items={['Bill of Materials (BOM) management', 'Engineering Change Orders (ECO) workflow', 'MRP-light purchasing proposals', 'Stock management with barcode scanning', 'ISO/ASPICE audit trail', 'Supplier & vendor tracking']}
    />
  )
}
