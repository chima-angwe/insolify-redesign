import { TRUST } from '../../../data/trust'
import styles from './TrustRow.module.css'

export default function TrustRow() {
  return (
    <section className={styles.row}>
      <dl className={styles.grid}>
        {TRUST.map((t) => (
          <div key={t.label} className={styles.card} data-reveal-item>
            <dd>{t.value}</dd>
            <dt>{t.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}