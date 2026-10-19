import type { Locale } from './i18n'

export type ProductStatus = 'live' | 'beta'

export type ProductGroupKey = 'finance' | 'people' | 'operations' | 'reporting' | 'engineering' | 'workflow'

export type Product = {
  id: string
  name: string
  icon: string // lucide icon name (mapped in component)
  group: ProductGroupKey
  status: ProductStatus
  href: string
  color: string // hex accent
  desc: Record<Locale, string>
}

// Accent colors per product group
export const groupColors: Record<ProductGroupKey, string> = {
  finance: '#FF5C2A',
  people: '#10b981',
  operations: '#3b82f6',
  reporting: '#8b5cf6',
  engineering: '#f59e0b',
  workflow: '#06b6d4',
}

export const groupLabels: Record<ProductGroupKey, Record<Locale, string>> = {
  finance: { tr: 'Finans', en: 'Finance', de: 'Finanzen' },
  people: { tr: 'İnsan & Yetenek', en: 'People & Talent', de: 'Personal & Talent' },
  operations: { tr: 'Operasyon', en: 'Operations', de: 'Betrieb' },
  reporting: { tr: 'Raporlama & Uyum', en: 'Reporting & Compliance', de: 'Reporting & Compliance' },
  engineering: { tr: 'Mühendislik Yaşam Döngüsü', en: 'Engineering Lifecycle', de: 'Engineering-Lebenszyklus' },
  workflow: { tr: 'Servis & İş Akışı', en: 'Service & Workflow', de: 'Service & Workflow' },
}

// Display order of groups
export const groupOrder: ProductGroupKey[] = ['finance', 'people', 'operations', 'reporting', 'engineering', 'workflow']

export const products: Product[] = [
  {
    id: 'finance', name: 'sureNEO LOS Finance', icon: 'Calculator', group: 'finance', status: 'live',
    href: '/sureneo/finance', color: groupColors.finance,
    desc: {
      tr: 'Otonom muhasebe, GİB entegrasyonu, akıllı banka mutabakatı, SMMM denetim paneli ve tek tıkla dosya oluşturucu.',
      en: 'Autonomous accounting, GİB integration, smart banking reconciliation, SMMM audit dashboard and one-click dossier builder.',
      de: 'Autonome Buchhaltung, GİB-Integration, Smart-Banking-Abstimmung, SMMM-Audit-Dashboard und Ein-Klick-Dossier.',
    },
  },
  {
    id: 'hr-talent', name: 'sureNEO LOS HR & Talent', icon: 'Users', group: 'people', status: 'beta',
    href: '/sureneo#hr-talent', color: groupColors.people,
    desc: {
      tr: 'Yapay zeka destekli iş tanımları, CV uyum puanlama, eğitim matrisi ve küresel yetenek işe alım akışları.',
      en: 'AI-powered job descriptions, CV fit-scoring, training matrix and global talent onboarding workflows.',
      de: 'KI-gestützte Stellenbeschreibungen, CV-Fit-Scoring, Trainingsmatrix und globale Talent-Onboarding-Workflows.',
    },
  },
  {
    id: 'minierp', name: 'sureNEO LOS miniERP', icon: 'Boxes', group: 'operations', status: 'beta',
    href: '/sureneo#minierp', color: groupColors.operations,
    desc: {
      tr: 'Stok, satın alma, sipariş ve cari hesap yönetimi — KOBİ’ler için sade, hafif bir ERP çekirdeği.',
      en: 'Stock, purchasing, orders and current-account management — a lean, lightweight ERP core for VSEs.',
      de: 'Lager, Einkauf, Bestellungen und Kontokorrent — ein schlanker, leichter ERP-Kern für KMU.',
    },
  },
  {
    id: 'tgb', name: 'sureNEO LOS TGB', icon: 'FileBarChart', group: 'reporting', status: 'beta',
    href: '/sureneo#tgb', color: groupColors.reporting,
    desc: {
      tr: 'Türk Teknoparklarına otomatik faaliyet ve bordro raporlaması; 4691 & 5746 muafiyet takibi.',
      en: 'Automated activity & payroll reporting to Turkish Technoparks; 4691 & 5746 exemption tracking.',
      de: 'Automatisiertes Aktivitäts- & Lohnreporting an türkische Technoparks; 4691 & 5746 Nachverfolgung.',
    },
  },
  {
    id: 'kpi', name: 'sureNEO LOS KPI Reporting', icon: 'BarChart3', group: 'reporting', status: 'beta',
    href: '/sureneo#kpi', color: groupColors.reporting,
    desc: {
      tr: 'Finans, İK ve operasyon KPI’larını tek panelde toplayan canlı gösterge tabloları ve otomatik raporlar.',
      en: 'Live dashboards and automated reports uniting finance, HR and operations KPIs in one place.',
      de: 'Live-Dashboards und automatisierte Berichte, die Finanz-, HR- und Betriebs-KPIs vereinen.',
    },
  },
  {
    id: 'miniplm', name: 'sureNEO LOS miniPLM', icon: 'GitBranch', group: 'engineering', status: 'beta',
    href: '/sureneo#miniplm', color: groupColors.engineering,
    desc: {
      tr: 'Ürün ağacı (BOM), revizyon ve mühendislik değişiklik emirleri (ECO) yönetimi.',
      en: 'Bill of materials (BOM), revision control and Engineering Change Order (ECO) management.',
      de: 'Stückliste (BOM), Revisionskontrolle und Engineering-Change-Order-Management (ECO).',
    },
  },
  {
    id: 'minireq', name: 'sureNEO LOS miniREQ', icon: 'ListChecks', group: 'engineering', status: 'beta',
    href: '/sureneo#minireq', color: groupColors.engineering,
    desc: {
      tr: 'Gereksinim yönetimi: izlenebilirlik, sürüm ve kapsam kontrolü ile uçtan uca takip.',
      en: 'Requirements management: end-to-end traceability, versioning and coverage control.',
      de: 'Anforderungsmanagement: durchgängige Nachverfolgbarkeit, Versionierung und Abdeckung.',
    },
  },
  {
    id: 'miniticket', name: 'sureNEO LOS miniTicket', icon: 'Ticket', group: 'workflow', status: 'beta',
    href: '/sureneo#miniticket', color: groupColors.workflow,
    desc: {
      tr: 'Destek ve iç talep yönetimi: biletleme, SLA takibi ve ekip atama akışları.',
      en: 'Support & internal request management: ticketing, SLA tracking and team assignment.',
      de: 'Support- & interne Anfrageverwaltung: Ticketing, SLA-Tracking und Teamzuweisung.',
    },
  },
  {
    id: 'bpm', name: 'sureNEO LOS BPM', icon: 'Workflow', group: 'workflow', status: 'beta',
    href: '/sureneo#bpm', color: groupColors.workflow,
    desc: {
      tr: 'İş süreçleri modelleme ve otomasyonu: onay akışları, formlar ve görev orkestrasyonu.',
      en: 'Business process modelling & automation: approval flows, forms and task orchestration.',
      de: 'Geschäftsprozessmodellierung & Automatisierung: Freigabe-Flows, Formulare und Aufgaben.',
    },
  },
]

export function productGroupsForNav(locale: Locale) {
  return groupOrder
    .map((g) => ({
      group: groupLabels[g][locale],
      items: products.filter((p) => p.group === g).map((p) => ({ href: p.href, label: p.name })),
    }))
    .filter((grp) => grp.items.length > 0)
}
