import { ArrowRight, ArrowUpRight, Building2, Code2, CreditCard } from 'lucide-react'
import { Link } from 'react-router'
import styles from './HomeHighlights.module.css'

const audiences = [
  { icon: Building2, title: 'Financial institutions', text: 'Run core banking, lending, payments and digital channels with Fincore.' },
  { icon: CreditCard, title: 'Fintechs and enterprises', text: 'Connect customer experiences to banking and payment capabilities.' },
  { icon: Code2, title: 'Teams building financial products', text: 'Bring together the tools and integrations behind everyday financial services.' },
]

const connections = ['NIBSS', 'Interswitch', 'eTranzact', 'SAP', 'Payment networks', 'Cloud infrastructure']

export default function HomeHighlights() {
  return (
    <>
      <section className={styles.audience}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>WHO WE BUILD FOR</p>
          <div className={styles.audienceHeading}>
            <h2>Built for the teams shaping finance.</h2>
            <p>Technology for the institutions, businesses and builders moving money and serving customers.</p>
          </div>
          <div className={styles.audienceGrid}>
            {audiences.map(({ icon: Icon, title, text }, index) => (
              <article className={styles.audienceCard} key={title}>
                <span className={styles.index}>0{index + 1}</span>
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ecosystem} aria-labelledby="ecosystem-title">
        <div className={styles.inner}>
          <div className={styles.ecosystemGrid}>
            <div className={styles.ecosystemCopy}>
              <p className={styles.eyebrow}>CONNECTED INFRASTRUCTURE</p>
              <h2 id="ecosystem-title">Connected to the financial ecosystem.</h2>
              <p>Explore the networks and infrastructure across the Insolify ecosystem.</p>
              <Link to="/fincore" className={styles.textLink}>Explore Fincore <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
            <div className={styles.ticker} aria-label="Financial ecosystem connections">
              <div className={styles.tickerHead}><span>ECOSYSTEM / 06</span><span>NETWORKS & INFRASTRUCTURE</span></div>
              <div className={styles.tickerWindow}>
                <ul className={styles.tickerTrack}>
                  {connections.map((name, index) => <li key={name}><span className={styles.connectionNumber}>0{index + 1}</span><strong>{name}</strong><ArrowUpRight size={16} aria-hidden="true" /></li>)}
                  {connections.map((name, index) => <li key={`loop-${name}`} aria-hidden="true" className={styles.loopItem}><span className={styles.connectionNumber}>0{index + 1}</span><strong>{name}</strong><ArrowUpRight size={16} aria-hidden="true" /></li>)}
                </ul>
              </div>
              <div className={styles.tickerFoot}><span><i /> SELECTED CONNECTIONS</span><span>01 — 06</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.inner}>
          <p className={styles.eyebrow}>INSOLIFY</p>
          <div className={styles.aboutGrid}>
            <h2>Technology for the systems people rely on.</h2>
            <div>
              <p>We build financial software and infrastructure across core banking, financial intelligence and payments. Each product is designed for the work it needs to do.</p>
              <Link to="/about" className={styles.textLink}>More about Insolify <ArrowRight size={17} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
