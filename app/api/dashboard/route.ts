export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const tenant = await prisma.tenant.findFirst()
    const tenantId = tenant?.id ?? ''

    const invoiceCount = await prisma.invoice.count({ where: { tenantId } })
    const empCount = await prisma.employee.count({ where: { tenantId } })
    const openEcos = await prisma.eCO.count({ where: { tenantId, status: { in: ['DRAFT', 'IN_REVIEW'] } } })
    const invoices = await prisma.invoice.findMany({ where: { tenantId }, select: { totalAmount: true } })
    const totalRev = invoices.reduce((s: number, i: any) => s + Number(i.totalAmount ?? 0), 0)

    const kpis = [
      { metric: 'revenue', label: 'Revenue YTD', value: totalRev, format: 'currency_compact', delta: 18, delta_label: 'vs prior year', spark: [180, 220, 195, 280, 310, 350, 420, 380, 290, 240], good_when: 'up' },
      { metric: 'invoices', label: 'Invoices Processed', value: invoiceCount, format: 'integer', delta: 12, delta_label: 'this month', spark: [3, 5, 4, 6, 5, 7, 4, 6, 5, 8], good_when: 'up' },
      { metric: 'employees', label: 'Active Employees', value: empCount, format: 'integer', delta: 0, delta_label: 'no change', spark: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], good_when: 'up' },
      { metric: 'open_ecos', label: 'Open ECOs', value: openEcos, format: 'integer', delta: -2, delta_label: 'resolved this week', spark: [4, 3, 5, 4, 3, 2, 3, 2, 3, openEcos], good_when: 'down' },
    ]

    const revenue_trend = [
      { month: '2026-01', revenue: 180000 }, { month: '2026-02', revenue: 220000 }, { month: '2026-03', revenue: 195000 },
      { month: '2026-04', revenue: 280000 }, { month: '2026-05', revenue: 310000 }, { month: '2026-06', revenue: 350000 },
      { month: '2026-07', revenue: 420000 }, { month: '2026-08', revenue: 380000 }, { month: '2026-09', revenue: 290000 },
      { month: '2026-10', revenue: 240000 },
    ]

    const projects = await prisma.project.groupBy({ by: ['status'], where: { tenantId }, _count: true })
    const project_status = projects.map((p: any) => ({ status: p.status ?? 'UNKNOWN', count: p._count ?? 0 }))

    const exceptions = [
      { severity: 'healthy', count: 45, pct: 0.92 },
      { severity: 'watch', count: 3, pct: 0.06 },
      { severity: 'at-risk', count: 1, pct: 0.02 },
    ]

    const payroll_cost = [
      { period: 'Jul 2026', amount: 125000 }, { period: 'Aug 2026', amount: 128000 },
      { period: 'Sep 2026', amount: 126000 }, { period: 'Oct 2026', amount: 130000 },
    ]

    return NextResponse.json({
      data_as_of: new Date().toISOString(),
      data: { kpis, revenue_trend, project_status, exceptions, payroll_cost },
    })
  } catch (e: any) {
    console.error('Dashboard API error:', e)
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 })
  }
}
