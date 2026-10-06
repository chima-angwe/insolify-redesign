import { useState } from "react";
import Button from "../../ui/Button";
import { ICONS } from "../../../lib/icons";
import { formatMoney } from "../../../lib/format";
import type { PricingProductData } from "../../../data/pricing";
import ProductMark from "../../ui/ProductMark";
import styles from "./PricingEstimator.module.css";

type Props = { product: PricingProductData };

export default function PricingEstimator({ product }: Props) {
  const { currency, period, modules } = product;
  const monthly = period === "month";
  const suffix = monthly ? "/mo" : "/yr";
  const discount = product.annualDiscount ?? 0;

  const [selected, setSelected] = useState<string[]>(() =>
    modules.filter((m) => m.base).map((m) => m.id),
  );
  const [annual, setAnnual] = useState(false);

  const factor = monthly && annual ? 1 - discount : 1;
  const chosen = modules.filter((m) => selected.includes(m.id));
  const setup = chosen.reduce((sum, m) => sum + m.setup, 0);
  const recurring = chosen.reduce((sum, m) => sum + m.price, 0) * factor;
  const total = monthly ? recurring : setup + recurring;
  const money = (n: number) => formatMoney(n, currency);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  return (
    <section className={styles.section} aria-label={`${product.name} pricing`}>
      <header className={styles.head}>
        <ProductMark product={product.id} size="lg" />
        <div>
          <h2>{product.name}</h2>
          <p>{product.tagline}</p>
        </div>
      </header>
      <p className={styles.hint}>
        Build a custom estimate. Check off modules and watch the total update.
      </p>

      <div className={styles.grid}>
        <ul className={styles.list}>
          {modules.map((m) => {
            const Icon = ICONS[m.icon];
            const on = selected.includes(m.id);
            return (
              <li key={m.id}>
                <label className={`${styles.row} ${on ? styles.on : ""}`}>
                  <input
                    type="checkbox"
                    className={styles.check}
                    checked={on}
                    disabled={m.base}
                    onChange={() => toggle(m.id)}
                  />
                  <span className={styles.rowIcon}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className={styles.body}>
                    <span className={styles.top}>
                      <strong>{m.name}</strong>
                      {m.base && <em className={styles.included}>Included</em>}
                      {m.popular && !m.base && (
                        <em className={styles.popular}>Popular</em>
                      )}
                    </span>
                    <span className={styles.desc}>{m.description}</span>
                    <span className={styles.tags}>
                      {m.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </span>
                  </span>
                  <span className={styles.price}>
                    {m.setup > 0 && <small>{money(m.setup)} setup</small>}
                    <strong>
                      {money(m.price)}
                      {suffix}
                    </strong>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        <aside
          id="estimate"
          className={styles.panel}
          aria-label="Your estimate"
        >
          <h3>Your estimate</h3>
          <p className={styles.note}>{product.estimateNote}</p>

          <ul className={styles.lines}>
            {chosen.map((m) => (
              <li key={m.id}>
                <span>
                  {m.name}
                  {m.base && <small> (base)</small>}
                </span>
                <span>{money(m.price * factor)}</span>
              </li>
            ))}
          </ul>

          {monthly && (
            <label className={styles.switch}>
              <input
                type="checkbox"
                role="switch"
                checked={annual}
                onChange={(e) => setAnnual(e.target.checked)}
              />
              <span>Annual billing</span>
              {annual && <em>Saves {Math.round(discount * 100)}%</em>}
            </label>
          )}

          <dl className={styles.sums}>
            {setup > 0 && (
              <div>
                <dt>One-time setup</dt>
                <dd>{money(setup)}</dd>
              </div>
            )}
            <div>
              <dt>{monthly ? "Monthly subtotal" : "Annual subtotal"}</dt>
              <dd>{money(recurring)}</dd>
            </div>
            {monthly && annual && (
              <div>
                <dt>Billed annually</dt>
                <dd>{money(recurring * 12)}</dd>
              </div>
            )}
          </dl>

          <div className={styles.total} aria-live="polite">
            <span>Estimated total</span>
            <strong>{money(total)}</strong>
            <small>
              {monthly
                ? setup > 0
                  ? `per month, plus ${money(setup)} setup`
                  : "per month"
                : "setup + annual"}
            </small>
          </div>

          <div className={styles.actions}>
            <Button to={product.getStarted.to} href={product.getStarted.href}>
              Get started
            </Button>
            <Button to="/contact" variant="secondary">
              Talk to sales
            </Button>
          </div>

          <p className={styles.disclaimer}>
            This is an estimate. Final pricing may vary based on deployment,
            customization, and contract terms.
          </p>
        </aside>
      </div>

      {/* Mobile only: keeps the running total in view while checking modules */}
      <div className={styles.bar}>
        <div>
          <span>Estimated total</span>
          <strong>
            {money(total)}
            {monthly ? "/mo" : ""}
          </strong>
        </div>
        <a href="#estimate">View estimate</a>
      </div>
    </section>
  );
}
