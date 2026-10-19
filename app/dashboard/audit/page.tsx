'use client'
import { useState, useEffect } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { AlertTriangle, CheckCircle, XCircle, Filter } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'

export default function AuditPage() {
  const [exceptions, setExceptions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('ALL')

  useEffect(() => { fetch('/api/audit').then(r => r.json()).then(d => { setExceptions(d?.exceptions ?? []); setLoading(false) }).catch(() => setLoading(false)) }, [])

  const filtered = filter === 'ALL' ? exceptions : (exceptions ?? []).filter((e: any) => e?.severity === filter)
  const counts = { GREEN: (exceptions ?? []).filter((e: any) => e?.severity === 'GREEN').length, YELLOW: (exceptions ?? []).filter((e: any) => e?.severity === 'YELLOW').length, RED: (exceptions ?? []).filter((e: any) => e?.severity === 'RED').length }

  const approveItem = (id: string) => { setExceptions(prev => (prev ?? []).map((e: any) => e?.id === id ? { ...e, status: 'APPROVED', severity: 'GREEN' } : e)); toast.success('Item approved by SMMM') }

  if (loading) return <div className="p-4 space-y-4"><Skeleton className="h-12 w-full" /><Skeleton className="h-64 w-full" /></div>

  return (
    <div className="space-y-6">
      <PageHeader title="SMMM & Auditor Exception Dashboard" description="Traffic-light audit dashboard: Green (auto-posted), Yellow (SMMM review needed), Red (unverified/fraud alert)." />
      <div className="grid grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:ring-2 ring-green-500/50" onClick={() => setFilter('GREEN')}><CardContent className="pt-6 text-center"><div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-2"><CheckCircle className="h-6 w-6 text-green-500" /></div><p className="text-3xl font-bold">{counts.GREEN}</p><p className="text-xs text-muted-foreground">Auto-Verified (&gt;95% confidence)</p></CardContent></Card>
        <Card className="cursor-pointer hover:ring-2 ring-yellow-500/50" onClick={() => setFilter('YELLOW')}><CardContent className="pt-6 text-center"><div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/10 mb-2"><AlertTriangle className="h-6 w-6 text-yellow-500" /></div><p className="text-3xl font-bold">{counts.YELLOW}</p><p className="text-xs text-muted-foreground">Needs SMMM Review</p></CardContent></Card>
        <Card className="cursor-pointer hover:ring-2 ring-red-500/50" onClick={() => setFilter('RED')}><CardContent className="pt-6 text-center"><div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mb-2"><XCircle className="h-6 w-6 text-red-500" /></div><p className="text-3xl font-bold">{counts.RED}</p><p className="text-xs text-muted-foreground">Unverified / Fraud Alert</p></CardContent></Card>
      </div>
      <Card><CardHeader><CardTitle className="text-base flex items-center justify-between"><span className="flex items-center gap-2"><Filter className="h-4 w-4" />Exception Log {filter !== 'ALL' && `(${filter})`}</span>{filter !== 'ALL' && <Button variant="ghost" size="sm" onClick={() => setFilter('ALL')}>Show All</Button>}</CardTitle></CardHeader>
        <CardContent>
          <Table><TableHeader><TableRow><TableHead>Severity</TableHead><TableHead>Type</TableHead><TableHead>Description</TableHead><TableHead>Confidence</TableHead><TableHead>Status</TableHead><TableHead>Action</TableHead></TableRow></TableHeader>
            <TableBody>{(filtered ?? []).map((e: any) => (<TableRow key={e?.id}><TableCell><Badge className={e?.severity === 'GREEN' ? 'bg-green-500/10 text-green-600' : e?.severity === 'YELLOW' ? 'bg-yellow-500/10 text-yellow-600' : 'bg-red-500/10 text-red-600'}>{e?.severity}</Badge></TableCell><TableCell>{e?.type}</TableCell><TableCell className="text-sm">{e?.description}</TableCell><TableCell className="font-mono text-xs">{((e?.confidence ?? 0) * 100).toFixed(0)}%</TableCell><TableCell><Badge variant={e?.status === 'APPROVED' ? 'default' : 'outline'}>{e?.status}</Badge></TableCell><TableCell>{e?.severity === 'YELLOW' && e?.status !== 'APPROVED' && <Button size="sm" variant="outline" onClick={() => approveItem(e?.id)}>Approve</Button>}</TableCell></TableRow>))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
