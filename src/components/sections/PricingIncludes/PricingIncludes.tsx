import { INCLUDES } from '../../../data/pricing'
import { ICONS } from '../../../lib/icons'
import styles from './PricingIncludes.module.css'

export default function PricingIncludes() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <p>Standard across every module</p>
        <h2>Every plan includes</h2>
      </header>
      <div className={styles.grid}>
        {INCLUDES.map((i) => {
          const Icon = ICONS[i.icon]
          return (
            <article key={i.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}