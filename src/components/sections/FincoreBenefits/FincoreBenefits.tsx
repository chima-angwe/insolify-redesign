import { Check } from 'lucide-react'
import { BENEFITS } from '../../../data/fincore'
import styles from './FincoreBenefits.module.css'

export default function FincoreBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>What Fincore enables</h2>
          <p>A platform built for modern, compliant and customer-focused banking.</p>
        </header>

        <div className={styles.grid}>
          {BENEFITS.map((b) => (
            <article key={b.title} className={styles.card}>
              <h3>{b.title}</h3>
              <ul>
                {b.items.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}