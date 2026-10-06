import styles from './Steps.module.css'

type Step = { title: string; text: string }

type Props = {
  id?: string
  title: string
  steps: Step[]
  tone?: 'plain' | 'tinted'
}

export default function Steps({ id, title, steps, tone = 'plain' }: Props) {
  return (
    <section id={id} className={`${styles.section} ${tone === 'tinted' ? styles.tinted : ''}`}>
      <div className={styles.inner}>
        <h2>{title}</h2>
        <ol className={styles.grid}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.card}>
              <span className={styles.num}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}