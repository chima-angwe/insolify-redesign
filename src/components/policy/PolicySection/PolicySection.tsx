import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import styles from './PolicySection.module.css'

type Props = { id: string; icon: LucideIcon; title: string; children: ReactNode }

export default function PolicySection({ id, icon: Icon, title, children }: Props) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.head}>
        <span className={styles.icon}>
          <Icon size={22} aria-hidden="true" />
        </span>
        <div>
          <h2 id={`${id}-title`}>{title}</h2>
          <span className={styles.bar} aria-hidden="true" />
        </div>
      </header>
      <div className={styles.body}>{children}</div>
    </section>
  )
}