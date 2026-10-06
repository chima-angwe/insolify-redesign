import { useEffect, useRef, useState } from 'react'
import { UserPlus, ArrowLeftRight, CircleCheck, CreditCard } from 'lucide-react'
import ProductMark from '../../ui/ProductMark'
import { PRODUCTS } from '../../../data/products'
import styles from './HeroVisual.module.css'

// Illustrative labels only: no amounts, names or counts.
const EVENTS = [
  { icon: UserPlus, text: 'Account opened' },
  { icon: ArrowLeftRight, text: 'Transfer settled' },
  { icon: CircleCheck, text: 'Loan approved' },
  { icon: CreditCard, text: 'Card issued' },
]

const BARS = [38, 62, 48, 78, 58, 90, 68, 84]
const NAV = [0, 1, 2, 3, 4]

export default function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [event, setEvent] = useState(0)

  // cycle the activity message (skipped for reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setEvent((n) => (n + 1) % EVENTS.length), 3200)
    return () => window.clearInterval(id)
  }, [])

  // gentle tilt toward the pointer, only for a real mouse
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!mouse || calm) return

    let frame = 0
    const move = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        stage.style.setProperty('--ry', `${x * 8}deg`)
        stage.style.setProperty('--rx', `${-y * 6}deg`)
      })
    }
    const leave = () => {
      cancelAnimationFrame(frame)
      stage.style.setProperty('--rx', '0deg')
      stage.style.setProperty('--ry', '0deg')
    }

    stage.addEventListener('pointermove', move)
    stage.addEventListener('pointerleave', leave)
    return () => {
      cancelAnimationFrame(frame)
      stage.removeEventListener('pointermove', move)
      stage.removeEventListener('pointerleave', leave)
    }
  }, [])

  const current = EVENTS[event]
  const EventIcon = current.icon

  return (
    <div ref={stageRef} className={styles.stage} aria-hidden="true">
      <span className={styles.glow} />

      <div className={styles.panel}>
        <div className={styles.head}>
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <strong>Fincore</strong>
          <small>Illustration</small>
        </div>

        <div className={styles.body}>
          <div className={styles.side}>
            {NAV.map((n) => (
              <span key={n} className={n === 0 ? styles.sideOn : styles.sideItem} />
            ))}
          </div>

          <div className={styles.main}>
            <div className={styles.kpis}>
              {[0, 1, 2].map((n) => (
                <div key={n} className={styles.kpi} style={{ animationDelay: `${n * 0.4}s` }}>
                  <span />
                  <span />
                </div>
              ))}
            </div>

            <div className={styles.chart}>
              <div className={styles.bars}>
                {BARS.map((h, n) => (
                  <span
                    key={n}
                    className={styles.bar}
                    style={{ height: `${h}%`, ['--i' as string]: n }}
                  />
                ))}
              </div>
              <svg className={styles.spark} viewBox="0 0 240 80" role="presentation">
                <path
                  d="M4 62 C 30 52, 48 70, 76 42 S 128 48, 158 24 S 206 32, 234 12"
                  pathLength={1}
                />
                <circle cx="234" cy="12" r="4.5" />
              </svg>
            </div>

            <div className={styles.rows}>
              {[0, 1, 2].map((n) => (
                <div key={n} className={styles.row}>
                  <i />
                  <span />
                  <b />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {PRODUCTS.map((p) => (
        <div key={p.id} className={`${styles.chip} ${styles[p.id]}`}>
          <ProductMark product={p.id} size="sm" />
          <span>
            <strong>{p.name}</strong>
            <small>{p.category}</small>
          </span>
        </div>
      ))}

      <div key={event} className={styles.toast}>
        <EventIcon size={16} />
        {current.text}
      </div>
    </div>
  )
}