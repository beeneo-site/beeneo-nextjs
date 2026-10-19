'use client'
import Image from 'next/image'
import { useI18n } from '@/lib/i18n-context'
import { ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    title: 'A Process Maturity Journey: From Ad Hoc to Institutionalized Excellence',
    kicker: 'Process Coaching',
    desc: 'How organisations evolve from reactive, ad-hoc practices to institutionalised process excellence — a practical roadmap.',
    date: '3 October 2026',
    image: '/blog/a-process-maturity-journey-from-ad-hoc-to-institutionalized-excellence.jpg',
    href: 'https://beeneo.biz/blog/a-process-maturity-journey-from-ad-hoc-to-institutionalized-excellence.html',
  },
  {
    title: 'From Audit Prep to Permanent Readiness: A Practical Transition Path',
    kicker: 'Process Excellence',
    desc: 'Why audit panic is an architecture problem, and how a pilot value stream moves an organisation to permanent audit readiness.',
    date: '23 August 2026',
    image: '/blog/audit-prep-permanent-readiness.jpg',
    href: 'https://beeneo.biz/blog/audit-prep-permanent-readiness.html',
  },
  {
    title: 'The Coaching Mindset: Helping Teams Own Their Processes',
    kicker: 'Process Coaching',
    desc: 'Why process ownership is transferred through decisions and evidence routines rather than training — and how to tell whether a team is genuinely self-reliant.',
    date: '2 October 2026',
    image: '/blog/coaching-mindset-team-process-ownership.jpg',
    href: 'https://beeneo.biz/blog/coaching-mindset-team-process-ownership.html',
  },
  {
    title: 'Configuration Management as a Radar for Complex Change',
    kicker: 'Systems Engineering',
    desc: 'Configuration management gives high-integrity engineering organisations visibility into the impact of every change before it becomes a failure.',
    date: '1 September 2026',
    image: '/blog/configuration-management-radar-complex-change.jpg',
    href: 'https://beeneo.biz/blog/configuration-management-radar-complex-change.html',
  },
  {
    title: 'Data Integrity in MedTech: Why Your Engineering Data Is a Safety Artifact',
    kicker: 'MedTech',
    desc: 'Engineering data in MedTech is not documentation — it is a safety artifact whose integrity determines whether a product can be trusted.',
    date: '3 October 2026',
    image: '/blog/data-integrity-in-medtech-why-your-engineering-data-is-a-safety-artifact.jpg',
    href: 'https://beeneo.biz/blog/data-integrity-in-medtech-why-your-engineering-data-is-a-safety-artifact.html',
  },
  {
    title: 'Digital Twin of the Organization: Process Intelligence at Scale',
    kicker: 'Enterprise Architecture',
    desc: 'A digital twin of the organisation maps how work actually flows — revealing bottlenecks, compliance gaps, and improvement opportunities in real time.',
    date: '15 September 2026',
    image: '/blog/digital-twin-of-the-organization.jpg',
    href: 'https://beeneo.biz/blog/digital-twin-of-the-organization.html',
  },
  {
    title: 'Lean Product Development for High-Integrity Systems',
    kicker: 'Lean Engineering',
    desc: 'Lean product development in regulated industries means eliminating waste without eliminating evidence — delivering faster while remaining audit-ready.',
    date: '20 September 2026',
    image: '/blog/lean-product-development-high-integrity.jpg',
    href: 'https://beeneo.biz/blog/lean-product-development-high-integrity.html',
  },
  {
    title: 'The Nine-Step Coaching Map: From Analysis to Improvement',
    kicker: 'Process Coaching',
    desc: 'A structured nine-step coaching approach that moves engineering teams from analysis through evidence-based process improvement.',
    date: '25 September 2026',
    image: '/blog/nine-step-coaching-map-analysis-improvement.jpg',
    href: 'https://www.slidekit.com/wp-content/uploads/2025/01/Modern-Green-Toned-Layout-9-Step-Circular-Process-PowerPoint-Template.jpg',
  },
  {
    title: 'Skills Gap Analysis: Engineering Competence Under Control',
    kicker: 'Competence Management',
    desc: 'In high-integrity engineering, competence management is not a soft HR topic but a technical requirement.',
    date: '10 September 2026',
    image: '/blog/skills-gap-analysis-engineering-competence-control.jpg',
    href: 'https://beeneo.biz/blog/competence-management-high-integrity-systems.html',
  },
  {
    title: 'Process Architecture for Regulated Industries: Designing for Compliance and Flow',
    kicker: 'Enterprise Architecture',
    desc: 'Compliance treated as a design requirement integrated into the engineering workflow produces an audit-ready state at every moment.',
    date: '5 October 2026',
    image: '/blog/process-architecture-for-regulated-industries-designing-for-compliance-and-flow.jpg',
    href: 'https://beeneo.biz/blog/compliance-by-design-lean-ea.html',
  },
  {
    title: 'Standardized Processes for Distributed Teams',
    kicker: 'Process Excellence',
    desc: 'How to maintain process consistency and evidence quality when engineering teams are distributed across locations and time zones.',
    date: '28 August 2026',
    image: '/blog/standardized-processes-distributed-teams.jpg',
    href: 'https://beeneo.biz/blog/standardized-processes-distributed-teams.html',
  },
  {
    title: 'Zero-Waste Compliance: When Audit Evidence Is a Byproduct',
    kicker: 'Lean Compliance',
    desc: 'The most efficient compliance architecture is one where evidence is produced as a natural byproduct of the engineering work itself.',
    date: '18 September 2026',
    image: '/blog/zero-waste-compliance-audit-evidence.jpg',
    href: 'https://beeneo.biz/blog/zero-waste-compliance-audit-evidence.html',
  },
]

export default function BlogPage() {
  const { t } = useI18n()
  return (
    <>
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <img src="/logo-beeneo.svg" alt="beeNEO" className="h-8 dark:hidden" />
            <img src="/logo-beeneo-white.svg" alt="beeNEO" className="h-8 hidden dark:block" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">/ Blog</span>
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight mb-4">Intelligent Lean Management.<br/>Powered by AI.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">Neutral, education-first articles on process excellence, ISO 29110 / ISO 15288 and compliant agile engineering — for aerospace, MedTech, energy, defence and industrial automation.</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <a key={i} href={post.href} target="_blank" rel="noopener noreferrer"
                className="group rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="relative aspect-video bg-muted">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{post.kicker}</p>
                  <h3 className="font-display font-semibold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
