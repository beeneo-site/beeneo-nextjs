export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const tenant = await prisma.tenant.findFirst()
  const tid = tenant?.id ?? ''
  const projects = await prisma.project.findMany({ where: { tenantId: tid }, orderBy: { createdAt: 'desc' } })
  const audits = await prisma.auditTrail.findMany({ where: { tenantId: tid }, orderBy: { createdAt: 'desc' }, take: 20 })
  const sProjects = projects.map((p: any) => ({ ...p, budget: p.budget ? Number(p.budget) : null, startDate: p.startDate?.toISOString() ?? null, endDate: p.endDate?.toISOString() ?? null, createdAt: p.createdAt.toISOString(), updatedAt: p.updatedAt.toISOString() }))
  const sAudits = audits.map((a: any) => ({ ...a, createdAt: a.createdAt.toISOString() }))
  return NextResponse.json({ projects: sProjects, audits: sAudits })
}
