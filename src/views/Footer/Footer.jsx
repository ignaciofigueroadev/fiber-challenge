import React from "react";

// Styles import
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <h3 className={styles.footerTitle}>Fiber</h3>
        <p>
          With faiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <p>
          Developed by{" "}
          <a
            href="https://portfolio-ignaciofigueroa.vercel.app/"
            target="_blank"
          >
            Ignacio Figueroa
          </a>
        </p>
      </div>
      <ul>
        <h3 className={styles.footerTitle}>Sitemap</h3>
        <li>
          <a href="#">Homepage</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Features</a>
        </li>
      </ul>
      <ul>
        <h3 className={styles.footerTitle}>Resources</h3>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
      <ul>
        <h3 className={styles.footerTitle}>Company</h3>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul>
        <h3 className={styles.footerTitle}>Porfolios</h3>
        <li>
          <a href="#">Sarah Andrews</a>
        </li>
        <li>
          <a href="#">Mathew Giggins</a>
        </li>
        <li>
          <a href="#">Janice Dave</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
