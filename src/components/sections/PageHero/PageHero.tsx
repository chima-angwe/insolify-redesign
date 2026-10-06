import styles from './PageHero.module.css'

type Props = { title: string; lead?: string; text?: string }

export default function PageHero({ title, lead, text }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    </section>
  )
}