// Real beeNEO team, locations and accreditation — sourced from the company's own
// Google Drive sync scripts and beeneo.biz. Factual data; do not fabricate.
import type { Locale } from './i18n'

export type TeamMember = {
  name: string
  photo?: string
  role: Record<Locale, string>
  bio: Record<Locale, string>
}

export const team: TeamMember[] = [
  {
    name: 'Ayhan Önal',
    photo: '/team/ayhan-onal.jpg',
    role: {
      tr: 'Kurucu / Tech-CEO · Genel Müdür',
      en: 'Founder / Tech-CEO · Managing Director',
      de: 'Gründer / Tech-CEO · Geschäftsführer',
    },
    bio: {
      tr: 'Senior System Architect ve Ar-Ge Yöneticisi. Otomotiv, OEM ve Tier-1 sektörlerinde 20 yılı aşkın kıdemli sistem mimarisi ve yazılım tecrübesi.',
      en: 'Senior System Architect and R&D Director. 20+ years of senior systems-architecture and software experience across the automotive, OEM and Tier-1 sectors.',
      de: 'Senior System Architect und F&E-Leiter. Über 20 Jahre Erfahrung in Systemarchitektur und Software in Automobil-, OEM- und Tier-1-Bereichen.',
    },
  },
  {
    name: 'Ulli Schmehl',
    photo: '/team/ulli-schmehl.jpg',
    role: {
      tr: 'Global Strateji & Mühendislik',
      en: 'Global Strategy & Engineering',
      de: 'Globale Strategie & Engineering',
    },
    bio: {
      tr: 'ZF, Magna, ThyssenKrupp, Brusa ve Linde AG bünyesinde 20 yılı aşkın mekatronik ürün geliştirme, ASIL-D ve süreç yönetimi uzmanlığı.',
      en: '20+ years of mechatronic product development, ASIL-D and process-management expertise at ZF, Magna, ThyssenKrupp, Brusa and Linde AG.',
      de: 'Über 20 Jahre Mechatronik-Produktentwicklung, ASIL-D- und Prozessmanagement-Expertise bei ZF, Magna, ThyssenKrupp, Brusa und Linde AG.',
    },
  },
  {
    name: 'Maksim Rybakov',
    role: {
      tr: 'Teknik Tasarım & Sistem Entegrasyonu',
      en: 'Technical Design & System Integration',
      de: 'Technisches Design & Systemintegration',
    },
    bio: {
      tr: 'Gömülü sistemler, uygulama geliştirme ve sistem entegrasyon süreçleri sorumlusu.',
      en: 'Responsible for embedded systems, application development and system-integration processes.',
      de: 'Verantwortlich für eingebettete Systeme, Anwendungsentwicklung und Systemintegrationsprozesse.',
    },
  },
  {
    name: 'Zümrüt Batur',
    role: {
      tr: 'Dokümantasyon & TGB Sorumlusu',
      en: 'Documentation & Technopark (TGB) Officer',
      de: 'Dokumentation & Technopark-Verantwortliche',
    },
    bio: {
      tr: 'Proje satınalma, proje muhasebesi, kalite dokümantasyonu ve TGB operasyonel süreç yönetimi.',
      en: 'Project procurement, project accounting, quality documentation and operational process management for the Technology Development Zone.',
      de: 'Projektbeschaffung, Projektbuchhaltung, Qualitätsdokumentation und operatives Prozessmanagement für die Technologie-Entwicklungszone.',
    },
  },
  {
    name: 'Hatice B. Önal',
    role: {
      tr: 'Kurucu Ortak / Yönetici',
      en: 'Co-Founder / Manager',
      de: 'Mitgründerin / Managerin',
    },
    bio: {
      tr: 'Finans, operasyon, stratejik büyüme yönetimi ve yazılım/test süreç koordinasyonu.',
      en: 'Finance, operations, strategic-growth management and software/test process coordination.',
      de: 'Finanzen, Betrieb, strategisches Wachstumsmanagement und Software-/Test-Prozesskoordination.',
    },
  },
]

export type OfficeLocation = {
  city: string
  label: Record<Locale, string>
  lines: string[]
}

