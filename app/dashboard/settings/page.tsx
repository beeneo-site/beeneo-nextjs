'use client'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Settings, Key, Webhook, Users, Building } from 'lucide-react'
import { toast } from 'sonner'

const webhooks = [
  { name: 'Google Apps Script', url: 'https://script.google.com/macros/s/***', status: 'ACTIVE' },
  { name: 'AppSheet Webhook', url: 'https://api.appsheet.com/api/v2/***', status: 'ACTIVE' },
  { name: 'PostgreSQL Sync', url: 'postgresql://***@localhost/sureneo', status: 'CONFIGURED' },
]

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Super Admin / Settings" description="Tenant configuration, GİB adapter credentials, webhook registry, and user roles." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Building className="h-4 w-4" />Company / Tenant</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Company Name</Label><Input defaultValue="beeNEO Engineering Ltd." /></div>
            <div className="space-y-2"><Label>Tax ID (Vergi No)</Label><Input defaultValue="1234567890" /></div>
            <div className="space-y-2"><Label>City</Label><Input defaultValue="Ankara" /></div>
            <Button onClick={() => toast.success('Settings saved')}>Save</Button>
          </CardContent>
        </Card>
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Key className="h-4 w-4" />GİB Özel Entegratör Adapter</CardTitle><CardDescription>Placeholder credentials for e-Fatura / e-Arşiv integration</CardDescription></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2"><Label>Integrator</Label><Input defaultValue="Foriba / Uyumsoft / Logo" /></div>
            <div className="space-y-2"><Label>API Key</Label><Input type="password" defaultValue="placeholder-api-key" /></div>
            <div className="space-y-2"><Label>API Secret</Label><Input type="password" defaultValue="placeholder-secret" /></div>
            <Button variant="outline" onClick={() => toast.info('GİB adapter test: Connection simulated (placeholder credentials)')}>Test Connection</Button>
          </CardContent>
        </Card>
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Webhook className="h-4 w-4" />Webhook Registry</CardTitle></CardHeader>
          <CardContent><div className="space-y-3">{webhooks.map((w, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div><p className="font-medium text-sm">{w.name}</p><p className="text-xs font-mono text-muted-foreground">{w.url}</p></div>
              <Badge variant={w.status === 'ACTIVE' ? 'default' : 'outline'}>{w.status}</Badge>
            </div>
          ))}</div></CardContent>
        </Card>
        <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4" />User Roles</CardTitle></CardHeader>
          <CardContent><div className="space-y-2">
            {['Admin (Super Admin)', 'SMMM (Certified Accountant)', 'Manager', 'Employee', 'Viewer'].map((r, i) => (
              <div key={i} className="flex items-center justify-between p-2 rounded bg-muted/30"><span className="text-sm">{r}</span><Badge variant="outline">Configured</Badge></div>
            ))}
          </div></CardContent>
        </Card>
      </div>
    </div>
  )
}
