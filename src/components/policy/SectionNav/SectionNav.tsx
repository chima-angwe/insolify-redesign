import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'
import type { LucideIcon } from 'lucide-react'
import styles from './SectionNav.module.css'

type Item = { id: string; label: string; icon: LucideIcon }

type Props = {
  items: Item[]
  active: string
  onSelect: (id: string) => void
  navRef: RefObject<HTMLElement | null>
}

export default function SectionNav({ items, active, onSelect, navRef }: Props) {
  const listRef = useRef<HTMLUListElement>(null)

  // keep the active tab centred in the strip on narrow screens
  useEffect(() => {
    const list = listRef.current
    const tab = list?.querySelector<HTMLElement>('[data-active="true"]')
    if (!list || !tab) return
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2
    list.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  return (
    <nav ref={navRef} className={styles.nav} aria-label="On this page">
      <ul ref={listRef} className={styles.list}>
        {items.map(({ id, label, icon: Icon }) => {
          const on = id === active
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                data-active={on}
                aria-current={on ? 'true' : undefined}
                className={`${styles.tab} ${on ? styles.on : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  onSelect(id)
                }}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}