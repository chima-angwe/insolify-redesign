import DarkHero from '../../components/sections/DarkHero'
import ProductMark from '../../components/ui/ProductMark'
import FeatureCards from '../../components/sections/FeatureCards'
import SafiVoiceSection from '../../components/sections/SafiVoiceSection/SafiVoiceSection'
import PricingTeaser from '../../components/sections/PricingTeaser'
import CallToAction from '../../components/sections/CallToAction'
import ExploreProducts from '../../components/sections/ExploreProducts/ExploreProducts'
import { EXTERNAL_LINKS } from '../../config/links'
import { SAFI_FEATURES } from '../../data/safi'

export default function Safi() {
  return (
    <>
      <DarkHero
        compact
        mark={<ProductMark product="safi" size="lg" />}
        name="Safi AI"
        headline="Infrastructure powering modern financial services."
        text="Safi AI is a conversational AI designed to streamline your workflow, answer complex questions and drive productivity through natural, intelligent interactions."
        primary={{ label: 'Start chatting now', href: EXTERNAL_LINKS.registerSafi }}
        secondary={{ label: 'See what it can do', href: '#features' }}
      />

      <FeatureCards id="features" title="Intelligence for financial work" items={SAFI_FEATURES} columns={2} tone="tinted" />

      <SafiVoiceSection />

      <PricingTeaser
        product="safi"
        title="Choose how Safi AI grows with you"
        intro="Start with the AI platform, then add the capabilities your team needs. Plans are billed monthly."
        tiers={[
          { name: 'Starter', text: 'Core conversational AI with 5,000 messages/month.' },
          { name: 'Growth', text: 'More capacity, advanced models and custom personalities.', popular: true },
          { name: 'Complete', text: 'All Safi modules, integrations and enterprise controls.' },
        ]}
        label="View Safi AI pricing"
      />

      <ExploreProducts current="safi" />

      <CallToAction
        title="Ready to experience Safi AI?"
        text="Start a conversation, or talk to our team about your use case."
        primary={{ label: 'Start chatting now', href: EXTERNAL_LINKS.registerSafi }}
        secondary={{ label: 'Talk to sales', to: '/contact' }}
      />
    </>
  )
}
