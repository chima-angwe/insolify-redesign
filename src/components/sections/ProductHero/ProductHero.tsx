import type { ReactNode } from 'react'
import Button from '../../ui/Button'
import styles from './ProductHero.module.css'

type Stat = { value: string; label: string }
type Action = { label: string; to?: string; href?: string }

type ProductHeroProps = {
  icon: ReactNode
  name: string
  headline: string
  text: string
  stats?: Stat[]
  footnote?: string
  primary: Action
  secondary?: Action
  visual: ReactNode
}

export default function ProductHero({
  icon,
  name,
  headline,
  text,
  stats,
  footnote,
  primary,
  secondary,
  visual,
}: ProductHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>
            <span className={styles.iconBox}>{icon}</span>
            {name}
          </p>
          <h1 className={styles.headline}>{headline}</h1>
          <p className={styles.text}>{text}</p>

          <div className={styles.actions}>
            <Button to={primary.to} href={primary.href}>
              {primary.label}
            </Button>
            {secondary && (
              <Button to={secondary.to} href={secondary.href} variant="secondary">
                {secondary.label}
              </Button>
            )}
          </div>

          {footnote && <p className={styles.footnote}>{footnote}</p>}

          {stats && stats.length > 0 && (
            <ul className={styles.stats}>
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {visual}
      </div>
    </section>
  )
}