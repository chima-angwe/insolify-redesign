import { ArrowRight, Cloud, Landmark, Sparkles, WalletCards } from 'lucide-react'
import { Link } from 'react-router'
import type { Product } from '../../../data/products'
import styles from './ExploreProducts.module.css'

const products: (Product & { icon: typeof Landmark; teaser: string })[] = [
  { id: 'fincore', name: 'Fincore', category: 'Core banking', description: '', to: '/fincore', icon: Landmark, teaser: 'Banking operations, payments and digital channels for institutions.' },
  { id: 'safi', name: 'Safi AI', category: 'Financial intelligence', description: '', to: '/safi', icon: Sparkles, teaser: 'AI for financial context, fraud signals and multilingual service.' },
  { id: 'settle', name: 'Settle Africa', category: 'Payments across Africa', description: '', to: '/settle', icon: WalletCards, teaser: 'A clear way to send, receive and follow money across borders.' },
  { id: 'skynet', name: 'Skynet', category: 'Cloud infrastructure', description: '', to: '/skynet', icon: Cloud, teaser: 'Cloud compute, GPU resources and provisioning for digital services.' },
]

export default function ExploreProducts({ current }: { current: Product['id'] }) {
  return (
    <section className={styles.section} aria-labelledby="explore-products-title">
      <div className={styles.inner}>
        <header className={styles.header}><p>The Insolify platform</p><h2 id="explore-products-title">Explore more of what we build.</h2></header>
        <div className={styles.grid}>
          {products.filter((product) => product.id !== current).map(({ id, name, category, to, icon: Icon, teaser }) => (
            <Link className={styles.card} to={to} key={id}>
              <span className={styles.icon}><Icon size={22} aria-hidden="true" /></span>
              <span className={styles.category}>{category}</span>
              <h3>{name}</h3>
              <p>{teaser}</p>
              <span className={styles.link}>Explore {name}<ArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
