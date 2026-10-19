'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Shield, Eye, EyeOff } from 'lucide-react'
import { toast } from 'sonner'

const sampleData = [
  { field: 'TCKN', raw: '12345678901', masked: '123****8901' },
  { field: 'IBAN', raw: 'TR330006100519786457841326', masked: 'TR33****1326' },
  { field: 'Full Name', raw: 'Berrin Erden', masked: 'B***** E****' },
  { field: 'Phone', raw: '+90 532 123 4567', masked: '+90 *** *** 4567' },
  { field: 'Email', raw: 'berrin@beeneo.biz', masked: 'b*****@b*****.biz' },
]

export default function CompliancePage() {
  const [maskEnabled, setMaskEnabled] = useState(true)
  const [showRaw, setShowRaw] = useState(false)

  return (
    <div className="space-y-6">
      <PageHeader title="Data Privacy & Compliance" description="KVKK/GDPR compliance middleware: automatic regex data masking for TCKN, IBAN, names before processing." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Shield className="h-4 w-4" />Compliance Settings</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between"><Label>Auto-mask PII before AI processing</Label><Switch checked={maskEnabled} onCheckedChange={setMaskEnabled} /></div>
            <div className="flex items-center justify-between"><Label>KVKK compliant data retention</Label><Switch defaultChecked /></div>
            <div className="flex items-center justify-between"><Label>Audit log for data access</Label><Switch defaultChecked /></div>
            <Button className="w-full" onClick={() => toast.success('Compliance settings saved')}>Save Settings</Button>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2"><CardHeader><CardTitle className="text-base flex items-center justify-between"><span>Data Masking Preview</span><Button variant="ghost" size="sm" onClick={() => setShowRaw(!showRaw)}>{showRaw ? <EyeOff className="h-4 w-4 mr-1" /> : <Eye className="h-4 w-4 mr-1" />}{showRaw ? 'Hide Raw' : 'Show Raw'}</Button></CardTitle><CardDescription>Regex-based masking applied to sensitive fields before LLM processing</CardDescription></CardHeader>
          <CardContent>
            <Table><TableHeader><TableRow><TableHead>Field Type</TableHead><TableHead>Raw Value</TableHead><TableHead>Masked Value</TableHead><TableHead>Status</TableHead></TableRow></TableHeader>
              <TableBody>{sampleData.map((d, i) => (<TableRow key={i}><TableCell className="font-medium">{d.field}</TableCell><TableCell className="font-mono text-xs">{showRaw ? d.raw : '••••••••'}</TableCell><TableCell className="font-mono text-xs text-primary">{d.masked}</TableCell><TableCell><Badge>{maskEnabled ? 'MASKED' : 'RAW'}</Badge></TableCell></TableRow>))}</TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
