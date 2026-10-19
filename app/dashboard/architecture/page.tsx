'use client'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Layers, Database, Cloud, Shield, Cpu, Globe, Webhook } from 'lucide-react'

const layers = [
  { name: 'Presentation Layer', icon: Globe, color: 'text-blue-500', items: ['React/Next.js SPA', 'Tile (Kachel) Dashboard System', 'Responsive UI with dark blueprint theme', 'Role-based views (Admin, SMMM, User)'] },
  { name: 'API Layer', icon: Webhook, color: 'text-green-500', items: ['RESTful API routes (/api/*)', 'JWT authentication via Auth.js v5', 'Rate limiting & CORS', 'Streaming endpoints for LLM'] },
  { name: 'Domain / Agent Logic', icon: Cpu, color: 'text-purple-500', items: ['LEAF (Lean Enterprise Architecture Framework)', 'LEAI (Agentic AI) orchestration', 'OCR ingestion pipeline (Gemini via Gmail/Drive)', 'Probabilistic matching engine (bank recon)', 'TGB payroll exemption calculator', 'KVKK/GDPR masking middleware'] },
  { name: 'Data Layer', icon: Database, color: 'text-orange-500', items: ['PostgreSQL (Prisma ORM)', '20+ entity models (User, Tenant, GLAccount, Invoice...)', 'S3 cloud storage for documents', 'Audit trail logging'] },
]

const adapters = [
  { name: 'GİB Özel Entegratör', desc: 'e-Fatura / e-Arşiv / ETTN verification', status: 'SIMULATED' },
  { name: 'Gemini OCR (Gmail/Drive)', desc: 'Invoice text extraction from email attachments', status: 'SIMULATED' },
  { name: 'Abacus.ai ML Matching', desc: 'Bank reconciliation probabilistic matching', status: 'SIMULATED' },
  { name: 'Google Apps Script', desc: 'Webhook for spreadsheet automation', status: 'PLACEHOLDER' },
  { name: 'AppSheet', desc: 'Mobile data entry and approval workflows', status: 'PLACEHOLDER' },
  { name: 'delilim.com', desc: 'Expat work permit and residency tracking', status: 'SIMULATED' },
  { name: 'TGB Portal', desc: 'Monthly activity report submission', status: 'SIMULATED' },
]

const compliance = [
  'ISO 29110 (VSE lifecycle)', 'ISO 9001 (Quality Management)', 'ASPICE (Automotive SPICE)',
  'KVKK (Turkish Data Protection)',
  'GDPR (EU General Data Protection)',
]

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="System Architecture" description="Layered architecture with on-prem/hybrid cloud readiness, integration adapters, and compliance alignment." />
      <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Layers className="h-4 w-4" />Layered Architecture</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-4">{layers.map((l, i) => {
            const Icon = l.icon
            return (<div key={i} className="p-4 rounded-lg bg-muted/50 border-l-4" style={{ borderLeftColor: `hsl(var(--primary))` }}>
              <div className="flex items-center gap-2 mb-2"><Icon className={`h-5 w-5 ${l.color}`} /><h3 className="font-bold text-sm">{l.name}</h3></div>
              <div className="grid grid-cols-2 gap-1">{l.items.map((item, j) => <p key={j} className="text-xs text-muted-foreground">• {item}</p>)}</div>
            </div>)
          })}</div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Cloud className="h-4 w-4" />Integration Adapters</CardTitle></CardHeader>
          <CardContent><div className="space-y-2">{adapters.map((a, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/30">
              <div><p className="text-sm font-medium">{a.name}</p><p className="text-xs text-muted-foreground">{a.desc}</p></div>
              <Badge variant="outline" className="text-[10px]">{a.status}</Badge>
            </div>
          ))}</div></CardContent>
        </Card>
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Shield className="h-4 w-4" />Compliance & Security</CardTitle></CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">{compliance.map((c, i) => <Badge key={i} variant="secondary">{c}</Badge>)}</div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Scaling:</strong> Multi-app architecture (customer-facing, back-office, community) sharing one PostgreSQL database via Prisma ORM.</p>
              <p>• <strong>Hybrid readiness:</strong> On-prem PostgreSQL + cloud S3 storage; webhook-based sync for offline/on-prem deployments.</p>
              <p>• <strong>Scheduled tasks:</strong> Report generation (TGB, Bordro) via cron-like triggers; data refresh for banking reconciliation.</p>
              <p>• <strong>KVKK middleware:</strong> All PII masked via regex before LLM/AI processing; audit log for every data access event.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
