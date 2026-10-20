import { Code2, Cpu, Globe2, HardDrive, Network, Server } from 'lucide-react'
import DarkHero from '../../components/sections/DarkHero'
import ProductMark from '../../components/ui/ProductMark'
import ExploreProducts from '../../components/sections/ExploreProducts/ExploreProducts'
import SkynetConfigurator from '../../components/sections/SkynetConfigurator/SkynetConfigurator'
import CallToAction from '../../components/sections/CallToAction'
import { SkynetArchitectures, SkynetBuilderResources, SkynetMailHosting, SkynetSimpleHosting } from './SkynetPageSections'
import AppDownloadPromo from '../../components/sections/AppDownloadPromo/AppDownloadPromo'
import FaqSection from '../../components/sections/FaqSection'
import { SKYNET_FAQS } from '../../data/skynet'
import styles from './Skynet.module.css'

const BUILDING_BLOCKS = [
  { icon: Server, title: 'Cloud servers', text: 'Compute resources for applications and digital services.' },
  { icon: Cpu, title: 'GPU compute', text: 'Accelerated compute options for AI and other workloads.' },
  { icon: HardDrive, title: 'Storage', text: 'Storage resources for data and services.' },
  { icon: Network, title: 'Networking', text: 'Connect infrastructure components and services.' },
  { icon: Globe2, title: 'Domains', text: 'Manage domains alongside infrastructure needs.' },
  { icon: Code2, title: 'Developer platform', text: 'Build and operate digital services with developer infrastructure.' },
]

function SkynetProducts() {
  return (
    <section className={styles.products} id="skynet-products" aria-labelledby="skynet-products-title">
      <div className={styles.productsInner}>
        <header className={styles.productsHeader}>
          <p className={styles.productsEyebrow}>Skynet products</p>
          <h2 id="skynet-products-title">Infrastructure building blocks for your workloads.</h2>
          <p>Explore cloud and developer infrastructure. Availability, configuration and pricing are confirmed for each deployment.</p>
        </header>
        <div className={styles.productGrid}>
          {BUILDING_BLOCKS.map(({ icon: Icon, title, text }, index) => (
            <article className={styles.productCard} key={title} style={{ '--card-index': index } as React.CSSProperties}>
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Skynet() {
  return (
    <>
      <DarkHero
        compact
        mark={<ProductMark product="skynet" size="lg" />}
        name="Skynet"
        headline="Cloud infrastructure for what comes next"
        text="Skynet brings cloud compute, GPU infrastructure and provisioning together for modern digital services."
        primary={{ label: 'Talk to our team', to: '/contact' }}
        secondary={{ label: 'Explore the infrastructure', href: '#skynet-products' }}
      />

      <SkynetProducts />
      <SkynetArchitectures />
      <SkynetConfigurator />
      <SkynetMailHosting />
      <SkynetSimpleHosting />
      <SkynetBuilderResources />
      <AppDownloadPromo product="skynet" />
      <ExploreProducts current="skynet" />
      <FaqSection eyebrow="FAQ" title="Common questions." items={SKYNET_FAQS} align="start" indicator="plus" />

      <CallToAction
        title="Build on Skynet"
        text="Talk with our team about cloud compute, GPU infrastructure and provisioning for your digital services."
        primary={{ label: 'Talk to our team', to: '/contact' }}
      />
    </>
  )
}
