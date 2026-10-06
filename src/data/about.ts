import {
  Target,
  CircleCheck,
  TrendingUp,
  Zap,
  Globe,
  Users,
  ShieldCheck,
  Rocket,
  Cog,
  FileCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ProductKey } from '../config/logos'


type Service = {
  icon?: LucideIcon
  product?: ProductKey
  title: string
  text: string
  points: string[]
  to?: string
}

export const INTRO = {
  title: 'About Insolify',
  lead: 'Transforming businesses through innovative technology, intelligent automation, and world-class solutions.',
  text: 'Founded with a mission to simplify complexity and empower organizations to thrive in the digital age.',
}

export const MISSION_VALUES = [
  {
    icon: Target,
    title: 'Our mission',
    text: 'To empower organizations with cutting-edge technology and intelligent solutions that transform operations and create sustainable growth.',
  },
  {
    icon: CircleCheck,
    title: 'Our values',
    text: 'Innovation, integrity, customer-centricity, and excellence in everything we do. We believe in partnerships built on trust.',
  },
]

export const PRESS = [
  {
    source: 'Yahoo Finance',
    title: "Insolify's FinCore & Safi FI: Redefining Financial Infrastructure",
    text: "An overview of Insolify's FinCore platform and Safi FI, highlighting automation, operational efficiency, and customer-facing intelligence.",
    url: '', // TODO: on the live page, right-click "Read article" and copy the link
  },
  {
    source: 'Leadership Nigeria',
    title: "Banking Platforms Reshape Competition in Nigeria's Financial Sector",
    text: "How modern banking platforms are driving innovation and competition across Nigeria's financial ecosystem.",
    url: '', // TODO
  },
  {
    source: 'Tribune Online',
    title: 'AI Has Introduced New Challenges in Cybersecurity',
    text: 'A look at emerging AI-driven cyber risks and the evolving security practices required to protect users and institutions.',
    url: '', // TODO
  },
]

export const STATS = [
  { value: '10+', label: 'Enterprises served' },
  { value: '50+', label: 'Countries' },
  { value: '₦100M+', label: 'Value created' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '10+', label: 'Team members' },
  { value: '24/7', label: 'Global support' },
]

export const SERVICES: Service[] = [
  {
    product: 'safi',
    title: 'Safi AI',
    text: 'Intelligent conversational AI designed to streamline workflows, answer complex questions, and drive productivity.',
    points: ['Real-time assistance', '9+ languages', 'Enterprise security'],
    to: '/safi',
  },
  {
    product: 'fincore',
    title: 'Fincore',
    text: 'A modern core banking platform for banks, fintech companies, and finance houses. 12 deployable modules for scalable, compliant operations.',
    points: ['12 deployable modules', '4-6 weeks deployment', 'Cloud-native architecture'],
    to: '/fincore',
  },
  {
    icon: Cog,
    title: 'Workflow Automation',
    text: 'Intelligent automation solutions to streamline complex business processes.',
    points: ['Process automation', 'RPA integration', 'Custom workflows'],
  },
  {
    icon: FileCheck,
    title: 'Governance & Compliance',
    text: 'Comprehensive governance ensuring regulatory adherence and data protection.',
    points: ['Regulatory compliance', 'Risk monitoring', 'Audit trails'],
  },
]

export const WHY = [
  {
    icon: TrendingUp,
    title: 'Proven expertise',
    text: 'Over 5 years of experience transforming enterprises across industries.',
  },
  {
    icon: Zap,
    title: 'Cutting-edge technology',
    text: 'Built on the latest AI, cloud computing, and advanced automation.',
  },
  {
    icon: Globe,
    title: 'Global scale',
    text: 'Serving enterprises across 50+ countries with 24/7 support.',
  },
  {
    icon: Users,
    title: 'Customer success',
    text: 'Dedicated teams ensuring your success with onboarding and support.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise grade',
    text: '99.99% uptime SLA, bank-level security, global compliance.',
  },
  {
    icon: Rocket,
    title: 'Measurable results',
    text: 'Proven ROI with cost savings, efficiency gains, and revenue growth.',
  },
]

export const BELIEFS = [
  'Innovation that drives real business value',
  'Customer success as our ultimate measure',
  'Diversity and inclusion in everything we do',
  'Continuous learning and professional growth',
  'Ethical business practices and transparency',
  'Building sustainable and responsible technology',
]

export const IMPACT = [
  { label: 'Employee satisfaction', value: '95%', text: 'Of our team would recommend Insolify' },
  { label: 'Customer retention', value: '92%', text: 'Customers renew annually' },
  { label: 'Community impact', value: '500K+', text: 'Lives impacted through our initiatives' },
]