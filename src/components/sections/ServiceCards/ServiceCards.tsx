import { Link } from "react-router";
import { Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProductMark from "../../ui/ProductMark";
import type { ProductKey } from "../../../config/logos";
import styles from "./ServiceCards.module.css";

type Item = {
  icon?: LucideIcon;
  product?: ProductKey;
  title: string;
  text: string;
  points: string[];
  to?: string;
};

type Props = { title: string; intro: string; items: Item[] };

export default function ServiceCards({ title, intro, items }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>{title}</h2>
          <p>{intro}</p>
        </header>

        <div className={styles.grid}>
          {items.map(({ icon: Icon, product, title: t, text, points, to }) => (
            <article key={t} className={styles.card}>
              {product ? (
                <div className={styles.mark}>
                  <ProductMark product={product} size="md" />
                </div>
              ) : (
                Icon && (
                  <span className={styles.icon}>
                    <Icon size={22} aria-hidden="true" />
                  </span>
                )
              )}
              <h3>{t}</h3>
              <p className={styles.text}>{text}</p>
              <ul className={styles.list}>
                {points.map((p) => (
                  <li key={p}>
                    <Check size={16} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              {to && (
                <Link to={to} className={styles.link}>
                  Learn more <ArrowRight size={16} aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}