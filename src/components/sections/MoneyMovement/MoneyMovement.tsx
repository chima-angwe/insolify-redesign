import { ArrowDownToLine, ArrowUpRight, CreditCard, Globe2, ShieldCheck, Wallet } from 'lucide-react'
import styles from './MoneyMovement.module.css'

const items = [
  { icon: ArrowUpRight, title: 'Send money', text: 'A guided flow to send payments across supported markets.' },
  { icon: ArrowDownToLine, title: 'Receive payments', text: 'Keep track of incoming payments where the service is available.' },
  { icon: Wallet, title: 'Connected finances', text: 'Connect eligible bank accounts to see more of your finances in one place.' },
  { icon: Globe2, title: 'Cross-border payments', text: 'Move money between supported markets with a clear transfer flow.' },
  { icon: ShieldCheck, title: 'Security', text: 'Payment and account features depend on supported providers and market rules.' },
  { icon: CreditCard, title: 'Flexible ways to pay', text: 'Choose from available payment methods for your transfer.' },
]

export default function MoneyMovement() {
  return (
    <section className={styles.section} aria-labelledby="money-movement-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A more connected experience</p>
          <h2 id="money-movement-title">Money movement, made clearer.</h2>
          <p>Send, receive and follow your money in one simple place.</p>
        </header>
        <div className={styles.grid}>
          {items.map(({ icon: Icon, title, text }, index) => (
            <article className={styles.card} key={title} style={{ '--card-index': index } as React.CSSProperties}>
              <span className={styles.icon}><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
