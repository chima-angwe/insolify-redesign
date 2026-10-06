import { ArrowRight } from 'lucide-react'
import ProductMark from '../../components/ui/ProductMark'
import ProductHero from '../../components/sections/ProductHero'
import FeatureCards from '../../components/sections/FeatureCards'
import ChecklistCards from '../../components/sections/ChecklistCards'
import PricingTeaser from '../../components/sections/PricingTeaser'
import CallToAction from '../../components/sections/CallToAction'
import { EXTERNAL_LINKS } from '../../config/links'
import { PRICING } from '../../data/pricing'
import { SAFI_STATS, SAFI_FEATURES, SAFI_CAPABILITIES } from '../../data/safi'
import styles from './Safi.module.css'

/* Static preview only. The real assistant is the chat button on the site. */
function ChatPreview() {
  return (
    <div className={styles.chat} aria-hidden="true">
      <div className={styles.head}>
        <ProductMark product="safi" size="sm" />
        <div>
          <strong>Safi AI Assistant</strong>
          <small>Online, ready to help</small>
        </div>
        <em>Preview</em>
      </div>
      <div className={styles.body}>
        <p className={styles.bubble}>
          Hello! I'm Safi AI, your intelligent assistant. How can I help you today?
        </p>
      </div>
      <div className={styles.input}>
        <span>Type your message...</span>
        <span className={styles.send}>
          <ArrowRight size={16} />
        </span>
      </div>
    </div>
  )
}

export default function Safi() {
  return (
    <>
      <ProductHero
        icon={<ProductMark product="safi" size="lg" />}
        name="Safi AI"
        headline="Meet your intelligent assistant"
        text="Safi AI is a cutting-edge conversational AI designed to streamline your workflow, answer complex questions, and drive productivity through natural, intelligent interactions."
        stats={SAFI_STATS}
        primary={{ label: 'Start chatting now', href: EXTERNAL_LINKS.registerSafi }}
        secondary={{ label: 'Learn more', href: '#features' }}
        visual={<ChatPreview />}
      />

      <FeatureCards
        id="features"
        title="Powerful features"
        items={SAFI_FEATURES}
        columns={3}
        tone="tinted"
      />

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