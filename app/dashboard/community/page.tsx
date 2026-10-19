'use client'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookOpen, Youtube, MessageSquare, Crown, Download } from 'lucide-react'

const blogPosts = [
  { title: 'TDHP Automation: How AI Replaces Manual Ledger Entry', category: 'BLOG', tags: ['Accounting', 'AI', 'TDHP'] },
  { title: 'TGB R&D Tax Exemptions Explained: Law 4691 vs 5746', category: 'BLOG', tags: ['Tax', 'TGB', 'R&D'] },
  { title: 'ASPICE for Turkish Automotive Suppliers', category: 'VLOG', tags: ['ASPICE', 'Automotive'] },
  { title: 'KVKK Data Privacy Crash Course', category: 'VLOG', tags: ['KVKK', 'Compliance'] },
]
const ytContent = [
  { title: 'Micro-Coaching: Setting Up Your First TDHP Chart of Accounts', duration: '12:34' },
  { title: 'SMMM Workflow Automation with AI', duration: '18:22' },
  { title: 'TGB Monthly Report Generator Demo', duration: '8:45' },
]
const vipTemplates = [
  { name: 'TGB Monthly Activity Report Template', type: 'XLSX' },
  { name: 'ISO 9001 Internal Audit Checklist', type: 'DOCX' },
  { name: 'ASPICE PAM 3.1 Self-Assessment', type: 'XLSX' },
  { name: 'AI Prompt Pack: Accounting Automation', type: 'TXT' },
]

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Content & Community Ecosystem" description="Blog, Vlog, YouTube Micro-Coaching, and VIP membership resources." />
      <Tabs defaultValue="content">
        <TabsList><TabsTrigger value="content">Blog & Vlog</TabsTrigger><TabsTrigger value="youtube">YouTube Feed</TabsTrigger><TabsTrigger value="vip">VIP Membership ($5/mo)</TabsTrigger><TabsTrigger value="forum">SMMM Q&A Forum</TabsTrigger></TabsList>
        <TabsContent value="content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{blogPosts.map((p, i) => (
            <Card key={i}><CardContent className="pt-6"><Badge variant="outline" className="mb-2">{p.category}</Badge><h3 className="font-medium mb-2">{p.title}</h3><div className="flex gap-1 flex-wrap">{p.tags.map(t => <Badge key={t} variant="secondary" className="text-[10px]">{t}</Badge>)}</div></CardContent></Card>
          ))}</div>
        </TabsContent>
        <TabsContent value="youtube">
          <div className="space-y-3">{ytContent.map((v, i) => (
            <Card key={i}><CardContent className="pt-4 flex items-center gap-4"><Youtube className="h-8 w-8 text-red-500 shrink-0" /><div className="flex-1"><p className="font-medium">{v.title}</p><p className="text-xs text-muted-foreground">{v.duration}</p></div><Button variant="outline" size="sm">Watch</Button></CardContent></Card>
          ))}</div>
        </TabsContent>
        <TabsContent value="vip">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Crown className="h-4 w-4 text-yellow-500" />VIP Membership — $5/month</CardTitle><CardDescription>Access premium templates, AI prompt packs, and SMMM Q&A priority support</CardDescription></CardHeader>
            <CardContent><div className="space-y-3">{vipTemplates.map((t, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50"><div className="flex items-center gap-2"><Download className="h-4 w-4" /><span className="text-sm">{t.name}</span></div><Badge variant="outline">{t.type}</Badge></div>
            ))}</div></CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="forum">
          <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><MessageSquare className="h-4 w-4" />SMMM Q&A Forum</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {[{ q: 'How to handle TGB exempt payroll in MUHSGK?', a: 'Under Law 4691, exempt employees are reported separately in the MUHSGK declaration...', author: 'SMMM Ali K.' },
                { q: 'ETTN UUID checksum verification best practice?', a: 'Always verify the SHA-256 hash against the GİB portal before posting...', author: 'SMMM Fatma Y.' }].map((p, i) => (
                <div key={i} className="p-4 rounded-lg bg-muted/50 space-y-2"><p className="font-medium">{p.q}</p><p className="text-sm text-muted-foreground">{p.a}</p><p className="text-xs text-muted-foreground">Answered by {p.author}</p></div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
