import { useId, useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import styles from './FaqSection.module.css'

export default function FaqItem({ question, answer, indicator = 'chevron' }: { question: string; answer: string; indicator?: 'chevron' | 'plus' }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${useId().replaceAll(':', '')}`
  const Icon = indicator === 'plus' ? Plus : ChevronDown

  return (
    <article className={styles.item}>
      <h3 className={styles.question}>
        <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen((value) => !value)}>
          <span>{question}</span>
          <Icon className={`${styles.indicator} ${indicator === 'plus' ? styles.plus : ''} ${open ? styles.indicatorOpen : ''}`} size={18} aria-hidden="true" />
        </button>
      </h3>
      <div id={panelId} className={`${styles.answer} ${open ? styles.answerOpen : ''}`} aria-hidden={!open}>
        <div className={styles.answerInner}><p>{answer}</p></div>
      </div>
    </article>
  )
}
