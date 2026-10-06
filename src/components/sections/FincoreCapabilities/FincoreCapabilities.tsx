import { Users, CreditCard, ShieldCheck, Smartphone, Check } from 'lucide-react'
import { CAPABILITIES } from '../../../data/capabilities'
import styles from './FincoreCapabilities.module.css'

const ICONS = {
  accounts: Users,
  payments: CreditCard,
  risk: ShieldCheck,
  channels: Smartphone,
}

export default function FincoreCapabilities() {
  return (
    <section className={styles.section} id="capabilities">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>What Fincore covers</h2>
          <p>Four areas of banking, built to work together.</p>
        </header>

        <div className={styles.grid}>
          {CAPABILITIES.map((c) => {
            const Icon = ICONS[c.id]
            return (
              <article key={c.id} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.icon}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3>{c.title}</h3>
                </div>
                <ul className={styles.list}>
                  {c.items.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}