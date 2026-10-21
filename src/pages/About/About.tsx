import { ArrowRight, Cloud, Cpu, Landmark, WalletCards } from 'lucide-react'
import { Link } from 'react-router'
import FaqSection from '../../components/sections/FaqSection'
import DisplayHeroHeading from '../../components/sections/DisplayHeroHeading/DisplayHeroHeading'
import styles from './About.module.css'

const PLATFORMS = [
  { name: 'FinCore', icon: Landmark, text: 'A comprehensive financial platform for banks and financial institutions.', to: '/fincore' },
  { name: 'Safi', icon: Cpu, text: 'Our AI model and intelligence layer across products and infrastructure.', to: '/safi' },
  { name: 'Settle', icon: WalletCards, text: 'A consumer application for seamless transactions across Africa.', to: '/settle' },
  { name: 'Skynet', icon: Cloud, text: 'Cloud, GPU and infrastructure provisioning for modern services.', to: '/skynet' },
]

const PRESS = [
  { source: 'Yahoo Finance', brand: 'yahoo! finance', title: "Insolify's FinCore and Safi: redefining financial infrastructure", tone: 'yahoo' },
  { source: 'IPS News', brand: 'IPS News', title: 'How Insolify is redefining financial technology for banks, fintechs and small businesses in Africa', tone: 'ips' },
  { source: 'MSN', brand: 'MSN', title: 'Skynet Africa announces acquisition by Insolify to accelerate pan-African cloud and AI infrastructure', tone: 'msn' },
]

const COMPANY_FAQS = [
  { q: 'What is Insolify?', a: 'Insolify is a financial technology and infrastructure company building the technology underneath modern financial services.' },
  { q: 'Who are the platforms for?', a: 'Financial institutions, banks, fintech companies, insurance companies, enterprises and developers.' },
  { q: 'What is Safi FI?', a: 'Safi FI is an optimized Safi variant for fast financial inference. It is part of the Safi model options, not a separate product.' },
  { q: 'Does the Safi prompt demo use real data?', a: 'No. The homepage demo is illustrative. It does not access accounts, use live financial data or execute transactions.' },
  { q: 'How do I get started?', a: 'Contact your Insolify representative through your established company channel. Availability, configuration and pricing are confirmed for each deployment.' },
]

function Heading({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {text && <p className={styles.intro}>{text}</p>}
    </header>
  )
}

export default function About() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="company-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About Insolify</p>
          <DisplayHeroHeading id="company-title" headline="Building the infrastructure behind modern finance." />
          <p className={styles.heroText}>
            Insolify is a financial technology and infrastructure company building the technology
            underneath modern financial services.
          </p>
          <Link className={styles.button} to="/contact">Connect with Insolify <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className={styles.splitSection} aria-labelledby="company-who">
        <div className={styles.splitGrid}>
          <Heading eyebrow="Who we are" title="Technology for the systems people depend on." id="company-who" />
          <div className={styles.copy}>
            <p>We build platforms for financial institutions, banks, fintech companies, insurance companies, enterprises and developers.</p>
            <p>Our work spans core banking, financial operations, artificial intelligence, fraud detection, consumer finance, cloud infrastructure, GPU infrastructure and digital banking.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="company-platforms">
        <div className={styles.inner}>
          <Heading eyebrow="What we build" title="Four platforms across the financial and technology stack." id="company-platforms" />
          <div className={styles.platformGrid}>
            {PLATFORMS.map(({ name, text, to }) => (
              <Link to={to} className={styles.platformCard} key={name}>
                <h3>{name}</h3>
                <p>{text}</p>
                <span>Explore {name} <ArrowRight size={15} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.splitSection} aria-labelledby="company-philosophy">
        <div className={styles.splitGrid}>
          <Heading eyebrow="Engineering philosophy" title="Built with rigor. Designed to evolve." id="company-philosophy" />
          <div className={styles.copy}>
            <p>Financial technology requires well-considered systems, integration with existing ecosystems and careful attention to the people who rely on them.</p>
            <p>We aim to pair technical depth with clear product experiences for institutions and teams building modern services.</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted} ${styles.presence}`} aria-labelledby="company-presence">
        <div className={styles.inner}>
          <Heading eyebrow="Our presence" title="Rooted in African financial services. Built for connected markets." id="company-presence" />
        </div>
      </section>

      <section className={styles.careerSection} aria-labelledby="company-careers">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>Careers</p>
          <div className={styles.careerRow}>
            <div>
              <h2 id="company-careers">Help build what comes next.</h2>
              <p>We’re interested in people who care about reliable infrastructure, thoughtful software and useful financial services.</p>
            </div>
            <Link to="/careers" className={styles.textLink}>Explore careers <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted} ${styles.leadership}`} aria-labelledby="company-leadership">
        <div className={styles.inner}>
          <Heading eyebrow="Leadership" title="Leadership at Insolify." text="Leadership profiles will be published here when approved for public use." id="company-leadership" />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="company-press">
        <div className={styles.inner}>
          <Heading eyebrow="In the news" title="Insolify in the press." id="company-press" />
          <div className={styles.pressGrid}>
            {PRESS.map(({ source, brand, title, tone }) => (
              <article className={styles.pressCard} key={source}>
                <div className={`${styles.pressBrand} ${styles[tone]}`} aria-label={source}>{brand}</div>
                <div className={styles.pressCopy}>
                  <p>{source}</p>
                  <h3>{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="company-explore">
        <div className={styles.inner}>
          <Heading eyebrow="The Insolify platform" title="Explore more of what we build." id="company-explore" />
          <div className={styles.exploreGrid}>
            {PLATFORMS.map(({ name, icon: Icon, text, to }) => (
              <Link className={styles.exploreCard} to={to} key={name}>
                <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{text}</p>
                <span>Learn more <ArrowRight size={16} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stackSection} aria-labelledby="company-stack">
        <div className={styles.stackGrid}>
          <div>
            <Heading eyebrow="How it fits together" title="One company across the financial technology stack." text="Our platforms are designed to work independently or together, from infrastructure to customer-facing experiences." id="company-stack" />
          </div>
          <div className={styles.stackList}>
            <article><span className={styles.stackIcon}><WalletCards size={19} aria-hidden="true" /></span><div><h3>Channels</h3><p>Customer-facing digital banking and payments experiences</p></div></article>
            <article><span className={styles.stackIcon}><Cpu size={19} aria-hidden="true" /></span><div><h3>Intelligence</h3><p>Safi supports analysis, risk review and multilingual interaction</p></div></article>
            <article><span className={styles.stackIcon}><Landmark size={19} aria-hidden="true" /></span><div><h3>Financial platform</h3><p>FinCore handles institution operations and integrations</p></div></article>
            <article><span className={styles.stackIcon}><Cloud size={19} aria-hidden="true" /></span><div><h3>Infrastructure</h3><p>Skynet provides cloud, GPU and developer infrastructure</p></div></article>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="FAQ" title="Common questions." items={COMPANY_FAQS} align="start" indicator="plus" />
    </main>
  )
}
