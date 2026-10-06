import { Check } from 'lucide-react'
import styles from './CultureSplit.module.css'

type Impact = { label: string; value: string; text: string }

type Props = {
  title: string
  beliefsTitle: string
  beliefs: string[]
  impactTitle: string
  impact: Impact[]
}

export default function CultureSplit({ title, beliefsTitle, beliefs, impactTitle, impact }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2>{title}</h2>
        <div className={styles.grid}>
          <div>
            <h3>{beliefsTitle}</h3>
            <ul className={styles.beliefs}>
              {beliefs.map((b) => (
                <li key={b}>
                  <Check size={18} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{impactTitle}</h3>
            <div className={styles.impact}>
              {impact.map((i) => (
                <article key={i.label} className={styles.card}>
                  <p className={styles.label}>{i.label}</p>
                  <p className={styles.value}>{i.value}</p>
                  <p className={styles.note}>{i.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}