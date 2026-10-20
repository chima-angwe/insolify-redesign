import { Eye, MapPin, UsersRound } from 'lucide-react'
import styles from './SettleTransferFlow.module.css'

type Step = { title: string; text: string }

export default function SettleTransferFlow({ steps }: { steps: Step[] }) {
  return (
    <section id="how" className={styles.section} aria-labelledby="settle-flow-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="settle-flow-title">Four steps. No paperwork.</h2>
          <p>Send across borders in a few clear steps, with your transfer details visible before you confirm.</p>
        </header>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <span className={styles.number}>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.transferPanel}>
          <div className={styles.route} aria-label="Illustrative transfer route from Nairobi to Abuja">
            <svg className={styles.routeSvg} viewBox="0 0 800 290" role="img" aria-labelledby="route-title route-description">
              <title id="route-title">Money moving from Nairobi to Abuja</title>
              <desc id="route-description">An animated transfer follows a curved route between Nairobi and Abuja.</desc>
              <path className={styles.routeTrack} d="M112 190 C250 18 530 18 688 170" />
              <path className={styles.routeLine} d="M112 190 C250 18 530 18 688 170" />
              <circle className={styles.routeNode} cx="285" cy="74" r="5" />
              <circle className={styles.routeNode} cx="430" cy="48" r="5" />
              <circle className={styles.routeNode} cx="560" cy="80" r="5" />
              <circle className={styles.destinationHalo} cx="688" cy="170" r="27" />
              <circle className={styles.destination} cx="688" cy="170" r="15" />
              <circle className={styles.originHalo} cx="112" cy="190" r="27" />
              <circle className={styles.origin} cx="112" cy="190" r="15" />
              <circle className={styles.movingDot} r="7">
                <animateMotion dur="4.8s" repeatCount="indefinite" path="M112 190 C250 18 530 18 688 170" />
              </circle>
            </svg>
            <div className={`${styles.city} ${styles.nairobi}`}>
              <strong>Nairobi</strong><span>KES 10,000 sent</span>
            </div>
            <div className={`${styles.city} ${styles.abuja}`}>
              <strong>Abuja</strong><span>NGN received</span>
            </div>
            <p className={styles.caption}>Illustrative route. Rates, fees, timing and supported corridors vary by market and provider.</p>
          </div>

          <aside className={styles.transferDetails} aria-label="Transfer details">
            <div className={styles.detailHeading}>
              <span>Transfer preview</span>
              <span className={styles.live}><i />In motion</span>
            </div>
            <div className={styles.amountRow}><span>You send</span><strong>KES 10,000</strong></div>
            <div className={styles.amountRow}><span>Recipient gets</span><strong>NGN · Abuja</strong></div>
            <div className={styles.progress} aria-label="Transfer progress"><span /></div>
            <div className={styles.benefits}>
              <p><Eye size={17} aria-hidden="true" /><span><strong>No surprises</strong><small>See rate and fees before confirming.</small></span></p>
              <p><MapPin size={17} aria-hidden="true" /><span><strong>Live tracking</strong><small>Follow your payment along the way.</small></span></p>
              <p><UsersRound size={17} aria-hidden="true" /><span><strong>Saved recipients</strong><small>Send again to people you trust.</small></span></p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
