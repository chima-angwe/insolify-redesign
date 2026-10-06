import Button from '../../ui/Button'
import { pricingLink } from '../../../config/links'
import type { PricingProduct } from '../../../config/links'
import styles from './PricingTeaser.module.css'

type Tier = { name: string; text: string }

type PricingTeaserProps = {
  product: PricingProduct
  title: string
  intro: string
  note?: string
  label: string
  tiers?: Tier[]
}

export default function PricingTeaser({
  product,
  title,
  intro,
  note,
  label,
  tiers,
}: PricingTeaserProps) {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.box}>
        <p className={styles.eyebrow}>Pricing</p>
        <h2>{title}</h2>
        <p className={styles.intro}>{intro}</p>

        {tiers && tiers.length > 0 && (
          <ul className={styles.tiers}>
            {tiers.map((t) => (
              <li key={t.name} className={styles.tier}>
                <strong>{t.name}</strong>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.cta}>
          <Button to={pricingLink(product)}>{label}</Button>
          {note && <p className={styles.note}>{note}</p>}
        </div>
      </div>
    </section>
  )
}