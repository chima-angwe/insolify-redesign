import { ChevronDown } from 'lucide-react'
import styles from './FaqSection.module.css'

type Props = {
  title?: string
  items: { q: string; a: string }[]
  tone?: 'plain' | 'tinted'
}

export default function FaqSection({
  title = 'Frequently asked questions',
  items,
  tone = 'plain',
}: Props) {
  return (
    <section className={`${styles.section} ${tone === 'tinted' ? styles.tinted : ''}`}>
      <div className={styles.inner}>
        <h2>{title}</h2>
        <div className={styles.list}>
          {items.map((f) => (
            <details key={f.q} className={styles.item}>
              <summary>
                {f.q}
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}