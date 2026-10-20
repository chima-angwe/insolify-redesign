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
