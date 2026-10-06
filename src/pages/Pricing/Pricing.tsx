import { usePricingTab } from '../../hooks/usePricingTab'
import { PRICING } from '../../data/pricing'
import PricingTabs from '../../components/sections/PricingTabs'
import PricingEstimator from '../../components/sections/PricingEstimator'
import PricingPlans from '../../components/sections/PricingPlans'
import PricingIncludes from '../../components/sections/PricingIncludes'
import PricingFaq from '../../components/sections/PricingFaq'
import styles from './Pricing.module.css'

export default function Pricing() {
  const { tab, setTab } = usePricingTab()
  const product = PRICING[tab]

  return (
    <>
      <section className={styles.intro}>
        <h1>Pricing</h1>
        <p>Choose a ready-made plan or build your own estimate, one product at a time.</p>
      </section>

      <PricingTabs tab={tab} onChange={setTab} />

      {/* key resets the checked modules and billing toggle when the product changes */}
      <PricingEstimator key={product.id} product={product} />
      <PricingPlans product={product} />
      <PricingIncludes />
      <PricingFaq />
    </>
  )
}