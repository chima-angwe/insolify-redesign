export type ModuleIcon =
  | 'landmark' | 'card' | 'transfer' | 'wallet' | 'store' | 'hash'
  | 'monitor' | 'layout' | 'globe' | 'phone' | 'users' | 'database'

export type FincoreModule = {
  name: string
  description: string
  tags: string[]
  icon: ModuleIcon
  featured?: boolean
}

export const MODULES: FincoreModule[] = [
  {
    name: 'Core Banking Module',
    description:
      'The foundation of FINCORE™, bringing together essential tools for teller operations, accounting, customer onboarding, loan management, and compliance.',
    tags: ['Teller Operations', 'Customer Management', 'Account Products'],
    icon: 'landmark',
    featured: true,
  },
  {
    name: 'Cards Module',
    description:
      'Automates the entire card lifecycle from issuance to blocking, monitoring, and management with switch integrations.',
    tags: ['Card Issuance', 'Card Blocking', 'Real-Time Monitoring'],
    icon: 'card',
  },
  {
    name: 'InterBanking Module',
    description:
      'Powers interbank settlements and transfers through integration with national and regional payment networks.',
    tags: ['NIBSS & Interswitch Integration', 'Real-Time Transfers', 'Transaction Monitoring'],
    icon: 'transfer',
  },
  {
    name: 'Virtual Banking Module',
    description:
      'Empowers banks to issue virtual accounts and cards for digital transactions, perfect for fintech integrations.',
    tags: ['Virtual Account Creation', 'Virtual Card Issuance', 'Wallet Management'],
    icon: 'wallet',
  },
  {
    name: 'POS Module',
    description:
      'Complete management of terminals and transactions, enabling institutions to oversee POS deployment and analytics.',
    tags: ['POS Terminal Onboarding', 'Switch Integration', 'Live Dashboard'],
    icon: 'store',
  },
  {
    name: 'USSD Module',
    description:
      'Brings banking to any mobile phone without internet. Menu-driven transactions over GSM networks.',
    tags: ['Custom ShortCode', 'USSD Menu Design', 'Transaction Routing'],
    icon: 'hash',
  },
  {
    name: 'Internet Banking Module',
    description:
      'Secure web-based portal for corporate and retail customers to manage accounts and authorize bulk transfers.',
    tags: ['Corporate Account Access', 'Bulk Transaction Uploads', 'Approval Workflows'],
    icon: 'monitor',
  },
  {
    name: 'Website Module',
    description:
      'Professionally designed website tailored to your institution combining brand identity with modern UI.',
    tags: ['Landing Page', 'About & Team Sections', 'Product Showcase'],
    icon: 'layout',
  },
  {
    name: 'International Banking Module',
    description:
      'Facilitates cross-border payments, FX reconciliation, and multi-currency account management.',
    tags: ['Multi-Currency Accounts', 'Cross-Border Settlements', 'SWIFT Integration'],
    icon: 'globe',
  },
  {
    name: 'Mobile Banking Module',
    description: 'Fully branded mobile app for Android and iOS that connects directly to FINCORE™.',
    tags: ['Custom Branding', 'Push Notifications', 'Fund Transfers'],
    icon: 'phone',
  },
  {
    name: 'Agency Banking Module',
    description:
      'Extends bank reach through field agents and POS operators with real-time transactions and reconciliations.',
    tags: ['Agent Onboarding & KYC', 'Field Agent App', 'POS & Cash Collection'],
    icon: 'users',
  },
  {
    name: 'Data Migration & Integration Module',
    description:
      'Specialized service for migrating customer, account, and transaction data from legacy systems securely.',
    tags: ['Data Cleansing', 'Format Alignment', 'Migration Execution'],
    icon: 'database',
  },
]

export const CORE_FEATURES = [
  { title: 'Teller Operations & Real-Time Posting', text: 'Streamlined teller operations with real-time transaction posting and settlement.' },
  { title: 'Customer Management', text: 'Comprehensive customer onboarding for Individual, Corporate, and Group accounts with KYC verification.' },
  { title: 'Account Products', text: 'Support for Savings, Current, Deposit accounts and more with automated NUBAN generation.' },
  { title: 'Loans Management', text: 'Complete loan lifecycle management including disbursement, accrual, approval, collateral, and GSI.' },
  { title: 'Fixed & Recurring Deposits', text: 'Manage fixed deposits and recurring deposit products with automated interest calculations.' },
  { title: 'Ledger & Journal Management', text: 'Integrated general ledger and journal management with automated reconciliation.' },
  { title: 'Regulatory Compliance', text: 'Built-in regulatory compliance, security, backups, and restore capabilities.' },
  { title: 'Reporting & Analytics', text: 'Comprehensive reporting with templates, export functionality, and scheduled frequency.' },
  { title: 'Digital Onboarding', text: 'Digital onboarding with BVN, NIN & CAC verification, KYC, and account tier management.' },
  { title: 'Bulk Operations', text: 'Migration tools, data import, group data management, and bulk operations support.' },
  { title: 'Automated Notifications', text: 'Multi-channel notifications via SMS, Email, and Push notifications.' },
  { title: 'Access Control', text: 'Comprehensive users, roles, permissions, cashier and administrative controls.' },
]

export const BENEFITS = [
  {
    title: 'Digital transformation',
    items: ['Modern UI/UX', 'Cloud-native architecture', 'API-first design', 'Microservices'],
  },
  {
    title: 'Customer experience',
    items: ['24/7 availability', 'Personalized services', 'Faster onboarding', 'Mobile-first design'],
  },
  {
    title: 'Risk and compliance',
    items: ['Real-time monitoring', 'Regulatory compliance', 'Fraud detection', 'Audit trails'],
  },
]