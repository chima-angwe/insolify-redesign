import { LOGOS } from '../../../config/logos'
import type { ProductKey } from '../../../config/logos'
import styles from './ProductMark.module.css'

// Safi AI shares the Insolify logomark. The Fincore and Settle logos are dark, so they sit on a white tile.
const MARKS: Record<ProductKey, { src: string; tone: 'light' | 'dark' }> = {
  fincore: { src: LOGOS.fincore, tone: 'light' },
  safi: { src: LOGOS.insolify, tone: 'dark' },
  settle: { src: LOGOS.settle, tone: 'light' },
}

type Props = { product: ProductKey; size?: 'sm' | 'md' | 'lg' }

export default function ProductMark({ product, size = 'md' }: Props) {
  const m = MARKS[product]
  return (
    <span className={`${styles.tile} ${styles[m.tone]} ${styles[size]}`}>
      <img src={m.src} alt="" aria-hidden="true" />
    </span>
  )
}