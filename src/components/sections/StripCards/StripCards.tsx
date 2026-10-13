import type { CSSProperties } from 'react'
import CardMotif from '../../ui/CardMotif'
import type { Motif } from '../../ui/CardMotif/CardMotif'
import styles from './StripCards.module.css'

export type StripCard = {
  tone: 'yellow' | 'light' | 'dark'
  label: string
  title: string
  text: string
  motif: Motif
}

const HEIGHTS = [15, 12.5, 14, 11.5, 13.5, 12] // uneven on purpose

function Card({ card, index, extra }: { card: StripCard; index: number; extra: boolean }) {
  const cls = `${styles.card} ${styles[card.tone]} ${extra ? styles.dup : ''}`
  const vars = { '--i': index, '--h': `${HEIGHTS[index % HEIGHTS.length]}rem` } as CSSProperties
  return (
    <li className={cls} style={vars} aria-hidden={extra || undefined}>
      <p className={styles.label}>{card.label}</p>
      <div className={styles.art}>
        <CardMotif kind={card.motif} />
      </div>
      <div>
        <h2>{card.title}</h2>
        <p className={styles.text}>{card.text}</p>
      </div>
    </li>
  )
}

export default function StripCards({ cards }: { cards: StripCard[] }) {
  // three copies make the loop seamless even on very wide screens
  return (
    <div className={styles.strip}>
      <ul className={styles.track}>
        {[0, 1, 2].flatMap((copy) =>
          cards.map((card, n) => (
            <Card key={`${copy}-${card.label}`} card={card} index={n} extra={copy > 0} />
          )),
        )}
      </ul>
    </div>
  )
}