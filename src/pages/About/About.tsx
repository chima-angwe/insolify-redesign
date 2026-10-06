import PageHero from '../../components/sections/PageHero'
import MissionValues from '../../components/sections/MissionValues'
import PressCards from '../../components/sections/PressCards'
import StatsBar from '../../components/sections/StatsBar'
import ServiceCards from '../../components/sections/ServiceCards'
import FeatureCards from '../../components/sections/FeatureCards'
import CultureSplit from '../../components/sections/CultureSplit'
import CallToAction from '../../components/sections/CallToAction'
import { EXTERNAL_LINKS } from '../../config/links'
import {
  INTRO,
  MISSION_VALUES,
  PRESS,
  STATS,
  SERVICES,
  WHY,
  BELIEFS,
  IMPACT,
} from '../../data/about'

export default function About() {
  return (
    <>
      <PageHero title={INTRO.title} lead={INTRO.lead} text={INTRO.text} />
      <MissionValues items={MISSION_VALUES} />
      <PressCards
        title="In the press"
        intro="A selection of coverage and commentary that mentions Insolify and the markets we serve."
        items={PRESS}
      />
      <StatsBar title="By the numbers" stats={STATS} />
      <ServiceCards
        title="Our services and products"
        intro="Comprehensive solutions designed to transform your business operations."
        items={SERVICES}
      />
      <FeatureCards title="Why choose Insolify" items={WHY} columns={3} tone="tinted" centered />
      <CultureSplit
        title="Our culture and values"
        beliefsTitle="We believe in"
        beliefs={BELIEFS}
        impactTitle="Our impact"
        impact={IMPACT}
      />
      <CallToAction
        title="Join us on this journey"
        text="Whether you're looking to transform your business or join our team, we'd love to work with you."
        primary={{ label: 'Get started', href: EXTERNAL_LINKS.register }}
        secondary={{ label: 'Talk to us', to: '/contact' }}
      />
    </>
  )
}