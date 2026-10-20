import { CLIENTS } from '../../../data/clients'
import styles from './LogoStrip.module.css'

export default function LogoStrip() {
  return (
    <section className={styles.strip} aria-label="Our clients">
      <p className={styles.label}>In business with reputable brands</p>
      <ul className={styles.list}>
        {CLIENTS.map((c) => (
          <li key={c.name} className={styles.slot}>
            <img
              src={c.logo}
              alt={c.name}
              loading="lazy"
              style={{ transform: `scale(${c.scale})` }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
