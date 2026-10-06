import type { ReactNode } from 'react'
import { ChevronDown, CircleCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import styles from './PolicyBlocks.module.css'

export function Panel({
  children,
  tone = 'plain',
}: {
  children: ReactNode
  tone?: 'plain' | 'tinted' | 'info'
}) {
  return (
    <div className={tone === 'plain' ? styles.panel : `${styles.panel} ${styles[tone]}`}>
      {children}
    </div>
  )
}

export function Columns({ children }: { children: ReactNode }) {
  return <div className={styles.columns}>{children}</div>
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className={styles.lead}>{children}</p>
}

export function SubHeading({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return <h3 className={dot ? `${styles.sub} ${styles.dot}` : styles.sub}>{children}</h3>
}

export function ItemGrid({
  items,
  icon: Icon = CircleCheck,
  tiles = false,
  single = false,
}: {
  items: string[]
  icon?: LucideIcon
  tiles?: boolean
  single?: boolean
}) {
  const cls = [styles.items, tiles ? styles.tiles : '', single ? '' : styles.two]
    .filter(Boolean)
    .join(' ')
  return (
    <ul className={cls}>
      {items.map((i) => (
        <li key={i}>
          <Icon size={18} aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  )
}

type NumItem = { title?: string; text: string }

export function NumberedList({
  items,
  variant = 'plain',
}: {
  items: NumItem[]
  variant?: 'plain' | 'tiles' | 'rows'
}) {
  const cls = [styles.numbers, variant !== 'plain' ? styles[variant] : '', variant === 'rows' ? '' : styles.two]
    .filter(Boolean)
    .join(' ')
  return (
    <ol className={cls}>
      {items.map((i, n) => (
        <li key={i.title ?? i.text}>
          <span className={styles.num}>{n + 1}</span>
          {i.title ? (
            <div>
              <strong>{i.title}</strong>
              <p>{i.text}</p>
            </div>
          ) : (
            <span>{i.text}</span>
          )}
        </li>
      ))}
    </ol>
  )
}

export function Notice({
  tone,
  title,
  label,
  text,
  bullets,
}: {
  tone: 'danger' | 'warn'
  title?: string
  label?: string
  text?: string
  bullets?: string[]
}) {
  return (
    <div className={`${styles.notice} ${styles[tone]}`}>
      {title && <p className={styles.noticeTitle}>{title}</p>}
      {text && (
        <p className={styles.noticeText}>
          {label && <strong>{label} </strong>}
          {text}
        </p>
      )}
      {bullets && (
        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Items without a body are not shown, so an unfinished entry never appears as an empty box.
export function Accordion({ items }: { items: { title: string; body: string }[] }) {
  const shown = items.filter((i) => i.body)
  if (shown.length === 0) return null
  return (
    <div className={styles.accordion}>
      {shown.map((i) => (
        <details key={i.title} className={styles.item}>
          <summary>
            {i.title}
            <ChevronDown size={18} aria-hidden="true" />
          </summary>
          <p>{i.body}</p>
        </details>
      ))}
    </div>
  )
}

export function DetailCards({
  items,
}: {
  items: { icon?: LucideIcon; title: string; text: string }[]
}) {
  return (
    <ul className={styles.cards}>
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className={styles.card}>
          {Icon && (
            <span className={styles.cardIcon}>
              <Icon size={20} aria-hidden="true" />
            </span>
          )}
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  )
}

export function MiniFeatures({
  items,
}: {
  items: { icon: LucideIcon; title: string; text: string }[]
}) {
  return (
    <ul className={styles.mini}>
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title}>
          <span className={styles.miniIcon}>
            <Icon size={18} aria-hidden="true" />
          </span>
          <div>
            <strong>{title}</strong>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function StepList({
  items,
}: {
  items: { title: string; text: string; tag: string }[]
}) {
  return (
    <ol className={styles.steps}>
      {items.map((s, n) => (
        <li key={s.title} className={styles.step}>
          <span className={styles.stepNum}>{n + 1}</span>
          <div className={styles.stepBody}>
            <div className={styles.stepTop}>
              <strong>{s.title}</strong>
              <span className={styles.tag}>{s.tag}</span>
            </div>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function ContactCard({
  lead,
  heading,
  rows,
}: {
  lead: string
  heading: string
  rows: { label: string; value: string }[]
}) {
  const shown = rows.filter((r) => r.value)
  return (
    <Panel tone="tinted">
      <Lead>{lead}</Lead>
      <div className={styles.contact}>
        <h3>{heading}</h3>
        <dl>
          {shown.map((r) => (
            <div key={r.label}>
              <dt>{r.label}:</dt>
              <dd>{r.value.includes('@') ? <a href={`mailto:${r.value}`}>{r.value}</a> : r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Panel>
  )
}