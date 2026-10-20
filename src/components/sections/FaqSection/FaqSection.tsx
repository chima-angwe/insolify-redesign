import FaqItem from './FaqItem'
import styles from './FaqSection.module.css'

type Props = {
  title?: string
  eyebrow?: string
  align?: 'center' | 'start'
  indicator?: 'chevron' | 'plus'
  items: { q: string; a: string }[]
  tone?: 'plain' | 'tinted'
}

export default function FaqSection({
  title = 'Frequently asked questions',
  eyebrow,
  align = 'center',
  indicator = 'chevron',
  items,
  tone = 'plain',
}: Props) {
  return (
    <section className={`${styles.section} ${tone === 'tinted' ? styles.tinted : ''}`}>
      <div className={`${styles.inner} ${align === 'start' ? styles.start : ''}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2>{title}</h2>
        <div className={styles.list}>
          {items.map((f) => <FaqItem key={f.q} question={f.q} answer={f.a} indicator={indicator} />)}
        </div>
      </div>
    </section>
  )
}
