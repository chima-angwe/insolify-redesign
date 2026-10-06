import { Link } from 'react-router'
import { ArrowRight, Check } from 'lucide-react'
import ProductMark from '../../ui/ProductMark'
import { PRODUCTS } from '../../../data/products'
import styles from './Products.module.css'

export default function Products() {
  return (
    <section className={styles.section} id="products">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Our products</h2>
          <p>Core banking, AI and payments from one team.</p>
        </header>

        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              to={p.to}
              className={`${styles.card} ${p.featured ? styles.featured : ''}`}
            >
              <div className={styles.top}>
                <ProductMark product={p.id} size="md" />
                {p.featured && <span className={styles.tag}>Core product</span>}
              </div>

              <p className={styles.category}>{p.category}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.desc}>{p.description}</p>

              {p.points && (
                <ul className={styles.points}>
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Check size={16} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              )}

              <span className={styles.more}>
                Learn more <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}