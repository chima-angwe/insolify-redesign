import DarkHero from '../../components/sections/DarkHero'
import type { StripCard } from '../../components/sections/StripCards/StripCards'
import ProductMark from '../../components/ui/ProductMark'
import FincoreBenefits from '../../components/sections/FincoreBenefits'
import FincoreModules from '../../components/sections/FincoreModules'
import PricingTeaser from '../../components/sections/PricingTeaser'
import CallToAction from '../../components/sections/CallToAction'
import { PRICING } from '../../data/pricing'

// Each card repeats a fact that is already on the live Fincore page.
const CARDS: StripCard[] = [
  { tone: 'yellow', label: 'Modules', title: '12 modules', text: 'Deploy them one at a time', motif: 'bars' },
  { tone: 'light', label: 'Deployment', title: '4 to 6 weeks', text: 'Deployment timeline', motif: 'clock' },
  { tone: 'dark', label: 'Channels', title: 'Mobile, web, USSD', text: 'Under your own brand', motif: 'phone' },
  { tone: 'light', label: 'Interbank', title: 'NIBSS and Interswitch', text: 'Real-time transfers', motif: 'transfer' },
  { tone: 'yellow', label: 'Compliance', title: 'Audit trails', text: 'Built-in regulatory tools', motif: 'shield' },
  { tone: 'dark', label: 'Agency banking', title: 'Field agents and POS', text: 'Reach beyond branches', motif: 'network' },
]

export default function Fincore() {
  return (
    <>
      <DarkHero
        compact
        mark={<ProductMark product="fincore" size="lg" />}
        name="Fincore"
        headline="One platform for every part of your bank"
        text="FINCORE is a core banking platform designed by Insolify for microfinance banks, fintech companies and finance houses. Built on secure, scalable cloud architecture, it works across every banking channel."
        primary={{ label: 'Request a demo', to: '/contact' }}
        secondary={{ label: 'Explore modules', href: '#modules' }}
        cards={CARDS}
      />
      <FincoreBenefits />
      <FincoreModules />
      <PricingTeaser
        product="fincore"
        title="See Fincore pricing"
        intro="Three plans, from the base platform to every module. See what each includes and choose the one that fits your institution."
        tiers={PRICING.fincore.tiers.map((t) => ({ name: t.name, text: t.blurb }))}
        note="Pricing based on customer limits. Deployment timeline: 4-6 weeks. Valid license (CBN or Partnership for non-compliant) and dedicated domain name required."
        label="View Fincore pricing"
      />
      <CallToAction />
    </>
  )
}