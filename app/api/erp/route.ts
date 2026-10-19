export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { prisma } from '@/lib/db'

export async function GET() {
  const session = await auth()
  if (!session?.user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const tenant = await prisma.tenant.findFirst()
  const tid = tenant?.id ?? ''
  const bom = await prisma.bOMItem.findMany({ where: { tenantId: tid } })
  const ecos = await prisma.eCO.findMany({ where: { tenantId: tid }, orderBy: { createdAt: 'desc' } })
  const stock = await prisma.stockItem.findMany({ where: { tenantId: tid } })
  return NextResponse.json({
    bom: bom.map((b: any) => ({ ...b, unitCost: b.unitCost ? Number(b.unitCost) : null, createdAt: b.createdAt.toISOString(), updatedAt: b.updatedAt.toISOString() })),
    ecos: ecos.map((e: any) => ({ ...e, createdAt: e.createdAt.toISOString(), updatedAt: e.updatedAt.toISOString() })),
    stock: stock.map((s: any) => ({ ...s, lastScanned: s.lastScanned?.toISOString() ?? null, createdAt: s.createdAt.toISOString(), updatedAt: s.updatedAt.toISOString() })),
  })
}
