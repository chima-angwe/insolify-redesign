import { useSearchParams } from 'react-router'

const TABS = ['fincore', 'safi', 'settle'] as const
export type PricingTab = (typeof TABS)[number]

export function usePricingTab() {
  const [params, setParams] = useSearchParams()
  const q = params.get('product')
  const tab: PricingTab = (TABS as readonly string[]).includes(q ?? '')
    ? (q as PricingTab)
    : 'fincore'

  const setTab = (t: PricingTab) => setParams({ product: t }, { replace: true })
  return { tab, setTab }
}