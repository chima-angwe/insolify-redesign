import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import DarkHero from "../../components/sections/DarkHero";
import FeatureCards from "../../components/sections/FeatureCards";
import SettleTransferFlow from "../../components/sections/SettleTransferFlow/SettleTransferFlow";
import MoneyMovement from "../../components/sections/MoneyMovement/MoneyMovement";
import AppDownloadPromo from "../../components/sections/AppDownloadPromo/AppDownloadPromo";
import ExploreProducts from "../../components/sections/ExploreProducts/ExploreProducts";
import FaqSection from "../../components/sections/FaqSection";
import CallToAction from "../../components/sections/CallToAction";
import PricingTeaser from "../../components/sections/PricingTeaser";
import { EXTERNAL_LINKS } from "../../config/links";
import {
  STEPS,
  PAYMENT_METHODS,
  COST_BOX,
  COST_POINTS,
  SAFETY,
  POPULAR_COUNTRIES,
  ALL_COUNTRIES,
  SETTLE_FAQS,
} from "../../data/settle";
import ProductMark from "../../components/ui/ProductMark";
import styles from "./Settle.module.css";

export default function Settle() {
  const [showAll, setShowAll] = useState(false);
  return (
    <>
      <DarkHero
        compact
        mark={<ProductMark product="settle" size="lg" />}
        name="Settle Africa"
        headline="Send money across Africa and beyond"
        text="Fast, flexible and secure international money transfers across Africa and the world. Save time and money when you send money internationally."
        primary={{ label: "Get started", href: EXTERNAL_LINKS.registerSettle }}
        secondary={{ label: "How it works", href: "#how" }}
      />

      <MoneyMovement />

      <SettleTransferFlow steps={STEPS} />

      <FeatureCards
        title="Payment methods for international transfers"
        intro="We offer you a choice of ways to pay for your money transfers. The choice will depend on where you're sending your money from."
        items={PAYMENT_METHODS}
        columns={3}
        tone="tinted"
      />

      {/* cost */}
      <section className={styles.cost}>
        <div className={styles.costInner}>
          <div>
            <h2>How much does it cost to send money internationally?</h2>
            <p className={styles.costLead}>
              We consistently look for ways to keep transfer costs low, so that
              you send as much of your hard-earned money as possible.
            </p>
            <ul className={styles.points}>
              {COST_POINTS.map((p) => (
                <li key={p.bold}>
                  <Check size={18} aria-hidden="true" />
                  <span>
                    {p.before}
                    <strong>{p.bold}</strong>
                    {p.after}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.compare}>
            <p className={styles.big}>{COST_BOX.big}</p>
            <p className={styles.bigLabel}>{COST_BOX.label}</p>
            <dl>
              {COST_BOX.rows.map((r) => (
                <div
                  key={r.label}
                  className={r.highlight ? styles.rowOn : undefined}
                >
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FeatureCards
        title="Your money is safe in our hands"
        intro="We are licensed by government regulators around the world, so you can be sure we meet the highest possible security and compliance standards."
        items={SAFETY}
        columns={3}
        tone="tinted"
        centered
      />

      {/* countries */}
      <section className={styles.countries}>
        <div className={styles.countriesInner}>
          <h2>Where can you send money with Settle Africa?</h2>
          <p className={styles.label}>Popular countries</p>
          <ul className={styles.popular}>
            {POPULAR_COUNTRIES.map((c) => (
              <li key={c.code}>
                <strong>{c.code}</strong>
                <span>{c.name}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={showAll}
            aria-controls="all-countries"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Hide all countries"
              : `Show all ${ALL_COUNTRIES.length} countries`}
            <ChevronDown
              size={18}
              aria-hidden="true"
              className={showAll ? styles.up : undefined}
            />
          </button>

          {showAll && (
            <ul id="all-countries" className={styles.all}>
              {ALL_COUNTRIES.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <AppDownloadPromo product="settle" />

      <PricingTeaser
        product="settle"
        title="Build your Settle Africa plan"
        intro="Choose a monthly transfer platform plan, then add the payout methods you need. Transaction fees may apply."
        tiers={[
          { name: 'Starter', text: 'Transfer platform and compliance essentials.' },
          { name: 'Growth', text: 'Add bank and mobile money transfers.', popular: true },
          { name: 'Complete', text: 'All transfer channels plus the Business API.' },
        ]}
        label="View Settle Africa pricing"
      />

      <ExploreProducts current="settle" />

      <CallToAction
        title="We will be there for you every step of the way, 24/7"
        text="Our app chat support is available 24/7 in 6 different languages to help you with anything you need."
        primary={{ label: "Contact support", to: "/contact" }}
        secondary={null}
      />

      <FaqSection eyebrow="FAQ" title="Common questions." items={SETTLE_FAQS} align="start" indicator="plus" />
    </>
  );
}
