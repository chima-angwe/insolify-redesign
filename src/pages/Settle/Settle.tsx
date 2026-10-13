import { useState } from "react";
import { Check, ChevronDown, Smartphone } from "lucide-react";
import DarkHero from "../../components/sections/DarkHero";
import type { StripCard } from "../../components/sections/StripCards/StripCards";
import FeatureCards from "../../components/sections/FeatureCards";
import Steps from "../../components/sections/Steps";
import FaqSection from "../../components/sections/FaqSection";
import CallToAction from "../../components/sections/CallToAction";
import PricingTeaser from "../../components/sections/PricingTeaser";
import Button from "../../components/ui/Button";
import { EXTERNAL_LINKS, STORE_LINKS } from "../../config/links";
import { PRICING } from "../../data/pricing";
import {
  SEND_METHODS,
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

const CARDS: StripCard[] = [
  {
    tone: "yellow",
    label: "Reach",
    title: "Across Africa",
    text: "Local and cross-border",
    motif: "globe",
  },
  {
    tone: "light",
    label: "Bank transfer",
    title: "Straight to the bank",
    text: "You only need your receiver's details",
    motif: "transfer",
  },
  {
    tone: "dark",
    label: "Cash pickup",
    title: "Collected in cash",
    text: "At any pickup location",
    motif: "card",
  },
  {
    tone: "light",
    label: "Mobile money",
    title: "Instant transfer",
    text: "To registered wallets",
    motif: "phone",
  },
  {
    tone: "yellow",
    label: "Airtime",
    title: "Top up any phone",
    text: "No extra fees",
    motif: "keypad",
  },
];


export default function Settle() {
  const [showAll, setShowAll] = useState(false);
  const hasStores = Boolean(STORE_LINKS.settleIos || STORE_LINKS.settleAndroid);

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
        cards={CARDS}
      />

      <FeatureCards
        title="Ways to send money internationally"
        intro="The cost and speed of a money transfer depends on the receiving country, the receive method as well as how it is paid for."
        items={SEND_METHODS}
        columns={4}
        tone="tinted"
      />

      <Steps
        id="how"
        title="How to transfer money internationally"
        steps={STEPS}
      />

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

      {/* app */}
      <section className={styles.app}>
        <div className={styles.appInner}>
          <span className={styles.appIcon}>
            <Smartphone size={26} aria-hidden="true" />
          </span>
          <h2>A fast and secure way to send money on the go</h2>
          <p>
            Download our app for free to send money online in minutes to over
            130 other countries. Track your payments and view your transfer
            history from anywhere.
          </p>
          <div className={styles.stores}>
            {STORE_LINKS.settleIos && (
              <Button href={STORE_LINKS.settleIos}>
                Download on the App Store
              </Button>
            )}
            {STORE_LINKS.settleAndroid && (
              <Button href={STORE_LINKS.settleAndroid}>
                Get it on Google Play
              </Button>
            )}
            {!hasStores && (
              <Button href={EXTERNAL_LINKS.registerSettle}>Get started</Button>
            )}
          </div>
        </div>
      </section>

      <PricingTeaser
        product="settle"
        title="Settle Africa for business"
        intro="Add Settle Africa to your platform with a monthly plan, then add only the transfer modules you need."
        tiers={PRICING.settle.tiers.map((t) => ({
          name: t.name,
          text: t.blurb,
        }))}
        label="View Settle Africa pricing"
      />

      <CallToAction
        title="We will be there for you every step of the way, 24/7"
        text="Our app chat support is available 24/7 in 6 different languages to help you with anything you need."
        primary={{ label: "Contact support", to: "/contact" }}
        secondary={null}
      />

      <FaqSection items={SETTLE_FAQS} tone="tinted" />
    </>
  );
}
