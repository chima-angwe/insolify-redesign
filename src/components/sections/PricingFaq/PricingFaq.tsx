import { PRICING_FAQS } from '../../../data/pricing'
import FaqSection from '../FaqSection'

export default function PricingFaq() {
  return <FaqSection items={PRICING_FAQS} tone="tinted" />
}
