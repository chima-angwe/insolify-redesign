import { PRICING, PRICING_ORDER } from '../../../data/pricing'
import ProductMark from '../../ui/ProductMark'
import type { PricingProduct } from '../../../config/links'
import styles from './PricingTabs.module.css'

type Props = {
  tab: PricingProduct
  onChange: (tab: PricingProduct) => void
}

export default function PricingTabs({ tab, onChange }: Props) {
  return (
    <div className={styles.bar}>
      <div className={styles.inner} role="tablist" aria-label="Choose a product">
        {PRICING_ORDER.map((id) => {
          const active = tab === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={active}
              className={`${styles.tab} ${active ? styles.active : ''}`}
              onClick={() => onChange(id)}
            >
              <ProductMark product={id} size="sm" />
              {PRICING[id].name}
            </button>
          )
        })}
      </div>
    </div>
  )
}