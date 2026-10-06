import type { LucideIcon } from 'lucide-react'
import styles from './FeatureCards.module.css'

type Item = { icon: LucideIcon; title: string; text: string }

type Props = {
  id?: string
  title: string
  intro?: string
  items: Item[]
  columns?: 2 | 3 | 4
  tone?: 'plain' | 'tinted'
  centered?: boolean
}

export default function FeatureCards({
  id,
  title,
  intro,
  items,
  columns = 3,
  tone = 'plain',
  centered = false,
}: Props) {
  const cols = columns === 4 ? styles.cols4 : columns === 2 ? styles.cols2 : styles.cols3

  return (
    <section id={id} className={`${styles.section} ${tone === 'tinted' ? styles.tinted : ''}`}>
      <div className={styles.inner}>
        <header className={`${styles.header} ${centered ? styles.centered : ''}`}>
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </header>

        <div className={`${styles.grid} ${cols}`}>
          {items.map(({ icon: Icon, title: t, text }) => (
            <article key={t} className={`${styles.card} ${centered ? styles.centered : ''}`}>
              <span className={styles.icon}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>{t}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}