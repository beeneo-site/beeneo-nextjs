'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AuthLayout } from '@/components/layouts/auth-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Hexagon } from 'lucide-react'

export function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, fullName }) })
      const data = await res.json()
      if (!res.ok) { setError(data?.error ?? 'Signup failed'); setLoading(false); return }
      const signInRes = await signIn('credentials', { email, password, redirect: false })
      if (signInRes?.error) { setError('Account created but login failed'); setLoading(false); return }
      router.push('/dashboard')
    } catch { setError('Signup failed'); setLoading(false) }
  }

  return (
    <AuthLayout title="Create Account" description="Join sureNEO LOS Finance">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Hexagon className="h-8 w-8 text-primary" />
        <span className="font-display text-lg font-bold tracking-tight">sureNEO</span>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-destructive text-center">{error}</p>}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" value={fullName} onChange={(e: any) => setFullName(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} required minLength={6} />
        </div>
        <Button type="submit" className="w-full" loading={loading}>Create Account</Button>
      </form>
      <p className="text-sm text-center mt-4 text-muted-foreground">Already registered? <Link href="/login" className="text-primary underline">Sign in</Link></p>
    </AuthLayout>
  )
}
