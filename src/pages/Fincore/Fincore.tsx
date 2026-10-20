import DarkHero from '../../components/sections/DarkHero'
import ProductMark from '../../components/ui/ProductMark'
import FincoreBenefits from '../../components/sections/FincoreBenefits'
import FincoreModules from '../../components/sections/FincoreModules'
import PricingTeaser from '../../components/sections/PricingTeaser'
import CallToAction from '../../components/sections/CallToAction'
import ExploreProducts from '../../components/sections/ExploreProducts/ExploreProducts'

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
      />
      <FincoreBenefits />
      <FincoreModules />
      <PricingTeaser
        product="fincore"
        title="Find the right Fincore plan"
        intro="Compare annual plans, from core banking essentials to the full module suite."
        tiers={[
          { name: 'Starter', text: 'Core banking essentials to get your institution live.' },
          { name: 'Growth', text: 'Core platform plus popular banking modules.', popular: true },
          { name: 'Complete', text: 'Every available module in one platform.' },
        ]}
        note="Pricing based on customer limits. Deployment timeline: 4-6 weeks. Valid license (CBN or Partnership for non-compliant) and dedicated domain name required."
        label="View Fincore pricing"
      />
      <ExploreProducts current="fincore" />
      <CallToAction />
    </>
  )
}
