import { ArrowDown, ArrowRight, Cloud, Cpu, Landmark, Smartphone, WalletCards, Workflow } from 'lucide-react'
import { Link } from 'react-router'
import DisplayHeroHeading from '../../components/sections/DisplayHeroHeading/DisplayHeroHeading'
import styles from './Developers.module.css'

const BUILD_AREAS = [
  { title: 'FinCore APIs', icon: Landmark, text: 'Connect financial operations, account services and digital experiences.' },
  { title: 'Safi workflows', icon: Cpu, text: 'Explore financial intelligence and AI-enabled workflows.' },
  { title: 'Skynet infrastructure', icon: Cloud, text: 'Cloud and GPU infrastructure for applications and AI workloads.' },
]

const PRODUCTS = [
  { name: 'FinCore', icon: Landmark, text: 'Core banking, accounting, lending, payments and digital channels for institutions.', to: '/fincore' },
  { name: 'Safi', icon: Cpu, text: 'AI for financial intelligence, fraud detection and multilingual interaction.', to: '/safi' },
  { name: 'Settle', icon: WalletCards, text: 'A consumer application for seamless transactions across Africa.', to: '/settle' },
  { name: 'Skynet', icon: Cloud, text: 'Cloud, GPU and developer infrastructure provisioning.', to: '/skynet' },
]

function Heading({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return <header className={styles.heading}><p className={styles.eyebrow}>{eyebrow}</p><h2 id={id}>{title}</h2>{text && <p className={styles.intro}>{text}</p>}</header>
}

export default function Developers() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="developers-title">
        <p className={styles.eyebrow}>Developers</p>
        <DisplayHeroHeading id="developers-title" headline="Build on infrastructure for modern finance." />
        <p>Connect financial products, applications and services through Insolify APIs and integrations.</p>
        <div className={styles.integrationDiagram} role="img" aria-label="An integration hub connects FinCore, Safi, Skynet, and customer applications">
          <svg className={styles.connections} viewBox="0 0 640 250" aria-hidden="true">
            <path className={styles.connection} d="M320 125 125 54M320 125 515 54M320 125 125 196M320 125 515 196" />
            <path className={styles.signal} d="M320 125 125 54M320 125 515 54M320 125 125 196M320 125 515 196" />
          </svg>
          <div className={`${styles.diagramNode} ${styles.nodeFincore}`}><Landmark size={19} aria-hidden="true" /><span>FinCore</span></div>
          <div className={`${styles.diagramNode} ${styles.nodeSafi}`}><Cpu size={19} aria-hidden="true" /><span>Safi</span></div>
          <div className={`${styles.diagramNode} ${styles.nodeSkynet}`}><Cloud size={19} aria-hidden="true" /><span>Skynet</span></div>
          <div className={`${styles.diagramNode} ${styles.nodeChannels}`}><Smartphone size={19} aria-hidden="true" /><span>Apps &amp; channels</span></div>
          <div className={styles.integrationHub}><Workflow size={23} aria-hidden="true" /><span>Insolify<br />integrations</span></div>
          <span className={styles.diagramCaption}>One connection layer. Connected financial services.</span>
        </div>
        <a className={styles.primaryButton} href="#developer-pathways">Explore developer pathways <ArrowDown size={16} aria-hidden="true" /></a>
      </section>

      <section className={styles.section} id="integrations" aria-labelledby="build-title">
        <div className={styles.inner}>
          <Heading eyebrow="Build with Insolify" title="Connect products and services." text="API availability, authentication and implementation details are provided for supported integrations and environments." id="build-title" />
          <div className={styles.buildGrid}>
            {BUILD_AREAS.map(({ title, icon: Icon, text }) => <article className={styles.buildCard} key={title}>
              <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.exampleSection}`} id="apis" aria-labelledby="example-title">
        <div className={styles.inner}>
          <Heading eyebrow="Illustrative example" title="Designed for connected services." text="Example shape only. This is not a live API endpoint." id="example-title" />
          <figure className={styles.codeCard}>
            <figcaption>sample-request.js</figcaption>
            <pre><code><span className={styles.codeKeyword}>const</span> result = <span className={styles.codeKeyword}>await</span> client.request({'{'}{ '\n' }
  product: <span className={styles.codeString}>"FinCore"</span>,{ '\n' }
  action: <span className={styles.codeString}>"your-approved-workflow"</span>,{ '\n' }
  reference: <span className={styles.codeString}>"example_123"</span>{ '\n' }
{'}'});</code></pre>
          </figure>
        </div>
      </section>

      <section className={styles.docsSection} id="documentation" aria-labelledby="docs-title">
        <div className={styles.inner}>
          <Heading eyebrow="Documentation and support" title="Integration details for your environment." text="Public API documentation and live endpoints are not included on this information site. Contact our team to discuss access, integration patterns and supported product environments." id="docs-title" />
          <Link className={styles.textLink} to="/contact">Talk to our team <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.section} id="developer-pathways" aria-labelledby="developer-products-title">
        <div className={styles.inner}>
          <Heading eyebrow="The Insolify platform" title="Explore more of what we build." id="developer-products-title" />
          <div className={styles.productGrid}>
            {PRODUCTS.map(({ name, icon: Icon, text, to }) => <Link className={styles.productCard} to={to} key={name}>
              <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
              <h3>{name}</h3>
              <p>{text}</p>
              <span>Learn more <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="stack-title">
        <div className={styles.fitInner}>
          <div className={styles.fitCopy}>
            <Heading eyebrow="How it fits together" title="One company across the financial technology stack." text="Our platforms are designed to work independently or together, from infrastructure to customer-facing experiences." id="stack-title" />
          </div>
          <div className={styles.stackList}>
            <article><span><WalletCards size={19} aria-hidden="true" /></span><div><h3>Channels</h3><p>Customer-facing digital banking and payments experiences</p></div></article>
            <article><span><Cpu size={19} aria-hidden="true" /></span><div><h3>Intelligence</h3><p>Safi supports analysis, risk review and multilingual interaction</p></div></article>
            <article><span><Landmark size={19} aria-hidden="true" /></span><div><h3>Financial platform</h3><p>FinCore handles institution operations and integrations</p></div></article>
            <article><span><Cloud size={19} aria-hidden="true" /></span><div><h3>Infrastructure</h3><p>Skynet provides cloud, GPU and developer infrastructure</p></div></article>
          </div>
        </div>
      </section>
    </div>
  )
}
