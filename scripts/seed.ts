import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Tenant
  const tenant = await prisma.tenant.upsert({
    where: { taxId: '1234567890' },
    update: {},
    create: { name: 'beeNEO Engineering Ltd.', taxId: '1234567890', address: 'ODTU Teknokent', city: 'Ankara', gibIntegrator: 'Foriba', settings: {} },
  })

  // Hidden test admin
  const hashedPw = await bcrypt.hash('0mPZYX@79m', 12)
  await prisma.user.upsert({
    where: { email: 'abacus-35d96697@example.com' },
    update: {},
    create: { email: 'abacus-35d96697@example.com', password: hashedPw, name: 'System Admin', role: 'admin', tenantId: tenant.id },
  })

  // GL Accounts (TDHP)
  const accounts = [
    { code: '100', name: 'Kasa', nameEn: 'Cash', type: 'ASSET' },
    { code: '102', name: 'Bankalar', nameEn: 'Banks', type: 'ASSET' },
    { code: '120', name: 'Al\u0131c\u0131lar', nameEn: 'Accounts Receivable', type: 'ASSET' },
    { code: '153', name: 'Ticari Mallar', nameEn: 'Merchandise', type: 'ASSET' },
    { code: '191', name: 'Indirilecek KDV', nameEn: 'Input VAT', type: 'ASSET' },
    { code: '255', name: 'Demirba\u015flar', nameEn: 'Fixtures', type: 'ASSET' },
    { code: '320', name: 'Sat\u0131c\u0131lar', nameEn: 'Accounts Payable', type: 'LIABILITY' },
    { code: '360', name: 'Odenecek Vergiler', nameEn: 'Taxes Payable', type: 'LIABILITY' },
    { code: '391', name: 'Hesaplanan KDV', nameEn: 'Output VAT', type: 'LIABILITY' },
    { code: '500', name: 'Sermaye', nameEn: 'Capital', type: 'EQUITY' },
    { code: '600', name: 'Yurti\u00e7i Sat\u0131\u015flar', nameEn: 'Domestic Sales', type: 'REVENUE' },
    { code: '602', name: 'Di\u011fer Gelirler', nameEn: 'Other Revenue', type: 'REVENUE' },
    { code: '770', name: 'Genel Y\u00f6netim Giderleri', nameEn: 'General Admin Expenses', type: 'EXPENSE' },
    { code: '750', name: 'Ar-Ge Giderleri', nameEn: 'R&D Expenses', type: 'EXPENSE' },
  ]
  for (const a of accounts) {
    await prisma.gLAccount.upsert({ where: { tenantId_code: { tenantId: tenant.id, code: a.code } }, update: {}, create: { ...a, tenantId: tenant.id } })
  }

  // Invoices
  const invoiceData = [
    { invoiceNumber: 'INV-2026-001', vendorName: 'Siemens DISW T\u00fcrkiye', vendorTaxId: '9876543210', subtotal: 45000, vatAmount: 8100, totalAmount: 53100, type: 'PURCHASE', status: 'POSTED', ocrConfidence: 0.98, ettnUuid: 'f47ac10b-58cc-4372-a567-0e02b2c3d479' },
    { invoiceNumber: 'INV-2026-002', vendorName: 'Bosch Automotive TR', vendorTaxId: '1111111111', subtotal: 28000, vatAmount: 5040, totalAmount: 33040, type: 'PURCHASE', status: 'POSTED', ocrConfidence: 0.96, ettnUuid: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
    { invoiceNumber: 'INV-2026-003', vendorName: 'AWS Cloud Services', vendorTaxId: '2222222222', subtotal: 3200, vatAmount: 576, totalAmount: 3776, type: 'PURCHASE', status: 'POSTED', ocrConfidence: 0.99, ettnUuid: 'b2c3d4e5-f6a7-8901-bcde-f12345678901' },
    { invoiceNumber: 'SLS-2026-001', vendorName: 'Lvkon EV Technologies', vendorTaxId: '3333333333', subtotal: 120000, vatAmount: 21600, totalAmount: 141600, type: 'SALES', status: 'POSTED', ocrConfidence: 0.97, ettnUuid: 'c3d4e5f6-a7b8-9012-cdef-123456789012' },
    { invoiceNumber: 'SLS-2026-002', vendorName: 'TGB Partner A.S.', vendorTaxId: '4444444444', subtotal: 85000, vatAmount: 15300, totalAmount: 100300, type: 'SALES', status: 'PENDING', ocrConfidence: 0.92, ettnUuid: 'd4e5f6a7-b8c9-0123-defa-234567890123' },
    { invoiceNumber: 'INV-2026-004', vendorName: 'Office Supplies Co.', vendorTaxId: '5555555555', subtotal: 1500, vatAmount: 270, totalAmount: 1770, type: 'PURCHASE', status: 'POSTED', ocrConfidence: 0.94, ettnUuid: 'e5f6a7b8-c9d0-1234-efab-345678901234' },
    { invoiceNumber: 'SLS-2026-003', vendorName: 'Consulting Client GmbH', vendorTaxId: '6666666666', subtotal: 65000, vatAmount: 11700, totalAmount: 76700, type: 'SALES', status: 'POSTED', ocrConfidence: 0.95, ettnUuid: 'f6a7b8c9-d0e1-2345-fabc-456789012345' },
    { invoiceNumber: 'INV-2026-005', vendorName: 'MATLAB License', vendorTaxId: '7777777777', subtotal: 18000, vatAmount: 3240, totalAmount: 21240, type: 'PURCHASE', status: 'PENDING', ocrConfidence: 0.88, ettnUuid: 'a7b8c9d0-e1f2-3456-abcd-567890123456' },
  ]
  for (const inv of invoiceData) {
    const existing = await prisma.invoice.findFirst({ where: { invoiceNumber: inv.invoiceNumber, tenantId: tenant.id } })
    if (!existing) {
      const invoice = await prisma.invoice.create({ data: { ...inv, issueDate: new Date('2026-' + String(Math.floor(Math.random() * 10) + 1).padStart(2, '0') + '-15'), tenantId: tenant.id, currency: 'TRY' } })
      await prisma.eTTNRecord.create({ data: { invoiceId: invoice.id, ettnUuid: inv.ettnUuid, checksum: 'sha256:' + inv.ettnUuid.replace(/-/g, '').substring(0, 16), verified: inv.ocrConfidence > 0.9, verifyResult: inv.ocrConfidence > 0.9 ? 'PASS' : 'FAIL', verifiedAt: inv.ocrConfidence > 0.9 ? new Date() : null, tenantId: tenant.id } })
      // GL postings
      const acc770 = await prisma.gLAccount.findFirst({ where: { tenantId: tenant.id, code: inv.type === 'PURCHASE' ? '770' : '600' } })
      const acc191 = await prisma.gLAccount.findFirst({ where: { tenantId: tenant.id, code: inv.type === 'PURCHASE' ? '191' : '391' } })
      const acc320 = await prisma.gLAccount.findFirst({ where: { tenantId: tenant.id, code: inv.type === 'PURCHASE' ? '320' : '120' } })
      if (acc770 && acc191 && acc320) {
        await prisma.gLPosting.createMany({ data: [
          { date: invoice.issueDate, accountId: acc770.id, debit: inv.type === 'PURCHASE' ? inv.subtotal : 0, credit: inv.type === 'SALES' ? inv.subtotal : 0, description: `${inv.vendorName} - ${inv.invoiceNumber}`, invoiceId: invoice.id, tenantId: tenant.id },
          { date: invoice.issueDate, accountId: acc191.id, debit: inv.type === 'PURCHASE' ? inv.vatAmount : 0, credit: inv.type === 'SALES' ? inv.vatAmount : 0, description: `KDV - ${inv.invoiceNumber}`, invoiceId: invoice.id, tenantId: tenant.id },
          { date: invoice.issueDate, accountId: acc320.id, debit: inv.type === 'SALES' ? inv.totalAmount : 0, credit: inv.type === 'PURCHASE' ? inv.totalAmount : 0, description: `${inv.vendorName} - ${inv.invoiceNumber}`, invoiceId: invoice.id, tenantId: tenant.id },
        ] })
      }
    }
  }

  // Bank Statement & Transactions
  const stmt = await prisma.bankStatement.upsert({
    where: { id: 'demo-stmt-001' },
    update: {},
    create: { id: 'demo-stmt-001', bankName: 'Garanti BBVA', accountNumber: 'TR12 0006 2000 1234 5678 9012 34', statementDate: new Date('2026-10-01'), fileName: 'garanti_oct2026.pdf', tenantId: tenant.id },
  })
  const bankTxns = [
    { description: 'Siemens DISW License Payment', amount: -53100, direction: 'DEBIT', balance: 246900 },
    { description: 'Lvkon EV Technologies - Milestone 1', amount: 141600, direction: 'CREDIT', balance: 388500 },
    { description: 'SGK Employer Contribution Oct', amount: -18500, direction: 'DEBIT', balance: 370000 },
    { description: 'Bosch Automotive TR Payment', amount: -33040, direction: 'DEBIT', balance: 336960 },
    { description: 'Consulting Client GmbH Payment', amount: 76700, direction: 'CREDIT', balance: 413660 },
    { description: 'AWS Cloud Oct', amount: -3776, direction: 'DEBIT', balance: 409884 },
  ]
  for (let i = 0; i < bankTxns.length; i++) {
    const existing = await prisma.bankTransaction.findFirst({ where: { statementId: stmt.id, description: bankTxns[i].description } })
    if (!existing) {
      await prisma.bankTransaction.create({ data: { ...bankTxns[i], date: new Date(`2026-10-${String(i + 3).padStart(2, '0')}`), statementId: stmt.id, tenantId: tenant.id } })
    }
  }

  // Reconciliation matches
  const allInvoices = await prisma.invoice.findMany({ where: { tenantId: tenant.id }, take: 4 })
  const allTxns = await prisma.bankTransaction.findMany({ where: { tenantId: tenant.id }, take: 4 })
  for (let i = 0; i < Math.min(allInvoices.length, allTxns.length); i++) {
    const existing = await prisma.reconciliationMatch.findFirst({ where: { invoiceId: allInvoices[i].id, transactionId: allTxns[i].id } })
    if (!existing) {
      await prisma.reconciliationMatch.create({ data: { invoiceId: allInvoices[i].id, transactionId: allTxns[i].id, matchScore: 0.85 + Math.random() * 0.14, matchStatus: i < 2 ? 'MATCHED' : i < 3 ? 'PARTIAL' : 'PROPOSED', tenantId: tenant.id } })
    }
  }

  // Employees
  const empData = [
    { employeeNo: 'EMP001', firstName: 'Berrin', lastName: 'Erden', position: 'CEO / Systems Architect', department: 'Management', grossSalary: 45000, sgkNo: '1234567890', tgbExempt: true, law4691Exempt: true, law5746Exempt: true },
    { employeeNo: 'EMP002', firstName: 'Ahmet', lastName: 'Y\u0131lmaz', position: 'Senior Embedded SW Engineer', department: 'Engineering', grossSalary: 38000, sgkNo: '2345678901', tgbExempt: true, law4691Exempt: true, law5746Exempt: true },
    { employeeNo: 'EMP003', firstName: 'Elif', lastName: 'Demir', position: 'Finance & HR Specialist', department: 'Finance', grossSalary: 28000, sgkNo: '3456789012', tgbExempt: true, law4691Exempt: true, law5746Exempt: false },
    { employeeNo: 'EMP004', firstName: 'Can', lastName: '\u00d6zt\u00fcrk', position: 'AUTOSAR Developer', department: 'Engineering', grossSalary: 35000, sgkNo: '4567890123', tgbExempt: true, law4691Exempt: true, law5746Exempt: true },
    { employeeNo: 'EMP005', firstName: 'Zeynep', lastName: 'Kaya', position: 'QA / ASPICE Process Lead', department: 'Quality', grossSalary: 32000, sgkNo: '5678901234', tgbExempt: true, law4691Exempt: true, law5746Exempt: true },
  ]
  for (const emp of empData) {
    const e = await prisma.employee.upsert({ where: { tenantId_employeeNo: { tenantId: tenant.id, employeeNo: emp.employeeNo } }, update: {}, create: { ...emp, startDate: new Date('2024-01-15'), tenantId: tenant.id } })
    // Payslips
    for (const period of ['2026-08', '2026-09', '2026-10']) {
      const gross = Number(emp.grossSalary)
      const sgkEmp = gross * 0.14
      const sgkEr = gross * 0.205
      const stamp = gross * 0.00759
      const incomeTax = (gross - sgkEmp - stamp) * 0.15
      const tgbExemption = emp.tgbExempt ? incomeTax * 0.8 + stamp * 0.8 : 0
      const net = gross - sgkEmp - incomeTax - stamp + tgbExemption
      await prisma.payslip.upsert({ where: { employeeId_period: { employeeId: e.id, period } }, update: {}, create: { employeeId: e.id, period, grossAmount: gross, incomeTax, sgkEmployee: sgkEmp, sgkEmployer: sgkEr, stampTax: stamp, tgbExemption, netAmount: net, status: period === '2026-10' ? 'DRAFT' : 'APPROVED', tenantId: tenant.id } })
    }
    // Time entries
    for (let d = 1; d <= 5; d++) {
      const existing = await prisma.timeEntry.findFirst({ where: { employeeId: e.id, date: new Date(`2026-10-${String(d + 10).padStart(2, '0')}`) } })
      if (!existing) {
        await prisma.timeEntry.create({ data: { employeeId: e.id, date: new Date(`2026-10-${String(d + 10).padStart(2, '0')}`), hours: 7 + Math.random() * 2, description: `R&D work - Sprint ${d}`, category: 'RD', tenantId: tenant.id } })
      }
    }
  }

  // Projects
  const projectData = [
    { code: 'LVKON-EV-001', name: 'Lvkon Commercial Vehicle Electrification', client: 'Lvkon EV Technologies', status: 'ACTIVE', isoStandards: ['ASPICE', 'ISO 9001'], budget: 850000 },
    { code: 'BEENEO-LEAF', name: 'LEAF Framework Development', client: 'Internal', status: 'ACTIVE', isoStandards: ['ISO 29110', 'ISO 9001'], budget: 200000 },
    { code: 'CONS-BMW-001', name: 'BMW Supplier ASPICE Assessment', client: 'BMW AG (via Tier-1)', status: 'ACTIVE', isoStandards: ['ASPICE', 'ISO 9001'], budget: 120000 },
    { code: 'CONS-COACH-001', name: 'Engineering Coaching Program', client: 'Various TGB Companies', status: 'ACTIVE', isoStandards: ['ISO 29110'], budget: 80000 },
    { code: 'TUBITAK-1501-R1', name: 'AI-Powered Accounting Engine R&D', client: 'T\u00dcB\u0130TAK', status: 'COMPLETED', isoStandards: ['ISO 29110', 'ISO 9001'], budget: 350000 },
  ]
  for (const proj of projectData) {
    const p = await prisma.project.upsert({ where: { tenantId_code: { tenantId: tenant.id, code: proj.code } }, update: {}, create: { ...proj, startDate: new Date('2026-01-01'), endDate: proj.status === 'COMPLETED' ? new Date('2026-09-30') : null, tenantId: tenant.id } })
    // Audit trails
    const audits = [
      { entityType: 'Project', action: 'CREATED', details: `Project ${proj.code} initiated`, isoRef: proj.isoStandards[0] },
      { entityType: 'Project', action: 'REVIEW', details: `${proj.isoStandards[0]} compliance review completed`, isoRef: proj.isoStandards[0] },
    ]
    for (const a of audits) {
      const existing = await prisma.auditTrail.findFirst({ where: { projectId: p.id, action: a.action, entityType: a.entityType } })
      if (!existing) {
        await prisma.auditTrail.create({ data: { ...a, entityId: p.id, projectId: p.id, tenantId: tenant.id } })
      }
    }
  }

  // ECOs
  const ecoData = [
    { ecoNumber: 'ECO-001', title: 'BMS Voltage Threshold Update', priority: 'HIGH', impactLevel: 'MEDIUM', status: 'APPROVED' },
    { ecoNumber: 'ECO-002', title: 'Inverter Thermal Model Revision', priority: 'MEDIUM', impactLevel: 'HIGH', status: 'IN_REVIEW' },
    { ecoNumber: 'ECO-003', title: 'CAN Protocol Version Upgrade', priority: 'LOW', impactLevel: 'LOW', status: 'DRAFT' },
    { ecoNumber: 'ECO-004', title: 'Motor Controller Safety Interlock', priority: 'HIGH', impactLevel: 'HIGH', status: 'APPROVED' },
  ]
  const lvkonProject = await prisma.project.findFirst({ where: { code: 'LVKON-EV-001', tenantId: tenant.id } })
  for (const eco of ecoData) {
    await prisma.eCO.upsert({ where: { tenantId_ecoNumber: { tenantId: tenant.id, ecoNumber: eco.ecoNumber } }, update: {}, create: { ...eco, projectId: lvkonProject?.id, tenantId: tenant.id } })
  }

  // BOM Items
  const bomData = [
    { partNumber: 'BMS-CTRL-001', name: 'BMS Controller Board', category: 'ELECTRONIC', quantity: 2, unitCost: 1200, supplier: 'Infineon TR', unit: 'PCS' },
    { partNumber: 'INV-IGBT-001', name: 'IGBT Power Module', category: 'ELECTRONIC', quantity: 6, unitCost: 850, supplier: 'Semikron', unit: 'PCS' },
    { partNumber: 'MTR-STATOR-001', name: 'Stator Assembly', category: 'MECHANICAL', quantity: 1, unitCost: 4500, supplier: 'Bosch TR', unit: 'PCS' },
    { partNumber: 'HRN-HV-001', name: 'HV Wiring Harness', category: 'ELECTRICAL', quantity: 1, unitCost: 2200, supplier: 'Yazaki TR', unit: 'SET' },
    { partNumber: 'SNS-TEMP-001', name: 'Temperature Sensor NTC', category: 'SENSOR', quantity: 12, unitCost: 35, supplier: 'TE Connectivity', unit: 'PCS' },
  ]
  for (const b of bomData) {
    await prisma.bOMItem.upsert({ where: { tenantId_partNumber: { tenantId: tenant.id, partNumber: b.partNumber } }, update: {}, create: { ...b, projectCode: 'LVKON-EV-001', tenantId: tenant.id } })
  }

  // Stock Items
  const stockData = [
    { partNumber: 'BMS-CTRL-001', name: 'BMS Controller Board', barcode: 'BRD8901234567', quantityOnHand: 3, reorderLevel: 2, location: 'MAIN' },
    { partNumber: 'INV-IGBT-001', name: 'IGBT Power Module', barcode: 'BRD8901234568', quantityOnHand: 8, reorderLevel: 4, location: 'MAIN' },
    { partNumber: 'MTR-STATOR-001', name: 'Stator Assembly', barcode: 'BRD8901234569', quantityOnHand: 1, reorderLevel: 1, location: 'WAREHOUSE' },
    { partNumber: 'HRN-HV-001', name: 'HV Wiring Harness', barcode: 'BRD8901234570', quantityOnHand: 0, reorderLevel: 1, location: 'MAIN' },
    { partNumber: 'SNS-TEMP-001', name: 'Temperature Sensor NTC', barcode: 'BRD8901234571', quantityOnHand: 15, reorderLevel: 10, location: 'MAIN' },
  ]
  for (const s of stockData) {
    await prisma.stockItem.upsert({ where: { tenantId_partNumber: { tenantId: tenant.id, partNumber: s.partNumber } }, update: {}, create: { ...s, tenantId: tenant.id } })
  }

  // Exception Logs
  const exceptionData = [
    { type: 'ACCOUNTING', severity: 'GREEN', description: 'Invoice INV-2026-001 auto-posted with 98% confidence', confidence: 0.98, status: 'AUTO_APPROVED' },
    { type: 'ACCOUNTING', severity: 'GREEN', description: 'Invoice INV-2026-002 auto-posted with 96% confidence', confidence: 0.96, status: 'AUTO_APPROVED' },
    { type: 'ACCOUNTING', severity: 'GREEN', description: 'Invoice SLS-2026-001 auto-posted with 97% confidence', confidence: 0.97, status: 'AUTO_APPROVED' },
    { type: 'ACCOUNTING', severity: 'YELLOW', description: 'Invoice INV-2026-005 OCR confidence below threshold (88%)', confidence: 0.88, status: 'PENDING' },
    { type: 'ACCOUNTING', severity: 'YELLOW', description: 'Bank reconciliation partial match: SLS-2026-002 amount discrepancy', confidence: 0.72, status: 'PENDING' },
    { type: 'ETTN', severity: 'RED', description: 'ETTN UUID checksum mismatch for test invoice - potential fraud', confidence: 0.15, status: 'FLAGGED' },
  ]
  for (const ex of exceptionData) {
    const existing = await prisma.exceptionLog.findFirst({ where: { description: ex.description, tenantId: tenant.id } })
    if (!existing) {
      await prisma.exceptionLog.create({ data: { ...ex, tenantId: tenant.id } })
    }
  }

  console.log('Seed completed successfully!')
}

main().catch(console.error).finally(() => prisma.$disconnect())
