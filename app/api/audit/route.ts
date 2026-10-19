export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const tenant = await prisma.tenant.findFirst()
  const exceptions = await prisma.exceptionLog.findMany({ where: { tenantId: tenant?.id ?? '' }, orderBy: { createdAt: 'desc' } })
  return NextResponse.json({ exceptions: exceptions.map((e: any) => ({ ...e, createdAt: e.createdAt.toISOString(), reviewedAt: e.reviewedAt?.toISOString() ?? null })) })
}
