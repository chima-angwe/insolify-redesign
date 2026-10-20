import Button from '../../ui/Button'
import { ArrowRight, Check } from 'lucide-react'
import { pricingLink } from '../../../config/links'
import type { PricingProduct } from '../../../config/links'
import styles from './PricingTeaser.module.css'

type Tier = { name: string; text: string; popular?: boolean }

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
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Pricing overview</p>
          <h2>{title}</h2>
          <p className={styles.intro}>{intro}</p>
          {note && <p className={styles.note}>{note}</p>}
        </div>

        <div className={styles.details}>
          {tiers && tiers.length > 0 && (
            <ul className={styles.tiers} aria-label="Plan options">
              {tiers.map((t, index) => (
                <li key={t.name} className={`${styles.tier} ${t.popular ? styles.popular : ''}`}>
                  <span className={styles.tierIndex}>0{index + 1}</span>
                  <div><strong>{t.name}</strong><span>{t.text}</span></div>
                  {t.popular && <span className={styles.recommended}><Check size={12} /> Popular</span>}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.cta}>
            <span>Compare features and build your estimate</span>
            <Button to={pricingLink(product)}>{label}<ArrowRight size={16} aria-hidden="true" /></Button>
          </div>
        </div>
      </div>
    </section>
  )
}
