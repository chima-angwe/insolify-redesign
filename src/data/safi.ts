import {
  Languages,
  Activity,
  ShieldCheck,
  Cog,
} from 'lucide-react'

/* UNVERIFIED (copied from the live page): all three stats below */
export const SAFI_STATS = [
  { value: '1M+', label: 'Conversations' },
  { value: '99.9%', label: 'Uptime' },
  { value: '9', label: 'Languages' },
]

export const SAFI_FEATURES = [
  {
    icon: Activity,
    title: 'Financial intelligence',
    text: 'Help teams interpret financial context and operational signals.',
  },
  {
    icon: ShieldCheck,
    title: 'Fraud detection',
    text: 'Surface patterns for review within institution-defined processes.',
  },
  {
    icon: Languages,
    title: 'Multilingual AI',
    text: 'Support financial experiences across languages and channels.',
  },
  {
    icon: Cog,
    title: 'Automation',
    text: 'Assist repeatable workflows with appropriate human review.',
  },
]

export const SAFI_FAQS = [
  {
    q: 'What is Safi?',
    a: "Safi is Insolify's AI platform for financial intelligence, voice and conversational banking, forecasting, advisory and fraud detection.",
  },
  {
    q: 'Which languages can Safi understand?',
    a: 'Safi listens in real time in English, Kiswahili, Hausa, Arabic, Yorùbá and Igbo. Dialect coverage and accuracy depend on your deployment.',
  },
  {
    q: 'Can customers make transactions by talking to Safi?',
    a: 'Yes. Customers can request transfers, airtime and bill payments by conversation. Safi reads the details back and requires authentication before any money moves.',
  },
  {
    q: 'What is vibe financing?',
    a: 'It lets people with limited accounting knowledge describe transactions in plain words. Safi drafts the journal entries and explains them, and a person reviews them before posting.',
  },
  {
    q: 'How accurate are the forecasts and advice?',
    a: 'Forecasts show confidence ranges and are decision support, not guarantees or regulated investment advice.',
  },
  {
    q: 'How does Safi detect fraud?',
    a: 'It scores transactions in real time using behaviour, device, location and network signals, including cases like SIM swaps, mule accounts and structuring.',
  },
  {
    q: 'Does Safi work with FinCore?',
    a: 'Yes. Safi runs natively inside FinCore and can also work alongside your existing systems.',
  },
]