export const locations: OfficeLocation[] = [
  {
    city: 'İstanbul',
    label: { tr: 'Merkez Ofis', en: 'Headquarters', de: 'Hauptsitz' },
    lines: ['Güzeltepe Mh. Pembegül Sk. No:7/8', '34680 Üsküdar / İstanbul', 'Çengelköy'],
  },
  {
    city: 'İstanbul',
    label: { tr: 'Ar-Ge Merkezi (Bilişim Vadisi)', en: 'R&D Center (Bilişim Vadisi)', de: 'F&E-Zentrum (Bilişim Vadisi)' },
    lines: ['Ahmet Yesevi Mh. Kerem Sokak, No: 9', '41400 Gebze / 34903 • Pendik / İstanbul'],
  },
  {
    city: 'Düsseldorf',
    label: { tr: 'Almanya (AB & UK)', en: 'Germany (EU & UK)', de: 'Deutschland (EU & UK)' },
    lines: ['Kontaktbüro beeNEO Deutschland', 'Kalkumer Str. 127', '40468 Düsseldorf'],
  },
]

export const accreditation = {
  badgeImage: '/teknogirisim-rozeti.png',
  docNo: '2026-1348',
  title: {
    tr: 'T.C. Sanayi ve Teknoloji Bakanlığı Teknogirişim Rozeti',
    en: 'Techno-Entrepreneurship Badge — Republic of Türkiye Ministry of Industry and Technology',
    de: 'Techno-Entrepreneurship-Abzeichen — Ministerium für Industrie und Technologie der Republik Türkei',
  },
  desc: {
    tr: '4691 sayılı Teknoloji Geliştirme Bölgeleri Kanunu kapsamında; Bilişim Vadisi ve Teknopol TGB üzerinden vergi muafiyeti ve %0 KDV avantajlarıyla faaliyet gösteren tescilli bir teknogirişim.',
    en: 'A registered techno-startup operating under Law No. 4691 on Technology Development Zones, with tax exemptions and 0% VAT advantages via Bilişim Vadisi and Teknopol Technopark.',
    de: 'Ein registriertes Techno-Startup, das nach dem Gesetz Nr. 4691 über Technologie-Entwicklungszonen mit Steuerbefreiungen und 0 % MwSt.-Vorteilen über Bilişim Vadisi und Teknopol Technopark tätig ist.',
  },
}

// beeNEO's own references / credentials — factual, not fabricated client logos.
export const beeneoReferences: Record<Locale, { title: string; desc: string }[]> = {
  tr: [
    { title: 'Lvkon E-Mobility', desc: 'Dünya genelinde 160.000+ araçta sahada olan Suzhou Lvkon ile ticari araç elektrifikasyonu teknoloji ortaklığı.' },
    { title: 'Ekip OEM & Tier-1 Mirası', desc: 'ZF, Magna, ThyssenKrupp, Brusa ve Linde AG gibi kuruluşlarda edinilmiş 20+ yıllık mühendislik deneyimi.' },
    { title: 'TÜBİTAK & Teknopark Ekosistemi', desc: 'Bilişim Vadisi ve Teknopol TGB bünyesinde tescilli Ar-Ge; 2026-1348 numaralı Teknogirişim Rozeti.' },
  ],
  en: [
    { title: 'Lvkon E-Mobility', desc: 'Technology partnership in commercial-vehicle electrification with Suzhou Lvkon — 160,000+ vehicles in the field worldwide.' },
    { title: 'OEM & Tier-1 team heritage', desc: '20+ years of engineering experience gained at ZF, Magna, ThyssenKrupp, Brusa and Linde AG.' },
    { title: 'TÜBİTAK & Technopark ecosystem', desc: 'Registered R&D within Bilişim Vadisi and Teknopol Technopark; Techno-Entrepreneurship Badge No. 2026-1348.' },
  ],
  de: [
    { title: 'Lvkon E-Mobility', desc: 'Technologiepartnerschaft in der Nutzfahrzeug-Elektrifizierung mit Suzhou Lvkon — weltweit 160.000+ Fahrzeuge im Einsatz.' },
    { title: 'OEM- & Tier-1-Erbe des Teams', desc: 'Über 20 Jahre Engineering-Erfahrung bei ZF, Magna, ThyssenKrupp, Brusa und Linde AG.' },
    { title: 'TÜBİTAK- & Technopark-Ökosystem', desc: 'Registrierte F&E in Bilişim Vadisi und Teknopol Technopark; Techno-Entrepreneurship-Abzeichen Nr. 2026-1348.' },
  ],
}
