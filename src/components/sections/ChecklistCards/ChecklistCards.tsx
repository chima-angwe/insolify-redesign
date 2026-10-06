import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import styles from './ChecklistCards.module.css'

type Group = { icon: LucideIcon; title: string; items: string[] }

type Props = {
  id?: string
  title: string
  intro?: string
  groups: Group[]
  columns?: 2 | 3
  tone?: 'plain' | 'tinted'
}

export default function ChecklistCards({
  id,
  title,
  intro,
  groups,
  columns = 2,
  tone = 'plain',
}: Props) {
  return (
    <section id={id} className={`${styles.section} ${tone === 'tinted' ? styles.tinted : ''}`}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>

        <div className={`${styles.grid} ${columns === 3 ? styles.cols3 : styles.cols2}`}>
          {groups.map(({ icon: Icon, title: t, items }) => (
            <article key={t} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.icon}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{t}</h3>
              </div>
              <ul className={styles.list}>
                {items.map((item) => (
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