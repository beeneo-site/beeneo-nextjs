'use client'
import { useState, useEffect } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Briefcase, Shield, Zap } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

export default function EngineeringPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [audits, setAudits] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/engineering').then(r => r.json()).then(d => { setProjects(d?.projects ?? []); setAudits(d?.audits ?? []); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  if (loading) return <div className="space-y-4 p-4"><Skeleton className="h-12 w-full" /><Skeleton className="h-64 w-full" /></div>

  const lvkon = (projects ?? []).find((p: any) => p?.code?.includes('LVKON'))
  const roadmap = [
    { phase: 'Phase 1: Architecture', status: 'COMPLETED', dates: 'Jan-Mar 2026', desc: 'HV powertrain architecture, ASPICE SWE.1' },
    { phase: 'Phase 2: Detailed Design', status: 'ACTIVE', dates: 'Apr-Jul 2026', desc: 'BMS, inverter, motor controller detailed design' },
    { phase: 'Phase 3: Integration', status: 'PLANNED', dates: 'Aug-Nov 2026', desc: 'System integration & validation' },
    { phase: 'Phase 4: Verification', status: 'PLANNED', dates: 'Dec 2026-Feb 2027', desc: 'Audit trail & vehicle-level testing' },
  ]

  return (
    <div className="space-y-6">
      <PageHeader title="Engineering & Consulting Services" description="Project management, Lvkon EV/HV powertrain partnership, and ISO/ASPICE audit trails." />
      <Tabs defaultValue="projects">
        <TabsList><TabsTrigger value="projects">Projects</TabsTrigger><TabsTrigger value="lvkon">Lvkon Roadmap</TabsTrigger><TabsTrigger value="audit">Audit Trail</TabsTrigger></TabsList>
        <TabsContent value="projects">
          <Card><CardContent className="pt-4">
            <Table><TableHeader><TableRow><TableHead>Code</TableHead><TableHead>Name</TableHead><TableHead>Client</TableHead><TableHead>Status</TableHead><TableHead>ISO Standards</TableHead></TableRow></TableHeader>
              <TableBody>{(projects ?? []).map((p: any) => (<TableRow key={p?.id}><TableCell className="font-mono text-xs">{p?.code}</TableCell><TableCell>{p?.name}</TableCell><TableCell>{p?.client ?? '-'}</TableCell><TableCell><Badge variant={p?.status === 'ACTIVE' ? 'default' : p?.status === 'COMPLETED' ? 'secondary' : 'outline'}>{p?.status}</Badge></TableCell><TableCell className="space-x-1">{(p?.isoStandards ?? []).map((s: string) => <Badge key={s} variant="outline" className="text-[10px]">{s}</Badge>)}</TableCell></TableRow>))}
              {(projects ?? []).length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">No projects.</TableCell></TableRow>}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="lvkon">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Zap className="h-4 w-4" />Lvkon Commercial Vehicle Electrification Roadmap</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">{roadmap.map((r, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${r.status === 'COMPLETED' ? 'bg-green-500' : r.status === 'ACTIVE' ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30'}`} />
                  <div className="flex-1"><p className="font-medium">{r.phase}</p><p className="text-sm text-muted-foreground">{r.desc}</p><p className="text-xs text-muted-foreground mt-1">{r.dates}</p></div>
                  <Badge variant={r.status === 'COMPLETED' ? 'default' : r.status === 'ACTIVE' ? 'secondary' : 'outline'}>{r.status}</Badge>
                </div>
              ))}</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audit">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Shield className="h-4 w-4" />ISO/ASPICE Audit Trail</CardTitle></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead>Timestamp</TableHead><TableHead>Entity</TableHead><TableHead>Action</TableHead><TableHead>ISO Ref</TableHead><TableHead>Details</TableHead></TableRow></TableHeader>
                <TableBody>{(audits ?? []).map((a: any) => (<TableRow key={a?.id}><TableCell className="text-xs font-mono">{a?.createdAt ? new Date(a.createdAt).toLocaleDateString('en-US', { timeZone: 'UTC' }) : '-'}</TableCell><TableCell>{a?.entityType}</TableCell><TableCell><Badge variant="outline">{a?.action}</Badge></TableCell><TableCell className="font-mono text-xs">{a?.isoRef ?? '-'}</TableCell><TableCell className="text-sm">{a?.details ?? '-'}</TableCell></TableRow>))}
                {(audits ?? []).length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">No audit entries.</TableCell></TableRow>}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
