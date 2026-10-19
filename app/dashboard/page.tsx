'use client'
import { AbacusDashboard, useDashboardData } from '@/components/viz/abacus-dashboard'
import { Skeleton } from '@/components/ui/skeleton'

const manifest = {
  title: 'beeNEO TGB R&D — ₺2.4M revenue YTD with 5 active projects and full TGB compliance.',
  eyebrow: 'beeNEO Engineering · 2026 YTD overview',
  subtitle: 'KPIs for autonomous accounting, payroll, engineering projects, and compliance across all modules.',
  theme: 'auto' as const,
  sources: [{ id: 'db', label: 'PostgreSQL · sureNEO LOS' }],
  tiles: [
    { id: 'kpi_rev', type: 'kpi', span: 3, data: 'kpis', where: { metric: 'revenue' }, accent: 'accent' },
    { id: 'kpi_inv', type: 'kpi', span: 3, data: 'kpis', where: { metric: 'invoices' }, accent: 'ink' },
    { id: 'kpi_emp', type: 'kpi', span: 3, data: 'kpis', where: { metric: 'employees' }, accent: 'accent-2' },
    { id: 'kpi_eco', type: 'kpi', span: 3, data: 'kpis', where: { metric: 'open_ecos' }, accent: 'accent-3' },
    {
      id: 'rev_trend', type: 'area', span: 8,
      title: 'Monthly Revenue (TRY)', subtitle: '2026 Jan–Oct',
      insight: 'Revenue peaked in July at ₺420K driven by the Lvkon electrification milestone.',
      data: 'revenue_trend', x: 'month', series: [{ field: 'revenue', label: 'Revenue' }],
      source: 'db',
    },
    {
      id: 'proj_status', type: 'bar', span: 4,
      title: 'Projects by Status', subtitle: 'All active projects',
      insight: '3 of 5 projects are currently active, with 1 completed this quarter.',
      data: 'project_status', category: 'status', value: 'count', sort: 'desc',
      source: 'db',
    },
    {
      id: 'audit_health', type: 'table', span: 6,
      title: 'SMMM Exception Summary', subtitle: 'Audit confidence levels',
      insight: '92% of postings auto-verified; 3 items flagged for SMMM review.',
      data: 'exceptions', columns: [
        { field: 'severity', label: 'Level', format: 'status' },
        { field: 'count', label: 'Count' },
        { field: 'pct', label: '% of Total', format: 'percent' },
      ],
      source: 'db',
    },
    {
      id: 'payroll_cost', type: 'bar', span: 6,
      title: 'Monthly Payroll Cost', subtitle: 'Gross vs Net after TGB exemptions',
      insight: 'TGB Law 4691 exemptions save ₺18K monthly on average across 5 employees.',
      data: 'payroll_cost', category: 'period', value: 'amount', sort: 'desc',
      source: 'db',
    },
  ],
}

export default function DashboardPage() {
  const { data, dataAsOf, error } = useDashboardData('/api/dashboard', 60000)
  if (error) return <div className="p-8 text-destructive">Failed to load dashboard data.</div>
  if (!data) return <div className="p-8 space-y-4"><Skeleton className="h-24 w-full" /><Skeleton className="h-64 w-full" /><Skeleton className="h-48 w-full" /></div>
  return <AbacusDashboard manifest={manifest} data={data} dataAsOf={dataAsOf} className="min-h-screen" />
}
