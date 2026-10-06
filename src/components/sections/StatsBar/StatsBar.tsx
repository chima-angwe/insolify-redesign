import styles from './StatsBar.module.css'

type Props = { title: string; stats: { value: string; label: string }[] }

export default function StatsBar({ title, stats }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2>{title}</h2>
        <dl className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}