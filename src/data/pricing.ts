import { EXTERNAL_LINKS } from '../config/links'
import type { PricingProduct } from '../config/links'

export type IconKey =
  | 'landmark' | 'card' | 'transfer' | 'wallet' | 'store' | 'phone' | 'monitor'
  | 'layout' | 'globe' | 'mobile' | 'users' | 'database' | 'sparkles' | 'zap'
  | 'activity' | 'plug' | 'languages' | 'shield' | 'lock' | 'banknote' | 'code' | 'chat'

export type PricingModule = {
  id: string
  name: string
  description: string
  tags: string[]
  icon: IconKey
  setup: number // one-time fee, 0 if none
  price: number // recurring fee: per year for Fincore, per month for Safi and Settle
  base?: boolean // included in every plan, cannot be unchecked
  popular?: boolean
}

export type PricingTier = {
  id: 'starter' | 'growth' | 'complete'
  name: string
  blurb: string
  moduleIds: string[]
  popular?: boolean
}

export type PricingProductData = {
  id: PricingProduct
  name: string
  tagline: string
  icon: IconKey
  currency: 'NGN' | 'USD'
  period: 'year' | 'month'
  annualDiscount?: number
  estimateNote: string
  modules: PricingModule[]
  tiers: PricingTier[]
  getStarted: { to?: string; href?: string }
}

function makeTiers(name: string, modules: PricingModule[], growthIds: string[]): PricingTier[] {
  const base = modules.filter((m) => m.base).map((m) => m.id)
  return [
    {
      id: 'starter',
      name: 'Starter',
      blurb: `The ${name} base platform, everything you need to go live.`,
      moduleIds: base,
    },
    {
      id: 'growth',
      name: 'Growth',
      blurb: 'Base platform plus the modules most customers add first.',
      moduleIds: growthIds,
      popular: true,
    },
    {
      id: 'complete',
      name: 'Complete',
      blurb: 'Every available module, full platform capability.',
      moduleIds: modules.map((m) => m.id),
    },
  ]
}

/* ---------------- Fincore (Naira, billed per year) ---------------- */
const FINCORE_MODULES: PricingModule[] = [
  {
    id: 'core',
    name: 'Core Banking',
    description: 'Teller operations, customer management, accounts, loans, ledger, compliance and reporting.',
    tags: ['Teller Operations', 'Customer Management', 'Account Products', 'Loans Management', 'Compliance & Security'],
    icon: 'landmark',
    setup: 1_000_000,
    price: 1_000_000,
    base: true,
  },
  {
    id: 'cards',
    name: 'Cards Module',
    description: 'Full card lifecycle: issuance, blocking, monitoring, and switch integrations.',
    tags: ['Card Issuance', 'Card Blocking', 'Real-Time Monitoring', 'Switch Integration'],
    icon: 'card',
    setup: 2_000_000,
    price: 2_000_000,
    popular: true,
  },
  {
    id: 'interbanking',
    name: 'InterBanking',
    description: 'Interbank settlements via NIBSS and Interswitch with real-time transfers.',
    tags: ['NIBSS & Interswitch', 'Real-Time Transfers', 'Transaction Monitoring', 'Auto Reconciliation'],
    icon: 'transfer',
    setup: 2_000_000,
    price: 2_000_000,
    popular: true,
  },
  {
    id: 'virtual',
    name: 'Virtual Banking',
    description: 'Virtual accounts and cards for digital transactions and fintech integrations.',
    tags: ['Virtual Account Creation', 'Virtual Card Issuance', 'Wallet Management', 'API Integration'],
    icon: 'wallet',
    setup: 2_000_000,
    price: 2_000_000,
  },
  {
    id: 'pos',
    name: 'POS Module',
    description: 'Terminal management, switch integration, live dashboards and analytics.',
    tags: ['POS Terminal Onboarding', 'Switch Integration', 'Live Dashboard', 'Terminal Monitoring'],
    icon: 'store',
    setup: 5_000_000,
    price: 2_000_000,
  },
  {
    id: 'ussd',
    name: 'USSD Banking',
    description: 'Banking on any mobile phone without internet via GSM networks.',
    tags: ['Custom ShortCode', 'USSD Menu Design', 'Transaction Routing', 'Security & Sessions'],
    icon: 'phone',
    setup: 2_000_000,
    price: 2_000_000,
  },
  {
    id: 'internet',
    name: 'Internet Banking',
    description: 'Secure web portal for corporate and retail customers.',
    tags: ['Corporate Access', 'Bulk Transactions', 'Approval Workflows', '2FA'],
    icon: 'monitor',
    setup: 3_000_000,
    price: 2_000_000,
  },
  {
    id: 'website',
    name: 'Website Module',
    description: 'Professionally designed website tailored to your institution.',
    tags: ['Landing Page', 'Product Showcase', 'Blog Integration', 'Custom Branding'],
    icon: 'layout',
    setup: 2_000_000,
    price: 2_000_000,
  },
  {
    id: 'international',
    name: 'International Banking',
    description: 'Cross-border payments, FX reconciliation, multi-currency accounts.',
    tags: ['Multi-Currency Accounts', 'Cross-Border Settlements', 'SWIFT Integration', 'FX Reconciliation'],
    icon: 'globe',
    setup: 15_000_000,
    price: 15_000_000,
  },
  {
    id: 'mobile',
    name: 'Mobile Banking',
    description: 'Fully branded mobile app for Android and iOS connected to Fincore.',
    tags: ['Custom Branding', 'Push Notifications', 'Fund Transfers', 'Card Management'],
    icon: 'mobile',
    setup: 5_000_000,
    price: 5_000_000,
    popular: true,
  },
  {
    id: 'agency',
    name: 'Agency Banking',
    description: 'Extend reach through field agents and POS operators.',
    tags: ['Agent Onboarding', 'Field Agent App', 'POS & Cash Collection', 'Commission Tracking'],
    icon: 'users',
    setup: 5_000_000,
    price: 5_000_000,
  },
  {
    id: 'migration',
    name: 'Data Migration',
    description: 'Migrate from legacy systems with data cleansing and validation.',
    tags: ['Data Cleansing', 'Format Alignment', 'Migration Execution', 'Post-Migration Testing'],
    icon: 'database',
    setup: 2_000_000,
    price: 2_000_000,
  },
]

