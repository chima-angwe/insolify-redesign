import { Fragment } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '../../ui/Button'
import StripCards from '../StripCards'
import type { StripCard } from '../StripCards/StripCards'
import styles from './DarkHero.module.css'

type Action = { label: string; to?: string; href?: string }

type Props = {
  mark?: ReactNode
  name?: string
  headline: string
  text: string
  primary: Action
  secondary?: Action
  cards: StripCard[]
  compact?: boolean
}

export default function DarkHero({
  mark,
  name,
  headline,
  text,
  primary,
  secondary,
  cards,
  compact = false,
}: Props) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={styles.inner}>
        {mark && (
          <p className={styles.brand}>
            {mark}
            {name}
          </p>
        )}

        <h1 aria-label={headline}>
          {headline.split(' ').map((word, n) => (
            <Fragment key={n}>
              <span className={styles.word} aria-hidden="true">
                <span style={{ '--n': n } as CSSProperties}>{word}</span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>

        <p className={styles.sub}>{text}</p>

        <div className={styles.actions}>
          <Button to={primary.to} href={primary.href}>
            {primary.label} <ArrowRight size={18} aria-hidden="true" />
          </Button>
          {secondary && (
            <Button to={secondary.to} href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>

      <StripCards cards={cards} />
    </section>
  )
}