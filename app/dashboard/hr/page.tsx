'use client'
import { useState } from 'react'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { UserPlus, FileText, GraduationCap, Globe } from 'lucide-react'
import { toast } from 'sonner'

const trainingMatrix = [
  { name: 'Berrin Erden', trainings: ['ISO 9001 Internal Auditor', 'ASPICE PAM 3.1'] },
  { name: 'Ahmet Yılmaz', trainings: ['ISO 9001 Awareness', 'Python ML Basics'] },
  { name: 'Elif Demir', trainings: ['SGK/MUHSGK Certification', 'KVKK DPO Training'] },
  { name: 'Can Öztürk', trainings: ['AUTOSAR Adaptive', 'ISO 21434 Cybersecurity'] },
  { name: 'Zeynep Kaya', trainings: ['ASPICE SWE.1-SWE.6', 'Agile Scrum Master'] },
]

const expatStatuses = [
  { name: 'Dr. Hans Müller', process: 'Work Permit', status: 'APPROVED', denklik: 'Completed' },
  { name: 'Sofia Petrov', process: 'Residence Permit', status: 'IN_PROGRESS', denklik: 'YÖK Pending' },
  { name: 'Raj Patel', process: 'Work Permit', status: 'SUBMITTED', denklik: 'Not Required' },
]

export default function HRPage() {
  const [jdTitle, setJdTitle] = useState('')
  const [jdResult, setJdResult] = useState('')
  const [jdLoading, setJdLoading] = useState(false)
  const [cvScore, setCvScore] = useState<number | null>(null)
  const [cvLoading, setCvLoading] = useState(false)

  const generateJD = async () => {
    if (!jdTitle.trim()) { toast.error('Enter a job title'); return }
    setJdLoading(true); setJdResult('')
    try {
      const res = await fetch('/api/llm/jd-generator', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: jdTitle }) })
      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let text = ''
      if (reader) { while (true) { const { done, value } = await reader.read(); if (done) break; const chunk = decoder.decode(value); const lines = chunk.split('\n'); for (const line of lines) { if (line.startsWith('data: ')) { const d = line.slice(6); if (d === '[DONE]') continue; try { const p = JSON.parse(d); text += p.choices?.[0]?.delta?.content ?? ''; setJdResult(text) } catch {} } } } }
    } catch { toast.error('JD generation failed') }
    setJdLoading(false)
  }

  const simulateCVParse = () => {
    setCvLoading(true)
    setTimeout(() => { setCvScore(Math.floor(Math.random() * 30) + 65); setCvLoading(false); toast.success('CV parsed and scored against job requirements') }, 1500)
  }

  return (
    <div className="space-y-6">
      <PageHeader title="HR & Global Talent Onboarding" description="Job description generation, CV fit-scoring, training matrix, and delilim.com integration for expat work permits." />
      <Tabs defaultValue="jd">
        <TabsList><TabsTrigger value="jd">JD Generator</TabsTrigger><TabsTrigger value="cv">CV Scoring</TabsTrigger><TabsTrigger value="training">Training Matrix</TabsTrigger><TabsTrigger value="expat">Expat Onboarding</TabsTrigger></TabsList>
        <TabsContent value="jd">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><FileText className="h-4 w-4" />AI Job Description Generator</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2"><Label>Job Title</Label><Input value={jdTitle} onChange={(e: any) => setJdTitle(e.target.value)} placeholder="e.g., Senior AUTOSAR Engineer" /></div>
                <Button onClick={generateJD} loading={jdLoading} className="w-full">Generate JD (AI)</Button>
              </CardContent>
            </Card>
            <Card><CardHeader><CardTitle className="text-base">Generated Job Description</CardTitle></CardHeader>
              <CardContent><div className="min-h-[200px] whitespace-pre-wrap text-sm bg-muted/50 rounded-lg p-4">{jdResult || 'Click Generate to create a job description using AI...'}</div></CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="cv">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><UserPlus className="h-4 w-4" />CV Parsing & Fit Scoring Simulation</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={simulateCVParse} loading={cvLoading}>Simulate CV Parse</Button>
              {cvScore != null && <div className="p-4 rounded-lg bg-muted/50"><p className="text-lg font-bold">Fit Score: <span className="text-primary">{cvScore}%</span></p><p className="text-sm text-muted-foreground">Based on skill matching against {jdTitle || 'AUTOSAR Engineer'} requirements.</p></div>}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="training">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><GraduationCap className="h-4 w-4" />Employee Training Matrix</CardTitle></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead>Employee</TableHead><TableHead>Completed Trainings</TableHead></TableRow></TableHeader>
                <TableBody>{trainingMatrix.map((e, i) => (<TableRow key={i}><TableCell className="font-medium">{e.name}</TableCell><TableCell className="space-x-1">{e.trainings.map((t, j) => <Badge key={j} variant="outline" className="text-[10px] mb-1">{t}</Badge>)}</TableCell></TableRow>))}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="expat">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Globe className="h-4 w-4" />delilim.com Integration — Expat Work Permits & Residency</CardTitle><CardDescription>Status tracking for work permits, residence permits, and YÖK Diploma Equivalency (Denklik)</CardDescription></CardHeader>
            <CardContent>
              <Table><TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Process</TableHead><TableHead>Status</TableHead><TableHead>YÖK Denklik</TableHead></TableRow></TableHeader>
                <TableBody>{expatStatuses.map((e, i) => (<TableRow key={i}><TableCell>{e.name}</TableCell><TableCell>{e.process}</TableCell><TableCell><Badge variant={e.status === 'APPROVED' ? 'default' : e.status === 'IN_PROGRESS' ? 'secondary' : 'outline'}>{e.status}</Badge></TableCell><TableCell><Badge variant="outline">{e.denklik}</Badge></TableCell></TableRow>))}</TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
