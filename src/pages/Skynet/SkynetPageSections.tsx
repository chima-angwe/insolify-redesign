import { useState, type CSSProperties } from 'react'
import { ArrowRight, Boxes, Cpu, Database, HardDrive, Mail, Network, Server, ShieldCheck, Zap } from 'lucide-react'
import Button from '../../components/ui/Button'
import { EXTERNAL_LINKS } from '../../config/links'
import styles from './SkynetPageSections.module.css'

const ARCHITECTURES = [
  { icon: Cpu, title: 'VPS', text: 'Virtual servers on shared hardware with guaranteed resources. Fast to deploy and easy to resize.' },
  { icon: Server, title: 'GPU VPS', text: 'Accelerated servers for training, inference and rendering.' },
  { icon: Database, title: 'Dedicated cloud', text: 'Whole servers reserved for you, for consistent performance and isolation.' },
  { icon: Zap, title: 'NVMe', text: 'Lowest latency storage for databases and busy applications.' },
  { icon: HardDrive, title: 'SSD', text: 'Balanced speed and cost for most workloads.' },
  { icon: Boxes, title: 'HDD', text: 'Cost-efficient capacity for backups, media and archives.' },
]

const STACKS = [
  { name: 'WordPress', mark: 'W', color: '#4b87c8' },
  { name: 'PHP / Laravel', mark: 'php', color: '#8d7dc1' },
  { name: 'Python', mark: 'Py', color: '#4a9bd8' },
  { name: '.NET (C#)', mark: '.NET', color: '#8763d7' },
  { name: 'Node.js', mark: 'JS', color: '#55a64e' },
  { name: 'Ruby on Rails', mark: 'R', color: '#d94645' },
  { name: 'Rust', mark: 'Rs', color: '#d38b68' },
  { name: 'Go', mark: 'Go', color: '#43b9c9' },
  { name: 'Java', mark: 'J', color: '#ed9b24' },
  { name: 'Static HTML', mark: '5', color: '#e65f46' },
  { name: 'Other', mark: '···', color: '#a5a5a5' },
]

const money = (value: number) => `$${value.toFixed(2)}`

