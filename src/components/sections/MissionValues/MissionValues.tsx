import type { LucideIcon } from 'lucide-react'
import styles from './MissionValues.module.css'

type Item = { icon: LucideIcon; title: string; text: string }

export default function MissionValues({ items }: { items: Item[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className={styles.item}>
            <span className={styles.icon}>
              <Icon size={24} aria-hidden="true" />
            </span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}