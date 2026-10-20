import type { CSSProperties } from 'react'
import { ArrowDownLeft, ArrowUpRight, Banknote, CreditCard, Globe2, Landmark, Mic, Smartphone } from 'lucide-react'
import styles from './ProductHeroArt.module.css'

function FinCoreArt() {
  return (
    <div className={`${styles.frame} ${styles.fincore}`} aria-label="FinCore core banking, digital channels and payments illustration">
      <div className={styles.frameHead}><span>FINCORE / FINANCIAL OPERATIONS</span><i /></div>
      <div className={styles.moduleGrid}>
        <div className={styles.module}><Landmark /><strong>Core banking</strong><small>Accounts & operations</small></div>
        <div className={styles.module}><Smartphone /><strong>Digital channels</strong><small>Mobile & web</small></div>
        <div className={styles.module}><CreditCard /><strong>Payments</strong><small>Financial connectivity</small></div>
      </div>
      <div className={styles.baseLine}><span>ONE FINANCIAL PLATFORM</span><span>01 — 03</span></div>
    </div>
  )
}

function SafiArt() {
  const bars = [18, 28, 42, 24, 52, 34, 22, 46, 31, 54, 27, 39, 20, 33, 16]
  return (
    <div className={`${styles.frame} ${styles.safi}`} aria-label="Safi voice and language illustration">
      <div className={styles.frameHead}><span>SAFI / INTELLIGENCE FOR FINANCE</span><span className={styles.listening}><i /> READY</span></div>
      <div className={styles.safiBody}>
        <div className={styles.voiceIcon}><Mic size={19} /></div>
        <div className={styles.wave} aria-hidden="true">{bars.map((height, index) => <i key={index} style={{ '--height': `${height}px`, '--delay': `${index * -80}ms` } as CSSProperties} />)}</div>
        <p>Speak naturally. Safi understands.</p>
      </div>
      <div className={styles.languageRow}><span>English</span><span>Kiswahili</span><span>Hausa</span><span>Yorùbá</span></div>
    </div>
  )
}

function SettleArt() {
  return (
    <div className={`${styles.frame} ${styles.settle}`} aria-label="Settle transfer flow illustration">
      <div className={styles.frameHead}><span>SETTLE / MONEY MOVEMENT</span><span>TRANSFER FLOW</span></div>
      <div className={styles.transferStage}>
        <div className={styles.transferEndpoint}><span><ArrowUpRight size={20} /></span><strong>Send</strong><small>Start a transfer</small></div>
        <svg className={styles.transferPath} viewBox="0 0 420 130" fill="none" aria-hidden="true">
          <path className={styles.pathBase} d="M16 104C106 7 303 7 404 104" />
          <circle className={styles.transferDot} cx="0" cy="0" r="5"><animateMotion dur="4.5s" repeatCount="indefinite" path="M16 104C106 7 303 7 404 104" /></circle>
        </svg>
        <div className={`${styles.transferEndpoint} ${styles.transferEnd}`}><span><ArrowDownLeft size={20} /></span><strong>Receive</strong><small>Complete the flow</small></div>
      </div>
      <p className={styles.stageCaption}>A clear path from sender to recipient</p>
    </div>
  )
}

function SkynetArt() {
  return (
    <div className={`${styles.frame} ${styles.skynet}`} aria-label="Skynet interconnected compute network illustration">
      <div className={styles.frameHead}><span>SKYNET / INFRASTRUCTURE</span><span>ILLUSTRATIVE NETWORK</span></div>
      <div className={styles.networkStage}>
        <svg viewBox="0 0 500 200" fill="none" aria-hidden="true">
          <path className={styles.networkArc} d="M48 145C133 13 367 13 452 145" />
          <path className={styles.networkLine} d="M48 145 164 78 250 132 337 66 452 145M164 78 170 155 250 132 337 66 344 157" />
          <circle className={styles.networkNode} cx="48" cy="145" r="8" /><circle className={styles.networkNode} cx="164" cy="78" r="6" />
          <circle className={`${styles.networkNode} ${styles.networkPulse}`} cx="250" cy="132" r="9" /><circle className={styles.networkNode} cx="337" cy="66" r="6" />
          <circle className={styles.networkNode} cx="452" cy="145" r="8" /><circle className={styles.networkNode} cx="170" cy="155" r="5" /><circle className={styles.networkNode} cx="344" cy="157" r="5" />
        </svg>
        <div className={styles.networkLabels}><span><i /> Cloud compute</span><span><i /> GPU infrastructure</span><span><i /> Provisioning</span></div>
      </div>
    </div>
  )
}

export default function ProductHeroArt({ product }: { product: string }) {
  if (product === 'Fincore') return <FinCoreArt />
  if (product === 'Safi AI') return <SafiArt />
  if (product === 'Settle Africa') return <SettleArt />
  if (product === 'Skynet') return <SkynetArt />
  return <div className={`${styles.frame} ${styles.fallback}`}><div className={styles.frameHead}><span><Globe2 size={18} /> FINANCIAL TECHNOLOGY</span></div><div className={styles.moduleGrid}><div className={styles.module}><Banknote /><strong>Financial platform</strong></div></div></div>
}
