import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { AccountingClient } from './_components/client'

export const dynamic = 'force-dynamic'

export default async function AccountingPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')
  const tenant = await prisma.tenant.findFirst()
  const invoices = await prisma.invoice.findMany({ where: { tenantId: tenant?.id ?? '' }, orderBy: { issueDate: 'desc' }, take: 20, include: { ettnRecord: true } })
  const postings = await prisma.gLPosting.findMany({ where: { tenantId: tenant?.id ?? '' }, orderBy: { date: 'desc' }, take: 30, include: { account: true } })
  const serialized = invoices.map((i: any) => ({ ...i, subtotal: Number(i.subtotal), vatAmount: Number(i.vatAmount), totalAmount: Number(i.totalAmount), issueDate: i.issueDate.toISOString(), dueDate: i.dueDate?.toISOString() ?? null, createdAt: i.createdAt.toISOString(), updatedAt: i.updatedAt.toISOString(), ettnRecord: i.ettnRecord ? { ...i.ettnRecord, verifiedAt: i.ettnRecord.verifiedAt?.toISOString() ?? null, createdAt: i.ettnRecord.createdAt.toISOString() } : null }))
  const serializedPostings = postings.map((p: any) => ({ ...p, debit: Number(p.debit), credit: Number(p.credit), date: p.date.toISOString(), createdAt: p.createdAt.toISOString(), account: p.account ? { code: p.account.code, name: p.account.name } : null }))
  return <AccountingClient invoices={serialized} postings={serializedPostings} />
}
