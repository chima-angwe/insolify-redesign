import Hero from '../../components/sections/Hero'
import LogoStrip from '../../components/sections/LogoStrip'
import TrustRow from '../../components/sections/TrustRow'
import FeatureShowcase from '../../components/sections/FeatureShowcase'
import Products from '../../components/sections/Products'
import CallToAction from '../../components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <TrustRow />
      <FeatureShowcase />
      <Products />
      <CallToAction />
    </>
  )
}