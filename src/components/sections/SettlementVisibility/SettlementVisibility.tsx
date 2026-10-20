import { Bell, Check, Smartphone, ArrowLeftRight, AlertTriangle } from 'lucide-react'
import Button from '../../ui/Button'
import { EXTERNAL_LINKS } from '../../../config/links'
import styles from './SettlementVisibility.module.css'

const features = [
  { icon: ArrowLeftRight, title: 'Track settlements', text: 'See the status and movement of funds in real time.' },
  { icon: AlertTriangle, title: 'Resolve exceptions', text: 'Spot mismatches and follow up before they escalate.' },
  { icon: Bell, title: 'Instant notifications', text: 'Stay informed without refreshing a dashboard.' },
]

export default function SettlementVisibility() {
  return (
    <section className={styles.section} aria-labelledby="settlement-visibility-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Settle mobile app</p>
          <h2 id="settlement-visibility-title">Settlement visibility, always with you.</h2>
          <p className={styles.intro}>Payments move around the clock, so oversight should too. Track settlements, spot exceptions and follow up on reconciliation items from anywhere.</p>
          <div className={styles.features}>
            {features.map(({ icon: Icon, title, text }) => (
              <article className={styles.feature} key={title}>
                <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <div className={styles.actions}><Button href={EXTERNAL_LINKS.registerSettle}>Get started</Button><span>App availability varies by market.</span></div>
        </div>

        <div className={styles.visual} aria-label="Illustration of settlement activity on the Settle mobile app">
          <div className={styles.phone}>
            <div className={styles.phoneTop}><span /><span>Settle</span><span className={styles.avatar}>A</span></div>
            <div className={styles.balance}><small>Settlement overview</small><strong>Today <Check size={15} aria-label="Up to date" /></strong><span>3 transfers in progress</span></div>
            <div className={styles.activityHead}><strong>Recent activity</strong><span>View all</span></div>
            <div className={styles.activity}><i className={styles.activityIcon}><ArrowLeftRight size={15} /></i><span><b>Nairobi → Abuja</b><small>Settlement processing</small></span><em className={styles.processing}>In progress</em></div>
            <div className={styles.activity}><i className={styles.activityIcon}><Check size={15} /></i><span><b>Accra → Lagos</b><small>Funds delivered</small></span><em>Complete</em></div>
            <div className={styles.activity}><i className={styles.activityIcon}><Bell size={15} /></i><span><b>New update</b><small>Settlement confirmed</small></span><em>Now</em></div>
            <div className={styles.phoneNav}><span>Home</span><span>Activity</span><span>Profile</span></div>
          </div>
          <div className={styles.floatCard}><span><Smartphone size={16} /> Live overview</span><strong>Everything in view</strong><small>Updates at a glance</small></div>
          <span className={styles.orbit} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
