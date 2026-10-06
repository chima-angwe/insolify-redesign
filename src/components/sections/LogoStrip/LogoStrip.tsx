import { CLIENTS } from '../../../data/clients'
import styles from './LogoStrip.module.css'

export default function LogoStrip() {
  return (
    <section className={styles.strip} aria-label="Our clients">
      <p className={styles.label}>Trusted by</p>
      <ul className={styles.list}>
        {CLIENTS.map((c) => (
          <li key={c.name}>
            <img src={c.logo} alt={c.name} loading="lazy" />
          </li>
        ))}
      </ul>
    </section>
  )
}