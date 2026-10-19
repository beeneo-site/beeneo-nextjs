'use client'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Landmark, ArrowRightLeft } from 'lucide-react'
import { SafeDate } from '@/components/safe-format'
import { Progress } from '@/components/ui/progress'

export function BankingClient({ transactions, matches }: { transactions: any[]; matches: any[] }) {
  return (
    <div className="space-y-6">
      <PageHeader title="Smart Banking & Reconciliation" description="PDF/Excel bank statement parsing simulation with probabilistic invoice matching." />
      <Tabs defaultValue="transactions">
        <TabsList><TabsTrigger value="transactions">Bank Transactions</TabsTrigger><TabsTrigger value="matches">Reconciliation Matches</TabsTrigger></TabsList>
        <TabsContent value="transactions">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Landmark className="h-4 w-4" />Parsed Transactions</CardTitle></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead>Date</TableHead><TableHead>Description</TableHead><TableHead>Direction</TableHead><TableHead className="text-right">Amount</TableHead><TableHead className="text-right">Balance</TableHead></TableRow></TableHeader>
                <TableBody>
                  {(transactions ?? []).map((t: any) => (<TableRow key={t.id}><TableCell><SafeDate date={t.date} options={{ dateStyle: 'short' }} /></TableCell><TableCell>{t.description}</TableCell><TableCell><Badge variant={t.direction === 'CREDIT' ? 'default' : 'outline'}>{t.direction}</Badge></TableCell><TableCell className="text-right font-mono">{Number(t.amount).toLocaleString('tr-TR', { minimumFractionDigits: 2 })}</TableCell><TableCell className="text-right font-mono text-muted-foreground">{t.balance != null ? Number(t.balance).toLocaleString('tr-TR', { minimumFractionDigits: 2 }) : '-'}</TableCell></TableRow>))}
                  {(transactions ?? []).length === 0 && <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground">No transactions. Seed demo data.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="matches">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><ArrowRightLeft className="h-4 w-4" />Match Results</CardTitle></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead>Invoice</TableHead><TableHead>Transaction</TableHead><TableHead>Score</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
                <TableBody>
                  {(matches ?? []).map((m: any) => (<TableRow key={m.id}><TableCell className="font-mono text-xs">{m.invoice?.invoiceNumber ?? '-'} (₺{m.invoice?.totalAmount?.toLocaleString('tr-TR')})</TableCell><TableCell className="text-sm">{m.transaction?.description ?? '-'} (₺{m.transaction?.amount?.toLocaleString('tr-TR')})</TableCell><TableCell><div className="flex items-center gap-2"><Progress value={m.matchScore * 100} className="w-16 h-2" /><span className="text-xs font-mono">{(m.matchScore * 100).toFixed(0)}%</span></div></TableCell><TableCell><Badge variant={m.matchStatus === 'MATCHED' ? 'default' : m.matchStatus === 'PARTIAL' ? 'secondary' : 'outline'}>{m.matchStatus}</Badge></TableCell></TableRow>))}
                  {(matches ?? []).length === 0 && <TableRow><TableCell colSpan={4} className="text-center text-muted-foreground">No matches yet.</TableCell></TableRow>}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
