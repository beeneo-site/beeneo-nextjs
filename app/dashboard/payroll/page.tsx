import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { PayrollClient } from './_components/client'
export const dynamic = 'force-dynamic'

export default async function PayrollPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')
  const tenant = await prisma.tenant.findFirst()
  const tid = tenant?.id ?? ''
  const employees = await prisma.employee.findMany({ where: { tenantId: tid }, include: { payslips: { orderBy: { period: 'desc' }, take: 3 }, timeEntries: { orderBy: { date: 'desc' }, take: 5 } } })
  const serialized = employees.map((e: any) => ({ ...e, grossSalary: Number(e.grossSalary), netSalary: e.netSalary ? Number(e.netSalary) : null, startDate: e.startDate.toISOString(), endDate: e.endDate?.toISOString() ?? null, createdAt: e.createdAt.toISOString(), updatedAt: e.updatedAt.toISOString(), payslips: (e.payslips ?? []).map((p: any) => ({ ...p, grossAmount: Number(p.grossAmount), incomeTax: Number(p.incomeTax), sgkEmployee: Number(p.sgkEmployee), sgkEmployer: Number(p.sgkEmployer), stampTax: Number(p.stampTax), tgbExemption: Number(p.tgbExemption), netAmount: Number(p.netAmount), createdAt: p.createdAt.toISOString() })), timeEntries: (e.timeEntries ?? []).map((t: any) => ({ ...t, date: t.date.toISOString(), createdAt: t.createdAt.toISOString() })) }))
  return <PayrollClient employees={serialized} />
}
