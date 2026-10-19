'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { Hexagon, LayoutDashboard, Receipt, Landmark, Users, Briefcase, UserPlus, Box, FileText, AlertTriangle, BookOpen, Shield, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/accounting', label: 'Accounting & GİB', icon: Receipt },
  { href: '/dashboard/banking', label: 'Banking & Recon', icon: Landmark },
  { href: '/dashboard/payroll', label: 'TGB Payroll', icon: Users },
  { href: '/dashboard/engineering', label: 'Engineering & Lvkon', icon: Briefcase },
  { href: '/dashboard/hr', label: 'HR & Talent', icon: UserPlus },
  { href: '/dashboard/erp', label: 'Mini-ERP/PLM', icon: Box },
  { href: '/dashboard/dossier', label: 'Dossier Builder', icon: FileText },
  { href: '/dashboard/audit', label: 'SMMM Audit', icon: AlertTriangle },
  { href: '/dashboard/community', label: 'Community Hub', icon: BookOpen },
  { href: '/dashboard/compliance', label: 'KVKK Compliance', icon: Shield },
  { href: '/dashboard/architecture', label: 'Architecture', icon: Box },
  { href: '/dashboard/schemas', label: 'DB Schemas', icon: FileText },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="flex flex-col h-full">
      <Link href="/dashboard" className="flex items-center gap-2 px-2 py-4 mb-2">
        <Hexagon className="h-7 w-7 text-primary" />
        <div>
          <p className="font-display text-sm font-bold tracking-tight">sureNEO</p>
          <p className="text-[10px] text-muted-foreground">LOS Finance · LEAF + LEAI</p>
        </div>
      </Link>
      <nav className="flex-1 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href}
              className={cn('flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors',
                active ? 'bg-primary/10 text-primary font-medium' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}>
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto pt-4 border-t">
        <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground" onClick={() => signOut({ redirectTo: '/login' })}>
          <LogOut className="h-4 w-4" /> Sign Out
        </Button>
      </div>
    </div>
  )
}
