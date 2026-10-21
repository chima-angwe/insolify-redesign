import { Fragment } from 'react'
import type { CSSProperties } from 'react'
import styles from './DisplayHeroHeading.module.css'

type Props = {
  headline: string
  id?: string
}

export default function DisplayHeroHeading({ headline, id }: Props) {
  return (
    <h1 id={id} className={styles.heading} aria-label={headline}>
      {headline.split(' ').map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span className={styles.word} aria-hidden="true">
            <span style={{ '--n': index } as CSSProperties}>{word}</span>
          </span>{' '}
        </Fragment>
      ))}
    </h1>
  )
}
