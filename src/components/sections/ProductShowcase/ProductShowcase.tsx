import type { CSSProperties } from 'react'
import { ArrowRight, ArrowUpRight, Banknote, Blocks, CreditCard, Fingerprint, Smartphone } from 'lucide-react'
import { Link } from 'react-router'
import styles from './ProductShowcase.module.css'

function FinCoreVisual() {
  return (
    <div className={`${styles.visual} ${styles.fincore}`} aria-label="Animated FinCore banking capabilities illustration">
      <div className={styles.visualTop}><span>FINCORE / OPERATIONS</span><span className={styles.live}><i /> Connected</span></div>
      <div className={styles.opsGrid}>
        <div className={styles.opCard}><Banknote /><strong>Core banking</strong><small>Accounts & operations</small></div>
        <div className={styles.opCard}><Smartphone /><strong>Digital channels</strong><small>Mobile & web</small></div>
        <div className={styles.opCard}><CreditCard /><strong>Payments</strong><small>Move money</small></div>
        <div className={styles.opCard}><Blocks /><strong>Integrations</strong><small>One connected stack</small></div>
      </div>
      <span className={styles.cornerMark}>01</span>
    </div>
  )
}

function SafiVisual() {
  const bars = [18, 32, 22, 46, 28, 38, 18, 50, 30, 42, 24, 34, 16]
  return (
    <div className={`${styles.visual} ${styles.safi}`} aria-label="Animated Safi voice waveform and language options">
      <div className={styles.visualTop}><span>SAFI / INTELLIGENCE</span><span className={styles.live}><i /> Listening</span></div>
      <div className={styles.wave} aria-hidden="true">{bars.map((height, index) => <i key={index} style={{ '--bar-height': `${height}px`, '--bar-delay': `${index * -90}ms` } as CSSProperties} />)}</div>
      <div className={styles.languages}><span>English</span><span>Kiswahili</span><span>Hausa</span><span>Yorùbá</span></div>
      <div className={styles.safiPrompt}><span className={styles.promptIcon}><Fingerprint size={17} /></span><span>Financial context, understood.</span><ArrowUpRight size={16} /></div>
    </div>
  )
}

function SettleVisual() {
  return (
    <div className={`${styles.visual} ${styles.settle}`} aria-label="Animated transfer path illustration">
      <div className={styles.visualTop}><span>SETTLE / MONEY MOVEMENT</span><span>Simple by design</span></div>
      <div className={styles.transfer}>
        <div className={`${styles.transferNode} ${styles.sender}`}><span><Banknote size={19} /></span><strong>Send</strong><small>Your side</small></div>
        <svg className={styles.route} viewBox="0 0 300 90" fill="none" aria-hidden="true"><path className={styles.routePath} d="M12 72C83 0 212 0 288 72" /><circle className={styles.routePulse} cx="150" cy="12" r="4" /></svg>
        <div className={`${styles.transferNode} ${styles.recipient}`}><span><CreditCard size={19} /></span><strong>Receive</strong><small>Their side</small></div>
      </div>
      <p className={styles.transferCaption}>One clear flow from sender to recipient</p>
    </div>
  )
}

