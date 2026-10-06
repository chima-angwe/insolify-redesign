import ProductHero from "../../components/sections/ProductHero";
import FincoreBenefits from "../../components/sections/FincoreBenefits";
import FincoreModules from "../../components/sections/FincoreModules";
import PricingTeaser from "../../components/sections/PricingTeaser";
import CallToAction from "../../components/sections/CallToAction";
import styles from "./Fincore.module.css";
import ProductMark from '../../components/ui/ProductMark'

const STATS = [
  { value: "12", label: "Modules available" },
  { value: "4-6", label: "Weeks to deploy" },
  { value: "Cloud", label: "Scalable architecture" },
];

const CHIPS = [
  "Core Banking",
  "Cards",
  "InterBanking",
  "Mobile Banking",
  "USSD",
  "Agency Banking",
];

/* Illustration only. It contains no figures, so nothing can be mistaken for real data. */
function Visual() {
  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.visualHead}>
        <strong>Fincore</strong>
        <span>Illustration</span>
      </div>
      <div className={styles.chips}>
        {CHIPS.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
      <div className={styles.skeletonRow}>
        <div />
        <div />
        <div />
      </div>
      <div className={styles.chart}>
        {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className={styles.lines}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

const TIERS = [
  {
    name: "Starter",
    text: "The Fincore base platform, everything you need to go live.",
  },
  {
    name: "Growth",
    text: "Base platform plus the modules most customers add first.",
  },
  {
    name: "Complete",
    text: "Every available module, full platform capability.",
  },
];

export default function Fincore() {
  return (
    <>
      <ProductHero
        icon={<ProductMark product="fincore" size="lg" />}
        name="Fincore"
        headline="A modern core banking platform for financial institutions"
        text="FINCORE™ is a next-generation core banking platform designed by Insolify Limited for microfinance banks, fintech companies and finance houses. Built on secure, scalable cloud architecture, it simplifies operations, supports compliance and works across every banking channel, from teller operations and card management to digital banking and agency banking."
        stats={STATS}
        primary={{ label: "Request a demo", to: "/contact" }}
        secondary={{ label: "Explore modules", href: "#modules" }}
        visual={<Visual />}
      />
      <FincoreBenefits />
      <FincoreModules />
      <PricingTeaser
        product="fincore"
        title="See Fincore pricing"
        intro="Three plans, from the base platform to every module. See what each includes and choose the one that fits your institution."
        tiers={TIERS}
        note="Pricing based on customer limits. Deployment timeline: 4-6 weeks. Valid license (CBN or Partnership for non-compliant) and dedicated domain name required."
        label="View Fincore pricing"
      />
      <CallToAction />
    </>
  );
}
