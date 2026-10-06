import { SECURITY_POINTS } from '../../../data/capabilities'
import styles from './Security.module.css'

export default function Security() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Built for regulated financial institutions</h2>
          <p>Security and compliance are part of the platform from the start.</p>
        </header>

        <ul className={styles.grid}>
          {SECURITY_POINTS.map((p, i) => (
            <li key={p.title} className={styles.item}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}