export function SkynetArchitectures() {
  return (
    <section className={styles.section} aria-labelledby="skynet-architectures-title">
      <div className={styles.inner}>
        <header className={styles.sectionHead}>
          <p className={styles.eyebrow}>Architectures</p>
          <h2 id="skynet-architectures-title">Choose the right compute and storage architecture.</h2>
          <p>Match performance and capacity to the way your workload runs.</p>
        </header>
        <div className={styles.architectureGrid}>
          {ARCHITECTURES.map(({ icon: Icon, title, text }) => (
            <article className={styles.architectureCard} key={title}>
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkynetMailHosting() {
  const [domain, setDomain] = useState('')
  const [accounts, setAccounts] = useState(5)
  const validDomain = /^(?=.{1,253}$)(?!-)[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,}$/i.test(domain.trim())
  const total = accounts * 1.5
  const order = encodeURIComponent(`Please help me set up Skynet mail hosting for ${domain.trim()} with ${accounts} accounts. Estimate: $${total.toFixed(2)}/month.`)

  return (
    <section className={styles.section} aria-labelledby="skynet-mail-title">
      <div className={styles.inner}>
        <header className={styles.sectionHead}>
          <p className={styles.eyebrow}>Mail hosting</p>
          <h2 id="skynet-mail-title">Business email on your own domain.</h2>
          <p>Choose your account count and enter a domain to see a simple monthly estimate. Spam filtering and email authentication are included.</p>
        </header>
        <div className={styles.estimatorGrid}>
          <div className={styles.formCard}>
            <label className={styles.fieldLabel} htmlFor="skynet-mail-domain"><strong>Domain</strong><span>The domain your mail will use</span></label>
            <input id="skynet-mail-domain" className={styles.textInput} type="text" inputMode="url" autoCapitalize="none" autoCorrect="off" placeholder="yourcompany.com" value={domain} onChange={(event) => setDomain(event.target.value)} aria-describedby="skynet-domain-help" />
            <div className={styles.rangeHead}><label htmlFor="skynet-mail-accounts">Number of mail accounts</label><span>1 to 500</span></div>
            <div className={styles.rangeRow}><input id="skynet-mail-accounts" type="range" min="1" max="500" value={accounts} onChange={(event) => setAccounts(Number(event.target.value))} /><input aria-label="Mail account count" type="number" min="1" max="500" value={accounts} onChange={(event) => setAccounts(Math.max(1, Math.min(500, Number(event.target.value) || 1)))} /></div>
            <div className={styles.presets} aria-label="Common account counts">{[5, 10, 25, 100].map((count) => <button type="button" key={count} aria-pressed={accounts === count} onClick={() => setAccounts(count)}>{count}</button>)}</div>
            <div className={styles.mailIncluded}><Mail size={22} aria-hidden="true" /><div><strong>you@{domain.trim() || 'yourcompany.com'}</strong><span>Inbox, calendar, contacts, webmail and IMAP</span></div></div>
          </div>
          <aside className={styles.summaryCard} aria-live="polite" aria-label="Mail hosting estimate">
            <h3>Mail summary</h3>
            <dl className={styles.summaryRows}><div><dt>Domain</dt><dd>{domain.trim() || 'Not set'}</dd></div><div><dt>Mail accounts</dt><dd>{accounts}</dd></div><div><dt>Rate</dt><dd>$1.50 / account / month</dd></div></dl>
            <div className={styles.totalRow}><span>Estimated monthly</span><strong>{money(total)}</strong></div>
            <a className={`${styles.action} ${!validDomain ? styles.disabledAction : ''}`} href={validDomain ? `mailto:sales@insolify.com?subject=${encodeURIComponent('Skynet mail hosting enquiry')}&body=${order}` : undefined} aria-disabled={!validDomain} id="skynet-domain-help">Continue <ArrowRight size={16} /></a>
            <p className={styles.helper} id="skynet-domain-help">{validDomain ? 'Estimate only; final pricing is confirmed at order.' : 'Enter a valid domain to continue. Estimate only; confirmed at order.'}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function SkynetSimpleHosting() {
  const [stack, setStack] = useState('WordPress')
  const [apps, setApps] = useState(1)
  const total = apps * 2
  const order = encodeURIComponent(`Please help me set up Skynet simple hosting: ${stack}, ${apps} app${apps === 1 ? '' : 's'}, estimated at $${total.toFixed(2)}/month.`)

  return (
    <section className={styles.section} aria-labelledby="skynet-simple-title">
      <div className={styles.inner}>
        <header className={styles.sectionHead}>
          <p className={styles.eyebrow}>Simple hosting</p>
          <h2 id="skynet-simple-title">Pick your stack. Pay $2 per app, per month.</h2>
          <p>Regular shared hosting with no server to manage. Choose your stack and how many apps to host.</p>
        </header>
        <div className={styles.estimatorGrid}>
          <div className={styles.formCard}>
            <div className={styles.fieldLabel}><strong>Stack</strong><span>What are you hosting?</span></div>
            <div className={styles.stackGrid} role="group" aria-label="Choose a development stack">
              {STACKS.map((item) => <button type="button" key={item.name} aria-pressed={stack === item.name} className={`${styles.stackOption} ${stack === item.name ? styles.stackSelected : ''}`} onClick={() => setStack(item.name)}><span className={styles.stackMark} style={{ '--stack-color': item.color } as CSSProperties} aria-hidden="true">{item.mark}</span><strong>{item.name}</strong></button>)}
            </div>
            <div className={styles.rangeHead}><label htmlFor="skynet-hosting-apps">Number of apps</label><span>Each app is a site or application</span></div>
            <div className={styles.stepper}><button type="button" aria-label="Remove an app" disabled={apps <= 1} onClick={() => setApps((value) => Math.max(1, value - 1))}>−</button><input id="skynet-hosting-apps" aria-label="Number of apps" type="number" min="1" max="100" value={apps} onChange={(event) => setApps(Math.max(1, Math.min(100, Number(event.target.value) || 1)))} /><button type="button" aria-label="Add an app" disabled={apps >= 100} onClick={() => setApps((value) => Math.min(100, value + 1))}>+</button></div>
            <p className={styles.included}><ShieldCheck size={16} /> Includes free SSL and a control panel.</p>
          </div>
          <aside className={styles.summaryCard} aria-live="polite" aria-label="Simple hosting estimate">
            <h3>Hosting summary</h3>
            <dl className={styles.summaryRows}><div><dt>Stack</dt><dd>{stack}</dd></div><div><dt>Apps</dt><dd>{apps}</dd></div><div><dt>Rate</dt><dd>$2 / app / month</dd></div></dl>
            <div className={styles.totalRow}><span>Monthly</span><strong>{money(total)}</strong></div>
            <p className={styles.helper}>{money(total * 12)} per year</p>
            <a className={styles.action} href={`mailto:sales@insolify.com?subject=${encodeURIComponent('Skynet simple hosting enquiry')}&body=${order}`}>Continue <ArrowRight size={16} /></a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export function SkynetBuilderApp() {
  return (
    <section className={styles.builderSection} aria-label="Skynet developer resources and mobile app">
      <div className={styles.inner}>
        <div className={styles.builderCallout}>
          <div><h2>Built for builders.</h2><p>Find the tools and guidance to get your infrastructure up and running. Talk to our team about current access and deployment options.</p></div>
          <Button href={EXTERNAL_LINKS.docs}>Developer resources <ArrowRight size={16} aria-hidden="true" /></Button>
        </div>
        <div className={styles.mobileApp}>
          <span className={styles.eyebrow}>Skynet mobile app</span>
          <h2>Stay connected, stay in control.</h2>
          <p>Infrastructure and operations don’t wait for office hours. Keep monitoring, alerts and essential controls close at hand.</p>
          <div className={styles.appFeatures}>
            <article><Network size={20} /><strong>Live monitoring</strong><span>Keep an eye on service health and performance.</span></article>
            <article><Mail size={20} /><strong>Instant alerts</strong><span>Know about incidents as they happen.</span></article>
            <article><ShieldCheck size={20} /><strong>Respond faster</strong><span>Act on issues while away from your desk.</span></article>
          </div>
          <div className={styles.storeLinks} aria-label="Mobile app availability"><span>Google Play <small>Coming soon</small></span><span>App Store <small>Coming soon</small></span></div>
        </div>
      </div>
    </section>
  )
}
