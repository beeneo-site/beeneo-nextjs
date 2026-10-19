'use client'
import { useI18n } from '@/lib/i18n-context'
import { Info } from 'lucide-react'

export default function ImpressumPage() {
  const { t } = useI18n()
  const i = t.impressum

  const sectionTR: { label: string; value: string }[] = [
    { label: i.companyLabel, value: 'BERRİN ERDEN NEO MÜHENDİSLİK DANIŞMANLIK GIDA SANAYİ VE TİCARET LTD. ŞTİ. (beeNEO)' },
    { label: i.mdLabel, value: 'Ayhan Önal' },
    { label: i.addressLabel, value: 'Güzeltepe Mh. Pembegül Sk. No:7/8, 34680 Üsküdar / İstanbul, Türkiye' },
    { label: i.rdLabel, value: 'Teknopol TGB — Ahmet Yesevi Mh. Kerem Sokak, No: 9, 34903 Pendik / İstanbul, Türkiye' },
    { label: i.taxLabel, value: 'Üsküdar V.D. — 1660399683' },
    { label: i.emailLabel, value: 'info@beeneo.biz' },
    { label: i.phoneLabel, value: '+90 216 460 17 20' },
    { label: i.webLabel, value: 'www.beeneo.biz' },
  ]

  const sectionDE: { label: string; value: string }[] = [
    { label: i.companyLabel, value: 'Kontaktbüro beeNEO Deutschland' },
    { label: i.mdLabel, value: 'Ayhan Önal' },
    { label: i.addressLabel, value: 'Kalkumer Str. 127, 40468 Düsseldorf, Deutschland' },
    { label: i.emailLabel, value: 'info@beeneo.biz' },
    { label: i.phoneLabel, value: '+49 211 9629 160-11' },
    { label: i.webLabel, value: 'www.beeneo.biz' },
  ]

  return (
    <section className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="relative max-w-3xl mx-auto px-4 lg:px-8">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-3">{i.title}</h1>
        <p className="text-muted-foreground mb-10">{i.subtitle}</p>

        {[
          { heading: i.sectionTR, rows: sectionTR },
          { heading: i.sectionDE, rows: sectionDE },
        ].map((block) => (
          <div key={block.heading} className="mb-8">
            <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="h-5 w-1.5 rounded-full bg-primary" />{block.heading}
            </h2>
            <div className="rounded-2xl border border-border/50 bg-background overflow-hidden">
              <dl className="divide-y divide-border/50">
                {block.rows.map((r, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:w-48 shrink-0">{r.label}</dt>
                    <dd className="text-sm text-foreground">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">{i.note}</p>
        </div>
      </div>
    </section>
  )
}
