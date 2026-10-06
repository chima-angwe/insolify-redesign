import { Check } from 'lucide-react'
import Button from '../../ui/Button'
import { formatMoney } from '../../../lib/format'
import type { PricingProductData } from '../../../data/pricing'
import styles from './PricingPlans.module.css'

type Props = { product: PricingProductData }

export default function PricingPlans({ product }: Props) {
  const money = (n: number) => formatMoney(n, product.currency)
  const suffix = product.period === 'month' ? '/mo' : '/yr'

  return (
    <section className={styles.section} id="plans">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>{product.name} plans</h2>
          <p>Prefer a ready-made bundle? Pick a plan, or build your own estimate above.</p>
        </header>

        <div className={styles.grid}>
          {product.tiers.map((t) => {
            const mods = product.modules.filter((m) => t.moduleIds.includes(m.id))
            const setup = mods.reduce((sum, m) => sum + m.setup, 0)
            const price = mods.reduce((sum, m) => sum + m.price, 0)
            return (
              <article
                key={t.id}
                className={`${styles.card} ${t.popular ? styles.popular : ''}`}
              >
                {t.popular && <span className={styles.badge}>Most common</span>}
                <h3>{t.name}</h3>
                <p className={styles.blurb}>{t.blurb}</p>
                <p className={styles.setup}>
                  {setup > 0 ? `${money(setup)} one-time setup` : '\u00a0'}
                </p>
                <p className={styles.price}>
                  <strong>{money(price)}</strong>
                  <span>{suffix}</span>
                </p>
                <ul className={styles.list}>
                  {mods.map((m) => (
                    <li key={m.id}>
                      <Check size={16} aria-hidden="true" />
                      {m.name}
                    </li>
                  ))}
                </ul>
                <div className={styles.cta}>
                  <Button
                    to={product.getStarted.to}
                    href={product.getStarted.href}
                    variant={t.popular ? 'primary' : 'secondary'}
                  >
                    Start with {t.name}
                  </Button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}