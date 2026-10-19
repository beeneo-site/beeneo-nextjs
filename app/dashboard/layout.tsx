import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { AppShell } from '@/components/layouts/app-shell'
import { Sidebar } from '@/components/layout/sidebar'
import { DashboardHeader } from './_components/header'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/login')
  return (
    <AppShell sidebar={<Sidebar />} header={<DashboardHeader user={session.user} />}>
      {children}
    </AppShell>
  )
}
