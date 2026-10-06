import { ArrowRight } from 'lucide-react'
import styles from './PressCards.module.css'

type Item = { source: string; title: string; text: string; url: string }

type Props = { title: string; intro: string; items: Item[] }

export default function PressCards({ title, intro, items }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <p>{intro}</p>
        </header>

        <div className={styles.grid}>
          {items.map((i) => (
            <article key={i.title} className={styles.card}>
              <p className={styles.source}>{i.source}</p>
              <h3>{i.title}</h3>
              <p className={styles.text}>{i.text}</p>
              {i.url && (
                <a href={i.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Read article <ArrowRight size={16} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}