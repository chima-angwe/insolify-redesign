import Hero from '../../components/sections/Hero'
import LogoStrip from '../../components/sections/LogoStrip'
import Products from '../../components/sections/Products'
import FincoreCapabilities from '../../components/sections/FincoreCapabilities'
import Security from '../../components/sections/Security'
import CallToAction from '../../components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Products />
      <FincoreCapabilities />
      <Security />
      <CallToAction />
    </>
  )
}