function SkynetVisual() {
  return (
    <div className={`${styles.visual} ${styles.skynet}`} aria-label="Illustrative animated network globe for Skynet infrastructure">
      <div className={styles.visualTop}><span>SKYNET / INFRASTRUCTURE</span><span>Illustrative network</span></div>
      <div className={styles.globeLayout}>
        <svg className={styles.globe} viewBox="0 0 240 240" fill="none" role="img" aria-label="Monochrome globe with interconnected network nodes">
          <defs><clipPath id="skynet-globe-clip"><circle cx="120" cy="120" r="102" /></clipPath></defs>
          <circle cx="120" cy="120" r="102" className={styles.globeBase} />
          <g clipPath="url(#skynet-globe-clip)">
            <path d="M0 72 70 57 119 70 114 119 28 128Z" className={styles.regionOne} />
            <path d="m70 57 79-16 42 31-17 50-55-3-5-49Z" className={styles.regionTwo} />
            <path d="m28 128 86-9 15 47-44 37-50-27Z" className={styles.regionThree} />
            <path d="m114 119 60-3 44 33-23 46-66-29Z" className={styles.regionFour} />
            <ellipse cx="120" cy="120" rx="45" ry="102" className={styles.globeGrid} />
            <ellipse cx="120" cy="120" rx="82" ry="102" className={styles.globeGrid} />
            <path d="M18 86c61 34 143 34 204 0M18 153c61-34 143-34 204 0" className={styles.globeGrid} />
            <path d="M62 143 104 98l47 53 35-32M104 98l-7 75 54-22" className={styles.globeRoute} />
            <path d="M62 143 151 151 186 119" className={styles.globeRouteSecondary} />
            <circle cx="62" cy="143" r="5" className={styles.globeNode} />
            <circle cx="104" cy="98" r="5" className={`${styles.globeNode} ${styles.nodePulse}`} />
            <circle cx="151" cy="151" r="5" className={`${styles.globeNode} ${styles.nodePulse}`} />
            <circle cx="186" cy="119" r="5" className={styles.globeNode} />
            <circle cx="97" cy="173" r="4" className={styles.globeNode} />
          </g>
          <circle cx="120" cy="120" r="102" className={styles.globeOutline} />
        </svg>
        <div className={styles.globeLegend}>
          <p>NETWORK LAYERS</p>
          <div><i className={styles.legendCompute} /><span><strong>Compute nodes</strong><small>Connected workloads</small></span></div>
          <div><i className={styles.legendGpu} /><span><strong>GPU capacity</strong><small>Accelerated compute</small></span></div>
          <div><i className={styles.legendRoute} /><span><strong>Network routes</strong><small>Illustrative connections</small></span></div>
        </div>
      </div>
      <div className={styles.globeFoot}><span>COMPUTE</span><span>GPU INFRASTRUCTURE</span><span>NETWORK ROUTES</span></div>
    </div>
  )
}

const products = [
  { id: 'fincore', number: '01', name: 'FinCore', category: 'FINANCIAL INFRASTRUCTURE', title: 'The platform institutions run on.', text: 'Bring core banking, digital channels and payments together in one financial platform.', to: '/fincore', link: 'Explore FinCore', Visual: FinCoreVisual },
  { id: 'safi', number: '02', name: 'Safi', category: 'INTELLIGENCE FOR FINANCE', title: 'Financial context, understood.', text: 'Safi helps teams make sense of financial signals and customer conversations.', to: '/safi', link: 'Explore Safi', Visual: SafiVisual },
  { id: 'settle', number: '03', name: 'Settle', category: 'PAYMENTS ACROSS AFRICA', title: 'Move money in a clearer flow.', text: 'A simple experience for sending and receiving money across supported markets.', to: '/settle', link: 'Explore Settle', Visual: SettleVisual },
  { id: 'skynet', number: '04', name: 'Skynet', category: 'CLOUD & GPU INFRASTRUCTURE', title: 'Infrastructure for what comes next.', text: 'Cloud compute, GPU infrastructure and provisioning for modern digital services.', to: '/skynet', link: 'Explore Skynet', Visual: SkynetVisual },
]

export default function ProductShowcase() {
  return (
    <section className={styles.section} aria-labelledby="product-showcase-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>A CLOSER LOOK</p>
          <h2 id="product-showcase-title">Four products. One connected vision.</h2>
        </header>
        <div className={styles.list}>
          {products.map(({ id, number, name, category, title, text, to, link, Visual }, index) => (
            <article className={`${styles.row} ${index % 2 ? styles.reverse : ''}`} key={id} aria-label={`${name} product spotlight`}>
              <div className={styles.copy}>
                <p className={styles.category}><span>{number}</span>{category}</p>
                <h3>{title}</h3>
                <p className={styles.description}>{text}</p>
                <Link to={to} className={styles.link}>{link}<ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
              <Visual />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
