import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { BankingClient } from './_components/client'
export const dynamic = 'force-dynamic'

export default async function BankingPage() {
  const session = await auth()
  if (!session?.user) redirect('/login')
  const tenant = await prisma.tenant.findFirst()
  const tid = tenant?.id ?? ''
  const txns = await prisma.bankTransaction.findMany({ where: { tenantId: tid }, orderBy: { date: 'desc' }, take: 20 })
  const matches = await prisma.reconciliationMatch.findMany({ where: { tenantId: tid }, include: { invoice: { select: { invoiceNumber: true, totalAmount: true } }, transaction: { select: { description: true, amount: true } } }, take: 20 })
  const sTxns = txns.map((t: any) => ({ ...t, amount: Number(t.amount), balance: t.balance ? Number(t.balance) : null, date: t.date.toISOString(), createdAt: t.createdAt.toISOString() }))
  const sMatches = matches.map((m: any) => ({ ...m, matchScore: m.matchScore, invoice: { invoiceNumber: m.invoice?.invoiceNumber, totalAmount: Number(m.invoice?.totalAmount ?? 0) }, transaction: { description: m.transaction?.description, amount: Number(m.transaction?.amount ?? 0) }, createdAt: m.createdAt.toISOString(), settledAt: m.settledAt?.toISOString() ?? null }))
  return <BankingClient transactions={sTxns} matches={sMatches} />
}
