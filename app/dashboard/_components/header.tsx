'use client'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Cpu } from 'lucide-react'

export function DashboardHeader({ user }: { user: any }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Cpu className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium">LEAF + LEAI Engine</span>
        <Badge variant="outline" className="text-[10px]">v1.0 MVP</Badge>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground hidden sm:inline">{user?.name ?? user?.email ?? ''}</span>
        <ThemeToggle />
      </div>
    </div>
  )
}
