import { Link } from "react-router";
import { ArrowLeftRight, CreditCard, Globe2, ShieldCheck } from "lucide-react";
import { FOOTER_GROUPS } from "../../../config/links";
import styles from "./Footer.module.css";
import Logo from "../../ui/Logo";

const BADGES = [
  { icon: CreditCard, name: 'PCI DSS', description: 'Payment card security' },
  { icon: ArrowLeftRight, name: 'ISO 8583', description: 'Financial messaging' },
  { icon: ShieldCheck, name: 'ISO/IEC 27001', description: 'Information security' },
  { icon: Globe2, name: 'GDPR', description: 'Data protection' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <p>Technology underneath modern financial services.</p>
          </div>

          <div className={styles.columns}>
            {FOOTER_GROUPS.map((g) => (
              <div key={g.title}>
                <h3 className={styles.heading}>{g.title}</h3>
                <ul className={styles.list}>
                  {g.links.map((l) => (
                    <li key={l.to ?? l.href}>
                      {l.to ? (
                        <Link to={l.to} className={styles.link}>{l.label}</Link>
                      ) : l.href ? (
                        <a href={l.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                          {l.label}
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ul className={styles.badges} aria-label="Security and financial standards">
          {BADGES.map(({ icon: Icon, name, description }) => (
            <li className={styles.badge} key={name}>
              <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
              <span><strong>{name}</strong><small>{description}</small></span>
            </li>
          ))}
        </ul>

        <div className={styles.copy}>
          <p>Copyright © {new Date().getFullYear()} Insolify</p>
          <p>Technology for the future of financial services.</p>
        </div>
      </div>
    </footer>
  );
}
