import type { CSSProperties, ReactNode } from 'react'
import styles from './CardMotif.module.css'

export type Motif =
  | 'bars'
  | 'phone'
  | 'transfer'
  | 'card'
  | 'network'
  | 'keypad'
  | 'chat'
  | 'shield'
  | 'clock'
  | 'globe'

const i = (n: number) => ({ '--i': n }) as CSSProperties

const MOTIFS: Record<Motif, ReactNode> = {
  bars: (
    <>
      <path d="M4 44h56" />
      {[14, 24, 18, 32, 26].map((h, n) => (
        <rect key={n} className={styles.bar} style={i(n)} x={9 + n * 11} y={44 - h} width="7" height={h} rx="1.5" />
      ))}
    </>
  ),
  phone: (
    <>
      <rect x="21" y="3" width="22" height="42" rx="5" />
      <path d="M28 8h8" />
      <path className={styles.blink} style={i(0)} d="M27 20h10" />
      <path className={styles.blink} style={i(1)} d="M27 27h10" />
      <path className={styles.blink} style={i(2)} d="M27 34h6" />
    </>
  ),
  transfer: (
    <>
      <path className={styles.right} d="M10 18h38m0 0-8-8m8 8-8 8" />
      <path className={styles.left} d="M54 32H16m0 0 8-8m-8 8 8 8" />
    </>
  ),
  card: (
    <>
      <rect x="6" y="8" width="52" height="32" rx="5" />
      <rect x="13" y="16" width="10" height="8" rx="2" />
      <path d="M13 33h18" />
      <path className={styles.shine} d="M38 10l-9 28" />
    </>
  ),
  network: (
    <>
      <path d="M32 24 10 8M32 24l22-16M32 24 10 40M32 24l22 16" />
      <circle className={`${styles.fill} ${styles.pulse}`} cx="32" cy="24" r="5" />
      {[
        [10, 8],
        [54, 8],
        [10, 40],
        [54, 40],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} className={styles.fill} cx={x} cy={y} r="3" />
      ))}
    </>
  ),
  keypad: (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <circle
          key={n}
          className={`${styles.fill} ${styles.blink}`}
          style={i(n)}
          cx={20 + (n % 3) * 12}
          cy={10 + Math.floor(n / 3) * 14}
          r="2.6"
        />
      ))}
    </>
  ),
  chat: (
    <>
      <rect x="5" y="5" width="38" height="22" rx="6" />
      <path d="M13 27v8l8-8" />
      {[0, 1, 2].map((n) => (
        <circle key={n} className={`${styles.fill} ${styles.blink}`} style={i(n)} cx={16 + n * 8} cy="16" r="2.2" />
      ))}
      <rect x="30" y="32" width="29" height="13" rx="5" />
    </>
  ),
  shield: (
    <>
      <path d="M32 3l19 7v14c0 11-8 17-19 21C21 41 13 35 13 24V10z" />
      <path className={styles.check} pathLength={1} d="M23 24l7 7 12-14" />
    </>
  ),
  clock: (
    <>
      <circle cx="32" cy="24" r="19" />
      <path d="M32 11v13" />
      <path className={styles.hand} d="M32 24l10 6" />
    </>
  ),
  globe: (
    <>
      <circle cx="32" cy="24" r="19" />
      <path d="M13 24h38" />
      <ellipse className={styles.turn} cx="32" cy="24" rx="9" ry="19" />
    </>
  ),
}

export default function CardMotif({ kind }: { kind: Motif }) {
  return (
    <svg
      className={styles.motif}
      viewBox="0 0 64 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {MOTIFS[kind]}
    </svg>
  )
}