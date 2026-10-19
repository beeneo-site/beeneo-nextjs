'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AuthLayout } from '@/components/layouts/auth-layout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { Hexagon, Cpu } from 'lucide-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await signIn('credentials', { email, password, redirect: false })
    if (res?.error) { setError('Invalid credentials'); setLoading(false) }
    else router.push('/dashboard')
  }

  return (
    <AuthLayout title="sureNEO LOS Finance" description="Autonomous AI CFO for Engineering SMEs — Sign in to continue">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Hexagon className="h-8 w-8 text-primary" />
        <span className="font-display text-lg font-bold tracking-tight">beeNEO</span>
        <Cpu className="h-4 w-4 text-muted-foreground" />
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-destructive text-center">{error}</p>}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} required placeholder="you@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e: any) => setPassword(e.target.value)} required />
        </div>
        <Button type="submit" className="w-full" loading={loading}>Sign In</Button>
      </form>
      <p className="text-sm text-center mt-4 text-muted-foreground">No account? <Link href="/signup" className="text-primary underline">Create one</Link></p>
    </AuthLayout>
  )
}
