export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { email, password, fullName } = await req.json()
    if (!email || !password) return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    const hashed = await bcrypt.hash(password, 12)
    const tenant = await prisma.tenant.findFirst()
    const user = await prisma.user.create({
      data: { email, password: hashed, name: fullName ?? email.split('@')[0], role: 'user', tenantId: tenant?.id ?? null },
    })
    return NextResponse.json({ id: user.id, email: user.email })
  } catch (e: any) {
    console.error('Signup error:', e)
    return NextResponse.json({ error: 'Signup failed' }, { status: 500 })
  }
}
