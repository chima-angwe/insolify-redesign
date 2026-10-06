import { LOGOS } from '../../../config/logos'
import styles from './Logo.module.css'

type Props = { className?: string }

export default function Logo({ className }: Props) {
  return (
    <span className={`${styles.logo} ${className ?? ''}`} role="img" aria-label="Insolify">
      <span aria-hidden="true">Ins</span>
      <img className={styles.drop} src={LOGOS.insolify} alt="" aria-hidden="true" />
      <span aria-hidden="true">lify</span>
    </span>
  )
}