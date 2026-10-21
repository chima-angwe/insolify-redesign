import { ArrowRight, Cloud, Cpu, Landmark, WalletCards } from 'lucide-react'
import { Link } from 'react-router'
import FaqSection from '../../components/sections/FaqSection'
import DisplayHeroHeading from '../../components/sections/DisplayHeroHeading/DisplayHeroHeading'
import styles from './Solutions.module.css'

const AUDIENCES = [
  { tag: '01 / Finance', title: 'Banks and financial institutions', text: 'Core banking, financial operations, payments and digital channels with FinCore.' },
  { tag: '02 / Digital finance', title: 'Fintech companies', text: 'Financial APIs and infrastructure for fintech products and services.' },
  { tag: '03 / Insurance', title: 'Insurance companies', text: 'Technology and operational building blocks for insurance.' },
  { tag: '04 / Finance', title: 'Finance companies', text: 'Connected lending, account services, payments and reporting workflows.' },
  { tag: '05 / Enterprise', title: 'Enterprise teams', text: 'Financial infrastructure, AI and cloud capabilities for businesses.', id: 'enterprise' },
  { tag: '06 / Developers', title: 'Product builders', text: 'APIs, integrations and infrastructure for digital services.' },
]

const PRODUCTS = [
  { name: 'FinCore', icon: Landmark, text: 'Core banking, accounting, lending, payments and digital channels for institutions.', to: '/fincore' },
  { name: 'Safi', icon: Cpu, text: 'AI for financial intelligence, fraud detection and multilingual interaction.', to: '/safi', id: 'ai' },
  { name: 'Settle', icon: WalletCards, text: 'A consumer application for seamless transactions across Africa.', to: '/settle' },
  { name: 'Skynet', icon: Cloud, text: 'Cloud, GPU and developer infrastructure provisioning.', to: '/skynet' },
]

const FAQS = [
  { q: 'What is Insolify?', a: 'Insolify is a financial technology and infrastructure company building the technology underneath modern financial services.' },
  { q: 'Who are the platforms for?', a: 'Financial institutions, banks, fintech companies, insurance companies, enterprises and developers.' },
  { q: 'What is Safi FI?', a: 'Safi FI is an optimized Safi variant for fast financial inference. It is part of the Safi model options, not a separate product.' },
  { q: 'Does the Safi prompt demo use real data?', a: 'No. The homepage demo is illustrative. It does not access accounts, use live financial data or execute transactions.' },
  { q: 'How do I get started?', a: 'Contact your Insolify representative through your established company channel. Availability, configuration and pricing are confirmed for each deployment.' },
]

function Heading({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return <header className={styles.heading}><p className={styles.eyebrow}>{eyebrow}</p><h2 id={id}>{title}</h2>{text && <p className={styles.intro}>{text}</p>}</header>
}

export default function Solutions() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="solutions-title">
        <p className={styles.eyebrow}>Solutions</p>
        <DisplayHeroHeading id="solutions-title" headline="Technology shaped around your next move." />
        <p>Financial and infrastructure platforms for the teams building modern services.</p>
        <Link className={styles.primaryButton} to="/contact">Talk through your goals <ArrowRight size={17} aria-hidden="true" /></Link>
      </section>

      <section className={styles.section} id="customer-types" aria-labelledby="audiences-title">
        <div className={styles.inner}>
          <Heading eyebrow="By customer type" title="Find the right starting point." id="audiences-title" />
          <div className={styles.audienceGrid}>
            {AUDIENCES.map(({ tag, title, text, id }) => <article className={styles.audienceCard} id={id} key={title}>
              <span className={styles.tag}>{tag}</span><h3>{title}</h3><p>{text}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} id="finance" aria-labelledby="stack-title">
        <div className={styles.inner}>
          <Heading eyebrow="Across the technology stack" title="Financial software, intelligence and infrastructure." text="FinCore supports financial operations. Safi provides AI for financial intelligence and workflows. Settle is a consumer application for payments across Africa. Skynet provides cloud and GPU infrastructure." id="stack-title" />
          <Link className={styles.textLink} to="/safi">Explore AI solutions <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.fitSection} id="security" aria-labelledby="fit-title">
        <div className={styles.fitInner}>
          <div className={styles.fitCopy}>
            <p className={styles.eyebrow}>Let’s find the right fit</p>
            <h2 id="fit-title">Let’s find the right fit.</h2>
            <p>Share your priorities and operating context with the Insolify team.</p>
            <Link className={styles.textLink} to="/contact?topic=security">Explore security capabilities <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <Link className={styles.primaryButton} to="/contact">Contact sales <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="products-title">
        <div className={styles.inner}>
          <Heading eyebrow="The Insolify platform" title="Explore more of what we build." id="products-title" />
          <div className={styles.productGrid}>
            {PRODUCTS.map(({ name, icon: Icon, text, to, id }) => <Link className={styles.productCard} id={id} to={to} key={name}>
              <Icon size={25} strokeWidth={1.8} aria-hidden="true"/><h3>{name}</h3><p>{text}</p><span>Learn more <ArrowRight size={16} aria-hidden="true" /></span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="together-title">
        <div className={styles.fitInner}>
          <div className={styles.fitCopy}>
            <Heading eyebrow="How it fits together" title="One company across the financial technology stack." text="Our platforms are designed to work independently or together, from infrastructure to customer-facing experiences." id="together-title" />
          </div>
          <div className={styles.stackList}>
            <article><span><WalletCards size={19} aria-hidden="true"/></span><div><h3>Channels</h3><p>Customer-facing digital banking and payments experiences</p></div></article>
            <article><span><Cpu size={19} aria-hidden="true"/></span><div><h3>Intelligence</h3><p>Safi supports analysis, risk review and multilingual interaction</p></div></article>
            <article><span><Landmark size={19} aria-hidden="true"/></span><div><h3>Financial platform</h3><p>FinCore handles institution operations and integrations</p></div></article>
            <article><span><Cloud size={19} aria-hidden="true"/></span><div><h3>Infrastructure</h3><p>Skynet provides cloud, GPU and developer infrastructure</p></div></article>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="FAQ" title="Common questions." items={FAQS} align="start" indicator="plus" />
    </div>
  )
}
