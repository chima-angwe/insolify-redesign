import DarkHero from '../../components/sections/DarkHero'
import type { StripCard } from '../../components/sections/StripCards/StripCards'
import ProductMark from '../../components/ui/ProductMark'
import FeatureCards from '../../components/sections/FeatureCards'
import ChecklistCards from '../../components/sections/ChecklistCards'
import PricingTeaser from '../../components/sections/PricingTeaser'
import CallToAction from '../../components/sections/CallToAction'
import { EXTERNAL_LINKS } from '../../config/links'
import { PRICING } from '../../data/pricing'
import { SAFI_FEATURES, SAFI_CAPABILITIES } from '../../data/safi'

// Each card repeats a feature already listed on the live Safi page.
const CARDS: StripCard[] = [
  { tone: 'yellow', label: 'Speed', title: 'Instant responses', text: 'An optimized AI engine', motif: 'chat' },
  { tone: 'light', label: 'Languages', title: '9+ languages', text: 'With real-time translation', motif: 'globe' },
  { tone: 'dark', label: 'Security', title: 'Bank-level encryption', text: 'Industry-standard compliance', motif: 'shield' },
  { tone: 'light', label: 'Analytics', title: 'Usage reports', text: 'Insight into conversations', motif: 'bars' },
  { tone: 'yellow', label: 'Integrations', title: 'Your existing tools', text: 'Connect without rework', motif: 'network' },
]

export default function Safi() {
  return (
    <>
      <DarkHero
        compact
        mark={<ProductMark product="safi" size="lg" />}
        name="Safi AI"
        headline="Meet Safi, your AI assistant"
        text="Safi AI is a conversational AI designed to streamline your workflow, answer complex questions and drive productivity through natural, intelligent interactions."
        primary={{ label: 'Start chatting now', href: EXTERNAL_LINKS.registerSafi }}
        secondary={{ label: 'See what it can do', href: '#features' }}
        cards={CARDS}
      />

      <FeatureCards id="features" title="Powerful features" items={SAFI_FEATURES} columns={3} tone="tinted" />

      <ChecklistCards title="What Safi AI can do" groups={SAFI_CAPABILITIES} columns={2} />

      <PricingTeaser
        product="safi"
        title="Simple, transparent pricing"
        intro="Start with the AI platform and add only the modules you need, or choose a ready-made plan."
        tiers={PRICING.safi.tiers.map((t) => ({ name: t.name, text: t.blurb }))}
        label="View Safi AI pricing"
      />

      <CallToAction
        title="Ready to experience Safi AI?"
        text="Start a conversation, or talk to our team about your use case."
        primary={{ label: 'Start chatting now', href: EXTERNAL_LINKS.registerSafi }}
        secondary={{ label: 'Talk to sales', to: '/contact' }}
      />
    </>
  )
}