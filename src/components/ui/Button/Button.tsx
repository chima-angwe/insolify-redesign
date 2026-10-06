import type { ReactNode } from 'react'
import { Link } from 'react-router'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  href?: string // external link, e.g. https://dash.insolify.com
  to?: string // internal page, e.g. /contact
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}