import { Link } from "react-router";
import { FOOTER_GROUPS, TRUST_POINTS } from "../../../config/links";
import styles from "./Footer.module.css";
import Logo from "../../ui/Logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
      <div className={styles.brand}>
        <Logo />
      </div>
        <ul className={styles.trust}>
          {TRUST_POINTS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <div className={styles.columns}>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className={styles.heading}>{g.title}</h3>
              <ul className={styles.list}>
                {g.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className={styles.link}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Insolify. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
