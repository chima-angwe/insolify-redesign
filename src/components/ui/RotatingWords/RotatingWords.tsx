import { useEffect, useState } from 'react'
import styles from './RotatingWords.module.css'

type Props = { words: string[]; interval?: number }

export default function RotatingWords({ words, interval = 2600 }: Props) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (words.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => window.clearInterval(id)
  }, [words.length, interval])

  const prev = (i - 1 + words.length) % words.length

  return (
    <span className={styles.stack} aria-hidden="true">
      {words.map((w, n) => (
        <span
          key={w}
          className={`${styles.word} ${n === i ? styles.on : n === prev ? styles.out : ''}`}
        >
          {w}
        </span>
      ))}
    </span>
  )
}