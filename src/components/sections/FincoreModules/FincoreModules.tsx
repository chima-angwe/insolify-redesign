import { useState } from 'react'
import {
  Landmark,
  CreditCard,
  ArrowLeftRight,
  Wallet,
  Store,
  Hash,
  Monitor,
  LayoutTemplate,
  Globe,
  Smartphone,
  Users,
  Database,
  ChevronDown,
} from 'lucide-react'
import { MODULES, CORE_FEATURES } from '../../../data/fincore'
import type { ModuleIcon } from '../../../data/fincore'
import styles from './FincoreModules.module.css'

const ICONS: Record<ModuleIcon, typeof Landmark> = {
  landmark: Landmark,
  card: CreditCard,
  transfer: ArrowLeftRight,
  wallet: Wallet,
  store: Store,
  hash: Hash,
  monitor: Monitor,
  layout: LayoutTemplate,
  globe: Globe,
  phone: Smartphone,
  users: Users,
  database: Database,
}

// How many core features show before "Show all". Set to CORE_FEATURES.length to show everything.
const INITIAL_FEATURES = 6

export default function FincoreModules() {
  const [showAll, setShowAll] = useState(false)

  const canToggle = CORE_FEATURES.length > INITIAL_FEATURES
  const visible = showAll || !canToggle ? CORE_FEATURES : CORE_FEATURES.slice(0, INITIAL_FEATURES)
  const collapsed = canToggle && !showAll

  return (
    <section className={styles.section} id="modules">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Fincore modules</h2>
          <p>
            Each module is deployable independently, so institutions can scale progressively
            while keeping full operational control and business continuity.
          </p>
        </header>

        <div className={styles.grid}>
          {MODULES.map((m) => {
            const Icon = ICONS[m.icon]
            return (
              <article
                key={m.name}
                className={`${styles.card} ${m.featured ? styles.featured : ''}`}
              >
                <span className={styles.icon}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{m.name}</h3>
                <p>{m.description}</p>
                <ul className={styles.tags}>
                  {m.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className={styles.core}>
          <header className={styles.coreHeader}>
            <h3>Inside the Core Banking Module</h3>
            <p>The features that run day-to-day banking operations.</p>
          </header>

          <div
            id="core-features-list"
            className={`${styles.features} ${collapsed ? styles.collapsed : ''}`}
          >
            {visible.map((f) => (
              <div key={f.title} className={styles.feature}>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            ))}
          </div>

          {canToggle && (
            <button
              type="button"
              className={styles.toggle}
              aria-expanded={showAll}
              aria-controls="core-features-list"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show fewer features' : `Show all ${CORE_FEATURES.length} features`}
              <ChevronDown
                size={18}
                aria-hidden="true"
                className={showAll ? styles.up : undefined}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}