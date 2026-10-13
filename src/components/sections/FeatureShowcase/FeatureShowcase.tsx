import { useRef, useState } from 'react'
import type { AnimationEvent, KeyboardEvent } from 'react'
import CardMotif from '../../ui/CardMotif'
import { SHOWCASE } from '../../../data/showcase'
import styles from './FeatureShowcase.module.css'

export default function FeatureShowcase() {
  const [i, setI] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const item = SHOWCASE[i]

  if (!item) return null

  const count = SHOWCASE.length
  const next = () => setI((n) => (n + 1) % count)

  function onKey(e: KeyboardEvent, n: number) {
    let to = n
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') to = (n + 1) % count
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') to = (n - 1 + count) % count
    else return
    e.preventDefault()
    setI(to)
    tabs.current[to]?.focus()
  }

  // the progress bar finishing is what moves to the next item, so pausing it pauses everything
  function onProgressEnd(e: AnimationEvent) {
    if (e.target === e.currentTarget) next()
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Run your whole bank on one platform</h2>
          <p>Pick a module to see what it does.</p>
        </header>

        <div className={styles.grid}>
          <ul className={styles.list} role="tablist" aria-orientation="vertical" aria-label="Fincore modules">
            {SHOWCASE.map((s, n) => {
              const on = n === i
              return (
                <li key={s.id} className={`${styles.item} ${on ? styles.on : ''}`}>
                  <button
                    ref={(el) => {
                      tabs.current[n] = el
                    }}
                    type="button"
                    role="tab"
                    id={`showcase-tab-${s.id}`}
                    aria-selected={on}
                    aria-controls="showcase-panel"
                    tabIndex={on ? 0 : -1}
                    className={styles.tab}
                    onClick={() => setI(n)}
                    onKeyDown={(e) => onKey(e, n)}
                  >
                    {s.label}
                  </button>

                  <div className={styles.detailWrap}>
                    <div className={styles.detailInner}>
                      <div className={styles.detail}>
                        <p>{s.description}</p>
                        <ul>
                          {s.tags.map((t) => (
                            <li key={t}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {on && <span key={i} className={styles.progress} onAnimationEnd={onProgressEnd} aria-hidden="true" />}
                </li>
              )
            })}
          </ul>

          <div
            role="tabpanel"
            id="showcase-panel"
            aria-labelledby={`showcase-tab-${item.id}`}
            className={styles.panel}
          >
            <div key={item.id} className={styles.stage}>
              {item.image ? (
                <img src={item.image} alt={`${item.label} in Fincore`} />
              ) : (
                <>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.art}>
                    <CardMotif kind={item.motif} />
                  </div>
                  <strong>{item.label}</strong>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}