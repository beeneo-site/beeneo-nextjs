'use client'
import { useState, useEffect } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Box, ScanBarcode, FileText, ShoppingCart } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { toast } from 'sonner'

export default function ERPPage() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [barcode, setBarcode] = useState('')
  const [scanResult, setScanResult] = useState<any>(null)

  useEffect(() => { fetch('/api/erp').then(r => r.json()).then(d => { setData(d); setLoading(false) }).catch(() => setLoading(false)) }, [])

  const simulateScan = () => {
    const items = data?.stock ?? []
    if (items.length > 0) { const item = items[Math.floor(Math.random() * items.length)]; setScanResult(item); setBarcode(item?.barcode ?? ''); toast.success(`Scanned: ${item?.name}`) }
    else toast.error('No stock items found')
  }

  if (loading) return <div className="p-4 space-y-4"><Skeleton className="h-12 w-full" /><Skeleton className="h-64 w-full" /></div>

  return (
    <div className="space-y-6">
      <PageHeader title="Mini-ERP & Mini-PLM" description="BOM management, Engineering Change Orders, MRP purchasing proposals, and barcode stock scanning." />
      <Tabs defaultValue="bom">
        <TabsList><TabsTrigger value="bom">Bill of Materials</TabsTrigger><TabsTrigger value="eco">ECO Workflow</TabsTrigger><TabsTrigger value="mrp">MRP Proposals</TabsTrigger><TabsTrigger value="stock">Stock & Barcode</TabsTrigger></TabsList>
        <TabsContent value="bom">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Box className="h-4 w-4" />BOM Items</CardTitle></CardHeader><CardContent>
            <Table><TableHeader><TableRow><TableHead>Part #</TableHead><TableHead>Name</TableHead><TableHead>Category</TableHead><TableHead>Qty</TableHead><TableHead>Unit Cost</TableHead><TableHead>Supplier</TableHead></TableRow></TableHeader>
              <TableBody>{(data?.bom ?? []).map((b: any) => (<TableRow key={b?.id}><TableCell className="font-mono text-xs">{b?.partNumber}</TableCell><TableCell>{b?.name}</TableCell><TableCell><Badge variant="outline">{b?.category}</Badge></TableCell><TableCell>{b?.quantity} {b?.unit}</TableCell><TableCell className="font-mono">{b?.unitCost ? `₺${Number(b.unitCost).toLocaleString('tr-TR')}` : '-'}</TableCell><TableCell>{b?.supplier ?? '-'}</TableCell></TableRow>))}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="eco">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4" />Engineering Change Orders</CardTitle></CardHeader><CardContent>
            <Table><TableHeader><TableRow><TableHead>ECO #</TableHead><TableHead>Title</TableHead><TableHead>Priority</TableHead><TableHead>Impact</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>{(data?.ecos ?? []).map((e: any) => (<TableRow key={e?.id}><TableCell className="font-mono text-xs">{e?.ecoNumber}</TableCell><TableCell>{e?.title}</TableCell><TableCell><Badge variant={e?.priority === 'HIGH' ? 'destructive' : e?.priority === 'MEDIUM' ? 'secondary' : 'outline'}>{e?.priority}</Badge></TableCell><TableCell>{e?.impactLevel}</TableCell><TableCell><Badge variant={e?.status === 'APPROVED' ? 'default' : e?.status === 'IN_REVIEW' ? 'secondary' : 'outline'}>{e?.status}</Badge></TableCell></TableRow>))}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="mrp">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><ShoppingCart className="h-4 w-4" />MRP-Light Purchasing Proposals</CardTitle></CardHeader><CardContent>
            <div className="space-y-3">{(data?.stock ?? []).filter((s: any) => (s?.quantityOnHand ?? 0) <= (s?.reorderLevel ?? 0)).map((s: any) => (
              <div key={s?.id} className="flex items-center justify-between p-3 rounded-lg bg-destructive/5 border border-destructive/20">
                <div><p className="font-medium">{s?.name}</p><p className="text-xs text-muted-foreground">Part: {s?.partNumber} — On-hand: {s?.quantityOnHand} / Reorder at: {s?.reorderLevel}</p></div>
                <Badge variant="destructive">Reorder Needed</Badge>
              </div>
            ))}
            {(data?.stock ?? []).filter((s: any) => (s?.quantityOnHand ?? 0) <= (s?.reorderLevel ?? 0)).length === 0 && <p className="text-muted-foreground text-sm">All stock levels adequate.</p>}
            </div>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="stock">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><ScanBarcode className="h-4 w-4" />Stock & Barcode Scanning</CardTitle></CardHeader><CardContent className="space-y-4">
            <div className="flex gap-2"><Input value={barcode} onChange={(e: any) => setBarcode(e.target.value)} placeholder="Enter or scan barcode" /><Button onClick={simulateScan}>Simulate Scan</Button></div>
            {scanResult && <div className="p-4 rounded-lg bg-muted/50"><p className="font-bold">{scanResult?.name}</p><p className="text-sm">Part: {scanResult?.partNumber} | On-hand: {scanResult?.quantityOnHand} {scanResult?.unit} | Location: {scanResult?.location}</p></div>}
            <Table><TableHeader><TableRow><TableHead>Barcode</TableHead><TableHead>Part #</TableHead><TableHead>Name</TableHead><TableHead>On-Hand</TableHead><TableHead>Location</TableHead></TableRow></TableHeader>
              <TableBody>{(data?.stock ?? []).map((s: any) => (<TableRow key={s?.id}><TableCell className="font-mono text-xs">{s?.barcode ?? '-'}</TableCell><TableCell className="font-mono text-xs">{s?.partNumber}</TableCell><TableCell>{s?.name}</TableCell><TableCell>{s?.quantityOnHand} {s?.unit}</TableCell><TableCell>{s?.location}</TableCell></TableRow>))}</TableBody>
            </Table>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
