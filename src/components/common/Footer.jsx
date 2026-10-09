import React from "react";
import styles from "./Footer.module.css";
import { Globe } from "./Icons";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.leftNav}>
          <span>© 2026 Airbnb, Inc.</span>
          <span className={styles.dot}>·</span>
          <a href="#privacy" className={styles.link}>Privacy</a>
          <span className={styles.dot}>·</span>
          <a href="#terms" className={styles.link}>Terms</a>
          <span className={styles.dot}>·</span>
          <a href="#sitemap" className={styles.link}>Sitemap</a>
          <span className={styles.dot}>·</span>
          <a href="#company" className={styles.link}>Company details</a>
        </div>

        <div className={styles.rightNav}>
          <button type="button" className={styles.prefBtn}>
            <Globe size={16} />
            <span>English (IN)</span>
          </button>
          <button type="button" className={styles.prefBtn}>
            <span>₹ INR</span>
          </button>
        </div>
      </div>
    </footer>);

};

export default Footer;