import type { CSSProperties } from 'react'
import { ShieldCheck, Lock, Globe, Headset, ArrowRight } from 'lucide-react'
import Button from '../../ui/Button'
import RotatingWords from '../../ui/RotatingWords'
import HeroVisual from '../HeroVisual'
import { HERO, HERO_WORDS } from '../../../data/hero'
import { EXTERNAL_LINKS } from '../../../config/links'
import styles from './Hero.module.css'

const ICONS = {
  shield: ShieldCheck,
  lock: Lock,
  globe: Globe,
  headset: Headset,
}

// entrance delay for each piece of the hero
const delay = (s: number) => ({ '--d': `${s}s` }) as CSSProperties

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.grid} />
        <span className={styles.glowA} />
        <span className={styles.glowB} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ${styles.reveal}`} style={delay(0)}>
            <span className={styles.ping} aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          <h1 className={styles.headline}>
            <span className={styles.srOnly}>{HERO.headline}</span>
            <span className={`${styles.line} ${styles.reveal}`} style={delay(0.12)} aria-hidden="true">
              {HERO.lead}
            </span>
            <span
              className={`${styles.line} ${styles.rotor} ${styles.reveal}`}
              style={delay(0.24)}
              aria-hidden="true"
            >
              <RotatingWords words={HERO_WORDS} />
            </span>
          </h1>

          <p className={`${styles.sub} ${styles.reveal}`} style={delay(0.4)}>
            {HERO.subheading}
          </p>

          <div className={`${styles.actions} ${styles.reveal}`} style={delay(0.52)}>
            <Button to="/contact">
              Book a demo <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={EXTERNAL_LINKS.register} variant="secondary">
              Get started
            </Button>
          </div>

          <ul className={`${styles.badges} ${styles.reveal}`} style={delay(0.66)}>
            {HERO.badges.map((b) => {
              const Icon = ICONS[b.icon]
              return (
                <li key={b.label} className={styles.badge}>
                  <Icon size={18} aria-hidden="true" />
                  <span>{b.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}