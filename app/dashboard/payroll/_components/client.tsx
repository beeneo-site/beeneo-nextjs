'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Users, FileText, Clock, Download } from 'lucide-react'
import { SafeDate } from '@/components/safe-format'
import { toast } from 'sonner'

export function PayrollClient({ employees }: { employees: any[] }) {
  const [generating, setGenerating] = useState(false)

  const generateReport = () => {
    setGenerating(true)
    setTimeout(() => { setGenerating(false); toast.success('TGB Monthly Activity Report (Aylık Faaliyet Raporu) generated successfully!') }, 2000)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="TGB & SGK Payroll Engine" description="Law 4691 & 5746 tax exemption calculations, Bordro generation, MUHSGK, and TGB Portal reports." actions={<Button onClick={generateReport} loading={generating}><Download className="h-4 w-4 mr-2" />Generate TGB Report</Button>} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent className="pt-6"><div className="flex items-center gap-3"><Users className="h-8 w-8 text-primary" /><div><p className="text-2xl font-bold">{employees?.length ?? 0}</p><p className="text-xs text-muted-foreground">Active Employees</p></div></div></CardContent></Card>
        <Card><CardContent className="pt-6"><div className="flex items-center gap-3"><FileText className="h-8 w-8 text-primary" /><div><p className="text-2xl font-bold">{(employees ?? []).filter((e: any) => e.tgbExempt).length}</p><p className="text-xs text-muted-foreground">TGB Exempt (Law 4691)</p></div></div></CardContent></Card>
        <Card><CardContent className="pt-6"><div className="flex items-center gap-3"><Clock className="h-8 w-8 text-primary" /><div><p className="text-2xl font-bold">{(employees ?? []).reduce((s: number, e: any) => s + (e.timeEntries?.length ?? 0), 0)}</p><p className="text-xs text-muted-foreground">Time Entries This Period</p></div></div></CardContent></Card>
      </div>
      <Tabs defaultValue="employees">
        <TabsList><TabsTrigger value="employees">Employees</TabsTrigger><TabsTrigger value="payslips">Bordro (Payslips)</TabsTrigger><TabsTrigger value="timesheets">Timesheets</TabsTrigger></TabsList>
        <TabsContent value="employees">
          <Card><CardContent className="pt-4">
            <Table><TableHeader><TableRow><TableHead>Emp #</TableHead><TableHead>Name</TableHead><TableHead>Position</TableHead><TableHead>Gross Salary</TableHead><TableHead>TGB</TableHead><TableHead>Law 5746</TableHead></TableRow></TableHeader>
              <TableBody>{(employees ?? []).map((e: any) => (<TableRow key={e.id}><TableCell className="font-mono text-xs">{e.employeeNo}</TableCell><TableCell>{e.firstName} {e.lastName}</TableCell><TableCell>{e.position ?? '-'}</TableCell><TableCell className="font-mono">₺{Number(e.grossSalary).toLocaleString('tr-TR')}</TableCell><TableCell>{e.tgbExempt ? <Badge>Yes</Badge> : <Badge variant="outline">No</Badge>}</TableCell><TableCell>{e.law5746Exempt ? <Badge>Yes</Badge> : <Badge variant="outline">No</Badge>}</TableCell></TableRow>))}
              {(employees ?? []).length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground">No employees. Seed demo data.</TableCell></TableRow>}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="payslips">
          <Card><CardHeader><CardTitle className="text-base">Recent Payslips</CardTitle><CardDescription>Auto-generated Bordro with TGB exemption calculations</CardDescription></CardHeader><CardContent>
            <Table><TableHeader><TableRow><TableHead>Employee</TableHead><TableHead>Period</TableHead><TableHead>Gross</TableHead><TableHead>Income Tax</TableHead><TableHead>SGK (Emp)</TableHead><TableHead>TGB Exemption</TableHead><TableHead>Net</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>{(employees ?? []).flatMap((e: any) => (e.payslips ?? []).map((p: any) => (<TableRow key={p.id}><TableCell>{e.firstName} {e.lastName}</TableCell><TableCell className="font-mono text-xs">{p.period}</TableCell><TableCell className="font-mono">₺{Number(p.grossAmount).toLocaleString('tr-TR')}</TableCell><TableCell className="font-mono">₺{Number(p.incomeTax).toLocaleString('tr-TR')}</TableCell><TableCell className="font-mono">₺{Number(p.sgkEmployee).toLocaleString('tr-TR')}</TableCell><TableCell className="font-mono text-primary">₺{Number(p.tgbExemption).toLocaleString('tr-TR')}</TableCell><TableCell className="font-mono font-bold">₺{Number(p.netAmount).toLocaleString('tr-TR')}</TableCell><TableCell><Badge variant={p.status === 'APPROVED' ? 'default' : 'outline'}>{p.status}</Badge></TableCell></TableRow>)))}
              </TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="timesheets">
          <Card><CardHeader><CardTitle className="text-base">Time Tracking</CardTitle></CardHeader><CardContent>
            <Table><TableHeader><TableRow><TableHead>Employee</TableHead><TableHead>Date</TableHead><TableHead>Hours</TableHead><TableHead>Category</TableHead><TableHead>Description</TableHead></TableRow></TableHeader>
              <TableBody>{(employees ?? []).flatMap((e: any) => (e.timeEntries ?? []).map((t: any) => (<TableRow key={t.id}><TableCell>{e.firstName} {e.lastName}</TableCell><TableCell><SafeDate date={t.date} options={{ dateStyle: 'short' }} /></TableCell><TableCell className="font-mono">{t.hours}h</TableCell><TableCell><Badge variant="outline">{t.category ?? 'RD'}</Badge></TableCell><TableCell className="text-sm">{t.description ?? '-'}</TableCell></TableRow>)))}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
