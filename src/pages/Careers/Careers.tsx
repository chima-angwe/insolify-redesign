import {
  ArrowRight,
  ChartNoAxesCombined,
  Earth,
  House,
  MapPin,
  MessageCircleHeart,
  ShieldCheck,
  UsersRound,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router'
import styles from './Careers.module.css'

const LOCATIONS = [
  { name: 'Dubai', icon: MapPin, text: 'Connect with opportunities in a global centre for finance and technology.' },
  { name: 'Nairobi', icon: MapPin, text: 'Help build technology for connected financial services and markets.' },
  { name: 'Abuja', icon: MapPin, text: 'Work on the platforms supporting modern financial services.' },
  { name: 'Norway', icon: MapPin, text: 'Explore opportunities to contribute from Norway, depending on the role.' },
]

const WORK_STYLES = [
  { name: 'Flexibility', icon: House, text: 'Do deep, focused work wherever you are most productive.' },
  { name: 'Collaboration', icon: UsersRound, text: 'Come together to design, solve problems and learn from one another.' },
  { name: 'Connected teams', icon: Earth, text: 'Work with colleagues across Dubai, Nairobi, Abuja and Norway.' },
]

const ENVIRONMENT = [
  { name: 'Hard problems', icon: Zap, text: 'Work on core financial platforms, AI, payments and infrastructure at scale.' },
  { name: 'Room to grow', icon: ChartNoAxesCombined, text: 'Take on real ownership and expand your skills as the company grows.' },
  { name: 'Rigor and care', icon: ShieldCheck, text: 'Build reliable, secure software with thoughtful engineering.' },
  { name: 'Supportive teams', icon: MessageCircleHeart, text: 'Collaborate with people who share knowledge and challenge ideas respectfully.' },
]

const AREAS = [
  { name: 'Engineering', text: 'Software, platform and infrastructure.' },
  { name: 'AI and data', text: 'Models, analytics and intelligence.' },
  { name: 'Product and design', text: 'Clear experiences for complex finance.' },
  { name: 'Business and operations', text: 'Partnerships, delivery and support.' },
]

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className={styles.intro}>{text}</p>}
    </header>
  )
}

export default function Careers() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="careers-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Careers at Insolify</p>
          <h1 id="careers-title">Build what’s next in financial technology.</h1>
          <p className={styles.heroText}>
            Join people working on the technology underneath modern financial services—from
            financial platforms and AI to payments and infrastructure.
          </p>
          <Link className={styles.heroButton} to="/contact">
            Talk to our team <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="careers-locations">
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Where we work"
            title="Opportunities across borders."
            text="We welcome conversations with people interested in working with Insolify in Dubai, Nairobi, Abuja or Norway. Location and work arrangements depend on the role."
          />
          <div className={styles.locationGrid} id="careers-locations">
            {LOCATIONS.map(({ name, icon: Icon, text }) => (
              <article className={styles.locationCard} key={name}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`} aria-labelledby="careers-work">
        <div className={styles.content}>
          <SectionHeading
            eyebrow="How we work"
            title="Hybrid by design."
            text="We work hybrid, combining focused remote work with time together in person. It gives people flexibility while keeping the collaboration that complex financial technology demands."
          />
          <div className={styles.workGrid} id="careers-work">
            {WORK_STYLES.map(({ name, icon: Icon, text }) => (
              <article className={styles.workCard} key={name}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="careers-environment">
        <div className={styles.content}>
          <SectionHeading
            eyebrow="Our environment"
            title="A fantastic, challenging place to push your limits."
            text="We build systems that people depend on, which means hard problems and high standards. It is a stimulating environment for people who want to stretch their abilities and grow."
          />
          <div className={styles.environmentGrid} id="careers-environment">
            {ENVIRONMENT.map(({ name, icon: Icon, text }) => (
              <article className={styles.environmentCard} key={name}>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionTint}`} aria-labelledby="careers-areas">
        <div className={styles.content}>
          <SectionHeading eyebrow="Areas you can join" title="Find where your skills fit." />
          <div className={styles.areaList} id="careers-areas">
            {AREAS.map(({ name, text }) => (
              <article className={styles.areaCard} key={name}>
                <h3>{name}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.equalSection} aria-labelledby="careers-equal">
        <div className={styles.equalContent}>
          <div>
            <p className={styles.eyebrow}>Equal opportunity</p>
            <h2 id="careers-equal">Different perspectives make us better.</h2>
          </div>
          <div className={styles.equalCopy}>
            <p>
              Insolify is an equal opportunity organisation. We welcome people of all backgrounds
              and make employment decisions based on skills, experience and the needs of the role.
            </p>
            <p>
              We are committed to a respectful, inclusive environment where people can contribute,
              grow and do their best work. We do not tolerate discrimination or harassment.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.buildSection}`} aria-labelledby="careers-build">
        <div className={styles.content}>
          <SectionHeading
            eyebrow="What you can build"
            title="Meaningful work across technology and finance."
            text="Our teams work across core financial platforms, AI, payments, digital banking, cloud and GPU infrastructure. If you are interested in contributing, tell us about your experience and the kind of work you want to do."
          />
          <Link className={styles.textLink} to="/contact">
            Start a career conversation <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
