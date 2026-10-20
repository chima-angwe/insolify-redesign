import DarkHero from '../DarkHero'
import { HERO } from '../../../data/hero'

export default function Hero() {
  return (
    <DarkHero
      headline={HERO.headline}
      text={HERO.subheading}
      primary={{ label: 'Book a demo', to: '/contact' }}
      secondary={{ label: 'Explore Fincore', to: '/fincore' }}
    />
  )
}
