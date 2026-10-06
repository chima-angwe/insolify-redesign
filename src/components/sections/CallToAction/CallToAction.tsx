import Button from '../../ui/Button'
import { EXTERNAL_LINKS } from '../../../config/links'
import styles from './CallToAction.module.css'

type Action = { label: string; to?: string; href?: string }

type Props = {
  title?: string
  text?: string
  primary?: Action
  secondary?: Action | null
}

const DEFAULT_PRIMARY: Action = { label: 'Book a demo', to: '/contact' }
const DEFAULT_SECONDARY: Action = { label: 'Get started', href: EXTERNAL_LINKS.register }

export default function CallToAction({
  title = 'See Fincore in action',
  text = 'Book a demo and we will walk you through the platform.',
  primary = DEFAULT_PRIMARY,
  secondary = DEFAULT_SECONDARY,
}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.actions}>
          <Button to={primary.to} href={primary.href}>
            {primary.label}
          </Button>
          {secondary && (
            <Button to={secondary.to} href={secondary.href} variant="secondary">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}