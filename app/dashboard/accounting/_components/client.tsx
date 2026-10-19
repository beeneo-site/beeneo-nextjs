'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Receipt, CheckCircle, XCircle, Clock, FileText } from 'lucide-react'
import { SafeDate } from '@/components/safe-format'
import { toast } from 'sonner'

export function AccountingClient({ invoices, postings }: { invoices: any[]; postings: any[] }) {
  const [simulating, setSimulating] = useState(false)

  const simulateIngest = () => {
    setSimulating(true)
    setTimeout(() => { setSimulating(false); toast.success('Demo: 2 invoices ingested via Gmail/OCR, ETTN verified, posted to TDHP 770/191/320') }, 2000)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="Autonomous Accounting & GİB Integration" description="Automated e-Invoice ingestion, ETTN verification, and dual-entry posting to Tek Düzen Hesap Planı (TDHP)." actions={<Button onClick={simulateIngest} loading={simulating}><Receipt className="h-4 w-4 mr-2" />Simulate Ingest & Post</Button>} />
      <Tabs defaultValue="invoices">
        <TabsList><TabsTrigger value="invoices">Invoices</TabsTrigger><TabsTrigger value="ledger">TDHP Ledger</TabsTrigger></TabsList>
        <TabsContent value="invoices">
          <Card>
            <CardHeader><CardTitle className="text-base">e-Invoices (e-Fatura / e-Arşiv)</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Invoice #</TableHead><TableHead>Vendor</TableHead><TableHead>Date</TableHead><TableHead>Amount (TRY)</TableHead><TableHead>ETTN</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {(invoices ?? []).map((inv: any) => (
                    <TableRow key={inv.id}>
                      <TableCell className="font-mono text-xs">{inv.invoiceNumber}</TableCell>
                      <TableCell>{inv.vendorName ?? '-'}</TableCell>
                      <TableCell><SafeDate date={inv.issueDate} options={{ dateStyle: 'medium' }} /></TableCell>
                      <TableCell className="font-mono">{inv.totalAmount?.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</TableCell>
                      <TableCell>{inv.ettnRecord?.verified ? <Badge className="gap-1"><CheckCircle className="h-3 w-3" />Verified</Badge> : inv.ettnRecord ? <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" />Failed</Badge> : <Badge variant="outline" className="gap-1"><Clock className="h-3 w-3" />Pending</Badge>}</TableCell>
                      <TableCell><Badge variant={inv.status === 'POSTED' ? 'default' : 'outline'}>{inv.status}</Badge></TableCell>
                    </TableRow>
                  ))}
                  {(invoices ?? []).length === 0 && <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground">No invoices yet. Run seed to populate demo data.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ledger">
          <Card>
            <CardHeader><CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4" />TDHP General Ledger Postings</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader><TableRow><TableHead>Date</TableHead><TableHead>Account</TableHead><TableHead>Description</TableHead><TableHead className="text-right">Debit</TableHead><TableHead className="text-right">Credit</TableHead></TableRow></TableHeader>
                <TableBody>
                  {(postings ?? []).map((p: any) => (
                    <TableRow key={p.id}>
                      <TableCell><SafeDate date={p.date} options={{ dateStyle: 'short' }} /></TableCell>
                      <TableCell className="font-mono text-xs">{p.account?.code ?? '-'} — {p.account?.name ?? '-'}</TableCell>
                      <TableCell className="text-sm">{p.description ?? '-'}</TableCell>
                      <TableCell className="text-right font-mono">{Number(p.debit) > 0 ? Number(p.debit).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) : ''}</TableCell>
                      <TableCell className="text-right font-mono">{Number(p.credit) > 0 ? Number(p.credit).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) : ''}</TableCell>
                    </TableRow>
                  ))}
                  {(postings ?? []).length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">No postings yet.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
