import {
  Zap,
  Brain,
  ShieldCheck,
  Languages,
  Layers,
  Activity,
  MessageCircle,
  Cog,
  Lightbulb,
  Users,
} from 'lucide-react'

/* UNVERIFIED (copied from the live page): all three stats below */
export const SAFI_STATS = [
  { value: '1M+', label: 'Conversations' },
  { value: '99.9%', label: 'Uptime' },
  { value: '9', label: 'Languages' },
]

export const SAFI_FEATURES = [
  {
    icon: Zap,
    title: 'Lightning fast',
    text: 'Get instant responses with our optimized AI engine designed for speed and accuracy.',
  },
  {
    icon: Brain,
    title: 'Smart learning',
    text: 'Safi AI learns from interactions to provide increasingly personalized assistance.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise security',
    text: 'Bank-level encryption and compliance with industry standards to protect your data.',
  },
  {
    icon: Languages,
    title: 'Multi-language support',
    text: 'Communicate in 9+ languages with real-time translation capabilities.',
  },
  {
    icon: Layers,
    title: 'Seamless integration',
    text: 'Connect with your existing tools and workflows effortlessly.',
  },
  {
    icon: Activity,
    title: 'Advanced analytics',
    text: 'Gain insights into conversations and usage patterns with detailed reports.',
  },
]

export const SAFI_CAPABILITIES = [
  {
    icon: MessageCircle,
    title: 'Answer complex questions',
    items: ['Technical queries', 'Business analysis', 'Research assistance', 'Problem solving'],
  },
  {
    icon: Cog,
    title: 'Automate tasks',
    items: ['Document summarization', 'Email drafting', 'Data extraction', 'Schedule management'],
  },
  {
    icon: Lightbulb,
    title: 'Provide insights',
    items: ['Trend analysis', 'Market intelligence', 'Performance metrics', 'Custom reports'],
  },
  {
    icon: Users,
    title: 'Enhance collaboration',
    items: ['Team coordination', 'Project management', 'Knowledge sharing', 'Workflow optimization'],
  },
]