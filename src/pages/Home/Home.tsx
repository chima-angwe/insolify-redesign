import Hero from '../../components/sections/Hero'
import LogoStrip from '../../components/sections/LogoStrip'
import TrustRow from '../../components/sections/TrustRow'
import FeatureShowcase from '../../components/sections/FeatureShowcase'
import Products from '../../components/sections/Products'
import CallToAction from '../../components/sections/CallToAction'
import HomeHighlights from '../../components/sections/HomeHighlights/HomeHighlights'
import PressCards from '../../components/sections/PressCards'
import { PRESS } from '../../data/about'
import SafiChatPreview from '../../components/sections/SafiChatPreview/SafiChatPreview'
import ProductShowcase from '../../components/sections/ProductShowcase/ProductShowcase'

export default function Home() {
  return (
    <>
      <Hero />
      <SafiChatPreview />
      <LogoStrip />
      <HomeHighlights />
      <TrustRow />
      <FeatureShowcase />
      <Products />
      <ProductShowcase />
      <PressCards
        title="In the press"
        intro="Coverage and conversation around financial technology, banking platforms and AI."
        items={PRESS}
      />
      <CallToAction />
    </>
  )
}
