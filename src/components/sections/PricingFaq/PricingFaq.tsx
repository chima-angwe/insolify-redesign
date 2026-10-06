import { ChevronDown } from 'lucide-react'
import { PRICING_FAQS } from '../../../data/pricing'
import styles from './PricingFaq.module.css'

export default function PricingFaq() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2>Frequently asked questions</h2>
        <div className={styles.list}>
          {PRICING_FAQS.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary>
                {f.q}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}