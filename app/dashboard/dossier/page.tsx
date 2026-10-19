'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FileText, CheckCircle, Download } from 'lucide-react'
import { toast } from 'sonner'

const dossierTypes = [
  { value: 'TUBITAK_1501', label: 'TÜBİTAK 1501 (Industry R&D)' },
  { value: 'TUBITAK_1507', label: 'TÜBİTAK 1507 (SME R&D)' },
  { value: 'KOSGEB', label: 'KOSGEB Support' },
  { value: 'BANK_LOAN', label: 'Bank Loan Application' },
]

const documents = [
  { name: 'SGK Borcu Yoktur Belgesi', status: 'READY', desc: 'Social security clearance certificate' },
  { name: 'Vergi Borcu Yoktur Belgesi', status: 'READY', desc: 'Tax clearance certificate' },
  { name: 'Mizan (Trial Balance)', status: 'READY', desc: 'Current period trial balance from TDHP' },
  { name: 'Gelır Tablosu (Income Statement)', status: 'READY', desc: 'Projected income statement' },
  { name: 'Bilanço (Balance Sheet)', status: 'READY', desc: 'Current balance sheet' },
  { name: 'Financial Projections (3-Year)', status: 'GENERATED', desc: 'AI-generated financial forecast' },
  { name: 'Project Technical Description', status: 'PENDING', desc: 'R&D project technical summary' },
]

export default function DossierPage() {
  const [type, setType] = useState('TUBITAK_1501')
  const [compiling, setCompiling] = useState(false)
  const [compiled, setCompiled] = useState(false)

  const compile = () => {
    setCompiling(true)
    setTimeout(() => { setCompiling(false); setCompiled(true); toast.success('Dossier compiled successfully!') }, 2500)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="One-Click Dossier Builder" description="Auto-compile SGK/Vergi clearances, trial balance, and financial projections for grant and loan applications." />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1"><CardHeader><CardTitle className="text-base">Dossier Type</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Select value={type} onValueChange={setType}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent>{dossierTypes.map(d => <SelectItem key={d.value} value={d.value}>{d.label}</SelectItem>)}</SelectContent></Select>
            <Button onClick={compile} loading={compiling} className="w-full"><Download className="h-4 w-4 mr-2" />Compile Dossier</Button>
            {compiled && <Badge className="w-full justify-center"><CheckCircle className="h-3 w-3 mr-1" />Dossier Ready</Badge>}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2"><CardHeader><CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4" />Included Documents</CardTitle><CardDescription>Documents auto-gathered for {dossierTypes.find(d => d.value === type)?.label}</CardDescription></CardHeader>
          <CardContent>
            <div className="space-y-3">{documents.map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div><p className="font-medium text-sm">{doc.name}</p><p className="text-xs text-muted-foreground">{doc.desc}</p></div>
                <Badge variant={doc.status === 'READY' ? 'default' : doc.status === 'GENERATED' ? 'secondary' : 'outline'}>{doc.status}</Badge>
              </div>
            ))}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
