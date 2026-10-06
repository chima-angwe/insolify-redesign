import { Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import styles from './PolicyHero.module.css'

export type HeroCard = { icon: LucideIcon; title: string; text: string }
export type HeroStat = { value: string; label: string }
export type HeroProps = {
  icon: LucideIcon
  title: string
  lead: string
  updated: string
  cards?: HeroCard[]
  stats?: HeroStat[]
}

export default function PolicyHero({ icon: Icon, title, lead, updated, cards, stats }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span className={styles.badge}>
          <Icon size={34} aria-hidden="true" />
        </span>
        <h1>{title}</h1>
        <p className={styles.lead}>{lead}</p>
        <p className={styles.updated}>
          <Clock size={14} aria-hidden="true" />
          Last updated: {updated}
        </p>

        {cards && (
          <ul className={styles.cards}>
            {cards.map(({ icon: CardIcon, title: t, text }) => (
              <li key={t} className={styles.card}>
                <span className={styles.cardIcon}>
                  <CardIcon size={20} aria-hidden="true" />
                </span>
                <h2>{t}</h2>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        )}

        {stats && (
          <ul className={styles.cards}>
            {stats.map((s) => (
              <li key={s.label} className={styles.stat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}