/* ---------------- Safi AI (US dollars, billed per month) ---------------- */
const SAFI_MODULES: PricingModule[] = [
  {
    id: 'platform',
    name: 'AI Platform',
    description: 'Core conversational engine with natural language understanding.',
    tags: ['5,000 messages/month', 'Basic AI features', 'Email support', 'API access'],
    icon: 'sparkles',
    setup: 0,
    price: 29,
    base: true,
  },
  {
    id: 'advanced',
    name: 'Advanced AI',
    description: 'Enhanced models, higher limits, custom personalities.',
    tags: ['50,000 messages/month', 'Advanced models', 'Custom personalities', 'Priority support'],
    icon: 'zap',
    setup: 0,
    price: 70,
    popular: true,
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    description: 'Conversation analytics, usage patterns, and custom reports.',
    tags: ['Conversation analytics', 'Usage patterns', 'Export reports', 'Real-time dashboard'],
    icon: 'activity',
    setup: 0,
    price: 30,
  },
  {
    id: 'integrations',
    name: 'Custom Integrations',
    description: 'Connect Safi to your tools: CRM, helpdesk, ERP, and more.',
    tags: ['CRM integration', 'Helpdesk sync', 'Webhook support', 'Custom connectors'],
    icon: 'plug',
    setup: 0,
    price: 40,
  },
  {
    id: 'language',
    name: 'Multi-Language',
    description: 'Support 9+ languages with real-time translation.',
    tags: ['9+ languages', 'Real-time translation', 'Language detection', 'Custom glossaries'],
    icon: 'languages',
    setup: 0,
    price: 25,
  },
  {
    id: 'security',
    name: 'Enterprise Security',
    description: 'SSO, audit logs, data encryption, and compliance controls.',
    tags: ['SSO / SAML', 'Audit logs', 'Data encryption', 'SOC 2 compliance'],
    icon: 'shield',
    setup: 0,
    price: 50,
  },
  {
    id: 'dedicated',
    name: 'Dedicated Model',
    description: 'Private AI model trained on your data with custom fine-tuning.',
    tags: ['Private model instance', 'Custom training', 'Data isolation', 'SLA guarantee'],
    icon: 'lock',
    setup: 500,
    price: 200,
  },
]

