'use client'
import { PageHeader } from '@/components/layouts/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Database, ArrowRight } from 'lucide-react'

const entities = [
  { name: 'User', fields: 'id, email, name, password, role, tenantId', relations: 'Tenant, Account, Session' },
  { name: 'Tenant', fields: 'id, name, taxId, address, gibIntegrator, settings', relations: 'User[], GLAccount[], Invoice[], Employee[], Project[]...' },
  { name: 'GLAccount', fields: 'id, code, name, type, parentCode, tenantId', relations: 'Tenant, GLPosting[]' },
  { name: 'GLPosting', fields: 'id, date, accountId, debit, credit, description, invoiceId', relations: 'GLAccount, Invoice, Tenant' },
  { name: 'Invoice', fields: 'id, invoiceNumber, ettnUuid, type, vendorName, totalAmount, status', relations: 'Tenant, GLPosting[], ETTNRecord, ReconciliationMatch[]' },
  { name: 'ETTNRecord', fields: 'id, invoiceId, ettnUuid, checksum, verified, verifyResult', relations: 'Invoice, Tenant' },
  { name: 'BankStatement', fields: 'id, bankName, accountNumber, statementDate, fileName', relations: 'Tenant, BankTransaction[]' },
  { name: 'BankTransaction', fields: 'id, statementId, date, description, amount, direction', relations: 'BankStatement, ReconciliationMatch[], Tenant' },
  { name: 'ReconciliationMatch', fields: 'id, invoiceId, transactionId, matchScore, matchStatus', relations: 'Invoice, BankTransaction, Tenant' },
  { name: 'Employee', fields: 'id, employeeNo, firstName, lastName, grossSalary, tgbExempt', relations: 'Tenant, Payslip[], TimeEntry[]' },
  { name: 'Payslip', fields: 'id, employeeId, period, grossAmount, incomeTax, sgkEmployee, tgbExemption, netAmount', relations: 'Employee, Tenant' },
  { name: 'TimeEntry', fields: 'id, employeeId, projectId, date, hours, category', relations: 'Employee, Project, Tenant' },
  { name: 'Project', fields: 'id, code, name, client, status, isoStandards[]', relations: 'Tenant, TimeEntry[], ECO[], AuditTrail[]' },
  { name: 'ECO', fields: 'id, ecoNumber, title, priority, impactLevel, status', relations: 'Project, Tenant' },
  { name: 'BOMItem', fields: 'id, partNumber, name, category, quantity, unitCost, supplier', relations: 'Tenant' },
  { name: 'StockItem', fields: 'id, partNumber, name, barcode, quantityOnHand, reorderLevel', relations: 'Tenant' },
  { name: 'AuditTrail', fields: 'id, entityType, entityId, action, isoRef, details', relations: 'Project, Tenant' },
  { name: 'DossierRequest', fields: 'id, type, title, status, documents (JSON)', relations: 'Tenant' },
  { name: 'CommunityPost', fields: 'id, title, content, category, author, tags[]', relations: 'Tenant' },
  { name: 'Membership', fields: 'id, email, tier, status, expiresAt', relations: 'Tenant' },
  { name: 'ExceptionLog', fields: 'id, type, severity, description, confidence, status', relations: 'Tenant' },
  { name: 'MaskLog', fields: 'id, fieldType, originalHash, maskedValue, context', relations: 'Tenant' },
]

const relationships = [
  { from: 'Tenant', to: 'User', type: '1:N' }, { from: 'Tenant', to: 'GLAccount', type: '1:N' },
  { from: 'Tenant', to: 'Invoice', type: '1:N' }, { from: 'GLAccount', to: 'GLPosting', type: '1:N' },
  { from: 'Invoice', to: 'GLPosting', type: '1:N' }, { from: 'Invoice', to: 'ETTNRecord', type: '1:1' },
  { from: 'Invoice', to: 'ReconciliationMatch', type: '1:N' }, { from: 'BankStatement', to: 'BankTransaction', type: '1:N' },
  { from: 'BankTransaction', to: 'ReconciliationMatch', type: '1:N' }, { from: 'Employee', to: 'Payslip', type: '1:N' },
  { from: 'Employee', to: 'TimeEntry', type: '1:N' }, { from: 'Project', to: 'TimeEntry', type: '1:N' },
  { from: 'Project', to: 'ECO', type: '1:N' }, { from: 'Project', to: 'AuditTrail', type: '1:N' },
]

export default function SchemasPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Database Schemas" description="Entity-Relationship diagrams and table definitions for all 22 core entities in the sureNEO LOS Finance data model." />
      <Card><CardHeader><CardTitle className="text-base flex items-center gap-2"><Database className="h-4 w-4" />Entity Relationship Map</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">{relationships.map((r, i) => (
            <div key={i} className="flex items-center gap-1 p-2 rounded bg-muted/50 text-xs"><Badge variant="outline" className="text-[10px]">{r.from}</Badge><ArrowRight className="h-3 w-3 text-muted-foreground shrink-0" /><Badge variant="outline" className="text-[10px]">{r.to}</Badge><span className="text-muted-foreground ml-auto">{r.type}</span></div>
          ))}</div>
        </CardContent>
      </Card>
      <Card><CardHeader><CardTitle className="text-base">All Entities ({entities.length})</CardTitle></CardHeader>
        <CardContent>
          <Table><TableHeader><TableRow><TableHead>Entity</TableHead><TableHead>Key Fields</TableHead><TableHead>Relations</TableHead></TableRow></TableHeader>
            <TableBody>{entities.map((e, i) => (<TableRow key={i}><TableCell className="font-mono text-xs font-bold">{e.name}</TableCell><TableCell className="text-xs text-muted-foreground">{e.fields}</TableCell><TableCell className="text-xs">{e.relations}</TableCell></TableRow>))}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