/* ---------------- Settle Africa (US dollars, billed per month) ---------------- */
const SETTLE_MODULES: PricingModule[] = [
  {
    id: 'platform',
    name: 'Transfer Platform',
    description: 'Core international money transfer engine with compliance.',
    tags: ['Send to 50+ countries', 'KYC verification', 'Real-time tracking', 'Upfront fee display'],
    icon: 'transfer',
    setup: 0,
    price: 99,
    base: true,
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    description: 'Send directly to bank accounts across Africa.',
    tags: ['Direct bank deposit', 'Multi-currency', 'Same-day delivery', 'Receipt generation'],
    icon: 'landmark',
    setup: 0,
    price: 49,
    popular: true,
  },
  {
    id: 'mobile',
    name: 'Mobile Money',
    description: 'Instant transfer to mobile money wallets.',
    tags: ['M-Pesa & others', 'Instant delivery', 'SMS confirmation', 'Low minimums'],
    icon: 'mobile',
    setup: 0,
    price: 39,
    popular: true,
  },
  {
    id: 'cash',
    name: 'Cash Pickup',
    description: 'Send money for cash collection at pickup locations.',
    tags: ['Pickup locations', 'ID verification', 'Flexible amounts', 'Secure collection'],
    icon: 'banknote',
    setup: 0,
    price: 29,
  },
  {
    id: 'airtime',
    name: 'Airtime Top-Up',
    description: 'Top up prepaid mobile phones across Africa.',
    tags: ['All major carriers', 'Instant delivery', 'No extra fees', 'Scheduled top-ups'],
    icon: 'phone',
    setup: 0,
    price: 19,
  },
  {
    id: 'api',
    name: 'Business API',
    description: 'Programmatic access for bulk transfers and payouts.',
    tags: ['REST API', 'Webhook callbacks', 'Bulk payouts', 'Sandbox testing'],
    icon: 'code',
    setup: 200,
    price: 149,
  },
]

export const PRICING: Record<PricingProduct, PricingProductData> = {
  fincore: {
    id: 'fincore',
    name: 'Fincore',
    tagline: 'Core banking software for microfinance and commercial banks',
    icon: 'landmark',
    currency: 'NGN',
    period: 'year',
    estimateNote: 'Setup fee is one-time. Annual fee renews each year.',
    modules: FINCORE_MODULES,
    tiers: makeTiers('Fincore', FINCORE_MODULES, ['core', 'cards', 'interbanking', 'mobile']),
    // Fincore is sold through sales. Change to { href: EXTERNAL_LINKS.register } if self-serve sign-up is wanted.
    getStarted: { to: '/contact' },
  },
  safi: {
    id: 'safi',
    name: 'Safi AI',
    tagline: 'Intelligent conversational AI for enterprise',
    icon: 'sparkles',
    currency: 'USD',
    period: 'month',
    annualDiscount: 0.2,
    estimateNote: 'Prices are per month. Annual billing saves 20%.',
    modules: SAFI_MODULES,
    tiers: makeTiers('Safi AI', SAFI_MODULES, ['platform', 'advanced']),
    getStarted: { href: EXTERNAL_LINKS.register },
  },
  settle: {
    id: 'settle',
    name: 'Settle Africa',
    tagline: 'Fast, secure money transfers across Africa',
    icon: 'transfer',
    currency: 'USD',
    period: 'month',
    annualDiscount: 0.2,
    estimateNote: 'Monthly platform fee. Transaction fees apply per transfer.',
    modules: SETTLE_MODULES,
    tiers: makeTiers('Settle Africa', SETTLE_MODULES, ['platform', 'bank', 'mobile']),
    getStarted: { href: EXTERNAL_LINKS.register },
  },
}

export const PRICING_ORDER: PricingProduct[] = ['fincore', 'safi', 'settle']

export const INCLUDES: { icon: IconKey; title: string; text: string }[] = [
  {
    icon: 'zap',
    title: 'Implementation support',
    text: 'Guided onboarding, training sessions, and go-live assistance from our team.',
  },
  {
    icon: 'shield',
    title: 'Enterprise security',
    text: 'Bank-level encryption, compliance controls, and regular security audits.',
  },
  {
    icon: 'chat',
    title: 'Dedicated support',
    text: 'Priority support channels with guaranteed response times.',
  },
]

export const PRICING_FAQS = [
  {
    q: 'Can I add or remove modules later?',
    a: 'Yes. You can upgrade your plan with additional modules at any time. Downgrades take effect at the start of the next billing cycle.',
  },
  {
    q: 'Do you offer volume or annual discounts?',
    a: 'Annual billing saves 20% across all products. For large deployments, contact our sales team for custom volume pricing.',
  },
  {
    q: 'What is included in the setup fee?',
    a: 'The setup fee covers implementation, configuration, data migration assistance, training, and go-live support.',
  },
  {
    q: 'How do I get started?',
    a: 'You can sign up directly at dash.insolify.com and choose the modules you need. For Fincore and Settle, we also offer guided demos and sandbox environments.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, all major credit cards, and purchase orders for enterprise customers.',
  },
]